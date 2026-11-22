import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getPostApiStorageProfileSystemProfilesKey() {
  return ['api', '/api/storage/profile-system/profiles', 'POST'] as const
}

export function usePostApiStorageProfileSystemProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.storage)['profile-system']['profiles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.storage)['profile-system']['profiles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiStorageProfileSystemProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.storage)['profile-system']['profiles']['$post']>
        },
      ) => parseResponse(client.api.storage['profile-system'].profiles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiStorageProfileSystemProfilesSchemaKey() {
  return ['api', '/api/storage/profile-system/profiles/schema', 'PUT'] as const
}

export function usePutApiStorageProfileSystemProfilesSchema<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.storage)['profile-system']['profiles']['schema']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.storage)['profile-system']['profiles']['schema']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiStorageProfileSystemProfilesSchemaKey()
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
            (typeof client.api.storage)['profile-system']['profiles']['schema']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.storage['profile-system'].profiles.schema.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiStorageProfileSystemProfilesProfileIdKey(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/storage/profile-system/profiles/:profileId', keyArgs] as const
}

export function useGetApiStorageProfileSystemProfilesProfileId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProfilesProfileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStorageProfileSystemProfilesProfileId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProfilesProfileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiStorageProfileSystemProfilesProfileIdKey() {
  return ['api', '/api/storage/profile-system/profiles/:profileId', 'DELETE'] as const
}

export function useDeleteApiStorageProfileSystemProfilesProfileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiStorageProfileSystemProfilesProfileIdKey()
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
            (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiStorageProfileSystemProfilesProfileIdKey() {
  return ['api', '/api/storage/profile-system/profiles/:profileId', 'PATCH'] as const
}

export function usePatchApiStorageProfileSystemProfilesProfileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiStorageProfileSystemProfilesProfileIdKey()
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
            (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiStorageProfileSystemProfilesProfileIdAddressesKey(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/storage/profile-system/profiles/:profileId/addresses', keyArgs] as const
}

export function useGetApiStorageProfileSystemProfilesProfileIdAddresses<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProfilesProfileIdAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].addresses.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStorageProfileSystemProfilesProfileIdAddresses<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProfilesProfileIdAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].addresses.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiStorageProfileSystemProfilesProfileIdAddressesKey() {
  return ['api', '/api/storage/profile-system/profiles/:profileId/addresses', 'POST'] as const
}

export function usePostApiStorageProfileSystemProfilesProfileIdAddresses<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiStorageProfileSystemProfilesProfileIdAddressesKey()
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
            (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].addresses.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiStorageProfileSystemProfilesProfileIdAddressesUnmaskKey(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['unmask']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/storage/profile-system/profiles/:profileId/addresses/unmask',
    keyArgs,
  ] as const
}

export function useGetApiStorageProfileSystemProfilesProfileIdAddressesUnmask<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['unmask']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['unmask']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProfilesProfileIdAddressesUnmaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['unmask']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].addresses.unmask.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStorageProfileSystemProfilesProfileIdAddressesUnmask<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['unmask']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['unmask']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProfilesProfileIdAddressesUnmaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['unmask']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].addresses.unmask.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiStorageProfileSystemProfilesProfileIdAddressesAddressIdKey(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/storage/profile-system/profiles/:profileId/addresses/:addressId',
    keyArgs,
  ] as const
}

