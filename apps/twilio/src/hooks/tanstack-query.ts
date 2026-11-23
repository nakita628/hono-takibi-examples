import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_2010_04_01Key() {
  return ['2010-04-01'] as const
}

export function get20100401AccountsJsonQueryKey(
  args: InferRequestType<(typeof client)['2010-04-01']['Accounts.json']['$get']>,
) {
  return ['2010-04-01', '/2010-04-01/Accounts.json', args] as const
}

export function get20100401AccountsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2010-04-01']['Accounts.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsJsonQueryKey>
  >({
    queryKey: get20100401AccountsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01']['Accounts.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2010-04-01']['Accounts.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...get20100401AccountsJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense20100401AccountsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2010-04-01']['Accounts.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...get20100401AccountsJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPost20100401AccountsJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts.json', 'POST'] as const
}

export function getPost20100401AccountsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2010-04-01']['Accounts.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2010-04-01']['Accounts.json']['$post']>,
    ) {
      return parseResponse(client['2010-04-01']['Accounts.json'].$post(args, options))
    },
  })
}

export function usePost20100401AccountsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts.json']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2010-04-01']['Accounts.json']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20100401AccountsJsonMutationOptions<TError, TOnMutateResult>(
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

export function get20100401AccountsSidJsonQueryKey(
  args: InferRequestType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$get']>,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:Sid.json', args] as const
}

export function get20100401AccountsSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsSidJsonQueryKey>
  >({
    queryKey: get20100401AccountsSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':Sid.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsSidJsonQueryKey>
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
      ...get20100401AccountsSidJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsSidJsonQueryKey>
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
      ...get20100401AccountsSidJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsSidJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:Sid.json', 'POST'] as const
}

export function getPost20100401AccountsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$post']>,
    ) {
      return parseResponse(client['2010-04-01'].Accounts[':Sid.json'].$post(args, options))
    },
  })
}

export function usePost20100401AccountsSidJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20100401AccountsSidJsonMutationOptions<TError, TOnMutateResult>(
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

export function get20100401AccountsAccountSidAddressesJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Addresses.json', args] as const
}

export function get20100401AccountsAccountSidAddressesJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidAddressesJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidAddressesJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Addresses.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidAddressesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidAddressesJsonQueryKey>
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
      ...get20100401AccountsAccountSidAddressesJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidAddressesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidAddressesJsonQueryKey>
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
      ...get20100401AccountsAccountSidAddressesJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidAddressesJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Addresses.json', 'POST'] as const
}

export function getPost20100401AccountsAccountSidAddressesJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidAddressesJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Addresses.json'].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidAddressesJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidAddressesJsonMutationOptions<
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

export function get20100401AccountsAccountSidAddressesSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Addresses/:Sid.json', args] as const
}

export function get20100401AccountsAccountSidAddressesSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidAddressesSidJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidAddressesSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Addresses[':Sid.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidAddressesSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidAddressesSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidAddressesSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidAddressesSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidAddressesSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidAddressesSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidAddressesSidJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Addresses/:Sid.json', 'POST'] as const
}

export function getPost20100401AccountsAccountSidAddressesSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidAddressesSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Addresses[':Sid.json'].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidAddressesSidJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidAddressesSidJsonMutationOptions<
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

export function getDelete20100401AccountsAccountSidAddressesSidJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Addresses/:Sid.json', 'DELETE'] as const
}

export function getDelete20100401AccountsAccountSidAddressesSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20100401AccountsAccountSidAddressesSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Addresses[':Sid.json'].$delete(args, options),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidAddressesSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$delete']
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
  const mutationDefaults = getDelete20100401AccountsAccountSidAddressesSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidApplicationsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Applications.json', args] as const
}

export function get20100401AccountsAccountSidApplicationsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidApplicationsJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidApplicationsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Applications.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidApplicationsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidApplicationsJsonQueryKey>
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
      ...get20100401AccountsAccountSidApplicationsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidApplicationsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidApplicationsJsonQueryKey>
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
      ...get20100401AccountsAccountSidApplicationsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidApplicationsJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Applications.json', 'POST'] as const
}

export function getPost20100401AccountsAccountSidApplicationsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidApplicationsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Applications.json'].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidApplicationsJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidApplicationsJsonMutationOptions<
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

export function get20100401AccountsAccountSidApplicationsSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Applications/:Sid.json', args] as const
}

export function get20100401AccountsAccountSidApplicationsSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidApplicationsSidJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidApplicationsSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Applications[':Sid.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidApplicationsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidApplicationsSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidApplicationsSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidApplicationsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidApplicationsSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidApplicationsSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidApplicationsSidJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Applications/:Sid.json', 'POST'] as const
}

export function getPost20100401AccountsAccountSidApplicationsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidApplicationsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Applications[':Sid.json'].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidApplicationsSidJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidApplicationsSidJsonMutationOptions<
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

export function getDelete20100401AccountsAccountSidApplicationsSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Applications/:Sid.json',
    'DELETE',
  ] as const
}

