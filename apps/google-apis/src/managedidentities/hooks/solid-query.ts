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

export function getV1alpha1Key() {
  return ['v1alpha1'] as const
}

export function getPostV1alpha1DomainCheckMigrationPermissionMutationKey() {
  return ['v1alpha1', '/v1alpha1/:domain:checkMigrationPermission', 'POST'] as const
}

export function getPostV1alpha1DomainCheckMigrationPermissionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':domain:checkMigrationPermission']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':domain:checkMigrationPermission']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1DomainCheckMigrationPermissionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':domain:checkMigrationPermission']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':domain:checkMigrationPermission'].$post(args, options))
    },
  })
}

export function createPostV1alpha1DomainCheckMigrationPermission<
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
                  ReturnType<(typeof client.v1alpha1)[':domain:checkMigrationPermission']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':domain:checkMigrationPermission']['$post']>,
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
    const mutationDefaults = getPostV1alpha1DomainCheckMigrationPermissionMutationOptions<
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

export function getPostV1alpha1DomainDisableMigrationMutationKey() {
  return ['v1alpha1', '/v1alpha1/:domain:disableMigration', 'POST'] as const
}

export function getPostV1alpha1DomainDisableMigrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':domain:disableMigration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':domain:disableMigration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1DomainDisableMigrationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':domain:disableMigration']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':domain:disableMigration'].$post(args, options))
    },
  })
}

export function createPostV1alpha1DomainDisableMigration<
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
                Awaited<ReturnType<(typeof client.v1alpha1)[':domain:disableMigration']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':domain:disableMigration']['$post']>,
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
    const mutationDefaults = getPostV1alpha1DomainDisableMigrationMutationOptions<
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

export function getPostV1alpha1DomainDomainJoinMachineMutationKey() {
  return ['v1alpha1', '/v1alpha1/:domain:domainJoinMachine', 'POST'] as const
}

export function getPostV1alpha1DomainDomainJoinMachineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':domain:domainJoinMachine']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':domain:domainJoinMachine']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1DomainDomainJoinMachineMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':domain:domainJoinMachine']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':domain:domainJoinMachine'].$post(args, options))
    },
  })
}

export function createPostV1alpha1DomainDomainJoinMachine<
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
                Awaited<ReturnType<(typeof client.v1alpha1)[':domain:domainJoinMachine']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':domain:domainJoinMachine']['$post']>,
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
    const mutationDefaults = getPostV1alpha1DomainDomainJoinMachineMutationOptions<
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

export function getPostV1alpha1DomainEnableMigrationMutationKey() {
  return ['v1alpha1', '/v1alpha1/:domain:enableMigration', 'POST'] as const
}

export function getPostV1alpha1DomainEnableMigrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':domain:enableMigration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':domain:enableMigration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1DomainEnableMigrationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':domain:enableMigration']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':domain:enableMigration'].$post(args, options))
    },
  })
}

export function createPostV1alpha1DomainEnableMigration<
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
                Awaited<ReturnType<(typeof client.v1alpha1)[':domain:enableMigration']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':domain:enableMigration']['$post']>,
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
    const mutationDefaults = getPostV1alpha1DomainEnableMigrationMutationOptions<
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

export function getPostV1alpha1DomainExtendSchemaMutationKey() {
  return ['v1alpha1', '/v1alpha1/:domain:extendSchema', 'POST'] as const
}

export function getPostV1alpha1DomainExtendSchemaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':domain:extendSchema']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':domain:extendSchema']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1DomainExtendSchemaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':domain:extendSchema']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':domain:extendSchema'].$post(args, options))
    },
  })
}

export function createPostV1alpha1DomainExtendSchema<
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
                Awaited<ReturnType<(typeof client.v1alpha1)[':domain:extendSchema']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':domain:extendSchema']['$post']>,
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
    const mutationDefaults = getPostV1alpha1DomainExtendSchemaMutationOptions<
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

export function getV1alpha1NameQueryKey(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:name', args] as const
}

export function getV1alpha1NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1NameQueryKey>
  >({
    queryKey: getV1alpha1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1alpha1[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1alpha1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1alpha1NameQueryKey>
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
    return { ...getV1alpha1NameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1alpha1NameMutationKey() {
  return ['v1alpha1', '/v1alpha1/:name', 'DELETE'] as const
}

export function getDeleteV1alpha1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1alpha1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha1)[':name']['$delete']>) {
      return parseResponse(client.v1alpha1[':name'].$delete(args, options))
    },
  })
}

