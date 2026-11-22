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

export function getV2beta1Key() {
  return ['v2beta1'] as const
}

export function getV2beta1AccountsAccountIdClientsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$get']>
  >,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/clients', toValue(args)] as const
}

export function getV2beta1AccountsAccountIdClientsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2beta1AccountsAccountIdClientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].clients.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$get']>
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
                  ReturnType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2beta1AccountsAccountIdClientsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdClientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2beta1AccountsAccountIdClientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1.accounts[':accountId'].clients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$get']
    >
  >,
) {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/clients/:clientAccountId',
    toValue(args),
  ] as const
}

export function getV2beta1AccountsAccountIdClientsClientAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2beta1AccountsAccountIdClientsClientAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$get']
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
                    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$get']
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
                    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2beta1AccountsAccountIdClientsClientAccountIdQueryKey>
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
              (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdClientsClientAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2beta1AccountsAccountIdClientsClientAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$get']
    >
  >,
) {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/clients/:clientAccountId/invitations',
    toValue(args),
  ] as const
}

export function getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].invitations.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$get']
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
                    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$get']
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
                    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsQueryKey>
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
              (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].invitations.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations'][':invitationId']['$get']
    >
  >,
) {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/clients/:clientAccountId/invitations/:invitationId',
    toValue(args),
  ] as const
}

export function getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsInvitationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations'][':invitationId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsInvitationIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].invitations[
          ':invitationId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations'][':invitationId']['$get']
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
                    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations'][':invitationId']['$get']
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
                    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations'][':invitationId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsInvitationIdQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsInvitationIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].invitations[
            ':invitationId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV2beta1AccountsAccountIdClientsClientAccountIdUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users']['$get']
    >
  >,
) {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/clients/:clientAccountId/users',
    toValue(args),
  ] as const
}

export function getV2beta1AccountsAccountIdClientsClientAccountIdUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2beta1AccountsAccountIdClientsClientAccountIdUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].users.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users']['$get']
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
                    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users']['$get']
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
                    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2beta1AccountsAccountIdClientsClientAccountIdUsersQueryKey>
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
              (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdClientsClientAccountIdUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2beta1AccountsAccountIdClientsClientAccountIdUsersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].users.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$get']
    >
  >,
) {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/clients/:clientAccountId/users/:userId',
    toValue(args),
  ] as const
}

export function getV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].users[':userId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$get']
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
                    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$get']
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
                    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdQueryKey>
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
              (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].users[':userId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$get']>
  >,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/creatives', toValue(args)] as const
}

export function getV2beta1AccountsAccountIdCreativesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2beta1AccountsAccountIdCreativesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].creatives.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2beta1AccountsAccountIdCreativesQueryKey>
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
          Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdCreativesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2beta1AccountsAccountIdCreativesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1.accounts[':accountId'].creatives.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$get']
    >
  >,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/creatives/:creativeId', toValue(args)] as const
}

export function getV2beta1AccountsAccountIdCreativesCreativeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2beta1AccountsAccountIdCreativesCreativeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].creatives[':creativeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$get']
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
                    (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$get']
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
                    (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2beta1AccountsAccountIdCreativesCreativeIdQueryKey>
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
              (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdCreativesCreativeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2beta1AccountsAccountIdCreativesCreativeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1.accounts[':accountId'].creatives[':creativeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations']['$get']
    >
  >,
) {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/creatives/:creativeId/dealAssociations',
    toValue(args),
  ] as const
}

export function getV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].creatives[':creativeId'].dealAssociations.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations']['$get']
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
                    (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations']['$get']
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
                    (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsQueryKey>
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
              (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1.accounts[':accountId'].creatives[':creativeId'].dealAssociations.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
      Extract<
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
      Extract<
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['finalizedProposals']['$get']>
  >,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/finalizedProposals', toValue(args)] as const
}

export function getV2beta1AccountsAccountIdFinalizedProposalsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['finalizedProposals']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2beta1AccountsAccountIdFinalizedProposalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].finalizedProposals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['finalizedProposals']['$get']>
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
                    (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals']['$get']
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
                    (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2beta1AccountsAccountIdFinalizedProposalsQueryKey>
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
            ReturnType<(typeof client.v2beta1.accounts)[':accountId']['finalizedProposals']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdFinalizedProposalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2beta1AccountsAccountIdFinalizedProposalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1.accounts[':accountId'].finalizedProposals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['products']['$get']>
  >,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/products', toValue(args)] as const
}

export function getV2beta1AccountsAccountIdProductsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['products']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2beta1AccountsAccountIdProductsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].products.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['products']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2beta1.accounts)[':accountId']['products']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2beta1AccountsAccountIdProductsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['products']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdProductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2beta1AccountsAccountIdProductsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1.accounts[':accountId'].products.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2beta1AccountsAccountIdProductsProductIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['products'][':productId']['$get']
    >
  >,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/products/:productId', toValue(args)] as const
}

export function getV2beta1AccountsAccountIdProductsProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['products'][':productId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2beta1AccountsAccountIdProductsProductIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].products[':productId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['products'][':productId']['$get']
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
                    (typeof client.v2beta1.accounts)[':accountId']['products'][':productId']['$get']
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
                    (typeof client.v2beta1.accounts)[':accountId']['products'][':productId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2beta1AccountsAccountIdProductsProductIdQueryKey>
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
              (typeof client.v2beta1.accounts)[':accountId']['products'][':productId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdProductsProductIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2beta1AccountsAccountIdProductsProductIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1.accounts[':accountId'].products[':productId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2beta1AccountsAccountIdProposalsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$get']>
  >,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/proposals', toValue(args)] as const
}

export function getV2beta1AccountsAccountIdProposalsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2beta1AccountsAccountIdProposalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].proposals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2beta1AccountsAccountIdProposalsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdProposalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2beta1AccountsAccountIdProposalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1.accounts[':accountId'].proposals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$get']
    >
  >,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/proposals/:proposalId', toValue(args)] as const
}

export function getV2beta1AccountsAccountIdProposalsProposalIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2beta1AccountsAccountIdProposalsProposalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].proposals[':proposalId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$get']
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
                    (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$get']
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
                    (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2beta1AccountsAccountIdProposalsProposalIdQueryKey>
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
              (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdProposalsProposalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2beta1AccountsAccountIdProposalsProposalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1.accounts[':accountId'].proposals[':proposalId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
      Extract<
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['publisherProfiles']['$get']>
  >,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/publisherProfiles', toValue(args)] as const
}

export function getV2beta1AccountsAccountIdPublisherProfilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['publisherProfiles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2beta1AccountsAccountIdPublisherProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].publisherProfiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['publisherProfiles']['$get']>
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
                    (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles']['$get']
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
                    (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2beta1AccountsAccountIdPublisherProfilesQueryKey>
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
            ReturnType<(typeof client.v2beta1.accounts)[':accountId']['publisherProfiles']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdPublisherProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2beta1AccountsAccountIdPublisherProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1.accounts[':accountId'].publisherProfiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2beta1AccountsAccountIdPublisherProfilesPublisherProfileIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles'][':publisherProfileId']['$get']
    >
  >,
) {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/publisherProfiles/:publisherProfileId',
    toValue(args),
  ] as const
}

export function getV2beta1AccountsAccountIdPublisherProfilesPublisherProfileIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles'][':publisherProfileId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2beta1AccountsAccountIdPublisherProfilesPublisherProfileIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1.accounts[':accountId'].publisherProfiles[':publisherProfileId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles'][':publisherProfileId']['$get']
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
                    (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles'][':publisherProfileId']['$get']
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
                    (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles'][':publisherProfileId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2beta1AccountsAccountIdPublisherProfilesPublisherProfileIdQueryKey>
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
              (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles'][':publisherProfileId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdPublisherProfilesPublisherProfileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2beta1AccountsAccountIdPublisherProfilesPublisherProfileIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1.accounts[':accountId'].publisherProfiles[':publisherProfileId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV2beta1FilterSetNameBidMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1)[':filterSetName']['bidMetrics']['$get']>
  >,
) {
  return ['v2beta1', '/v2beta1/:filterSetName/bidMetrics', toValue(args)] as const
}

export function getV2beta1FilterSetNameBidMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1)[':filterSetName']['bidMetrics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2beta1FilterSetNameBidMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1[':filterSetName'].bidMetrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1)[':filterSetName']['bidMetrics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['bidMetrics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2beta1FilterSetNameBidMetricsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['bidMetrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1FilterSetNameBidMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2beta1FilterSetNameBidMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1[':filterSetName'].bidMetrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2beta1FilterSetNameBidResponseErrorsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1)[':filterSetName']['bidResponseErrors']['$get']>
  >,
) {
  return ['v2beta1', '/v2beta1/:filterSetName/bidResponseErrors', toValue(args)] as const
}

export function getV2beta1FilterSetNameBidResponseErrorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1)[':filterSetName']['bidResponseErrors']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2beta1FilterSetNameBidResponseErrorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1[':filterSetName'].bidResponseErrors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1)[':filterSetName']['bidResponseErrors']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2beta1)[':filterSetName']['bidResponseErrors']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2beta1FilterSetNameBidResponseErrorsQueryKey>
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
            ReturnType<(typeof client.v2beta1)[':filterSetName']['bidResponseErrors']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1FilterSetNameBidResponseErrorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2beta1FilterSetNameBidResponseErrorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1[':filterSetName'].bidResponseErrors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2beta1FilterSetNameBidResponsesWithoutBidsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1)[':filterSetName']['bidResponsesWithoutBids']['$get']>
  >,
) {
  return ['v2beta1', '/v2beta1/:filterSetName/bidResponsesWithoutBids', toValue(args)] as const
}

export function getV2beta1FilterSetNameBidResponsesWithoutBidsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1)[':filterSetName']['bidResponsesWithoutBids']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2beta1FilterSetNameBidResponsesWithoutBidsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1[':filterSetName'].bidResponsesWithoutBids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1)[':filterSetName']['bidResponsesWithoutBids']['$get']>
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
                    (typeof client.v2beta1)[':filterSetName']['bidResponsesWithoutBids']['$get']
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
                    (typeof client.v2beta1)[':filterSetName']['bidResponsesWithoutBids']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2beta1FilterSetNameBidResponsesWithoutBidsQueryKey>
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
            ReturnType<(typeof client.v2beta1)[':filterSetName']['bidResponsesWithoutBids']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1FilterSetNameBidResponsesWithoutBidsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2beta1FilterSetNameBidResponsesWithoutBidsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1[':filterSetName'].bidResponsesWithoutBids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2beta1FilterSetNameFilteredBidRequestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1)[':filterSetName']['filteredBidRequests']['$get']>
  >,
) {
  return ['v2beta1', '/v2beta1/:filterSetName/filteredBidRequests', toValue(args)] as const
}