export function useGetApiStorageProfileSystemProfilesProfileIdAddressesAddressId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProfilesProfileIdAddressesAddressIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].addresses[':addressId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStorageProfileSystemProfilesProfileIdAddressesAddressId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProfilesProfileIdAddressesAddressIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].addresses[':addressId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiStorageProfileSystemProfilesProfileIdAddressesAddressIdKey() {
  return [
    'api',
    '/api/storage/profile-system/profiles/:profileId/addresses/:addressId',
    'DELETE',
  ] as const
}

export function useDeleteApiStorageProfileSystemProfilesProfileIdAddressesAddressId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiStorageProfileSystemProfilesProfileIdAddressesAddressIdKey()
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
            (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].addresses[
            ':addressId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiStorageProfileSystemProfilesProfileIdAddressesAddressIdKey() {
  return [
    'api',
    '/api/storage/profile-system/profiles/:profileId/addresses/:addressId',
    'PATCH',
  ] as const
}

export function usePatchApiStorageProfileSystemProfilesProfileIdAddressesAddressId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApiStorageProfileSystemProfilesProfileIdAddressesAddressIdKey()
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
            (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].addresses[
            ':addressId'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiStorageProfileSystemProfilesProfileIdAddressesAddressIdUnmaskKey(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['unmask']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/storage/profile-system/profiles/:profileId/addresses/:addressId/unmask',
    keyArgs,
  ] as const
}

export function useGetApiStorageProfileSystemProfilesProfileIdAddressesAddressIdUnmask<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['unmask']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['unmask']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProfilesProfileIdAddressesAddressIdUnmaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['unmask']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].addresses[
            ':addressId'
          ].unmask.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStorageProfileSystemProfilesProfileIdAddressesAddressIdUnmask<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['unmask']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['unmask']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProfilesProfileIdAddressesAddressIdUnmaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['unmask']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].addresses[
            ':addressId'
          ].unmask.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdKey(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/storage/profile-system/profiles/:profileId/addresses/:addressId/versions/:addressVersionId',
    keyArgs,
  ] as const
}

export function useGetApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].addresses[
            ':addressId'
          ].versions[':addressVersionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].addresses[
            ':addressId'
          ].versions[':addressVersionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdUnmaskKey(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['unmask']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/storage/profile-system/profiles/:profileId/addresses/:addressId/versions/:addressVersionId/unmask',
    keyArgs,
  ] as const
}

export function useGetApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdUnmask<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['unmask']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['unmask']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdUnmaskKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['unmask']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].addresses[
            ':addressId'
          ].versions[':addressVersionId'].unmask.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdUnmask<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['unmask']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['unmask']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdUnmaskKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['unmask']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].addresses[
            ':addressId'
          ].versions[':addressVersionId'].unmask.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiStorageProfileSystemProfilesProfileIdPurchaseInfoKey(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/storage/profile-system/profiles/:profileId/purchase-info', keyArgs] as const
}

export function useGetApiStorageProfileSystemProfilesProfileIdPurchaseInfo<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProfilesProfileIdPurchaseInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId']['purchase-info'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStorageProfileSystemProfilesProfileIdPurchaseInfo<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProfilesProfileIdPurchaseInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId']['purchase-info'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiStorageProfileSystemProfilesProfileIdPurchaseInfoKey() {
  return ['api', '/api/storage/profile-system/profiles/:profileId/purchase-info', 'POST'] as const
}

export function usePostApiStorageProfileSystemProfilesProfileIdPurchaseInfo<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiStorageProfileSystemProfilesProfileIdPurchaseInfoKey()
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
            (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId']['purchase-info'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiStorageProfileSystemProfilesProfileIdPurchaseInfoKey() {
  return ['api', '/api/storage/profile-system/profiles/:profileId/purchase-info', 'DELETE'] as const
}

export function useDeleteApiStorageProfileSystemProfilesProfileIdPurchaseInfo<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiStorageProfileSystemProfilesProfileIdPurchaseInfoKey()
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
            (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId']['purchase-info'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiStorageProfileSystemProfilesProfileIdPurchaseInfoKey() {
  return ['api', '/api/storage/profile-system/profiles/:profileId/purchase-info', 'PATCH'] as const
}

export function usePatchApiStorageProfileSystemProfilesProfileIdPurchaseInfo<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiStorageProfileSystemProfilesProfileIdPurchaseInfoKey()
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
            (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId']['purchase-info'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiStorageProfileSystemProfilesProfileIdPurchaseInfoUnmaskKey(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['unmask']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/storage/profile-system/profiles/:profileId/purchase-info/unmask',
    keyArgs,
  ] as const
}

