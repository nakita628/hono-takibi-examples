import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1ConnectedAppsClientsClientIdQueryKey(
  args: InferRequestType<(typeof client.v1.connected_apps.clients)[':client_id']['$get']>,
) {
  return ['v1', '/v1/connected_apps/clients/:client_id', args] as const
}

export function getV1ConnectedAppsClientsClientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.connected_apps.clients)[':client_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.connected_apps.clients)[':client_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.connected_apps.clients)[':client_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConnectedAppsClientsClientIdQueryKey>
  >({
    queryKey: getV1ConnectedAppsClientsClientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.connected_apps.clients[':client_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ConnectedAppsClientsClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.connected_apps.clients)[':client_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.connected_apps.clients)[':client_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.connected_apps.clients)[':client_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ConnectedAppsClientsClientIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ConnectedAppsClientsClientIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1ConnectedAppsClientsClientIdMutationKey() {
  return ['v1', '/v1/connected_apps/clients/:client_id', 'PUT'] as const
}

export function getPutV1ConnectedAppsClientsClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.connected_apps.clients)[':client_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.connected_apps.clients)[':client_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ConnectedAppsClientsClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.connected_apps.clients)[':client_id']['$put']>,
    ) {
      return parseResponse(client.v1.connected_apps.clients[':client_id'].$put(args, options))
    },
  })
}

export function createPutV1ConnectedAppsClientsClientId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.connected_apps.clients)[':client_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.connected_apps.clients)[':client_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ConnectedAppsClientsClientIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1ConnectedAppsClientsClientIdMutationKey() {
  return ['v1', '/v1/connected_apps/clients/:client_id', 'DELETE'] as const
}

export function getDeleteV1ConnectedAppsClientsClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.connected_apps.clients)[':client_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.connected_apps.clients)[':client_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ConnectedAppsClientsClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.connected_apps.clients)[':client_id']['$delete']>,
    ) {
      return parseResponse(client.v1.connected_apps.clients[':client_id'].$delete(args, options))
    },
  })
}

export function createDeleteV1ConnectedAppsClientsClientId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.connected_apps.clients)[':client_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.connected_apps.clients)[':client_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ConnectedAppsClientsClientIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ConnectedAppsClientsSearchMutationKey() {
  return ['v1', '/v1/connected_apps/clients/search', 'POST'] as const
}

export function getPostV1ConnectedAppsClientsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connected_apps.clients.search.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connected_apps.clients.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectedAppsClientsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connected_apps.clients.search.$post>) {
      return parseResponse(client.v1.connected_apps.clients.search.$post(args, options))
    },
  })
}

export function createPostV1ConnectedAppsClientsSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connected_apps.clients.search.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connected_apps.clients.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ConnectedAppsClientsSearchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ConnectedAppsClientsMutationKey() {
  return ['v1', '/v1/connected_apps/clients', 'POST'] as const
}

export function getPostV1ConnectedAppsClientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connected_apps.clients.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connected_apps.clients.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectedAppsClientsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connected_apps.clients.$post>) {
      return parseResponse(client.v1.connected_apps.clients.$post(args, options))
    },
  })
}

export function createPostV1ConnectedAppsClients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.connected_apps.clients.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connected_apps.clients.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ConnectedAppsClientsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ConnectedAppsClientsClientIdSecretsRotateStartMutationKey() {
  return ['v1', '/v1/connected_apps/clients/:client_id/secrets/rotate/start', 'POST'] as const
}

export function getPostV1ConnectedAppsClientsClientIdSecretsRotateStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.connected_apps.clients)[':client_id']['secrets']['rotate']['start']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.connected_apps.clients)[':client_id']['secrets']['rotate']['start']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectedAppsClientsClientIdSecretsRotateStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.connected_apps.clients)[':client_id']['secrets']['rotate']['start']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.connected_apps.clients[':client_id'].secrets.rotate.start.$post(args, options),
      )
    },
  })
}

export function createPostV1ConnectedAppsClientsClientIdSecretsRotateStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.connected_apps.clients)[':client_id']['secrets']['rotate']['start']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.connected_apps.clients)[':client_id']['secrets']['rotate']['start']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ConnectedAppsClientsClientIdSecretsRotateStartMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ConnectedAppsClientsClientIdSecretsRotateCancelMutationKey() {
  return ['v1', '/v1/connected_apps/clients/:client_id/secrets/rotate/cancel', 'POST'] as const
}

export function getPostV1ConnectedAppsClientsClientIdSecretsRotateCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.connected_apps.clients)[':client_id']['secrets']['rotate']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.connected_apps.clients)[':client_id']['secrets']['rotate']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectedAppsClientsClientIdSecretsRotateCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.connected_apps.clients)[':client_id']['secrets']['rotate']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.connected_apps.clients[':client_id'].secrets.rotate.cancel.$post(args, options),
      )
    },
  })
}

export function createPostV1ConnectedAppsClientsClientIdSecretsRotateCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.connected_apps.clients)[':client_id']['secrets']['rotate']['cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.connected_apps.clients)[':client_id']['secrets']['rotate']['cancel']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1ConnectedAppsClientsClientIdSecretsRotateCancelMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ConnectedAppsClientsClientIdSecretsRotateMutationKey() {
  return ['v1', '/v1/connected_apps/clients/:client_id/secrets/rotate', 'POST'] as const
}

export function getPostV1ConnectedAppsClientsClientIdSecretsRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.connected_apps.clients)[':client_id']['secrets']['rotate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.connected_apps.clients)[':client_id']['secrets']['rotate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectedAppsClientsClientIdSecretsRotateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.connected_apps.clients)[':client_id']['secrets']['rotate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.connected_apps.clients[':client_id'].secrets.rotate.$post(args, options),
      )
    },
  })
}

export function createPostV1ConnectedAppsClientsClientIdSecretsRotate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.connected_apps.clients)[':client_id']['secrets']['rotate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.connected_apps.clients)[':client_id']['secrets']['rotate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ConnectedAppsClientsClientIdSecretsRotateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1B2bScimOrganizationIdConnectionConnectionIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/b2b/scim/:organization_id/connection/:connection_id', keyArgs] as const
}

export function getV1B2bScimOrganizationIdConnectionConnectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1B2bScimOrganizationIdConnectionConnectionIdQueryKey>
  >({
    queryKey: getV1B2bScimOrganizationIdConnectionConnectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.b2b.scim[':organization_id'].connection[':connection_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1B2bScimOrganizationIdConnectionConnectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1B2bScimOrganizationIdConnectionConnectionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1B2bScimOrganizationIdConnectionConnectionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutV1B2bScimOrganizationIdConnectionConnectionIdMutationKey() {
  return ['v1', '/v1/b2b/scim/:organization_id/connection/:connection_id', 'PUT'] as const
}

export function getPutV1B2bScimOrganizationIdConnectionConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1B2bScimOrganizationIdConnectionConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.b2b.scim[':organization_id'].connection[':connection_id'].$put(args, options),
      )
    },
  })
}

export function createPutV1B2bScimOrganizationIdConnectionConnectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1B2bScimOrganizationIdConnectionConnectionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1B2bScimOrganizationIdConnectionConnectionIdMutationKey() {
  return ['v1', '/v1/b2b/scim/:organization_id/connection/:connection_id', 'DELETE'] as const
}

export function getDeleteV1B2bScimOrganizationIdConnectionConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1B2bScimOrganizationIdConnectionConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.b2b.scim[':organization_id'].connection[':connection_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1B2bScimOrganizationIdConnectionConnectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1B2bScimOrganizationIdConnectionConnectionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bScimOrganizationIdConnectionConnectionIdRotateStartMutationKey() {
  return [
    'v1',
    '/v1/b2b/scim/:organization_id/connection/:connection_id/rotate/start',
    'POST',
  ] as const
}

export function getPostV1B2bScimOrganizationIdConnectionConnectionIdRotateStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['rotate']['start']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['rotate']['start']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bScimOrganizationIdConnectionConnectionIdRotateStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['rotate']['start']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.b2b.scim[':organization_id'].connection[':connection_id'].rotate.start.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostV1B2bScimOrganizationIdConnectionConnectionIdRotateStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['rotate']['start']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['rotate']['start']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1B2bScimOrganizationIdConnectionConnectionIdRotateStartMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bScimOrganizationIdConnectionConnectionIdRotateCompleteMutationKey() {
  return [
    'v1',
    '/v1/b2b/scim/:organization_id/connection/:connection_id/rotate/complete',
    'POST',
  ] as const
}

export function getPostV1B2bScimOrganizationIdConnectionConnectionIdRotateCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['rotate']['complete']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['rotate']['complete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bScimOrganizationIdConnectionConnectionIdRotateCompleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['rotate']['complete']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.b2b.scim[':organization_id'].connection[':connection_id'].rotate.complete.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostV1B2bScimOrganizationIdConnectionConnectionIdRotateComplete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['rotate']['complete']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['rotate']['complete']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1B2bScimOrganizationIdConnectionConnectionIdRotateCompleteMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bScimOrganizationIdConnectionConnectionIdRotateCancelMutationKey() {
  return [
    'v1',
    '/v1/b2b/scim/:organization_id/connection/:connection_id/rotate/cancel',
    'POST',
  ] as const
}

export function getPostV1B2bScimOrganizationIdConnectionConnectionIdRotateCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['rotate']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['rotate']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bScimOrganizationIdConnectionConnectionIdRotateCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['rotate']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.b2b.scim[':organization_id'].connection[':connection_id'].rotate.cancel.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostV1B2bScimOrganizationIdConnectionConnectionIdRotateCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['rotate']['cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['rotate']['cancel']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1B2bScimOrganizationIdConnectionConnectionIdRotateCancelMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1B2bScimOrganizationIdConnectionQueryKey(
  args: InferRequestType<(typeof client.v1.b2b.scim)[':organization_id']['connection']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/b2b/scim/:organization_id/connection', keyArgs] as const
}

export function getV1B2bScimOrganizationIdConnectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.b2b.scim)[':organization_id']['connection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.b2b.scim)[':organization_id']['connection']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.b2b.scim)[':organization_id']['connection']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1B2bScimOrganizationIdConnectionQueryKey>
  >({
    queryKey: getV1B2bScimOrganizationIdConnectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.b2b.scim[':organization_id'].connection.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1B2bScimOrganizationIdConnection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.b2b.scim)[':organization_id']['connection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.b2b.scim)[':organization_id']['connection']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.b2b.scim)[':organization_id']['connection']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1B2bScimOrganizationIdConnectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1B2bScimOrganizationIdConnectionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1B2bScimOrganizationIdConnectionMutationKey() {
  return ['v1', '/v1/b2b/scim/:organization_id/connection', 'POST'] as const
}

export function getPostV1B2bScimOrganizationIdConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.b2b.scim)[':organization_id']['connection']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.b2b.scim)[':organization_id']['connection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bScimOrganizationIdConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.b2b.scim)[':organization_id']['connection']['$post']
      >,
    ) {
      return parseResponse(client.v1.b2b.scim[':organization_id'].connection.$post(args, options))
    },
  })
}

export function createPostV1B2bScimOrganizationIdConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.b2b.scim)[':organization_id']['connection']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.b2b.scim)[':organization_id']['connection']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bScimOrganizationIdConnectionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bOrganizationsMutationKey() {
  return ['v1', '/v1/b2b/organizations', 'POST'] as const
}

export function getPostV1B2bOrganizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.organizations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.organizations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bOrganizationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.organizations.$post>) {
      return parseResponse(client.v1.b2b.organizations.$post(args, options))
    },
  })
}

export function createPostV1B2bOrganizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.organizations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.organizations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bOrganizationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1B2bOrganizationsOrganizationIdQueryKey(
  args: InferRequestType<(typeof client.v1.b2b.organizations)[':organization_id']['$get']>,
) {
  return ['v1', '/v1/b2b/organizations/:organization_id', args] as const
}

export function getV1B2bOrganizationsOrganizationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.b2b.organizations)[':organization_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.b2b.organizations)[':organization_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.b2b.organizations)[':organization_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1B2bOrganizationsOrganizationIdQueryKey>
  >({
    queryKey: getV1B2bOrganizationsOrganizationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.b2b.organizations[':organization_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1B2bOrganizationsOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.b2b.organizations)[':organization_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.b2b.organizations)[':organization_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.b2b.organizations)[':organization_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1B2bOrganizationsOrganizationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1B2bOrganizationsOrganizationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1B2bOrganizationsOrganizationIdMutationKey() {
  return ['v1', '/v1/b2b/organizations/:organization_id', 'PUT'] as const
}

export function getPutV1B2bOrganizationsOrganizationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.b2b.organizations)[':organization_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.b2b.organizations)[':organization_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1B2bOrganizationsOrganizationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.b2b.organizations)[':organization_id']['$put']>,
    ) {
      return parseResponse(client.v1.b2b.organizations[':organization_id'].$put(args, options))
    },
  })
}

export function createPutV1B2bOrganizationsOrganizationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.b2b.organizations)[':organization_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.b2b.organizations)[':organization_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1B2bOrganizationsOrganizationIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1B2bOrganizationsOrganizationIdMutationKey() {
  return ['v1', '/v1/b2b/organizations/:organization_id', 'DELETE'] as const
}

export function getDeleteV1B2bOrganizationsOrganizationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.b2b.organizations)[':organization_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.b2b.organizations)[':organization_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1B2bOrganizationsOrganizationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.b2b.organizations)[':organization_id']['$delete']>,
    ) {
      return parseResponse(client.v1.b2b.organizations[':organization_id'].$delete(args, options))
    },
  })
}

export function createDeleteV1B2bOrganizationsOrganizationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.b2b.organizations)[':organization_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.b2b.organizations)[':organization_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1B2bOrganizationsOrganizationIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bOrganizationsSearchMutationKey() {
  return ['v1', '/v1/b2b/organizations/search', 'POST'] as const
}

export function getPostV1B2bOrganizationsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.organizations.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.organizations.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bOrganizationsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.organizations.search.$post>) {
      return parseResponse(client.v1.b2b.organizations.search.$post(args, options))
    },
  })
}