export function getDelete20100401AccountsAccountSidApplicationsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20100401AccountsAccountSidApplicationsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Applications[':Sid.json'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidApplicationsSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$delete']
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
  const mutationDefaults = getDelete20100401AccountsAccountSidApplicationsSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidAuthorizedConnectAppsConnectAppSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps'][':ConnectAppSid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AuthorizedConnectApps/:ConnectAppSid.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidAuthorizedConnectAppsConnectAppSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps'][':ConnectAppSid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps'][':ConnectAppSid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps'][':ConnectAppSid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidAuthorizedConnectAppsConnectAppSidJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidAuthorizedConnectAppsConnectAppSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].AuthorizedConnectApps[
          ':ConnectAppSid.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidAuthorizedConnectAppsConnectAppSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps'][':ConnectAppSid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps'][':ConnectAppSid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps'][':ConnectAppSid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidAuthorizedConnectAppsConnectAppSidJsonQueryKey
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
      ...get20100401AccountsAccountSidAuthorizedConnectAppsConnectAppSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidAuthorizedConnectAppsConnectAppSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps'][':ConnectAppSid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps'][':ConnectAppSid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps'][':ConnectAppSid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidAuthorizedConnectAppsConnectAppSidJsonQueryKey
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
      ...get20100401AccountsAccountSidAuthorizedConnectAppsConnectAppSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidAuthorizedConnectAppsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AuthorizedConnectApps.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidAuthorizedConnectAppsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidAuthorizedConnectAppsJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidAuthorizedConnectAppsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['AuthorizedConnectApps.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidAuthorizedConnectAppsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidAuthorizedConnectAppsJsonQueryKey>
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
      ...get20100401AccountsAccountSidAuthorizedConnectAppsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidAuthorizedConnectAppsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidAuthorizedConnectAppsJsonQueryKey>
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
      ...get20100401AccountsAccountSidAuthorizedConnectAppsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidAvailablePhoneNumbersJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidAvailablePhoneNumbersJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['AvailablePhoneNumbers.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidAvailablePhoneNumbersJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidAvailablePhoneNumbersJsonQueryKey>
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
      ...get20100401AccountsAccountSidAvailablePhoneNumbersJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidAvailablePhoneNumbersJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidAvailablePhoneNumbersJsonQueryKey>
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
      ...get20100401AccountsAccountSidAvailablePhoneNumbersJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[
          ':CountryCode.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeJsonQueryKey>
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
      ...get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeJsonQueryKey>
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
      ...get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeLocalJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Local.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/Local.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeLocalJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Local.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Local.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Local.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeLocalJsonQueryKey
    >
  >({
    queryKey: get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeLocalJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
          'Local.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeLocalJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Local.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Local.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Local.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeLocalJsonQueryKey
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
      ...get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeLocalJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeLocalJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Local.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Local.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Local.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeLocalJsonQueryKey
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
      ...get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeLocalJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMachineToMachineJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['MachineToMachine.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/MachineToMachine.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMachineToMachineJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['MachineToMachine.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['MachineToMachine.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['MachineToMachine.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMachineToMachineJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMachineToMachineJsonQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
          'MachineToMachine.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMachineToMachineJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['MachineToMachine.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['MachineToMachine.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['MachineToMachine.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMachineToMachineJsonQueryKey
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
      ...get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMachineToMachineJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMachineToMachineJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['MachineToMachine.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['MachineToMachine.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['MachineToMachine.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMachineToMachineJsonQueryKey
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
      ...get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMachineToMachineJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMobileJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Mobile.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/Mobile.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMobileJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Mobile.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Mobile.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Mobile.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMobileJsonQueryKey
    >
  >({
    queryKey: get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMobileJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
          'Mobile.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMobileJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Mobile.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Mobile.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Mobile.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMobileJsonQueryKey
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
      ...get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMobileJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMobileJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Mobile.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Mobile.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Mobile.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMobileJsonQueryKey
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
      ...get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMobileJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeNationalJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['National.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/National.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeNationalJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['National.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['National.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['National.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeNationalJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeNationalJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
          'National.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeNationalJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['National.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['National.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['National.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeNationalJsonQueryKey
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
      ...get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeNationalJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeNationalJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['National.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['National.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['National.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeNationalJsonQueryKey
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
      ...get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeNationalJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeSharedCostJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['SharedCost.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/SharedCost.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeSharedCostJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['SharedCost.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['SharedCost.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['SharedCost.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeSharedCostJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeSharedCostJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
          'SharedCost.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeSharedCostJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['SharedCost.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['SharedCost.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['SharedCost.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeSharedCostJsonQueryKey
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
      ...get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeSharedCostJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeSharedCostJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['SharedCost.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['SharedCost.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['SharedCost.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeSharedCostJsonQueryKey
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
      ...get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeSharedCostJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeTollFreeJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['TollFree.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/TollFree.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeTollFreeJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['TollFree.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['TollFree.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['TollFree.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeTollFreeJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeTollFreeJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
          'TollFree.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeTollFreeJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['TollFree.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['TollFree.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['TollFree.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeTollFreeJsonQueryKey
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
      ...get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeTollFreeJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeTollFreeJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['TollFree.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['TollFree.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['TollFree.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeTollFreeJsonQueryKey
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
      ...get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeTollFreeJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeVoipJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Voip.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/Voip.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeVoipJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Voip.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Voip.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Voip.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeVoipJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeVoipJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
          'Voip.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeVoipJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Voip.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Voip.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Voip.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeVoipJsonQueryKey
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
      ...get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeVoipJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeVoipJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Voip.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Voip.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Voip.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeVoipJsonQueryKey
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
      ...get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeVoipJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidBalanceJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Balance.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Balance.json', args] as const
}

export function get20100401AccountsAccountSidBalanceJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Balance.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Balance.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Balance.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidBalanceJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidBalanceJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Balance.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidBalanceJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Balance.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Balance.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Balance.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidBalanceJsonQueryKey>
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
      ...get20100401AccountsAccountSidBalanceJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidBalanceJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Balance.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Balance.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Balance.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidBalanceJsonQueryKey>
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
      ...get20100401AccountsAccountSidBalanceJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidCallsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Calls.json', args] as const
}

export function get20100401AccountsAccountSidCallsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidCallsJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidCallsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Calls.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidCallsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidCallsJsonQueryKey>
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
      ...get20100401AccountsAccountSidCallsJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidCallsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidCallsJsonQueryKey>
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
      ...get20100401AccountsAccountSidCallsJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidCallsJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Calls.json', 'POST'] as const
}

export function getPost20100401AccountsAccountSidCallsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidCallsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Calls.json'].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidCallsJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidCallsJsonMutationOptions<
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

export function get20100401AccountsAccountSidCallsSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Calls/:Sid.json', args] as const
}

export function get20100401AccountsAccountSidCallsSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidCallsSidJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidCallsSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[':Sid.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidCallsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidCallsSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidCallsSidJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidCallsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidCallsSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidCallsSidJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidCallsSidJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Calls/:Sid.json', 'POST'] as const
}

export function getPost20100401AccountsAccountSidCallsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidCallsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[':Sid.json'].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidCallsSidJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidCallsSidJsonMutationOptions<
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

export function getDelete20100401AccountsAccountSidCallsSidJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Calls/:Sid.json', 'DELETE'] as const
}

export function getDelete20100401AccountsAccountSidCallsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20100401AccountsAccountSidCallsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[':Sid.json'].$delete(args, options),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidCallsSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$delete']
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
  const mutationDefaults = getDelete20100401AccountsAccountSidCallsSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidCallsCallSidEventsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Events.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Events.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidCallsCallSidEventsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Events.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Events.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Events.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidCallsCallSidEventsJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidCallsCallSidEventsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Events.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidCallsCallSidEventsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Events.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Events.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Events.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidCallsCallSidEventsJsonQueryKey>
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
      ...get20100401AccountsAccountSidCallsCallSidEventsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidCallsCallSidEventsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Events.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Events.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Events.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidCallsCallSidEventsJsonQueryKey>
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
      ...get20100401AccountsAccountSidCallsCallSidEventsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidCallsCallSidNotificationsSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Notifications/:Sid.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidCallsCallSidNotificationsSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidCallsCallSidNotificationsSidJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidCallsCallSidNotificationsSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Notifications[
          ':Sid.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidCallsCallSidNotificationsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidCallsCallSidNotificationsSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidCallsCallSidNotificationsSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidCallsCallSidNotificationsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidCallsCallSidNotificationsSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidCallsCallSidNotificationsSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidCallsCallSidNotificationsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Notifications.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidCallsCallSidNotificationsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidCallsCallSidNotificationsJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidCallsCallSidNotificationsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Notifications.json'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function use20100401AccountsAccountSidCallsCallSidNotificationsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidCallsCallSidNotificationsJsonQueryKey>
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
      ...get20100401AccountsAccountSidCallsCallSidNotificationsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidCallsCallSidNotificationsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidCallsCallSidNotificationsJsonQueryKey>
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
      ...get20100401AccountsAccountSidCallsCallSidNotificationsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidCallsCallSidRecordingsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Recordings.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidCallsCallSidRecordingsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidCallsCallSidRecordingsJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidCallsCallSidRecordingsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Recordings.json'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function use20100401AccountsAccountSidCallsCallSidRecordingsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidCallsCallSidRecordingsJsonQueryKey>
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
      ...get20100401AccountsAccountSidCallsCallSidRecordingsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidCallsCallSidRecordingsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidCallsCallSidRecordingsJsonQueryKey>
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
      ...get20100401AccountsAccountSidCallsCallSidRecordingsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidCallsCallSidRecordingsJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Recordings.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidCallsCallSidRecordingsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidCallsCallSidRecordingsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Recordings.json'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidCallsCallSidRecordingsJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$post']
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
    getPost20100401AccountsAccountSidCallsCallSidRecordingsJsonMutationOptions<
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

export function get20100401AccountsAccountSidCallsCallSidRecordingsSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Recordings/:Sid.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidCallsCallSidRecordingsSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidCallsCallSidRecordingsSidJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidCallsCallSidRecordingsSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Recordings[':Sid.json'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function use20100401AccountsAccountSidCallsCallSidRecordingsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidCallsCallSidRecordingsSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidCallsCallSidRecordingsSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidCallsCallSidRecordingsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidCallsCallSidRecordingsSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidCallsCallSidRecordingsSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidCallsCallSidRecordingsSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Recordings/:Sid.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidCallsCallSidRecordingsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidCallsCallSidRecordingsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Recordings[
          ':Sid.json'
        ].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidCallsCallSidRecordingsSidJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$post']
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
    getPost20100401AccountsAccountSidCallsCallSidRecordingsSidJsonMutationOptions<
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

export function getDelete20100401AccountsAccountSidCallsCallSidRecordingsSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Recordings/:Sid.json',
    'DELETE',
  ] as const
}

export function getDelete20100401AccountsAccountSidCallsCallSidRecordingsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20100401AccountsAccountSidCallsCallSidRecordingsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Recordings[
          ':Sid.json'
        ].$delete(args, options),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidCallsCallSidRecordingsSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$delete']
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
    getDelete20100401AccountsAccountSidCallsCallSidRecordingsSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidConferencesSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Conferences/:Sid.json', args] as const
}

export function get20100401AccountsAccountSidConferencesSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidConferencesSidJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidConferencesSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Conferences[':Sid.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidConferencesSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidConferencesSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidConferencesSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidConferencesSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidConferencesSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidConferencesSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidConferencesSidJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Conferences/:Sid.json', 'POST'] as const
}

export function getPost20100401AccountsAccountSidConferencesSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidConferencesSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Conferences[':Sid.json'].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidConferencesSidJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidConferencesSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidConferencesJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Conferences.json', args] as const
}

export function get20100401AccountsAccountSidConferencesJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidConferencesJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidConferencesJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Conferences.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidConferencesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidConferencesJsonQueryKey>
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
      ...get20100401AccountsAccountSidConferencesJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidConferencesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidConferencesJsonQueryKey>
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
      ...get20100401AccountsAccountSidConferencesJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidConferencesConferenceSidRecordingsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Recordings.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidConferencesConferenceSidRecordingsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidConferencesConferenceSidRecordingsJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidConferencesConferenceSidRecordingsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'][
          'Recordings.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidConferencesConferenceSidRecordingsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidConferencesConferenceSidRecordingsJsonQueryKey
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
      ...get20100401AccountsAccountSidConferencesConferenceSidRecordingsJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidConferencesConferenceSidRecordingsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidConferencesConferenceSidRecordingsJsonQueryKey
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
      ...get20100401AccountsAccountSidConferencesConferenceSidRecordingsJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Recordings/:Sid.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonQueryKey
    >
  >({
    queryKey: get20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'].Recordings[
          ':Sid.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonQueryKey
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
      ...get20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonQueryKey
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
      ...get20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Recordings/:Sid.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPost20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'].Recordings[
          ':Sid.json'
        ].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$post']
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
    getPost20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonMutationOptions<
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

export function getDelete20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Recordings/:Sid.json',
    'DELETE',
  ] as const
}

export function getDelete20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDelete20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'].Recordings[
          ':Sid.json'
        ].$delete(args, options),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$delete']
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
    getDelete20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidConnectAppsSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/ConnectApps/:Sid.json', args] as const
}

export function get20100401AccountsAccountSidConnectAppsSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidConnectAppsSidJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidConnectAppsSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].ConnectApps[':Sid.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidConnectAppsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidConnectAppsSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidConnectAppsSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidConnectAppsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidConnectAppsSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidConnectAppsSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidConnectAppsSidJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/ConnectApps/:Sid.json', 'POST'] as const
}

export function getPost20100401AccountsAccountSidConnectAppsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidConnectAppsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].ConnectApps[':Sid.json'].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidConnectAppsSidJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidConnectAppsSidJsonMutationOptions<
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

export function getDelete20100401AccountsAccountSidConnectAppsSidJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/ConnectApps/:Sid.json', 'DELETE'] as const
}

export function getDelete20100401AccountsAccountSidConnectAppsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20100401AccountsAccountSidConnectAppsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].ConnectApps[':Sid.json'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidConnectAppsSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$delete']
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
  const mutationDefaults = getDelete20100401AccountsAccountSidConnectAppsSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidConnectAppsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/ConnectApps.json', args] as const
}

export function get20100401AccountsAccountSidConnectAppsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidConnectAppsJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidConnectAppsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['ConnectApps.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidConnectAppsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidConnectAppsJsonQueryKey>
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
      ...get20100401AccountsAccountSidConnectAppsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidConnectAppsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidConnectAppsJsonQueryKey>
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
      ...get20100401AccountsAccountSidConnectAppsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidAddressesAddressSidDependentPhoneNumbersJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':AddressSid']['DependentPhoneNumbers.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Addresses/:AddressSid/DependentPhoneNumbers.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidAddressesAddressSidDependentPhoneNumbersJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':AddressSid']['DependentPhoneNumbers.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':AddressSid']['DependentPhoneNumbers.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':AddressSid']['DependentPhoneNumbers.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidAddressesAddressSidDependentPhoneNumbersJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidAddressesAddressSidDependentPhoneNumbersJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Addresses[':AddressSid'][
          'DependentPhoneNumbers.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidAddressesAddressSidDependentPhoneNumbersJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':AddressSid']['DependentPhoneNumbers.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':AddressSid']['DependentPhoneNumbers.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':AddressSid']['DependentPhoneNumbers.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidAddressesAddressSidDependentPhoneNumbersJsonQueryKey
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
      ...get20100401AccountsAccountSidAddressesAddressSidDependentPhoneNumbersJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidAddressesAddressSidDependentPhoneNumbersJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':AddressSid']['DependentPhoneNumbers.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':AddressSid']['DependentPhoneNumbers.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':AddressSid']['DependentPhoneNumbers.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidAddressesAddressSidDependentPhoneNumbersJsonQueryKey
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
      ...get20100401AccountsAccountSidAddressesAddressSidDependentPhoneNumbersJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidIncomingPhoneNumbersSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:Sid.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidIncomingPhoneNumbersSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidIncomingPhoneNumbersSidJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidIncomingPhoneNumbersSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[':Sid.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidIncomingPhoneNumbersSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidIncomingPhoneNumbersSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidIncomingPhoneNumbersSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidIncomingPhoneNumbersSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidIncomingPhoneNumbersSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidIncomingPhoneNumbersSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidIncomingPhoneNumbersSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:Sid.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidIncomingPhoneNumbersSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidIncomingPhoneNumbersSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[':Sid.json'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidIncomingPhoneNumbersSidJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$post']
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
    getPost20100401AccountsAccountSidIncomingPhoneNumbersSidJsonMutationOptions<
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

export function getDelete20100401AccountsAccountSidIncomingPhoneNumbersSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:Sid.json',
    'DELETE',
  ] as const
}

export function getDelete20100401AccountsAccountSidIncomingPhoneNumbersSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20100401AccountsAccountSidIncomingPhoneNumbersSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[':Sid.json'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidIncomingPhoneNumbersSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$delete']
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
    getDelete20100401AccountsAccountSidIncomingPhoneNumbersSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidIncomingPhoneNumbersJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers.json', args] as const
}

export function get20100401AccountsAccountSidIncomingPhoneNumbersJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidIncomingPhoneNumbersJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidIncomingPhoneNumbersJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['IncomingPhoneNumbers.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidIncomingPhoneNumbersJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidIncomingPhoneNumbersJsonQueryKey>
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
      ...get20100401AccountsAccountSidIncomingPhoneNumbersJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidIncomingPhoneNumbersJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidIncomingPhoneNumbersJsonQueryKey>
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
      ...get20100401AccountsAccountSidIncomingPhoneNumbersJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidIncomingPhoneNumbersJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidIncomingPhoneNumbersJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidIncomingPhoneNumbersJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['IncomingPhoneNumbers.json'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidIncomingPhoneNumbersJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidIncomingPhoneNumbersJsonMutationOptions<
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

export function get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:ResourceSid/AssignedAddOns/:Sid.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[
          ':ResourceSid'
        ].AssignedAddOns[':Sid.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonQueryKey
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
      ...get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonQueryKey
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
      ...get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDelete20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:ResourceSid/AssignedAddOns/:Sid.json',
    'DELETE',
  ] as const
}

export function getDelete20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDelete20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[
          ':ResourceSid'
        ].AssignedAddOns[':Sid.json'].$delete(args, options),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$delete']
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
    getDelete20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:ResourceSid/AssignedAddOns.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[':ResourceSid'][
          'AssignedAddOns.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonQueryKey
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
      ...get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonQueryKey
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
      ...get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:ResourceSid/AssignedAddOns.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPost20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[':ResourceSid'][
          'AssignedAddOns.json'
        ].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$post']
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
    getPost20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonMutationOptions<
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

export function get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:ResourceSid/AssignedAddOns/:AssignedAddOnSid/Extensions/:Sid.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsSidJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsSidJsonQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[
          ':ResourceSid'
        ].AssignedAddOns[':AssignedAddOnSid'].Extensions[':Sid.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsSidJsonQueryKey
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
      ...get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsSidJsonQueryKey
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
      ...get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:ResourceSid/AssignedAddOns/:AssignedAddOnSid/Extensions.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsJsonQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[
          ':ResourceSid'
        ].AssignedAddOns[':AssignedAddOnSid']['Extensions.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsJsonQueryKey
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
      ...get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsJsonQueryKey
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
      ...get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/Local.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers['Local.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidIncomingPhoneNumbersLocalJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonQueryKey>
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
      ...get20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidIncomingPhoneNumbersLocalJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonQueryKey>
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
      ...get20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/Local.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers['Local.json'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidIncomingPhoneNumbersLocalJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$post']
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
    getPost20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonMutationOptions<
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

export function get20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/Mobile.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers['Mobile.json'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function use20100401AccountsAccountSidIncomingPhoneNumbersMobileJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonQueryKey>
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
      ...get20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidIncomingPhoneNumbersMobileJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonQueryKey>
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
      ...get20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/Mobile.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers['Mobile.json'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidIncomingPhoneNumbersMobileJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$post']
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
    getPost20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonMutationOptions<
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

export function get20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/TollFree.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers['TollFree.json'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function use20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonQueryKey>
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
      ...get20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonQueryKey>
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
      ...get20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/TollFree.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers['TollFree.json'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$post']
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
    getPost20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonMutationOptions<
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

export function get20100401AccountsAccountSidKeysSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Keys/:Sid.json', args] as const
}

export function get20100401AccountsAccountSidKeysSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidKeysSidJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidKeysSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Keys[':Sid.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidKeysSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidKeysSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidKeysSidJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidKeysSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidKeysSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidKeysSidJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidKeysSidJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Keys/:Sid.json', 'POST'] as const
}

export function getPost20100401AccountsAccountSidKeysSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidKeysSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Keys[':Sid.json'].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidKeysSidJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidKeysSidJsonMutationOptions<
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

export function getDelete20100401AccountsAccountSidKeysSidJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Keys/:Sid.json', 'DELETE'] as const
}

export function getDelete20100401AccountsAccountSidKeysSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20100401AccountsAccountSidKeysSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Keys[':Sid.json'].$delete(args, options),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidKeysSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$delete']
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
  const mutationDefaults = getDelete20100401AccountsAccountSidKeysSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidKeysJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Keys.json', args] as const
}

export function get20100401AccountsAccountSidKeysJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidKeysJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidKeysJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Keys.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidKeysJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidKeysJsonQueryKey>
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
      ...get20100401AccountsAccountSidKeysJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidKeysJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidKeysJsonQueryKey>
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
      ...get20100401AccountsAccountSidKeysJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidKeysJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Keys.json', 'POST'] as const
}

export function getPost20100401AccountsAccountSidKeysJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidKeysJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Keys.json'].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidKeysJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidKeysJsonMutationOptions<
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

export function get20100401AccountsAccountSidMessagesMessageSidMediaSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Messages/:MessageSid/Media/:Sid.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidMessagesMessageSidMediaSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidMessagesMessageSidMediaSidJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidMessagesMessageSidMediaSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Messages[':MessageSid'].Media[
          ':Sid.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidMessagesMessageSidMediaSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidMessagesMessageSidMediaSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidMessagesMessageSidMediaSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidMessagesMessageSidMediaSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidMessagesMessageSidMediaSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidMessagesMessageSidMediaSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDelete20100401AccountsAccountSidMessagesMessageSidMediaSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Messages/:MessageSid/Media/:Sid.json',
    'DELETE',
  ] as const
}

export function getDelete20100401AccountsAccountSidMessagesMessageSidMediaSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20100401AccountsAccountSidMessagesMessageSidMediaSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Messages[':MessageSid'].Media[
          ':Sid.json'
        ].$delete(args, options),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidMessagesMessageSidMediaSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$delete']
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
    getDelete20100401AccountsAccountSidMessagesMessageSidMediaSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidMessagesMessageSidMediaJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Messages/:MessageSid/Media.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidMessagesMessageSidMediaJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidMessagesMessageSidMediaJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidMessagesMessageSidMediaJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Messages[':MessageSid']['Media.json'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function use20100401AccountsAccountSidMessagesMessageSidMediaJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidMessagesMessageSidMediaJsonQueryKey>
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
      ...get20100401AccountsAccountSidMessagesMessageSidMediaJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidMessagesMessageSidMediaJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidMessagesMessageSidMediaJsonQueryKey>
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
      ...get20100401AccountsAccountSidMessagesMessageSidMediaJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Queues/:QueueSid/Members/:CallSid.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Queues[':QueueSid'].Members[
          ':CallSid.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidQueuesQueueSidMembersCallSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidQueuesQueueSidMembersCallSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Queues/:QueueSid/Members/:CallSid.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Queues[':QueueSid'].Members[
          ':CallSid.json'
        ].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidQueuesQueueSidMembersCallSidJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$post']
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
    getPost20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidQueuesQueueSidMembersJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Queues/:QueueSid/Members.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidQueuesQueueSidMembersJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidQueuesQueueSidMembersJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidQueuesQueueSidMembersJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Queues[':QueueSid']['Members.json'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function use20100401AccountsAccountSidQueuesQueueSidMembersJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidQueuesQueueSidMembersJsonQueryKey>
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
      ...get20100401AccountsAccountSidQueuesQueueSidMembersJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidQueuesQueueSidMembersJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidQueuesQueueSidMembersJsonQueryKey>
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
      ...get20100401AccountsAccountSidQueuesQueueSidMembersJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidMessagesJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Messages.json', args] as const
}

export function get20100401AccountsAccountSidMessagesJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidMessagesJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidMessagesJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Messages.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidMessagesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidMessagesJsonQueryKey>
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
      ...get20100401AccountsAccountSidMessagesJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidMessagesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidMessagesJsonQueryKey>
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
      ...get20100401AccountsAccountSidMessagesJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidMessagesJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Messages.json', 'POST'] as const
}

export function getPost20100401AccountsAccountSidMessagesJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidMessagesJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Messages.json'].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidMessagesJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidMessagesJsonMutationOptions<
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

export function get20100401AccountsAccountSidMessagesSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Messages/:Sid.json', args] as const
}

export function get20100401AccountsAccountSidMessagesSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidMessagesSidJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidMessagesSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Messages[':Sid.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidMessagesSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidMessagesSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidMessagesSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidMessagesSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidMessagesSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidMessagesSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidMessagesSidJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Messages/:Sid.json', 'POST'] as const
}

export function getPost20100401AccountsAccountSidMessagesSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidMessagesSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Messages[':Sid.json'].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidMessagesSidJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidMessagesSidJsonMutationOptions<
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

export function getDelete20100401AccountsAccountSidMessagesSidJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Messages/:Sid.json', 'DELETE'] as const
}

export function getDelete20100401AccountsAccountSidMessagesSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20100401AccountsAccountSidMessagesSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Messages[':Sid.json'].$delete(args, options),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidMessagesSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$delete']
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
  const mutationDefaults = getDelete20100401AccountsAccountSidMessagesSidJsonMutationOptions<
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

export function getPost20100401AccountsAccountSidMessagesMessageSidFeedbackJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Messages/:MessageSid/Feedback.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidMessagesMessageSidFeedbackJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Feedback.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Feedback.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidMessagesMessageSidFeedbackJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Feedback.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Messages[':MessageSid']['Feedback.json'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidMessagesMessageSidFeedbackJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Feedback.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Feedback.json']['$post']
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
    getPost20100401AccountsAccountSidMessagesMessageSidFeedbackJsonMutationOptions<
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

export function get20100401AccountsAccountSidSigningKeysJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SigningKeys.json', args] as const
}

export function get20100401AccountsAccountSidSigningKeysJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidSigningKeysJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidSigningKeysJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['SigningKeys.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidSigningKeysJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidSigningKeysJsonQueryKey>
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
      ...get20100401AccountsAccountSidSigningKeysJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidSigningKeysJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidSigningKeysJsonQueryKey>
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
      ...get20100401AccountsAccountSidSigningKeysJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidSigningKeysJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SigningKeys.json', 'POST'] as const
}

export function getPost20100401AccountsAccountSidSigningKeysJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidSigningKeysJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['SigningKeys.json'].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidSigningKeysJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidSigningKeysJsonMutationOptions<
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

export function get20100401AccountsAccountSidNotificationsSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Notifications/:Sid.json', args] as const
}

export function get20100401AccountsAccountSidNotificationsSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidNotificationsSidJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidNotificationsSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Notifications[':Sid.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidNotificationsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidNotificationsSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidNotificationsSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidNotificationsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidNotificationsSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidNotificationsSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidNotificationsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Notifications.json', args] as const
}

export function get20100401AccountsAccountSidNotificationsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidNotificationsJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidNotificationsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Notifications.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidNotificationsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidNotificationsJsonQueryKey>
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
      ...get20100401AccountsAccountSidNotificationsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidNotificationsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidNotificationsJsonQueryKey>
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
      ...get20100401AccountsAccountSidNotificationsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidOutgoingCallerIdsSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/OutgoingCallerIds/:Sid.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidOutgoingCallerIdsSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidOutgoingCallerIdsSidJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidOutgoingCallerIdsSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].OutgoingCallerIds[':Sid.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidOutgoingCallerIdsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidOutgoingCallerIdsSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidOutgoingCallerIdsSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidOutgoingCallerIdsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidOutgoingCallerIdsSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidOutgoingCallerIdsSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidOutgoingCallerIdsSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/OutgoingCallerIds/:Sid.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidOutgoingCallerIdsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidOutgoingCallerIdsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].OutgoingCallerIds[':Sid.json'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidOutgoingCallerIdsSidJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidOutgoingCallerIdsSidJsonMutationOptions<
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

export function getDelete20100401AccountsAccountSidOutgoingCallerIdsSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/OutgoingCallerIds/:Sid.json',
    'DELETE',
  ] as const
}

export function getDelete20100401AccountsAccountSidOutgoingCallerIdsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20100401AccountsAccountSidOutgoingCallerIdsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].OutgoingCallerIds[':Sid.json'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidOutgoingCallerIdsSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$delete']
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
    getDelete20100401AccountsAccountSidOutgoingCallerIdsSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidOutgoingCallerIdsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/OutgoingCallerIds.json', args] as const
}

export function get20100401AccountsAccountSidOutgoingCallerIdsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidOutgoingCallerIdsJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidOutgoingCallerIdsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['OutgoingCallerIds.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidOutgoingCallerIdsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidOutgoingCallerIdsJsonQueryKey>
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
      ...get20100401AccountsAccountSidOutgoingCallerIdsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidOutgoingCallerIdsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidOutgoingCallerIdsJsonQueryKey>
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
      ...get20100401AccountsAccountSidOutgoingCallerIdsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidOutgoingCallerIdsJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/OutgoingCallerIds.json', 'POST'] as const
}

export function getPost20100401AccountsAccountSidOutgoingCallerIdsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidOutgoingCallerIdsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['OutgoingCallerIds.json'].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidOutgoingCallerIdsJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidOutgoingCallerIdsJsonMutationOptions<
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

export function get20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Participants/:CallSid.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'].Participants[
          ':CallSid.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonQueryKey
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
      ...get20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonQueryKey
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
      ...get20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Participants/:CallSid.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPost20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'].Participants[
          ':CallSid.json'
        ].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$post']
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
    getPost20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonMutationOptions<
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

export function getDelete20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Participants/:CallSid.json',
    'DELETE',
  ] as const
}

export function getDelete20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDelete20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'].Participants[
          ':CallSid.json'
        ].$delete(args, options),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$delete']
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
    getDelete20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Participants.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'][
          'Participants.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidConferencesConferenceSidParticipantsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonQueryKey
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
      ...get20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidConferencesConferenceSidParticipantsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonQueryKey
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
      ...get20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Participants.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPost20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'][
          'Participants.json'
        ].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidConferencesConferenceSidParticipantsJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$post']
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
    getPost20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonMutationOptions<
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

export function getPost20100401AccountsAccountSidCallsCallSidPaymentsJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Payments.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidCallsCallSidPaymentsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Payments.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Payments.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidCallsCallSidPaymentsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Payments.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Payments.json'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidCallsCallSidPaymentsJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Payments.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Payments.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidCallsCallSidPaymentsJsonMutationOptions<
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

export function getPost20100401AccountsAccountSidCallsCallSidPaymentsSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Payments/:Sid.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidCallsCallSidPaymentsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Payments'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Payments'][':Sid.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidCallsCallSidPaymentsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Payments'][':Sid.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Payments[':Sid.json'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidCallsCallSidPaymentsSidJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Payments'][':Sid.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Payments'][':Sid.json']['$post']
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
    getPost20100401AccountsAccountSidCallsCallSidPaymentsSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidQueuesSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Queues/:Sid.json', args] as const
}

export function get20100401AccountsAccountSidQueuesSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidQueuesSidJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidQueuesSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Queues[':Sid.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidQueuesSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidQueuesSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidQueuesSidJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidQueuesSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidQueuesSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidQueuesSidJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidQueuesSidJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Queues/:Sid.json', 'POST'] as const
}

export function getPost20100401AccountsAccountSidQueuesSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidQueuesSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Queues[':Sid.json'].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidQueuesSidJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidQueuesSidJsonMutationOptions<
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

export function getDelete20100401AccountsAccountSidQueuesSidJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Queues/:Sid.json', 'DELETE'] as const
}

export function getDelete20100401AccountsAccountSidQueuesSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20100401AccountsAccountSidQueuesSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Queues[':Sid.json'].$delete(args, options),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidQueuesSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$delete']
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
  const mutationDefaults = getDelete20100401AccountsAccountSidQueuesSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidQueuesJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Queues.json', args] as const
}

export function get20100401AccountsAccountSidQueuesJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidQueuesJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidQueuesJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Queues.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidQueuesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidQueuesJsonQueryKey>
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
      ...get20100401AccountsAccountSidQueuesJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidQueuesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidQueuesJsonQueryKey>
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
      ...get20100401AccountsAccountSidQueuesJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidQueuesJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Queues.json', 'POST'] as const
}

export function getPost20100401AccountsAccountSidQueuesJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidQueuesJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Queues.json'].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidQueuesJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidQueuesJsonMutationOptions<
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

export function getPost20100401AccountsAccountSidCallsCallSidTranscriptionsJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Transcriptions.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidCallsCallSidTranscriptionsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Transcriptions.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Transcriptions.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidCallsCallSidTranscriptionsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Transcriptions.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Transcriptions.json'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidCallsCallSidTranscriptionsJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Transcriptions.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Transcriptions.json']['$post']
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
    getPost20100401AccountsAccountSidCallsCallSidTranscriptionsJsonMutationOptions<
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

export function getPost20100401AccountsAccountSidCallsCallSidTranscriptionsSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Transcriptions/:Sid.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidCallsCallSidTranscriptionsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Transcriptions'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Transcriptions'][':Sid.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidCallsCallSidTranscriptionsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Transcriptions'][':Sid.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Transcriptions[
          ':Sid.json'
        ].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidCallsCallSidTranscriptionsSidJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Transcriptions'][':Sid.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Transcriptions'][':Sid.json']['$post']
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
    getPost20100401AccountsAccountSidCallsCallSidTranscriptionsSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidRecordingsSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Recordings/:Sid.json', args] as const
}

export function get20100401AccountsAccountSidRecordingsSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidRecordingsSidJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidRecordingsSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Recordings[':Sid.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidRecordingsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidRecordingsSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidRecordingsSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidRecordingsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidRecordingsSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidRecordingsSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDelete20100401AccountsAccountSidRecordingsSidJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Recordings/:Sid.json', 'DELETE'] as const
}

