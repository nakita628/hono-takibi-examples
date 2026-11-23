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

export function getOauth2Key() {
  return ['oauth2'] as const
}

export function getV1Key() {
  return ['v1'] as const
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

export function getV1AccountsAccountIdCampaignsQueryKey(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['campaigns']['$get']>,
) {
  return ['v1', '/v1/accounts/:accountId/campaigns', args] as const
}

export function getV1AccountsAccountIdCampaignsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['campaigns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['campaigns']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['campaigns']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdCampaignsQueryKey>
  >({
    queryKey: getV1AccountsAccountIdCampaignsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':accountId'].campaigns.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AccountsAccountIdCampaigns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['campaigns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['campaigns']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['campaigns']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdCampaignsQueryKey>
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
      ...getV1AccountsAccountIdCampaignsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AccountsAccountIdCampaigns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['campaigns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['campaigns']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['campaigns']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdCampaignsQueryKey>
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
      ...getV1AccountsAccountIdCampaignsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1AccountsAccountIdCampaignsMutationKey() {
  return ['v1', '/v1/accounts/:accountId/campaigns', 'POST'] as const
}

export function getPostV1AccountsAccountIdCampaignsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['campaigns']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.accounts)[':accountId']['campaigns']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountsAccountIdCampaignsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.accounts)[':accountId']['campaigns']['$post']>,
    ) {
      return parseResponse(client.v1.accounts[':accountId'].campaigns.$post(args, options))
    },
  })
}

export function usePostV1AccountsAccountIdCampaigns<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['campaigns']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.accounts)[':accountId']['campaigns']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AccountsAccountIdCampaignsMutationOptions<
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

export function getV1AccountsAccountIdCampaignsCampaignIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$get']
  >,
) {
  return ['v1', '/v1/accounts/:accountId/campaigns/:campaignId', args] as const
}

export function getV1AccountsAccountIdCampaignsCampaignIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdCampaignsCampaignIdQueryKey>
  >({
    queryKey: getV1AccountsAccountIdCampaignsCampaignIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':accountId'].campaigns[':campaignId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AccountsAccountIdCampaignsCampaignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdCampaignsCampaignIdQueryKey>
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
      ...getV1AccountsAccountIdCampaignsCampaignIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AccountsAccountIdCampaignsCampaignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdCampaignsCampaignIdQueryKey>
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
      ...getV1AccountsAccountIdCampaignsCampaignIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1AccountsAccountIdCampaignsCampaignIdMutationKey() {
  return ['v1', '/v1/accounts/:accountId/campaigns/:campaignId', 'PUT'] as const
}

export function getPutV1AccountsAccountIdCampaignsCampaignIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AccountsAccountIdCampaignsCampaignIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.accounts[':accountId'].campaigns[':campaignId'].$put(args, options),
      )
    },
  })
}

export function usePutV1AccountsAccountIdCampaignsCampaignId<
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
                  (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$put']
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
  const mutationDefaults = getPutV1AccountsAccountIdCampaignsCampaignIdMutationOptions<
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

export function getDeleteV1AccountsAccountIdCampaignsCampaignIdMutationKey() {
  return ['v1', '/v1/accounts/:accountId/campaigns/:campaignId', 'DELETE'] as const
}

export function getDeleteV1AccountsAccountIdCampaignsCampaignIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AccountsAccountIdCampaignsCampaignIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.accounts[':accountId'].campaigns[':campaignId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1AccountsAccountIdCampaignsCampaignId<
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
                  (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$delete']
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
  const mutationDefaults = getDeleteV1AccountsAccountIdCampaignsCampaignIdMutationOptions<
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

export function getV1AccountsAccountIdContactsQueryKey(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['contacts']['$get']>,
) {
  return ['v1', '/v1/accounts/:accountId/contacts', args] as const
}

export function getV1AccountsAccountIdContactsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['contacts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdContactsQueryKey>
  >({
    queryKey: getV1AccountsAccountIdContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':accountId'].contacts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AccountsAccountIdContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['contacts']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['contacts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdContactsQueryKey>
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
      ...getV1AccountsAccountIdContactsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AccountsAccountIdContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['contacts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['contacts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdContactsQueryKey>
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
      ...getV1AccountsAccountIdContactsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1AccountsAccountIdContactsMutationKey() {
  return ['v1', '/v1/accounts/:accountId/contacts', 'POST'] as const
}

export function getPostV1AccountsAccountIdContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['contacts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.accounts)[':accountId']['contacts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountsAccountIdContactsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.accounts)[':accountId']['contacts']['$post']>,
    ) {
      return parseResponse(client.v1.accounts[':accountId'].contacts.$post(args, options))
    },
  })
}

export function usePostV1AccountsAccountIdContacts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['contacts']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.accounts)[':accountId']['contacts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AccountsAccountIdContactsMutationOptions<
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

export function getV1AccountsAccountIdContactsContactIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$get']
  >,
) {
  return ['v1', '/v1/accounts/:accountId/contacts/:contactId', args] as const
}

export function getV1AccountsAccountIdContactsContactIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdContactsContactIdQueryKey>
  >({
    queryKey: getV1AccountsAccountIdContactsContactIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':accountId'].contacts[':contactId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AccountsAccountIdContactsContactId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdContactsContactIdQueryKey>
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
      ...getV1AccountsAccountIdContactsContactIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AccountsAccountIdContactsContactId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdContactsContactIdQueryKey>
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
      ...getV1AccountsAccountIdContactsContactIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1AccountsAccountIdContactsContactIdMutationKey() {
  return ['v1', '/v1/accounts/:accountId/contacts/:contactId', 'PUT'] as const
}

export function getPutV1AccountsAccountIdContactsContactIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AccountsAccountIdContactsContactIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.accounts[':accountId'].contacts[':contactId'].$put(args, options),
      )
    },
  })
}