export function createPostV1B2bOrganizationsSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.organizations.search.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.organizations.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bOrganizationsSearchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1B2bOrganizationsOrganizationIdMetricsQueryKey(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['metrics']['$get']
  >,
) {
  return ['v1', '/v1/b2b/organizations/:organization_id/metrics', args] as const
}

export function getV1B2bOrganizationsOrganizationIdMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.b2b.organizations)[':organization_id']['metrics']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.b2b.organizations)[':organization_id']['metrics']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1B2bOrganizationsOrganizationIdMetricsQueryKey>
  >({
    queryKey: getV1B2bOrganizationsOrganizationIdMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.b2b.organizations[':organization_id'].metrics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1B2bOrganizationsOrganizationIdMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.b2b.organizations)[':organization_id']['metrics']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['metrics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.organizations)[':organization_id']['metrics']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1B2bOrganizationsOrganizationIdMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1B2bOrganizationsOrganizationIdMetricsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1B2bOrganizationsOrganizationIdConnectedAppsQueryKey(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/b2b/organizations/:organization_id/connected_apps', keyArgs] as const
}

export function getV1B2bOrganizationsOrganizationIdConnectedAppsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1B2bOrganizationsOrganizationIdConnectedAppsQueryKey>
  >({
    queryKey: getV1B2bOrganizationsOrganizationIdConnectedAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.b2b.organizations[':organization_id'].connected_apps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1B2bOrganizationsOrganizationIdConnectedApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1B2bOrganizationsOrganizationIdConnectedAppsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1B2bOrganizationsOrganizationIdConnectedAppsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1B2bOrganizationsOrganizationIdConnectedAppsConnectedAppIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps'][':connected_app_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/connected_apps/:connected_app_id',
    keyArgs,
  ] as const
}

export function getV1B2bOrganizationsOrganizationIdConnectedAppsConnectedAppIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps'][':connected_app_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps'][':connected_app_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps'][':connected_app_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1B2bOrganizationsOrganizationIdConnectedAppsConnectedAppIdQueryKey>
  >({
    queryKey: getV1B2bOrganizationsOrganizationIdConnectedAppsConnectedAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.b2b.organizations[':organization_id'].connected_apps[':connected_app_id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1B2bOrganizationsOrganizationIdConnectedAppsConnectedAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps'][':connected_app_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps'][':connected_app_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps'][':connected_app_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1B2bOrganizationsOrganizationIdConnectedAppsConnectedAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1B2bOrganizationsOrganizationIdConnectedAppsConnectedAppIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV1B2bOrganizationsOrganizationIdExternalIdMutationKey() {
  return ['v1', '/v1/b2b/organizations/:organization_id/external_id', 'DELETE'] as const
}

export function getDeleteV1B2bOrganizationsOrganizationIdExternalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['external_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.b2b.organizations)[':organization_id']['external_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1B2bOrganizationsOrganizationIdExternalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.b2b.organizations)[':organization_id']['external_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.b2b.organizations[':organization_id'].external_id.$delete(args, options),
      )
    },
  })
}

export function createDeleteV1B2bOrganizationsOrganizationIdExternalId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.organizations)[':organization_id']['external_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.b2b.organizations)[':organization_id']['external_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1B2bOrganizationsOrganizationIdExternalIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1B2bOrganizationsOrganizationIdMembersMemberIdMutationKey() {
  return ['v1', '/v1/b2b/organizations/:organization_id/members/:member_id', 'PUT'] as const
}

export function getPutV1B2bOrganizationsOrganizationIdMembersMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1B2bOrganizationsOrganizationIdMembersMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.b2b.organizations[':organization_id'].members[':member_id'].$put(args, options),
      )
    },
  })
}

export function createPutV1B2bOrganizationsOrganizationIdMembersMemberId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1B2bOrganizationsOrganizationIdMembersMemberIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1B2bOrganizationsOrganizationIdMembersMemberIdMutationKey() {
  return ['v1', '/v1/b2b/organizations/:organization_id/members/:member_id', 'DELETE'] as const
}

export function getDeleteV1B2bOrganizationsOrganizationIdMembersMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1B2bOrganizationsOrganizationIdMembersMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.b2b.organizations[':organization_id'].members[':member_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteV1B2bOrganizationsOrganizationIdMembersMemberId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1B2bOrganizationsOrganizationIdMembersMemberIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1B2bOrganizationsOrganizationIdMembersMemberIdReactivateMutationKey() {
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/:member_id/reactivate',
    'PUT',
  ] as const
}

export function getPutV1B2bOrganizationsOrganizationIdMembersMemberIdReactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['reactivate']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['reactivate']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1B2bOrganizationsOrganizationIdMembersMemberIdReactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['reactivate']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.b2b.organizations[':organization_id'].members[':member_id'].reactivate.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutV1B2bOrganizationsOrganizationIdMembersMemberIdReactivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['reactivate']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['reactivate']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1B2bOrganizationsOrganizationIdMembersMemberIdReactivateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1B2bOrganizationsOrganizationIdMembersMfaPhoneNumbersMemberIdMutationKey() {
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/mfa_phone_numbers/:member_id',
    'DELETE',
  ] as const
}

export function getDeleteV1B2bOrganizationsOrganizationIdMembersMfaPhoneNumbersMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['members']['mfa_phone_numbers'][':member_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.b2b.organizations)[':organization_id']['members']['mfa_phone_numbers'][':member_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1B2bOrganizationsOrganizationIdMembersMfaPhoneNumbersMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.b2b.organizations)[':organization_id']['members']['mfa_phone_numbers'][':member_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.b2b.organizations[':organization_id'].members.mfa_phone_numbers[
          ':member_id'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1B2bOrganizationsOrganizationIdMembersMfaPhoneNumbersMemberId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.organizations)[':organization_id']['members']['mfa_phone_numbers'][':member_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.b2b.organizations)[':organization_id']['members']['mfa_phone_numbers'][':member_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1B2bOrganizationsOrganizationIdMembersMfaPhoneNumbersMemberIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1B2bOrganizationsOrganizationIdMembersMemberIdTotpMutationKey() {
  return ['v1', '/v1/b2b/organizations/:organization_id/members/:member_id/totp', 'DELETE'] as const
}

export function getDeleteV1B2bOrganizationsOrganizationIdMembersMemberIdTotpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['totp']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['totp']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1B2bOrganizationsOrganizationIdMembersMemberIdTotpMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['totp']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.b2b.organizations[':organization_id'].members[':member_id'].totp.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteV1B2bOrganizationsOrganizationIdMembersMemberIdTotp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['totp']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['totp']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1B2bOrganizationsOrganizationIdMembersMemberIdTotpMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bOrganizationsMembersSearchMutationKey() {
  return ['v1', '/v1/b2b/organizations/members/search', 'POST'] as const
}

export function getPostV1B2bOrganizationsMembersSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.organizations.members.search.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.organizations.members.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bOrganizationsMembersSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.b2b.organizations.members.search.$post>,
    ) {
      return parseResponse(client.v1.b2b.organizations.members.search.$post(args, options))
    },
  })
}

export function createPostV1B2bOrganizationsMembersSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.organizations.members.search.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.organizations.members.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bOrganizationsMembersSearchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1B2bOrganizationsOrganizationIdMembersPasswordsMemberPasswordIdMutationKey() {
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/passwords/:member_password_id',
    'DELETE',
  ] as const
}

export function getDeleteV1B2bOrganizationsOrganizationIdMembersPasswordsMemberPasswordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['members']['passwords'][':member_password_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.b2b.organizations)[':organization_id']['members']['passwords'][':member_password_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1B2bOrganizationsOrganizationIdMembersPasswordsMemberPasswordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.b2b.organizations)[':organization_id']['members']['passwords'][':member_password_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.b2b.organizations[':organization_id'].members.passwords[
          ':member_password_id'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1B2bOrganizationsOrganizationIdMembersPasswordsMemberPasswordId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.organizations)[':organization_id']['members']['passwords'][':member_password_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.b2b.organizations)[':organization_id']['members']['passwords'][':member_password_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1B2bOrganizationsOrganizationIdMembersPasswordsMemberPasswordIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1B2bOrganizationsMembersDangerouslyGetMemberIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations.members.dangerously_get)[':member_id']['$get']
  >,
) {
  return ['v1', '/v1/b2b/organizations/members/dangerously_get/:member_id', args] as const
}

export function getV1B2bOrganizationsMembersDangerouslyGetMemberIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.b2b.organizations.members.dangerously_get)[':member_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations.members.dangerously_get)[':member_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations.members.dangerously_get)[':member_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1B2bOrganizationsMembersDangerouslyGetMemberIdQueryKey>
  >({
    queryKey: getV1B2bOrganizationsMembersDangerouslyGetMemberIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.b2b.organizations.members.dangerously_get[':member_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1B2bOrganizationsMembersDangerouslyGetMemberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.b2b.organizations.members.dangerously_get)[':member_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.b2b.organizations.members.dangerously_get)[':member_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.organizations.members.dangerously_get)[':member_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1B2bOrganizationsMembersDangerouslyGetMemberIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1B2bOrganizationsMembersDangerouslyGetMemberIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1B2bOrganizationsOrganizationIdMembersMemberIdOidcProvidersQueryKey(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oidc_providers']['$get']
  >,
) {
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/:member_id/oidc_providers',
    args,
  ] as const
}

export function getV1B2bOrganizationsOrganizationIdMembersMemberIdOidcProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oidc_providers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oidc_providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oidc_providers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1B2bOrganizationsOrganizationIdMembersMemberIdOidcProvidersQueryKey>
  >({
    queryKey: getV1B2bOrganizationsOrganizationIdMembersMemberIdOidcProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.b2b.organizations[':organization_id'].members[':member_id'].oidc_providers.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1B2bOrganizationsOrganizationIdMembersMemberIdOidcProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oidc_providers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oidc_providers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oidc_providers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1B2bOrganizationsOrganizationIdMembersMemberIdOidcProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1B2bOrganizationsOrganizationIdMembersMemberIdOidcProvidersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostV1B2bOrganizationsOrganizationIdMembersMemberIdUnlinkRetiredEmailMutationKey() {
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/:member_id/unlink_retired_email',
    'POST',
  ] as const
}

export function getPostV1B2bOrganizationsOrganizationIdMembersMemberIdUnlinkRetiredEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['unlink_retired_email']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['unlink_retired_email']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1B2bOrganizationsOrganizationIdMembersMemberIdUnlinkRetiredEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['unlink_retired_email']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.b2b.organizations[':organization_id'].members[
          ':member_id'
        ].unlink_retired_email.$post(args, options),
      )
    },
  })
}

export function createPostV1B2bOrganizationsOrganizationIdMembersMemberIdUnlinkRetiredEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['unlink_retired_email']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['unlink_retired_email']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1B2bOrganizationsOrganizationIdMembersMemberIdUnlinkRetiredEmailMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bOrganizationsOrganizationIdMembersMemberIdStartEmailUpdateMutationKey() {
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/:member_id/start_email_update',
    'POST',
  ] as const
}

export function getPostV1B2bOrganizationsOrganizationIdMembersMemberIdStartEmailUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['start_email_update']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['start_email_update']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1B2bOrganizationsOrganizationIdMembersMemberIdStartEmailUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['start_email_update']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.b2b.organizations[':organization_id'].members[
          ':member_id'
        ].start_email_update.$post(args, options),
      )
    },
  })
}

export function createPostV1B2bOrganizationsOrganizationIdMembersMemberIdStartEmailUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['start_email_update']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['start_email_update']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1B2bOrganizationsOrganizationIdMembersMemberIdStartEmailUpdateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsQueryKey(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['connected_apps']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/:member_id/connected_apps',
    keyArgs,
  ] as const
}

export function getV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['connected_apps']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['connected_apps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['connected_apps']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsQueryKey>
  >({
    queryKey: getV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.b2b.organizations[':organization_id'].members[':member_id'].connected_apps.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['connected_apps']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['connected_apps']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['connected_apps']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV1B2bOrganizationsOrganizationIdMembersMemberIdExternalIdMutationKey() {
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/:member_id/external_id',
    'DELETE',
  ] as const
}

export function getDeleteV1B2bOrganizationsOrganizationIdMembersMemberIdExternalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['external_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['external_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1B2bOrganizationsOrganizationIdMembersMemberIdExternalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['external_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.b2b.organizations[':organization_id'].members[':member_id'].external_id.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteV1B2bOrganizationsOrganizationIdMembersMemberIdExternalId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['external_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['external_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1B2bOrganizationsOrganizationIdMembersMemberIdExternalIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bOrganizationsOrganizationIdMembersMutationKey() {
  return ['v1', '/v1/b2b/organizations/:organization_id/members', 'POST'] as const
}

export function getPostV1B2bOrganizationsOrganizationIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.b2b.organizations)[':organization_id']['members']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.b2b.organizations)[':organization_id']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bOrganizationsOrganizationIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.b2b.organizations)[':organization_id']['members']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.b2b.organizations[':organization_id'].members.$post(args, options),
      )
    },
  })
}

export function createPostV1B2bOrganizationsOrganizationIdMembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.organizations)[':organization_id']['members']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.b2b.organizations)[':organization_id']['members']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bOrganizationsOrganizationIdMembersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1B2bOrganizationsOrganizationIdMemberQueryKey(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['member']['$get']
  >,
) {
  return ['v1', '/v1/b2b/organizations/:organization_id/member', args] as const
}

export function getV1B2bOrganizationsOrganizationIdMemberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.b2b.organizations)[':organization_id']['member']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['member']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.b2b.organizations)[':organization_id']['member']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1B2bOrganizationsOrganizationIdMemberQueryKey>
  >({
    queryKey: getV1B2bOrganizationsOrganizationIdMemberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.b2b.organizations[':organization_id'].member.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1B2bOrganizationsOrganizationIdMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.b2b.organizations)[':organization_id']['member']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['member']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.organizations)[':organization_id']['member']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1B2bOrganizationsOrganizationIdMemberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1B2bOrganizationsOrganizationIdMemberQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGoogleQueryKey(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['google']['$get']
  >,
) {
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/:member_id/oauth_providers/google',
    args,
  ] as const
}

