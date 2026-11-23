import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1alpha1Key() {
  return ['v1alpha1'] as const
}

export function getPostV1alpha1DomainCheckMigrationPermissionKey() {
  return ['v1alpha1', '/v1alpha1/:domain:checkMigrationPermission', 'POST'] as const
}

export function usePostV1alpha1DomainCheckMigrationPermission<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':domain:checkMigrationPermission']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':domain:checkMigrationPermission']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1DomainCheckMigrationPermissionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1alpha1)[':domain:checkMigrationPermission']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1alpha1[':domain:checkMigrationPermission'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1alpha1DomainDisableMigrationKey() {
  return ['v1alpha1', '/v1alpha1/:domain:disableMigration', 'POST'] as const
}

export function usePostV1alpha1DomainDisableMigration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':domain:disableMigration']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':domain:disableMigration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1DomainDisableMigrationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1alpha1)[':domain:disableMigration']['$post']> },
      ) => parseResponse(client.v1alpha1[':domain:disableMigration'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1alpha1DomainDomainJoinMachineKey() {
  return ['v1alpha1', '/v1alpha1/:domain:domainJoinMachine', 'POST'] as const
}

export function usePostV1alpha1DomainDomainJoinMachine<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':domain:domainJoinMachine']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':domain:domainJoinMachine']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1DomainDomainJoinMachineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1alpha1)[':domain:domainJoinMachine']['$post']>
        },
      ) => parseResponse(client.v1alpha1[':domain:domainJoinMachine'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1alpha1DomainEnableMigrationKey() {
  return ['v1alpha1', '/v1alpha1/:domain:enableMigration', 'POST'] as const
}

export function usePostV1alpha1DomainEnableMigration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':domain:enableMigration']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':domain:enableMigration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1DomainEnableMigrationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1alpha1)[':domain:enableMigration']['$post']> },
      ) => parseResponse(client.v1alpha1[':domain:enableMigration'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1alpha1DomainExtendSchemaKey() {
  return ['v1alpha1', '/v1alpha1/:domain:extendSchema', 'POST'] as const
}

export function usePostV1alpha1DomainExtendSchema<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':domain:extendSchema']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':domain:extendSchema']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1DomainExtendSchemaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1alpha1)[':domain:extendSchema']['$post']> },
      ) => parseResponse(client.v1alpha1[':domain:extendSchema'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1alpha1NameKey(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:name', args] as const
}

export function useGetV1alpha1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1alpha1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1alpha1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1alpha1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1alpha1NameKey() {
  return ['v1alpha1', '/v1alpha1/:name', 'DELETE'] as const
}

export function useDeleteV1alpha1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1alpha1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1alpha1)[':name']['$delete']> },
      ) => parseResponse(client.v1alpha1[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1alpha1NameKey() {
  return ['v1alpha1', '/v1alpha1/:name', 'PATCH'] as const
}

export function usePatchV1alpha1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1alpha1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1alpha1)[':name']['$patch']> },
      ) => parseResponse(client.v1alpha1[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1alpha1NameLdapssettingsKey(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['ldapssettings']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:name/ldapssettings', args] as const
}

export function useGetV1alpha1NameLdapssettings<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['ldapssettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':name']['ldapssettings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1alpha1NameLdapssettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':name']['ldapssettings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':name'].ldapssettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1alpha1NameLdapssettings<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['ldapssettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':name']['ldapssettings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1alpha1NameLdapssettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':name']['ldapssettings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':name'].ldapssettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1alpha1NameLdapssettingsKey() {
  return ['v1alpha1', '/v1alpha1/:name/ldapssettings', 'PATCH'] as const
}

export function usePatchV1alpha1NameLdapssettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':name']['ldapssettings']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':name']['ldapssettings']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1alpha1NameLdapssettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1alpha1)[':name']['ldapssettings']['$patch']> },
      ) => parseResponse(client.v1alpha1[':name'].ldapssettings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1alpha1NameLocationsKey(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['locations']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:name/locations', args] as const
}

export function useGetV1alpha1NameLocations<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':name']['locations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1alpha1NameLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':name']['locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':name'].locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1alpha1NameLocations<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':name']['locations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1alpha1NameLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':name']['locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':name'].locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1alpha1NameOperationsKey(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['operations']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:name/operations', args] as const
}