export function createDeleteV1alpha1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteV1alpha1NameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchV1alpha1NameMutationKey() {
  return ['v1alpha1', '/v1alpha1/:name', 'PATCH'] as const
}

export function getPatchV1alpha1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1alpha1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha1)[':name']['$patch']>) {
      return parseResponse(client.v1alpha1[':name'].$patch(args, options))
    },
  })
}

export function createPatchV1alpha1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':name']['$patch']>,
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
    const mutationDefaults = getPatchV1alpha1NameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1alpha1NameLdapssettingsQueryKey(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['ldapssettings']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:name/ldapssettings', args] as const
}

export function getV1alpha1NameLdapssettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':name']['ldapssettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['ldapssettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':name']['ldapssettings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1NameLdapssettingsQueryKey>
  >({
    queryKey: getV1alpha1NameLdapssettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1alpha1[':name'].ldapssettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1alpha1NameLdapssettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':name']['ldapssettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1alpha1)[':name']['ldapssettings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':name']['ldapssettings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1alpha1NameLdapssettingsQueryKey>
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
      ...getV1alpha1NameLdapssettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchV1alpha1NameLdapssettingsMutationKey() {
  return ['v1alpha1', '/v1alpha1/:name/ldapssettings', 'PATCH'] as const
}

export function getPatchV1alpha1NameLdapssettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':name']['ldapssettings']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':name']['ldapssettings']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1alpha1NameLdapssettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':name']['ldapssettings']['$patch']>,
    ) {
      return parseResponse(client.v1alpha1[':name'].ldapssettings.$patch(args, options))
    },
  })
}

export function createPatchV1alpha1NameLdapssettings<
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
                Awaited<ReturnType<(typeof client.v1alpha1)[':name']['ldapssettings']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':name']['ldapssettings']['$patch']>,
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
    const mutationDefaults = getPatchV1alpha1NameLdapssettingsMutationOptions<
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

export function getV1alpha1NameLocationsQueryKey(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['locations']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:name/locations', args] as const
}

export function getV1alpha1NameLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':name']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':name']['locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1NameLocationsQueryKey>
  >({
    queryKey: getV1alpha1NameLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1alpha1[':name'].locations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1alpha1NameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':name']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1alpha1)[':name']['locations']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':name']['locations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1alpha1NameLocationsQueryKey>
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
      ...getV1alpha1NameLocationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1alpha1NameOperationsQueryKey(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['operations']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:name/operations', args] as const
}

export function getV1alpha1NameOperationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':name']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':name']['operations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1NameOperationsQueryKey>
  >({
    queryKey: getV1alpha1NameOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1alpha1[':name'].operations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1alpha1NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':name']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1alpha1)[':name']['operations']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':name']['operations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1alpha1NameOperationsQueryKey>
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
      ...getV1alpha1NameOperationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1alpha1NameAttachTrustMutationKey() {
  return ['v1alpha1', '/v1alpha1/:name:attachTrust', 'POST'] as const
}

export function getPostV1alpha1NameAttachTrustMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':name:attachTrust']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':name:attachTrust']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1NameAttachTrustMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':name:attachTrust']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':name:attachTrust'].$post(args, options))
    },
  })
}

export function createPostV1alpha1NameAttachTrust<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':name:attachTrust']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':name:attachTrust']['$post']>,
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
    const mutationDefaults = getPostV1alpha1NameAttachTrustMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1alpha1NameCancelMutationKey() {
  return ['v1alpha1', '/v1alpha1/:name:cancel', 'POST'] as const
}

export function getPostV1alpha1NameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1NameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha1)[':name:cancel']['$post']>) {
      return parseResponse(client.v1alpha1[':name:cancel'].$post(args, options))
    },
  })
}

export function createPostV1alpha1NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':name:cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':name:cancel']['$post']>,
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
    const mutationDefaults = getPostV1alpha1NameCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1alpha1NameDetachTrustMutationKey() {
  return ['v1alpha1', '/v1alpha1/:name:detachTrust', 'POST'] as const
}

export function getPostV1alpha1NameDetachTrustMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':name:detachTrust']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':name:detachTrust']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1NameDetachTrustMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':name:detachTrust']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':name:detachTrust'].$post(args, options))
    },
  })
}