export function usePutV1AccountsAccountIdContactsContactId<
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
                  (typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$put']
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
  const mutationDefaults = getPutV1AccountsAccountIdContactsContactIdMutationOptions<
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

export function getDeleteV1AccountsAccountIdContactsContactIdMutationKey() {
  return ['v1', '/v1/accounts/:accountId/contacts/:contactId', 'DELETE'] as const
}

export function getDeleteV1AccountsAccountIdContactsContactIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AccountsAccountIdContactsContactIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.accounts[':accountId'].contacts[':contactId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1AccountsAccountIdContactsContactId<
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
                  (typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$delete']
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
  const mutationDefaults = getDeleteV1AccountsAccountIdContactsContactIdMutationOptions<
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

export function getV1AccountsAccountIdConversationsQueryKey(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['conversations']['$get']>,
) {
  return ['v1', '/v1/accounts/:accountId/conversations', args] as const
}

export function getV1AccountsAccountIdConversationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['conversations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['conversations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['conversations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdConversationsQueryKey>
  >({
    queryKey: getV1AccountsAccountIdConversationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':accountId'].conversations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AccountsAccountIdConversations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['conversations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['conversations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.accounts)[':accountId']['conversations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdConversationsQueryKey>
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
      ...getV1AccountsAccountIdConversationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AccountsAccountIdConversations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['conversations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['conversations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.accounts)[':accountId']['conversations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdConversationsQueryKey>
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
      ...getV1AccountsAccountIdConversationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AccountsAccountIdConversationsConversationIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['conversations'][':conversationId']['$get']
  >,
) {
  return ['v1', '/v1/accounts/:accountId/conversations/:conversationId', args] as const
}

export function getV1AccountsAccountIdConversationsConversationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.accounts)[':accountId']['conversations'][':conversationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['conversations'][':conversationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.accounts)[':accountId']['conversations'][':conversationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdConversationsConversationIdQueryKey>
  >({
    queryKey: getV1AccountsAccountIdConversationsConversationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':accountId'].conversations[':conversationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AccountsAccountIdConversationsConversationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.accounts)[':accountId']['conversations'][':conversationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['conversations'][':conversationId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.accounts)[':accountId']['conversations'][':conversationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdConversationsConversationIdQueryKey>
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
      ...getV1AccountsAccountIdConversationsConversationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AccountsAccountIdConversationsConversationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.accounts)[':accountId']['conversations'][':conversationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['conversations'][':conversationId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.accounts)[':accountId']['conversations'][':conversationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdConversationsConversationIdQueryKey>
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
      ...getV1AccountsAccountIdConversationsConversationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1AccountsAccountIdConversationsConversationIdCloseMutationKey() {
  return ['v1', '/v1/accounts/:accountId/conversations/:conversationId/close', 'PUT'] as const
}

export function getPutV1AccountsAccountIdConversationsConversationIdCloseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.accounts)[':accountId']['conversations'][':conversationId']['close']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.accounts)[':accountId']['conversations'][':conversationId']['close']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1AccountsAccountIdConversationsConversationIdCloseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.accounts)[':accountId']['conversations'][':conversationId']['close']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.accounts[':accountId'].conversations[':conversationId'].close.$put(args, options),
      )
    },
  })
}

export function usePutV1AccountsAccountIdConversationsConversationIdClose<
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
                  (typeof client.v1.accounts)[':accountId']['conversations'][':conversationId']['close']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.accounts)[':accountId']['conversations'][':conversationId']['close']['$put']
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
  const mutationDefaults = getPutV1AccountsAccountIdConversationsConversationIdCloseMutationOptions<
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

export function getV1AccountsAccountIdMessagesQueryKey(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['messages']['$get']>,
) {
  return ['v1', '/v1/accounts/:accountId/messages', args] as const
}

export function getV1AccountsAccountIdMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdMessagesQueryKey>
  >({
    queryKey: getV1AccountsAccountIdMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':accountId'].messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AccountsAccountIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['messages']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['messages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdMessagesQueryKey>
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
      ...getV1AccountsAccountIdMessagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AccountsAccountIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['messages']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['messages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdMessagesQueryKey>
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
      ...getV1AccountsAccountIdMessagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1AccountsAccountIdMessagesMutationKey() {
  return ['v1', '/v1/accounts/:accountId/messages', 'POST'] as const
}

export function getPostV1AccountsAccountIdMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['messages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.accounts)[':accountId']['messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountsAccountIdMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.accounts)[':accountId']['messages']['$post']>,
    ) {
      return parseResponse(client.v1.accounts[':accountId'].messages.$post(args, options))
    },
  })
}