export function useGetV1alpha1NameOperations<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':name']['operations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1alpha1NameOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':name']['operations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':name'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1alpha1NameOperations<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':name']['operations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1alpha1NameOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':name']['operations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':name'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1alpha1NameAttachTrustKey() {
  return ['v1alpha1', '/v1alpha1/:name:attachTrust', 'POST'] as const
}

export function usePostV1alpha1NameAttachTrust<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':name:attachTrust']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':name:attachTrust']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1NameAttachTrustKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1alpha1)[':name:attachTrust']['$post']> },
      ) => parseResponse(client.v1alpha1[':name:attachTrust'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1alpha1NameCancelKey() {
  return ['v1alpha1', '/v1alpha1/:name:cancel', 'POST'] as const
}

export function usePostV1alpha1NameCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':name:cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1NameCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1alpha1)[':name:cancel']['$post']> },
      ) => parseResponse(client.v1alpha1[':name:cancel'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1alpha1NameDetachTrustKey() {
  return ['v1alpha1', '/v1alpha1/:name:detachTrust', 'POST'] as const
}

export function usePostV1alpha1NameDetachTrust<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':name:detachTrust']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':name:detachTrust']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1NameDetachTrustKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1alpha1)[':name:detachTrust']['$post']> },
      ) => parseResponse(client.v1alpha1[':name:detachTrust'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1alpha1NameReconfigureTrustKey() {
  return ['v1alpha1', '/v1alpha1/:name:reconfigureTrust', 'POST'] as const
}

export function usePostV1alpha1NameReconfigureTrust<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':name:reconfigureTrust']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':name:reconfigureTrust']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1NameReconfigureTrustKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1alpha1)[':name:reconfigureTrust']['$post']> },
      ) => parseResponse(client.v1alpha1[':name:reconfigureTrust'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1alpha1NameResetAdminPasswordKey() {
  return ['v1alpha1', '/v1alpha1/:name:resetAdminPassword', 'POST'] as const
}

export function usePostV1alpha1NameResetAdminPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':name:resetAdminPassword']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':name:resetAdminPassword']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1NameResetAdminPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1alpha1)[':name:resetAdminPassword']['$post']> },
      ) => parseResponse(client.v1alpha1[':name:resetAdminPassword'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1alpha1NameRestoreKey() {
  return ['v1alpha1', '/v1alpha1/:name:restore', 'POST'] as const
}

export function usePostV1alpha1NameRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':name:restore']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':name:restore']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1NameRestoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1alpha1)[':name:restore']['$post']> },
      ) => parseResponse(client.v1alpha1[':name:restore'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1alpha1NameValidateTrustKey() {
  return ['v1alpha1', '/v1alpha1/:name:validateTrust', 'POST'] as const
}

export function usePostV1alpha1NameValidateTrust<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':name:validateTrust']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':name:validateTrust']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1NameValidateTrustKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1alpha1)[':name:validateTrust']['$post']> },
      ) => parseResponse(client.v1alpha1[':name:validateTrust'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1alpha1ParentBackupsKey(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['backups']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:parent/backups', args] as const
}

export function useGetV1alpha1ParentBackups<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['backups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['backups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1alpha1ParentBackupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['backups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':parent'].backups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1alpha1ParentBackups<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['backups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['backups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1alpha1ParentBackupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['backups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':parent'].backups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1alpha1ParentBackupsKey() {
  return ['v1alpha1', '/v1alpha1/:parent/backups', 'POST'] as const
}

export function usePostV1alpha1ParentBackups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['backups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':parent']['backups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1ParentBackupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1alpha1)[':parent']['backups']['$post']> },
      ) => parseResponse(client.v1alpha1[':parent'].backups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1alpha1ParentDomainsKey(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['domains']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:parent/domains', args] as const
}

export function useGetV1alpha1ParentDomains<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['domains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['domains']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1alpha1ParentDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['domains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':parent'].domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1alpha1ParentDomains<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['domains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['domains']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1alpha1ParentDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['domains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':parent'].domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1alpha1ParentDomainsKey() {
  return ['v1alpha1', '/v1alpha1/:parent/domains', 'POST'] as const
}

export function usePostV1alpha1ParentDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['domains']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':parent']['domains']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1ParentDomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1alpha1)[':parent']['domains']['$post']> },
      ) => parseResponse(client.v1alpha1[':parent'].domains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1alpha1ParentPeeringsKey(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['peerings']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:parent/peerings', args] as const
}

export function useGetV1alpha1ParentPeerings<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['peerings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['peerings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1alpha1ParentPeeringsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['peerings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':parent'].peerings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1alpha1ParentPeerings<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['peerings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['peerings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1alpha1ParentPeeringsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['peerings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':parent'].peerings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1alpha1ParentPeeringsKey() {
  return ['v1alpha1', '/v1alpha1/:parent/peerings', 'POST'] as const
}

export function usePostV1alpha1ParentPeerings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['peerings']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':parent']['peerings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1ParentPeeringsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1alpha1)[':parent']['peerings']['$post']> },
      ) => parseResponse(client.v1alpha1[':parent'].peerings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1alpha1ParentSqlIntegrationsKey(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['sqlIntegrations']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:parent/sqlIntegrations', args] as const
}

export function useGetV1alpha1ParentSqlIntegrations<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['sqlIntegrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['sqlIntegrations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1alpha1ParentSqlIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['sqlIntegrations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1alpha1[':parent'].sqlIntegrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1alpha1ParentSqlIntegrations<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['sqlIntegrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['sqlIntegrations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1alpha1ParentSqlIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['sqlIntegrations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1alpha1[':parent'].sqlIntegrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1alpha1ResourceGetIamPolicyKey(
  args: InferRequestType<(typeof client.v1alpha1)[':resource:getIamPolicy']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:resource:getIamPolicy', args] as const
}

export function useGetV1alpha1ResourceGetIamPolicy<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':resource:getIamPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':resource:getIamPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1alpha1ResourceGetIamPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':resource:getIamPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1alpha1[':resource:getIamPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1alpha1ResourceGetIamPolicy<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':resource:getIamPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':resource:getIamPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1alpha1ResourceGetIamPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':resource:getIamPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1alpha1[':resource:getIamPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1alpha1ResourceSetIamPolicyKey() {
  return ['v1alpha1', '/v1alpha1/:resource:setIamPolicy', 'POST'] as const
}

export function usePostV1alpha1ResourceSetIamPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':resource:setIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':resource:setIamPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1ResourceSetIamPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1alpha1)[':resource:setIamPolicy']['$post']> },
      ) => parseResponse(client.v1alpha1[':resource:setIamPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1alpha1ResourceTestIamPermissionsKey() {
  return ['v1alpha1', '/v1alpha1/:resource:testIamPermissions', 'POST'] as const
}

export function usePostV1alpha1ResourceTestIamPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':resource:testIamPermissions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':resource:testIamPermissions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1ResourceTestIamPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1alpha1)[':resource:testIamPermissions']['$post']>
        },
      ) => parseResponse(client.v1alpha1[':resource:testIamPermissions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