export function getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGoogleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['google']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['google']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['google']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGoogleQueryKey
    >
  >({
    queryKey: getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGoogleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.b2b.organizations[':organization_id'].members[
          ':member_id'
        ].oauth_providers.google.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGoogle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['google']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['google']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['google']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGoogleQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGoogleQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersMicrosoftQueryKey(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['microsoft']['$get']
  >,
) {
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/:member_id/oauth_providers/microsoft',
    args,
  ] as const
}

export function getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersMicrosoftQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['microsoft']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['microsoft']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['microsoft']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersMicrosoftQueryKey
    >
  >({
    queryKey:
      getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersMicrosoftQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.b2b.organizations[':organization_id'].members[
          ':member_id'
        ].oauth_providers.microsoft.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersMicrosoft<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['microsoft']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['microsoft']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['microsoft']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersMicrosoftQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersMicrosoftQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersSlackQueryKey(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['slack']['$get']
  >,
) {
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/:member_id/oauth_providers/slack',
    args,
  ] as const
}

export function getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersSlackQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['slack']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['slack']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['slack']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersSlackQueryKey>
  >({
    queryKey: getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersSlackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.b2b.organizations[':organization_id'].members[
          ':member_id'
        ].oauth_providers.slack.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersSlack<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['slack']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['slack']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['slack']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersSlackQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersSlackQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersHubspotQueryKey(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['hubspot']['$get']
  >,
) {
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/:member_id/oauth_providers/hubspot',
    args,
  ] as const
}

export function getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersHubspotQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['hubspot']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['hubspot']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['hubspot']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersHubspotQueryKey
    >
  >({
    queryKey: getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersHubspotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.b2b.organizations[':organization_id'].members[
          ':member_id'
        ].oauth_providers.hubspot.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersHubspot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['hubspot']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['hubspot']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['hubspot']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersHubspotQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersHubspotQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGithubQueryKey(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['github']['$get']
  >,
) {
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/:member_id/oauth_providers/github',
    args,
  ] as const
}

export function getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGithubQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['github']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['github']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['github']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGithubQueryKey
    >
  >({
    queryKey: getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGithubQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.b2b.organizations[':organization_id'].members[
          ':member_id'
        ].oauth_providers.github.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGithub<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['github']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['github']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['github']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGithubQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGithubQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsConnectedAppIdRevokeMutationKey() {
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/:member_id/connected_apps/:connected_app_id/revoke',
    'POST',
  ] as const
}

export function getPostV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsConnectedAppIdRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['connected_apps'][':connected_app_id']['revoke']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['connected_apps'][':connected_app_id']['revoke']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsConnectedAppIdRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['connected_apps'][':connected_app_id']['revoke']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.b2b.organizations[':organization_id'].members[':member_id'].connected_apps[
          ':connected_app_id'
        ].revoke.$post(args, options),
      )
    },
  })
}

export function createPostV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsConnectedAppIdRevoke<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['connected_apps'][':connected_app_id']['revoke']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['connected_apps'][':connected_app_id']['revoke']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsConnectedAppIdRevokeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bIdpOauthAuthorizeStartMutationKey() {
  return ['v1', '/v1/b2b/idp/oauth/authorize/start', 'POST'] as const
}

export function getPostV1B2bIdpOauthAuthorizeStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.idp.oauth.authorize.start.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.idp.oauth.authorize.start.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bIdpOauthAuthorizeStartMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.idp.oauth.authorize.start.$post>) {
      return parseResponse(client.v1.b2b.idp.oauth.authorize.start.$post(args, options))
    },
  })
}

export function createPostV1B2bIdpOauthAuthorizeStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.idp.oauth.authorize.start.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.idp.oauth.authorize.start.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bIdpOauthAuthorizeStartMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bIdpOauthAuthorizeMutationKey() {
  return ['v1', '/v1/b2b/idp/oauth/authorize', 'POST'] as const
}

export function getPostV1B2bIdpOauthAuthorizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.idp.oauth.authorize.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.idp.oauth.authorize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bIdpOauthAuthorizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.idp.oauth.authorize.$post>) {
      return parseResponse(client.v1.b2b.idp.oauth.authorize.$post(args, options))
    },
  })
}

export function createPostV1B2bIdpOauthAuthorize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.idp.oauth.authorize.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.idp.oauth.authorize.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bIdpOauthAuthorizeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1UsersMutationKey() {
  return ['v1', '/v1/users', 'POST'] as const
}

export function getPostV1UsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.users.$post>) {
      return parseResponse(client.v1.users.$post(args, options))
    },
  })
}

export function createPostV1Users<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.users.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1UsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1UsersUserIdQueryKey(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['$get']>,
) {
  return ['v1', '/v1/users/:user_id', args] as const
}

export function getV1UsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersUserIdQueryKey>
  >({
    queryKey: getV1UsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users[':user_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1UsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.users)[':user_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1UsersUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV1UsersUserIdMutationKey() {
  return ['v1', '/v1/users/:user_id', 'PUT'] as const
}

export function getPutV1UsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.users)[':user_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1UsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.users)[':user_id']['$put']>) {
      return parseResponse(client.v1.users[':user_id'].$put(args, options))
    },
  })
}

export function createPutV1UsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.users)[':user_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1UsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1UsersUserIdMutationKey() {
  return ['v1', '/v1/users/:user_id', 'DELETE'] as const
}

export function getDeleteV1UsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.users)[':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1UsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.users)[':user_id']['$delete']>) {
      return parseResponse(client.v1.users[':user_id'].$delete(args, options))
    },
  })
}

export function createDeleteV1UsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.users)[':user_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1UsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1UsersSearchMutationKey() {
  return ['v1', '/v1/users/search', 'POST'] as const
}

export function getPostV1UsersSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.users.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UsersSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.users.search.$post>) {
      return parseResponse(client.v1.users.search.$post(args, options))
    },
  })
}

export function createPostV1UsersSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.users.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1UsersSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1UsersUserIdExchangePrimaryFactorMutationKey() {
  return ['v1', '/v1/users/:user_id/exchange_primary_factor', 'PUT'] as const
}

export function getPutV1UsersUserIdExchangePrimaryFactorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.users)[':user_id']['exchange_primary_factor']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.users)[':user_id']['exchange_primary_factor']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1UsersUserIdExchangePrimaryFactorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.users)[':user_id']['exchange_primary_factor']['$put']
      >,
    ) {
      return parseResponse(client.v1.users[':user_id'].exchange_primary_factor.$put(args, options))
    },
  })
}

export function createPutV1UsersUserIdExchangePrimaryFactor<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.users)[':user_id']['exchange_primary_factor']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.users)[':user_id']['exchange_primary_factor']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1UsersUserIdExchangePrimaryFactorMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1UsersEmailsEmailIdMutationKey() {
  return ['v1', '/v1/users/emails/:email_id', 'DELETE'] as const
}

export function getDeleteV1UsersEmailsEmailIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.users.emails)[':email_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.users.emails)[':email_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1UsersEmailsEmailIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.users.emails)[':email_id']['$delete']>,
    ) {
      return parseResponse(client.v1.users.emails[':email_id'].$delete(args, options))
    },
  })
}

export function createDeleteV1UsersEmailsEmailId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.users.emails)[':email_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.users.emails)[':email_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1UsersEmailsEmailIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1UsersPhoneNumbersPhoneIdMutationKey() {
  return ['v1', '/v1/users/phone_numbers/:phone_id', 'DELETE'] as const
}

export function getDeleteV1UsersPhoneNumbersPhoneIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.users.phone_numbers)[':phone_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.users.phone_numbers)[':phone_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1UsersPhoneNumbersPhoneIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.users.phone_numbers)[':phone_id']['$delete']>,
    ) {
      return parseResponse(client.v1.users.phone_numbers[':phone_id'].$delete(args, options))
    },
  })
}

export function createDeleteV1UsersPhoneNumbersPhoneId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.users.phone_numbers)[':phone_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.users.phone_numbers)[':phone_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1UsersPhoneNumbersPhoneIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1UsersWebauthnRegistrationsWebauthnRegistrationIdMutationKey() {
  return ['v1', '/v1/users/webauthn_registrations/:webauthn_registration_id', 'DELETE'] as const
}

export function getDeleteV1UsersWebauthnRegistrationsWebauthnRegistrationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users.webauthn_registrations)[':webauthn_registration_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.users.webauthn_registrations)[':webauthn_registration_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1UsersWebauthnRegistrationsWebauthnRegistrationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.users.webauthn_registrations)[':webauthn_registration_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.users.webauthn_registrations[':webauthn_registration_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1UsersWebauthnRegistrationsWebauthnRegistrationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.users.webauthn_registrations)[':webauthn_registration_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.users.webauthn_registrations)[':webauthn_registration_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1UsersWebauthnRegistrationsWebauthnRegistrationIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1UsersBiometricRegistrationsBiometricRegistrationIdMutationKey() {
  return ['v1', '/v1/users/biometric_registrations/:biometric_registration_id', 'DELETE'] as const
}

export function getDeleteV1UsersBiometricRegistrationsBiometricRegistrationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users.biometric_registrations)[':biometric_registration_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.users.biometric_registrations)[':biometric_registration_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1UsersBiometricRegistrationsBiometricRegistrationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.users.biometric_registrations)[':biometric_registration_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.users.biometric_registrations[':biometric_registration_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteV1UsersBiometricRegistrationsBiometricRegistrationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.users.biometric_registrations)[':biometric_registration_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.users.biometric_registrations)[':biometric_registration_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1UsersBiometricRegistrationsBiometricRegistrationIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1UsersTotpsTotpIdMutationKey() {
  return ['v1', '/v1/users/totps/:totp_id', 'DELETE'] as const
}

export function getDeleteV1UsersTotpsTotpIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.users.totps)[':totp_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.users.totps)[':totp_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1UsersTotpsTotpIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.users.totps)[':totp_id']['$delete']>,
    ) {
      return parseResponse(client.v1.users.totps[':totp_id'].$delete(args, options))
    },
  })
}

export function createDeleteV1UsersTotpsTotpId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.users.totps)[':totp_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.users.totps)[':totp_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1UsersTotpsTotpIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1UsersCryptoWalletsCryptoWalletIdMutationKey() {
  return ['v1', '/v1/users/crypto_wallets/:crypto_wallet_id', 'DELETE'] as const
}

export function getDeleteV1UsersCryptoWalletsCryptoWalletIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.users.crypto_wallets)[':crypto_wallet_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.users.crypto_wallets)[':crypto_wallet_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1UsersCryptoWalletsCryptoWalletIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.users.crypto_wallets)[':crypto_wallet_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.users.crypto_wallets[':crypto_wallet_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1UsersCryptoWalletsCryptoWalletId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.users.crypto_wallets)[':crypto_wallet_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.users.crypto_wallets)[':crypto_wallet_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1UsersCryptoWalletsCryptoWalletIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1UsersPasswordsPasswordIdMutationKey() {
  return ['v1', '/v1/users/passwords/:password_id', 'DELETE'] as const
}

export function getDeleteV1UsersPasswordsPasswordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.users.passwords)[':password_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.users.passwords)[':password_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1UsersPasswordsPasswordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.users.passwords)[':password_id']['$delete']>,
    ) {
      return parseResponse(client.v1.users.passwords[':password_id'].$delete(args, options))
    },
  })
}

export function createDeleteV1UsersPasswordsPasswordId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.users.passwords)[':password_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.users.passwords)[':password_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1UsersPasswordsPasswordIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1UsersOauthOauthUserRegistrationIdMutationKey() {
  return ['v1', '/v1/users/oauth/:oauth_user_registration_id', 'DELETE'] as const
}

export function getDeleteV1UsersOauthOauthUserRegistrationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.users.oauth)[':oauth_user_registration_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.users.oauth)[':oauth_user_registration_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1UsersOauthOauthUserRegistrationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.users.oauth)[':oauth_user_registration_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.users.oauth[':oauth_user_registration_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1UsersOauthOauthUserRegistrationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.users.oauth)[':oauth_user_registration_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.users.oauth)[':oauth_user_registration_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1UsersOauthOauthUserRegistrationIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1UsersUserIdExternalIdMutationKey() {
  return ['v1', '/v1/users/:user_id/external_id', 'DELETE'] as const
}

export function getDeleteV1UsersUserIdExternalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.users)[':user_id']['external_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.users)[':user_id']['external_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1UsersUserIdExternalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.users)[':user_id']['external_id']['$delete']>,
    ) {
      return parseResponse(client.v1.users[':user_id'].external_id.$delete(args, options))
    },
  })
}

export function createDeleteV1UsersUserIdExternalId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.users)[':user_id']['external_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.users)[':user_id']['external_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1UsersUserIdExternalIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1UsersUserIdConnectedAppsQueryKey(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['connected_apps']['$get']>,
) {
  return ['v1', '/v1/users/:user_id/connected_apps', args] as const
}

export function getV1UsersUserIdConnectedAppsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':user_id']['connected_apps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['connected_apps']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.users)[':user_id']['connected_apps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersUserIdConnectedAppsQueryKey>
  >({
    queryKey: getV1UsersUserIdConnectedAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users[':user_id'].connected_apps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1UsersUserIdConnectedApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':user_id']['connected_apps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.users)[':user_id']['connected_apps']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.users)[':user_id']['connected_apps']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UsersUserIdConnectedAppsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1UsersUserIdConnectedAppsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1UsersUserIdConnectedAppsConnectedAppIdRevokeMutationKey() {
  return ['v1', '/v1/users/:user_id/connected_apps/:connected_app_id/revoke', 'POST'] as const
}

export function getPostV1UsersUserIdConnectedAppsConnectedAppIdRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['connected_apps'][':connected_app_id']['revoke']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.users)[':user_id']['connected_apps'][':connected_app_id']['revoke']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1UsersUserIdConnectedAppsConnectedAppIdRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.users)[':user_id']['connected_apps'][':connected_app_id']['revoke']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.users[':user_id'].connected_apps[':connected_app_id'].revoke.$post(args, options),
      )
    },
  })
}