export function getDelete20100401AccountsAccountSidRecordingsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20100401AccountsAccountSidRecordingsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Recordings[':Sid.json'].$delete(args, options),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidRecordingsSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$delete']
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
  const mutationDefaults = getDelete20100401AccountsAccountSidRecordingsSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidRecordingsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Recordings.json', args] as const
}

export function get20100401AccountsAccountSidRecordingsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidRecordingsJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidRecordingsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Recordings.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidRecordingsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidRecordingsJsonQueryKey>
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
      ...get20100401AccountsAccountSidRecordingsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidRecordingsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidRecordingsJsonQueryKey>
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
      ...get20100401AccountsAccountSidRecordingsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:ReferenceSid/AddOnResults/:Sid.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonQueryKey
    >
  >({
    queryKey: get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
          ':Sid.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonQueryKey
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
      ...get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonQueryKey
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
      ...get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDelete20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:ReferenceSid/AddOnResults/:Sid.json',
    'DELETE',
  ] as const
}

export function getDelete20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDelete20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
          ':Sid.json'
        ].$delete(args, options),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$delete']
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
    getDelete20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:ReferenceSid/AddOnResults.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'][
          'AddOnResults.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsJsonQueryKey
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
      ...get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsJsonQueryKey
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
      ...get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:ReferenceSid/AddOnResults/:AddOnResultSid/Payloads/:Sid.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
          ':AddOnResultSid'
        ].Payloads[':Sid.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonQueryKey
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
      ...get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonQueryKey
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
      ...get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDelete20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:ReferenceSid/AddOnResults/:AddOnResultSid/Payloads/:Sid.json',
    'DELETE',
  ] as const
}

export function getDelete20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDelete20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
          ':AddOnResultSid'
        ].Payloads[':Sid.json'].$delete(args, options),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$delete']
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
    getDelete20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:ReferenceSid/AddOnResults/:AddOnResultSid/Payloads.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsJsonQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
          ':AddOnResultSid'
        ]['Payloads.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsJsonQueryKey
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
      ...get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsJsonQueryKey
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
      ...get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsPayloadSidDataJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':PayloadSid']['Data.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:ReferenceSid/AddOnResults/:AddOnResultSid/Payloads/:PayloadSid/Data.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsPayloadSidDataJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':PayloadSid']['Data.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':PayloadSid']['Data.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':PayloadSid']['Data.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsPayloadSidDataJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsPayloadSidDataJsonQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
          ':AddOnResultSid'
        ].Payloads[':PayloadSid']['Data.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsPayloadSidDataJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':PayloadSid']['Data.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':PayloadSid']['Data.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':PayloadSid']['Data.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsPayloadSidDataJsonQueryKey
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
      ...get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsPayloadSidDataJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsPayloadSidDataJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':PayloadSid']['Data.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':PayloadSid']['Data.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':PayloadSid']['Data.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsPayloadSidDataJsonQueryKey
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
      ...get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsPayloadSidDataJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:RecordingSid/Transcriptions/:Sid.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Recordings[':RecordingSid'].Transcriptions[
          ':Sid.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonQueryKey
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
      ...get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonQueryKey
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
      ...get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDelete20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:RecordingSid/Transcriptions/:Sid.json',
    'DELETE',
  ] as const
}

export function getDelete20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDelete20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Recordings[':RecordingSid'].Transcriptions[
          ':Sid.json'
        ].$delete(args, options),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$delete']
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
    getDelete20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:RecordingSid/Transcriptions.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Recordings[':RecordingSid'][
          'Transcriptions.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsJsonQueryKey
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
      ...get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsJsonQueryKey
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
      ...get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidSMSShortCodesSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SMS/ShortCodes/:Sid.json', args] as const
}

