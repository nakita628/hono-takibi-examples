import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOcsKey() {
  return ['ocs'] as const
}

export function getOcsV2PhpAppsFederationApiV1SharedSecretQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['federation']['api']['v1']['shared-secret']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/federation/api/v1/shared-secret', keyArgs] as const
}

export function getOcsV2PhpAppsFederationApiV1SharedSecretQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['federation']['api']['v1']['shared-secret']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['federation']['api']['v1']['shared-secret']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['federation']['api']['v1']['shared-secret']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsFederationApiV1SharedSecretQueryKey>
  >({
    queryKey: getOcsV2PhpAppsFederationApiV1SharedSecretQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.federation.api.v1['shared-secret'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsFederationApiV1SharedSecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['federation']['api']['v1']['shared-secret']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['federation']['api']['v1']['shared-secret']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['federation']['api']['v1']['shared-secret']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsFederationApiV1SharedSecretQueryKey>
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
      ...getOcsV2PhpAppsFederationApiV1SharedSecretQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsFederationApiV1RequestSharedSecretMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/federation/api/v1/request-shared-secret', 'POST'] as const
}

export function getPostOcsV2PhpAppsFederationApiV1RequestSharedSecretMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['federation']['api']['v1']['request-shared-secret']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['federation']['api']['v1']['request-shared-secret']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsFederationApiV1RequestSharedSecretMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['federation']['api']['v1']['request-shared-secret']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.federation.api.v1['request-shared-secret'].$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsFederationApiV1RequestSharedSecret<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['federation']['api']['v1']['request-shared-secret']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['federation']['api']['v1']['request-shared-secret']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsFederationApiV1RequestSharedSecretMutationOptions<
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

export function getOcsV2PhpCloudSharedSecretQueryKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shared-secret']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/cloud/shared-secret', keyArgs] as const
}

export function getOcsV2PhpCloudSharedSecretQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['shared-secret']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shared-secret']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['shared-secret']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCloudSharedSecretQueryKey>
  >({
    queryKey: getOcsV2PhpCloudSharedSecretQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].cloud['shared-secret'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpCloudSharedSecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['shared-secret']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shared-secret']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['shared-secret']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpCloudSharedSecretQueryKey>
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
      ...getOcsV2PhpCloudSharedSecretQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpCloudSharedSecretMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/shared-secret', 'POST'] as const
}

export function getPostOcsV2PhpCloudSharedSecretMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['shared-secret']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shared-secret']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpCloudSharedSecretMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shared-secret']['$post']>,
    ) {
      return parseResponse(client.ocs['v2.php'].cloud['shared-secret'].$post(args, options))
    },
  })
}

export function createPostOcsV2PhpCloudSharedSecret<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['cloud']['shared-secret']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shared-secret']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpCloudSharedSecretMutationOptions<
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

export function getOcsV2PhpAppsFederationTrustedServersQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/federation/trusted-servers', keyArgs] as const
}

export function getOcsV2PhpAppsFederationTrustedServersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsFederationTrustedServersQueryKey>
  >({
    queryKey: getOcsV2PhpAppsFederationTrustedServersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.federation['trusted-servers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsFederationTrustedServers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsFederationTrustedServersQueryKey>
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
      ...getOcsV2PhpAppsFederationTrustedServersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsFederationTrustedServersMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/federation/trusted-servers', 'POST'] as const
}

export function getPostOcsV2PhpAppsFederationTrustedServersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsFederationTrustedServersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.federation['trusted-servers'].$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsFederationTrustedServers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsFederationTrustedServersMutationOptions<
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

export function getDeleteOcsV2PhpAppsFederationTrustedServersIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/federation/trusted-servers/:id', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsFederationTrustedServersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsFederationTrustedServersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.federation['trusted-servers'][':id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsFederationTrustedServersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers'][':id']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpAppsFederationTrustedServersIdMutationOptions<
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