export function createPostV1UsersUserIdConnectedAppsConnectedAppIdRevoke<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.users)[':user_id']['connected_apps'][':connected_app_id']['revoke']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.users)[':user_id']['connected_apps'][':connected_app_id']['revoke']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1UsersUserIdConnectedAppsConnectedAppIdRevokeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1SessionsQueryKey(args: InferRequestType<typeof client.v1.sessions.$get>) {
  return ['v1', '/v1/sessions', args] as const
}

export function getV1SessionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sessions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.sessions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sessions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1SessionsQueryKey>
  >({
    queryKey: getV1SessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.sessions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Sessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.sessions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sessions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1SessionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1SessionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1SessionsAuthenticateMutationKey() {
  return ['v1', '/v1/sessions/authenticate', 'POST'] as const
}

export function getPostV1SessionsAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.sessions.authenticate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.sessions.authenticate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SessionsAuthenticateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sessions.authenticate.$post>) {
      return parseResponse(client.v1.sessions.authenticate.$post(args, options))
    },
  })
}

export function createPostV1SessionsAuthenticate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.sessions.authenticate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.sessions.authenticate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SessionsAuthenticateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SessionsRevokeMutationKey() {
  return ['v1', '/v1/sessions/revoke', 'POST'] as const
}

export function getPostV1SessionsRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sessions.revoke.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.sessions.revoke.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SessionsRevokeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sessions.revoke.$post>) {
      return parseResponse(client.v1.sessions.revoke.$post(args, options))
    },
  })
}

export function createPostV1SessionsRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.sessions.revoke.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.sessions.revoke.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SessionsRevokeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SessionsMigrateMutationKey() {
  return ['v1', '/v1/sessions/migrate', 'POST'] as const
}

export function getPostV1SessionsMigrateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sessions.migrate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.sessions.migrate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SessionsMigrateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sessions.migrate.$post>) {
      return parseResponse(client.v1.sessions.migrate.$post(args, options))
    },
  })
}

export function createPostV1SessionsMigrate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.sessions.migrate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.sessions.migrate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SessionsMigrateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SessionsExchangeAccessTokenMutationKey() {
  return ['v1', '/v1/sessions/exchange_access_token', 'POST'] as const
}

export function getPostV1SessionsExchangeAccessTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.sessions.exchange_access_token.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.sessions.exchange_access_token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SessionsExchangeAccessTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.sessions.exchange_access_token.$post>,
    ) {
      return parseResponse(client.v1.sessions.exchange_access_token.$post(args, options))
    },
  })
}

export function createPostV1SessionsExchangeAccessToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.sessions.exchange_access_token.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.sessions.exchange_access_token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SessionsExchangeAccessTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1SessionsJwksProjectIdQueryKey(
  args: InferRequestType<(typeof client.v1.sessions.jwks)[':project_id']['$get']>,
) {
  return ['v1', '/v1/sessions/jwks/:project_id', args] as const
}

export function getV1SessionsJwksProjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.sessions.jwks)[':project_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.sessions.jwks)[':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.sessions.jwks)[':project_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SessionsJwksProjectIdQueryKey>
  >({
    queryKey: getV1SessionsJwksProjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.sessions.jwks[':project_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SessionsJwksProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.sessions.jwks)[':project_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.sessions.jwks)[':project_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.sessions.jwks)[':project_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SessionsJwksProjectIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1SessionsJwksProjectIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1SessionsAttestMutationKey() {
  return ['v1', '/v1/sessions/attest', 'POST'] as const
}

export function getPostV1SessionsAttestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sessions.attest.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.sessions.attest.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SessionsAttestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sessions.attest.$post>) {
      return parseResponse(client.v1.sessions.attest.$post(args, options))
    },
  })
}

export function createPostV1SessionsAttest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.sessions.attest.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.sessions.attest.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SessionsAttestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1B2bSessionsQueryKey(
  args: InferRequestType<typeof client.v1.b2b.sessions.$get>,
) {
  return ['v1', '/v1/b2b/sessions', args] as const
}

export function getV1B2bSessionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.sessions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.b2b.sessions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.sessions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1B2bSessionsQueryKey>
  >({
    queryKey: getV1B2bSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.b2b.sessions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1B2bSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.b2b.sessions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.sessions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1B2bSessionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1B2bSessionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1B2bSessionsAuthenticateMutationKey() {
  return ['v1', '/v1/b2b/sessions/authenticate', 'POST'] as const
}

export function getPostV1B2bSessionsAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.sessions.authenticate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.sessions.authenticate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bSessionsAuthenticateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.sessions.authenticate.$post>) {
      return parseResponse(client.v1.b2b.sessions.authenticate.$post(args, options))
    },
  })
}

export function createPostV1B2bSessionsAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.sessions.authenticate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.sessions.authenticate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bSessionsAuthenticateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bSessionsRevokeMutationKey() {
  return ['v1', '/v1/b2b/sessions/revoke', 'POST'] as const
}

export function getPostV1B2bSessionsRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.sessions.revoke.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.sessions.revoke.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bSessionsRevokeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.sessions.revoke.$post>) {
      return parseResponse(client.v1.b2b.sessions.revoke.$post(args, options))
    },
  })
}

export function createPostV1B2bSessionsRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.sessions.revoke.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.sessions.revoke.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bSessionsRevokeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bSessionsExchangeMutationKey() {
  return ['v1', '/v1/b2b/sessions/exchange', 'POST'] as const
}

export function getPostV1B2bSessionsExchangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.sessions.exchange.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.sessions.exchange.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bSessionsExchangeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.sessions.exchange.$post>) {
      return parseResponse(client.v1.b2b.sessions.exchange.$post(args, options))
    },
  })
}

export function createPostV1B2bSessionsExchange<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.sessions.exchange.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.sessions.exchange.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bSessionsExchangeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bSessionsExchangeAccessTokenMutationKey() {
  return ['v1', '/v1/b2b/sessions/exchange_access_token', 'POST'] as const
}

export function getPostV1B2bSessionsExchangeAccessTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.sessions.exchange_access_token.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.sessions.exchange_access_token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bSessionsExchangeAccessTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.b2b.sessions.exchange_access_token.$post>,
    ) {
      return parseResponse(client.v1.b2b.sessions.exchange_access_token.$post(args, options))
    },
  })
}

export function createPostV1B2bSessionsExchangeAccessToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.sessions.exchange_access_token.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.sessions.exchange_access_token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bSessionsExchangeAccessTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bSessionsAttestMutationKey() {
  return ['v1', '/v1/b2b/sessions/attest', 'POST'] as const
}

export function getPostV1B2bSessionsAttestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.sessions.attest.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.sessions.attest.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bSessionsAttestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.sessions.attest.$post>) {
      return parseResponse(client.v1.b2b.sessions.attest.$post(args, options))
    },
  })
}

export function createPostV1B2bSessionsAttest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.sessions.attest.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.sessions.attest.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bSessionsAttestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bSessionsMigrateMutationKey() {
  return ['v1', '/v1/b2b/sessions/migrate', 'POST'] as const
}

export function getPostV1B2bSessionsMigrateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.sessions.migrate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.sessions.migrate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bSessionsMigrateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.sessions.migrate.$post>) {
      return parseResponse(client.v1.b2b.sessions.migrate.$post(args, options))
    },
  })
}

export function createPostV1B2bSessionsMigrate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.sessions.migrate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.sessions.migrate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bSessionsMigrateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1B2bSessionsJwksProjectIdQueryKey(
  args: InferRequestType<(typeof client.v1.b2b.sessions.jwks)[':project_id']['$get']>,
) {
  return ['v1', '/v1/b2b/sessions/jwks/:project_id', args] as const
}

export function getV1B2bSessionsJwksProjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.b2b.sessions.jwks)[':project_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.b2b.sessions.jwks)[':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.b2b.sessions.jwks)[':project_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1B2bSessionsJwksProjectIdQueryKey>
  >({
    queryKey: getV1B2bSessionsJwksProjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.b2b.sessions.jwks[':project_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1B2bSessionsJwksProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.b2b.sessions.jwks)[':project_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.b2b.sessions.jwks)[':project_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.b2b.sessions.jwks)[':project_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1B2bSessionsJwksProjectIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1B2bSessionsJwksProjectIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1B2bImpersonationAuthenticateMutationKey() {
  return ['v1', '/v1/b2b/impersonation/authenticate', 'POST'] as const
}

export function getPostV1B2bImpersonationAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.impersonation.authenticate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.impersonation.authenticate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bImpersonationAuthenticateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.b2b.impersonation.authenticate.$post>,
    ) {
      return parseResponse(client.v1.b2b.impersonation.authenticate.$post(args, options))
    },
  })
}

export function createPostV1B2bImpersonationAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.impersonation.authenticate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.impersonation.authenticate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bImpersonationAuthenticateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1B2bRbacPolicyQueryKey() {
  return ['v1', '/v1/b2b/rbac/policy'] as const
}

export function getV1B2bRbacPolicyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.rbac.policy.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.rbac.policy.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1B2bRbacPolicyQueryKey>
  >({
    queryKey: getV1B2bRbacPolicyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.b2b.rbac.policy.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1B2bRbacPolicy<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.rbac.policy.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.rbac.policy.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1B2bRbacPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1B2bRbacPolicyQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1B2bRbacOrganizationsOrganizationIdQueryKey(
  args: InferRequestType<(typeof client.v1.b2b.rbac.organizations)[':organization_id']['$get']>,
) {
  return ['v1', '/v1/b2b/rbac/organizations/:organization_id', args] as const
}

export function getV1B2bRbacOrganizationsOrganizationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.b2b.rbac.organizations)[':organization_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.b2b.rbac.organizations)[':organization_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.b2b.rbac.organizations)[':organization_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1B2bRbacOrganizationsOrganizationIdQueryKey>
  >({
    queryKey: getV1B2bRbacOrganizationsOrganizationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.b2b.rbac.organizations[':organization_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1B2bRbacOrganizationsOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.b2b.rbac.organizations)[':organization_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.b2b.rbac.organizations)[':organization_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.b2b.rbac.organizations)[':organization_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1B2bRbacOrganizationsOrganizationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1B2bRbacOrganizationsOrganizationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1B2bRbacOrganizationsOrganizationIdMutationKey() {
  return ['v1', '/v1/b2b/rbac/organizations/:organization_id', 'PUT'] as const
}

export function getPutV1B2bRbacOrganizationsOrganizationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.b2b.rbac.organizations)[':organization_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.b2b.rbac.organizations)[':organization_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1B2bRbacOrganizationsOrganizationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.b2b.rbac.organizations)[':organization_id']['$put']>,
    ) {
      return parseResponse(client.v1.b2b.rbac.organizations[':organization_id'].$put(args, options))
    },
  })
}

export function createPutV1B2bRbacOrganizationsOrganizationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.b2b.rbac.organizations)[':organization_id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.b2b.rbac.organizations)[':organization_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1B2bRbacOrganizationsOrganizationIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bRecoveryCodesRecoverMutationKey() {
  return ['v1', '/v1/b2b/recovery_codes/recover', 'POST'] as const
}

export function getPostV1B2bRecoveryCodesRecoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.recovery_codes.recover.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.recovery_codes.recover.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bRecoveryCodesRecoverMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.recovery_codes.recover.$post>) {
      return parseResponse(client.v1.b2b.recovery_codes.recover.$post(args, options))
    },
  })
}

export function createPostV1B2bRecoveryCodesRecover<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.recovery_codes.recover.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.recovery_codes.recover.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bRecoveryCodesRecoverMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1B2bRecoveryCodesOrganizationIdMemberIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.b2b.recovery_codes)[':organization_id'][':member_id']['$get']
  >,
) {
  return ['v1', '/v1/b2b/recovery_codes/:organization_id/:member_id', args] as const
}

export function getV1B2bRecoveryCodesOrganizationIdMemberIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.b2b.recovery_codes)[':organization_id'][':member_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.recovery_codes)[':organization_id'][':member_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.recovery_codes)[':organization_id'][':member_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1B2bRecoveryCodesOrganizationIdMemberIdQueryKey>
  >({
    queryKey: getV1B2bRecoveryCodesOrganizationIdMemberIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.b2b.recovery_codes[':organization_id'][':member_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1B2bRecoveryCodesOrganizationIdMemberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.b2b.recovery_codes)[':organization_id'][':member_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.b2b.recovery_codes)[':organization_id'][':member_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.recovery_codes)[':organization_id'][':member_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1B2bRecoveryCodesOrganizationIdMemberIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1B2bRecoveryCodesOrganizationIdMemberIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostV1B2bRecoveryCodesRotateMutationKey() {
  return ['v1', '/v1/b2b/recovery_codes/rotate', 'POST'] as const
}

export function getPostV1B2bRecoveryCodesRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.recovery_codes.rotate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.recovery_codes.rotate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bRecoveryCodesRotateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.recovery_codes.rotate.$post>) {
      return parseResponse(client.v1.b2b.recovery_codes.rotate.$post(args, options))
    },
  })
}

export function createPostV1B2bRecoveryCodesRotate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.recovery_codes.rotate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.recovery_codes.rotate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bRecoveryCodesRotateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bTotpMutationKey() {
  return ['v1', '/v1/b2b/totp', 'POST'] as const
}

export function getPostV1B2bTotpMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.totp.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.b2b.totp.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bTotpMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.totp.$post>) {
      return parseResponse(client.v1.b2b.totp.$post(args, options))
    },
  })
}

export function createPostV1B2bTotp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.totp.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.totp.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bTotpMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bTotpAuthenticateMutationKey() {
  return ['v1', '/v1/b2b/totp/authenticate', 'POST'] as const
}

