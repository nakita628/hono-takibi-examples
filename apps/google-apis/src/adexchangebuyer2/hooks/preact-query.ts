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

export function getV2beta1Key() {
  return ['v2beta1'] as const
}

export function getV2beta1AccountsAccountIdClientsQueryKey(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$get']>,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/clients', args] as const
}

export function getV2beta1AccountsAccountIdClientsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdClientsQueryKey>
  >({
    queryKey: getV2beta1AccountsAccountIdClientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].clients.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta1AccountsAccountIdClients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdClientsQueryKey>
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
      ...getV2beta1AccountsAccountIdClientsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1AccountsAccountIdClients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdClientsQueryKey>
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
      ...getV2beta1AccountsAccountIdClientsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2beta1AccountsAccountIdClientsMutationKey() {
  return ['v2beta1', '/v2beta1/accounts/:accountId/clients', 'POST'] as const
}

export function getPostV2beta1AccountsAccountIdClientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2beta1AccountsAccountIdClientsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$post']>,
    ) {
      return parseResponse(client.v2beta1.accounts[':accountId'].clients.$post(args, options))
    },
  })
}

export function usePostV2beta1AccountsAccountIdClients<
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
                ReturnType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2beta1AccountsAccountIdClientsMutationOptions<
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

export function getV2beta1AccountsAccountIdClientsClientAccountIdQueryKey(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$get']
  >,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/clients/:clientAccountId', args] as const
}

export function getV2beta1AccountsAccountIdClientsClientAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdClientsClientAccountIdQueryKey>
  >({
    queryKey: getV2beta1AccountsAccountIdClientsClientAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta1AccountsAccountIdClientsClientAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdClientsClientAccountIdQueryKey>
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
      ...getV2beta1AccountsAccountIdClientsClientAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1AccountsAccountIdClientsClientAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdClientsClientAccountIdQueryKey>
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
      ...getV2beta1AccountsAccountIdClientsClientAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2beta1AccountsAccountIdClientsClientAccountIdMutationKey() {
  return ['v2beta1', '/v2beta1/accounts/:accountId/clients/:clientAccountId', 'PUT'] as const
}

export function getPutV2beta1AccountsAccountIdClientsClientAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2beta1AccountsAccountIdClientsClientAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$put']
      >,
    ) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].$put(args, options),
      )
    },
  })
}

export function usePutV2beta1AccountsAccountIdClientsClientAccountId<
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
                  (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$put']
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
  const mutationDefaults = getPutV2beta1AccountsAccountIdClientsClientAccountIdMutationOptions<
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

export function getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsQueryKey(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$get']
  >,
) {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/clients/:clientAccountId/invitations',
    args,
  ] as const
}

export function getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsQueryKey>
  >({
    queryKey: getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].invitations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta1AccountsAccountIdClientsClientAccountIdInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsQueryKey>
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
      ...getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1AccountsAccountIdClientsClientAccountIdInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsQueryKey>
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
      ...getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2beta1AccountsAccountIdClientsClientAccountIdInvitationsMutationKey() {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/clients/:clientAccountId/invitations',
    'POST',
  ] as const
}

export function getPostV2beta1AccountsAccountIdClientsClientAccountIdInvitationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2beta1AccountsAccountIdClientsClientAccountIdInvitationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$post']
      >,
    ) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].invitations.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2beta1AccountsAccountIdClientsClientAccountIdInvitations<
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
                  (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$post']
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
  const mutationDefaults =
    getPostV2beta1AccountsAccountIdClientsClientAccountIdInvitationsMutationOptions<
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

export function getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsInvitationIdQueryKey(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations'][':invitationId']['$get']
  >,
) {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/clients/:clientAccountId/invitations/:invitationId',
    args,
  ] as const
}

