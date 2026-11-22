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

export function getGwKey() {
  return ['gw'] as const
}

export function getOauth2Key() {
  return ['oauth2'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getGwApiV1AccountsQueryKey(
  args: InferRequestType<typeof client.gw.api.v1.accounts.$get>,
) {
  return ['gw', '/gw/api/v1/accounts', args] as const
}

export function getGwApiV1AccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.gw.api.v1.accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1AccountsQueryKey>
  >({
    queryKey: getGwApiV1AccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1.accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGwApiV1Accounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.accounts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1AccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGwApiV1AccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGwApiV1Accounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.accounts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1AccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGwApiV1AccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostGwApiV1AccountsMutationKey() {
  return ['gw', '/gw/api/v1/accounts', 'POST'] as const
}

export function getPostGwApiV1AccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.gw.api.v1.accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1AccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.gw.api.v1.accounts.$post>) {
      return parseResponse(client.gw.api.v1.accounts.$post(args, options))
    },
  })
}

export function usePostGwApiV1Accounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.gw.api.v1.accounts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1AccountsMutationOptions<TError, TOnMutateResult>(
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

export function getPatchGwApiV1AccountsMutationKey() {
  return ['gw', '/gw/api/v1/accounts', 'PATCH'] as const
}

export function getPatchGwApiV1AccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.gw.api.v1.accounts.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchGwApiV1AccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.gw.api.v1.accounts.$patch>) {
      return parseResponse(client.gw.api.v1.accounts.$patch(args, options))
    },
  })
}

export function usePatchGwApiV1Accounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.gw.api.v1.accounts.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchGwApiV1AccountsMutationOptions<TError, TOnMutateResult>(
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

export function getPostGwApiV1AccountsDocumentsMutationKey() {
  return ['gw', '/gw/api/v1/accounts/documents', 'POST'] as const
}

export function getPostGwApiV1AccountsDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.documents.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.gw.api.v1.accounts.documents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1AccountsDocumentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.gw.api.v1.accounts.documents.$post>) {
      return parseResponse(client.gw.api.v1.accounts.documents.$post(args, options))
    },
  })
}

export function usePostGwApiV1AccountsDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.gw.api.v1.accounts.documents.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.gw.api.v1.accounts.documents.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1AccountsDocumentsMutationOptions<TError, TOnMutateResult>(
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

export function getGwApiV1AccountsAccountIdTasksQueryKey(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$get']>,
) {
  return ['gw', '/gw/api/v1/accounts/:accountId/tasks', args] as const
}

export function getGwApiV1AccountsAccountIdTasksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1AccountsAccountIdTasksQueryKey>
  >({
    queryKey: getGwApiV1AccountsAccountIdTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1.accounts[':accountId'].tasks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1AccountsAccountIdTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1AccountsAccountIdTasksQueryKey>
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
      ...getGwApiV1AccountsAccountIdTasksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1AccountsAccountIdTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1AccountsAccountIdTasksQueryKey>
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
      ...getGwApiV1AccountsAccountIdTasksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGwApiV1AccountsAccountIdTasksMutationKey() {
  return ['gw', '/gw/api/v1/accounts/:accountId/tasks', 'POST'] as const
}

export function getPostGwApiV1AccountsAccountIdTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1AccountsAccountIdTasksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$post']>,
    ) {
      return parseResponse(client.gw.api.v1.accounts[':accountId'].tasks.$post(args, options))
    },
  })
}

export function usePostGwApiV1AccountsAccountIdTasks<
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
                ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1AccountsAccountIdTasksMutationOptions<
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

export function getPatchGwApiV1AccountsAccountIdTasksMutationKey() {
  return ['gw', '/gw/api/v1/accounts/:accountId/tasks', 'PATCH'] as const
}

export function getPatchGwApiV1AccountsAccountIdTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGwApiV1AccountsAccountIdTasksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$patch']>,
    ) {
      return parseResponse(client.gw.api.v1.accounts[':accountId'].tasks.$patch(args, options))
    },
  })
}

export function usePatchGwApiV1AccountsAccountIdTasks<
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
                ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchGwApiV1AccountsAccountIdTasksMutationOptions<
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

export function getPostGwApiV1BalancesQueryMutationKey() {
  return ['gw', '/gw/api/v1/balances/query', 'POST'] as const
}

export function getPostGwApiV1BalancesQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.balances.query.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.gw.api.v1.balances.query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1BalancesQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.gw.api.v1.balances.query.$post>) {
      return parseResponse(client.gw.api.v1.balances.query.$post(args, options))
    },
  })
}

export function usePostGwApiV1BalancesQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.balances.query.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.gw.api.v1.balances.query.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1BalancesQueryMutationOptions<TError, TOnMutateResult>(
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

export function getPostGwApiV1BankInstructionsMutationKey() {
  return ['gw', '/gw/api/v1/bank-instructions', 'POST'] as const
}

export function getPostGwApiV1BankInstructionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['bank-instructions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gw.api.v1)['bank-instructions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1BankInstructionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gw.api.v1)['bank-instructions']['$post']>,
    ) {
      return parseResponse(client.gw.api.v1['bank-instructions'].$post(args, options))
    },
  })
}

export function usePostGwApiV1BankInstructions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1)['bank-instructions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gw.api.v1)['bank-instructions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1BankInstructionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostGwApiV1BankInstructionsQueryMutationKey() {
  return ['gw', '/gw/api/v1/bank-instructions/query', 'POST'] as const
}

export function getPostGwApiV1BankInstructionsQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['bank-instructions']['query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gw.api.v1)['bank-instructions']['query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1BankInstructionsQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gw.api.v1)['bank-instructions']['query']['$post']>,
    ) {
      return parseResponse(client.gw.api.v1['bank-instructions'].query.$post(args, options))
    },
  })
}

export function usePostGwApiV1BankInstructionsQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1)['bank-instructions']['query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gw.api.v1)['bank-instructions']['query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1BankInstructionsQueryMutationOptions<
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

export function getPostGwApiV1BankInstructionsBulkMutationKey() {
  return ['gw', '/gw/api/v1/bank-instructions:bulk', 'POST'] as const
}

export function getPostGwApiV1BankInstructionsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['bank-instructions:bulk']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gw.api.v1)['bank-instructions:bulk']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1BankInstructionsBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gw.api.v1)['bank-instructions:bulk']['$post']>,
    ) {
      return parseResponse(client.gw.api.v1['bank-instructions:bulk'].$post(args, options))
    },
  })
}

export function usePostGwApiV1BankInstructionsBulk<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1)['bank-instructions:bulk']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gw.api.v1)['bank-instructions:bulk']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1BankInstructionsBulkMutationOptions<
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

export function getPostGwApiV1EchoSignedJwtMutationKey() {
  return ['gw', '/gw/api/v1/echo/signed-jwt', 'POST'] as const
}

export function getPostGwApiV1EchoSignedJwtMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1.echo)['signed-jwt']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gw.api.v1.echo)['signed-jwt']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1EchoSignedJwtMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gw.api.v1.echo)['signed-jwt']['$post']>,
    ) {
      return parseResponse(client.gw.api.v1.echo['signed-jwt'].$post(args, options))
    },
  })
}

export function usePostGwApiV1EchoSignedJwt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1.echo)['signed-jwt']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gw.api.v1.echo)['signed-jwt']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1EchoSignedJwtMutationOptions<TError, TOnMutateResult>(
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

export function getPostGwApiV1ExternalAssetTransfersMutationKey() {
  return ['gw', '/gw/api/v1/external-asset-transfers', 'POST'] as const
}

export function getPostGwApiV1ExternalAssetTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['external-asset-transfers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gw.api.v1)['external-asset-transfers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1ExternalAssetTransfersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gw.api.v1)['external-asset-transfers']['$post']>,
    ) {
      return parseResponse(client.gw.api.v1['external-asset-transfers'].$post(args, options))
    },
  })
}

export function usePostGwApiV1ExternalAssetTransfers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1)['external-asset-transfers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gw.api.v1)['external-asset-transfers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1ExternalAssetTransfersMutationOptions<
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

export function getPostGwApiV1ExternalAssetTransfersBulkMutationKey() {
  return ['gw', '/gw/api/v1/external-asset-transfers:bulk', 'POST'] as const
}

export function getPostGwApiV1ExternalAssetTransfersBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['external-asset-transfers:bulk']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gw.api.v1)['external-asset-transfers:bulk']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1ExternalAssetTransfersBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gw.api.v1)['external-asset-transfers:bulk']['$post']>,
    ) {
      return parseResponse(client.gw.api.v1['external-asset-transfers:bulk'].$post(args, options))
    },
  })
}

export function usePostGwApiV1ExternalAssetTransfersBulk<
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
                ReturnType<(typeof client.gw.api.v1)['external-asset-transfers:bulk']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gw.api.v1)['external-asset-transfers:bulk']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1ExternalAssetTransfersBulkMutationOptions<
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

export function getPostGwApiV1ExternalCashTransfersMutationKey() {
  return ['gw', '/gw/api/v1/external-cash-transfers', 'POST'] as const
}

export function getPostGwApiV1ExternalCashTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['external-cash-transfers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gw.api.v1)['external-cash-transfers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1ExternalCashTransfersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gw.api.v1)['external-cash-transfers']['$post']>,
    ) {
      return parseResponse(client.gw.api.v1['external-cash-transfers'].$post(args, options))
    },
  })
}

export function usePostGwApiV1ExternalCashTransfers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1)['external-cash-transfers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gw.api.v1)['external-cash-transfers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1ExternalCashTransfersMutationOptions<
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

export function getPostGwApiV1ExternalCashTransfersQueryMutationKey() {
  return ['gw', '/gw/api/v1/external-cash-transfers/query', 'POST'] as const
}

export function getPostGwApiV1ExternalCashTransfersQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gw.api.v1)['external-cash-transfers']['query']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gw.api.v1)['external-cash-transfers']['query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1ExternalCashTransfersQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gw.api.v1)['external-cash-transfers']['query']['$post']
      >,
    ) {
      return parseResponse(client.gw.api.v1['external-cash-transfers'].query.$post(args, options))
    },
  })
}

export function usePostGwApiV1ExternalCashTransfersQuery<
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
                ReturnType<(typeof client.gw.api.v1)['external-cash-transfers']['query']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gw.api.v1)['external-cash-transfers']['query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1ExternalCashTransfersQueryMutationOptions<
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

export function getPostGwApiV1ExternalCashTransfersBulkMutationKey() {
  return ['gw', '/gw/api/v1/external-cash-transfers:bulk', 'POST'] as const
}

export function getPostGwApiV1ExternalCashTransfersBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['external-cash-transfers:bulk']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gw.api.v1)['external-cash-transfers:bulk']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1ExternalCashTransfersBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gw.api.v1)['external-cash-transfers:bulk']['$post']>,
    ) {
      return parseResponse(client.gw.api.v1['external-cash-transfers:bulk'].$post(args, options))
    },
  })
}

export function usePostGwApiV1ExternalCashTransfersBulk<
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
                ReturnType<(typeof client.gw.api.v1)['external-cash-transfers:bulk']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gw.api.v1)['external-cash-transfers:bulk']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1ExternalCashTransfersBulkMutationOptions<
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

export function getPostGwApiV1InstructionsCancelMutationKey() {
  return ['gw', '/gw/api/v1/instructions/cancel', 'POST'] as const
}

export function getPostGwApiV1InstructionsCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.instructions.cancel.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.gw.api.v1.instructions.cancel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1InstructionsCancelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.gw.api.v1.instructions.cancel.$post>) {
      return parseResponse(client.gw.api.v1.instructions.cancel.$post(args, options))
    },
  })
}

export function usePostGwApiV1InstructionsCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.gw.api.v1.instructions.cancel.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.gw.api.v1.instructions.cancel.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1InstructionsCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostGwApiV1InstructionsCancelBulkMutationKey() {
  return ['gw', '/gw/api/v1/instructions/cancel:bulk', 'POST'] as const
}

export function getPostGwApiV1InstructionsCancelBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1.instructions)['cancel:bulk']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gw.api.v1.instructions)['cancel:bulk']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1InstructionsCancelBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gw.api.v1.instructions)['cancel:bulk']['$post']>,
    ) {
      return parseResponse(client.gw.api.v1.instructions['cancel:bulk'].$post(args, options))
    },
  })
}

export function usePostGwApiV1InstructionsCancelBulk<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1.instructions)['cancel:bulk']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gw.api.v1.instructions)['cancel:bulk']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1InstructionsCancelBulkMutationOptions<
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

export function getPostGwApiV1InstructionsQueryMutationKey() {
  return ['gw', '/gw/api/v1/instructions/query', 'POST'] as const
}

export function getPostGwApiV1InstructionsQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.instructions.query.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.gw.api.v1.instructions.query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1InstructionsQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.gw.api.v1.instructions.query.$post>) {
      return parseResponse(client.gw.api.v1.instructions.query.$post(args, options))
    },
  })
}

export function usePostGwApiV1InstructionsQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.gw.api.v1.instructions.query.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.gw.api.v1.instructions.query.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1InstructionsQueryMutationOptions<TError, TOnMutateResult>(
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

export function getPostGwApiV1InternalAssetTransfersMutationKey() {
  return ['gw', '/gw/api/v1/internal-asset-transfers', 'POST'] as const
}

export function getPostGwApiV1InternalAssetTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['internal-asset-transfers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gw.api.v1)['internal-asset-transfers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1InternalAssetTransfersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gw.api.v1)['internal-asset-transfers']['$post']>,
    ) {
      return parseResponse(client.gw.api.v1['internal-asset-transfers'].$post(args, options))
    },
  })
}

export function usePostGwApiV1InternalAssetTransfers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1)['internal-asset-transfers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gw.api.v1)['internal-asset-transfers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1InternalAssetTransfersMutationOptions<
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

export function getPostGwApiV1InternalAssetTransfersBulkMutationKey() {
  return ['gw', '/gw/api/v1/internal-asset-transfers:bulk', 'POST'] as const
}

export function getPostGwApiV1InternalAssetTransfersBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['internal-asset-transfers:bulk']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gw.api.v1)['internal-asset-transfers:bulk']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1InternalAssetTransfersBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gw.api.v1)['internal-asset-transfers:bulk']['$post']>,
    ) {
      return parseResponse(client.gw.api.v1['internal-asset-transfers:bulk'].$post(args, options))
    },
  })
}

export function usePostGwApiV1InternalAssetTransfersBulk<
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
                ReturnType<(typeof client.gw.api.v1)['internal-asset-transfers:bulk']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gw.api.v1)['internal-asset-transfers:bulk']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1InternalAssetTransfersBulkMutationOptions<
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

export function getPostGwApiV1InternalCashTransfersMutationKey() {
  return ['gw', '/gw/api/v1/internal-cash-transfers', 'POST'] as const
}

export function getPostGwApiV1InternalCashTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['internal-cash-transfers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gw.api.v1)['internal-cash-transfers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1InternalCashTransfersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gw.api.v1)['internal-cash-transfers']['$post']>,
    ) {
      return parseResponse(client.gw.api.v1['internal-cash-transfers'].$post(args, options))
    },
  })
}

export function usePostGwApiV1InternalCashTransfers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1)['internal-cash-transfers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gw.api.v1)['internal-cash-transfers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1InternalCashTransfersMutationOptions<
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

export function getPostGwApiV1InternalCashTransfersBulkMutationKey() {
  return ['gw', '/gw/api/v1/internal-cash-transfers:bulk', 'POST'] as const
}

export function getPostGwApiV1InternalCashTransfersBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['internal-cash-transfers:bulk']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gw.api.v1)['internal-cash-transfers:bulk']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1InternalCashTransfersBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gw.api.v1)['internal-cash-transfers:bulk']['$post']>,
    ) {
      return parseResponse(client.gw.api.v1['internal-cash-transfers:bulk'].$post(args, options))
    },
  })
}

export function usePostGwApiV1InternalCashTransfersBulk<
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
                ReturnType<(typeof client.gw.api.v1)['internal-cash-transfers:bulk']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gw.api.v1)['internal-cash-transfers:bulk']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1InternalCashTransfersBulkMutationOptions<
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

export function getPostGwApiV1RestrictionsMutationKey() {
  return ['gw', '/gw/api/v1/restrictions', 'POST'] as const
}

export function getPostGwApiV1RestrictionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.gw.api.v1.restrictions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1RestrictionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.gw.api.v1.restrictions.$post>) {
      return parseResponse(client.gw.api.v1.restrictions.$post(args, options))
    },
  })
}

export function usePostGwApiV1Restrictions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.gw.api.v1.restrictions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1RestrictionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostGwApiV1RestrictionsVerifyMutationKey() {
  return ['gw', '/gw/api/v1/restrictions/verify', 'POST'] as const
}

export function getPostGwApiV1RestrictionsVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.verify.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.gw.api.v1.restrictions.verify.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1RestrictionsVerifyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.gw.api.v1.restrictions.verify.$post>) {
      return parseResponse(client.gw.api.v1.restrictions.verify.$post(args, options))
    },
  })
}

export function usePostGwApiV1RestrictionsVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.gw.api.v1.restrictions.verify.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.gw.api.v1.restrictions.verify.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1RestrictionsVerifyMutationOptions<TError, TOnMutateResult>(
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

export function getPostGwApiV1SsoBrowserSessionsMutationKey() {
  return ['gw', '/gw/api/v1/sso-browser-sessions', 'POST'] as const
}

export function getPostGwApiV1SsoBrowserSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['sso-browser-sessions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gw.api.v1)['sso-browser-sessions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1SsoBrowserSessionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gw.api.v1)['sso-browser-sessions']['$post']>,
    ) {
      return parseResponse(client.gw.api.v1['sso-browser-sessions'].$post(args, options))
    },
  })
}

export function usePostGwApiV1SsoBrowserSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1)['sso-browser-sessions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gw.api.v1)['sso-browser-sessions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1SsoBrowserSessionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostGwApiV1SsoSessionsMutationKey() {
  return ['gw', '/gw/api/v1/sso-sessions', 'POST'] as const
}

export function getPostGwApiV1SsoSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['sso-sessions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gw.api.v1)['sso-sessions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1SsoSessionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.gw.api.v1)['sso-sessions']['$post']>) {
      return parseResponse(client.gw.api.v1['sso-sessions'].$post(args, options))
    },
  })
}