export function getPostV1B2bTotpAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.totp.authenticate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.totp.authenticate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bTotpAuthenticateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.totp.authenticate.$post>) {
      return parseResponse(client.v1.b2b.totp.authenticate.$post(args, options))
    },
  })
}

export function createPostV1B2bTotpAuthenticate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.totp.authenticate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.totp.authenticate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bTotpAuthenticateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bTotpMigrateMutationKey() {
  return ['v1', '/v1/b2b/totp/migrate', 'POST'] as const
}

export function getPostV1B2bTotpMigrateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.totp.migrate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.totp.migrate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bTotpMigrateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.totp.migrate.$post>) {
      return parseResponse(client.v1.b2b.totp.migrate.$post(args, options))
    },
  })
}

export function createPostV1B2bTotpMigrate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.totp.migrate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.totp.migrate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bTotpMigrateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1RbacPolicyQueryKey() {
  return ['v1', '/v1/rbac/policy'] as const
}

export function getV1RbacPolicyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rbac.policy.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rbac.policy.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1RbacPolicyQueryKey>
  >({
    queryKey: getV1RbacPolicyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.rbac.policy.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1RbacPolicy<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rbac.policy.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rbac.policy.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1RbacPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1RbacPolicyQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV1CryptoWalletsAuthenticateStartMutationKey() {
  return ['v1', '/v1/crypto_wallets/authenticate/start', 'POST'] as const
}

export function getPostV1CryptoWalletsAuthenticateStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.crypto_wallets.authenticate.start.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.crypto_wallets.authenticate.start.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CryptoWalletsAuthenticateStartMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.crypto_wallets.authenticate.start.$post>,
    ) {
      return parseResponse(client.v1.crypto_wallets.authenticate.start.$post(args, options))
    },
  })
}

export function createPostV1CryptoWalletsAuthenticateStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.crypto_wallets.authenticate.start.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.crypto_wallets.authenticate.start.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CryptoWalletsAuthenticateStartMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CryptoWalletsAuthenticateMutationKey() {
  return ['v1', '/v1/crypto_wallets/authenticate', 'POST'] as const
}

export function getPostV1CryptoWalletsAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.crypto_wallets.authenticate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.crypto_wallets.authenticate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CryptoWalletsAuthenticateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.crypto_wallets.authenticate.$post>) {
      return parseResponse(client.v1.crypto_wallets.authenticate.$post(args, options))
    },
  })
}

export function createPostV1CryptoWalletsAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.crypto_wallets.authenticate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.crypto_wallets.authenticate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CryptoWalletsAuthenticateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1DebugWhoamiQueryKey() {
  return ['v1', '/v1/debug/whoami'] as const
}

export function getV1DebugWhoamiQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debug.whoami.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debug.whoami.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1DebugWhoamiQueryKey>
  >({
    queryKey: getV1DebugWhoamiQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.debug.whoami.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1DebugWhoami<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debug.whoami.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debug.whoami.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1DebugWhoamiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1DebugWhoamiQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV1B2bDiscoveryIntermediateSessionsExchangeMutationKey() {
  return ['v1', '/v1/b2b/discovery/intermediate_sessions/exchange', 'POST'] as const
}

export function getPostV1B2bDiscoveryIntermediateSessionsExchangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.discovery.intermediate_sessions.exchange.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.discovery.intermediate_sessions.exchange.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bDiscoveryIntermediateSessionsExchangeMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.b2b.discovery.intermediate_sessions.exchange.$post>,
    ) {
      return parseResponse(
        client.v1.b2b.discovery.intermediate_sessions.exchange.$post(args, options),
      )
    },
  })
}

export function createPostV1B2bDiscoveryIntermediateSessionsExchange<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.v1.b2b.discovery.intermediate_sessions.exchange.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.discovery.intermediate_sessions.exchange.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bDiscoveryIntermediateSessionsExchangeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bDiscoveryOrganizationsCreateMutationKey() {
  return ['v1', '/v1/b2b/discovery/organizations/create', 'POST'] as const
}

export function getPostV1B2bDiscoveryOrganizationsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.discovery.organizations.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.discovery.organizations.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bDiscoveryOrganizationsCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.b2b.discovery.organizations.create.$post>,
    ) {
      return parseResponse(client.v1.b2b.discovery.organizations.create.$post(args, options))
    },
  })
}

export function createPostV1B2bDiscoveryOrganizationsCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.discovery.organizations.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.discovery.organizations.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bDiscoveryOrganizationsCreateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bDiscoveryOrganizationsMutationKey() {
  return ['v1', '/v1/b2b/discovery/organizations', 'POST'] as const
}

export function getPostV1B2bDiscoveryOrganizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.discovery.organizations.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.discovery.organizations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bDiscoveryOrganizationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.discovery.organizations.$post>) {
      return parseResponse(client.v1.b2b.discovery.organizations.$post(args, options))
    },
  })
}

export function createPostV1B2bDiscoveryOrganizations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.discovery.organizations.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.discovery.organizations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bDiscoveryOrganizationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1FingerprintLookupMutationKey() {
  return ['v1', '/v1/fingerprint/lookup', 'POST'] as const
}

export function getPostV1FingerprintLookupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.fingerprint.lookup.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.fingerprint.lookup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FingerprintLookupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.fingerprint.lookup.$post>) {
      return parseResponse(client.v1.fingerprint.lookup.$post(args, options))
    },
  })
}

export function createPostV1FingerprintLookup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.fingerprint.lookup.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.fingerprint.lookup.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1FingerprintLookupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1RulesSetMutationKey() {
  return ['v1', '/v1/rules/set', 'POST'] as const
}

export function getPostV1RulesSetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rules.set.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.rules.set.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RulesSetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.rules.set.$post>) {
      return parseResponse(client.v1.rules.set.$post(args, options))
    },
  })
}

export function createPostV1RulesSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rules.set.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.rules.set.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1RulesSetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1RulesListMutationKey() {
  return ['v1', '/v1/rules/list', 'POST'] as const
}

export function getPostV1RulesListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rules.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.rules.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RulesListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.rules.list.$post>) {
      return parseResponse(client.v1.rules.list.$post(args, options))
    },
  })
}

export function createPostV1RulesList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rules.list.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.rules.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1RulesListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1VerdictReasonsOverrideMutationKey() {
  return ['v1', '/v1/verdict_reasons/override', 'POST'] as const
}

export function getPostV1VerdictReasonsOverrideMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.verdict_reasons.override.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.verdict_reasons.override.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1VerdictReasonsOverrideMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.verdict_reasons.override.$post>) {
      return parseResponse(client.v1.verdict_reasons.override.$post(args, options))
    },
  })
}

export function createPostV1VerdictReasonsOverride<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.verdict_reasons.override.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.verdict_reasons.override.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1VerdictReasonsOverrideMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1VerdictReasonsListMutationKey() {
  return ['v1', '/v1/verdict_reasons/list', 'POST'] as const
}

export function getPostV1VerdictReasonsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.verdict_reasons.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.verdict_reasons.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1VerdictReasonsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.verdict_reasons.list.$post>) {
      return parseResponse(client.v1.verdict_reasons.list.$post(args, options))
    },
  })
}

export function createPostV1VerdictReasonsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.verdict_reasons.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.verdict_reasons.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1VerdictReasonsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1EmailRiskMutationKey() {
  return ['v1', '/v1/email/risk', 'POST'] as const
}

export function getPostV1EmailRiskMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.risk.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.email.risk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EmailRiskMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.email.risk.$post>) {
      return parseResponse(client.v1.email.risk.$post(args, options))
    },
  })
}

export function createPostV1EmailRisk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.risk.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.email.risk.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1EmailRiskMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1IdpOauthAuthorizeStartMutationKey() {
  return ['v1', '/v1/idp/oauth/authorize/start', 'POST'] as const
}

export function getPostV1IdpOauthAuthorizeStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.idp.oauth.authorize.start.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.idp.oauth.authorize.start.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1IdpOauthAuthorizeStartMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.idp.oauth.authorize.start.$post>) {
      return parseResponse(client.v1.idp.oauth.authorize.start.$post(args, options))
    },
  })
}

export function createPostV1IdpOauthAuthorizeStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.idp.oauth.authorize.start.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.idp.oauth.authorize.start.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1IdpOauthAuthorizeStartMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1IdpOauthAuthorizeMutationKey() {
  return ['v1', '/v1/idp/oauth/authorize', 'POST'] as const
}

export function getPostV1IdpOauthAuthorizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.idp.oauth.authorize.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.idp.oauth.authorize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1IdpOauthAuthorizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.idp.oauth.authorize.$post>) {
      return parseResponse(client.v1.idp.oauth.authorize.$post(args, options))
    },
  })
}

export function createPostV1IdpOauthAuthorize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.idp.oauth.authorize.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.idp.oauth.authorize.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1IdpOauthAuthorizeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ImpersonationAuthenticateMutationKey() {
  return ['v1', '/v1/impersonation/authenticate', 'POST'] as const
}

export function getPostV1ImpersonationAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.impersonation.authenticate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.impersonation.authenticate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ImpersonationAuthenticateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.impersonation.authenticate.$post>) {
      return parseResponse(client.v1.impersonation.authenticate.$post(args, options))
    },
  })
}

export function createPostV1ImpersonationAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.impersonation.authenticate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.impersonation.authenticate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ImpersonationAuthenticateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1M2mClientsClientIdQueryKey(
  args: InferRequestType<(typeof client.v1.m2m.clients)[':client_id']['$get']>,
) {
  return ['v1', '/v1/m2m/clients/:client_id', args] as const
}

export function getV1M2mClientsClientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.m2m.clients)[':client_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.m2m.clients)[':client_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.m2m.clients)[':client_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1M2mClientsClientIdQueryKey>
  >({
    queryKey: getV1M2mClientsClientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.m2m.clients[':client_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1M2mClientsClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.m2m.clients)[':client_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.m2m.clients)[':client_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.m2m.clients)[':client_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1M2mClientsClientIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1M2mClientsClientIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1M2mClientsClientIdMutationKey() {
  return ['v1', '/v1/m2m/clients/:client_id', 'PUT'] as const
}

export function getPutV1M2mClientsClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.m2m.clients)[':client_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.m2m.clients)[':client_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1M2mClientsClientIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.m2m.clients)[':client_id']['$put']>) {
      return parseResponse(client.v1.m2m.clients[':client_id'].$put(args, options))
    },
  })
}

export function createPutV1M2mClientsClientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.m2m.clients)[':client_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.m2m.clients)[':client_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1M2mClientsClientIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1M2mClientsClientIdMutationKey() {
  return ['v1', '/v1/m2m/clients/:client_id', 'DELETE'] as const
}

export function getDeleteV1M2mClientsClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.m2m.clients)[':client_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.m2m.clients)[':client_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1M2mClientsClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.m2m.clients)[':client_id']['$delete']>,
    ) {
      return parseResponse(client.v1.m2m.clients[':client_id'].$delete(args, options))
    },
  })
}

export function createDeleteV1M2mClientsClientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.m2m.clients)[':client_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.m2m.clients)[':client_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1M2mClientsClientIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1M2mClientsSearchMutationKey() {
  return ['v1', '/v1/m2m/clients/search', 'POST'] as const
}

export function getPostV1M2mClientsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.m2m.clients.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.m2m.clients.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1M2mClientsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.m2m.clients.search.$post>) {
      return parseResponse(client.v1.m2m.clients.search.$post(args, options))
    },
  })
}

export function createPostV1M2mClientsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.m2m.clients.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.m2m.clients.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1M2mClientsSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1M2mClientsMutationKey() {
  return ['v1', '/v1/m2m/clients', 'POST'] as const
}

export function getPostV1M2mClientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.m2m.clients.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.m2m.clients.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1M2mClientsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.m2m.clients.$post>) {
      return parseResponse(client.v1.m2m.clients.$post(args, options))
    },
  })
}

export function createPostV1M2mClients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.m2m.clients.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.m2m.clients.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1M2mClientsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1M2mClientsClientIdSecretsRotateStartMutationKey() {
  return ['v1', '/v1/m2m/clients/:client_id/secrets/rotate/start', 'POST'] as const
}

export function getPostV1M2mClientsClientIdSecretsRotateStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.m2m.clients)[':client_id']['secrets']['rotate']['start']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.m2m.clients)[':client_id']['secrets']['rotate']['start']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1M2mClientsClientIdSecretsRotateStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.m2m.clients)[':client_id']['secrets']['rotate']['start']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.m2m.clients[':client_id'].secrets.rotate.start.$post(args, options),
      )
    },
  })
}

export function createPostV1M2mClientsClientIdSecretsRotateStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.m2m.clients)[':client_id']['secrets']['rotate']['start']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.m2m.clients)[':client_id']['secrets']['rotate']['start']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1M2mClientsClientIdSecretsRotateStartMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1M2mClientsClientIdSecretsRotateCancelMutationKey() {
  return ['v1', '/v1/m2m/clients/:client_id/secrets/rotate/cancel', 'POST'] as const
}

export function getPostV1M2mClientsClientIdSecretsRotateCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.m2m.clients)[':client_id']['secrets']['rotate']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.m2m.clients)[':client_id']['secrets']['rotate']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1M2mClientsClientIdSecretsRotateCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.m2m.clients)[':client_id']['secrets']['rotate']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.m2m.clients[':client_id'].secrets.rotate.cancel.$post(args, options),
      )
    },
  })
}

export function createPostV1M2mClientsClientIdSecretsRotateCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.m2m.clients)[':client_id']['secrets']['rotate']['cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.m2m.clients)[':client_id']['secrets']['rotate']['cancel']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1M2mClientsClientIdSecretsRotateCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1M2mClientsClientIdSecretsRotateMutationKey() {
  return ['v1', '/v1/m2m/clients/:client_id/secrets/rotate', 'POST'] as const
}