export function getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsInvitationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations'][':invitationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations'][':invitationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations'][':invitationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsInvitationIdQueryKey
    >
  >({
    queryKey:
      getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsInvitationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].invitations[
          ':invitationId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2beta1AccountsAccountIdClientsClientAccountIdInvitationsInvitationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations'][':invitationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations'][':invitationId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations'][':invitationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsInvitationIdQueryKey
        >
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
      ...getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsInvitationIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1AccountsAccountIdClientsClientAccountIdInvitationsInvitationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations'][':invitationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations'][':invitationId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations'][':invitationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsInvitationIdQueryKey
        >
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
      ...getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsInvitationIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2beta1AccountsAccountIdClientsClientAccountIdUsersQueryKey(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users']['$get']
  >,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/clients/:clientAccountId/users', args] as const
}

export function getV2beta1AccountsAccountIdClientsClientAccountIdUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdClientsClientAccountIdUsersQueryKey>
  >({
    queryKey: getV2beta1AccountsAccountIdClientsClientAccountIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta1AccountsAccountIdClientsClientAccountIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdClientsClientAccountIdUsersQueryKey>
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
      ...getV2beta1AccountsAccountIdClientsClientAccountIdUsersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1AccountsAccountIdClientsClientAccountIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdClientsClientAccountIdUsersQueryKey>
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
      ...getV2beta1AccountsAccountIdClientsClientAccountIdUsersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdQueryKey(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$get']
  >,
) {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/clients/:clientAccountId/users/:userId',
    args,
  ] as const
}

export function getV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdQueryKey>
  >({
    queryKey: getV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].users[':userId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useV2beta1AccountsAccountIdClientsClientAccountIdUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdQueryKey>
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
      ...getV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1AccountsAccountIdClientsClientAccountIdUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdQueryKey>
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
      ...getV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdMutationKey() {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/clients/:clientAccountId/users/:userId',
    'PUT',
  ] as const
}

export function getPutV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$put']
      >,
    ) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].users[':userId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV2beta1AccountsAccountIdClientsClientAccountIdUsersUserId<
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
                  (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$put']
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
  const mutationDefaults =
    getPutV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdMutationOptions<
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

export function getV2beta1AccountsAccountIdCreativesQueryKey(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$get']>,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/creatives', args] as const
}

export function getV2beta1AccountsAccountIdCreativesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdCreativesQueryKey>
  >({
    queryKey: getV2beta1AccountsAccountIdCreativesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].creatives.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta1AccountsAccountIdCreatives<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdCreativesQueryKey>
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
      ...getV2beta1AccountsAccountIdCreativesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1AccountsAccountIdCreatives<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdCreativesQueryKey>
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
      ...getV2beta1AccountsAccountIdCreativesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2beta1AccountsAccountIdCreativesMutationKey() {
  return ['v2beta1', '/v2beta1/accounts/:accountId/creatives', 'POST'] as const
}

export function getPostV2beta1AccountsAccountIdCreativesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2beta1AccountsAccountIdCreativesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$post']>,
    ) {
      return parseResponse(client.v2beta1.accounts[':accountId'].creatives.$post(args, options))
    },
  })
}

export function usePostV2beta1AccountsAccountIdCreatives<
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
                ReturnType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2beta1AccountsAccountIdCreativesMutationOptions<
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

export function getV2beta1AccountsAccountIdCreativesCreativeIdQueryKey(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$get']
  >,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/creatives/:creativeId', args] as const
}

export function getV2beta1AccountsAccountIdCreativesCreativeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdCreativesCreativeIdQueryKey>
  >({
    queryKey: getV2beta1AccountsAccountIdCreativesCreativeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].creatives[':creativeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta1AccountsAccountIdCreativesCreativeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdCreativesCreativeIdQueryKey>
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
      ...getV2beta1AccountsAccountIdCreativesCreativeIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1AccountsAccountIdCreativesCreativeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdCreativesCreativeIdQueryKey>
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
      ...getV2beta1AccountsAccountIdCreativesCreativeIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2beta1AccountsAccountIdCreativesCreativeIdMutationKey() {
  return ['v2beta1', '/v2beta1/accounts/:accountId/creatives/:creativeId', 'PUT'] as const
}

export function getPutV2beta1AccountsAccountIdCreativesCreativeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2beta1AccountsAccountIdCreativesCreativeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$put']
      >,
    ) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].creatives[':creativeId'].$put(args, options),
      )
    },
  })
}

export function usePutV2beta1AccountsAccountIdCreativesCreativeId<
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
                  (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$put']
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
  const mutationDefaults = getPutV2beta1AccountsAccountIdCreativesCreativeIdMutationOptions<
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

export function getV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsQueryKey(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations']['$get']
  >,
) {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/creatives/:creativeId/dealAssociations',
    args,
  ] as const
}

export function getV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsQueryKey>
  >({
    queryKey: getV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].creatives[':creativeId'].dealAssociations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta1AccountsAccountIdCreativesCreativeIdDealAssociations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsQueryKey>
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
      ...getV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1AccountsAccountIdCreativesCreativeIdDealAssociations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsQueryKey>
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
      ...getV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsAddMutationKey() {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/creatives/:creativeId/dealAssociations:add',
    'POST',
  ] as const
}

export function getPostV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations:add']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations:add']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsAddMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations:add']['$post']
      >,
    ) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].creatives[':creativeId'][
          'dealAssociations:add'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsAdd<
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
                  (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations:add']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations:add']['$post']
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
  const mutationDefaults =
    getPostV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsAddMutationOptions<
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

export function getPostV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsRemoveMutationKey() {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/creatives/:creativeId/dealAssociations:remove',
    'POST',
  ] as const
}