export function usePostGwApiV1SsoSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1)['sso-sessions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gw.api.v1)['sso-sessions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1SsoSessionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostGwApiV1StatementsMutationKey() {
  return ['gw', '/gw/api/v1/statements', 'POST'] as const
}

export function getPostGwApiV1StatementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.statements.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.gw.api.v1.statements.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1StatementsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.gw.api.v1.statements.$post>) {
      return parseResponse(client.gw.api.v1.statements.$post(args, options))
    },
  })
}

export function usePostGwApiV1Statements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.statements.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.gw.api.v1.statements.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1StatementsMutationOptions<TError, TOnMutateResult>(
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

export function getPostGwApiV1TaxDocumentsMutationKey() {
  return ['gw', '/gw/api/v1/tax-documents', 'POST'] as const
}

export function getPostGwApiV1TaxDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['tax-documents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gw.api.v1)['tax-documents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1TaxDocumentsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.gw.api.v1)['tax-documents']['$post']>) {
      return parseResponse(client.gw.api.v1['tax-documents'].$post(args, options))
    },
  })
}

export function usePostGwApiV1TaxDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1)['tax-documents']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gw.api.v1)['tax-documents']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1TaxDocumentsMutationOptions<TError, TOnMutateResult>(
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

export function getPostGwApiV1TaxVouchersMutationKey() {
  return ['gw', '/gw/api/v1/tax-vouchers', 'POST'] as const
}

export function getPostGwApiV1TaxVouchersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1TaxVouchersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['$post']>) {
      return parseResponse(client.gw.api.v1['tax-vouchers'].$post(args, options))
    },
  })
}

export function usePostGwApiV1TaxVouchers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1TaxVouchersMutationOptions<TError, TOnMutateResult>(
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

export function getPostGwApiV1TradeConfirmationsMutationKey() {
  return ['gw', '/gw/api/v1/trade-confirmations', 'POST'] as const
}

export function getPostGwApiV1TradeConfirmationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['trade-confirmations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gw.api.v1)['trade-confirmations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV1TradeConfirmationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gw.api.v1)['trade-confirmations']['$post']>,
    ) {
      return parseResponse(client.gw.api.v1['trade-confirmations'].$post(args, options))
    },
  })
}

export function usePostGwApiV1TradeConfirmations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1)['trade-confirmations']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gw.api.v1)['trade-confirmations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV1TradeConfirmationsMutationOptions<TError, TOnMutateResult>(
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

export function getPostGwApiV2ExternalAssetTransfersMutationKey() {
  return ['gw', '/gw/api/v2/external-asset-transfers', 'POST'] as const
}

export function getPostGwApiV2ExternalAssetTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v2)['external-asset-transfers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gw.api.v2)['external-asset-transfers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV2ExternalAssetTransfersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gw.api.v2)['external-asset-transfers']['$post']>,
    ) {
      return parseResponse(client.gw.api.v2['external-asset-transfers'].$post(args, options))
    },
  })
}

export function usePostGwApiV2ExternalAssetTransfers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v2)['external-asset-transfers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gw.api.v2)['external-asset-transfers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV2ExternalAssetTransfersMutationOptions<
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

export function getPostGwApiV2ExternalAssetTransfersBulkMutationKey() {
  return ['gw', '/gw/api/v2/external-asset-transfers:bulk', 'POST'] as const
}

export function getPostGwApiV2ExternalAssetTransfersBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v2)['external-asset-transfers:bulk']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gw.api.v2)['external-asset-transfers:bulk']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGwApiV2ExternalAssetTransfersBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gw.api.v2)['external-asset-transfers:bulk']['$post']>,
    ) {
      return parseResponse(client.gw.api.v2['external-asset-transfers:bulk'].$post(args, options))
    },
  })
}

export function usePostGwApiV2ExternalAssetTransfersBulk<
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
                ReturnType<(typeof client.gw.api.v2)['external-asset-transfers:bulk']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gw.api.v2)['external-asset-transfers:bulk']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGwApiV2ExternalAssetTransfersBulkMutationOptions<
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

export function getPostOauth2ApiV1TokenMutationKey() {
  return ['oauth2', '/oauth2/api/v1/token', 'POST'] as const
}

export function getPostOauth2ApiV1TokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.api.v1.token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth2.api.v1.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth2ApiV1TokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth2.api.v1.token.$post>) {
      return parseResponse(client.oauth2.api.v1.token.$post(args, options))
    },
  })
}

export function usePostOauth2ApiV1Token<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.api.v1.token.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.oauth2.api.v1.token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauth2ApiV1TokenMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ApiFaFaPresetGetMutationKey() {
  return ['v1', '/v1/api/fa/fa-preset/get', 'POST'] as const
}

export function getPostV1ApiFaFaPresetGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fa)['fa-preset']['get']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.api.fa)['fa-preset']['get']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiFaFaPresetGetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.api.fa)['fa-preset']['get']['$post']>,
    ) {
      return parseResponse(client.v1.api.fa['fa-preset'].get.$post(args, options))
    },
  })
}

export function usePostV1ApiFaFaPresetGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.fa)['fa-preset']['get']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.api.fa)['fa-preset']['get']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiFaFaPresetGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ApiFaFaPresetSaveMutationKey() {
  return ['v1', '/v1/api/fa/fa-preset/save', 'POST'] as const
}

export function getPostV1ApiFaFaPresetSaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fa)['fa-preset']['save']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.api.fa)['fa-preset']['save']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiFaFaPresetSaveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.api.fa)['fa-preset']['save']['$post']>,
    ) {
      return parseResponse(client.v1.api.fa['fa-preset'].save.$post(args, options))
    },
  })
}

export function usePostV1ApiFaFaPresetSave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.fa)['fa-preset']['save']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.api.fa)['fa-preset']['save']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiFaFaPresetSaveMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ApiFaIsFullMasterMutationKey() {
  return ['v1', '/v1/api/fa/is-full-master', 'POST'] as const
}

export function getPostV1ApiFaIsFullMasterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fa)['is-full-master']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.api.fa)['is-full-master']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiFaIsFullMasterMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.api.fa)['is-full-master']['$post']>) {
      return parseResponse(client.v1.api.fa['is-full-master'].$post(args, options))
    },
  })
}

export function usePostV1ApiFaIsFullMaster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.fa)['is-full-master']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.api.fa)['is-full-master']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiFaIsFullMasterMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ApiFaModelAccountsDetailsMutationKey() {
  return ['v1', '/v1/api/fa/model/accounts-details', 'POST'] as const
}

export function getPostV1ApiFaModelAccountsDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fa.model)['accounts-details']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.api.fa.model)['accounts-details']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiFaModelAccountsDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.api.fa.model)['accounts-details']['$post']>,
    ) {
      return parseResponse(client.v1.api.fa.model['accounts-details'].$post(args, options))
    },
  })
}

export function usePostV1ApiFaModelAccountsDetails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.fa.model)['accounts-details']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.api.fa.model)['accounts-details']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiFaModelAccountsDetailsMutationOptions<
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

export function getPostV1ApiFaModelCashAnalyzerMutationKey() {
  return ['v1', '/v1/api/fa/model/cash-analyzer', 'POST'] as const
}

export function getPostV1ApiFaModelCashAnalyzerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fa.model)['cash-analyzer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.api.fa.model)['cash-analyzer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiFaModelCashAnalyzerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.api.fa.model)['cash-analyzer']['$post']>,
    ) {
      return parseResponse(client.v1.api.fa.model['cash-analyzer'].$post(args, options))
    },
  })
}

export function usePostV1ApiFaModelCashAnalyzer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.fa.model)['cash-analyzer']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.api.fa.model)['cash-analyzer']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiFaModelCashAnalyzerMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ApiFaModelInvestDivestMutationKey() {
  return ['v1', '/v1/api/fa/model/invest-divest', 'POST'] as const
}

export function getPostV1ApiFaModelInvestDivestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fa.model)['invest-divest']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.api.fa.model)['invest-divest']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiFaModelInvestDivestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.api.fa.model)['invest-divest']['$post']>,
    ) {
      return parseResponse(client.v1.api.fa.model['invest-divest'].$post(args, options))
    },
  })
}

export function usePostV1ApiFaModelInvestDivest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.fa.model)['invest-divest']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.api.fa.model)['invest-divest']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiFaModelInvestDivestMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ApiFaModelInvestDivestPositionsMutationKey() {
  return ['v1', '/v1/api/fa/model/invest-divest-positions', 'POST'] as const
}

export function getPostV1ApiFaModelInvestDivestPositionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fa.model)['invest-divest-positions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.api.fa.model)['invest-divest-positions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiFaModelInvestDivestPositionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.api.fa.model)['invest-divest-positions']['$post']>,
    ) {
      return parseResponse(client.v1.api.fa.model['invest-divest-positions'].$post(args, options))
    },
  })
}

export function usePostV1ApiFaModelInvestDivestPositions<
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
                ReturnType<(typeof client.v1.api.fa.model)['invest-divest-positions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.api.fa.model)['invest-divest-positions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiFaModelInvestDivestPositionsMutationOptions<
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

export function getPostV1ApiFaModelListMutationKey() {
  return ['v1', '/v1/api/fa/model/list', 'POST'] as const
}

export function getPostV1ApiFaModelListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fa.model.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.fa.model.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiFaModelListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.api.fa.model.list.$post>) {
      return parseResponse(client.v1.api.fa.model.list.$post(args, options))
    },
  })
}

export function usePostV1ApiFaModelList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fa.model.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.fa.model.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiFaModelListMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ApiFaModelPositionsMutationKey() {
  return ['v1', '/v1/api/fa/model/positions', 'POST'] as const
}

export function getPostV1ApiFaModelPositionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fa.model.positions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.fa.model.positions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiFaModelPositionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.api.fa.model.positions.$post>) {
      return parseResponse(client.v1.api.fa.model.positions.$post(args, options))
    },
  })
}

export function usePostV1ApiFaModelPositions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fa.model.positions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.fa.model.positions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiFaModelPositionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ApiFaModelRebalanceToExistingTargetsMutationKey() {
  return ['v1', '/v1/api/fa/model/rebalance/to-existing-targets', 'POST'] as const
}

export function getPostV1ApiFaModelRebalanceToExistingTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.api.fa.model.rebalance)['to-existing-targets']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.api.fa.model.rebalance)['to-existing-targets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiFaModelRebalanceToExistingTargetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.api.fa.model.rebalance)['to-existing-targets']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.api.fa.model.rebalance['to-existing-targets'].$post(args, options),
      )
    },
  })
}

export function usePostV1ApiFaModelRebalanceToExistingTargets<
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
                  (typeof client.v1.api.fa.model.rebalance)['to-existing-targets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.api.fa.model.rebalance)['to-existing-targets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiFaModelRebalanceToExistingTargetsMutationOptions<
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

export function getPostV1ApiFaModelRebalanceToNewTargetsMutationKey() {
  return ['v1', '/v1/api/fa/model/rebalance/to-new-targets', 'POST'] as const
}

export function getPostV1ApiFaModelRebalanceToNewTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fa.model.rebalance)['to-new-targets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.api.fa.model.rebalance)['to-new-targets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiFaModelRebalanceToNewTargetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.api.fa.model.rebalance)['to-new-targets']['$post']>,
    ) {
      return parseResponse(client.v1.api.fa.model.rebalance['to-new-targets'].$post(args, options))
    },
  })
}

export function usePostV1ApiFaModelRebalanceToNewTargets<
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
                ReturnType<(typeof client.v1.api.fa.model.rebalance)['to-new-targets']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.api.fa.model.rebalance)['to-new-targets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiFaModelRebalanceToNewTargetsMutationOptions<
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

export function getPostV1ApiFaModelRebalanceToSpecificTargetsMutationKey() {
  return ['v1', '/v1/api/fa/model/rebalance/to-specific-targets', 'POST'] as const
}

export function getPostV1ApiFaModelRebalanceToSpecificTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.api.fa.model.rebalance)['to-specific-targets']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.api.fa.model.rebalance)['to-specific-targets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiFaModelRebalanceToSpecificTargetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.api.fa.model.rebalance)['to-specific-targets']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.api.fa.model.rebalance['to-specific-targets'].$post(args, options),
      )
    },
  })
}

export function usePostV1ApiFaModelRebalanceToSpecificTargets<
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
                  (typeof client.v1.api.fa.model.rebalance)['to-specific-targets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.api.fa.model.rebalance)['to-specific-targets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiFaModelRebalanceToSpecificTargetsMutationOptions<
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

export function getPostV1ApiFaModelSaveMutationKey() {
  return ['v1', '/v1/api/fa/model/save', 'POST'] as const
}

export function getPostV1ApiFaModelSaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fa.model.save.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.fa.model.save.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiFaModelSaveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.api.fa.model.save.$post>) {
      return parseResponse(client.v1.api.fa.model.save.$post(args, options))
    },
  })
}

export function usePostV1ApiFaModelSave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fa.model.save.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.fa.model.save.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiFaModelSaveMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ApiFaModelSubmitTransfersMutationKey() {
  return ['v1', '/v1/api/fa/model/submit-transfers', 'POST'] as const
}

export function getPostV1ApiFaModelSubmitTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fa.model)['submit-transfers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.api.fa.model)['submit-transfers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiFaModelSubmitTransfersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.api.fa.model)['submit-transfers']['$post']>,
    ) {
      return parseResponse(client.v1.api.fa.model['submit-transfers'].$post(args, options))
    },
  })
}

export function usePostV1ApiFaModelSubmitTransfers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.fa.model)['submit-transfers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.api.fa.model)['submit-transfers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiFaModelSubmitTransfersMutationOptions<
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

export function getPostV1ApiFaModelSummaryMutationKey() {
  return ['v1', '/v1/api/fa/model/summary', 'POST'] as const
}

export function getPostV1ApiFaModelSummaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fa.model.summary.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.fa.model.summary.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiFaModelSummaryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.api.fa.model.summary.$post>) {
      return parseResponse(client.v1.api.fa.model.summary.$post(args, options))
    },
  })
}

export function usePostV1ApiFaModelSummary<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fa.model.summary.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.fa.model.summary.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiFaModelSummaryMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ApiFaModelTwsInvestDivestMutationKey() {
  return ['v1', '/v1/api/fa/model/tws-invest-divest', 'POST'] as const
}

export function getPostV1ApiFaModelTwsInvestDivestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fa.model)['tws-invest-divest']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.api.fa.model)['tws-invest-divest']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiFaModelTwsInvestDivestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.api.fa.model)['tws-invest-divest']['$post']>,
    ) {
      return parseResponse(client.v1.api.fa.model['tws-invest-divest'].$post(args, options))
    },
  })
}

export function usePostV1ApiFaModelTwsInvestDivest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.fa.model)['tws-invest-divest']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.api.fa.model)['tws-invest-divest']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiFaModelTwsInvestDivestMutationOptions<
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

export function getPostV1ApiFyiDeliveryoptionsDeviceMutationKey() {
  return ['v1', '/v1/api/fyi/deliveryoptions/device', 'POST'] as const
}

export function getPostV1ApiFyiDeliveryoptionsDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.fyi.deliveryoptions.device.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.fyi.deliveryoptions.device.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiFyiDeliveryoptionsDeviceMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.api.fyi.deliveryoptions.device.$post>,
    ) {
      return parseResponse(client.v1.api.fyi.deliveryoptions.device.$post(args, options))
    },
  })
}

export function usePostV1ApiFyiDeliveryoptionsDevice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.fyi.deliveryoptions.device.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.fyi.deliveryoptions.device.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiFyiDeliveryoptionsDeviceMutationOptions<
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

export function getPostV1ApiFyiSettingsTypecodeMutationKey() {
  return ['v1', '/v1/api/fyi/settings/:typecode', 'POST'] as const
}

export function getPostV1ApiFyiSettingsTypecodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fyi.settings)[':typecode']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.api.fyi.settings)[':typecode']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiFyiSettingsTypecodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.api.fyi.settings)[':typecode']['$post']>,
    ) {
      return parseResponse(client.v1.api.fyi.settings[':typecode'].$post(args, options))
    },
  })
}

export function usePostV1ApiFyiSettingsTypecode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.fyi.settings)[':typecode']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.api.fyi.settings)[':typecode']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiFyiSettingsTypecodeMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ApiIserverAccountMutationKey() {
  return ['v1', '/v1/api/iserver/account', 'POST'] as const
}

export function getPostV1ApiIserverAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.account.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.iserver.account.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiIserverAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.api.iserver.account.$post>) {
      return parseResponse(client.v1.api.iserver.account.$post(args, options))
    },
  })
}

export function usePostV1ApiIserverAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.account.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.iserver.account.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiIserverAccountMutationOptions<TError, TOnMutateResult>(
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

export function getV1ApiIserverAccountAllocationGroupQueryKey() {
  return ['v1', '/v1/api/iserver/account/allocation/group'] as const
}

export function getV1ApiIserverAccountAllocationGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.group.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.group.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverAccountAllocationGroupQueryKey>
  >({
    queryKey: getV1ApiIserverAccountAllocationGroupQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.account.allocation.group.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverAccountAllocationGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.group.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.group.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountAllocationGroupQueryKey>
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
      ...getV1ApiIserverAccountAllocationGroupQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverAccountAllocationGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.group.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.group.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountAllocationGroupQueryKey>
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
      ...getV1ApiIserverAccountAllocationGroupQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1ApiIserverAccountAllocationGroupMutationKey() {
  return ['v1', '/v1/api/iserver/account/allocation/group', 'PUT'] as const
}

export function getPutV1ApiIserverAccountAllocationGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.group.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.iserver.account.allocation.group.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ApiIserverAccountAllocationGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.api.iserver.account.allocation.group.$put>,
    ) {
      return parseResponse(client.v1.api.iserver.account.allocation.group.$put(args, options))
    },
  })
}

export function usePutV1ApiIserverAccountAllocationGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.group.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.iserver.account.allocation.group.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ApiIserverAccountAllocationGroupMutationOptions<
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

export function getPostV1ApiIserverAccountAllocationGroupMutationKey() {
  return ['v1', '/v1/api/iserver/account/allocation/group', 'POST'] as const
}

export function getPostV1ApiIserverAccountAllocationGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.group.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.iserver.account.allocation.group.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiIserverAccountAllocationGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.api.iserver.account.allocation.group.$post>,
    ) {
      return parseResponse(client.v1.api.iserver.account.allocation.group.$post(args, options))
    },
  })
}

export function usePostV1ApiIserverAccountAllocationGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.group.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.iserver.account.allocation.group.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiIserverAccountAllocationGroupMutationOptions<
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

export function getPostV1ApiIserverAccountAllocationGroupDeleteMutationKey() {
  return ['v1', '/v1/api/iserver/account/allocation/group/delete', 'POST'] as const
}