export function getPostV1M2mClientsClientIdSecretsRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.m2m.clients)[':client_id']['secrets']['rotate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.m2m.clients)[':client_id']['secrets']['rotate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1M2mClientsClientIdSecretsRotateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.m2m.clients)[':client_id']['secrets']['rotate']['$post']
      >,
    ) {
      return parseResponse(client.v1.m2m.clients[':client_id'].secrets.rotate.$post(args, options))
    },
  })
}

export function createPostV1M2mClientsClientIdSecretsRotate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.m2m.clients)[':client_id']['secrets']['rotate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.m2m.clients)[':client_id']['secrets']['rotate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1M2mClientsClientIdSecretsRotateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1MagicLinksAuthenticateMutationKey() {
  return ['v1', '/v1/magic_links/authenticate', 'POST'] as const
}

export function getPostV1MagicLinksAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.magic_links.authenticate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.magic_links.authenticate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MagicLinksAuthenticateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.magic_links.authenticate.$post>) {
      return parseResponse(client.v1.magic_links.authenticate.$post(args, options))
    },
  })
}

export function createPostV1MagicLinksAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.magic_links.authenticate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.magic_links.authenticate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1MagicLinksAuthenticateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1MagicLinksMutationKey() {
  return ['v1', '/v1/magic_links', 'POST'] as const
}

export function getPostV1MagicLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.magic_links.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.magic_links.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MagicLinksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.magic_links.$post>) {
      return parseResponse(client.v1.magic_links.$post(args, options))
    },
  })
}

export function createPostV1MagicLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.magic_links.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.magic_links.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1MagicLinksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1MagicLinksEmailSendMutationKey() {
  return ['v1', '/v1/magic_links/email/send', 'POST'] as const
}

export function getPostV1MagicLinksEmailSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.magic_links.email.send.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.magic_links.email.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MagicLinksEmailSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.magic_links.email.send.$post>) {
      return parseResponse(client.v1.magic_links.email.send.$post(args, options))
    },
  })
}

export function createPostV1MagicLinksEmailSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.magic_links.email.send.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.magic_links.email.send.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1MagicLinksEmailSendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1MagicLinksEmailLoginOrCreateMutationKey() {
  return ['v1', '/v1/magic_links/email/login_or_create', 'POST'] as const
}

export function getPostV1MagicLinksEmailLoginOrCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.magic_links.email.login_or_create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.magic_links.email.login_or_create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MagicLinksEmailLoginOrCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.magic_links.email.login_or_create.$post>,
    ) {
      return parseResponse(client.v1.magic_links.email.login_or_create.$post(args, options))
    },
  })
}

export function createPostV1MagicLinksEmailLoginOrCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.magic_links.email.login_or_create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.magic_links.email.login_or_create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1MagicLinksEmailLoginOrCreateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1MagicLinksEmailInviteMutationKey() {
  return ['v1', '/v1/magic_links/email/invite', 'POST'] as const
}

export function getPostV1MagicLinksEmailInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.magic_links.email.invite.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.magic_links.email.invite.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MagicLinksEmailInviteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.magic_links.email.invite.$post>) {
      return parseResponse(client.v1.magic_links.email.invite.$post(args, options))
    },
  })
}

export function createPostV1MagicLinksEmailInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.magic_links.email.invite.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.magic_links.email.invite.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1MagicLinksEmailInviteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1MagicLinksEmailRevokeInviteMutationKey() {
  return ['v1', '/v1/magic_links/email/revoke_invite', 'POST'] as const
}

export function getPostV1MagicLinksEmailRevokeInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.magic_links.email.revoke_invite.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.magic_links.email.revoke_invite.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MagicLinksEmailRevokeInviteMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.magic_links.email.revoke_invite.$post>,
    ) {
      return parseResponse(client.v1.magic_links.email.revoke_invite.$post(args, options))
    },
  })
}

export function createPostV1MagicLinksEmailRevokeInvite<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.magic_links.email.revoke_invite.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.magic_links.email.revoke_invite.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1MagicLinksEmailRevokeInviteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bMagicLinksAuthenticateMutationKey() {
  return ['v1', '/v1/b2b/magic_links/authenticate', 'POST'] as const
}

export function getPostV1B2bMagicLinksAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.magic_links.authenticate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.magic_links.authenticate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bMagicLinksAuthenticateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.magic_links.authenticate.$post>) {
      return parseResponse(client.v1.b2b.magic_links.authenticate.$post(args, options))
    },
  })
}

export function createPostV1B2bMagicLinksAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.magic_links.authenticate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.magic_links.authenticate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bMagicLinksAuthenticateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bMagicLinksEmailLoginOrSignupMutationKey() {
  return ['v1', '/v1/b2b/magic_links/email/login_or_signup', 'POST'] as const
}

export function getPostV1B2bMagicLinksEmailLoginOrSignupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.magic_links.email.login_or_signup.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.magic_links.email.login_or_signup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bMagicLinksEmailLoginOrSignupMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.b2b.magic_links.email.login_or_signup.$post>,
    ) {
      return parseResponse(client.v1.b2b.magic_links.email.login_or_signup.$post(args, options))
    },
  })
}

export function createPostV1B2bMagicLinksEmailLoginOrSignup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.magic_links.email.login_or_signup.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.magic_links.email.login_or_signup.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bMagicLinksEmailLoginOrSignupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bMagicLinksEmailInviteMutationKey() {
  return ['v1', '/v1/b2b/magic_links/email/invite', 'POST'] as const
}

export function getPostV1B2bMagicLinksEmailInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.magic_links.email.invite.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.magic_links.email.invite.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bMagicLinksEmailInviteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.magic_links.email.invite.$post>) {
      return parseResponse(client.v1.b2b.magic_links.email.invite.$post(args, options))
    },
  })
}

export function createPostV1B2bMagicLinksEmailInvite<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.magic_links.email.invite.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.magic_links.email.invite.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bMagicLinksEmailInviteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bMagicLinksEmailDiscoverySendMutationKey() {
  return ['v1', '/v1/b2b/magic_links/email/discovery/send', 'POST'] as const
}

export function getPostV1B2bMagicLinksEmailDiscoverySendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.magic_links.email.discovery.send.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.magic_links.email.discovery.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bMagicLinksEmailDiscoverySendMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.b2b.magic_links.email.discovery.send.$post>,
    ) {
      return parseResponse(client.v1.b2b.magic_links.email.discovery.send.$post(args, options))
    },
  })
}

export function createPostV1B2bMagicLinksEmailDiscoverySend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.magic_links.email.discovery.send.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.magic_links.email.discovery.send.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bMagicLinksEmailDiscoverySendMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bMagicLinksDiscoveryAuthenticateMutationKey() {
  return ['v1', '/v1/b2b/magic_links/discovery/authenticate', 'POST'] as const
}

export function getPostV1B2bMagicLinksDiscoveryAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.magic_links.discovery.authenticate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.magic_links.discovery.authenticate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bMagicLinksDiscoveryAuthenticateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.b2b.magic_links.discovery.authenticate.$post>,
    ) {
      return parseResponse(client.v1.b2b.magic_links.discovery.authenticate.$post(args, options))
    },
  })
}

export function createPostV1B2bMagicLinksDiscoveryAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.magic_links.discovery.authenticate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.magic_links.discovery.authenticate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bMagicLinksDiscoveryAuthenticateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bOauthAuthenticateMutationKey() {
  return ['v1', '/v1/b2b/oauth/authenticate', 'POST'] as const
}

export function getPostV1B2bOauthAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.oauth.authenticate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.oauth.authenticate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bOauthAuthenticateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.oauth.authenticate.$post>) {
      return parseResponse(client.v1.b2b.oauth.authenticate.$post(args, options))
    },
  })
}

export function createPostV1B2bOauthAuthenticate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.oauth.authenticate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.oauth.authenticate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bOauthAuthenticateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bOauthDiscoveryAuthenticateMutationKey() {
  return ['v1', '/v1/b2b/oauth/discovery/authenticate', 'POST'] as const
}

export function getPostV1B2bOauthDiscoveryAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.oauth.discovery.authenticate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.oauth.discovery.authenticate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bOauthDiscoveryAuthenticateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.b2b.oauth.discovery.authenticate.$post>,
    ) {
      return parseResponse(client.v1.b2b.oauth.discovery.authenticate.$post(args, options))
    },
  })
}

export function createPostV1B2bOauthDiscoveryAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.oauth.discovery.authenticate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.oauth.discovery.authenticate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bOauthDiscoveryAuthenticateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bOtpsSmsSendMutationKey() {
  return ['v1', '/v1/b2b/otps/sms/send', 'POST'] as const
}

export function getPostV1B2bOtpsSmsSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.otps.sms.send.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.otps.sms.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bOtpsSmsSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.otps.sms.send.$post>) {
      return parseResponse(client.v1.b2b.otps.sms.send.$post(args, options))
    },
  })
}

export function createPostV1B2bOtpsSmsSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.otps.sms.send.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.otps.sms.send.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bOtpsSmsSendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bOtpsSmsAuthenticateMutationKey() {
  return ['v1', '/v1/b2b/otps/sms/authenticate', 'POST'] as const
}

export function getPostV1B2bOtpsSmsAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.otps.sms.authenticate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.otps.sms.authenticate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bOtpsSmsAuthenticateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.otps.sms.authenticate.$post>) {
      return parseResponse(client.v1.b2b.otps.sms.authenticate.$post(args, options))
    },
  })
}

export function createPostV1B2bOtpsSmsAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.otps.sms.authenticate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.otps.sms.authenticate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bOtpsSmsAuthenticateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bOtpsEmailLoginOrSignupMutationKey() {
  return ['v1', '/v1/b2b/otps/email/login_or_signup', 'POST'] as const
}

export function getPostV1B2bOtpsEmailLoginOrSignupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.otps.email.login_or_signup.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.otps.email.login_or_signup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bOtpsEmailLoginOrSignupMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.b2b.otps.email.login_or_signup.$post>,
    ) {
      return parseResponse(client.v1.b2b.otps.email.login_or_signup.$post(args, options))
    },
  })
}

export function createPostV1B2bOtpsEmailLoginOrSignup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.otps.email.login_or_signup.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.otps.email.login_or_signup.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bOtpsEmailLoginOrSignupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bOtpsEmailAuthenticateMutationKey() {
  return ['v1', '/v1/b2b/otps/email/authenticate', 'POST'] as const
}

export function getPostV1B2bOtpsEmailAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.otps.email.authenticate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.otps.email.authenticate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bOtpsEmailAuthenticateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.otps.email.authenticate.$post>) {
      return parseResponse(client.v1.b2b.otps.email.authenticate.$post(args, options))
    },
  })
}

export function createPostV1B2bOtpsEmailAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.otps.email.authenticate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.otps.email.authenticate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bOtpsEmailAuthenticateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bOtpsEmailDiscoverySendMutationKey() {
  return ['v1', '/v1/b2b/otps/email/discovery/send', 'POST'] as const
}

export function getPostV1B2bOtpsEmailDiscoverySendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.otps.email.discovery.send.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.otps.email.discovery.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bOtpsEmailDiscoverySendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.otps.email.discovery.send.$post>) {
      return parseResponse(client.v1.b2b.otps.email.discovery.send.$post(args, options))
    },
  })
}

export function createPostV1B2bOtpsEmailDiscoverySend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.otps.email.discovery.send.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.otps.email.discovery.send.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bOtpsEmailDiscoverySendMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bOtpsEmailDiscoveryAuthenticateMutationKey() {
  return ['v1', '/v1/b2b/otps/email/discovery/authenticate', 'POST'] as const
}

export function getPostV1B2bOtpsEmailDiscoveryAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.otps.email.discovery.authenticate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.otps.email.discovery.authenticate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bOtpsEmailDiscoveryAuthenticateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.b2b.otps.email.discovery.authenticate.$post>,
    ) {
      return parseResponse(client.v1.b2b.otps.email.discovery.authenticate.$post(args, options))
    },
  })
}

export function createPostV1B2bOtpsEmailDiscoveryAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.otps.email.discovery.authenticate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.otps.email.discovery.authenticate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bOtpsEmailDiscoveryAuthenticateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1PasswordsMutationKey() {
  return ['v1', '/v1/passwords', 'POST'] as const
}

export function getPostV1PasswordsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.passwords.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.passwords.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PasswordsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.passwords.$post>) {
      return parseResponse(client.v1.passwords.$post(args, options))
    },
  })
}

export function createPostV1Passwords<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.passwords.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.passwords.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PasswordsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1PasswordsAuthenticateMutationKey() {
  return ['v1', '/v1/passwords/authenticate', 'POST'] as const
}

export function getPostV1PasswordsAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.passwords.authenticate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.passwords.authenticate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PasswordsAuthenticateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.passwords.authenticate.$post>) {
      return parseResponse(client.v1.passwords.authenticate.$post(args, options))
    },
  })
}

export function createPostV1PasswordsAuthenticate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.passwords.authenticate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.passwords.authenticate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PasswordsAuthenticateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1PasswordsStrengthCheckMutationKey() {
  return ['v1', '/v1/passwords/strength_check', 'POST'] as const
}

export function getPostV1PasswordsStrengthCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.passwords.strength_check.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.passwords.strength_check.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PasswordsStrengthCheckMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.passwords.strength_check.$post>) {
      return parseResponse(client.v1.passwords.strength_check.$post(args, options))
    },
  })
}

export function createPostV1PasswordsStrengthCheck<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.passwords.strength_check.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.passwords.strength_check.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PasswordsStrengthCheckMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1PasswordsMigrateMutationKey() {
  return ['v1', '/v1/passwords/migrate', 'POST'] as const
}

export function getPostV1PasswordsMigrateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.passwords.migrate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.passwords.migrate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PasswordsMigrateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.passwords.migrate.$post>) {
      return parseResponse(client.v1.passwords.migrate.$post(args, options))
    },
  })
}

export function createPostV1PasswordsMigrate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.passwords.migrate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.passwords.migrate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PasswordsMigrateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1PasswordsEmailResetStartMutationKey() {
  return ['v1', '/v1/passwords/email/reset/start', 'POST'] as const
}