export function getPostV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations:remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations:remove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations:remove']['$post']
      >,
    ) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].creatives[':creativeId'][
          'dealAssociations:remove'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsRemove<
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
                  (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations:remove']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations:remove']['$post']
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
  const mutationDefaults =
    getPostV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsRemoveMutationOptions<
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

export function getPostV2beta1AccountsAccountIdCreativesCreativeIdStopWatchingMutationKey() {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/creatives/:creativeId:stopWatching',
    'POST',
  ] as const
}

export function getPostV2beta1AccountsAccountIdCreativesCreativeIdStopWatchingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId:stopWatching']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId:stopWatching']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2beta1AccountsAccountIdCreativesCreativeIdStopWatchingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId:stopWatching']['$post']
      >,
    ) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].creatives[':creativeId:stopWatching'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2beta1AccountsAccountIdCreativesCreativeIdStopWatching<
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
                  (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId:stopWatching']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId:stopWatching']['$post']
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
  const mutationDefaults =
    getPostV2beta1AccountsAccountIdCreativesCreativeIdStopWatchingMutationOptions<
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

export function getPostV2beta1AccountsAccountIdCreativesCreativeIdWatchMutationKey() {
  return ['v2beta1', '/v2beta1/accounts/:accountId/creatives/:creativeId:watch', 'POST'] as const
}

export function getPostV2beta1AccountsAccountIdCreativesCreativeIdWatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId:watch']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId:watch']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2beta1AccountsAccountIdCreativesCreativeIdWatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId:watch']['$post']
      >,
    ) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].creatives[':creativeId:watch'].$post(args, options),
      )
    },
  })
}

export function usePostV2beta1AccountsAccountIdCreativesCreativeIdWatch<
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
                  (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId:watch']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId:watch']['$post']
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
  const mutationDefaults = getPostV2beta1AccountsAccountIdCreativesCreativeIdWatchMutationOptions<
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

export function getV2beta1AccountsAccountIdFinalizedProposalsQueryKey(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals']['$get']
  >,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/finalizedProposals', args] as const
}

export function getV2beta1AccountsAccountIdFinalizedProposalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2beta1.accounts)[':accountId']['finalizedProposals']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2beta1.accounts)[':accountId']['finalizedProposals']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdFinalizedProposalsQueryKey>
  >({
    queryKey: getV2beta1AccountsAccountIdFinalizedProposalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].finalizedProposals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta1AccountsAccountIdFinalizedProposals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2beta1.accounts)[':accountId']['finalizedProposals']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdFinalizedProposalsQueryKey>
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
      ...getV2beta1AccountsAccountIdFinalizedProposalsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1AccountsAccountIdFinalizedProposals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2beta1.accounts)[':accountId']['finalizedProposals']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdFinalizedProposalsQueryKey>
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
      ...getV2beta1AccountsAccountIdFinalizedProposalsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2beta1AccountsAccountIdFinalizedProposalsProposalIdPauseMutationKey() {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/finalizedProposals/:proposalId:pause',
    'POST',
  ] as const
}

export function getPostV2beta1AccountsAccountIdFinalizedProposalsProposalIdPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals'][':proposalId:pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals'][':proposalId:pause']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2beta1AccountsAccountIdFinalizedProposalsProposalIdPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals'][':proposalId:pause']['$post']
      >,
    ) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].finalizedProposals[':proposalId:pause'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2beta1AccountsAccountIdFinalizedProposalsProposalIdPause<
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
                  (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals'][':proposalId:pause']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals'][':proposalId:pause']['$post']
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
  const mutationDefaults =
    getPostV2beta1AccountsAccountIdFinalizedProposalsProposalIdPauseMutationOptions<
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

export function getPostV2beta1AccountsAccountIdFinalizedProposalsProposalIdResumeMutationKey() {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/finalizedProposals/:proposalId:resume',
    'POST',
  ] as const
}

export function getPostV2beta1AccountsAccountIdFinalizedProposalsProposalIdResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals'][':proposalId:resume']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals'][':proposalId:resume']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2beta1AccountsAccountIdFinalizedProposalsProposalIdResumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals'][':proposalId:resume']['$post']
      >,
    ) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].finalizedProposals[':proposalId:resume'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2beta1AccountsAccountIdFinalizedProposalsProposalIdResume<
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
                  (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals'][':proposalId:resume']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals'][':proposalId:resume']['$post']
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
  const mutationDefaults =
    getPostV2beta1AccountsAccountIdFinalizedProposalsProposalIdResumeMutationOptions<
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

export function getV2beta1AccountsAccountIdProductsQueryKey(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['products']['$get']>,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/products', args] as const
}

export function getV2beta1AccountsAccountIdProductsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['products']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['products']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['products']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdProductsQueryKey>
  >({
    queryKey: getV2beta1AccountsAccountIdProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].products.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta1AccountsAccountIdProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['products']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['products']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2beta1.accounts)[':accountId']['products']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdProductsQueryKey>
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
      ...getV2beta1AccountsAccountIdProductsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1AccountsAccountIdProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['products']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['products']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2beta1.accounts)[':accountId']['products']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdProductsQueryKey>
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
      ...getV2beta1AccountsAccountIdProductsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2beta1AccountsAccountIdProductsProductIdQueryKey(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['products'][':productId']['$get']
  >,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/products/:productId', args] as const
}

export function getV2beta1AccountsAccountIdProductsProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['products'][':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['products'][':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['products'][':productId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdProductsProductIdQueryKey>
  >({
    queryKey: getV2beta1AccountsAccountIdProductsProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].products[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta1AccountsAccountIdProductsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['products'][':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['products'][':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1.accounts)[':accountId']['products'][':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdProductsProductIdQueryKey>
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
      ...getV2beta1AccountsAccountIdProductsProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1AccountsAccountIdProductsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['products'][':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['products'][':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1.accounts)[':accountId']['products'][':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdProductsProductIdQueryKey>
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
      ...getV2beta1AccountsAccountIdProductsProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2beta1AccountsAccountIdProposalsQueryKey(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$get']>,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/proposals', args] as const
}

export function getV2beta1AccountsAccountIdProposalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdProposalsQueryKey>
  >({
    queryKey: getV2beta1AccountsAccountIdProposalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].proposals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta1AccountsAccountIdProposals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdProposalsQueryKey>
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
      ...getV2beta1AccountsAccountIdProposalsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1AccountsAccountIdProposals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdProposalsQueryKey>
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
      ...getV2beta1AccountsAccountIdProposalsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2beta1AccountsAccountIdProposalsMutationKey() {
  return ['v2beta1', '/v2beta1/accounts/:accountId/proposals', 'POST'] as const
}

export function getPostV2beta1AccountsAccountIdProposalsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2beta1AccountsAccountIdProposalsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$post']>,
    ) {
      return parseResponse(client.v2beta1.accounts[':accountId'].proposals.$post(args, options))
    },
  })
}

export function usePostV2beta1AccountsAccountIdProposals<
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
                ReturnType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2beta1AccountsAccountIdProposalsMutationOptions<
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

export function getV2beta1AccountsAccountIdProposalsProposalIdQueryKey(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$get']
  >,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/proposals/:proposalId', args] as const
}

export function getV2beta1AccountsAccountIdProposalsProposalIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdProposalsProposalIdQueryKey>
  >({
    queryKey: getV2beta1AccountsAccountIdProposalsProposalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].proposals[':proposalId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta1AccountsAccountIdProposalsProposalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdProposalsProposalIdQueryKey>
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
      ...getV2beta1AccountsAccountIdProposalsProposalIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1AccountsAccountIdProposalsProposalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdProposalsProposalIdQueryKey>
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
      ...getV2beta1AccountsAccountIdProposalsProposalIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2beta1AccountsAccountIdProposalsProposalIdMutationKey() {
  return ['v2beta1', '/v2beta1/accounts/:accountId/proposals/:proposalId', 'PUT'] as const
}

export function getPutV2beta1AccountsAccountIdProposalsProposalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2beta1AccountsAccountIdProposalsProposalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$put']
      >,
    ) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].proposals[':proposalId'].$put(args, options),
      )
    },
  })
}

export function usePutV2beta1AccountsAccountIdProposalsProposalId<
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
                  (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$put']
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
  const mutationDefaults = getPutV2beta1AccountsAccountIdProposalsProposalIdMutationOptions<
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

export function getPostV2beta1AccountsAccountIdProposalsProposalIdAcceptMutationKey() {
  return ['v2beta1', '/v2beta1/accounts/:accountId/proposals/:proposalId:accept', 'POST'] as const
}

export function getPostV2beta1AccountsAccountIdProposalsProposalIdAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:accept']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:accept']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2beta1AccountsAccountIdProposalsProposalIdAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:accept']['$post']
      >,
    ) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].proposals[':proposalId:accept'].$post(args, options),
      )
    },
  })
}

export function usePostV2beta1AccountsAccountIdProposalsProposalIdAccept<
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
                  (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:accept']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:accept']['$post']
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
  const mutationDefaults = getPostV2beta1AccountsAccountIdProposalsProposalIdAcceptMutationOptions<
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

export function getPostV2beta1AccountsAccountIdProposalsProposalIdAddNoteMutationKey() {
  return ['v2beta1', '/v2beta1/accounts/:accountId/proposals/:proposalId:addNote', 'POST'] as const
}

export function getPostV2beta1AccountsAccountIdProposalsProposalIdAddNoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:addNote']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:addNote']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2beta1AccountsAccountIdProposalsProposalIdAddNoteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:addNote']['$post']
      >,
    ) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].proposals[':proposalId:addNote'].$post(args, options),
      )
    },
  })
}

export function usePostV2beta1AccountsAccountIdProposalsProposalIdAddNote<
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
                  (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:addNote']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:addNote']['$post']
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
  const mutationDefaults = getPostV2beta1AccountsAccountIdProposalsProposalIdAddNoteMutationOptions<
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