export function getPostV1ApiIserverAccountAllocationGroupDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.group.delete.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.iserver.account.allocation.group.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiIserverAccountAllocationGroupDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.api.iserver.account.allocation.group.delete.$post>,
    ) {
      return parseResponse(
        client.v1.api.iserver.account.allocation.group.delete.$post(args, options),
      )
    },
  })
}

export function usePostV1ApiIserverAccountAllocationGroupDelete<
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
                ReturnType<typeof client.v1.api.iserver.account.allocation.group.delete.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.iserver.account.allocation.group.delete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiIserverAccountAllocationGroupDeleteMutationOptions<
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

export function getPostV1ApiIserverAccountAllocationGroupSingleMutationKey() {
  return ['v1', '/v1/api/iserver/account/allocation/group/single', 'POST'] as const
}

export function getPostV1ApiIserverAccountAllocationGroupSingleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.group.single.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.iserver.account.allocation.group.single.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiIserverAccountAllocationGroupSingleMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.api.iserver.account.allocation.group.single.$post>,
    ) {
      return parseResponse(
        client.v1.api.iserver.account.allocation.group.single.$post(args, options),
      )
    },
  })
}

export function usePostV1ApiIserverAccountAllocationGroupSingle<
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
                ReturnType<typeof client.v1.api.iserver.account.allocation.group.single.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.iserver.account.allocation.group.single.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiIserverAccountAllocationGroupSingleMutationOptions<
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

export function getV1ApiIserverAccountAllocationPresetsQueryKey() {
  return ['v1', '/v1/api/iserver/account/allocation/presets'] as const
}

export function getV1ApiIserverAccountAllocationPresetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.presets.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.presets.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverAccountAllocationPresetsQueryKey>
  >({
    queryKey: getV1ApiIserverAccountAllocationPresetsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.account.allocation.presets.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverAccountAllocationPresets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.presets.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.presets.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountAllocationPresetsQueryKey>
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
      ...getV1ApiIserverAccountAllocationPresetsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverAccountAllocationPresets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.presets.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.presets.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountAllocationPresetsQueryKey>
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
      ...getV1ApiIserverAccountAllocationPresetsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ApiIserverAccountAllocationPresetsMutationKey() {
  return ['v1', '/v1/api/iserver/account/allocation/presets', 'POST'] as const
}

export function getPostV1ApiIserverAccountAllocationPresetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.presets.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.iserver.account.allocation.presets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiIserverAccountAllocationPresetsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.api.iserver.account.allocation.presets.$post>,
    ) {
      return parseResponse(client.v1.api.iserver.account.allocation.presets.$post(args, options))
    },
  })
}

export function usePostV1ApiIserverAccountAllocationPresets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.presets.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.iserver.account.allocation.presets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiIserverAccountAllocationPresetsMutationOptions<
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

export function getPostV1ApiIserverAccountAccountIdAlertMutationKey() {
  return ['v1', '/v1/api/iserver/account/:accountId/alert', 'POST'] as const
}

export function getPostV1ApiIserverAccountAccountIdAlertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.api.iserver.account)[':accountId']['alert']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.api.iserver.account)[':accountId']['alert']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiIserverAccountAccountIdAlertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.api.iserver.account)[':accountId']['alert']['$post']
      >,
    ) {
      return parseResponse(client.v1.api.iserver.account[':accountId'].alert.$post(args, options))
    },
  })
}

export function usePostV1ApiIserverAccountAccountIdAlert<
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
                ReturnType<(typeof client.v1.api.iserver.account)[':accountId']['alert']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.api.iserver.account)[':accountId']['alert']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiIserverAccountAccountIdAlertMutationOptions<
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

export function getPostV1ApiIserverAccountAccountIdAlertActivateMutationKey() {
  return ['v1', '/v1/api/iserver/account/:accountId/alert/activate', 'POST'] as const
}

export function getPostV1ApiIserverAccountAccountIdAlertActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.api.iserver.account)[':accountId']['alert']['activate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.api.iserver.account)[':accountId']['alert']['activate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiIserverAccountAccountIdAlertActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.api.iserver.account)[':accountId']['alert']['activate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.api.iserver.account[':accountId'].alert.activate.$post(args, options),
      )
    },
  })
}

export function usePostV1ApiIserverAccountAccountIdAlertActivate<
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
                  (typeof client.v1.api.iserver.account)[':accountId']['alert']['activate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.api.iserver.account)[':accountId']['alert']['activate']['$post']
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
  const mutationDefaults = getPostV1ApiIserverAccountAccountIdAlertActivateMutationOptions<
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

export function getPostV1ApiIserverAccountAccountIdOrderOrderIdMutationKey() {
  return ['v1', '/v1/api/iserver/account/:accountId/order/:orderId', 'POST'] as const
}

export function getPostV1ApiIserverAccountAccountIdOrderOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.api.iserver.account)[':accountId']['order'][':orderId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.api.iserver.account)[':accountId']['order'][':orderId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiIserverAccountAccountIdOrderOrderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.api.iserver.account)[':accountId']['order'][':orderId']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.api.iserver.account[':accountId'].order[':orderId'].$post(args, options),
      )
    },
  })
}

export function usePostV1ApiIserverAccountAccountIdOrderOrderId<
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
                  (typeof client.v1.api.iserver.account)[':accountId']['order'][':orderId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.api.iserver.account)[':accountId']['order'][':orderId']['$post']
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
  const mutationDefaults = getPostV1ApiIserverAccountAccountIdOrderOrderIdMutationOptions<
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

export function getDeleteV1ApiIserverAccountAccountIdOrderOrderIdMutationKey() {
  return ['v1', '/v1/api/iserver/account/:accountId/order/:orderId', 'DELETE'] as const
}

export function getDeleteV1ApiIserverAccountAccountIdOrderOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.api.iserver.account)[':accountId']['order'][':orderId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.api.iserver.account)[':accountId']['order'][':orderId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ApiIserverAccountAccountIdOrderOrderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.api.iserver.account)[':accountId']['order'][':orderId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.api.iserver.account[':accountId'].order[':orderId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ApiIserverAccountAccountIdOrderOrderId<
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
                  (typeof client.v1.api.iserver.account)[':accountId']['order'][':orderId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.api.iserver.account)[':accountId']['order'][':orderId']['$delete']
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
  const mutationDefaults = getDeleteV1ApiIserverAccountAccountIdOrderOrderIdMutationOptions<
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

export function getPostV1ApiIserverAccountAccountIdOrdersMutationKey() {
  return ['v1', '/v1/api/iserver/account/:accountId/orders', 'POST'] as const
}

export function getPostV1ApiIserverAccountAccountIdOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.api.iserver.account)[':accountId']['orders']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.api.iserver.account)[':accountId']['orders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiIserverAccountAccountIdOrdersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.api.iserver.account)[':accountId']['orders']['$post']
      >,
    ) {
      return parseResponse(client.v1.api.iserver.account[':accountId'].orders.$post(args, options))
    },
  })
}

export function usePostV1ApiIserverAccountAccountIdOrders<
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
                ReturnType<(typeof client.v1.api.iserver.account)[':accountId']['orders']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.api.iserver.account)[':accountId']['orders']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiIserverAccountAccountIdOrdersMutationOptions<
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

export function getPostV1ApiIserverAccountAccountIdOrdersWhatifMutationKey() {
  return ['v1', '/v1/api/iserver/account/:accountId/orders/whatif', 'POST'] as const
}

export function getPostV1ApiIserverAccountAccountIdOrdersWhatifMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.api.iserver.account)[':accountId']['orders']['whatif']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.api.iserver.account)[':accountId']['orders']['whatif']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiIserverAccountAccountIdOrdersWhatifMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.api.iserver.account)[':accountId']['orders']['whatif']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.api.iserver.account[':accountId'].orders.whatif.$post(args, options),
      )
    },
  })
}

export function usePostV1ApiIserverAccountAccountIdOrdersWhatif<
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
                  (typeof client.v1.api.iserver.account)[':accountId']['orders']['whatif']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.api.iserver.account)[':accountId']['orders']['whatif']['$post']
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
  const mutationDefaults = getPostV1ApiIserverAccountAccountIdOrdersWhatifMutationOptions<
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

export function getPostV1ApiIserverAccountModelCodeOrdersMutationKey() {
  return ['v1', '/v1/api/iserver/account/:modelCode/orders', 'POST'] as const
}

export function getPostV1ApiIserverAccountModelCodeOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.api.iserver.account)[':modelCode']['orders']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.api.iserver.account)[':modelCode']['orders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiIserverAccountModelCodeOrdersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.api.iserver.account)[':modelCode']['orders']['$post']
      >,
    ) {
      return parseResponse(client.v1.api.iserver.account[':modelCode'].orders.$post(args, options))
    },
  })
}

export function usePostV1ApiIserverAccountModelCodeOrders<
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
                ReturnType<(typeof client.v1.api.iserver.account)[':modelCode']['orders']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.api.iserver.account)[':modelCode']['orders']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiIserverAccountModelCodeOrdersMutationOptions<
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

export function getPostV1ApiIserverAuthSsodhInitMutationKey() {
  return ['v1', '/v1/api/iserver/auth/ssodh/init', 'POST'] as const
}

export function getPostV1ApiIserverAuthSsodhInitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.auth.ssodh.init.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.iserver.auth.ssodh.init.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiIserverAuthSsodhInitMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.api.iserver.auth.ssodh.init.$post>) {
      return parseResponse(client.v1.api.iserver.auth.ssodh.init.$post(args, options))
    },
  })
}

export function usePostV1ApiIserverAuthSsodhInit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.auth.ssodh.init.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.iserver.auth.ssodh.init.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiIserverAuthSsodhInitMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ApiIserverAuthStatusMutationKey() {
  return ['v1', '/v1/api/iserver/auth/status', 'POST'] as const
}

export function getPostV1ApiIserverAuthStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.auth.status.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiIserverAuthStatusMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.api.iserver.auth.status.$post(undefined, options))
    },
  })
}

export function usePostV1ApiIserverAuthStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.auth.status.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiIserverAuthStatusMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ApiIserverContractRulesMutationKey() {
  return ['v1', '/v1/api/iserver/contract/rules', 'POST'] as const
}

export function getPostV1ApiIserverContractRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.contract.rules.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.iserver.contract.rules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiIserverContractRulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.api.iserver.contract.rules.$post>) {
      return parseResponse(client.v1.api.iserver.contract.rules.$post(args, options))
    },
  })
}

export function usePostV1ApiIserverContractRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.contract.rules.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.iserver.contract.rules.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiIserverContractRulesMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ApiIserverDynaccountMutationKey() {
  return ['v1', '/v1/api/iserver/dynaccount', 'POST'] as const
}

export function getPostV1ApiIserverDynaccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.dynaccount.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.iserver.dynaccount.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiIserverDynaccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.api.iserver.dynaccount.$post>) {
      return parseResponse(client.v1.api.iserver.dynaccount.$post(args, options))
    },
  })
}

export function usePostV1ApiIserverDynaccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.dynaccount.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.iserver.dynaccount.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiIserverDynaccountMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ApiIserverMarketdataUnsubscribeMutationKey() {
  return ['v1', '/v1/api/iserver/marketdata/unsubscribe', 'POST'] as const
}

export function getPostV1ApiIserverMarketdataUnsubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.unsubscribe.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.iserver.marketdata.unsubscribe.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiIserverMarketdataUnsubscribeMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.api.iserver.marketdata.unsubscribe.$post>,
    ) {
      return parseResponse(client.v1.api.iserver.marketdata.unsubscribe.$post(args, options))
    },
  })
}

export function usePostV1ApiIserverMarketdataUnsubscribe<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.unsubscribe.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.iserver.marketdata.unsubscribe.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiIserverMarketdataUnsubscribeMutationOptions<
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

export function getPostV1ApiIserverNotificationMutationKey() {
  return ['v1', '/v1/api/iserver/notification', 'POST'] as const
}

export function getPostV1ApiIserverNotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.notification.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.iserver.notification.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiIserverNotificationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.api.iserver.notification.$post>) {
      return parseResponse(client.v1.api.iserver.notification.$post(args, options))
    },
  })
}

export function usePostV1ApiIserverNotification<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.notification.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.iserver.notification.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiIserverNotificationMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ApiIserverQuestionsSuppressMutationKey() {
  return ['v1', '/v1/api/iserver/questions/suppress', 'POST'] as const
}

export function getPostV1ApiIserverQuestionsSuppressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.questions.suppress.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.iserver.questions.suppress.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiIserverQuestionsSuppressMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.api.iserver.questions.suppress.$post>,
    ) {
      return parseResponse(client.v1.api.iserver.questions.suppress.$post(args, options))
    },
  })
}

export function usePostV1ApiIserverQuestionsSuppress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.questions.suppress.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.iserver.questions.suppress.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiIserverQuestionsSuppressMutationOptions<
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

export function getPostV1ApiIserverQuestionsSuppressResetMutationKey() {
  return ['v1', '/v1/api/iserver/questions/suppress/reset', 'POST'] as const
}

export function getPostV1ApiIserverQuestionsSuppressResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.questions.suppress.reset.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiIserverQuestionsSuppressResetMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.api.iserver.questions.suppress.reset.$post(undefined, options))
    },
  })
}

export function usePostV1ApiIserverQuestionsSuppressReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.questions.suppress.reset.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiIserverQuestionsSuppressResetMutationOptions<
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

export function getPostV1ApiIserverReplyReplyIdMutationKey() {
  return ['v1', '/v1/api/iserver/reply/:replyId', 'POST'] as const
}

export function getPostV1ApiIserverReplyReplyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.iserver.reply)[':replyId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.api.iserver.reply)[':replyId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiIserverReplyReplyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.api.iserver.reply)[':replyId']['$post']>,
    ) {
      return parseResponse(client.v1.api.iserver.reply[':replyId'].$post(args, options))
    },
  })
}

export function usePostV1ApiIserverReplyReplyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.iserver.reply)[':replyId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.api.iserver.reply)[':replyId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiIserverReplyReplyIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ApiIserverScannerRunMutationKey() {
  return ['v1', '/v1/api/iserver/scanner/run', 'POST'] as const
}

export function getPostV1ApiIserverScannerRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.scanner.run.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.iserver.scanner.run.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiIserverScannerRunMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.api.iserver.scanner.run.$post>) {
      return parseResponse(client.v1.api.iserver.scanner.run.$post(args, options))
    },
  })
}

export function usePostV1ApiIserverScannerRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.scanner.run.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.iserver.scanner.run.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiIserverScannerRunMutationOptions<TError, TOnMutateResult>(
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

export function getV1ApiIserverSecdefSearchQueryKey(
  args: InferRequestType<typeof client.v1.api.iserver.secdef.search.$get>,
) {
  return ['v1', '/v1/api/iserver/secdef/search', args] as const
}

export function getV1ApiIserverSecdefSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.secdef.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.secdef.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.secdef.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverSecdefSearchQueryKey>
  >({
    queryKey: getV1ApiIserverSecdefSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.secdef.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverSecdefSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.secdef.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.secdef.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.secdef.search.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverSecdefSearchQueryKey>
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
      ...getV1ApiIserverSecdefSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverSecdefSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.secdef.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.secdef.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.secdef.search.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverSecdefSearchQueryKey>
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
      ...getV1ApiIserverSecdefSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ApiIserverSecdefSearchMutationKey() {
  return ['v1', '/v1/api/iserver/secdef/search', 'POST'] as const
}

export function getPostV1ApiIserverSecdefSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.secdef.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.iserver.secdef.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiIserverSecdefSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.api.iserver.secdef.search.$post>) {
      return parseResponse(client.v1.api.iserver.secdef.search.$post(args, options))
    },
  })
}

export function usePostV1ApiIserverSecdefSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.secdef.search.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.iserver.secdef.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiIserverSecdefSearchMutationOptions<TError, TOnMutateResult>(
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

export function getV1ApiIserverWatchlistQueryKey(
  args: InferRequestType<typeof client.v1.api.iserver.watchlist.$get>,
) {
  return ['v1', '/v1/api/iserver/watchlist', args] as const
}

export function getV1ApiIserverWatchlistQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.watchlist.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.watchlist.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.watchlist.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverWatchlistQueryKey>
  >({
    queryKey: getV1ApiIserverWatchlistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.watchlist.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverWatchlist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.watchlist.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.watchlist.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.watchlist.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverWatchlistQueryKey>
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
      ...getV1ApiIserverWatchlistQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverWatchlist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.watchlist.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.watchlist.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.watchlist.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverWatchlistQueryKey>
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
      ...getV1ApiIserverWatchlistQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ApiIserverWatchlistMutationKey() {
  return ['v1', '/v1/api/iserver/watchlist', 'POST'] as const
}

export function getPostV1ApiIserverWatchlistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.watchlist.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.iserver.watchlist.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiIserverWatchlistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.api.iserver.watchlist.$post>) {
      return parseResponse(client.v1.api.iserver.watchlist.$post(args, options))
    },
  })
}

export function usePostV1ApiIserverWatchlist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.watchlist.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.iserver.watchlist.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiIserverWatchlistMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1ApiIserverWatchlistMutationKey() {
  return ['v1', '/v1/api/iserver/watchlist', 'DELETE'] as const
}

export function getDeleteV1ApiIserverWatchlistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.watchlist.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.iserver.watchlist.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ApiIserverWatchlistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.api.iserver.watchlist.$delete>) {
      return parseResponse(client.v1.api.iserver.watchlist.$delete(args, options))
    },
  })
}

export function useDeleteV1ApiIserverWatchlist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.watchlist.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.iserver.watchlist.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ApiIserverWatchlistMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ApiLogoutMutationKey() {
  return ['v1', '/v1/api/logout', 'POST'] as const
}

export function getPostV1ApiLogoutMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.logout.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiLogoutMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.api.logout.$post(undefined, options))
    },
  })
}

export function usePostV1ApiLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.logout.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiLogoutMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ApiOauthAccessTokenMutationKey() {
  return ['v1', '/v1/api/oauth/access_token', 'POST'] as const
}

export function getPostV1ApiOauthAccessTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.oauth.access_token.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.oauth.access_token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiOauthAccessTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.api.oauth.access_token.$post>) {
      return parseResponse(client.v1.api.oauth.access_token.$post(args, options))
    },
  })
}

export function usePostV1ApiOauthAccessToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.oauth.access_token.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.oauth.access_token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiOauthAccessTokenMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ApiOauthLiveSessionTokenMutationKey() {
  return ['v1', '/v1/api/oauth/live_session_token', 'POST'] as const
}

export function getPostV1ApiOauthLiveSessionTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.oauth.live_session_token.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.oauth.live_session_token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiOauthLiveSessionTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.api.oauth.live_session_token.$post>) {
      return parseResponse(client.v1.api.oauth.live_session_token.$post(args, options))
    },
  })
}

export function usePostV1ApiOauthLiveSessionToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.oauth.live_session_token.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.oauth.live_session_token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiOauthLiveSessionTokenMutationOptions<
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

export function getPostV1ApiOauthRequestTokenMutationKey() {
  return ['v1', '/v1/api/oauth/request_token', 'POST'] as const
}

export function getPostV1ApiOauthRequestTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.oauth.request_token.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.oauth.request_token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiOauthRequestTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.api.oauth.request_token.$post>) {
      return parseResponse(client.v1.api.oauth.request_token.$post(args, options))
    },
  })
}

export function usePostV1ApiOauthRequestToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.oauth.request_token.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.oauth.request_token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiOauthRequestTokenMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ApiPaAllocationMutationKey() {
  return ['v1', '/v1/api/pa/allocation', 'POST'] as const
}

export function getPostV1ApiPaAllocationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.pa.allocation.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.pa.allocation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiPaAllocationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.api.pa.allocation.$post>) {
      return parseResponse(client.v1.api.pa.allocation.$post(args, options))
    },
  })
}

export function usePostV1ApiPaAllocation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.pa.allocation.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.pa.allocation.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiPaAllocationMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ApiPaAllperiodsMutationKey() {
  return ['v1', '/v1/api/pa/allperiods', 'POST'] as const
}

export function getPostV1ApiPaAllperiodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.pa.allperiods.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.pa.allperiods.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiPaAllperiodsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.api.pa.allperiods.$post>) {
      return parseResponse(client.v1.api.pa.allperiods.$post(args, options))
    },
  })
}

export function usePostV1ApiPaAllperiods<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.pa.allperiods.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.pa.allperiods.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiPaAllperiodsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ApiPaPerformanceMutationKey() {
  return ['v1', '/v1/api/pa/performance', 'POST'] as const
}

export function getPostV1ApiPaPerformanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.pa.performance.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.pa.performance.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiPaPerformanceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.api.pa.performance.$post>) {
      return parseResponse(client.v1.api.pa.performance.$post(args, options))
    },
  })
}

export function usePostV1ApiPaPerformance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.pa.performance.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.pa.performance.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiPaPerformanceMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ApiPaTransactionsMutationKey() {
  return ['v1', '/v1/api/pa/transactions', 'POST'] as const
}

export function getPostV1ApiPaTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.pa.transactions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.pa.transactions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiPaTransactionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.api.pa.transactions.$post>) {
      return parseResponse(client.v1.api.pa.transactions.$post(args, options))
    },
  })
}

export function usePostV1ApiPaTransactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.pa.transactions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.pa.transactions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiPaTransactionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ApiPortfolioAccountIdPositionsInvalidateMutationKey() {
  return ['v1', '/v1/api/portfolio/:accountId/positions/invalidate', 'POST'] as const
}

export function getPostV1ApiPortfolioAccountIdPositionsInvalidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.api.portfolio)[':accountId']['positions']['invalidate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.api.portfolio)[':accountId']['positions']['invalidate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiPortfolioAccountIdPositionsInvalidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.api.portfolio)[':accountId']['positions']['invalidate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.api.portfolio[':accountId'].positions.invalidate.$post(args, options),
      )
    },
  })
}

export function usePostV1ApiPortfolioAccountIdPositionsInvalidate<
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
                  (typeof client.v1.api.portfolio)[':accountId']['positions']['invalidate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.api.portfolio)[':accountId']['positions']['invalidate']['$post']
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
  const mutationDefaults = getPostV1ApiPortfolioAccountIdPositionsInvalidateMutationOptions<
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

export function getPostV1ApiTickleMutationKey() {
  return ['v1', '/v1/api/tickle', 'POST'] as const
}

export function getPostV1ApiTickleMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.tickle.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiTickleMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.api.tickle.$post(undefined, options))
    },
  })
}

export function usePostV1ApiTickle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.tickle.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiTickleMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGwApiV1AccountsAccountIdStatusQueryKey(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['status']['$get']>,
) {
  return ['gw', '/gw/api/v1/accounts/:accountId/status', args] as const
}

export function getGwApiV1AccountsAccountIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1AccountsAccountIdStatusQueryKey>
  >({
    queryKey: getGwApiV1AccountsAccountIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1.accounts[':accountId'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1AccountsAccountIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['status']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['status']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1AccountsAccountIdStatusQueryKey>
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
      ...getGwApiV1AccountsAccountIdStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1AccountsAccountIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['status']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['status']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1AccountsAccountIdStatusQueryKey>
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
      ...getGwApiV1AccountsAccountIdStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchGwApiV1AccountsAccountIdStatusMutationKey() {
  return ['gw', '/gw/api/v1/accounts/:accountId/status', 'PATCH'] as const
}

export function getPatchGwApiV1AccountsAccountIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['status']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['status']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGwApiV1AccountsAccountIdStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['status']['$patch']>,
    ) {
      return parseResponse(client.gw.api.v1.accounts[':accountId'].status.$patch(args, options))
    },
  })
}

export function usePatchGwApiV1AccountsAccountIdStatus<
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
                ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['status']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['status']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchGwApiV1AccountsAccountIdStatusMutationOptions<
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

export function getGwApiV1RequestsRequestIdStatusQueryKey(
  args: InferRequestType<(typeof client.gw.api.v1.requests)[':requestId']['status']['$get']>,
) {
  return ['gw', '/gw/api/v1/requests/:requestId/status', args] as const
}

export function getGwApiV1RequestsRequestIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.requests)[':requestId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.requests)[':requestId']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1.requests)[':requestId']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1RequestsRequestIdStatusQueryKey>
  >({
    queryKey: getGwApiV1RequestsRequestIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1.requests[':requestId'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1RequestsRequestIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.requests)[':requestId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.requests)[':requestId']['status']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gw.api.v1.requests)[':requestId']['status']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1RequestsRequestIdStatusQueryKey>
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
      ...getGwApiV1RequestsRequestIdStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1RequestsRequestIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.requests)[':requestId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.requests)[':requestId']['status']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gw.api.v1.requests)[':requestId']['status']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1RequestsRequestIdStatusQueryKey>
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
      ...getGwApiV1RequestsRequestIdStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchGwApiV1RequestsRequestIdStatusMutationKey() {
  return ['gw', '/gw/api/v1/requests/:requestId/status', 'PATCH'] as const
}

export function getPatchGwApiV1RequestsRequestIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1.requests)[':requestId']['status']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gw.api.v1.requests)[':requestId']['status']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGwApiV1RequestsRequestIdStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gw.api.v1.requests)[':requestId']['status']['$patch']>,
    ) {
      return parseResponse(client.gw.api.v1.requests[':requestId'].status.$patch(args, options))
    },
  })
}

export function usePatchGwApiV1RequestsRequestIdStatus<
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
                ReturnType<(typeof client.gw.api.v1.requests)[':requestId']['status']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gw.api.v1.requests)[':requestId']['status']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchGwApiV1RequestsRequestIdStatusMutationOptions<
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

export function getGwApiV1AccountsLoginMessagesQueryKey(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)['login-messages']['$get']>,
) {
  return ['gw', '/gw/api/v1/accounts/login-messages', args] as const
}