export function getPostV1PasswordsEmailResetStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.passwords.email.reset.start.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.passwords.email.reset.start.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PasswordsEmailResetStartMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.passwords.email.reset.start.$post>) {
      return parseResponse(client.v1.passwords.email.reset.start.$post(args, options))
    },
  })
}

export function createPostV1PasswordsEmailResetStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.passwords.email.reset.start.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.passwords.email.reset.start.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PasswordsEmailResetStartMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1PasswordsEmailResetMutationKey() {
  return ['v1', '/v1/passwords/email/reset', 'POST'] as const
}

export function getPostV1PasswordsEmailResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.passwords.email.reset.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.passwords.email.reset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PasswordsEmailResetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.passwords.email.reset.$post>) {
      return parseResponse(client.v1.passwords.email.reset.$post(args, options))
    },
  })
}

export function createPostV1PasswordsEmailReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.passwords.email.reset.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.passwords.email.reset.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PasswordsEmailResetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1PasswordsExistingPasswordResetMutationKey() {
  return ['v1', '/v1/passwords/existing_password/reset', 'POST'] as const
}

export function getPostV1PasswordsExistingPasswordResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.passwords.existing_password.reset.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.passwords.existing_password.reset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PasswordsExistingPasswordResetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.passwords.existing_password.reset.$post>,
    ) {
      return parseResponse(client.v1.passwords.existing_password.reset.$post(args, options))
    },
  })
}

export function createPostV1PasswordsExistingPasswordReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.passwords.existing_password.reset.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.passwords.existing_password.reset.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PasswordsExistingPasswordResetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1PasswordsSessionResetMutationKey() {
  return ['v1', '/v1/passwords/session/reset', 'POST'] as const
}

export function getPostV1PasswordsSessionResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.passwords.session.reset.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.passwords.session.reset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PasswordsSessionResetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.passwords.session.reset.$post>) {
      return parseResponse(client.v1.passwords.session.reset.$post(args, options))
    },
  })
}

export function createPostV1PasswordsSessionReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.passwords.session.reset.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.passwords.session.reset.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PasswordsSessionResetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bPasswordsStrengthCheckMutationKey() {
  return ['v1', '/v1/b2b/passwords/strength_check', 'POST'] as const
}

export function getPostV1B2bPasswordsStrengthCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.passwords.strength_check.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.passwords.strength_check.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bPasswordsStrengthCheckMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.passwords.strength_check.$post>) {
      return parseResponse(client.v1.b2b.passwords.strength_check.$post(args, options))
    },
  })
}

export function createPostV1B2bPasswordsStrengthCheck<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.passwords.strength_check.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.passwords.strength_check.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bPasswordsStrengthCheckMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bPasswordsMigrateMutationKey() {
  return ['v1', '/v1/b2b/passwords/migrate', 'POST'] as const
}

export function getPostV1B2bPasswordsMigrateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.passwords.migrate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.passwords.migrate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bPasswordsMigrateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.passwords.migrate.$post>) {
      return parseResponse(client.v1.b2b.passwords.migrate.$post(args, options))
    },
  })
}

export function createPostV1B2bPasswordsMigrate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.passwords.migrate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.passwords.migrate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bPasswordsMigrateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bPasswordsAuthenticateMutationKey() {
  return ['v1', '/v1/b2b/passwords/authenticate', 'POST'] as const
}

export function getPostV1B2bPasswordsAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.passwords.authenticate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.passwords.authenticate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bPasswordsAuthenticateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.passwords.authenticate.$post>) {
      return parseResponse(client.v1.b2b.passwords.authenticate.$post(args, options))
    },
  })
}

export function createPostV1B2bPasswordsAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.passwords.authenticate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.passwords.authenticate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bPasswordsAuthenticateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bPasswordsEmailResetStartMutationKey() {
  return ['v1', '/v1/b2b/passwords/email/reset/start', 'POST'] as const
}

export function getPostV1B2bPasswordsEmailResetStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.passwords.email.reset.start.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.passwords.email.reset.start.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bPasswordsEmailResetStartMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.b2b.passwords.email.reset.start.$post>,
    ) {
      return parseResponse(client.v1.b2b.passwords.email.reset.start.$post(args, options))
    },
  })
}

export function createPostV1B2bPasswordsEmailResetStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.passwords.email.reset.start.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.passwords.email.reset.start.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bPasswordsEmailResetStartMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bPasswordsEmailResetMutationKey() {
  return ['v1', '/v1/b2b/passwords/email/reset', 'POST'] as const
}

export function getPostV1B2bPasswordsEmailResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.passwords.email.reset.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.passwords.email.reset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bPasswordsEmailResetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.passwords.email.reset.$post>) {
      return parseResponse(client.v1.b2b.passwords.email.reset.$post(args, options))
    },
  })
}

export function createPostV1B2bPasswordsEmailReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.passwords.email.reset.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.passwords.email.reset.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bPasswordsEmailResetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bPasswordsEmailRequireResetMutationKey() {
  return ['v1', '/v1/b2b/passwords/email/require_reset', 'POST'] as const
}

export function getPostV1B2bPasswordsEmailRequireResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.passwords.email.require_reset.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.passwords.email.require_reset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bPasswordsEmailRequireResetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.b2b.passwords.email.require_reset.$post>,
    ) {
      return parseResponse(client.v1.b2b.passwords.email.require_reset.$post(args, options))
    },
  })
}

export function createPostV1B2bPasswordsEmailRequireReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.passwords.email.require_reset.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.passwords.email.require_reset.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bPasswordsEmailRequireResetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bPasswordsSessionResetMutationKey() {
  return ['v1', '/v1/b2b/passwords/session/reset', 'POST'] as const
}

export function getPostV1B2bPasswordsSessionResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.passwords.session.reset.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.passwords.session.reset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bPasswordsSessionResetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.passwords.session.reset.$post>) {
      return parseResponse(client.v1.b2b.passwords.session.reset.$post(args, options))
    },
  })
}

export function createPostV1B2bPasswordsSessionReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.passwords.session.reset.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.passwords.session.reset.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bPasswordsSessionResetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bPasswordsExistingPasswordResetMutationKey() {
  return ['v1', '/v1/b2b/passwords/existing_password/reset', 'POST'] as const
}

export function getPostV1B2bPasswordsExistingPasswordResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.passwords.existing_password.reset.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.passwords.existing_password.reset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bPasswordsExistingPasswordResetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.b2b.passwords.existing_password.reset.$post>,
    ) {
      return parseResponse(client.v1.b2b.passwords.existing_password.reset.$post(args, options))
    },
  })
}

export function createPostV1B2bPasswordsExistingPasswordReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.passwords.existing_password.reset.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.passwords.existing_password.reset.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bPasswordsExistingPasswordResetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bPasswordsDiscoveryAuthenticateMutationKey() {
  return ['v1', '/v1/b2b/passwords/discovery/authenticate', 'POST'] as const
}

export function getPostV1B2bPasswordsDiscoveryAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.passwords.discovery.authenticate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.passwords.discovery.authenticate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bPasswordsDiscoveryAuthenticateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.b2b.passwords.discovery.authenticate.$post>,
    ) {
      return parseResponse(client.v1.b2b.passwords.discovery.authenticate.$post(args, options))
    },
  })
}

export function createPostV1B2bPasswordsDiscoveryAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.passwords.discovery.authenticate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.passwords.discovery.authenticate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bPasswordsDiscoveryAuthenticateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bPasswordsDiscoveryEmailResetStartMutationKey() {
  return ['v1', '/v1/b2b/passwords/discovery/email/reset/start', 'POST'] as const
}

export function getPostV1B2bPasswordsDiscoveryEmailResetStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.passwords.discovery.email.reset.start.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.passwords.discovery.email.reset.start.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bPasswordsDiscoveryEmailResetStartMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.b2b.passwords.discovery.email.reset.start.$post>,
    ) {
      return parseResponse(client.v1.b2b.passwords.discovery.email.reset.start.$post(args, options))
    },
  })
}

export function createPostV1B2bPasswordsDiscoveryEmailResetStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.passwords.discovery.email.reset.start.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.passwords.discovery.email.reset.start.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bPasswordsDiscoveryEmailResetStartMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bPasswordsDiscoveryEmailResetMutationKey() {
  return ['v1', '/v1/b2b/passwords/discovery/email/reset', 'POST'] as const
}

export function getPostV1B2bPasswordsDiscoveryEmailResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.passwords.discovery.email.reset.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.passwords.discovery.email.reset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bPasswordsDiscoveryEmailResetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.b2b.passwords.discovery.email.reset.$post>,
    ) {
      return parseResponse(client.v1.b2b.passwords.discovery.email.reset.$post(args, options))
    },
  })
}

export function createPostV1B2bPasswordsDiscoveryEmailReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.b2b.passwords.discovery.email.reset.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.passwords.discovery.email.reset.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bPasswordsDiscoveryEmailResetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1OauthAttachMutationKey() {
  return ['v1', '/v1/oauth/attach', 'POST'] as const
}

export function getPostV1OauthAttachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.attach.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.oauth.attach.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OauthAttachMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.oauth.attach.$post>) {
      return parseResponse(client.v1.oauth.attach.$post(args, options))
    },
  })
}

export function createPostV1OauthAttach<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.attach.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.oauth.attach.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OauthAttachMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1OauthAuthenticateMutationKey() {
  return ['v1', '/v1/oauth/authenticate', 'POST'] as const
}

export function getPostV1OauthAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.authenticate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.oauth.authenticate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OauthAuthenticateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.oauth.authenticate.$post>) {
      return parseResponse(client.v1.oauth.authenticate.$post(args, options))
    },
  })
}

export function createPostV1OauthAuthenticate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.authenticate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.oauth.authenticate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OauthAuthenticateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1OtpsAuthenticateMutationKey() {
  return ['v1', '/v1/otps/authenticate', 'POST'] as const
}

export function getPostV1OtpsAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.otps.authenticate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.otps.authenticate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OtpsAuthenticateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.otps.authenticate.$post>) {
      return parseResponse(client.v1.otps.authenticate.$post(args, options))
    },
  })
}

export function createPostV1OtpsAuthenticate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.otps.authenticate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.otps.authenticate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OtpsAuthenticateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1OtpsSmsSendMutationKey() {
  return ['v1', '/v1/otps/sms/send', 'POST'] as const
}

export function getPostV1OtpsSmsSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.otps.sms.send.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.otps.sms.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OtpsSmsSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.otps.sms.send.$post>) {
      return parseResponse(client.v1.otps.sms.send.$post(args, options))
    },
  })
}

export function createPostV1OtpsSmsSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.otps.sms.send.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.otps.sms.send.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OtpsSmsSendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1OtpsSmsLoginOrCreateMutationKey() {
  return ['v1', '/v1/otps/sms/login_or_create', 'POST'] as const
}

export function getPostV1OtpsSmsLoginOrCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.otps.sms.login_or_create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.otps.sms.login_or_create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OtpsSmsLoginOrCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.otps.sms.login_or_create.$post>) {
      return parseResponse(client.v1.otps.sms.login_or_create.$post(args, options))
    },
  })
}

export function createPostV1OtpsSmsLoginOrCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.otps.sms.login_or_create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.otps.sms.login_or_create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OtpsSmsLoginOrCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1OtpsWhatsappSendMutationKey() {
  return ['v1', '/v1/otps/whatsapp/send', 'POST'] as const
}

export function getPostV1OtpsWhatsappSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.otps.whatsapp.send.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.otps.whatsapp.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OtpsWhatsappSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.otps.whatsapp.send.$post>) {
      return parseResponse(client.v1.otps.whatsapp.send.$post(args, options))
    },
  })
}

export function createPostV1OtpsWhatsappSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.otps.whatsapp.send.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.otps.whatsapp.send.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OtpsWhatsappSendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1OtpsWhatsappLoginOrCreateMutationKey() {
  return ['v1', '/v1/otps/whatsapp/login_or_create', 'POST'] as const
}

export function getPostV1OtpsWhatsappLoginOrCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.otps.whatsapp.login_or_create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.otps.whatsapp.login_or_create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OtpsWhatsappLoginOrCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.otps.whatsapp.login_or_create.$post>) {
      return parseResponse(client.v1.otps.whatsapp.login_or_create.$post(args, options))
    },
  })
}

export function createPostV1OtpsWhatsappLoginOrCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.otps.whatsapp.login_or_create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.otps.whatsapp.login_or_create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OtpsWhatsappLoginOrCreateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1OtpsEmailSendMutationKey() {
  return ['v1', '/v1/otps/email/send', 'POST'] as const
}

export function getPostV1OtpsEmailSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.otps.email.send.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.otps.email.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OtpsEmailSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.otps.email.send.$post>) {
      return parseResponse(client.v1.otps.email.send.$post(args, options))
    },
  })
}

export function createPostV1OtpsEmailSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.otps.email.send.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.otps.email.send.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OtpsEmailSendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1OtpsEmailLoginOrCreateMutationKey() {
  return ['v1', '/v1/otps/email/login_or_create', 'POST'] as const
}

export function getPostV1OtpsEmailLoginOrCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.otps.email.login_or_create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.otps.email.login_or_create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OtpsEmailLoginOrCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.otps.email.login_or_create.$post>) {
      return parseResponse(client.v1.otps.email.login_or_create.$post(args, options))
    },
  })
}

export function createPostV1OtpsEmailLoginOrCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.otps.email.login_or_create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.otps.email.login_or_create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OtpsEmailLoginOrCreateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ProjectsMetricsQueryKey() {
  return ['v1', '/v1/projects/metrics'] as const
}