export function getPostV2beta1AccountsAccountIdProposalsProposalIdCancelNegotiationMutationKey() {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/proposals/:proposalId:cancelNegotiation',
    'POST',
  ] as const
}

export function getPostV2beta1AccountsAccountIdProposalsProposalIdCancelNegotiationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:cancelNegotiation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:cancelNegotiation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2beta1AccountsAccountIdProposalsProposalIdCancelNegotiationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:cancelNegotiation']['$post']
      >,
    ) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].proposals[':proposalId:cancelNegotiation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2beta1AccountsAccountIdProposalsProposalIdCancelNegotiation<
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
                  (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:cancelNegotiation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:cancelNegotiation']['$post']
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
  const mutationDefaults =
    getPostV2beta1AccountsAccountIdProposalsProposalIdCancelNegotiationMutationOptions<
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

export function getPostV2beta1AccountsAccountIdProposalsProposalIdCompleteSetupMutationKey() {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/proposals/:proposalId:completeSetup',
    'POST',
  ] as const
}

export function getPostV2beta1AccountsAccountIdProposalsProposalIdCompleteSetupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:completeSetup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:completeSetup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2beta1AccountsAccountIdProposalsProposalIdCompleteSetupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:completeSetup']['$post']
      >,
    ) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].proposals[':proposalId:completeSetup'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2beta1AccountsAccountIdProposalsProposalIdCompleteSetup<
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
                  (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:completeSetup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:completeSetup']['$post']
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
  const mutationDefaults =
    getPostV2beta1AccountsAccountIdProposalsProposalIdCompleteSetupMutationOptions<
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

export function getPostV2beta1AccountsAccountIdProposalsProposalIdPauseMutationKey() {
  return ['v2beta1', '/v2beta1/accounts/:accountId/proposals/:proposalId:pause', 'POST'] as const
}

export function getPostV2beta1AccountsAccountIdProposalsProposalIdPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:pause']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2beta1AccountsAccountIdProposalsProposalIdPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:pause']['$post']
      >,
    ) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].proposals[':proposalId:pause'].$post(args, options),
      )
    },
  })
}

export function usePostV2beta1AccountsAccountIdProposalsProposalIdPause<
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
                  (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:pause']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:pause']['$post']
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
  const mutationDefaults = getPostV2beta1AccountsAccountIdProposalsProposalIdPauseMutationOptions<
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

export function getPostV2beta1AccountsAccountIdProposalsProposalIdResumeMutationKey() {
  return ['v2beta1', '/v2beta1/accounts/:accountId/proposals/:proposalId:resume', 'POST'] as const
}

export function getPostV2beta1AccountsAccountIdProposalsProposalIdResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:resume']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:resume']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2beta1AccountsAccountIdProposalsProposalIdResumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:resume']['$post']
      >,
    ) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].proposals[':proposalId:resume'].$post(args, options),
      )
    },
  })
}

export function usePostV2beta1AccountsAccountIdProposalsProposalIdResume<
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
                  (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:resume']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:resume']['$post']
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
  const mutationDefaults = getPostV2beta1AccountsAccountIdProposalsProposalIdResumeMutationOptions<
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

export function getV2beta1AccountsAccountIdPublisherProfilesQueryKey(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles']['$get']
  >,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/publisherProfiles', args] as const
}

export function getV2beta1AccountsAccountIdPublisherProfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2beta1.accounts)[':accountId']['publisherProfiles']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2beta1.accounts)[':accountId']['publisherProfiles']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdPublisherProfilesQueryKey>
  >({
    queryKey: getV2beta1AccountsAccountIdPublisherProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].publisherProfiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta1AccountsAccountIdPublisherProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2beta1.accounts)[':accountId']['publisherProfiles']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdPublisherProfilesQueryKey>
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
      ...getV2beta1AccountsAccountIdPublisherProfilesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1AccountsAccountIdPublisherProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2beta1.accounts)[':accountId']['publisherProfiles']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdPublisherProfilesQueryKey>
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
      ...getV2beta1AccountsAccountIdPublisherProfilesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2beta1AccountsAccountIdPublisherProfilesPublisherProfileIdQueryKey(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles'][':publisherProfileId']['$get']
  >,
) {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/publisherProfiles/:publisherProfileId',
    args,
  ] as const
}

