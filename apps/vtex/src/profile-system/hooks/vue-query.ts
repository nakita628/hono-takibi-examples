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

export function usePostApiStorageProfileSystemProfiles<
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
                  ReturnType<(typeof client.api.storage)['profile-system']['profiles']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.storage)['profile-system']['profiles']['$post']>,
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
  const mutationDefaults = getPostApiStorageProfileSystemProfilesMutationOptions<
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

export function usePutApiStorageProfileSystemProfilesSchema<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiStorageProfileSystemProfilesSchemaMutationOptions<
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

export function getApiStorageProfileSystemProfilesProfileIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/storage/profile-system/profiles/:profileId', keyArgs] as const
}

export function getApiStorageProfileSystemProfilesProfileIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiStorageProfileSystemProfilesProfileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiStorageProfileSystemProfilesProfileId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$get']
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
                    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$get']
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
                    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdQueryKey>
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
              (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiStorageProfileSystemProfilesProfileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiStorageProfileSystemProfilesProfileId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiStorageProfileSystemProfilesProfileIdMutationOptions<
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

export function usePatchApiStorageProfileSystemProfilesProfileId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiStorageProfileSystemProfilesProfileIdMutationOptions<
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

export function getApiStorageProfileSystemProfilesProfileIdAddressesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/storage/profile-system/profiles/:profileId/addresses', keyArgs] as const
}

export function getApiStorageProfileSystemProfilesProfileIdAddressesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiStorageProfileSystemProfilesProfileIdAddressesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId'].addresses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiStorageProfileSystemProfilesProfileIdAddresses<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['$get']
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
                    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['$get']
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
                    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdAddressesQueryKey>
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
              (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdAddressesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiStorageProfileSystemProfilesProfileIdAddressesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].addresses.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiStorageProfileSystemProfilesProfileIdAddresses<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiStorageProfileSystemProfilesProfileIdAddressesMutationOptions<
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

export function getApiStorageProfileSystemProfilesProfileIdAddressesUnmaskQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['unmask']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/storage/profile-system/profiles/:profileId/addresses/unmask',
    keyArgs,
  ] as const
}

export function getApiStorageProfileSystemProfilesProfileIdAddressesUnmaskQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['unmask']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiStorageProfileSystemProfilesProfileIdAddressesUnmaskQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId'].addresses.unmask.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiStorageProfileSystemProfilesProfileIdAddressesUnmask<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['unmask']['$get']
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
                    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['unmask']['$get']
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
                    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['unmask']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdAddressesUnmaskQueryKey>
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
              (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['unmask']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdAddressesUnmaskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiStorageProfileSystemProfilesProfileIdAddressesUnmaskQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].addresses.unmask.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/storage/profile-system/profiles/:profileId/addresses/:addressId',
    keyArgs,
  ] as const
}

export function getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId'].addresses[':addressId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiStorageProfileSystemProfilesProfileIdAddressesAddressId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$get']
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
                    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$get']
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
                    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdQueryKey>
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
              (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].addresses[':addressId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiStorageProfileSystemProfilesProfileIdAddressesAddressId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteApiStorageProfileSystemProfilesProfileIdAddressesAddressIdMutationOptions<
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

export function usePatchApiStorageProfileSystemProfilesProfileIdAddressesAddressId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchApiStorageProfileSystemProfilesProfileIdAddressesAddressIdMutationOptions<
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

export function getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdUnmaskQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['unmask']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/storage/profile-system/profiles/:profileId/addresses/:addressId/unmask',
    keyArgs,
  ] as const
}

export function getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdUnmaskQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['unmask']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdUnmaskQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId'].addresses[
          ':addressId'
        ].unmask.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiStorageProfileSystemProfilesProfileIdAddressesAddressIdUnmask<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['unmask']['$get']
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
                    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['unmask']['$get']
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
                    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['unmask']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdUnmaskQueryKey
          >
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
              (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['unmask']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdUnmaskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdUnmaskQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].addresses[
            ':addressId'
          ].unmask.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/storage/profile-system/profiles/:profileId/addresses/:addressId/versions/:addressVersionId',
    keyArgs,
  ] as const
}

export function getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId'].addresses[
          ':addressId'
        ].versions[':addressVersionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['$get']
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
                    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['$get']
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
                    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].addresses[
            ':addressId'
          ].versions[':addressVersionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdUnmaskQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['unmask']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/storage/profile-system/profiles/:profileId/addresses/:addressId/versions/:addressVersionId/unmask',
    keyArgs,
  ] as const
}

export function getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdUnmaskQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['unmask']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdUnmaskQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId'].addresses[
          ':addressId'
        ].versions[':addressVersionId'].unmask.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdUnmask<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['unmask']['$get']
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
                    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['unmask']['$get']
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
                    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['unmask']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdUnmaskQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdUnmaskQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].addresses[
            ':addressId'
          ].versions[':addressVersionId'].unmask.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiStorageProfileSystemProfilesProfileIdPurchaseInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/storage/profile-system/profiles/:profileId/purchase-info', keyArgs] as const
}

