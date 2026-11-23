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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1CustomersQueryKey(args: InferRequestType<typeof client.v1.customers.$get>) {
  return ['v1', '/v1/customers', args] as const
}

export function getV1CustomersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.customers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1CustomersQueryKey>
  >({
    queryKey: getV1CustomersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.customers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Customers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.customers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1CustomersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Customers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.customers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1CustomersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1PartnersMetadataOwnerIdDevicesDeviceIdMetadataMutationKey() {
  return ['v1', '/v1/partners/:metadataOwnerId/devices/:deviceId/metadata', 'POST'] as const
}

export function getPostV1PartnersMetadataOwnerIdDevicesDeviceIdMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.partners)[':metadataOwnerId']['devices'][':deviceId']['metadata']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.partners)[':metadataOwnerId']['devices'][':deviceId']['metadata']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PartnersMetadataOwnerIdDevicesDeviceIdMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.partners)[':metadataOwnerId']['devices'][':deviceId']['metadata']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.partners[':metadataOwnerId'].devices[':deviceId'].metadata.$post(args, options),
      )
    },
  })
}

export function usePostV1PartnersMetadataOwnerIdDevicesDeviceIdMetadata<
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
                ReturnType<
                  (typeof client.v1.partners)[':metadataOwnerId']['devices'][':deviceId']['metadata']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.partners)[':metadataOwnerId']['devices'][':deviceId']['metadata']['$post']
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
  const mutationDefaults = getPostV1PartnersMetadataOwnerIdDevicesDeviceIdMetadataMutationOptions<
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

export function getV1PartnersPartnerIdCustomersQueryKey(
  args: InferRequestType<(typeof client.v1.partners)[':partnerId']['customers']['$get']>,
) {
  return ['v1', '/v1/partners/:partnerId/customers', args] as const
}

export function getV1PartnersPartnerIdCustomersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.partners)[':partnerId']['customers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.partners)[':partnerId']['customers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.partners)[':partnerId']['customers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PartnersPartnerIdCustomersQueryKey>
  >({
    queryKey: getV1PartnersPartnerIdCustomersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.partners[':partnerId'].customers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1PartnersPartnerIdCustomers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.partners)[':partnerId']['customers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.partners)[':partnerId']['customers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.partners)[':partnerId']['customers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PartnersPartnerIdCustomersQueryKey>
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
      ...getV1PartnersPartnerIdCustomersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1PartnersPartnerIdCustomers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.partners)[':partnerId']['customers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.partners)[':partnerId']['customers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.partners)[':partnerId']['customers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PartnersPartnerIdCustomersQueryKey>
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
      ...getV1PartnersPartnerIdCustomersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1PartnersPartnerIdDevicesClaimMutationKey() {
  return ['v1', '/v1/partners/:partnerId/devices:claim', 'POST'] as const
}

export function getPostV1PartnersPartnerIdDevicesClaimMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.partners)[':partnerId']['devices:claim']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.partners)[':partnerId']['devices:claim']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PartnersPartnerIdDevicesClaimMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.partners)[':partnerId']['devices:claim']['$post']>,
    ) {
      return parseResponse(client.v1.partners[':partnerId']['devices:claim'].$post(args, options))
    },
  })
}

export function usePostV1PartnersPartnerIdDevicesClaim<
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
                ReturnType<(typeof client.v1.partners)[':partnerId']['devices:claim']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.partners)[':partnerId']['devices:claim']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1PartnersPartnerIdDevicesClaimMutationOptions<
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

export function getPostV1PartnersPartnerIdDevicesClaimAsyncMutationKey() {
  return ['v1', '/v1/partners/:partnerId/devices:claimAsync', 'POST'] as const
}

export function getPostV1PartnersPartnerIdDevicesClaimAsyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.partners)[':partnerId']['devices:claimAsync']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.partners)[':partnerId']['devices:claimAsync']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PartnersPartnerIdDevicesClaimAsyncMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.partners)[':partnerId']['devices:claimAsync']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.partners[':partnerId']['devices:claimAsync'].$post(args, options),
      )
    },
  })
}

export function usePostV1PartnersPartnerIdDevicesClaimAsync<
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
                ReturnType<(typeof client.v1.partners)[':partnerId']['devices:claimAsync']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.partners)[':partnerId']['devices:claimAsync']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1PartnersPartnerIdDevicesClaimAsyncMutationOptions<
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

export function getPostV1PartnersPartnerIdDevicesFindByIdentifierMutationKey() {
  return ['v1', '/v1/partners/:partnerId/devices:findByIdentifier', 'POST'] as const
}

export function getPostV1PartnersPartnerIdDevicesFindByIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.partners)[':partnerId']['devices:findByIdentifier']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.partners)[':partnerId']['devices:findByIdentifier']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PartnersPartnerIdDevicesFindByIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.partners)[':partnerId']['devices:findByIdentifier']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.partners[':partnerId']['devices:findByIdentifier'].$post(args, options),
      )
    },
  })
}