export function getV2beta1AccountsAccountIdPublisherProfilesPublisherProfileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles'][':publisherProfileId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles'][':publisherProfileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles'][':publisherProfileId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdPublisherProfilesPublisherProfileIdQueryKey>
  >({
    queryKey: getV2beta1AccountsAccountIdPublisherProfilesPublisherProfileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].publisherProfiles[':publisherProfileId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta1AccountsAccountIdPublisherProfilesPublisherProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles'][':publisherProfileId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles'][':publisherProfileId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles'][':publisherProfileId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdPublisherProfilesPublisherProfileIdQueryKey>
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
      ...getV2beta1AccountsAccountIdPublisherProfilesPublisherProfileIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1AccountsAccountIdPublisherProfilesPublisherProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles'][':publisherProfileId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles'][':publisherProfileId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles'][':publisherProfileId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdPublisherProfilesPublisherProfileIdQueryKey>
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
      ...getV2beta1AccountsAccountIdPublisherProfilesPublisherProfileIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2beta1FilterSetNameBidMetricsQueryKey(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['bidMetrics']['$get']>,
) {
  return ['v2beta1', '/v2beta1/:filterSetName/bidMetrics', args] as const
}

export function getV2beta1FilterSetNameBidMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['bidMetrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['bidMetrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['bidMetrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1FilterSetNameBidMetricsQueryKey>
  >({
    queryKey: getV2beta1FilterSetNameBidMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1[':filterSetName'].bidMetrics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta1FilterSetNameBidMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['bidMetrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['bidMetrics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['bidMetrics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1FilterSetNameBidMetricsQueryKey>
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
      ...getV2beta1FilterSetNameBidMetricsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1FilterSetNameBidMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['bidMetrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['bidMetrics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['bidMetrics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1FilterSetNameBidMetricsQueryKey>
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
      ...getV2beta1FilterSetNameBidMetricsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2beta1FilterSetNameBidResponseErrorsQueryKey(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['bidResponseErrors']['$get']>,
) {
  return ['v2beta1', '/v2beta1/:filterSetName/bidResponseErrors', args] as const
}

export function getV2beta1FilterSetNameBidResponseErrorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['bidResponseErrors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['bidResponseErrors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2beta1)[':filterSetName']['bidResponseErrors']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1FilterSetNameBidResponseErrorsQueryKey>
  >({
    queryKey: getV2beta1FilterSetNameBidResponseErrorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1[':filterSetName'].bidResponseErrors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta1FilterSetNameBidResponseErrors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['bidResponseErrors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['bidResponseErrors']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2beta1)[':filterSetName']['bidResponseErrors']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1FilterSetNameBidResponseErrorsQueryKey>
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
      ...getV2beta1FilterSetNameBidResponseErrorsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1FilterSetNameBidResponseErrors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['bidResponseErrors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['bidResponseErrors']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2beta1)[':filterSetName']['bidResponseErrors']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1FilterSetNameBidResponseErrorsQueryKey>
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
      ...getV2beta1FilterSetNameBidResponseErrorsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2beta1FilterSetNameBidResponsesWithoutBidsQueryKey(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['bidResponsesWithoutBids']['$get']
  >,
) {
  return ['v2beta1', '/v2beta1/:filterSetName/bidResponsesWithoutBids', args] as const
}

export function getV2beta1FilterSetNameBidResponsesWithoutBidsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2beta1)[':filterSetName']['bidResponsesWithoutBids']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['bidResponsesWithoutBids']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2beta1)[':filterSetName']['bidResponsesWithoutBids']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1FilterSetNameBidResponsesWithoutBidsQueryKey>
  >({
    queryKey: getV2beta1FilterSetNameBidResponsesWithoutBidsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1[':filterSetName'].bidResponsesWithoutBids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta1FilterSetNameBidResponsesWithoutBids<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2beta1)[':filterSetName']['bidResponsesWithoutBids']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['bidResponsesWithoutBids']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1)[':filterSetName']['bidResponsesWithoutBids']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1FilterSetNameBidResponsesWithoutBidsQueryKey>
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
      ...getV2beta1FilterSetNameBidResponsesWithoutBidsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1FilterSetNameBidResponsesWithoutBids<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2beta1)[':filterSetName']['bidResponsesWithoutBids']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['bidResponsesWithoutBids']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1)[':filterSetName']['bidResponsesWithoutBids']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1FilterSetNameBidResponsesWithoutBidsQueryKey>
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
      ...getV2beta1FilterSetNameBidResponsesWithoutBidsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2beta1FilterSetNameFilteredBidRequestsQueryKey(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['filteredBidRequests']['$get']>,
) {
  return ['v2beta1', '/v2beta1/:filterSetName/filteredBidRequests', args] as const
}

export function getV2beta1FilterSetNameFilteredBidRequestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2beta1)[':filterSetName']['filteredBidRequests']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['filteredBidRequests']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2beta1)[':filterSetName']['filteredBidRequests']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1FilterSetNameFilteredBidRequestsQueryKey>
  >({
    queryKey: getV2beta1FilterSetNameFilteredBidRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1[':filterSetName'].filteredBidRequests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta1FilterSetNameFilteredBidRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2beta1)[':filterSetName']['filteredBidRequests']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['filteredBidRequests']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2beta1)[':filterSetName']['filteredBidRequests']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1FilterSetNameFilteredBidRequestsQueryKey>
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
      ...getV2beta1FilterSetNameFilteredBidRequestsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1FilterSetNameFilteredBidRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2beta1)[':filterSetName']['filteredBidRequests']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['filteredBidRequests']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2beta1)[':filterSetName']['filteredBidRequests']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1FilterSetNameFilteredBidRequestsQueryKey>
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
      ...getV2beta1FilterSetNameFilteredBidRequestsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2beta1FilterSetNameFilteredBidsQueryKey(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['filteredBids']['$get']>,
) {
  return ['v2beta1', '/v2beta1/:filterSetName/filteredBids', args] as const
}

export function getV2beta1FilterSetNameFilteredBidsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['filteredBids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['filteredBids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['filteredBids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1FilterSetNameFilteredBidsQueryKey>
  >({
    queryKey: getV2beta1FilterSetNameFilteredBidsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1[':filterSetName'].filteredBids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta1FilterSetNameFilteredBids<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['filteredBids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['filteredBids']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['filteredBids']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1FilterSetNameFilteredBidsQueryKey>
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
      ...getV2beta1FilterSetNameFilteredBidsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1FilterSetNameFilteredBids<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['filteredBids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['filteredBids']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['filteredBids']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1FilterSetNameFilteredBidsQueryKey>
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
      ...getV2beta1FilterSetNameFilteredBidsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2beta1FilterSetNameFilteredBidsCreativeStatusIdCreativesQueryKey(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['creatives']['$get']
  >,
) {
  return [
    'v2beta1',
    '/v2beta1/:filterSetName/filteredBids/:creativeStatusId/creatives',
    args,
  ] as const
}

export function getV2beta1FilterSetNameFilteredBidsCreativeStatusIdCreativesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['creatives']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['creatives']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['creatives']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1FilterSetNameFilteredBidsCreativeStatusIdCreativesQueryKey>
  >({
    queryKey: getV2beta1FilterSetNameFilteredBidsCreativeStatusIdCreativesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1[':filterSetName'].filteredBids[':creativeStatusId'].creatives.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta1FilterSetNameFilteredBidsCreativeStatusIdCreatives<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['creatives']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['creatives']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['creatives']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1FilterSetNameFilteredBidsCreativeStatusIdCreativesQueryKey>
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
      ...getV2beta1FilterSetNameFilteredBidsCreativeStatusIdCreativesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1FilterSetNameFilteredBidsCreativeStatusIdCreatives<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['creatives']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['creatives']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['creatives']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1FilterSetNameFilteredBidsCreativeStatusIdCreativesQueryKey>
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
      ...getV2beta1FilterSetNameFilteredBidsCreativeStatusIdCreativesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2beta1FilterSetNameFilteredBidsCreativeStatusIdDetailsQueryKey(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['details']['$get']
  >,
) {
  return [
    'v2beta1',
    '/v2beta1/:filterSetName/filteredBids/:creativeStatusId/details',
    args,
  ] as const
}

export function getV2beta1FilterSetNameFilteredBidsCreativeStatusIdDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['details']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['details']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1FilterSetNameFilteredBidsCreativeStatusIdDetailsQueryKey>
  >({
    queryKey: getV2beta1FilterSetNameFilteredBidsCreativeStatusIdDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1[':filterSetName'].filteredBids[':creativeStatusId'].details.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta1FilterSetNameFilteredBidsCreativeStatusIdDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['details']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['details']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['details']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1FilterSetNameFilteredBidsCreativeStatusIdDetailsQueryKey>
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
      ...getV2beta1FilterSetNameFilteredBidsCreativeStatusIdDetailsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1FilterSetNameFilteredBidsCreativeStatusIdDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['details']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['details']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['details']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1FilterSetNameFilteredBidsCreativeStatusIdDetailsQueryKey>
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
      ...getV2beta1FilterSetNameFilteredBidsCreativeStatusIdDetailsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2beta1FilterSetNameImpressionMetricsQueryKey(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['impressionMetrics']['$get']>,
) {
  return ['v2beta1', '/v2beta1/:filterSetName/impressionMetrics', args] as const
}

export function getV2beta1FilterSetNameImpressionMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['impressionMetrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['impressionMetrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2beta1)[':filterSetName']['impressionMetrics']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1FilterSetNameImpressionMetricsQueryKey>
  >({
    queryKey: getV2beta1FilterSetNameImpressionMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1[':filterSetName'].impressionMetrics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta1FilterSetNameImpressionMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['impressionMetrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['impressionMetrics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2beta1)[':filterSetName']['impressionMetrics']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1FilterSetNameImpressionMetricsQueryKey>
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
      ...getV2beta1FilterSetNameImpressionMetricsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1FilterSetNameImpressionMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['impressionMetrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['impressionMetrics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2beta1)[':filterSetName']['impressionMetrics']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1FilterSetNameImpressionMetricsQueryKey>
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
      ...getV2beta1FilterSetNameImpressionMetricsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2beta1FilterSetNameLosingBidsQueryKey(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['losingBids']['$get']>,
) {
  return ['v2beta1', '/v2beta1/:filterSetName/losingBids', args] as const
}

export function getV2beta1FilterSetNameLosingBidsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['losingBids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['losingBids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['losingBids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1FilterSetNameLosingBidsQueryKey>
  >({
    queryKey: getV2beta1FilterSetNameLosingBidsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1[':filterSetName'].losingBids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta1FilterSetNameLosingBids<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['losingBids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['losingBids']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['losingBids']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1FilterSetNameLosingBidsQueryKey>
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
      ...getV2beta1FilterSetNameLosingBidsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1FilterSetNameLosingBids<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['losingBids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['losingBids']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['losingBids']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1FilterSetNameLosingBidsQueryKey>
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
      ...getV2beta1FilterSetNameLosingBidsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2beta1FilterSetNameNonBillableWinningBidsQueryKey(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['nonBillableWinningBids']['$get']
  >,
) {
  return ['v2beta1', '/v2beta1/:filterSetName/nonBillableWinningBids', args] as const
}

export function getV2beta1FilterSetNameNonBillableWinningBidsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2beta1)[':filterSetName']['nonBillableWinningBids']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['nonBillableWinningBids']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2beta1)[':filterSetName']['nonBillableWinningBids']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1FilterSetNameNonBillableWinningBidsQueryKey>
  >({
    queryKey: getV2beta1FilterSetNameNonBillableWinningBidsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1[':filterSetName'].nonBillableWinningBids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta1FilterSetNameNonBillableWinningBids<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2beta1)[':filterSetName']['nonBillableWinningBids']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['nonBillableWinningBids']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1)[':filterSetName']['nonBillableWinningBids']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1FilterSetNameNonBillableWinningBidsQueryKey>
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
      ...getV2beta1FilterSetNameNonBillableWinningBidsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1FilterSetNameNonBillableWinningBids<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2beta1)[':filterSetName']['nonBillableWinningBids']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['nonBillableWinningBids']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2beta1)[':filterSetName']['nonBillableWinningBids']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1FilterSetNameNonBillableWinningBidsQueryKey>
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
      ...getV2beta1FilterSetNameNonBillableWinningBidsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2beta1NameQueryKey(
  args: InferRequestType<(typeof client.v2beta1)[':name']['$get']>,
) {
  return ['v2beta1', '/v2beta1/:name', args] as const
}

export function getV2beta1NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1NameQueryKey>
  >({
    queryKey: getV2beta1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2beta1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2beta1NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2beta1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2beta1NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV2beta1NameMutationKey() {
  return ['v2beta1', '/v2beta1/:name', 'DELETE'] as const
}

export function getDeleteV2beta1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2beta1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2beta1)[':name']['$delete']>) {
      return parseResponse(client.v2beta1[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV2beta1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta1)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2beta1NameMutationOptions<TError, TOnMutateResult>(
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

export function getV2beta1OwnerNameFilterSetsQueryKey(
  args: InferRequestType<(typeof client.v2beta1)[':ownerName']['filterSets']['$get']>,
) {
  return ['v2beta1', '/v2beta1/:ownerName/filterSets', args] as const
}

export function getV2beta1OwnerNameFilterSetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1)[':ownerName']['filterSets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':ownerName']['filterSets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta1)[':ownerName']['filterSets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1OwnerNameFilterSetsQueryKey>
  >({
    queryKey: getV2beta1OwnerNameFilterSetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1[':ownerName'].filterSets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta1OwnerNameFilterSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1)[':ownerName']['filterSets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':ownerName']['filterSets']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta1)[':ownerName']['filterSets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1OwnerNameFilterSetsQueryKey>
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
      ...getV2beta1OwnerNameFilterSetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1OwnerNameFilterSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1)[':ownerName']['filterSets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':ownerName']['filterSets']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta1)[':ownerName']['filterSets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1OwnerNameFilterSetsQueryKey>
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
      ...getV2beta1OwnerNameFilterSetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2beta1OwnerNameFilterSetsMutationKey() {
  return ['v2beta1', '/v2beta1/:ownerName/filterSets', 'POST'] as const
}

export function getPostV2beta1OwnerNameFilterSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta1)[':ownerName']['filterSets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta1)[':ownerName']['filterSets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2beta1OwnerNameFilterSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2beta1)[':ownerName']['filterSets']['$post']>,
    ) {
      return parseResponse(client.v2beta1[':ownerName'].filterSets.$post(args, options))
    },
  })
}

export function usePostV2beta1OwnerNameFilterSets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta1)[':ownerName']['filterSets']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta1)[':ownerName']['filterSets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2beta1OwnerNameFilterSetsMutationOptions<
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