export function getGwApiV1AccountsLoginMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.accounts)['login-messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)['login-messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1.accounts)['login-messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1AccountsLoginMessagesQueryKey>
  >({
    queryKey: getGwApiV1AccountsLoginMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1.accounts['login-messages'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1AccountsLoginMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.accounts)['login-messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)['login-messages']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1.accounts)['login-messages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1AccountsLoginMessagesQueryKey>
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
      ...getGwApiV1AccountsLoginMessagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1AccountsLoginMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.accounts)['login-messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)['login-messages']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1.accounts)['login-messages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1AccountsLoginMessagesQueryKey>
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
      ...getGwApiV1AccountsLoginMessagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGwApiV1AccountsStatusQueryKey(
  args: InferRequestType<typeof client.gw.api.v1.accounts.status.$get>,
) {
  return ['gw', '/gw/api/v1/accounts/status', args] as const
}

export function getGwApiV1AccountsStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.accounts.status.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1AccountsStatusQueryKey>
  >({
    queryKey: getGwApiV1AccountsStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1.accounts.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1AccountsStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.accounts.status.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1AccountsStatusQueryKey>
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
      ...getGwApiV1AccountsStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1AccountsStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.accounts.status.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1AccountsStatusQueryKey>
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
      ...getGwApiV1AccountsStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGwApiV1AccountsAccountIdDetailsQueryKey(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['details']['$get']>,
) {
  return ['gw', '/gw/api/v1/accounts/:accountId/details', args] as const
}

export function getGwApiV1AccountsAccountIdDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['details']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['details']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['details']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1AccountsAccountIdDetailsQueryKey>
  >({
    queryKey: getGwApiV1AccountsAccountIdDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1.accounts[':accountId'].details.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1AccountsAccountIdDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['details']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['details']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['details']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1AccountsAccountIdDetailsQueryKey>
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
      ...getGwApiV1AccountsAccountIdDetailsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1AccountsAccountIdDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['details']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['details']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['details']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1AccountsAccountIdDetailsQueryKey>
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
      ...getGwApiV1AccountsAccountIdDetailsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGwApiV1AccountsAccountIdKycQueryKey(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['kyc']['$get']>,
) {
  return ['gw', '/gw/api/v1/accounts/:accountId/kyc', args] as const
}

export function getGwApiV1AccountsAccountIdKycQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['kyc']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['kyc']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['kyc']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1AccountsAccountIdKycQueryKey>
  >({
    queryKey: getGwApiV1AccountsAccountIdKycQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1.accounts[':accountId'].kyc.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1AccountsAccountIdKyc<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['kyc']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['kyc']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['kyc']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1AccountsAccountIdKycQueryKey>
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
      ...getGwApiV1AccountsAccountIdKycQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1AccountsAccountIdKyc<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['kyc']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['kyc']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['kyc']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1AccountsAccountIdKycQueryKey>
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
      ...getGwApiV1AccountsAccountIdKycQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGwApiV1AccountsAccountIdLoginMessagesQueryKey(
  args: InferRequestType<
    (typeof client.gw.api.v1.accounts)[':accountId']['login-messages']['$get']
  >,
) {
  return ['gw', '/gw/api/v1/accounts/:accountId/login-messages', args] as const
}

export function getGwApiV1AccountsAccountIdLoginMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['login-messages']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gw.api.v1.accounts)[':accountId']['login-messages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['login-messages']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1AccountsAccountIdLoginMessagesQueryKey>
  >({
    queryKey: getGwApiV1AccountsAccountIdLoginMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1.accounts[':accountId']['login-messages'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1AccountsAccountIdLoginMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['login-messages']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gw.api.v1.accounts)[':accountId']['login-messages']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gw.api.v1.accounts)[':accountId']['login-messages']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1AccountsAccountIdLoginMessagesQueryKey>
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
      ...getGwApiV1AccountsAccountIdLoginMessagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1AccountsAccountIdLoginMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['login-messages']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gw.api.v1.accounts)[':accountId']['login-messages']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gw.api.v1.accounts)[':accountId']['login-messages']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1AccountsAccountIdLoginMessagesQueryKey>
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
      ...getGwApiV1AccountsAccountIdLoginMessagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGwApiV1ClientInstructionsClientInstructionIdQueryKey(
  args: InferRequestType<
    (typeof client.gw.api.v1)['client-instructions'][':clientInstructionId']['$get']
  >,
) {
  return ['gw', '/gw/api/v1/client-instructions/:clientInstructionId', args] as const
}

export function getGwApiV1ClientInstructionsClientInstructionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gw.api.v1)['client-instructions'][':clientInstructionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gw.api.v1)['client-instructions'][':clientInstructionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gw.api.v1)['client-instructions'][':clientInstructionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1ClientInstructionsClientInstructionIdQueryKey>
  >({
    queryKey: getGwApiV1ClientInstructionsClientInstructionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1['client-instructions'][':clientInstructionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1ClientInstructionsClientInstructionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gw.api.v1)['client-instructions'][':clientInstructionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gw.api.v1)['client-instructions'][':clientInstructionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gw.api.v1)['client-instructions'][':clientInstructionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1ClientInstructionsClientInstructionIdQueryKey>
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
      ...getGwApiV1ClientInstructionsClientInstructionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1ClientInstructionsClientInstructionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gw.api.v1)['client-instructions'][':clientInstructionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gw.api.v1)['client-instructions'][':clientInstructionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gw.api.v1)['client-instructions'][':clientInstructionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1ClientInstructionsClientInstructionIdQueryKey>
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
      ...getGwApiV1ClientInstructionsClientInstructionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGwApiV1EchoHttpsQueryKey() {
  return ['gw', '/gw/api/v1/echo/https'] as const
}

export function getGwApiV1EchoHttpsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.echo.https.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.echo.https.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1EchoHttpsQueryKey>
  >({
    queryKey: getGwApiV1EchoHttpsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1.echo.https.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1EchoHttps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.echo.https.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.echo.https.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1EchoHttpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGwApiV1EchoHttpsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGwApiV1EchoHttps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.echo.https.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.echo.https.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1EchoHttpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGwApiV1EchoHttpsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGwApiV1EnumerationsComplexAssetTransferQueryKey(
  args: InferRequestType<(typeof client.gw.api.v1.enumerations)['complex-asset-transfer']['$get']>,
) {
  return ['gw', '/gw/api/v1/enumerations/complex-asset-transfer', args] as const
}

export function getGwApiV1EnumerationsComplexAssetTransferQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gw.api.v1.enumerations)['complex-asset-transfer']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.enumerations)['complex-asset-transfer']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gw.api.v1.enumerations)['complex-asset-transfer']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1EnumerationsComplexAssetTransferQueryKey>
  >({
    queryKey: getGwApiV1EnumerationsComplexAssetTransferQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1.enumerations['complex-asset-transfer'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1EnumerationsComplexAssetTransfer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gw.api.v1.enumerations)['complex-asset-transfer']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.enumerations)['complex-asset-transfer']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gw.api.v1.enumerations)['complex-asset-transfer']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1EnumerationsComplexAssetTransferQueryKey>
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
      ...getGwApiV1EnumerationsComplexAssetTransferQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1EnumerationsComplexAssetTransfer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gw.api.v1.enumerations)['complex-asset-transfer']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.enumerations)['complex-asset-transfer']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gw.api.v1.enumerations)['complex-asset-transfer']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1EnumerationsComplexAssetTransferQueryKey>
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
      ...getGwApiV1EnumerationsComplexAssetTransferQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGwApiV1EnumerationsEnumerationTypeQueryKey(
  args: InferRequestType<(typeof client.gw.api.v1.enumerations)[':enumerationType']['$get']>,
) {
  return ['gw', '/gw/api/v1/enumerations/:enumerationType', args] as const
}

export function getGwApiV1EnumerationsEnumerationTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.enumerations)[':enumerationType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.enumerations)[':enumerationType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1.enumerations)[':enumerationType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1EnumerationsEnumerationTypeQueryKey>
  >({
    queryKey: getGwApiV1EnumerationsEnumerationTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1.enumerations[':enumerationType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1EnumerationsEnumerationType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.enumerations)[':enumerationType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.enumerations)[':enumerationType']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gw.api.v1.enumerations)[':enumerationType']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1EnumerationsEnumerationTypeQueryKey>
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
      ...getGwApiV1EnumerationsEnumerationTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1EnumerationsEnumerationType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.enumerations)[':enumerationType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.enumerations)[':enumerationType']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gw.api.v1.enumerations)[':enumerationType']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1EnumerationsEnumerationTypeQueryKey>
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
      ...getGwApiV1EnumerationsEnumerationTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGwApiV1FormsQueryKey(
  args: InferRequestType<typeof client.gw.api.v1.forms.$get>,
) {
  return ['gw', '/gw/api/v1/forms', args] as const
}

export function getGwApiV1FormsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.forms.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.gw.api.v1.forms.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.forms.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1FormsQueryKey>
  >({
    queryKey: getGwApiV1FormsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1.forms.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGwApiV1Forms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.forms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.forms.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.forms.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1FormsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGwApiV1FormsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGwApiV1Forms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.forms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.forms.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.forms.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1FormsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGwApiV1FormsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGwApiV1FormsRequiredFormsQueryKey(
  args: InferRequestType<(typeof client.gw.api.v1.forms)['required-forms']['$get']>,
) {
  return ['gw', '/gw/api/v1/forms/required-forms', args] as const
}

export function getGwApiV1FormsRequiredFormsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.forms)['required-forms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.forms)['required-forms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1.forms)['required-forms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1FormsRequiredFormsQueryKey>
  >({
    queryKey: getGwApiV1FormsRequiredFormsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1.forms['required-forms'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1FormsRequiredForms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.forms)['required-forms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.forms)['required-forms']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1.forms)['required-forms']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1FormsRequiredFormsQueryKey>
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
      ...getGwApiV1FormsRequiredFormsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1FormsRequiredForms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.forms)['required-forms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.forms)['required-forms']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1.forms)['required-forms']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1FormsRequiredFormsQueryKey>
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
      ...getGwApiV1FormsRequiredFormsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGwApiV1InstructionSetsInstructionSetIdQueryKey(
  args: InferRequestType<
    (typeof client.gw.api.v1)['instruction-sets'][':instructionSetId']['$get']
  >,
) {
  return ['gw', '/gw/api/v1/instruction-sets/:instructionSetId', args] as const
}

export function getGwApiV1InstructionSetsInstructionSetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gw.api.v1)['instruction-sets'][':instructionSetId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gw.api.v1)['instruction-sets'][':instructionSetId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gw.api.v1)['instruction-sets'][':instructionSetId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1InstructionSetsInstructionSetIdQueryKey>
  >({
    queryKey: getGwApiV1InstructionSetsInstructionSetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1['instruction-sets'][':instructionSetId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1InstructionSetsInstructionSetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gw.api.v1)['instruction-sets'][':instructionSetId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gw.api.v1)['instruction-sets'][':instructionSetId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gw.api.v1)['instruction-sets'][':instructionSetId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1InstructionSetsInstructionSetIdQueryKey>
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
      ...getGwApiV1InstructionSetsInstructionSetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1InstructionSetsInstructionSetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gw.api.v1)['instruction-sets'][':instructionSetId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gw.api.v1)['instruction-sets'][':instructionSetId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gw.api.v1)['instruction-sets'][':instructionSetId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1InstructionSetsInstructionSetIdQueryKey>
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
      ...getGwApiV1InstructionSetsInstructionSetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGwApiV1InstructionsInstructionIdQueryKey(
  args: InferRequestType<(typeof client.gw.api.v1.instructions)[':instructionId']['$get']>,
) {
  return ['gw', '/gw/api/v1/instructions/:instructionId', args] as const
}

export function getGwApiV1InstructionsInstructionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.instructions)[':instructionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.instructions)[':instructionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1.instructions)[':instructionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1InstructionsInstructionIdQueryKey>
  >({
    queryKey: getGwApiV1InstructionsInstructionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1.instructions[':instructionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1InstructionsInstructionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.instructions)[':instructionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.instructions)[':instructionId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1.instructions)[':instructionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1InstructionsInstructionIdQueryKey>
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
      ...getGwApiV1InstructionsInstructionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1InstructionsInstructionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.instructions)[':instructionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.instructions)[':instructionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1.instructions)[':instructionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1InstructionsInstructionIdQueryKey>
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
      ...getGwApiV1InstructionsInstructionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGwApiV1ParticipatingBanksQueryKey(
  args: InferRequestType<(typeof client.gw.api.v1)['participating-banks']['$get']>,
) {
  return ['gw', '/gw/api/v1/participating-banks', args] as const
}

export function getGwApiV1ParticipatingBanksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1)['participating-banks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1)['participating-banks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['participating-banks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1ParticipatingBanksQueryKey>
  >({
    queryKey: getGwApiV1ParticipatingBanksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1['participating-banks'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1ParticipatingBanks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1)['participating-banks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1)['participating-banks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1)['participating-banks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1ParticipatingBanksQueryKey>
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
      ...getGwApiV1ParticipatingBanksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1ParticipatingBanks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1)['participating-banks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1)['participating-banks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1)['participating-banks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1ParticipatingBanksQueryKey>
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
      ...getGwApiV1ParticipatingBanksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGwApiV1RequestsQueryKey(
  args: InferRequestType<typeof client.gw.api.v1.requests.$get>,
) {
  return ['gw', '/gw/api/v1/requests', args] as const
}

export function getGwApiV1RequestsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.requests.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.gw.api.v1.requests.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.requests.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1RequestsQueryKey>
  >({
    queryKey: getGwApiV1RequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1.requests.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGwApiV1Requests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.requests.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.requests.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1RequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGwApiV1RequestsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGwApiV1Requests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.requests.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.requests.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1RequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGwApiV1RequestsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGwApiV1RestrictionsAccountQueryKey(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.account.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/restrictions/account', keyArgs] as const
}

export function getGwApiV1RestrictionsAccountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.account.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.account.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.account.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1RestrictionsAccountQueryKey>
  >({
    queryKey: getGwApiV1RestrictionsAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1.restrictions.account.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1RestrictionsAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.account.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.account.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.gw.api.v1.restrictions.account.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1RestrictionsAccountQueryKey>
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
      ...getGwApiV1RestrictionsAccountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1RestrictionsAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.account.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.account.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.gw.api.v1.restrictions.account.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1RestrictionsAccountQueryKey>
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
      ...getGwApiV1RestrictionsAccountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGwApiV1RestrictionsIdsQueryKey(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.ids.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/restrictions/ids', keyArgs] as const
}

export function getGwApiV1RestrictionsIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.ids.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.ids.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.ids.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1RestrictionsIdsQueryKey>
  >({
    queryKey: getGwApiV1RestrictionsIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1.restrictions.ids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1RestrictionsIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.ids.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.ids.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.ids.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1RestrictionsIdsQueryKey>
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
      ...getGwApiV1RestrictionsIdsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1RestrictionsIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.ids.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.ids.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.ids.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1RestrictionsIdsQueryKey>
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
      ...getGwApiV1RestrictionsIdsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGwApiV1RestrictionsListQueryKey(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.list.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/restrictions/list', keyArgs] as const
}

export function getGwApiV1RestrictionsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1RestrictionsListQueryKey>
  >({
    queryKey: getGwApiV1RestrictionsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1.restrictions.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1RestrictionsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.gw.api.v1.restrictions.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1RestrictionsListQueryKey>
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
      ...getGwApiV1RestrictionsListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1RestrictionsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.gw.api.v1.restrictions.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1RestrictionsListQueryKey>
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
      ...getGwApiV1RestrictionsListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGwApiV1RestrictionsListsIdsQueryKey(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.lists.ids.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/restrictions/lists/ids', keyArgs] as const
}

export function getGwApiV1RestrictionsListsIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.lists.ids.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.lists.ids.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.gw.api.v1.restrictions.lists.ids.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1RestrictionsListsIdsQueryKey>
  >({
    queryKey: getGwApiV1RestrictionsListsIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1.restrictions.lists.ids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1RestrictionsListsIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.lists.ids.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.lists.ids.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.gw.api.v1.restrictions.lists.ids.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1RestrictionsListsIdsQueryKey>
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
      ...getGwApiV1RestrictionsListsIdsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1RestrictionsListsIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.lists.ids.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.lists.ids.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.gw.api.v1.restrictions.lists.ids.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1RestrictionsListsIdsQueryKey>
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
      ...getGwApiV1RestrictionsListsIdsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGwApiV1RestrictionsRestrictionQueryKey(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.restriction.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/restrictions/restriction', keyArgs] as const
}

export function getGwApiV1RestrictionsRestrictionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.gw.api.v1.restrictions.restriction.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.restriction.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.gw.api.v1.restrictions.restriction.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1RestrictionsRestrictionQueryKey>
  >({
    queryKey: getGwApiV1RestrictionsRestrictionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1.restrictions.restriction.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1RestrictionsRestriction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.gw.api.v1.restrictions.restriction.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.restriction.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.gw.api.v1.restrictions.restriction.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1RestrictionsRestrictionQueryKey>
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
      ...getGwApiV1RestrictionsRestrictionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1RestrictionsRestriction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.gw.api.v1.restrictions.restriction.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.restriction.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.gw.api.v1.restrictions.restriction.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1RestrictionsRestrictionQueryKey>
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
      ...getGwApiV1RestrictionsRestrictionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGwApiV1RestrictionsRestrictionScopeQueryKey(
  args: InferRequestType<(typeof client.gw.api.v1.restrictions)['restriction-scope']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/restrictions/restriction-scope', keyArgs] as const
}

export function getGwApiV1RestrictionsRestrictionScopeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.restrictions)['restriction-scope']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.restrictions)['restriction-scope']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1.restrictions)['restriction-scope']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1RestrictionsRestrictionScopeQueryKey>
  >({
    queryKey: getGwApiV1RestrictionsRestrictionScopeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1.restrictions['restriction-scope'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1RestrictionsRestrictionScope<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.restrictions)['restriction-scope']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.restrictions)['restriction-scope']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gw.api.v1.restrictions)['restriction-scope']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1RestrictionsRestrictionScopeQueryKey>
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
      ...getGwApiV1RestrictionsRestrictionScopeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1RestrictionsRestrictionScope<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.restrictions)['restriction-scope']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.restrictions)['restriction-scope']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gw.api.v1.restrictions)['restriction-scope']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1RestrictionsRestrictionScopeQueryKey>
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
      ...getGwApiV1RestrictionsRestrictionScopeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGwApiV1RestrictionsUserQueryKey(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.user.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/restrictions/user', keyArgs] as const
}

export function getGwApiV1RestrictionsUserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.user.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.user.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.user.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1RestrictionsUserQueryKey>
  >({
    queryKey: getGwApiV1RestrictionsUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1.restrictions.user.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1RestrictionsUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.user.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.user.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.gw.api.v1.restrictions.user.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1RestrictionsUserQueryKey>
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
      ...getGwApiV1RestrictionsUserQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1RestrictionsUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.user.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.user.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.gw.api.v1.restrictions.user.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1RestrictionsUserQueryKey>
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
      ...getGwApiV1RestrictionsUserQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGwApiV1StatementsAvailableQueryKey(
  args: InferRequestType<typeof client.gw.api.v1.statements.available.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/statements/available', keyArgs] as const
}

export function getGwApiV1StatementsAvailableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.statements.available.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.statements.available.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.statements.available.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1StatementsAvailableQueryKey>
  >({
    queryKey: getGwApiV1StatementsAvailableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1.statements.available.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1StatementsAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.statements.available.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.statements.available.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.gw.api.v1.statements.available.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1StatementsAvailableQueryKey>
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
      ...getGwApiV1StatementsAvailableQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1StatementsAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.statements.available.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gw.api.v1.statements.available.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.gw.api.v1.statements.available.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1StatementsAvailableQueryKey>
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
      ...getGwApiV1StatementsAvailableQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGwApiV1TaxDocumentsAvailableQueryKey(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-documents']['available']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/tax-documents/available', keyArgs] as const
}

export function getGwApiV1TaxDocumentsAvailableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1)['tax-documents']['available']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-documents']['available']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['tax-documents']['available']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1TaxDocumentsAvailableQueryKey>
  >({
    queryKey: getGwApiV1TaxDocumentsAvailableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1['tax-documents'].available.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1TaxDocumentsAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1)['tax-documents']['available']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-documents']['available']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1)['tax-documents']['available']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1TaxDocumentsAvailableQueryKey>
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
      ...getGwApiV1TaxDocumentsAvailableQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1TaxDocumentsAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1)['tax-documents']['available']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-documents']['available']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1)['tax-documents']['available']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1TaxDocumentsAvailableQueryKey>
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
      ...getGwApiV1TaxDocumentsAvailableQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGwApiV1TaxVouchersActiveCountriesQueryKey(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['active-countries']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/tax-vouchers/active-countries', keyArgs] as const
}

export function getGwApiV1TaxVouchersActiveCountriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['active-countries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['active-countries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['active-countries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1TaxVouchersActiveCountriesQueryKey>
  >({
    queryKey: getGwApiV1TaxVouchersActiveCountriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1['tax-vouchers']['active-countries'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1TaxVouchersActiveCountries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['active-countries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['active-countries']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['active-countries']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1TaxVouchersActiveCountriesQueryKey>
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
      ...getGwApiV1TaxVouchersActiveCountriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1TaxVouchersActiveCountries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['active-countries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['active-countries']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['active-countries']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1TaxVouchersActiveCountriesQueryKey>
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
      ...getGwApiV1TaxVouchersActiveCountriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGwApiV1TaxVouchersDividendsQueryKey(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['dividends']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/tax-vouchers/dividends', keyArgs] as const
}

export function getGwApiV1TaxVouchersDividendsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['dividends']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['dividends']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['dividends']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1TaxVouchersDividendsQueryKey>
  >({
    queryKey: getGwApiV1TaxVouchersDividendsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1['tax-vouchers'].dividends.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1TaxVouchersDividends<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['dividends']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['dividends']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['dividends']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1TaxVouchersDividendsQueryKey>
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
      ...getGwApiV1TaxVouchersDividendsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1TaxVouchersDividends<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['dividends']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['dividends']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['dividends']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1TaxVouchersDividendsQueryKey>
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
      ...getGwApiV1TaxVouchersDividendsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGwApiV1TaxVouchersYearsQueryKey(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['years']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/tax-vouchers/years', keyArgs] as const
}

export function getGwApiV1TaxVouchersYearsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['years']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['years']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['years']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1TaxVouchersYearsQueryKey>
  >({
    queryKey: getGwApiV1TaxVouchersYearsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1['tax-vouchers'].years.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1TaxVouchersYears<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['years']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['years']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['years']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1TaxVouchersYearsQueryKey>
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
      ...getGwApiV1TaxVouchersYearsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1TaxVouchersYears<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['years']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['years']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['years']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1TaxVouchersYearsQueryKey>
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
      ...getGwApiV1TaxVouchersYearsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGwApiV1TaxVouchersRequestIdDownloadQueryKey(
  args: InferRequestType<
    (typeof client.gw.api.v1)['tax-vouchers'][':requestId']['download']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/tax-vouchers/:requestId/download', keyArgs] as const
}

export function getGwApiV1TaxVouchersRequestIdDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gw.api.v1)['tax-vouchers'][':requestId']['download']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gw.api.v1)['tax-vouchers'][':requestId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gw.api.v1)['tax-vouchers'][':requestId']['download']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1TaxVouchersRequestIdDownloadQueryKey>
  >({
    queryKey: getGwApiV1TaxVouchersRequestIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1['tax-vouchers'][':requestId'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1TaxVouchersRequestIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gw.api.v1)['tax-vouchers'][':requestId']['download']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gw.api.v1)['tax-vouchers'][':requestId']['download']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gw.api.v1)['tax-vouchers'][':requestId']['download']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1TaxVouchersRequestIdDownloadQueryKey>
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
      ...getGwApiV1TaxVouchersRequestIdDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1TaxVouchersRequestIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gw.api.v1)['tax-vouchers'][':requestId']['download']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gw.api.v1)['tax-vouchers'][':requestId']['download']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gw.api.v1)['tax-vouchers'][':requestId']['download']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1TaxVouchersRequestIdDownloadQueryKey>
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
      ...getGwApiV1TaxVouchersRequestIdDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGwApiV1TaxVouchersRequestIdStateQueryKey(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers'][':requestId']['state']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/tax-vouchers/:requestId/state', keyArgs] as const
}

export function getGwApiV1TaxVouchersRequestIdStateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gw.api.v1)['tax-vouchers'][':requestId']['state']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers'][':requestId']['state']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gw.api.v1)['tax-vouchers'][':requestId']['state']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1TaxVouchersRequestIdStateQueryKey>
  >({
    queryKey: getGwApiV1TaxVouchersRequestIdStateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1['tax-vouchers'][':requestId'].state.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1TaxVouchersRequestIdState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gw.api.v1)['tax-vouchers'][':requestId']['state']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers'][':requestId']['state']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gw.api.v1)['tax-vouchers'][':requestId']['state']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1TaxVouchersRequestIdStateQueryKey>
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
      ...getGwApiV1TaxVouchersRequestIdStateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1TaxVouchersRequestIdState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gw.api.v1)['tax-vouchers'][':requestId']['state']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers'][':requestId']['state']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gw.api.v1)['tax-vouchers'][':requestId']['state']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1TaxVouchersRequestIdStateQueryKey>
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
      ...getGwApiV1TaxVouchersRequestIdStateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGwApiV1TradeConfirmationsAvailableQueryKey(
  args: InferRequestType<(typeof client.gw.api.v1)['trade-confirmations']['available']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/trade-confirmations/available', keyArgs] as const
}

export function getGwApiV1TradeConfirmationsAvailableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1)['trade-confirmations']['available']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1)['trade-confirmations']['available']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['trade-confirmations']['available']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1TradeConfirmationsAvailableQueryKey>
  >({
    queryKey: getGwApiV1TradeConfirmationsAvailableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1['trade-confirmations'].available.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1TradeConfirmationsAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1)['trade-confirmations']['available']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1)['trade-confirmations']['available']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gw.api.v1)['trade-confirmations']['available']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1TradeConfirmationsAvailableQueryKey>
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
      ...getGwApiV1TradeConfirmationsAvailableQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1TradeConfirmationsAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1)['trade-confirmations']['available']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1)['trade-confirmations']['available']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gw.api.v1)['trade-confirmations']['available']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1TradeConfirmationsAvailableQueryKey>
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
      ...getGwApiV1TradeConfirmationsAvailableQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGwApiV1ValidationsUsernamesUsernameQueryKey(
  args: InferRequestType<(typeof client.gw.api.v1.validations.usernames)[':username']['$get']>,
) {
  return ['gw', '/gw/api/v1/validations/usernames/:username', args] as const
}

export function getGwApiV1ValidationsUsernamesUsernameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.validations.usernames)[':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.validations.usernames)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1.validations.usernames)[':username']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGwApiV1ValidationsUsernamesUsernameQueryKey>
  >({
    queryKey: getGwApiV1ValidationsUsernamesUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gw.api.v1.validations.usernames[':username'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGwApiV1ValidationsUsernamesUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.validations.usernames)[':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.validations.usernames)[':username']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gw.api.v1.validations.usernames)[':username']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1ValidationsUsernamesUsernameQueryKey>
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
      ...getGwApiV1ValidationsUsernamesUsernameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGwApiV1ValidationsUsernamesUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gw.api.v1.validations.usernames)[':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gw.api.v1.validations.usernames)[':username']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gw.api.v1.validations.usernames)[':username']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGwApiV1ValidationsUsernamesUsernameQueryKey>
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
      ...getGwApiV1ValidationsUsernamesUsernameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiAceswsAccountIdSignaturesAndOwnersQueryKey(
  args: InferRequestType<
    (typeof client.v1.api.acesws)[':accountId']['signatures-and-owners']['$get']
  >,
) {
  return ['v1', '/v1/api/acesws/:accountId/signatures-and-owners', args] as const
}

export function getV1ApiAceswsAccountIdSignaturesAndOwnersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.api.acesws)[':accountId']['signatures-and-owners']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.api.acesws)[':accountId']['signatures-and-owners']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.api.acesws)[':accountId']['signatures-and-owners']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiAceswsAccountIdSignaturesAndOwnersQueryKey>
  >({
    queryKey: getV1ApiAceswsAccountIdSignaturesAndOwnersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.acesws[':accountId']['signatures-and-owners'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiAceswsAccountIdSignaturesAndOwners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.api.acesws)[':accountId']['signatures-and-owners']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.api.acesws)[':accountId']['signatures-and-owners']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.api.acesws)[':accountId']['signatures-and-owners']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiAceswsAccountIdSignaturesAndOwnersQueryKey>
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
      ...getV1ApiAceswsAccountIdSignaturesAndOwnersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiAceswsAccountIdSignaturesAndOwners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.api.acesws)[':accountId']['signatures-and-owners']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.api.acesws)[':accountId']['signatures-and-owners']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.api.acesws)[':accountId']['signatures-and-owners']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiAceswsAccountIdSignaturesAndOwnersQueryKey>
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
      ...getV1ApiAceswsAccountIdSignaturesAndOwnersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiContractTradingScheduleQueryKey(
  args: InferRequestType<(typeof client.v1.api.contract)['trading-schedule']['$get']>,
) {
  return ['v1', '/v1/api/contract/trading-schedule', args] as const
}

export function getV1ApiContractTradingScheduleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.contract)['trading-schedule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.contract)['trading-schedule']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.contract)['trading-schedule']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiContractTradingScheduleQueryKey>
  >({
    queryKey: getV1ApiContractTradingScheduleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.contract['trading-schedule'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiContractTradingSchedule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.contract)['trading-schedule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.contract)['trading-schedule']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.contract)['trading-schedule']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiContractTradingScheduleQueryKey>
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
      ...getV1ApiContractTradingScheduleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiContractTradingSchedule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.contract)['trading-schedule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.contract)['trading-schedule']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.contract)['trading-schedule']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiContractTradingScheduleQueryKey>
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
      ...getV1ApiContractTradingScheduleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiForecastCategoryTreeQueryKey() {
  return ['v1', '/v1/api/forecast/category/tree'] as const
}

export function getV1ApiForecastCategoryTreeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.forecast.category.tree.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.forecast.category.tree.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiForecastCategoryTreeQueryKey>
  >({
    queryKey: getV1ApiForecastCategoryTreeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.forecast.category.tree.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiForecastCategoryTree<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.forecast.category.tree.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.forecast.category.tree.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiForecastCategoryTreeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ApiForecastCategoryTreeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ApiForecastCategoryTree<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.forecast.category.tree.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.forecast.category.tree.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiForecastCategoryTreeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ApiForecastCategoryTreeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1ApiForecastContractDetailsQueryKey(
  args: InferRequestType<typeof client.v1.api.forecast.contract.details.$get>,
) {
  return ['v1', '/v1/api/forecast/contract/details', args] as const
}

export function getV1ApiForecastContractDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.forecast.contract.details.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.forecast.contract.details.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.forecast.contract.details.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiForecastContractDetailsQueryKey>
  >({
    queryKey: getV1ApiForecastContractDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.forecast.contract.details.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiForecastContractDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.forecast.contract.details.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.forecast.contract.details.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.forecast.contract.details.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiForecastContractDetailsQueryKey>
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
      ...getV1ApiForecastContractDetailsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiForecastContractDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.forecast.contract.details.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.forecast.contract.details.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.forecast.contract.details.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiForecastContractDetailsQueryKey>
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
      ...getV1ApiForecastContractDetailsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiForecastContractMarketQueryKey(
  args: InferRequestType<typeof client.v1.api.forecast.contract.market.$get>,
) {
  return ['v1', '/v1/api/forecast/contract/market', args] as const
}

export function getV1ApiForecastContractMarketQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.forecast.contract.market.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.forecast.contract.market.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.forecast.contract.market.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiForecastContractMarketQueryKey>
  >({
    queryKey: getV1ApiForecastContractMarketQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.forecast.contract.market.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiForecastContractMarket<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.forecast.contract.market.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.forecast.contract.market.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.forecast.contract.market.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiForecastContractMarketQueryKey>
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
      ...getV1ApiForecastContractMarketQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiForecastContractMarket<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.forecast.contract.market.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.forecast.contract.market.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.forecast.contract.market.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiForecastContractMarketQueryKey>
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
      ...getV1ApiForecastContractMarketQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiForecastContractRulesQueryKey(
  args: InferRequestType<typeof client.v1.api.forecast.contract.rules.$get>,
) {
  return ['v1', '/v1/api/forecast/contract/rules', args] as const
}

export function getV1ApiForecastContractRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.forecast.contract.rules.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.forecast.contract.rules.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.forecast.contract.rules.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiForecastContractRulesQueryKey>
  >({
    queryKey: getV1ApiForecastContractRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.forecast.contract.rules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiForecastContractRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.forecast.contract.rules.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.forecast.contract.rules.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.forecast.contract.rules.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiForecastContractRulesQueryKey>
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
      ...getV1ApiForecastContractRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiForecastContractRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.forecast.contract.rules.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.forecast.contract.rules.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.forecast.contract.rules.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiForecastContractRulesQueryKey>
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
      ...getV1ApiForecastContractRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiForecastContractSchedulesQueryKey(
  args: InferRequestType<typeof client.v1.api.forecast.contract.schedules.$get>,
) {
  return ['v1', '/v1/api/forecast/contract/schedules', args] as const
}

export function getV1ApiForecastContractSchedulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.api.forecast.contract.schedules.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.forecast.contract.schedules.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.forecast.contract.schedules.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiForecastContractSchedulesQueryKey>
  >({
    queryKey: getV1ApiForecastContractSchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.forecast.contract.schedules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiForecastContractSchedules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.api.forecast.contract.schedules.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.forecast.contract.schedules.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.forecast.contract.schedules.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiForecastContractSchedulesQueryKey>
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
      ...getV1ApiForecastContractSchedulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiForecastContractSchedules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.api.forecast.contract.schedules.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.forecast.contract.schedules.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.forecast.contract.schedules.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiForecastContractSchedulesQueryKey>
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
      ...getV1ApiForecastContractSchedulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiFyiDeliveryoptionsQueryKey() {
  return ['v1', '/v1/api/fyi/deliveryoptions'] as const
}

export function getV1ApiFyiDeliveryoptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.deliveryoptions.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.deliveryoptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiFyiDeliveryoptionsQueryKey>
  >({
    queryKey: getV1ApiFyiDeliveryoptionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.fyi.deliveryoptions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiFyiDeliveryoptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.deliveryoptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.deliveryoptions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiFyiDeliveryoptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ApiFyiDeliveryoptionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ApiFyiDeliveryoptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.deliveryoptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.deliveryoptions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiFyiDeliveryoptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ApiFyiDeliveryoptionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1ApiFyiDisclaimerTypecodeQueryKey(
  args: InferRequestType<(typeof client.v1.api.fyi.disclaimer)[':typecode']['$get']>,
) {
  return ['v1', '/v1/api/fyi/disclaimer/:typecode', args] as const
}

export function getV1ApiFyiDisclaimerTypecodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.fyi.disclaimer)[':typecode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.fyi.disclaimer)[':typecode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fyi.disclaimer)[':typecode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiFyiDisclaimerTypecodeQueryKey>
  >({
    queryKey: getV1ApiFyiDisclaimerTypecodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.fyi.disclaimer[':typecode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiFyiDisclaimerTypecode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.fyi.disclaimer)[':typecode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.fyi.disclaimer)[':typecode']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.fyi.disclaimer)[':typecode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiFyiDisclaimerTypecodeQueryKey>
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
      ...getV1ApiFyiDisclaimerTypecodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiFyiDisclaimerTypecode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.fyi.disclaimer)[':typecode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.fyi.disclaimer)[':typecode']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.fyi.disclaimer)[':typecode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiFyiDisclaimerTypecodeQueryKey>
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
      ...getV1ApiFyiDisclaimerTypecodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1ApiFyiDisclaimerTypecodeMutationKey() {
  return ['v1', '/v1/api/fyi/disclaimer/:typecode', 'PUT'] as const
}

export function getPutV1ApiFyiDisclaimerTypecodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fyi.disclaimer)[':typecode']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.api.fyi.disclaimer)[':typecode']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ApiFyiDisclaimerTypecodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.api.fyi.disclaimer)[':typecode']['$put']>,
    ) {
      return parseResponse(client.v1.api.fyi.disclaimer[':typecode'].$put(args, options))
    },
  })
}

export function usePutV1ApiFyiDisclaimerTypecode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.fyi.disclaimer)[':typecode']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.api.fyi.disclaimer)[':typecode']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ApiFyiDisclaimerTypecodeMutationOptions<TError, TOnMutateResult>(
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

export function getV1ApiFyiNotificationsQueryKey(
  args: InferRequestType<typeof client.v1.api.fyi.notifications.$get>,
) {
  return ['v1', '/v1/api/fyi/notifications', args] as const
}

export function getV1ApiFyiNotificationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.notifications.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.fyi.notifications.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.notifications.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiFyiNotificationsQueryKey>
  >({
    queryKey: getV1ApiFyiNotificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.fyi.notifications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiFyiNotifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.notifications.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.fyi.notifications.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.notifications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiFyiNotificationsQueryKey>
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
      ...getV1ApiFyiNotificationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiFyiNotifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.notifications.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.fyi.notifications.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.notifications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiFyiNotificationsQueryKey>
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
      ...getV1ApiFyiNotificationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiFyiSettingsQueryKey() {
  return ['v1', '/v1/api/fyi/settings'] as const
}

export function getV1ApiFyiSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.settings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiFyiSettingsQueryKey>
  >({
    queryKey: getV1ApiFyiSettingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.fyi.settings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiFyiSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.settings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiFyiSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ApiFyiSettingsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ApiFyiSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.settings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiFyiSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ApiFyiSettingsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1ApiFyiUnreadnumberQueryKey() {
  return ['v1', '/v1/api/fyi/unreadnumber'] as const
}

export function getV1ApiFyiUnreadnumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.unreadnumber.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.unreadnumber.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiFyiUnreadnumberQueryKey>
  >({
    queryKey: getV1ApiFyiUnreadnumberQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.fyi.unreadnumber.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiFyiUnreadnumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.unreadnumber.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.unreadnumber.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiFyiUnreadnumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ApiFyiUnreadnumberQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ApiFyiUnreadnumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.unreadnumber.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.unreadnumber.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiFyiUnreadnumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ApiFyiUnreadnumberQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1ApiIserverAccountAlertAlertIdQueryKey(
  args: InferRequestType<(typeof client.v1.api.iserver.account.alert)[':alertId']['$get']>,
) {
  return ['v1', '/v1/api/iserver/account/alert/:alertId', args] as const
}

export function getV1ApiIserverAccountAlertAlertIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.iserver.account.alert)[':alertId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.iserver.account.alert)[':alertId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.iserver.account.alert)[':alertId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverAccountAlertAlertIdQueryKey>
  >({
    queryKey: getV1ApiIserverAccountAlertAlertIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.account.alert[':alertId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverAccountAlertAlertId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.iserver.account.alert)[':alertId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.iserver.account.alert)[':alertId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.iserver.account.alert)[':alertId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountAlertAlertIdQueryKey>
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
      ...getV1ApiIserverAccountAlertAlertIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverAccountAlertAlertId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.iserver.account.alert)[':alertId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.iserver.account.alert)[':alertId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.iserver.account.alert)[':alertId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountAlertAlertIdQueryKey>
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
      ...getV1ApiIserverAccountAlertAlertIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiIserverAccountAllocationAccountsQueryKey() {
  return ['v1', '/v1/api/iserver/account/allocation/accounts'] as const
}

export function getV1ApiIserverAccountAllocationAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.accounts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.accounts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverAccountAllocationAccountsQueryKey>
  >({
    queryKey: getV1ApiIserverAccountAllocationAccountsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.account.allocation.accounts.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverAccountAllocationAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.accounts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.accounts.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountAllocationAccountsQueryKey>
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
      ...getV1ApiIserverAccountAllocationAccountsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverAccountAllocationAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.accounts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.accounts.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountAllocationAccountsQueryKey>
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
      ...getV1ApiIserverAccountAllocationAccountsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiIserverAccountAllocationModelsQueryKey() {
  return ['v1', '/v1/api/iserver/account/allocation/models'] as const
}

export function getV1ApiIserverAccountAllocationModelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.models.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.models.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverAccountAllocationModelsQueryKey>
  >({
    queryKey: getV1ApiIserverAccountAllocationModelsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.account.allocation.models.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverAccountAllocationModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.models.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.models.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountAllocationModelsQueryKey>
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
      ...getV1ApiIserverAccountAllocationModelsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverAccountAllocationModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.models.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.models.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountAllocationModelsQueryKey>
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
      ...getV1ApiIserverAccountAllocationModelsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiIserverAccountMtaQueryKey() {
  return ['v1', '/v1/api/iserver/account/mta'] as const
}

export function getV1ApiIserverAccountMtaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.account.mta.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.account.mta.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverAccountMtaQueryKey>
  >({
    queryKey: getV1ApiIserverAccountMtaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.account.mta.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverAccountMta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.account.mta.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.account.mta.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountMtaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ApiIserverAccountMtaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverAccountMta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.account.mta.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.account.mta.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountMtaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ApiIserverAccountMtaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1ApiIserverAccountOrderStatusOrderIdQueryKey(
  args: InferRequestType<(typeof client.v1.api.iserver.account.order.status)[':orderId']['$get']>,
) {
  return ['v1', '/v1/api/iserver/account/order/status/:orderId', args] as const
}

export function getV1ApiIserverAccountOrderStatusOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.iserver.account.order.status)[':orderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.iserver.account.order.status)[':orderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.api.iserver.account.order.status)[':orderId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverAccountOrderStatusOrderIdQueryKey>
  >({
    queryKey: getV1ApiIserverAccountOrderStatusOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.account.order.status[':orderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverAccountOrderStatusOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.iserver.account.order.status)[':orderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.iserver.account.order.status)[':orderId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.api.iserver.account.order.status)[':orderId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountOrderStatusOrderIdQueryKey>
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
      ...getV1ApiIserverAccountOrderStatusOrderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverAccountOrderStatusOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.iserver.account.order.status)[':orderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.iserver.account.order.status)[':orderId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.api.iserver.account.order.status)[':orderId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountOrderStatusOrderIdQueryKey>
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
      ...getV1ApiIserverAccountOrderStatusOrderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiIserverAccountOrdersQueryKey(
  args: InferRequestType<typeof client.v1.api.iserver.account.orders.$get>,
) {
  return ['v1', '/v1/api/iserver/account/orders', args] as const
}

export function getV1ApiIserverAccountOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.account.orders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.account.orders.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.account.orders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverAccountOrdersQueryKey>
  >({
    queryKey: getV1ApiIserverAccountOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.account.orders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverAccountOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.account.orders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.account.orders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.account.orders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountOrdersQueryKey>
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
      ...getV1ApiIserverAccountOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverAccountOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.account.orders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.account.orders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.account.orders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountOrdersQueryKey>
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
      ...getV1ApiIserverAccountOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiIserverAccountPnlPartitionedQueryKey() {
  return ['v1', '/v1/api/iserver/account/pnl/partitioned'] as const
}

export function getV1ApiIserverAccountPnlPartitionedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.api.iserver.account.pnl.partitioned.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.account.pnl.partitioned.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverAccountPnlPartitionedQueryKey>
  >({
    queryKey: getV1ApiIserverAccountPnlPartitionedQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.account.pnl.partitioned.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverAccountPnlPartitioned<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.api.iserver.account.pnl.partitioned.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.account.pnl.partitioned.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountPnlPartitionedQueryKey>
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
      ...getV1ApiIserverAccountPnlPartitionedQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverAccountPnlPartitioned<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.api.iserver.account.pnl.partitioned.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.account.pnl.partitioned.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountPnlPartitionedQueryKey>
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
      ...getV1ApiIserverAccountPnlPartitionedQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiIserverAccountSearchSearchPatternQueryKey(
  args: InferRequestType<(typeof client.v1.api.iserver.account.search)[':searchPattern']['$get']>,
) {
  return ['v1', '/v1/api/iserver/account/search/:searchPattern', args] as const
}

export function getV1ApiIserverAccountSearchSearchPatternQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.iserver.account.search)[':searchPattern']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.iserver.account.search)[':searchPattern']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.api.iserver.account.search)[':searchPattern']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverAccountSearchSearchPatternQueryKey>
  >({
    queryKey: getV1ApiIserverAccountSearchSearchPatternQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.account.search[':searchPattern'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverAccountSearchSearchPattern<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.iserver.account.search)[':searchPattern']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.iserver.account.search)[':searchPattern']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.api.iserver.account.search)[':searchPattern']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountSearchSearchPatternQueryKey>
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
      ...getV1ApiIserverAccountSearchSearchPatternQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverAccountSearchSearchPattern<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.iserver.account.search)[':searchPattern']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.iserver.account.search)[':searchPattern']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.api.iserver.account.search)[':searchPattern']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountSearchSearchPatternQueryKey>
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
      ...getV1ApiIserverAccountSearchSearchPatternQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiIserverAccountTradesQueryKey(
  args: InferRequestType<typeof client.v1.api.iserver.account.trades.$get>,
) {
  return ['v1', '/v1/api/iserver/account/trades', args] as const
}

export function getV1ApiIserverAccountTradesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.account.trades.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.account.trades.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.account.trades.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverAccountTradesQueryKey>
  >({
    queryKey: getV1ApiIserverAccountTradesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.account.trades.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverAccountTrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.account.trades.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.account.trades.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.account.trades.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountTradesQueryKey>
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
      ...getV1ApiIserverAccountTradesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverAccountTrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.account.trades.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.account.trades.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.account.trades.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountTradesQueryKey>
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
      ...getV1ApiIserverAccountTradesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiIserverAccountAccountIdAlertsQueryKey(
  args: InferRequestType<(typeof client.v1.api.iserver.account)[':accountId']['alerts']['$get']>,
) {
  return ['v1', '/v1/api/iserver/account/:accountId/alerts', args] as const
}

export function getV1ApiIserverAccountAccountIdAlertsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.iserver.account)[':accountId']['alerts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.iserver.account)[':accountId']['alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.api.iserver.account)[':accountId']['alerts']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverAccountAccountIdAlertsQueryKey>
  >({
    queryKey: getV1ApiIserverAccountAccountIdAlertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.account[':accountId'].alerts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverAccountAccountIdAlerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.iserver.account)[':accountId']['alerts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.iserver.account)[':accountId']['alerts']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.api.iserver.account)[':accountId']['alerts']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountAccountIdAlertsQueryKey>
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
      ...getV1ApiIserverAccountAccountIdAlertsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverAccountAccountIdAlerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.iserver.account)[':accountId']['alerts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.iserver.account)[':accountId']['alerts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.api.iserver.account)[':accountId']['alerts']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountAccountIdAlertsQueryKey>
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
      ...getV1ApiIserverAccountAccountIdAlertsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiIserverAccountAccountIdSummaryQueryKey(
  args: InferRequestType<(typeof client.v1.api.iserver.account)[':accountId']['summary']['$get']>,
) {
  return ['v1', '/v1/api/iserver/account/:accountId/summary', args] as const
}

export function getV1ApiIserverAccountAccountIdSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.iserver.account)[':accountId']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.iserver.account)[':accountId']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.api.iserver.account)[':accountId']['summary']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverAccountAccountIdSummaryQueryKey>
  >({
    queryKey: getV1ApiIserverAccountAccountIdSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.account[':accountId'].summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverAccountAccountIdSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.iserver.account)[':accountId']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.iserver.account)[':accountId']['summary']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.api.iserver.account)[':accountId']['summary']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountAccountIdSummaryQueryKey>
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
      ...getV1ApiIserverAccountAccountIdSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverAccountAccountIdSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.iserver.account)[':accountId']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.iserver.account)[':accountId']['summary']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.api.iserver.account)[':accountId']['summary']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountAccountIdSummaryQueryKey>
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
      ...getV1ApiIserverAccountAccountIdSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiIserverAccountAccountIdSummaryAvailableFundsQueryKey(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['available_funds']['$get']
  >,
) {
  return ['v1', '/v1/api/iserver/account/:accountId/summary/available_funds', args] as const
}

export function getV1ApiIserverAccountAccountIdSummaryAvailableFundsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.api.iserver.account)[':accountId']['summary']['available_funds']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['available_funds']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.api.iserver.account)[':accountId']['summary']['available_funds']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverAccountAccountIdSummaryAvailableFundsQueryKey>
  >({
    queryKey: getV1ApiIserverAccountAccountIdSummaryAvailableFundsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.account[':accountId'].summary.available_funds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverAccountAccountIdSummaryAvailableFunds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.api.iserver.account)[':accountId']['summary']['available_funds']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['available_funds']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.api.iserver.account)[':accountId']['summary']['available_funds']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountAccountIdSummaryAvailableFundsQueryKey>
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
      ...getV1ApiIserverAccountAccountIdSummaryAvailableFundsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverAccountAccountIdSummaryAvailableFunds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.api.iserver.account)[':accountId']['summary']['available_funds']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['available_funds']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.api.iserver.account)[':accountId']['summary']['available_funds']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountAccountIdSummaryAvailableFundsQueryKey>
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
      ...getV1ApiIserverAccountAccountIdSummaryAvailableFundsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiIserverAccountAccountIdSummaryBalancesQueryKey(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['balances']['$get']
  >,
) {
  return ['v1', '/v1/api/iserver/account/:accountId/summary/balances', args] as const
}

export function getV1ApiIserverAccountAccountIdSummaryBalancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.api.iserver.account)[':accountId']['summary']['balances']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['balances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.api.iserver.account)[':accountId']['summary']['balances']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverAccountAccountIdSummaryBalancesQueryKey>
  >({
    queryKey: getV1ApiIserverAccountAccountIdSummaryBalancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.account[':accountId'].summary.balances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverAccountAccountIdSummaryBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.api.iserver.account)[':accountId']['summary']['balances']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['balances']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.api.iserver.account)[':accountId']['summary']['balances']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountAccountIdSummaryBalancesQueryKey>
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
      ...getV1ApiIserverAccountAccountIdSummaryBalancesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverAccountAccountIdSummaryBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.api.iserver.account)[':accountId']['summary']['balances']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['balances']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.api.iserver.account)[':accountId']['summary']['balances']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountAccountIdSummaryBalancesQueryKey>
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
      ...getV1ApiIserverAccountAccountIdSummaryBalancesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiIserverAccountAccountIdSummaryMarginsQueryKey(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['margins']['$get']
  >,
) {
  return ['v1', '/v1/api/iserver/account/:accountId/summary/margins', args] as const
}

export function getV1ApiIserverAccountAccountIdSummaryMarginsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.api.iserver.account)[':accountId']['summary']['margins']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['margins']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.api.iserver.account)[':accountId']['summary']['margins']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverAccountAccountIdSummaryMarginsQueryKey>
  >({
    queryKey: getV1ApiIserverAccountAccountIdSummaryMarginsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.account[':accountId'].summary.margins.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverAccountAccountIdSummaryMargins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.api.iserver.account)[':accountId']['summary']['margins']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['margins']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.api.iserver.account)[':accountId']['summary']['margins']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountAccountIdSummaryMarginsQueryKey>
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
      ...getV1ApiIserverAccountAccountIdSummaryMarginsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverAccountAccountIdSummaryMargins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.api.iserver.account)[':accountId']['summary']['margins']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['margins']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.api.iserver.account)[':accountId']['summary']['margins']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountAccountIdSummaryMarginsQueryKey>
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
      ...getV1ApiIserverAccountAccountIdSummaryMarginsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiIserverAccountAccountIdSummaryMarketValueQueryKey(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['market_value']['$get']
  >,
) {
  return ['v1', '/v1/api/iserver/account/:accountId/summary/market_value', args] as const
}

export function getV1ApiIserverAccountAccountIdSummaryMarketValueQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.api.iserver.account)[':accountId']['summary']['market_value']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['market_value']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.api.iserver.account)[':accountId']['summary']['market_value']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverAccountAccountIdSummaryMarketValueQueryKey>
  >({
    queryKey: getV1ApiIserverAccountAccountIdSummaryMarketValueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.account[':accountId'].summary.market_value.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverAccountAccountIdSummaryMarketValue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.api.iserver.account)[':accountId']['summary']['market_value']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['market_value']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.api.iserver.account)[':accountId']['summary']['market_value']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountAccountIdSummaryMarketValueQueryKey>
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
      ...getV1ApiIserverAccountAccountIdSummaryMarketValueQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverAccountAccountIdSummaryMarketValue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.api.iserver.account)[':accountId']['summary']['market_value']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['market_value']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.api.iserver.account)[':accountId']['summary']['market_value']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountAccountIdSummaryMarketValueQueryKey>
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
      ...getV1ApiIserverAccountAccountIdSummaryMarketValueQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiIserverAccountsQueryKey() {
  return ['v1', '/v1/api/iserver/accounts'] as const
}

export function getV1ApiIserverAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.accounts.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.accounts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverAccountsQueryKey>
  >({
    queryKey: getV1ApiIserverAccountsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.accounts.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.accounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ApiIserverAccountsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.accounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ApiIserverAccountsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1ApiIserverContractConidAlgosQueryKey(
  args: InferRequestType<(typeof client.v1.api.iserver.contract)[':conid']['algos']['$get']>,
) {
  return ['v1', '/v1/api/iserver/contract/:conid/algos', args] as const
}

export function getV1ApiIserverContractConidAlgosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.iserver.contract)[':conid']['algos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.iserver.contract)[':conid']['algos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.iserver.contract)[':conid']['algos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverContractConidAlgosQueryKey>
  >({
    queryKey: getV1ApiIserverContractConidAlgosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.contract[':conid'].algos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverContractConidAlgos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.iserver.contract)[':conid']['algos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.iserver.contract)[':conid']['algos']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.api.iserver.contract)[':conid']['algos']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverContractConidAlgosQueryKey>
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
      ...getV1ApiIserverContractConidAlgosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverContractConidAlgos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.iserver.contract)[':conid']['algos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.iserver.contract)[':conid']['algos']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.api.iserver.contract)[':conid']['algos']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverContractConidAlgosQueryKey>
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
      ...getV1ApiIserverContractConidAlgosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiIserverContractConidInfoQueryKey(
  args: InferRequestType<(typeof client.v1.api.iserver.contract)[':conid']['info']['$get']>,
) {
  return ['v1', '/v1/api/iserver/contract/:conid/info', args] as const
}

export function getV1ApiIserverContractConidInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.iserver.contract)[':conid']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.iserver.contract)[':conid']['info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.iserver.contract)[':conid']['info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverContractConidInfoQueryKey>
  >({
    queryKey: getV1ApiIserverContractConidInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.contract[':conid'].info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverContractConidInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.iserver.contract)[':conid']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.iserver.contract)[':conid']['info']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.iserver.contract)[':conid']['info']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverContractConidInfoQueryKey>
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
      ...getV1ApiIserverContractConidInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverContractConidInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.iserver.contract)[':conid']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.iserver.contract)[':conid']['info']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.iserver.contract)[':conid']['info']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverContractConidInfoQueryKey>
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
      ...getV1ApiIserverContractConidInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiIserverContractConidInfoAndRulesQueryKey(
  args: InferRequestType<
    (typeof client.v1.api.iserver.contract)[':conid']['info-and-rules']['$get']
  >,
) {
  return ['v1', '/v1/api/iserver/contract/:conid/info-and-rules', args] as const
}

export function getV1ApiIserverContractConidInfoAndRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.api.iserver.contract)[':conid']['info-and-rules']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.api.iserver.contract)[':conid']['info-and-rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.api.iserver.contract)[':conid']['info-and-rules']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverContractConidInfoAndRulesQueryKey>
  >({
    queryKey: getV1ApiIserverContractConidInfoAndRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.contract[':conid']['info-and-rules'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverContractConidInfoAndRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.api.iserver.contract)[':conid']['info-and-rules']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.api.iserver.contract)[':conid']['info-and-rules']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.api.iserver.contract)[':conid']['info-and-rules']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverContractConidInfoAndRulesQueryKey>
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
      ...getV1ApiIserverContractConidInfoAndRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverContractConidInfoAndRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.api.iserver.contract)[':conid']['info-and-rules']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.api.iserver.contract)[':conid']['info-and-rules']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.api.iserver.contract)[':conid']['info-and-rules']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverContractConidInfoAndRulesQueryKey>
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
      ...getV1ApiIserverContractConidInfoAndRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiIserverCurrencyPairsQueryKey(
  args: InferRequestType<typeof client.v1.api.iserver.currency.pairs.$get>,
) {
  return ['v1', '/v1/api/iserver/currency/pairs', args] as const
}

export function getV1ApiIserverCurrencyPairsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.currency.pairs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.currency.pairs.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.currency.pairs.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverCurrencyPairsQueryKey>
  >({
    queryKey: getV1ApiIserverCurrencyPairsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.currency.pairs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverCurrencyPairs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.currency.pairs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.currency.pairs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.currency.pairs.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverCurrencyPairsQueryKey>
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
      ...getV1ApiIserverCurrencyPairsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverCurrencyPairs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.currency.pairs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.currency.pairs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.currency.pairs.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverCurrencyPairsQueryKey>
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
      ...getV1ApiIserverCurrencyPairsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiIserverExchangerateQueryKey(
  args: InferRequestType<typeof client.v1.api.iserver.exchangerate.$get>,
) {
  return ['v1', '/v1/api/iserver/exchangerate', args] as const
}

export function getV1ApiIserverExchangerateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.exchangerate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.exchangerate.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.exchangerate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverExchangerateQueryKey>
  >({
    queryKey: getV1ApiIserverExchangerateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.exchangerate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverExchangerate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.exchangerate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.exchangerate.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.exchangerate.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverExchangerateQueryKey>
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
      ...getV1ApiIserverExchangerateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverExchangerate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.exchangerate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.exchangerate.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.exchangerate.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverExchangerateQueryKey>
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
      ...getV1ApiIserverExchangerateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiIserverMarketdataHistoryQueryKey(
  args: InferRequestType<typeof client.v1.api.iserver.marketdata.history.$get>,
) {
  return ['v1', '/v1/api/iserver/marketdata/history', args] as const
}

export function getV1ApiIserverMarketdataHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.history.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.marketdata.history.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.history.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverMarketdataHistoryQueryKey>
  >({
    queryKey: getV1ApiIserverMarketdataHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.marketdata.history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverMarketdataHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.history.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.marketdata.history.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.history.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverMarketdataHistoryQueryKey>
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
      ...getV1ApiIserverMarketdataHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverMarketdataHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.history.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.marketdata.history.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.history.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverMarketdataHistoryQueryKey>
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
      ...getV1ApiIserverMarketdataHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiIserverMarketdataSnapshotQueryKey(
  args: InferRequestType<typeof client.v1.api.iserver.marketdata.snapshot.$get>,
) {
  return ['v1', '/v1/api/iserver/marketdata/snapshot', args] as const
}

export function getV1ApiIserverMarketdataSnapshotQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.snapshot.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.marketdata.snapshot.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.snapshot.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverMarketdataSnapshotQueryKey>
  >({
    queryKey: getV1ApiIserverMarketdataSnapshotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.marketdata.snapshot.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverMarketdataSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.snapshot.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.marketdata.snapshot.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.snapshot.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverMarketdataSnapshotQueryKey>
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
      ...getV1ApiIserverMarketdataSnapshotQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverMarketdataSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.snapshot.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.marketdata.snapshot.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.snapshot.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverMarketdataSnapshotQueryKey>
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
      ...getV1ApiIserverMarketdataSnapshotQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiIserverMarketdataUnsubscribeallQueryKey() {
  return ['v1', '/v1/api/iserver/marketdata/unsubscribeall'] as const
}

export function getV1ApiIserverMarketdataUnsubscribeallQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.unsubscribeall.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.unsubscribeall.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverMarketdataUnsubscribeallQueryKey>
  >({
    queryKey: getV1ApiIserverMarketdataUnsubscribeallQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.marketdata.unsubscribeall.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverMarketdataUnsubscribeall<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.unsubscribeall.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.unsubscribeall.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverMarketdataUnsubscribeallQueryKey>
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
      ...getV1ApiIserverMarketdataUnsubscribeallQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverMarketdataUnsubscribeall<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.unsubscribeall.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.unsubscribeall.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverMarketdataUnsubscribeallQueryKey>
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
      ...getV1ApiIserverMarketdataUnsubscribeallQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiIserverScannerParamsQueryKey() {
  return ['v1', '/v1/api/iserver/scanner/params'] as const
}

export function getV1ApiIserverScannerParamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.scanner.params.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.scanner.params.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverScannerParamsQueryKey>
  >({
    queryKey: getV1ApiIserverScannerParamsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.scanner.params.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverScannerParams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.scanner.params.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.scanner.params.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverScannerParamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ApiIserverScannerParamsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverScannerParams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.scanner.params.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.scanner.params.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverScannerParamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ApiIserverScannerParamsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1ApiIserverSecdefBondFiltersQueryKey(
  args: InferRequestType<(typeof client.v1.api.iserver.secdef)['bond-filters']['$get']>,
) {
  return ['v1', '/v1/api/iserver/secdef/bond-filters', args] as const
}

export function getV1ApiIserverSecdefBondFiltersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.iserver.secdef)['bond-filters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.iserver.secdef)['bond-filters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.iserver.secdef)['bond-filters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverSecdefBondFiltersQueryKey>
  >({
    queryKey: getV1ApiIserverSecdefBondFiltersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.secdef['bond-filters'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverSecdefBondFilters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.iserver.secdef)['bond-filters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.iserver.secdef)['bond-filters']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.iserver.secdef)['bond-filters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverSecdefBondFiltersQueryKey>
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
      ...getV1ApiIserverSecdefBondFiltersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverSecdefBondFilters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.iserver.secdef)['bond-filters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.iserver.secdef)['bond-filters']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.iserver.secdef)['bond-filters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverSecdefBondFiltersQueryKey>
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
      ...getV1ApiIserverSecdefBondFiltersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiIserverSecdefInfoQueryKey(
  args: InferRequestType<typeof client.v1.api.iserver.secdef.info.$get>,
) {
  return ['v1', '/v1/api/iserver/secdef/info', args] as const
}

export function getV1ApiIserverSecdefInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.secdef.info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.secdef.info.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.secdef.info.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverSecdefInfoQueryKey>
  >({
    queryKey: getV1ApiIserverSecdefInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.secdef.info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverSecdefInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.secdef.info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.secdef.info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.secdef.info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverSecdefInfoQueryKey>
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
      ...getV1ApiIserverSecdefInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverSecdefInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.secdef.info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.secdef.info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.secdef.info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverSecdefInfoQueryKey>
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
      ...getV1ApiIserverSecdefInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiIserverSecdefStrikesQueryKey(
  args: InferRequestType<typeof client.v1.api.iserver.secdef.strikes.$get>,
) {
  return ['v1', '/v1/api/iserver/secdef/strikes', args] as const
}

export function getV1ApiIserverSecdefStrikesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.secdef.strikes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.secdef.strikes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.secdef.strikes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverSecdefStrikesQueryKey>
  >({
    queryKey: getV1ApiIserverSecdefStrikesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.secdef.strikes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverSecdefStrikes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.secdef.strikes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.secdef.strikes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.secdef.strikes.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverSecdefStrikesQueryKey>
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
      ...getV1ApiIserverSecdefStrikesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverSecdefStrikes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.secdef.strikes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.secdef.strikes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.iserver.secdef.strikes.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverSecdefStrikesQueryKey>
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
      ...getV1ApiIserverSecdefStrikesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiIserverWatchlistsQueryKey(
  args: InferRequestType<typeof client.v1.api.iserver.watchlists.$get>,
) {
  return ['v1', '/v1/api/iserver/watchlists', args] as const
}

export function getV1ApiIserverWatchlistsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.watchlists.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.watchlists.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.watchlists.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiIserverWatchlistsQueryKey>
  >({
    queryKey: getV1ApiIserverWatchlistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.iserver.watchlists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiIserverWatchlists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.watchlists.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.watchlists.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.watchlists.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverWatchlistsQueryKey>
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
      ...getV1ApiIserverWatchlistsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiIserverWatchlists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.watchlists.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.iserver.watchlists.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.watchlists.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiIserverWatchlistsQueryKey>
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
      ...getV1ApiIserverWatchlistsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiPortfolioAccountsQueryKey() {
  return ['v1', '/v1/api/portfolio/accounts'] as const
}

export function getV1ApiPortfolioAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.portfolio.accounts.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.portfolio.accounts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiPortfolioAccountsQueryKey>
  >({
    queryKey: getV1ApiPortfolioAccountsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.portfolio.accounts.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiPortfolioAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.portfolio.accounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.portfolio.accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiPortfolioAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ApiPortfolioAccountsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ApiPortfolioAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.portfolio.accounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.portfolio.accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiPortfolioAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ApiPortfolioAccountsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1ApiPortfolioPositionsConidQueryKey(
  args: InferRequestType<(typeof client.v1.api.portfolio.positions)[':conid']['$get']>,
) {
  return ['v1', '/v1/api/portfolio/positions/:conid', args] as const
}

export function getV1ApiPortfolioPositionsConidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.portfolio.positions)[':conid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.portfolio.positions)[':conid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.portfolio.positions)[':conid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiPortfolioPositionsConidQueryKey>
  >({
    queryKey: getV1ApiPortfolioPositionsConidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.portfolio.positions[':conid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiPortfolioPositionsConid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.portfolio.positions)[':conid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.portfolio.positions)[':conid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.portfolio.positions)[':conid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiPortfolioPositionsConidQueryKey>
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
      ...getV1ApiPortfolioPositionsConidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiPortfolioPositionsConid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.portfolio.positions)[':conid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.portfolio.positions)[':conid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.portfolio.positions)[':conid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiPortfolioPositionsConidQueryKey>
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
      ...getV1ApiPortfolioPositionsConidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiPortfolioSubaccountsQueryKey() {
  return ['v1', '/v1/api/portfolio/subaccounts'] as const
}

export function getV1ApiPortfolioSubaccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.portfolio.subaccounts.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.portfolio.subaccounts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiPortfolioSubaccountsQueryKey>
  >({
    queryKey: getV1ApiPortfolioSubaccountsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.portfolio.subaccounts.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiPortfolioSubaccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.portfolio.subaccounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.portfolio.subaccounts.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiPortfolioSubaccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ApiPortfolioSubaccountsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ApiPortfolioSubaccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.portfolio.subaccounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.portfolio.subaccounts.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiPortfolioSubaccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ApiPortfolioSubaccountsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1ApiPortfolioSubaccounts2QueryKey(
  args: InferRequestType<typeof client.v1.api.portfolio.subaccounts2.$get>,
) {
  return ['v1', '/v1/api/portfolio/subaccounts2', args] as const
}

export function getV1ApiPortfolioSubaccounts2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.portfolio.subaccounts2.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.portfolio.subaccounts2.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.portfolio.subaccounts2.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiPortfolioSubaccounts2QueryKey>
  >({
    queryKey: getV1ApiPortfolioSubaccounts2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.portfolio.subaccounts2.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiPortfolioSubaccounts2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.portfolio.subaccounts2.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.portfolio.subaccounts2.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.portfolio.subaccounts2.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiPortfolioSubaccounts2QueryKey>
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
      ...getV1ApiPortfolioSubaccounts2QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiPortfolioSubaccounts2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.portfolio.subaccounts2.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.portfolio.subaccounts2.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.portfolio.subaccounts2.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiPortfolioSubaccounts2QueryKey>
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
      ...getV1ApiPortfolioSubaccounts2QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiPortfolioAccountIdAllocationQueryKey(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['allocation']['$get']>,
) {
  return ['v1', '/v1/api/portfolio/:accountId/allocation', args] as const
}

export function getV1ApiPortfolioAccountIdAllocationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['allocation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['allocation']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['allocation']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiPortfolioAccountIdAllocationQueryKey>
  >({
    queryKey: getV1ApiPortfolioAccountIdAllocationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.portfolio[':accountId'].allocation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiPortfolioAccountIdAllocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['allocation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['allocation']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.api.portfolio)[':accountId']['allocation']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiPortfolioAccountIdAllocationQueryKey>
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
      ...getV1ApiPortfolioAccountIdAllocationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiPortfolioAccountIdAllocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['allocation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['allocation']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.api.portfolio)[':accountId']['allocation']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiPortfolioAccountIdAllocationQueryKey>
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
      ...getV1ApiPortfolioAccountIdAllocationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiPortfolioAccountIdComboPositionsQueryKey(
  args: InferRequestType<
    (typeof client.v1.api.portfolio)[':accountId']['combo']['positions']['$get']
  >,
) {
  return ['v1', '/v1/api/portfolio/:accountId/combo/positions', args] as const
}

export function getV1ApiPortfolioAccountIdComboPositionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.api.portfolio)[':accountId']['combo']['positions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.api.portfolio)[':accountId']['combo']['positions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.api.portfolio)[':accountId']['combo']['positions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiPortfolioAccountIdComboPositionsQueryKey>
  >({
    queryKey: getV1ApiPortfolioAccountIdComboPositionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.portfolio[':accountId'].combo.positions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiPortfolioAccountIdComboPositions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.api.portfolio)[':accountId']['combo']['positions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.api.portfolio)[':accountId']['combo']['positions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.api.portfolio)[':accountId']['combo']['positions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiPortfolioAccountIdComboPositionsQueryKey>
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
      ...getV1ApiPortfolioAccountIdComboPositionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiPortfolioAccountIdComboPositions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.api.portfolio)[':accountId']['combo']['positions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.api.portfolio)[':accountId']['combo']['positions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.api.portfolio)[':accountId']['combo']['positions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiPortfolioAccountIdComboPositionsQueryKey>
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
      ...getV1ApiPortfolioAccountIdComboPositionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiPortfolioAccountIdLedgerQueryKey(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['ledger']['$get']>,
) {
  return ['v1', '/v1/api/portfolio/:accountId/ledger', args] as const
}

export function getV1ApiPortfolioAccountIdLedgerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['ledger']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['ledger']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['ledger']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiPortfolioAccountIdLedgerQueryKey>
  >({
    queryKey: getV1ApiPortfolioAccountIdLedgerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.portfolio[':accountId'].ledger.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiPortfolioAccountIdLedger<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['ledger']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['ledger']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['ledger']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiPortfolioAccountIdLedgerQueryKey>
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
      ...getV1ApiPortfolioAccountIdLedgerQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiPortfolioAccountIdLedger<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['ledger']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['ledger']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['ledger']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiPortfolioAccountIdLedgerQueryKey>
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
      ...getV1ApiPortfolioAccountIdLedgerQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiPortfolioAccountIdMetaQueryKey(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['meta']['$get']>,
) {
  return ['v1', '/v1/api/portfolio/:accountId/meta', args] as const
}

export function getV1ApiPortfolioAccountIdMetaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['meta']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['meta']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['meta']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiPortfolioAccountIdMetaQueryKey>
  >({
    queryKey: getV1ApiPortfolioAccountIdMetaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.portfolio[':accountId'].meta.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiPortfolioAccountIdMeta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['meta']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['meta']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['meta']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiPortfolioAccountIdMetaQueryKey>
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
      ...getV1ApiPortfolioAccountIdMetaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiPortfolioAccountIdMeta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['meta']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['meta']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['meta']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiPortfolioAccountIdMetaQueryKey>
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
      ...getV1ApiPortfolioAccountIdMetaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiPortfolioAccountIdPositionConidQueryKey(
  args: InferRequestType<
    (typeof client.v1.api.portfolio)[':accountId']['position'][':conid']['$get']
  >,
) {
  return ['v1', '/v1/api/portfolio/:accountId/position/:conid', args] as const
}

export function getV1ApiPortfolioAccountIdPositionConidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.api.portfolio)[':accountId']['position'][':conid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.api.portfolio)[':accountId']['position'][':conid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.api.portfolio)[':accountId']['position'][':conid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiPortfolioAccountIdPositionConidQueryKey>
  >({
    queryKey: getV1ApiPortfolioAccountIdPositionConidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.portfolio[':accountId'].position[':conid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiPortfolioAccountIdPositionConid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.api.portfolio)[':accountId']['position'][':conid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.api.portfolio)[':accountId']['position'][':conid']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.api.portfolio)[':accountId']['position'][':conid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiPortfolioAccountIdPositionConidQueryKey>
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
      ...getV1ApiPortfolioAccountIdPositionConidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiPortfolioAccountIdPositionConid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.api.portfolio)[':accountId']['position'][':conid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.api.portfolio)[':accountId']['position'][':conid']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.api.portfolio)[':accountId']['position'][':conid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiPortfolioAccountIdPositionConidQueryKey>
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
      ...getV1ApiPortfolioAccountIdPositionConidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiPortfolioAccountIdPositionsPageIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.api.portfolio)[':accountId']['positions'][':pageId']['$get']
  >,
) {
  return ['v1', '/v1/api/portfolio/:accountId/positions/:pageId', args] as const
}

export function getV1ApiPortfolioAccountIdPositionsPageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.api.portfolio)[':accountId']['positions'][':pageId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.api.portfolio)[':accountId']['positions'][':pageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.api.portfolio)[':accountId']['positions'][':pageId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiPortfolioAccountIdPositionsPageIdQueryKey>
  >({
    queryKey: getV1ApiPortfolioAccountIdPositionsPageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.portfolio[':accountId'].positions[':pageId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiPortfolioAccountIdPositionsPageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.api.portfolio)[':accountId']['positions'][':pageId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.api.portfolio)[':accountId']['positions'][':pageId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.api.portfolio)[':accountId']['positions'][':pageId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiPortfolioAccountIdPositionsPageIdQueryKey>
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
      ...getV1ApiPortfolioAccountIdPositionsPageIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiPortfolioAccountIdPositionsPageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.api.portfolio)[':accountId']['positions'][':pageId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.api.portfolio)[':accountId']['positions'][':pageId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.api.portfolio)[':accountId']['positions'][':pageId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiPortfolioAccountIdPositionsPageIdQueryKey>
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
      ...getV1ApiPortfolioAccountIdPositionsPageIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiPortfolioAccountIdSummaryQueryKey(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['summary']['$get']>,
) {
  return ['v1', '/v1/api/portfolio/:accountId/summary', args] as const
}

export function getV1ApiPortfolioAccountIdSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['summary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiPortfolioAccountIdSummaryQueryKey>
  >({
    queryKey: getV1ApiPortfolioAccountIdSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.portfolio[':accountId'].summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiPortfolioAccountIdSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['summary']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['summary']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiPortfolioAccountIdSummaryQueryKey>
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
      ...getV1ApiPortfolioAccountIdSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiPortfolioAccountIdSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['summary']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['summary']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiPortfolioAccountIdSummaryQueryKey>
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
      ...getV1ApiPortfolioAccountIdSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiPortfolio2AccountIdPositionsQueryKey(
  args: InferRequestType<(typeof client.v1.api.portfolio2)[':accountId']['positions']['$get']>,
) {
  return ['v1', '/v1/api/portfolio2/:accountId/positions', args] as const
}

export function getV1ApiPortfolio2AccountIdPositionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.portfolio2)[':accountId']['positions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.portfolio2)[':accountId']['positions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.portfolio2)[':accountId']['positions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiPortfolio2AccountIdPositionsQueryKey>
  >({
    queryKey: getV1ApiPortfolio2AccountIdPositionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.portfolio2[':accountId'].positions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiPortfolio2AccountIdPositions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.portfolio2)[':accountId']['positions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.portfolio2)[':accountId']['positions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.api.portfolio2)[':accountId']['positions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiPortfolio2AccountIdPositionsQueryKey>
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
      ...getV1ApiPortfolio2AccountIdPositionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiPortfolio2AccountIdPositions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.api.portfolio2)[':accountId']['positions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.portfolio2)[':accountId']['positions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.api.portfolio2)[':accountId']['positions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiPortfolio2AccountIdPositionsQueryKey>
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
      ...getV1ApiPortfolio2AccountIdPositionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiSsoValidateQueryKey() {
  return ['v1', '/v1/api/sso/validate'] as const
}

export function getV1ApiSsoValidateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.sso.validate.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.sso.validate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiSsoValidateQueryKey>
  >({
    queryKey: getV1ApiSsoValidateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.sso.validate.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiSsoValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.sso.validate.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.sso.validate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiSsoValidateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ApiSsoValidateQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ApiSsoValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.sso.validate.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.sso.validate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiSsoValidateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ApiSsoValidateQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1ApiTrsrvAllConidsQueryKey(
  args: InferRequestType<(typeof client.v1.api.trsrv)['all-conids']['$get']>,
) {
  return ['v1', '/v1/api/trsrv/all-conids', args] as const
}

export function getV1ApiTrsrvAllConidsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.api.trsrv)['all-conids']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.trsrv)['all-conids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.trsrv)['all-conids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiTrsrvAllConidsQueryKey>
  >({
    queryKey: getV1ApiTrsrvAllConidsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.trsrv['all-conids'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiTrsrvAllConids<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.api.trsrv)['all-conids']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.trsrv)['all-conids']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.trsrv)['all-conids']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiTrsrvAllConidsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ApiTrsrvAllConidsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ApiTrsrvAllConids<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.api.trsrv)['all-conids']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.api.trsrv)['all-conids']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.api.trsrv)['all-conids']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiTrsrvAllConidsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ApiTrsrvAllConidsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1ApiTrsrvFuturesQueryKey(
  args: InferRequestType<typeof client.v1.api.trsrv.futures.$get>,
) {
  return ['v1', '/v1/api/trsrv/futures', args] as const
}

export function getV1ApiTrsrvFuturesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.futures.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.api.trsrv.futures.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.futures.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiTrsrvFuturesQueryKey>
  >({
    queryKey: getV1ApiTrsrvFuturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.trsrv.futures.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1ApiTrsrvFutures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.futures.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.trsrv.futures.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.futures.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiTrsrvFuturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ApiTrsrvFuturesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ApiTrsrvFutures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.futures.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.trsrv.futures.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.futures.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiTrsrvFuturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ApiTrsrvFuturesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1ApiTrsrvSecdefQueryKey(
  args: InferRequestType<typeof client.v1.api.trsrv.secdef.$get>,
) {
  return ['v1', '/v1/api/trsrv/secdef', args] as const
}

export function getV1ApiTrsrvSecdefQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.secdef.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.api.trsrv.secdef.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.secdef.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiTrsrvSecdefQueryKey>
  >({
    queryKey: getV1ApiTrsrvSecdefQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.trsrv.secdef.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1ApiTrsrvSecdef<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.secdef.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.trsrv.secdef.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.secdef.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiTrsrvSecdefQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ApiTrsrvSecdefQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ApiTrsrvSecdef<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.secdef.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.trsrv.secdef.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.secdef.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiTrsrvSecdefQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ApiTrsrvSecdefQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1ApiTrsrvSecdefScheduleQueryKey(
  args: InferRequestType<typeof client.v1.api.trsrv.secdef.schedule.$get>,
) {
  return ['v1', '/v1/api/trsrv/secdef/schedule', args] as const
}

export function getV1ApiTrsrvSecdefScheduleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.secdef.schedule.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.trsrv.secdef.schedule.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.secdef.schedule.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiTrsrvSecdefScheduleQueryKey>
  >({
    queryKey: getV1ApiTrsrvSecdefScheduleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.trsrv.secdef.schedule.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ApiTrsrvSecdefSchedule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.secdef.schedule.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.trsrv.secdef.schedule.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.trsrv.secdef.schedule.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiTrsrvSecdefScheduleQueryKey>
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
      ...getV1ApiTrsrvSecdefScheduleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ApiTrsrvSecdefSchedule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.secdef.schedule.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.trsrv.secdef.schedule.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.trsrv.secdef.schedule.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiTrsrvSecdefScheduleQueryKey>
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
      ...getV1ApiTrsrvSecdefScheduleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ApiTrsrvStocksQueryKey(
  args: InferRequestType<typeof client.v1.api.trsrv.stocks.$get>,
) {
  return ['v1', '/v1/api/trsrv/stocks', args] as const
}

export function getV1ApiTrsrvStocksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.stocks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.api.trsrv.stocks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.stocks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApiTrsrvStocksQueryKey>
  >({
    queryKey: getV1ApiTrsrvStocksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.trsrv.stocks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1ApiTrsrvStocks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.stocks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.trsrv.stocks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.stocks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiTrsrvStocksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ApiTrsrvStocksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ApiTrsrvStocks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.stocks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.trsrv.stocks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.stocks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiTrsrvStocksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ApiTrsrvStocksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1ApiWsQueryKey(args: InferRequestType<typeof client.v1.api.ws.$get>) {
  const { header: _, cookie: __, ...keyArgs } = args
  return ['v1', '/v1/api/ws', keyArgs] as const
}

export function getV1ApiWsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.ws.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.api.ws.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.ws.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ApiWsQueryKey>
  >({
    queryKey: getV1ApiWsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.api.ws.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1ApiWs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.ws.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.ws.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.ws.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiWsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ApiWsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ApiWs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.ws.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.api.ws.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.ws.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ApiWsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ApiWsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1ApiFyiDeliveryoptionsEmailMutationKey() {
  return ['v1', '/v1/api/fyi/deliveryoptions/email', 'PUT'] as const
}

export function getPutV1ApiFyiDeliveryoptionsEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.fyi.deliveryoptions.email.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api.fyi.deliveryoptions.email.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ApiFyiDeliveryoptionsEmailMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.api.fyi.deliveryoptions.email.$put>) {
      return parseResponse(client.v1.api.fyi.deliveryoptions.email.$put(args, options))
    },
  })
}

export function usePutV1ApiFyiDeliveryoptionsEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.api.fyi.deliveryoptions.email.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api.fyi.deliveryoptions.email.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ApiFyiDeliveryoptionsEmailMutationOptions<
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

export function getPutV1ApiFyiNotificationsNotificationIdMutationKey() {
  return ['v1', '/v1/api/fyi/notifications/:notificationId', 'PUT'] as const
}

export function getPutV1ApiFyiNotificationsNotificationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fyi.notifications)[':notificationId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.api.fyi.notifications)[':notificationId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ApiFyiNotificationsNotificationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.api.fyi.notifications)[':notificationId']['$put']>,
    ) {
      return parseResponse(client.v1.api.fyi.notifications[':notificationId'].$put(args, options))
    },
  })
}

export function usePutV1ApiFyiNotificationsNotificationId<
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
                ReturnType<(typeof client.v1.api.fyi.notifications)[':notificationId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.api.fyi.notifications)[':notificationId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ApiFyiNotificationsNotificationIdMutationOptions<
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

export function getDeleteV1ApiFyiDeliveryoptionsDeviceIdMutationKey() {
  return ['v1', '/v1/api/fyi/deliveryoptions/:deviceId', 'DELETE'] as const
}

export function getDeleteV1ApiFyiDeliveryoptionsDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fyi.deliveryoptions)[':deviceId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.api.fyi.deliveryoptions)[':deviceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ApiFyiDeliveryoptionsDeviceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.api.fyi.deliveryoptions)[':deviceId']['$delete']>,
    ) {
      return parseResponse(client.v1.api.fyi.deliveryoptions[':deviceId'].$delete(args, options))
    },
  })
}

export function useDeleteV1ApiFyiDeliveryoptionsDeviceId<
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
                ReturnType<(typeof client.v1.api.fyi.deliveryoptions)[':deviceId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.api.fyi.deliveryoptions)[':deviceId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ApiFyiDeliveryoptionsDeviceIdMutationOptions<
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

export function getDeleteV1ApiIserverAccountAccountIdAlertAlertIdMutationKey() {
  return ['v1', '/v1/api/iserver/account/:accountId/alert/:alertId', 'DELETE'] as const
}

export function getDeleteV1ApiIserverAccountAccountIdAlertAlertIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.api.iserver.account)[':accountId']['alert'][':alertId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.api.iserver.account)[':accountId']['alert'][':alertId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ApiIserverAccountAccountIdAlertAlertIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.api.iserver.account)[':accountId']['alert'][':alertId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.api.iserver.account[':accountId'].alert[':alertId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ApiIserverAccountAccountIdAlertAlertId<
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
                  (typeof client.v1.api.iserver.account)[':accountId']['alert'][':alertId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.api.iserver.account)[':accountId']['alert'][':alertId']['$delete']
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
  const mutationDefaults = getDeleteV1ApiIserverAccountAccountIdAlertAlertIdMutationOptions<
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