export function usePostV1AccountsAccountIdMessages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['messages']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.accounts)[':accountId']['messages']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AccountsAccountIdMessagesMutationOptions<
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

export function getV1AccountsAccountIdMessagesMessageIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['messages'][':messageId']['$get']
  >,
) {
  return ['v1', '/v1/accounts/:accountId/messages/:messageId', args] as const
}

export function getV1AccountsAccountIdMessagesMessageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.accounts)[':accountId']['messages'][':messageId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['messages'][':messageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.accounts)[':accountId']['messages'][':messageId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdMessagesMessageIdQueryKey>
  >({
    queryKey: getV1AccountsAccountIdMessagesMessageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':accountId'].messages[':messageId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AccountsAccountIdMessagesMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.accounts)[':accountId']['messages'][':messageId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['messages'][':messageId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.accounts)[':accountId']['messages'][':messageId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdMessagesMessageIdQueryKey>
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
      ...getV1AccountsAccountIdMessagesMessageIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AccountsAccountIdMessagesMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.accounts)[':accountId']['messages'][':messageId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['messages'][':messageId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.accounts)[':accountId']['messages'][':messageId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdMessagesMessageIdQueryKey>
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
      ...getV1AccountsAccountIdMessagesMessageIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AccountsAccountIdTemplatesQueryKey(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['templates']['$get']>,
) {
  return ['v1', '/v1/accounts/:accountId/templates', args] as const
}

export function getV1AccountsAccountIdTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['templates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdTemplatesQueryKey>
  >({
    queryKey: getV1AccountsAccountIdTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':accountId'].templates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AccountsAccountIdTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['templates']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['templates']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdTemplatesQueryKey>
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
      ...getV1AccountsAccountIdTemplatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AccountsAccountIdTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['templates']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['templates']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdTemplatesQueryKey>
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
      ...getV1AccountsAccountIdTemplatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1AccountsAccountIdTemplatesMutationKey() {
  return ['v1', '/v1/accounts/:accountId/templates', 'POST'] as const
}

export function getPostV1AccountsAccountIdTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['templates']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.accounts)[':accountId']['templates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountsAccountIdTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.accounts)[':accountId']['templates']['$post']>,
    ) {
      return parseResponse(client.v1.accounts[':accountId'].templates.$post(args, options))
    },
  })
}

export function usePostV1AccountsAccountIdTemplates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['templates']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.accounts)[':accountId']['templates']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AccountsAccountIdTemplatesMutationOptions<
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

export function getV1AccountsAccountIdTemplatesTemplateIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$get']
  >,
) {
  return ['v1', '/v1/accounts/:accountId/templates/:templateId', args] as const
}

export function getV1AccountsAccountIdTemplatesTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdTemplatesTemplateIdQueryKey>
  >({
    queryKey: getV1AccountsAccountIdTemplatesTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':accountId'].templates[':templateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AccountsAccountIdTemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdTemplatesTemplateIdQueryKey>
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
      ...getV1AccountsAccountIdTemplatesTemplateIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AccountsAccountIdTemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdTemplatesTemplateIdQueryKey>
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
      ...getV1AccountsAccountIdTemplatesTemplateIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1AccountsAccountIdTemplatesTemplateIdMutationKey() {
  return ['v1', '/v1/accounts/:accountId/templates/:templateId', 'PUT'] as const
}

export function getPutV1AccountsAccountIdTemplatesTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AccountsAccountIdTemplatesTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.accounts[':accountId'].templates[':templateId'].$put(args, options),
      )
    },
  })
}

export function usePutV1AccountsAccountIdTemplatesTemplateId<
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
                  (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$put']
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
  const mutationDefaults = getPutV1AccountsAccountIdTemplatesTemplateIdMutationOptions<
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

export function getDeleteV1AccountsAccountIdTemplatesTemplateIdMutationKey() {
  return ['v1', '/v1/accounts/:accountId/templates/:templateId', 'DELETE'] as const
}

export function getDeleteV1AccountsAccountIdTemplatesTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AccountsAccountIdTemplatesTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.accounts[':accountId'].templates[':templateId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1AccountsAccountIdTemplatesTemplateId<
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
                  (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$delete']
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
  const mutationDefaults = getDeleteV1AccountsAccountIdTemplatesTemplateIdMutationOptions<
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

export function getV1AccountsAccountIdWebhooksQueryKey(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['webhooks']['$get']>,
) {
  return ['v1', '/v1/accounts/:accountId/webhooks', args] as const
}

export function getV1AccountsAccountIdWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['webhooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdWebhooksQueryKey>
  >({
    queryKey: getV1AccountsAccountIdWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':accountId'].webhooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AccountsAccountIdWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['webhooks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['webhooks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdWebhooksQueryKey>
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
      ...getV1AccountsAccountIdWebhooksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AccountsAccountIdWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['webhooks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['webhooks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdWebhooksQueryKey>
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
      ...getV1AccountsAccountIdWebhooksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1AccountsAccountIdWebhooksMutationKey() {
  return ['v1', '/v1/accounts/:accountId/webhooks', 'POST'] as const
}

export function getPostV1AccountsAccountIdWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.accounts)[':accountId']['webhooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountsAccountIdWebhooksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.accounts)[':accountId']['webhooks']['$post']>,
    ) {
      return parseResponse(client.v1.accounts[':accountId'].webhooks.$post(args, options))
    },
  })
}

export function usePostV1AccountsAccountIdWebhooks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['webhooks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.accounts)[':accountId']['webhooks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AccountsAccountIdWebhooksMutationOptions<
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

export function getDeleteV1AccountsAccountIdWebhooksUrlMutationKey() {
  return ['v1', '/v1/accounts/:accountId/webhooks/:url', 'DELETE'] as const
}

export function getDeleteV1AccountsAccountIdWebhooksUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':accountId']['webhooks'][':url']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.accounts)[':accountId']['webhooks'][':url']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AccountsAccountIdWebhooksUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.accounts)[':accountId']['webhooks'][':url']['$delete']
      >,
    ) {
      return parseResponse(client.v1.accounts[':accountId'].webhooks[':url'].$delete(args, options))
    },
  })
}

export function useDeleteV1AccountsAccountIdWebhooksUrl<
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
                    (typeof client.v1.accounts)[':accountId']['webhooks'][':url']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.accounts)[':accountId']['webhooks'][':url']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1AccountsAccountIdWebhooksUrlMutationOptions<
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

export function getPostV1ToolsSharefileMutationKey() {
  return ['v1', '/v1/tools/sharefile', 'POST'] as const
}

export function getPostV1ToolsSharefileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tools.sharefile.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.tools.sharefile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ToolsSharefileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.tools.sharefile.$post>) {
      return parseResponse(client.v1.tools.sharefile.$post(args, options))
    },
  })
}

export function usePostV1ToolsSharefile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.tools.sharefile.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.tools.sharefile.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ToolsSharefileMutationOptions<TError, TOnMutateResult>(
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