export function getApiStorageProfileSystemProfilesProfileIdPurchaseInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiStorageProfileSystemProfilesProfileIdPurchaseInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId']['purchase-info'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiStorageProfileSystemProfilesProfileIdPurchaseInfo<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$get']
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
                    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$get']
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
                    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdPurchaseInfoQueryKey>
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
              (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdPurchaseInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiStorageProfileSystemProfilesProfileIdPurchaseInfoQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.storage['profile-system'].profiles[':profileId']['purchase-info'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiStorageProfileSystemProfilesProfileIdPurchaseInfo<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApiStorageProfileSystemProfilesProfileIdPurchaseInfoMutationOptions<
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

export function useDeleteApiStorageProfileSystemProfilesProfileIdPurchaseInfo<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteApiStorageProfileSystemProfilesProfileIdPurchaseInfoMutationOptions<
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

export function usePatchApiStorageProfileSystemProfilesProfileIdPurchaseInfo<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchApiStorageProfileSystemProfilesProfileIdPurchaseInfoMutationOptions<
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

export function getApiStorageProfileSystemProfilesProfileIdPurchaseInfoUnmaskQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['unmask']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/storage/profile-system/profiles/:profileId/purchase-info/unmask',
    keyArgs,
  ] as const
}

export function getApiStorageProfileSystemProfilesProfileIdPurchaseInfoUnmaskQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['unmask']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiStorageProfileSystemProfilesProfileIdPurchaseInfoUnmaskQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId']['purchase-info'].unmask.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiStorageProfileSystemProfilesProfileIdPurchaseInfoUnmask<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['unmask']['$get']
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
                    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['unmask']['$get']
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
                    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['unmask']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdPurchaseInfoUnmaskQueryKey>
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
              (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['unmask']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdPurchaseInfoUnmaskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiStorageProfileSystemProfilesProfileIdPurchaseInfoUnmaskQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.storage['profile-system'].profiles[':profileId']['purchase-info'].unmask.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiStorageProfileSystemProfilesProfileIdUnmaskQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['unmask']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/storage/profile-system/profiles/:profileId/unmask', keyArgs] as const
}

export function getApiStorageProfileSystemProfilesProfileIdUnmaskQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['unmask']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiStorageProfileSystemProfilesProfileIdUnmaskQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId'].unmask.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiStorageProfileSystemProfilesProfileIdUnmask<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['unmask']['$get']
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
                    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['unmask']['$get']
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
                    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['unmask']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdUnmaskQueryKey>
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
              (typeof client.api.storage)['profile-system']['profiles'][':profileId']['unmask']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdUnmaskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiStorageProfileSystemProfilesProfileIdUnmaskQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].unmask.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/storage/profile-system/profiles/:profileId/versions/:profileVersionId',
    keyArgs,
  ] as const
}

export function getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId'].versions[
          ':profileVersionId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['$get']
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
                    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['$get']
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
                    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdQueryKey
          >
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
              (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].versions[
            ':profileVersionId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdUnmaskQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['unmask']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/storage/profile-system/profiles/:profileId/versions/:profileVersionId/unmask',
    keyArgs,
  ] as const
}

export function getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdUnmaskQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['unmask']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdUnmaskQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.storage['profile-system'].profiles[':profileId'].versions[
          ':profileVersionId'
        ].unmask.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdUnmask<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['unmask']['$get']
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
                    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['unmask']['$get']
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
                    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['unmask']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdUnmaskQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdUnmaskQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.storage['profile-system'].profiles[':profileId'].versions[
            ':profileVersionId'
          ].unmask.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiStorageProfileSystemProspects<
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
                  ReturnType<(typeof client.api.storage)['profile-system']['prospects']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.storage)['profile-system']['prospects']['$post']>,
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
  const mutationDefaults = getPostApiStorageProfileSystemProspectsMutationOptions<
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

export function getApiStorageProfileSystemProspectsProspectIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/storage/profile-system/prospects/:prospectId', keyArgs] as const
}

export function getApiStorageProfileSystemProspectsProspectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiStorageProfileSystemProspectsProspectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.storage['profile-system'].prospects[':prospectId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiStorageProfileSystemProspectsProspectId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$get']
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
                    (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$get']
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
                    (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiStorageProfileSystemProspectsProspectIdQueryKey>
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
              (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStorageProfileSystemProspectsProspectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiStorageProfileSystemProspectsProspectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.storage['profile-system'].prospects[':prospectId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiStorageProfileSystemProspectsProspectId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiStorageProfileSystemProspectsProspectIdMutationOptions<
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

export function usePatchApiStorageProfileSystemProspectsProspectId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiStorageProfileSystemProspectsProspectIdMutationOptions<
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

export function getApiStorageProfileSystemProspectsProspectIdUnmaskQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['unmask']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/storage/profile-system/prospects/:prospectId/unmask', keyArgs] as const
}

export function getApiStorageProfileSystemProspectsProspectIdUnmaskQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['unmask']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiStorageProfileSystemProspectsProspectIdUnmaskQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.storage['profile-system'].prospects[':prospectId'].unmask.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiStorageProfileSystemProspectsProspectIdUnmask<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['unmask']['$get']
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
                    (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['unmask']['$get']
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
                    (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['unmask']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiStorageProfileSystemProspectsProspectIdUnmaskQueryKey>
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
              (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['unmask']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStorageProfileSystemProspectsProspectIdUnmaskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiStorageProfileSystemProspectsProspectIdUnmaskQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.storage['profile-system'].prospects[':prospectId'].unmask.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