export function usePostV1PartnersPartnerIdDevicesFindByIdentifier<
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
                ReturnType<
                  (typeof client.v1.partners)[':partnerId']['devices:findByIdentifier']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.partners)[':partnerId']['devices:findByIdentifier']['$post']
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
  const mutationDefaults = getPostV1PartnersPartnerIdDevicesFindByIdentifierMutationOptions<
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

export function getPostV1PartnersPartnerIdDevicesFindByOwnerMutationKey() {
  return ['v1', '/v1/partners/:partnerId/devices:findByOwner', 'POST'] as const
}

export function getPostV1PartnersPartnerIdDevicesFindByOwnerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.partners)[':partnerId']['devices:findByOwner']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.partners)[':partnerId']['devices:findByOwner']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PartnersPartnerIdDevicesFindByOwnerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.partners)[':partnerId']['devices:findByOwner']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.partners[':partnerId']['devices:findByOwner'].$post(args, options),
      )
    },
  })
}

export function usePostV1PartnersPartnerIdDevicesFindByOwner<
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
                ReturnType<
                  (typeof client.v1.partners)[':partnerId']['devices:findByOwner']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.partners)[':partnerId']['devices:findByOwner']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1PartnersPartnerIdDevicesFindByOwnerMutationOptions<
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

export function getPostV1PartnersPartnerIdDevicesUnclaimMutationKey() {
  return ['v1', '/v1/partners/:partnerId/devices:unclaim', 'POST'] as const
}

export function getPostV1PartnersPartnerIdDevicesUnclaimMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.partners)[':partnerId']['devices:unclaim']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.partners)[':partnerId']['devices:unclaim']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PartnersPartnerIdDevicesUnclaimMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.partners)[':partnerId']['devices:unclaim']['$post']>,
    ) {
      return parseResponse(client.v1.partners[':partnerId']['devices:unclaim'].$post(args, options))
    },
  })
}

export function usePostV1PartnersPartnerIdDevicesUnclaim<
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
                ReturnType<(typeof client.v1.partners)[':partnerId']['devices:unclaim']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.partners)[':partnerId']['devices:unclaim']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1PartnersPartnerIdDevicesUnclaimMutationOptions<
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

export function getPostV1PartnersPartnerIdDevicesUnclaimAsyncMutationKey() {
  return ['v1', '/v1/partners/:partnerId/devices:unclaimAsync', 'POST'] as const
}

export function getPostV1PartnersPartnerIdDevicesUnclaimAsyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.partners)[':partnerId']['devices:unclaimAsync']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.partners)[':partnerId']['devices:unclaimAsync']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PartnersPartnerIdDevicesUnclaimAsyncMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.partners)[':partnerId']['devices:unclaimAsync']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.partners[':partnerId']['devices:unclaimAsync'].$post(args, options),
      )
    },
  })
}

export function usePostV1PartnersPartnerIdDevicesUnclaimAsync<
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
                ReturnType<
                  (typeof client.v1.partners)[':partnerId']['devices:unclaimAsync']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.partners)[':partnerId']['devices:unclaimAsync']['$post']
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
  const mutationDefaults = getPostV1PartnersPartnerIdDevicesUnclaimAsyncMutationOptions<
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

export function getPostV1PartnersPartnerIdDevicesUpdateMetadataAsyncMutationKey() {
  return ['v1', '/v1/partners/:partnerId/devices:updateMetadataAsync', 'POST'] as const
}

export function getPostV1PartnersPartnerIdDevicesUpdateMetadataAsyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.partners)[':partnerId']['devices:updateMetadataAsync']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.partners)[':partnerId']['devices:updateMetadataAsync']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PartnersPartnerIdDevicesUpdateMetadataAsyncMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.partners)[':partnerId']['devices:updateMetadataAsync']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.partners[':partnerId']['devices:updateMetadataAsync'].$post(args, options),
      )
    },
  })
}

export function usePostV1PartnersPartnerIdDevicesUpdateMetadataAsync<
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
                ReturnType<
                  (typeof client.v1.partners)[':partnerId']['devices:updateMetadataAsync']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.partners)[':partnerId']['devices:updateMetadataAsync']['$post']
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
  const mutationDefaults = getPostV1PartnersPartnerIdDevicesUpdateMetadataAsyncMutationOptions<
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

export function getV1NameQueryKey(args: InferRequestType<(typeof client.v1)[':name']['$get']>) {
  return ['v1', '/v1/:name', args] as const
}

export function getV1NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameQueryKey>
  >({
    queryKey: getV1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1NameMutationKey() {
  return ['v1', '/v1/:name', 'DELETE'] as const
}

export function getDeleteV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$delete']>) {
      return parseResponse(client.v1[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchV1NameMutationKey() {
  return ['v1', '/v1/:name', 'PATCH'] as const
}

export function getPatchV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$patch']>) {
      return parseResponse(client.v1[':name'].$patch(args, options))
    },
  })
}

export function usePatchV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ParentConfigurationsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['configurations']['$get']>,
) {
  return ['v1', '/v1/:parent/configurations', args] as const
}