export function getV1ProjectsMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.metrics.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.metrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsMetricsQueryKey>
  >({
    queryKey: getV1ProjectsMetricsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects.metrics.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProjectsMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.metrics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ProjectsMetricsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1B2bSsoOrganizationIdQueryKey(
  args: InferRequestType<(typeof client.v1.b2b.sso)[':organization_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/b2b/sso/:organization_id', keyArgs] as const
}

export function getV1B2bSsoOrganizationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.b2b.sso)[':organization_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.b2b.sso)[':organization_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.b2b.sso)[':organization_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1B2bSsoOrganizationIdQueryKey>
  >({
    queryKey: getV1B2bSsoOrganizationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.b2b.sso[':organization_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1B2bSsoOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.b2b.sso)[':organization_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.b2b.sso)[':organization_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.b2b.sso)[':organization_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1B2bSsoOrganizationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1B2bSsoOrganizationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV1B2bSsoOrganizationIdConnectionsConnectionIdMutationKey() {
  return ['v1', '/v1/b2b/sso/:organization_id/connections/:connection_id', 'DELETE'] as const
}

export function getDeleteV1B2bSsoOrganizationIdConnectionsConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.sso)[':organization_id']['connections'][':connection_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.b2b.sso)[':organization_id']['connections'][':connection_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1B2bSsoOrganizationIdConnectionsConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.b2b.sso)[':organization_id']['connections'][':connection_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.b2b.sso[':organization_id'].connections[':connection_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1B2bSsoOrganizationIdConnectionsConnectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.sso)[':organization_id']['connections'][':connection_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.b2b.sso)[':organization_id']['connections'][':connection_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1B2bSsoOrganizationIdConnectionsConnectionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bSsoAuthenticateMutationKey() {
  return ['v1', '/v1/b2b/sso/authenticate', 'POST'] as const
}

export function getPostV1B2bSsoAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.sso.authenticate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.b2b.sso.authenticate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bSsoAuthenticateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.b2b.sso.authenticate.$post>) {
      return parseResponse(client.v1.b2b.sso.authenticate.$post(args, options))
    },
  })
}

export function createPostV1B2bSsoAuthenticate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.sso.authenticate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.b2b.sso.authenticate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bSsoAuthenticateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bSsoOidcOrganizationIdMutationKey() {
  return ['v1', '/v1/b2b/sso/oidc/:organization_id', 'POST'] as const
}

export function getPostV1B2bSsoOidcOrganizationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.b2b.sso.oidc)[':organization_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.b2b.sso.oidc)[':organization_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bSsoOidcOrganizationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.b2b.sso.oidc)[':organization_id']['$post']>,
    ) {
      return parseResponse(client.v1.b2b.sso.oidc[':organization_id'].$post(args, options))
    },
  })
}

export function createPostV1B2bSsoOidcOrganizationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.b2b.sso.oidc)[':organization_id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.b2b.sso.oidc)[':organization_id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bSsoOidcOrganizationIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1B2bSsoOidcOrganizationIdConnectionsConnectionIdMutationKey() {
  return ['v1', '/v1/b2b/sso/oidc/:organization_id/connections/:connection_id', 'PUT'] as const
}

export function getPutV1B2bSsoOidcOrganizationIdConnectionsConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.sso.oidc)[':organization_id']['connections'][':connection_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.b2b.sso.oidc)[':organization_id']['connections'][':connection_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1B2bSsoOidcOrganizationIdConnectionsConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.b2b.sso.oidc)[':organization_id']['connections'][':connection_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.b2b.sso.oidc[':organization_id'].connections[':connection_id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutV1B2bSsoOidcOrganizationIdConnectionsConnectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.sso.oidc)[':organization_id']['connections'][':connection_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.b2b.sso.oidc)[':organization_id']['connections'][':connection_id']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1B2bSsoOidcOrganizationIdConnectionsConnectionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bSsoSamlOrganizationIdMutationKey() {
  return ['v1', '/v1/b2b/sso/saml/:organization_id', 'POST'] as const
}

export function getPostV1B2bSsoSamlOrganizationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.b2b.sso.saml)[':organization_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.b2b.sso.saml)[':organization_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bSsoSamlOrganizationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.b2b.sso.saml)[':organization_id']['$post']>,
    ) {
      return parseResponse(client.v1.b2b.sso.saml[':organization_id'].$post(args, options))
    },
  })
}

export function createPostV1B2bSsoSamlOrganizationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.b2b.sso.saml)[':organization_id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.b2b.sso.saml)[':organization_id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bSsoSamlOrganizationIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1B2bSsoSamlOrganizationIdConnectionsConnectionIdMutationKey() {
  return ['v1', '/v1/b2b/sso/saml/:organization_id/connections/:connection_id', 'PUT'] as const
}

export function getPutV1B2bSsoSamlOrganizationIdConnectionsConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1B2bSsoSamlOrganizationIdConnectionsConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.b2b.sso.saml[':organization_id'].connections[':connection_id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutV1B2bSsoSamlOrganizationIdConnectionsConnectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1B2bSsoSamlOrganizationIdConnectionsConnectionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1B2bSsoSamlOrganizationIdConnectionsConnectionIdUrlMutationKey() {
  return ['v1', '/v1/b2b/sso/saml/:organization_id/connections/:connection_id/url', 'PUT'] as const
}

export function getPutV1B2bSsoSamlOrganizationIdConnectionsConnectionIdUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['url']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['url']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1B2bSsoSamlOrganizationIdConnectionsConnectionIdUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['url']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.b2b.sso.saml[':organization_id'].connections[':connection_id'].url.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutV1B2bSsoSamlOrganizationIdConnectionsConnectionIdUrl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['url']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['url']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1B2bSsoSamlOrganizationIdConnectionsConnectionIdUrlMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdVerificationCertificatesCertificateIdMutationKey() {
  return [
    'v1',
    '/v1/b2b/sso/saml/:organization_id/connections/:connection_id/verification_certificates/:certificate_id',
    'DELETE',
  ] as const
}

export function getDeleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdVerificationCertificatesCertificateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['verification_certificates'][':certificate_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['verification_certificates'][':certificate_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdVerificationCertificatesCertificateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['verification_certificates'][':certificate_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.b2b.sso.saml[':organization_id'].connections[
          ':connection_id'
        ].verification_certificates[':certificate_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdVerificationCertificatesCertificateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['verification_certificates'][':certificate_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['verification_certificates'][':certificate_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdVerificationCertificatesCertificateIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdEncryptionPrivateKeysPrivateKeyIdMutationKey() {
  return [
    'v1',
    '/v1/b2b/sso/saml/:organization_id/connections/:connection_id/encryption_private_keys/:private_key_id',
    'DELETE',
  ] as const
}

export function getDeleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdEncryptionPrivateKeysPrivateKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['encryption_private_keys'][':private_key_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['encryption_private_keys'][':private_key_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdEncryptionPrivateKeysPrivateKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['encryption_private_keys'][':private_key_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.b2b.sso.saml[':organization_id'].connections[
          ':connection_id'
        ].encryption_private_keys[':private_key_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdEncryptionPrivateKeysPrivateKeyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['encryption_private_keys'][':private_key_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['encryption_private_keys'][':private_key_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdEncryptionPrivateKeysPrivateKeyIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1B2bSsoExternalOrganizationIdMutationKey() {
  return ['v1', '/v1/b2b/sso/external/:organization_id', 'POST'] as const
}

export function getPostV1B2bSsoExternalOrganizationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.b2b.sso.external)[':organization_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.b2b.sso.external)[':organization_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1B2bSsoExternalOrganizationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.b2b.sso.external)[':organization_id']['$post']>,
    ) {
      return parseResponse(client.v1.b2b.sso.external[':organization_id'].$post(args, options))
    },
  })
}

export function createPostV1B2bSsoExternalOrganizationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.b2b.sso.external)[':organization_id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.b2b.sso.external)[':organization_id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1B2bSsoExternalOrganizationIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1B2bSsoExternalOrganizationIdConnectionsConnectionIdMutationKey() {
  return ['v1', '/v1/b2b/sso/external/:organization_id/connections/:connection_id', 'PUT'] as const
}

export function getPutV1B2bSsoExternalOrganizationIdConnectionsConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.sso.external)[':organization_id']['connections'][':connection_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.b2b.sso.external)[':organization_id']['connections'][':connection_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1B2bSsoExternalOrganizationIdConnectionsConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.b2b.sso.external)[':organization_id']['connections'][':connection_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.b2b.sso.external[':organization_id'].connections[':connection_id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutV1B2bSsoExternalOrganizationIdConnectionsConnectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.b2b.sso.external)[':organization_id']['connections'][':connection_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.b2b.sso.external)[':organization_id']['connections'][':connection_id']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1B2bSsoExternalOrganizationIdConnectionsConnectionIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1TotpsMutationKey() {
  return ['v1', '/v1/totps', 'POST'] as const
}

export function getPostV1TotpsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.totps.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.totps.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TotpsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.totps.$post>) {
      return parseResponse(client.v1.totps.$post(args, options))
    },
  })
}

export function createPostV1Totps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.totps.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.totps.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TotpsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1TotpsAuthenticateMutationKey() {
  return ['v1', '/v1/totps/authenticate', 'POST'] as const
}

export function getPostV1TotpsAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.totps.authenticate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.totps.authenticate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TotpsAuthenticateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.totps.authenticate.$post>) {
      return parseResponse(client.v1.totps.authenticate.$post(args, options))
    },
  })
}

export function createPostV1TotpsAuthenticate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.totps.authenticate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.totps.authenticate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TotpsAuthenticateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1TotpsRecoveryCodesMutationKey() {
  return ['v1', '/v1/totps/recovery_codes', 'POST'] as const
}

export function getPostV1TotpsRecoveryCodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.totps.recovery_codes.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.totps.recovery_codes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TotpsRecoveryCodesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.totps.recovery_codes.$post>) {
      return parseResponse(client.v1.totps.recovery_codes.$post(args, options))
    },
  })
}

export function createPostV1TotpsRecoveryCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.totps.recovery_codes.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.totps.recovery_codes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TotpsRecoveryCodesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1TotpsRecoverMutationKey() {
  return ['v1', '/v1/totps/recover', 'POST'] as const
}

export function getPostV1TotpsRecoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.totps.recover.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.totps.recover.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TotpsRecoverMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.totps.recover.$post>) {
      return parseResponse(client.v1.totps.recover.$post(args, options))
    },
  })
}

export function createPostV1TotpsRecover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.totps.recover.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.totps.recover.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TotpsRecoverMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1WebauthnRegisterStartMutationKey() {
  return ['v1', '/v1/webauthn/register/start', 'POST'] as const
}

export function getPostV1WebauthnRegisterStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.webauthn.register.start.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.webauthn.register.start.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebauthnRegisterStartMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.webauthn.register.start.$post>) {
      return parseResponse(client.v1.webauthn.register.start.$post(args, options))
    },
  })
}

export function createPostV1WebauthnRegisterStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.webauthn.register.start.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.webauthn.register.start.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WebauthnRegisterStartMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1WebauthnRegisterMutationKey() {
  return ['v1', '/v1/webauthn/register', 'POST'] as const
}

export function getPostV1WebauthnRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.webauthn.register.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.webauthn.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebauthnRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.webauthn.register.$post>) {
      return parseResponse(client.v1.webauthn.register.$post(args, options))
    },
  })
}

export function createPostV1WebauthnRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.webauthn.register.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.webauthn.register.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WebauthnRegisterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1WebauthnAuthenticateStartMutationKey() {
  return ['v1', '/v1/webauthn/authenticate/start', 'POST'] as const
}

export function getPostV1WebauthnAuthenticateStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.webauthn.authenticate.start.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.webauthn.authenticate.start.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebauthnAuthenticateStartMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.webauthn.authenticate.start.$post>) {
      return parseResponse(client.v1.webauthn.authenticate.start.$post(args, options))
    },
  })
}

export function createPostV1WebauthnAuthenticateStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.webauthn.authenticate.start.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.webauthn.authenticate.start.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WebauthnAuthenticateStartMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1WebauthnAuthenticateMutationKey() {
  return ['v1', '/v1/webauthn/authenticate', 'POST'] as const
}

export function getPostV1WebauthnAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.webauthn.authenticate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.webauthn.authenticate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebauthnAuthenticateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.webauthn.authenticate.$post>) {
      return parseResponse(client.v1.webauthn.authenticate.$post(args, options))
    },
  })
}

export function createPostV1WebauthnAuthenticate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.webauthn.authenticate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.webauthn.authenticate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WebauthnAuthenticateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1WebauthnWebauthnRegistrationIdMutationKey() {
  return ['v1', '/v1/webauthn/:webauthn_registration_id', 'PUT'] as const
}

export function getPutV1WebauthnWebauthnRegistrationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.webauthn)[':webauthn_registration_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.webauthn)[':webauthn_registration_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1WebauthnWebauthnRegistrationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.webauthn)[':webauthn_registration_id']['$put']>,
    ) {
      return parseResponse(client.v1.webauthn[':webauthn_registration_id'].$put(args, options))
    },
  })
}

export function createPutV1WebauthnWebauthnRegistrationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.webauthn)[':webauthn_registration_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.webauthn)[':webauthn_registration_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1WebauthnWebauthnRegistrationIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1WebauthnCredentialsUserIdDomainQueryKey(
  args: InferRequestType<(typeof client.v1.webauthn.credentials)[':user_id'][':domain']['$get']>,
) {
  return ['v1', '/v1/webauthn/credentials/:user_id/:domain', args] as const
}

export function getV1WebauthnCredentialsUserIdDomainQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.webauthn.credentials)[':user_id'][':domain']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.webauthn.credentials)[':user_id'][':domain']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.webauthn.credentials)[':user_id'][':domain']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WebauthnCredentialsUserIdDomainQueryKey>
  >({
    queryKey: getV1WebauthnCredentialsUserIdDomainQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.webauthn.credentials[':user_id'][':domain'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WebauthnCredentialsUserIdDomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.webauthn.credentials)[':user_id'][':domain']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.webauthn.credentials)[':user_id'][':domain']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.webauthn.credentials)[':user_id'][':domain']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WebauthnCredentialsUserIdDomainQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WebauthnCredentialsUserIdDomainQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