export function get20100401AccountsAccountSidSMSShortCodesSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidSMSShortCodesSidJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidSMSShortCodesSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SMS.ShortCodes[':Sid.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidSMSShortCodesSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidSMSShortCodesSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidSMSShortCodesSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidSMSShortCodesSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidSMSShortCodesSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidSMSShortCodesSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidSMSShortCodesSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SMS/ShortCodes/:Sid.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidSMSShortCodesSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidSMSShortCodesSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SMS.ShortCodes[':Sid.json'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidSMSShortCodesSidJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidSMSShortCodesSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidSMSShortCodesJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SMS/ShortCodes.json', args] as const
}

export function get20100401AccountsAccountSidSMSShortCodesJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidSMSShortCodesJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidSMSShortCodesJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SMS['ShortCodes.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidSMSShortCodesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidSMSShortCodesJsonQueryKey>
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
      ...get20100401AccountsAccountSidSMSShortCodesJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidSMSShortCodesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidSMSShortCodesJsonQueryKey>
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
      ...get20100401AccountsAccountSidSMSShortCodesJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidSigningKeysSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SigningKeys/:Sid.json', args] as const
}

export function get20100401AccountsAccountSidSigningKeysSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidSigningKeysSidJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidSigningKeysSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SigningKeys[':Sid.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidSigningKeysSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidSigningKeysSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidSigningKeysSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidSigningKeysSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidSigningKeysSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidSigningKeysSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidSigningKeysSidJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SigningKeys/:Sid.json', 'POST'] as const
}

export function getPost20100401AccountsAccountSidSigningKeysSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidSigningKeysSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SigningKeys[':Sid.json'].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidSigningKeysSidJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidSigningKeysSidJsonMutationOptions<
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

export function getDelete20100401AccountsAccountSidSigningKeysSidJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SigningKeys/:Sid.json', 'DELETE'] as const
}

export function getDelete20100401AccountsAccountSidSigningKeysSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20100401AccountsAccountSidSigningKeysSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SigningKeys[':Sid.json'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidSigningKeysSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$delete']
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
  const mutationDefaults = getDelete20100401AccountsAccountSidSigningKeysSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Calls/CredentialListMappings.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].Auth.Calls[
          'CredentialListMappings.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Calls/CredentialListMappings.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPost20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].Auth.Calls[
          'CredentialListMappings.json'
        ].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$post']
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
    getPost20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonMutationOptions<
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

export function get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Calls/CredentialListMappings/:Sid.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
          ':DomainSid'
        ].Auth.Calls.CredentialListMappings[':Sid.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDelete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Calls/CredentialListMappings/:Sid.json',
    'DELETE',
  ] as const
}

export function getDelete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDelete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
          ':DomainSid'
        ].Auth.Calls.CredentialListMappings[':Sid.json'].$delete(args, options),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$delete']
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
    getDelete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Calls/IpAccessControlListMappings.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].Auth.Calls[
          'IpAccessControlListMappings.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Calls/IpAccessControlListMappings.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPost20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].Auth.Calls[
          'IpAccessControlListMappings.json'
        ].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$post']
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
    getPost20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonMutationOptions<
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

export function get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Calls/IpAccessControlListMappings/:Sid.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
          ':DomainSid'
        ].Auth.Calls.IpAccessControlListMappings[':Sid.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDelete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Calls/IpAccessControlListMappings/:Sid.json',
    'DELETE',
  ] as const
}

export function getDelete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDelete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
          ':DomainSid'
        ].Auth.Calls.IpAccessControlListMappings[':Sid.json'].$delete(args, options),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$delete']
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
    getDelete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Registrations/CredentialListMappings.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].Auth.Registrations[
          'CredentialListMappings.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Registrations/CredentialListMappings.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPost20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].Auth.Registrations[
          'CredentialListMappings.json'
        ].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$post']
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
    getPost20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonMutationOptions<
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

export function get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Registrations/CredentialListMappings/:Sid.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
          ':DomainSid'
        ].Auth.Registrations.CredentialListMappings[':Sid.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDelete20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Registrations/CredentialListMappings/:Sid.json',
    'DELETE',
  ] as const
}

export function getDelete20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDelete20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
          ':DomainSid'
        ].Auth.Registrations.CredentialListMappings[':Sid.json'].$delete(args, options),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$delete']
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
    getDelete20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists/:CredentialListSid/Credentials.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[':CredentialListSid'][
          'Credentials.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists/:CredentialListSid/Credentials.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPost20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[':CredentialListSid'][
          'Credentials.json'
        ].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$post']
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
    getPost20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonMutationOptions<
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

export function get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists/:CredentialListSid/Credentials/:Sid.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[
          ':CredentialListSid'
        ].Credentials[':Sid.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists/:CredentialListSid/Credentials/:Sid.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPost20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[
          ':CredentialListSid'
        ].Credentials[':Sid.json'].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$post']
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
    getPost20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonMutationOptions<
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

export function getDelete20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists/:CredentialListSid/Credentials/:Sid.json',
    'DELETE',
  ] as const
}

export function getDelete20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDelete20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[
          ':CredentialListSid'
        ].Credentials[':Sid.json'].$delete(args, options),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$delete']
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
    getDelete20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidSIPCredentialListsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists.json', args] as const
}

export function get20100401AccountsAccountSidSIPCredentialListsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidSIPCredentialListsJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidSIPCredentialListsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP['CredentialLists.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidSIPCredentialListsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidSIPCredentialListsJsonQueryKey>
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
      ...get20100401AccountsAccountSidSIPCredentialListsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidSIPCredentialListsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidSIPCredentialListsJsonQueryKey>
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
      ...get20100401AccountsAccountSidSIPCredentialListsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidSIPCredentialListsJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidSIPCredentialListsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidSIPCredentialListsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP['CredentialLists.json'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidSIPCredentialListsJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidSIPCredentialListsJsonMutationOptions<
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

export function get20100401AccountsAccountSidSIPCredentialListsSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists/:Sid.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidSIPCredentialListsSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidSIPCredentialListsSidJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidSIPCredentialListsSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[':Sid.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidSIPCredentialListsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidSIPCredentialListsSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidSIPCredentialListsSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidSIPCredentialListsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidSIPCredentialListsSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidSIPCredentialListsSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidSIPCredentialListsSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists/:Sid.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidSIPCredentialListsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidSIPCredentialListsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[':Sid.json'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidSIPCredentialListsSidJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$post']
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
    getPost20100401AccountsAccountSidSIPCredentialListsSidJsonMutationOptions<
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

export function getDelete20100401AccountsAccountSidSIPCredentialListsSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists/:Sid.json',
    'DELETE',
  ] as const
}

export function getDelete20100401AccountsAccountSidSIPCredentialListsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20100401AccountsAccountSidSIPCredentialListsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[':Sid.json'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidSIPCredentialListsSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$delete']
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
    getDelete20100401AccountsAccountSidSIPCredentialListsSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/CredentialListMappings.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'][
          'CredentialListMappings.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/CredentialListMappings.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPost20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'][
          'CredentialListMappings.json'
        ].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$post']
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
    getPost20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonMutationOptions<
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

export function get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/CredentialListMappings/:Sid.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
          ':DomainSid'
        ].CredentialListMappings[':Sid.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDelete20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/CredentialListMappings/:Sid.json',
    'DELETE',
  ] as const
}

export function getDelete20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDelete20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
          ':DomainSid'
        ].CredentialListMappings[':Sid.json'].$delete(args, options),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$delete']
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
    getDelete20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidSIPDomainsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SIP/Domains.json', args] as const
}

export function get20100401AccountsAccountSidSIPDomainsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidSIPDomainsJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidSIPDomainsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP['Domains.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidSIPDomainsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidSIPDomainsJsonQueryKey>
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
      ...get20100401AccountsAccountSidSIPDomainsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidSIPDomainsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidSIPDomainsJsonQueryKey>
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
      ...get20100401AccountsAccountSidSIPDomainsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidSIPDomainsJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SIP/Domains.json', 'POST'] as const
}

export function getPost20100401AccountsAccountSidSIPDomainsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidSIPDomainsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP['Domains.json'].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidSIPDomainsJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidSIPDomainsJsonMutationOptions<
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

export function get20100401AccountsAccountSidSIPDomainsSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:Sid.json', args] as const
}

export function get20100401AccountsAccountSidSIPDomainsSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidSIPDomainsSidJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidSIPDomainsSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':Sid.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidSIPDomainsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidSIPDomainsSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidSIPDomainsSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidSIPDomainsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidSIPDomainsSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidSIPDomainsSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidSIPDomainsSidJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:Sid.json', 'POST'] as const
}

export function getPost20100401AccountsAccountSidSIPDomainsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidSIPDomainsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':Sid.json'].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidSIPDomainsSidJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidSIPDomainsSidJsonMutationOptions<
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

export function getDelete20100401AccountsAccountSidSIPDomainsSidJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:Sid.json', 'DELETE'] as const
}