export function getV2beta1FilterSetNameFilteredBidRequestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1)[':filterSetName']['filteredBidRequests']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2beta1FilterSetNameFilteredBidRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1[':filterSetName'].filteredBidRequests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1)[':filterSetName']['filteredBidRequests']['$get']>
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
                    (typeof client.v2beta1)[':filterSetName']['filteredBidRequests']['$get']
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
                    (typeof client.v2beta1)[':filterSetName']['filteredBidRequests']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2beta1FilterSetNameFilteredBidRequestsQueryKey>
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
            ReturnType<(typeof client.v2beta1)[':filterSetName']['filteredBidRequests']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1FilterSetNameFilteredBidRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2beta1FilterSetNameFilteredBidRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1[':filterSetName'].filteredBidRequests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2beta1FilterSetNameFilteredBidsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1)[':filterSetName']['filteredBids']['$get']>
  >,
) {
  return ['v2beta1', '/v2beta1/:filterSetName/filteredBids', toValue(args)] as const
}

export function getV2beta1FilterSetNameFilteredBidsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1)[':filterSetName']['filteredBids']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2beta1FilterSetNameFilteredBidsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1[':filterSetName'].filteredBids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1)[':filterSetName']['filteredBids']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2beta1)[':filterSetName']['filteredBids']['$get']>
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
                  ReturnType<(typeof client.v2beta1)[':filterSetName']['filteredBids']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2beta1FilterSetNameFilteredBidsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['filteredBids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1FilterSetNameFilteredBidsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2beta1FilterSetNameFilteredBidsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1[':filterSetName'].filteredBids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2beta1FilterSetNameFilteredBidsCreativeStatusIdCreativesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['creatives']['$get']
    >
  >,
) {
  return [
    'v2beta1',
    '/v2beta1/:filterSetName/filteredBids/:creativeStatusId/creatives',
    toValue(args),
  ] as const
}

