import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getPostApiStorageProfileSystemProfilesMutationKey() {
  return ['api', '/api/storage/profile-system/profiles', 'POST'] as const
}

export function getPostApiStorageProfileSystemProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.storage)['profile-system']['profiles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.storage)['profile-system']['profiles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiStorageProfileSystemProfilesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.storage)['profile-system']['profiles']['$post']>,
    ) {
      return parseResponse(client.api.storage['profile-system'].profiles.$post(args, options))
    },
  })
}

export function injectPostApiStorageProfileSystemProfiles<
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
                ReturnType<(typeof client.api.storage)['profile-system']['profiles']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.storage)['profile-system']['profiles']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiStorageProfileSystemProfilesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutApiStorageProfileSystemProfilesSchemaMutationKey() {
  return ['api', '/api/storage/profile-system/profiles/schema', 'PUT'] as const
}

export function getPutApiStorageProfileSystemProfilesSchemaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.storage)['profile-system']['profiles']['schema']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiStorageProfileSystemProfilesSchemaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.storage)['profile-system']['profiles']['schema']['$put']
      >,
    ) {
      return parseResponse(client.api.storage['profile-system'].profiles.schema.$put(args, options))
    },
  })
}

export function injectPutApiStorageProfileSystemProfilesSchema<
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
                  (typeof client.api.storage)['profile-system']['profiles']['schema']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.storage)['profile-system']['profiles']['schema']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiStorageProfileSystemProfilesSchemaMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiStorageProfileSystemProfilesProfileIdQueryKey(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/storage/profile-system/profiles/:profileId', keyArgs] as const
}

export function getApiStorageProfileSystemProfilesProfileIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdQueryKey>
  >({
    queryKey: getApiStorageProfileSystemProfilesProfileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiStorageProfileSystemProfilesProfileId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiStorageProfileSystemProfilesProfileIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteApiStorageProfileSystemProfilesProfileIdMutationKey() {
  return ['api', '/api/storage/profile-system/profiles/:profileId', 'DELETE'] as const
}

export function getDeleteApiStorageProfileSystemProfilesProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiStorageProfileSystemProfilesProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteApiStorageProfileSystemProfilesProfileId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiStorageProfileSystemProfilesProfileIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchApiStorageProfileSystemProfilesProfileIdMutationKey() {
  return ['api', '/api/storage/profile-system/profiles/:profileId', 'PATCH'] as const
}

export function getPatchApiStorageProfileSystemProfilesProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiStorageProfileSystemProfilesProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId'].$patch(args, options),
      )
    },
  })
}

export function injectPatchApiStorageProfileSystemProfilesProfileId<
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
                  (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiStorageProfileSystemProfilesProfileIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiStorageProfileSystemProfilesProfileIdAddressesQueryKey(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/storage/profile-system/profiles/:profileId/addresses', keyArgs] as const
}

export function getApiStorageProfileSystemProfilesProfileIdAddressesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdAddressesQueryKey>
  >({
    queryKey: getApiStorageProfileSystemProfilesProfileIdAddressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId'].addresses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiStorageProfileSystemProfilesProfileIdAddresses<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdAddressesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiStorageProfileSystemProfilesProfileIdAddressesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiStorageProfileSystemProfilesProfileIdAddressesMutationKey() {
  return ['api', '/api/storage/profile-system/profiles/:profileId/addresses', 'POST'] as const
}

export function getPostApiStorageProfileSystemProfilesProfileIdAddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiStorageProfileSystemProfilesProfileIdAddressesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['$post']
      >,
    ) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId'].addresses.$post(args, options),
      )
    },
  })
}