export function getDelete20100401AccountsAccountSidSIPDomainsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20100401AccountsAccountSidSIPDomainsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':Sid.json'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidSIPDomainsSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$delete']
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
  const mutationDefaults = getDelete20100401AccountsAccountSidSIPDomainsSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidSIPIpAccessControlListsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidSIPIpAccessControlListsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidSIPIpAccessControlListsJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidSIPIpAccessControlListsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP['IpAccessControlLists.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidSIPIpAccessControlListsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidSIPIpAccessControlListsJsonQueryKey>
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
      ...get20100401AccountsAccountSidSIPIpAccessControlListsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidSIPIpAccessControlListsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidSIPIpAccessControlListsJsonQueryKey>
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
      ...get20100401AccountsAccountSidSIPIpAccessControlListsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidSIPIpAccessControlListsJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidSIPIpAccessControlListsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidSIPIpAccessControlListsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP['IpAccessControlLists.json'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidSIPIpAccessControlListsJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$post']
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
    getPost20100401AccountsAccountSidSIPIpAccessControlListsJsonMutationOptions<
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

export function get20100401AccountsAccountSidSIPIpAccessControlListsSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists/:Sid.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidSIPIpAccessControlListsSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidSIPIpAccessControlListsSidJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidSIPIpAccessControlListsSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[':Sid.json'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function use20100401AccountsAccountSidSIPIpAccessControlListsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidSIPIpAccessControlListsSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidSIPIpAccessControlListsSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidSIPIpAccessControlListsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidSIPIpAccessControlListsSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidSIPIpAccessControlListsSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidSIPIpAccessControlListsSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists/:Sid.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidSIPIpAccessControlListsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidSIPIpAccessControlListsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[':Sid.json'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidSIPIpAccessControlListsSidJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$post']
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
    getPost20100401AccountsAccountSidSIPIpAccessControlListsSidJsonMutationOptions<
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

export function getDelete20100401AccountsAccountSidSIPIpAccessControlListsSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists/:Sid.json',
    'DELETE',
  ] as const
}

export function getDelete20100401AccountsAccountSidSIPIpAccessControlListsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20100401AccountsAccountSidSIPIpAccessControlListsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[':Sid.json'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidSIPIpAccessControlListsSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$delete']
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
    getDelete20100401AccountsAccountSidSIPIpAccessControlListsSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/IpAccessControlListMappings/:Sid.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
          ':DomainSid'
        ].IpAccessControlListMappings[':Sid.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDelete20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/IpAccessControlListMappings/:Sid.json',
    'DELETE',
  ] as const
}

export function getDelete20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDelete20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
          ':DomainSid'
        ].IpAccessControlListMappings[':Sid.json'].$delete(args, options),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$delete']
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
    getDelete20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/IpAccessControlListMappings.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'][
          'IpAccessControlListMappings.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/IpAccessControlListMappings.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPost20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'][
          'IpAccessControlListMappings.json'
        ].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$post']
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
    getPost20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonMutationOptions<
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

export function get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists/:IpAccessControlListSid/IpAddresses.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[
          ':IpAccessControlListSid'
        ]['IpAddresses.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists/:IpAccessControlListSid/IpAddresses.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPost20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[
          ':IpAccessControlListSid'
        ]['IpAddresses.json'].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$post']
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
    getPost20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonMutationOptions<
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

export function get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists/:IpAccessControlListSid/IpAddresses/:Sid.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonQueryKey
    >
  >({
    queryKey:
      get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[
          ':IpAccessControlListSid'
        ].IpAddresses[':Sid.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonQueryKey
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
      ...get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists/:IpAccessControlListSid/IpAddresses/:Sid.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPost20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[
          ':IpAccessControlListSid'
        ].IpAddresses[':Sid.json'].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$post']
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
    getPost20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonMutationOptions<
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

export function getDelete20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists/:IpAccessControlListSid/IpAddresses/:Sid.json',
    'DELETE',
  ] as const
}

export function getDelete20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDelete20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[
          ':IpAccessControlListSid'
        ].IpAddresses[':Sid.json'].$delete(args, options),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$delete']
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
    getDelete20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonMutationOptions<
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

export function getPost20100401AccountsAccountSidCallsCallSidSiprecJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Siprec.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidCallsCallSidSiprecJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Siprec.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Siprec.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidCallsCallSidSiprecJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Siprec.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Siprec.json'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidCallsCallSidSiprecJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Siprec.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Siprec.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidCallsCallSidSiprecJsonMutationOptions<
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

export function getPost20100401AccountsAccountSidCallsCallSidSiprecSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Siprec/:Sid.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidCallsCallSidSiprecSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Siprec'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Siprec'][':Sid.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidCallsCallSidSiprecSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Siprec'][':Sid.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Siprec[':Sid.json'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidCallsCallSidSiprecSidJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Siprec'][':Sid.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Siprec'][':Sid.json']['$post']
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
    getPost20100401AccountsAccountSidCallsCallSidSiprecSidJsonMutationOptions<
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

export function getPost20100401AccountsAccountSidCallsCallSidStreamsJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Streams.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidCallsCallSidStreamsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Streams.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Streams.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidCallsCallSidStreamsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Streams.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Streams.json'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidCallsCallSidStreamsJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Streams.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Streams.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidCallsCallSidStreamsJsonMutationOptions<
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

export function getPost20100401AccountsAccountSidCallsCallSidStreamsSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Streams/:Sid.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidCallsCallSidStreamsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Streams'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Streams'][':Sid.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidCallsCallSidStreamsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Streams'][':Sid.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Streams[':Sid.json'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidCallsCallSidStreamsSidJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Streams'][':Sid.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Streams'][':Sid.json']['$post']
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
    getPost20100401AccountsAccountSidCallsCallSidStreamsSidJsonMutationOptions<
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

export function getPost20100401AccountsAccountSidTokensJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Tokens.json', 'POST'] as const
}

export function getPost20100401AccountsAccountSidTokensJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Tokens.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Tokens.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidTokensJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Tokens.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Tokens.json'].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidTokensJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Tokens.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Tokens.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidTokensJsonMutationOptions<
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

export function get20100401AccountsAccountSidTranscriptionsSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Transcriptions/:Sid.json', args] as const
}

export function get20100401AccountsAccountSidTranscriptionsSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidTranscriptionsSidJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidTranscriptionsSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Transcriptions[':Sid.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidTranscriptionsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidTranscriptionsSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidTranscriptionsSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidTranscriptionsSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidTranscriptionsSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidTranscriptionsSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDelete20100401AccountsAccountSidTranscriptionsSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Transcriptions/:Sid.json',
    'DELETE',
  ] as const
}

export function getDelete20100401AccountsAccountSidTranscriptionsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20100401AccountsAccountSidTranscriptionsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Transcriptions[':Sid.json'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidTranscriptionsSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$delete']
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
  const mutationDefaults = getDelete20100401AccountsAccountSidTranscriptionsSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidTranscriptionsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Transcriptions.json', args] as const
}

export function get20100401AccountsAccountSidTranscriptionsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidTranscriptionsJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidTranscriptionsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Transcriptions.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidTranscriptionsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidTranscriptionsJsonQueryKey>
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
      ...get20100401AccountsAccountSidTranscriptionsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidTranscriptionsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidTranscriptionsJsonQueryKey>
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
      ...get20100401AccountsAccountSidTranscriptionsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidUsageRecordsJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Usage/Records.json', args] as const
}

export function get20100401AccountsAccountSidUsageRecordsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidUsageRecordsJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidUsageRecordsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Usage['Records.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidUsageRecordsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidUsageRecordsJsonQueryKey>
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
      ...get20100401AccountsAccountSidUsageRecordsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidUsageRecordsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidUsageRecordsJsonQueryKey>
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
      ...get20100401AccountsAccountSidUsageRecordsJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidUsageRecordsAllTimeJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['AllTime.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Usage/Records/AllTime.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidUsageRecordsAllTimeJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['AllTime.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['AllTime.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['AllTime.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidUsageRecordsAllTimeJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidUsageRecordsAllTimeJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['AllTime.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidUsageRecordsAllTimeJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['AllTime.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['AllTime.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['AllTime.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidUsageRecordsAllTimeJsonQueryKey>
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
      ...get20100401AccountsAccountSidUsageRecordsAllTimeJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidUsageRecordsAllTimeJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['AllTime.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['AllTime.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['AllTime.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidUsageRecordsAllTimeJsonQueryKey>
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
      ...get20100401AccountsAccountSidUsageRecordsAllTimeJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidUsageRecordsDailyJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Daily.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Usage/Records/Daily.json', args] as const
}

export function get20100401AccountsAccountSidUsageRecordsDailyJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Daily.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Daily.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Daily.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidUsageRecordsDailyJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidUsageRecordsDailyJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Daily.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidUsageRecordsDailyJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Daily.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Daily.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Daily.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidUsageRecordsDailyJsonQueryKey>
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
      ...get20100401AccountsAccountSidUsageRecordsDailyJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidUsageRecordsDailyJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Daily.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Daily.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Daily.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidUsageRecordsDailyJsonQueryKey>
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
      ...get20100401AccountsAccountSidUsageRecordsDailyJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidUsageRecordsLastMonthJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['LastMonth.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Usage/Records/LastMonth.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidUsageRecordsLastMonthJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['LastMonth.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['LastMonth.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['LastMonth.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidUsageRecordsLastMonthJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidUsageRecordsLastMonthJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['LastMonth.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidUsageRecordsLastMonthJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['LastMonth.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['LastMonth.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['LastMonth.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidUsageRecordsLastMonthJsonQueryKey>
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
      ...get20100401AccountsAccountSidUsageRecordsLastMonthJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidUsageRecordsLastMonthJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['LastMonth.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['LastMonth.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['LastMonth.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidUsageRecordsLastMonthJsonQueryKey>
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
      ...get20100401AccountsAccountSidUsageRecordsLastMonthJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidUsageRecordsMonthlyJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Monthly.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Usage/Records/Monthly.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidUsageRecordsMonthlyJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Monthly.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Monthly.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Monthly.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidUsageRecordsMonthlyJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidUsageRecordsMonthlyJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Monthly.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidUsageRecordsMonthlyJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Monthly.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Monthly.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Monthly.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidUsageRecordsMonthlyJsonQueryKey>
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
      ...get20100401AccountsAccountSidUsageRecordsMonthlyJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidUsageRecordsMonthlyJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Monthly.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Monthly.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Monthly.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidUsageRecordsMonthlyJsonQueryKey>
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
      ...get20100401AccountsAccountSidUsageRecordsMonthlyJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidUsageRecordsThisMonthJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['ThisMonth.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Usage/Records/ThisMonth.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidUsageRecordsThisMonthJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['ThisMonth.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['ThisMonth.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['ThisMonth.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidUsageRecordsThisMonthJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidUsageRecordsThisMonthJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['ThisMonth.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidUsageRecordsThisMonthJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['ThisMonth.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['ThisMonth.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['ThisMonth.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidUsageRecordsThisMonthJsonQueryKey>
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
      ...get20100401AccountsAccountSidUsageRecordsThisMonthJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidUsageRecordsThisMonthJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['ThisMonth.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['ThisMonth.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['ThisMonth.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidUsageRecordsThisMonthJsonQueryKey>
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
      ...get20100401AccountsAccountSidUsageRecordsThisMonthJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidUsageRecordsTodayJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Today.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Usage/Records/Today.json', args] as const
}

export function get20100401AccountsAccountSidUsageRecordsTodayJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Today.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Today.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Today.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidUsageRecordsTodayJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidUsageRecordsTodayJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Today.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidUsageRecordsTodayJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Today.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Today.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Today.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidUsageRecordsTodayJsonQueryKey>
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
      ...get20100401AccountsAccountSidUsageRecordsTodayJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidUsageRecordsTodayJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Today.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Today.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Today.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidUsageRecordsTodayJsonQueryKey>
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
      ...get20100401AccountsAccountSidUsageRecordsTodayJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidUsageRecordsYearlyJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yearly.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Usage/Records/Yearly.json', args] as const
}

export function get20100401AccountsAccountSidUsageRecordsYearlyJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yearly.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yearly.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yearly.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidUsageRecordsYearlyJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidUsageRecordsYearlyJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Yearly.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidUsageRecordsYearlyJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yearly.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yearly.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yearly.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidUsageRecordsYearlyJsonQueryKey>
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
      ...get20100401AccountsAccountSidUsageRecordsYearlyJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidUsageRecordsYearlyJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yearly.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yearly.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yearly.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidUsageRecordsYearlyJsonQueryKey>
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
      ...get20100401AccountsAccountSidUsageRecordsYearlyJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidUsageRecordsYesterdayJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yesterday.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Usage/Records/Yesterday.json',
    args,
  ] as const
}

export function get20100401AccountsAccountSidUsageRecordsYesterdayJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yesterday.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yesterday.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yesterday.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidUsageRecordsYesterdayJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidUsageRecordsYesterdayJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Yesterday.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidUsageRecordsYesterdayJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yesterday.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yesterday.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yesterday.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidUsageRecordsYesterdayJsonQueryKey>
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
      ...get20100401AccountsAccountSidUsageRecordsYesterdayJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidUsageRecordsYesterdayJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yesterday.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yesterday.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yesterday.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidUsageRecordsYesterdayJsonQueryKey>
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
      ...get20100401AccountsAccountSidUsageRecordsYesterdayJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidUsageTriggersSidJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Usage/Triggers/:Sid.json', args] as const
}

export function get20100401AccountsAccountSidUsageTriggersSidJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidUsageTriggersSidJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidUsageTriggersSidJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Usage.Triggers[':Sid.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidUsageTriggersSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidUsageTriggersSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidUsageTriggersSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidUsageTriggersSidJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidUsageTriggersSidJsonQueryKey>
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
      ...get20100401AccountsAccountSidUsageTriggersSidJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidUsageTriggersSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Usage/Triggers/:Sid.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidUsageTriggersSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidUsageTriggersSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Usage.Triggers[':Sid.json'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidUsageTriggersSidJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidUsageTriggersSidJsonMutationOptions<
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

export function getDelete20100401AccountsAccountSidUsageTriggersSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Usage/Triggers/:Sid.json',
    'DELETE',
  ] as const
}

export function getDelete20100401AccountsAccountSidUsageTriggersSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20100401AccountsAccountSidUsageTriggersSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Usage.Triggers[':Sid.json'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidUsageTriggersSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$delete']
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
  const mutationDefaults = getDelete20100401AccountsAccountSidUsageTriggersSidJsonMutationOptions<
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

export function get20100401AccountsAccountSidUsageTriggersJsonQueryKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Usage/Triggers.json', args] as const
}

export function get20100401AccountsAccountSidUsageTriggersJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidUsageTriggersJsonQueryKey>
  >({
    queryKey: get20100401AccountsAccountSidUsageTriggersJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Usage['Triggers.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20100401AccountsAccountSidUsageTriggersJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidUsageTriggersJsonQueryKey>
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
      ...get20100401AccountsAccountSidUsageTriggersJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20100401AccountsAccountSidUsageTriggersJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20100401AccountsAccountSidUsageTriggersJsonQueryKey>
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
      ...get20100401AccountsAccountSidUsageTriggersJsonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20100401AccountsAccountSidUsageTriggersJsonMutationKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Usage/Triggers.json', 'POST'] as const
}

export function getPost20100401AccountsAccountSidUsageTriggersJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidUsageTriggersJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Usage['Triggers.json'].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidUsageTriggersJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$post']
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
  const mutationDefaults = getPost20100401AccountsAccountSidUsageTriggersJsonMutationOptions<
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

export function getPost20100401AccountsAccountSidCallsCallSidUserDefinedMessagesJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/UserDefinedMessages.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidCallsCallSidUserDefinedMessagesJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['UserDefinedMessages.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['UserDefinedMessages.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20100401AccountsAccountSidCallsCallSidUserDefinedMessagesJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['UserDefinedMessages.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'][
          'UserDefinedMessages.json'
        ].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidCallsCallSidUserDefinedMessagesJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['UserDefinedMessages.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['UserDefinedMessages.json']['$post']
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
    getPost20100401AccountsAccountSidCallsCallSidUserDefinedMessagesJsonMutationOptions<
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

export function getPost20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/UserDefinedMessageSubscriptions.json',
    'POST',
  ] as const
}

export function getPost20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['UserDefinedMessageSubscriptions.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['UserDefinedMessageSubscriptions.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPost20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['UserDefinedMessageSubscriptions.json']['$post']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'][
          'UserDefinedMessageSubscriptions.json'
        ].$post(args, options),
      )
    },
  })
}

export function usePost20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsJson<
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
                  (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['UserDefinedMessageSubscriptions.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['UserDefinedMessageSubscriptions.json']['$post']
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
    getPost20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsJsonMutationOptions<
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

export function getDelete20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsSidJsonMutationKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/UserDefinedMessageSubscriptions/:Sid.json',
    'DELETE',
  ] as const
}

export function getDelete20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsSidJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['UserDefinedMessageSubscriptions'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['UserDefinedMessageSubscriptions'][':Sid.json']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDelete20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsSidJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['UserDefinedMessageSubscriptions'][':Sid.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[
          ':CallSid'
        ].UserDefinedMessageSubscriptions[':Sid.json'].$delete(args, options),
      )
    },
  })
}

export function useDelete20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsSidJson<
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['UserDefinedMessageSubscriptions'][':Sid.json']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['UserDefinedMessageSubscriptions'][':Sid.json']['$delete']
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
    getDelete20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsSidJsonMutationOptions<
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