export function getV2beta1FilterSetNameFilteredBidsCreativeStatusIdCreativesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['creatives']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2beta1FilterSetNameFilteredBidsCreativeStatusIdCreativesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1[':filterSetName'].filteredBids[':creativeStatusId'].creatives.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['creatives']['$get']
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
                    (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['creatives']['$get']
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
                    (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['creatives']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2beta1FilterSetNameFilteredBidsCreativeStatusIdCreativesQueryKey>
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
              (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['creatives']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1FilterSetNameFilteredBidsCreativeStatusIdCreativesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2beta1FilterSetNameFilteredBidsCreativeStatusIdCreativesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1[':filterSetName'].filteredBids[':creativeStatusId'].creatives.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV2beta1FilterSetNameFilteredBidsCreativeStatusIdDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['details']['$get']
    >
  >,
) {
  return [
    'v2beta1',
    '/v2beta1/:filterSetName/filteredBids/:creativeStatusId/details',
    toValue(args),
  ] as const
}

export function getV2beta1FilterSetNameFilteredBidsCreativeStatusIdDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['details']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2beta1FilterSetNameFilteredBidsCreativeStatusIdDetailsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1[':filterSetName'].filteredBids[':creativeStatusId'].details.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['details']['$get']
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
                    (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['details']['$get']
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
                    (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['details']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2beta1FilterSetNameFilteredBidsCreativeStatusIdDetailsQueryKey>
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
              (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['details']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1FilterSetNameFilteredBidsCreativeStatusIdDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2beta1FilterSetNameFilteredBidsCreativeStatusIdDetailsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1[':filterSetName'].filteredBids[':creativeStatusId'].details.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV2beta1FilterSetNameImpressionMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1)[':filterSetName']['impressionMetrics']['$get']>
  >,
) {
  return ['v2beta1', '/v2beta1/:filterSetName/impressionMetrics', toValue(args)] as const
}

export function getV2beta1FilterSetNameImpressionMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1)[':filterSetName']['impressionMetrics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2beta1FilterSetNameImpressionMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1[':filterSetName'].impressionMetrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1)[':filterSetName']['impressionMetrics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2beta1)[':filterSetName']['impressionMetrics']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2beta1FilterSetNameImpressionMetricsQueryKey>
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
            ReturnType<(typeof client.v2beta1)[':filterSetName']['impressionMetrics']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1FilterSetNameImpressionMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2beta1FilterSetNameImpressionMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1[':filterSetName'].impressionMetrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2beta1FilterSetNameLosingBidsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1)[':filterSetName']['losingBids']['$get']>
  >,
) {
  return ['v2beta1', '/v2beta1/:filterSetName/losingBids', toValue(args)] as const
}

export function getV2beta1FilterSetNameLosingBidsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1)[':filterSetName']['losingBids']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2beta1FilterSetNameLosingBidsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1[':filterSetName'].losingBids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1)[':filterSetName']['losingBids']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['losingBids']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2beta1FilterSetNameLosingBidsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['losingBids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1FilterSetNameLosingBidsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2beta1FilterSetNameLosingBidsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1[':filterSetName'].losingBids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2beta1FilterSetNameNonBillableWinningBidsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1)[':filterSetName']['nonBillableWinningBids']['$get']>
  >,
) {
  return ['v2beta1', '/v2beta1/:filterSetName/nonBillableWinningBids', toValue(args)] as const
}

export function getV2beta1FilterSetNameNonBillableWinningBidsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1)[':filterSetName']['nonBillableWinningBids']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2beta1FilterSetNameNonBillableWinningBidsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1[':filterSetName'].nonBillableWinningBids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1)[':filterSetName']['nonBillableWinningBids']['$get']>
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
                    (typeof client.v2beta1)[':filterSetName']['nonBillableWinningBids']['$get']
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
                    (typeof client.v2beta1)[':filterSetName']['nonBillableWinningBids']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2beta1FilterSetNameNonBillableWinningBidsQueryKey>
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
            ReturnType<(typeof client.v2beta1)[':filterSetName']['nonBillableWinningBids']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1FilterSetNameNonBillableWinningBidsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2beta1FilterSetNameNonBillableWinningBidsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1[':filterSetName'].nonBillableWinningBids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2beta1NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta1)[':name']['$get']>>,
) {
  return ['v2beta1', '/v2beta1/:name', toValue(args)] as const
}

export function getV2beta1NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta1)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2beta1NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2beta1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta1)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV2beta1NameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2beta1NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1)[':ownerName']['filterSets']['$get']>
  >,
) {
  return ['v2beta1', '/v2beta1/:ownerName/filterSets', toValue(args)] as const
}

export function getV2beta1OwnerNameFilterSetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1)[':ownerName']['filterSets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2beta1OwnerNameFilterSetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1[':ownerName'].filterSets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta1)[':ownerName']['filterSets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta1)[':ownerName']['filterSets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2beta1OwnerNameFilterSetsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2beta1)[':ownerName']['filterSets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1OwnerNameFilterSetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2beta1OwnerNameFilterSetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1[':ownerName'].filterSets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