export function getV1ParentConfigurationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['configurations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['configurations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['configurations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentConfigurationsQueryKey>
  >({
    queryKey: getV1ParentConfigurationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].configurations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ParentConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['configurations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['configurations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['configurations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentConfigurationsQueryKey>
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
      ...getV1ParentConfigurationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ParentConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['configurations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['configurations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['configurations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentConfigurationsQueryKey>
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
      ...getV1ParentConfigurationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ParentConfigurationsMutationKey() {
  return ['v1', '/v1/:parent/configurations', 'POST'] as const
}

export function getPostV1ParentConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['configurations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['configurations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['configurations']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].configurations.$post(args, options))
    },
  })
}

export function usePostV1ParentConfigurations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['configurations']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['configurations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ParentConfigurationsMutationOptions<TError, TOnMutateResult>(
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

export function getV1ParentCustomersQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['customers']['$get']>,
) {
  return ['v1', '/v1/:parent/customers', args] as const
}

export function getV1ParentCustomersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['customers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['customers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['customers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentCustomersQueryKey>
  >({
    queryKey: getV1ParentCustomersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].customers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ParentCustomers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['customers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['customers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['customers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentCustomersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ParentCustomersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ParentCustomers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['customers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['customers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['customers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentCustomersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ParentCustomersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1ParentCustomersMutationKey() {
  return ['v1', '/v1/:parent/customers', 'POST'] as const
}

export function getPostV1ParentCustomersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['customers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['customers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentCustomersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['customers']['$post']>) {
      return parseResponse(client.v1[':parent'].customers.$post(args, options))
    },
  })
}

export function usePostV1ParentCustomers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['customers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['customers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ParentCustomersMutationOptions<TError, TOnMutateResult>(
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

export function getV1ParentDevicesQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['devices']['$get']>,
) {
  return ['v1', '/v1/:parent/devices', args] as const
}

export function getV1ParentDevicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['devices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['devices']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentDevicesQueryKey>
  >({
    queryKey: getV1ParentDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].devices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1ParentDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['devices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['devices']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['devices']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ParentDevicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ParentDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['devices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['devices']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['devices']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ParentDevicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1ParentDevicesApplyConfigurationMutationKey() {
  return ['v1', '/v1/:parent/devices:applyConfiguration', 'POST'] as const
}

export function getPostV1ParentDevicesApplyConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['devices:applyConfiguration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['devices:applyConfiguration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentDevicesApplyConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['devices:applyConfiguration']['$post']>,
    ) {
      return parseResponse(client.v1[':parent']['devices:applyConfiguration'].$post(args, options))
    },
  })
}

export function usePostV1ParentDevicesApplyConfiguration<
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
                ReturnType<(typeof client.v1)[':parent']['devices:applyConfiguration']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['devices:applyConfiguration']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ParentDevicesApplyConfigurationMutationOptions<
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

export function getPostV1ParentDevicesRemoveConfigurationMutationKey() {
  return ['v1', '/v1/:parent/devices:removeConfiguration', 'POST'] as const
}

export function getPostV1ParentDevicesRemoveConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['devices:removeConfiguration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['devices:removeConfiguration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentDevicesRemoveConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['devices:removeConfiguration']['$post']>,
    ) {
      return parseResponse(client.v1[':parent']['devices:removeConfiguration'].$post(args, options))
    },
  })
}

export function usePostV1ParentDevicesRemoveConfiguration<
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
                ReturnType<(typeof client.v1)[':parent']['devices:removeConfiguration']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['devices:removeConfiguration']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ParentDevicesRemoveConfigurationMutationOptions<
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

export function getPostV1ParentDevicesUnclaimMutationKey() {
  return ['v1', '/v1/:parent/devices:unclaim', 'POST'] as const
}

export function getPostV1ParentDevicesUnclaimMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['devices:unclaim']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['devices:unclaim']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentDevicesUnclaimMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['devices:unclaim']['$post']>,
    ) {
      return parseResponse(client.v1[':parent']['devices:unclaim'].$post(args, options))
    },
  })
}

export function usePostV1ParentDevicesUnclaim<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['devices:unclaim']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['devices:unclaim']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ParentDevicesUnclaimMutationOptions<TError, TOnMutateResult>(
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

export function getV1ParentDpcsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['dpcs']['$get']>,
) {
  return ['v1', '/v1/:parent/dpcs', args] as const
}

export function getV1ParentDpcsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['dpcs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['dpcs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['dpcs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentDpcsQueryKey>
  >({
    queryKey: getV1ParentDpcsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].dpcs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1ParentDpcs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['dpcs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['dpcs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['dpcs']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentDpcsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ParentDpcsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ParentDpcs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['dpcs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['dpcs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['dpcs']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentDpcsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ParentDpcsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1ParentVendorsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['vendors']['$get']>,
) {
  return ['v1', '/v1/:parent/vendors', args] as const
}

export function getV1ParentVendorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['vendors']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['vendors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['vendors']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentVendorsQueryKey>
  >({
    queryKey: getV1ParentVendorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].vendors.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1ParentVendors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['vendors']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['vendors']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['vendors']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentVendorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ParentVendorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ParentVendors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['vendors']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['vendors']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['vendors']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentVendorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ParentVendorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