export function createPostV1alpha1NameDetachTrust<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':name:detachTrust']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':name:detachTrust']['$post']>,
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
    const mutationDefaults = getPostV1alpha1NameDetachTrustMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1alpha1NameReconfigureTrustMutationKey() {
  return ['v1alpha1', '/v1alpha1/:name:reconfigureTrust', 'POST'] as const
}

export function getPostV1alpha1NameReconfigureTrustMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':name:reconfigureTrust']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':name:reconfigureTrust']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1NameReconfigureTrustMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':name:reconfigureTrust']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':name:reconfigureTrust'].$post(args, options))
    },
  })
}

export function createPostV1alpha1NameReconfigureTrust<
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
                Awaited<ReturnType<(typeof client.v1alpha1)[':name:reconfigureTrust']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':name:reconfigureTrust']['$post']>,
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
    const mutationDefaults = getPostV1alpha1NameReconfigureTrustMutationOptions<
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

export function getPostV1alpha1NameResetAdminPasswordMutationKey() {
  return ['v1alpha1', '/v1alpha1/:name:resetAdminPassword', 'POST'] as const
}

export function getPostV1alpha1NameResetAdminPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':name:resetAdminPassword']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':name:resetAdminPassword']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1NameResetAdminPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':name:resetAdminPassword']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':name:resetAdminPassword'].$post(args, options))
    },
  })
}

export function createPostV1alpha1NameResetAdminPassword<
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
                Awaited<ReturnType<(typeof client.v1alpha1)[':name:resetAdminPassword']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':name:resetAdminPassword']['$post']>,
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
    const mutationDefaults = getPostV1alpha1NameResetAdminPasswordMutationOptions<
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

export function getPostV1alpha1NameRestoreMutationKey() {
  return ['v1alpha1', '/v1alpha1/:name:restore', 'POST'] as const
}

export function getPostV1alpha1NameRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':name:restore']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':name:restore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1NameRestoreMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha1)[':name:restore']['$post']>) {
      return parseResponse(client.v1alpha1[':name:restore'].$post(args, options))
    },
  })
}

export function createPostV1alpha1NameRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':name:restore']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':name:restore']['$post']>,
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
    const mutationDefaults = getPostV1alpha1NameRestoreMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1alpha1NameValidateTrustMutationKey() {
  return ['v1alpha1', '/v1alpha1/:name:validateTrust', 'POST'] as const
}

export function getPostV1alpha1NameValidateTrustMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':name:validateTrust']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':name:validateTrust']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1NameValidateTrustMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':name:validateTrust']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':name:validateTrust'].$post(args, options))
    },
  })
}

export function createPostV1alpha1NameValidateTrust<
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
                Awaited<ReturnType<(typeof client.v1alpha1)[':name:validateTrust']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':name:validateTrust']['$post']>,
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
    const mutationDefaults = getPostV1alpha1NameValidateTrustMutationOptions<
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

export function getV1alpha1ParentBackupsQueryKey(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['backups']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:parent/backups', args] as const
}

export function getV1alpha1ParentBackupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['backups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['backups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['backups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1ParentBackupsQueryKey>
  >({
    queryKey: getV1alpha1ParentBackupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1alpha1[':parent'].backups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1alpha1ParentBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['backups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1alpha1)[':parent']['backups']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['backups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1alpha1ParentBackupsQueryKey>
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
      ...getV1alpha1ParentBackupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1alpha1ParentBackupsMutationKey() {
  return ['v1alpha1', '/v1alpha1/:parent/backups', 'POST'] as const
}

export function getPostV1alpha1ParentBackupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['backups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':parent']['backups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ParentBackupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':parent']['backups']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':parent'].backups.$post(args, options))
    },
  })
}

export function createPostV1alpha1ParentBackups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['backups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':parent']['backups']['$post']>,
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
    const mutationDefaults = getPostV1alpha1ParentBackupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1alpha1ParentDomainsQueryKey(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['domains']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:parent/domains', args] as const
}

export function getV1alpha1ParentDomainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['domains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['domains']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1ParentDomainsQueryKey>
  >({
    queryKey: getV1alpha1ParentDomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1alpha1[':parent'].domains.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1alpha1ParentDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['domains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1alpha1)[':parent']['domains']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['domains']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1alpha1ParentDomainsQueryKey>
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
      ...getV1alpha1ParentDomainsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1alpha1ParentDomainsMutationKey() {
  return ['v1alpha1', '/v1alpha1/:parent/domains', 'POST'] as const
}

export function getPostV1alpha1ParentDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['domains']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':parent']['domains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ParentDomainsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':parent']['domains']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':parent'].domains.$post(args, options))
    },
  })
}

export function createPostV1alpha1ParentDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['domains']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':parent']['domains']['$post']>,
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
    const mutationDefaults = getPostV1alpha1ParentDomainsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1alpha1ParentPeeringsQueryKey(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['peerings']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:parent/peerings', args] as const
}