export function useGetApiStorageProfileSystemProfilesProfileIdPurchaseInfoUnmask<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['unmask']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['unmask']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProfilesProfileIdPurchaseInfoUnmaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['unmask']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId']['purchase-info'].unmask.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStorageProfileSystemProfilesProfileIdPurchaseInfoUnmask<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['unmask']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['unmask']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProfilesProfileIdPurchaseInfoUnmaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['unmask']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId']['purchase-info'].unmask.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiStorageProfileSystemProfilesProfileIdUnmaskKey(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['unmask']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/storage/profile-system/profiles/:profileId/unmask', keyArgs] as const
}

export function useGetApiStorageProfileSystemProfilesProfileIdUnmask<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['unmask']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['unmask']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProfilesProfileIdUnmaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['unmask']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].unmask.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStorageProfileSystemProfilesProfileIdUnmask<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['unmask']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['unmask']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProfilesProfileIdUnmaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['unmask']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].unmask.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdKey(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/storage/profile-system/profiles/:profileId/versions/:profileVersionId',
    keyArgs,
  ] as const
}

export function useGetApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].versions[
            ':profileVersionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].versions[
            ':profileVersionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdUnmaskKey(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['unmask']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/storage/profile-system/profiles/:profileId/versions/:profileVersionId/unmask',
    keyArgs,
  ] as const
}

export function useGetApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdUnmask<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['unmask']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['unmask']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdUnmaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['unmask']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].versions[
            ':profileVersionId'
          ].unmask.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdUnmask<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['unmask']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['unmask']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdUnmaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['unmask']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].versions[
            ':profileVersionId'
          ].unmask.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiStorageProfileSystemProspectsKey() {
  return ['api', '/api/storage/profile-system/prospects', 'POST'] as const
}

export function usePostApiStorageProfileSystemProspects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.storage)['profile-system']['prospects']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.storage)['profile-system']['prospects']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiStorageProfileSystemProspectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.storage)['profile-system']['prospects']['$post']>
        },
      ) => parseResponse(client.api.storage['profile-system'].prospects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiStorageProfileSystemProspectsProspectIdKey(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/storage/profile-system/prospects/:prospectId', keyArgs] as const
}

export function useGetApiStorageProfileSystemProspectsProspectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProspectsProspectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].prospects[':prospectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStorageProfileSystemProspectsProspectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProspectsProspectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].prospects[':prospectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiStorageProfileSystemProspectsProspectIdKey() {
  return ['api', '/api/storage/profile-system/prospects/:prospectId', 'DELETE'] as const
}

export function useDeleteApiStorageProfileSystemProspectsProspectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiStorageProfileSystemProspectsProspectIdKey()
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
            (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.storage['profile-system'].prospects[':prospectId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiStorageProfileSystemProspectsProspectIdKey() {
  return ['api', '/api/storage/profile-system/prospects/:prospectId', 'PATCH'] as const
}

export function usePatchApiStorageProfileSystemProspectsProspectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiStorageProfileSystemProspectsProspectIdKey()
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
            (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.storage['profile-system'].prospects[':prospectId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiStorageProfileSystemProspectsProspectIdUnmaskKey(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['unmask']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/storage/profile-system/prospects/:prospectId/unmask', keyArgs] as const
}

export function useGetApiStorageProfileSystemProspectsProspectIdUnmask<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['unmask']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['unmask']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProspectsProspectIdUnmaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['unmask']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].prospects[':prospectId'].unmask.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStorageProfileSystemProspectsProspectIdUnmask<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['unmask']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['unmask']['$get']
              >
            >
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
        ? getGetApiStorageProfileSystemProspectsProspectIdUnmaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['unmask']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.storage['profile-system'].prospects[':prospectId'].unmask.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