export function injectPostApiStorageProfileSystemProfilesProfileIdAddresses<
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
                  (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiStorageProfileSystemProfilesProfileIdAddressesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiStorageProfileSystemProfilesProfileIdAddressesUnmaskQueryKey(
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

export function getApiStorageProfileSystemProfilesProfileIdAddressesUnmaskQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['unmask']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdAddressesUnmaskQueryKey>
  >({
    queryKey: getApiStorageProfileSystemProfilesProfileIdAddressesUnmaskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId'].addresses.unmask.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiStorageProfileSystemProfilesProfileIdAddressesUnmask<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['unmask']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdAddressesUnmaskQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiStorageProfileSystemProfilesProfileIdAddressesUnmaskQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdQueryKey(
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

export function getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdQueryKey>
  >({
    queryKey: getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId'].addresses[':addressId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectApiStorageProfileSystemProfilesProfileIdAddressesAddressId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteApiStorageProfileSystemProfilesProfileIdAddressesAddressIdMutationKey() {
  return [
    'api',
    '/api/storage/profile-system/profiles/:profileId/addresses/:addressId',
    'DELETE',
  ] as const
}

export function getDeleteApiStorageProfileSystemProfilesProfileIdAddressesAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiStorageProfileSystemProfilesProfileIdAddressesAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId'].addresses[':addressId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteApiStorageProfileSystemProfilesProfileIdAddressesAddressId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApiStorageProfileSystemProfilesProfileIdAddressesAddressIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchApiStorageProfileSystemProfilesProfileIdAddressesAddressIdMutationKey() {
  return [
    'api',
    '/api/storage/profile-system/profiles/:profileId/addresses/:addressId',
    'PATCH',
  ] as const
}

export function getPatchApiStorageProfileSystemProfilesProfileIdAddressesAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiStorageProfileSystemProfilesProfileIdAddressesAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId'].addresses[':addressId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchApiStorageProfileSystemProfilesProfileIdAddressesAddressId<
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
                  (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchApiStorageProfileSystemProfilesProfileIdAddressesAddressIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdUnmaskQueryKey(
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

export function getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdUnmaskQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['unmask']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdUnmaskQueryKey>
  >({
    queryKey: getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdUnmaskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId'].addresses[
          ':addressId'
        ].unmask.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiStorageProfileSystemProfilesProfileIdAddressesAddressIdUnmask<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['unmask']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdUnmaskQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdUnmaskQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdQueryKey(
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

export function getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdQueryKey
    >
  >({
    queryKey:
      getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId'].addresses[
          ':addressId'
        ].versions[':addressVersionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdUnmaskQueryKey(
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

export function getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdUnmaskQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['unmask']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdUnmaskQueryKey
    >
  >({
    queryKey:
      getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdUnmaskQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId'].addresses[
          ':addressId'
        ].versions[':addressVersionId'].unmask.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdUnmask<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['unmask']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdUnmaskQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdUnmaskQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiStorageProfileSystemProfilesProfileIdPurchaseInfoQueryKey(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/storage/profile-system/profiles/:profileId/purchase-info', keyArgs] as const
}

export function getApiStorageProfileSystemProfilesProfileIdPurchaseInfoQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdPurchaseInfoQueryKey>
  >({
    queryKey: getApiStorageProfileSystemProfilesProfileIdPurchaseInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId']['purchase-info'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiStorageProfileSystemProfilesProfileIdPurchaseInfo<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdPurchaseInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiStorageProfileSystemProfilesProfileIdPurchaseInfoQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiStorageProfileSystemProfilesProfileIdPurchaseInfoMutationKey() {
  return ['api', '/api/storage/profile-system/profiles/:profileId/purchase-info', 'POST'] as const
}

export function getPostApiStorageProfileSystemProfilesProfileIdPurchaseInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiStorageProfileSystemProfilesProfileIdPurchaseInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$post']
      >,
    ) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId']['purchase-info'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostApiStorageProfileSystemProfilesProfileIdPurchaseInfo<
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
                  (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiStorageProfileSystemProfilesProfileIdPurchaseInfoMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteApiStorageProfileSystemProfilesProfileIdPurchaseInfoMutationKey() {
  return ['api', '/api/storage/profile-system/profiles/:profileId/purchase-info', 'DELETE'] as const
}

export function getDeleteApiStorageProfileSystemProfilesProfileIdPurchaseInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiStorageProfileSystemProfilesProfileIdPurchaseInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId']['purchase-info'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteApiStorageProfileSystemProfilesProfileIdPurchaseInfo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApiStorageProfileSystemProfilesProfileIdPurchaseInfoMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchApiStorageProfileSystemProfilesProfileIdPurchaseInfoMutationKey() {
  return ['api', '/api/storage/profile-system/profiles/:profileId/purchase-info', 'PATCH'] as const
}

export function getPatchApiStorageProfileSystemProfilesProfileIdPurchaseInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiStorageProfileSystemProfilesProfileIdPurchaseInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId']['purchase-info'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchApiStorageProfileSystemProfilesProfileIdPurchaseInfo<
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
                  (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchApiStorageProfileSystemProfilesProfileIdPurchaseInfoMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiStorageProfileSystemProfilesProfileIdPurchaseInfoUnmaskQueryKey(
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

export function getApiStorageProfileSystemProfilesProfileIdPurchaseInfoUnmaskQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['unmask']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdPurchaseInfoUnmaskQueryKey>
  >({
    queryKey: getApiStorageProfileSystemProfilesProfileIdPurchaseInfoUnmaskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId']['purchase-info'].unmask.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectApiStorageProfileSystemProfilesProfileIdPurchaseInfoUnmask<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['unmask']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdPurchaseInfoUnmaskQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiStorageProfileSystemProfilesProfileIdPurchaseInfoUnmaskQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiStorageProfileSystemProfilesProfileIdUnmaskQueryKey(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['unmask']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/storage/profile-system/profiles/:profileId/unmask', keyArgs] as const
}

export function getApiStorageProfileSystemProfilesProfileIdUnmaskQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['unmask']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdUnmaskQueryKey>
  >({
    queryKey: getApiStorageProfileSystemProfilesProfileIdUnmaskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId'].unmask.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiStorageProfileSystemProfilesProfileIdUnmask<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['unmask']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdUnmaskQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiStorageProfileSystemProfilesProfileIdUnmaskQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdQueryKey(
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

export function getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdQueryKey>
  >({
    queryKey: getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId'].versions[
          ':profileVersionId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdUnmaskQueryKey(
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

export function getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdUnmaskQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['unmask']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdUnmaskQueryKey
    >
  >({
    queryKey:
      getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdUnmaskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId'].versions[
          ':profileVersionId'
        ].unmask.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdUnmask<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['unmask']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdUnmaskQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdUnmaskQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiStorageProfileSystemProspectsMutationKey() {
  return ['api', '/api/storage/profile-system/prospects', 'POST'] as const
}

export function getPostApiStorageProfileSystemProspectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.storage)['profile-system']['prospects']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.storage)['profile-system']['prospects']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiStorageProfileSystemProspectsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.storage)['profile-system']['prospects']['$post']>,
    ) {
      return parseResponse(client.api.storage['profile-system'].prospects.$post(args, options))
    },
  })
}

export function injectPostApiStorageProfileSystemProspects<
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
                ReturnType<(typeof client.api.storage)['profile-system']['prospects']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.storage)['profile-system']['prospects']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiStorageProfileSystemProspectsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiStorageProfileSystemProspectsProspectIdQueryKey(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/storage/profile-system/prospects/:prospectId', keyArgs] as const
}

export function getApiStorageProfileSystemProspectsProspectIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiStorageProfileSystemProspectsProspectIdQueryKey>
  >({
    queryKey: getApiStorageProfileSystemProspectsProspectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.storage['profile-system'].prospects[':prospectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiStorageProfileSystemProspectsProspectId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiStorageProfileSystemProspectsProspectIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiStorageProfileSystemProspectsProspectIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteApiStorageProfileSystemProspectsProspectIdMutationKey() {
  return ['api', '/api/storage/profile-system/prospects/:prospectId', 'DELETE'] as const
}

export function getDeleteApiStorageProfileSystemProspectsProspectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiStorageProfileSystemProspectsProspectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.storage['profile-system'].prospects[':prospectId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteApiStorageProfileSystemProspectsProspectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiStorageProfileSystemProspectsProspectIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchApiStorageProfileSystemProspectsProspectIdMutationKey() {
  return ['api', '/api/storage/profile-system/prospects/:prospectId', 'PATCH'] as const
}

export function getPatchApiStorageProfileSystemProspectsProspectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiStorageProfileSystemProspectsProspectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.storage['profile-system'].prospects[':prospectId'].$patch(args, options),
      )
    },
  })
}

export function injectPatchApiStorageProfileSystemProspectsProspectId<
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
                  (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiStorageProfileSystemProspectsProspectIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiStorageProfileSystemProspectsProspectIdUnmaskQueryKey(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['unmask']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/storage/profile-system/prospects/:prospectId/unmask', keyArgs] as const
}

export function getApiStorageProfileSystemProspectsProspectIdUnmaskQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['unmask']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiStorageProfileSystemProspectsProspectIdUnmaskQueryKey>
  >({
    queryKey: getApiStorageProfileSystemProspectsProspectIdUnmaskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.storage['profile-system'].prospects[':prospectId'].unmask.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiStorageProfileSystemProspectsProspectIdUnmask<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['unmask']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiStorageProfileSystemProspectsProspectIdUnmaskQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiStorageProfileSystemProspectsProspectIdUnmaskQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}