export function getV1alpha1ParentPeeringsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['peerings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['peerings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['peerings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1ParentPeeringsQueryKey>
  >({
    queryKey: getV1alpha1ParentPeeringsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1alpha1[':parent'].peerings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1alpha1ParentPeerings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['peerings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1alpha1)[':parent']['peerings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['peerings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1alpha1ParentPeeringsQueryKey>
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
      ...getV1alpha1ParentPeeringsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1alpha1ParentPeeringsMutationKey() {
  return ['v1alpha1', '/v1alpha1/:parent/peerings', 'POST'] as const
}

export function getPostV1alpha1ParentPeeringsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['peerings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':parent']['peerings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ParentPeeringsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':parent']['peerings']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':parent'].peerings.$post(args, options))
    },
  })
}

export function createPostV1alpha1ParentPeerings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['peerings']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':parent']['peerings']['$post']>,
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
    const mutationDefaults = getPostV1alpha1ParentPeeringsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1alpha1ParentSqlIntegrationsQueryKey(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['sqlIntegrations']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:parent/sqlIntegrations', args] as const
}

export function getV1alpha1ParentSqlIntegrationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['sqlIntegrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['sqlIntegrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['sqlIntegrations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1ParentSqlIntegrationsQueryKey>
  >({
    queryKey: getV1alpha1ParentSqlIntegrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1alpha1[':parent'].sqlIntegrations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1alpha1ParentSqlIntegrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['sqlIntegrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1alpha1)[':parent']['sqlIntegrations']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['sqlIntegrations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1alpha1ParentSqlIntegrationsQueryKey>
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
      ...getV1alpha1ParentSqlIntegrationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1alpha1ResourceGetIamPolicyQueryKey(
  args: InferRequestType<(typeof client.v1alpha1)[':resource:getIamPolicy']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:resource:getIamPolicy', args] as const
}

export function getV1alpha1ResourceGetIamPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':resource:getIamPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha1)[':resource:getIamPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':resource:getIamPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1ResourceGetIamPolicyQueryKey>
  >({
    queryKey: getV1alpha1ResourceGetIamPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1alpha1[':resource:getIamPolicy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1alpha1ResourceGetIamPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':resource:getIamPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1alpha1)[':resource:getIamPolicy']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':resource:getIamPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1alpha1ResourceGetIamPolicyQueryKey>
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
      ...getV1alpha1ResourceGetIamPolicyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1alpha1ResourceSetIamPolicyMutationKey() {
  return ['v1alpha1', '/v1alpha1/:resource:setIamPolicy', 'POST'] as const
}

export function getPostV1alpha1ResourceSetIamPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':resource:setIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':resource:setIamPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ResourceSetIamPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':resource:setIamPolicy']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':resource:setIamPolicy'].$post(args, options))
    },
  })
}

export function createPostV1alpha1ResourceSetIamPolicy<
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
                Awaited<ReturnType<(typeof client.v1alpha1)[':resource:setIamPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':resource:setIamPolicy']['$post']>,
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
    const mutationDefaults = getPostV1alpha1ResourceSetIamPolicyMutationOptions<
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

export function getPostV1alpha1ResourceTestIamPermissionsMutationKey() {
  return ['v1alpha1', '/v1alpha1/:resource:testIamPermissions', 'POST'] as const
}

export function getPostV1alpha1ResourceTestIamPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':resource:testIamPermissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':resource:testIamPermissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ResourceTestIamPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':resource:testIamPermissions']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':resource:testIamPermissions'].$post(args, options))
    },
  })
}

export function createPostV1alpha1ResourceTestIamPermissions<
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
                  ReturnType<(typeof client.v1alpha1)[':resource:testIamPermissions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':resource:testIamPermissions']['$post']>,
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
    const mutationDefaults = getPostV1alpha1ResourceTestIamPermissionsMutationOptions<
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
