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

export function get_2010_04_01Key() {
  return ['2010-04-01'] as const
}

export function get20100401AccountsJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2010-04-01']['Accounts.json']['$get']>>,
) {
  return ['2010-04-01', '/2010-04-01/Accounts.json', toValue(args)] as const
}

export function get20100401AccountsJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2010-04-01']['Accounts.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01']['Accounts.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2010-04-01']['Accounts.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20100401AccountsJsonQueryKey>
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
          Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01']['Accounts.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$get']>
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:Sid.json', toValue(args)] as const
}

export function get20100401AccountsSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsSidJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':Sid.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20100401AccountsSidJsonQueryKey>
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
          Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsSidJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsSidJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':Sid.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$get']
    >
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Addresses.json', toValue(args)] as const
}

export function get20100401AccountsAccountSidAddressesJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidAddressesJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Addresses.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidAddressesJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidAddressesJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidAddressesJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid']['Addresses.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Addresses/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidAddressesSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidAddressesSidJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Addresses[':Sid.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidAddressesSidJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidAddressesSidJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidAddressesSidJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Addresses[':Sid.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Applications.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidApplicationsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidApplicationsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Applications.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidApplicationsJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidApplicationsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidApplicationsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid']['Applications.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Applications/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidApplicationsSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidApplicationsSidJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Applications[':Sid.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidApplicationsSidJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidApplicationsSidJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidApplicationsSidJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Applications[':Sid.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps'][':ConnectAppSid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AuthorizedConnectApps/:ConnectAppSid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidAuthorizedConnectAppsConnectAppSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps'][':ConnectAppSid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidAuthorizedConnectAppsConnectAppSidJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].AuthorizedConnectApps[
          ':ConnectAppSid.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps'][':ConnectAppSid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps'][':ConnectAppSid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps'][':ConnectAppSid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidAuthorizedConnectAppsConnectAppSidJsonQueryKey
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps'][':ConnectAppSid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidAuthorizedConnectAppsConnectAppSidJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidAuthorizedConnectAppsConnectAppSidJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].AuthorizedConnectApps[
            ':ConnectAppSid.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidAuthorizedConnectAppsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AuthorizedConnectApps.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidAuthorizedConnectAppsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidAuthorizedConnectAppsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['AuthorizedConnectApps.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidAuthorizedConnectAppsJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidAuthorizedConnectAppsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidAuthorizedConnectAppsJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid']['AuthorizedConnectApps.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidAvailablePhoneNumbersJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['AvailablePhoneNumbers.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidAvailablePhoneNumbersJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidAvailablePhoneNumbersJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidAvailablePhoneNumbersJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid']['AvailablePhoneNumbers.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[
          ':CountryCode.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeJsonQueryKey
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[
            ':CountryCode.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeLocalJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Local.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/Local.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeLocalJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Local.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeLocalJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
          'Local.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Local.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Local.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Local.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeLocalJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeLocalJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
            'Local.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMachineToMachineJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['MachineToMachine.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/MachineToMachine.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMachineToMachineJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['MachineToMachine.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMachineToMachineJsonQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
          'MachineToMachine.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['MachineToMachine.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['MachineToMachine.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['MachineToMachine.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMachineToMachineJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMachineToMachineJsonQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
            'MachineToMachine.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMobileJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Mobile.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/Mobile.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMobileJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Mobile.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMobileJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
          'Mobile.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Mobile.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Mobile.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Mobile.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMobileJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMobileJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
            'Mobile.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeNationalJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['National.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/National.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeNationalJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['National.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeNationalJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
          'National.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['National.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['National.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['National.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeNationalJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeNationalJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
            'National.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeSharedCostJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['SharedCost.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/SharedCost.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeSharedCostJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['SharedCost.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeSharedCostJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
          'SharedCost.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['SharedCost.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['SharedCost.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['SharedCost.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeSharedCostJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeSharedCostJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
            'SharedCost.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeTollFreeJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['TollFree.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/TollFree.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeTollFreeJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['TollFree.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeTollFreeJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
          'TollFree.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['TollFree.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['TollFree.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['TollFree.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeTollFreeJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeTollFreeJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
            'TollFree.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeVoipJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Voip.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/Voip.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeVoipJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Voip.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeVoipJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
          'Voip.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Voip.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Voip.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Voip.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeVoipJsonQueryKey
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Voip.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeVoipJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeVoipJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
            'Voip.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidBalanceJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Balance.json']['$get']
    >
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Balance.json', toValue(args)] as const
}

export function get20100401AccountsAccountSidBalanceJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Balance.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidBalanceJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Balance.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Balance.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Balance.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Balance.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidBalanceJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Balance.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidBalanceJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidBalanceJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid']['Balance.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidCallsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$get']>
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Calls.json', toValue(args)] as const
}

export function get20100401AccountsAccountSidCallsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidCallsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Calls.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$get']>
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidCallsJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidCallsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidCallsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid']['Calls.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$get']
    >
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Calls/:Sid.json', toValue(args)] as const
}

export function get20100401AccountsAccountSidCallsSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidCallsSidJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[':Sid.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidCallsSidJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidCallsSidJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidCallsSidJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':Sid.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Events.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Events.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidCallsCallSidEventsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Events.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidCallsCallSidEventsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Events.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Events.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Events.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Events.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidCallsCallSidEventsJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Events.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidCallsCallSidEventsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidCallsCallSidEventsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Events.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidCallsCallSidNotificationsSidJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Notifications/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidCallsCallSidNotificationsSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidCallsCallSidNotificationsSidJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Notifications[
          ':Sid.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidCallsCallSidNotificationsSidJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidCallsCallSidNotificationsSidJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidCallsCallSidNotificationsSidJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Notifications[
            ':Sid.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidCallsCallSidNotificationsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Notifications.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidCallsCallSidNotificationsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidCallsCallSidNotificationsJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Notifications.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidCallsCallSidNotificationsJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidCallsCallSidNotificationsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidCallsCallSidNotificationsJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Notifications.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidCallsCallSidRecordingsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Recordings.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidCallsCallSidRecordingsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidCallsCallSidRecordingsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Recordings.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidCallsCallSidRecordingsJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidCallsCallSidRecordingsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidCallsCallSidRecordingsJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Recordings.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Recordings/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidCallsCallSidRecordingsSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidCallsCallSidRecordingsSidJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Recordings[':Sid.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidCallsCallSidRecordingsSidJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidCallsCallSidRecordingsSidJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidCallsCallSidRecordingsSidJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Recordings[
            ':Sid.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Conferences/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidConferencesSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidConferencesSidJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Conferences[':Sid.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidConferencesSidJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidConferencesSidJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidConferencesSidJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Conferences[':Sid.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences.json']['$get']
    >
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Conferences.json', toValue(args)] as const
}

export function get20100401AccountsAccountSidConferencesJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidConferencesJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Conferences.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidConferencesJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidConferencesJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidConferencesJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid']['Conferences.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidConferencesConferenceSidRecordingsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Recordings.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidConferencesConferenceSidRecordingsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidConferencesConferenceSidRecordingsJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'][
          'Recordings.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidConferencesConferenceSidRecordingsJsonQueryKey
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidConferencesConferenceSidRecordingsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidConferencesConferenceSidRecordingsJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'][
            'Recordings.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Recordings/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'].Recordings[
          ':Sid.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'].Recordings[
            ':Sid.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/ConnectApps/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidConnectAppsSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidConnectAppsSidJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].ConnectApps[':Sid.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidConnectAppsSidJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidConnectAppsSidJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidConnectAppsSidJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].ConnectApps[':Sid.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps.json']['$get']
    >
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/ConnectApps.json', toValue(args)] as const
}

export function get20100401AccountsAccountSidConnectAppsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidConnectAppsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['ConnectApps.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidConnectAppsJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidConnectAppsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidConnectAppsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid']['ConnectApps.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidAddressesAddressSidDependentPhoneNumbersJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':AddressSid']['DependentPhoneNumbers.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Addresses/:AddressSid/DependentPhoneNumbers.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidAddressesAddressSidDependentPhoneNumbersJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':AddressSid']['DependentPhoneNumbers.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidAddressesAddressSidDependentPhoneNumbersJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Addresses[':AddressSid'][
          'DependentPhoneNumbers.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':AddressSid']['DependentPhoneNumbers.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':AddressSid']['DependentPhoneNumbers.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':AddressSid']['DependentPhoneNumbers.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidAddressesAddressSidDependentPhoneNumbersJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidAddressesAddressSidDependentPhoneNumbersJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Addresses[':AddressSid'][
            'DependentPhoneNumbers.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidIncomingPhoneNumbersSidJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidIncomingPhoneNumbersSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidIncomingPhoneNumbersSidJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[':Sid.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidIncomingPhoneNumbersSidJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidIncomingPhoneNumbersSidJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidIncomingPhoneNumbersSidJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[':Sid.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidIncomingPhoneNumbersJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidIncomingPhoneNumbersJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['IncomingPhoneNumbers.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidIncomingPhoneNumbersJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidIncomingPhoneNumbersJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidIncomingPhoneNumbersJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid']['IncomingPhoneNumbers.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:ResourceSid/AssignedAddOns/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[
          ':ResourceSid'
        ].AssignedAddOns[':Sid.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[
            ':ResourceSid'
          ].AssignedAddOns[':Sid.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:ResourceSid/AssignedAddOns.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[':ResourceSid'][
          'AssignedAddOns.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[':ResourceSid'][
            'AssignedAddOns.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:ResourceSid/AssignedAddOns/:AssignedAddOnSid/Extensions/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsSidJsonQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[
          ':ResourceSid'
        ].AssignedAddOns[':AssignedAddOnSid'].Extensions[':Sid.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsSidJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsSidJsonQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[
            ':ResourceSid'
          ].AssignedAddOns[':AssignedAddOnSid'].Extensions[':Sid.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:ResourceSid/AssignedAddOns/:AssignedAddOnSid/Extensions.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsJsonQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[
          ':ResourceSid'
        ].AssignedAddOns[':AssignedAddOnSid']['Extensions.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsJsonQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[
            ':ResourceSid'
          ].AssignedAddOns[':AssignedAddOnSid']['Extensions.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/Local.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers['Local.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers['Local.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/Mobile.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers['Mobile.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers['Mobile.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/TollFree.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers['TollFree.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers['TollFree.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$get']
    >
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Keys/:Sid.json', toValue(args)] as const
}

export function get20100401AccountsAccountSidKeysSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidKeysSidJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Keys[':Sid.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidKeysSidJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidKeysSidJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidKeysSidJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Keys[':Sid.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$get']>
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Keys.json', toValue(args)] as const
}

export function get20100401AccountsAccountSidKeysJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidKeysJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Keys.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$get']>
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidKeysJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidKeysJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidKeysJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid']['Keys.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Messages/:MessageSid/Media/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidMessagesMessageSidMediaSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidMessagesMessageSidMediaSidJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Messages[':MessageSid'].Media[
          ':Sid.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidMessagesMessageSidMediaSidJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidMessagesMessageSidMediaSidJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidMessagesMessageSidMediaSidJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Messages[':MessageSid'].Media[
            ':Sid.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Messages/:MessageSid/Media.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidMessagesMessageSidMediaJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidMessagesMessageSidMediaJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Messages[':MessageSid']['Media.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidMessagesMessageSidMediaJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidMessagesMessageSidMediaJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidMessagesMessageSidMediaJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Messages[':MessageSid']['Media.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Queues/:QueueSid/Members/:CallSid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Queues[':QueueSid'].Members[
          ':CallSid.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Queues[':QueueSid'].Members[
            ':CallSid.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Queues/:QueueSid/Members.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidQueuesQueueSidMembersJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidQueuesQueueSidMembersJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Queues[':QueueSid']['Members.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidQueuesQueueSidMembersJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidQueuesQueueSidMembersJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidQueuesQueueSidMembersJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Queues[':QueueSid']['Members.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidMessagesJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$get']
    >
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Messages.json', toValue(args)] as const
}

export function get20100401AccountsAccountSidMessagesJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidMessagesJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Messages.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidMessagesJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidMessagesJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidMessagesJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid']['Messages.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Messages/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidMessagesSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidMessagesSidJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Messages[':Sid.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidMessagesSidJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidMessagesSidJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidMessagesSidJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Messages[':Sid.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$get']
    >
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SigningKeys.json', toValue(args)] as const
}

export function get20100401AccountsAccountSidSigningKeysJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidSigningKeysJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['SigningKeys.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidSigningKeysJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidSigningKeysJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidSigningKeysJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid']['SigningKeys.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Notifications/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidNotificationsSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidNotificationsSidJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Notifications[':Sid.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidNotificationsSidJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidNotificationsSidJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidNotificationsSidJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Notifications[':Sid.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidNotificationsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Notifications.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidNotificationsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidNotificationsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Notifications.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidNotificationsJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidNotificationsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidNotificationsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid']['Notifications.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidOutgoingCallerIdsSidJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/OutgoingCallerIds/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidOutgoingCallerIdsSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidOutgoingCallerIdsSidJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].OutgoingCallerIds[':Sid.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidOutgoingCallerIdsSidJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidOutgoingCallerIdsSidJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidOutgoingCallerIdsSidJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].OutgoingCallerIds[':Sid.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/OutgoingCallerIds.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidOutgoingCallerIdsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidOutgoingCallerIdsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['OutgoingCallerIds.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidOutgoingCallerIdsJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidOutgoingCallerIdsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidOutgoingCallerIdsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid']['OutgoingCallerIds.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Participants/:CallSid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'].Participants[
          ':CallSid.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'].Participants[
            ':CallSid.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Participants.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'][
          'Participants.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonQueryKey
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'][
            'Participants.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$get']
    >
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Queues/:Sid.json', toValue(args)] as const
}

export function get20100401AccountsAccountSidQueuesSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidQueuesSidJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Queues[':Sid.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidQueuesSidJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidQueuesSidJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidQueuesSidJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Queues[':Sid.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$get']
    >
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Queues.json', toValue(args)] as const
}

export function get20100401AccountsAccountSidQueuesJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidQueuesJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Queues.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidQueuesJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidQueuesJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidQueuesJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid']['Queues.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidRecordingsSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidRecordingsSidJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Recordings[':Sid.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidRecordingsSidJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidRecordingsSidJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidRecordingsSidJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':Sid.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings.json']['$get']
    >
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Recordings.json', toValue(args)] as const
}

export function get20100401AccountsAccountSidRecordingsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidRecordingsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Recordings.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidRecordingsJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidRecordingsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidRecordingsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid']['Recordings.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:ReferenceSid/AddOnResults/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
          ':Sid.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
            ':Sid.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:ReferenceSid/AddOnResults.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'][
          'AddOnResults.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsJsonQueryKey
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'][
            'AddOnResults.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:ReferenceSid/AddOnResults/:AddOnResultSid/Payloads/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
          ':AddOnResultSid'
        ].Payloads[':Sid.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
            ':AddOnResultSid'
          ].Payloads[':Sid.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:ReferenceSid/AddOnResults/:AddOnResultSid/Payloads.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsJsonQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
          ':AddOnResultSid'
        ]['Payloads.json'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsJsonQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
            ':AddOnResultSid'
          ]['Payloads.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsPayloadSidDataJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':PayloadSid']['Data.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:ReferenceSid/AddOnResults/:AddOnResultSid/Payloads/:PayloadSid/Data.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsPayloadSidDataJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':PayloadSid']['Data.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsPayloadSidDataJsonQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
          ':AddOnResultSid'
        ].Payloads[':PayloadSid']['Data.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':PayloadSid']['Data.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':PayloadSid']['Data.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':PayloadSid']['Data.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsPayloadSidDataJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsPayloadSidDataJsonQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
            ':AddOnResultSid'
          ].Payloads[':PayloadSid']['Data.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:RecordingSid/Transcriptions/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Recordings[':RecordingSid'].Transcriptions[
          ':Sid.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':RecordingSid'].Transcriptions[
            ':Sid.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:RecordingSid/Transcriptions.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Recordings[':RecordingSid'][
          'Transcriptions.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsJsonQueryKey
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':RecordingSid'][
            'Transcriptions.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidSMSShortCodesSidJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SMS/ShortCodes/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidSMSShortCodesSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidSMSShortCodesSidJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SMS.ShortCodes[':Sid.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidSMSShortCodesSidJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidSMSShortCodesSidJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidSMSShortCodesSidJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SMS.ShortCodes[':Sid.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SMS/ShortCodes.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidSMSShortCodesJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidSMSShortCodesJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SMS['ShortCodes.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidSMSShortCodesJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidSMSShortCodesJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidSMSShortCodesJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SMS['ShortCodes.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidSigningKeysSidJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SigningKeys/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidSigningKeysSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidSigningKeysSidJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SigningKeys[':Sid.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidSigningKeysSidJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidSigningKeysSidJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidSigningKeysSidJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SigningKeys[':Sid.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Calls/CredentialListMappings.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].Auth.Calls[
          'CredentialListMappings.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].Auth.Calls[
            'CredentialListMappings.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Calls/CredentialListMappings/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
          ':DomainSid'
        ].Auth.Calls.CredentialListMappings[':Sid.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
            ':DomainSid'
          ].Auth.Calls.CredentialListMappings[':Sid.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Calls/IpAccessControlListMappings.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].Auth.Calls[
          'IpAccessControlListMappings.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].Auth.Calls[
            'IpAccessControlListMappings.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Calls/IpAccessControlListMappings/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
          ':DomainSid'
        ].Auth.Calls.IpAccessControlListMappings[':Sid.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
            ':DomainSid'
          ].Auth.Calls.IpAccessControlListMappings[':Sid.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Registrations/CredentialListMappings.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].Auth.Registrations[
          'CredentialListMappings.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].Auth.Registrations[
            'CredentialListMappings.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Registrations/CredentialListMappings/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
          ':DomainSid'
        ].Auth.Registrations.CredentialListMappings[':Sid.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
            ':DomainSid'
          ].Auth.Registrations.CredentialListMappings[':Sid.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists/:CredentialListSid/Credentials.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[':CredentialListSid'][
          'Credentials.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[':CredentialListSid'][
            'Credentials.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists/:CredentialListSid/Credentials/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[
          ':CredentialListSid'
        ].Credentials[':Sid.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[
            ':CredentialListSid'
          ].Credentials[':Sid.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidSIPCredentialListsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidSIPCredentialListsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP['CredentialLists.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidSIPCredentialListsJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidSIPCredentialListsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidSIPCredentialListsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP['CredentialLists.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidSIPCredentialListsSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidSIPCredentialListsSidJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[':Sid.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidSIPCredentialListsSidJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidSIPCredentialListsSidJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidSIPCredentialListsSidJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[':Sid.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/CredentialListMappings.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'][
          'CredentialListMappings.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'][
            'CredentialListMappings.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/CredentialListMappings/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
          ':DomainSid'
        ].CredentialListMappings[':Sid.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
            ':DomainSid'
          ].CredentialListMappings[':Sid.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$get']
    >
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SIP/Domains.json', toValue(args)] as const
}

export function get20100401AccountsAccountSidSIPDomainsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidSIPDomainsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP['Domains.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidSIPDomainsJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidSIPDomainsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidSIPDomainsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP['Domains.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidSIPDomainsSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidSIPDomainsSidJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':Sid.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidSIPDomainsSidJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidSIPDomainsSidJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidSIPDomainsSidJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':Sid.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidSIPIpAccessControlListsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidSIPIpAccessControlListsJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP['IpAccessControlLists.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidSIPIpAccessControlListsJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidSIPIpAccessControlListsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidSIPIpAccessControlListsJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP['IpAccessControlLists.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidSIPIpAccessControlListsSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidSIPIpAccessControlListsSidJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[':Sid.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidSIPIpAccessControlListsSidJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidSIPIpAccessControlListsSidJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidSIPIpAccessControlListsSidJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[':Sid.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/IpAccessControlListMappings/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
          ':DomainSid'
        ].IpAccessControlListMappings[':Sid.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
            ':DomainSid'
          ].IpAccessControlListMappings[':Sid.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/IpAccessControlListMappings.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'][
          'IpAccessControlListMappings.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'][
            'IpAccessControlListMappings.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists/:IpAccessControlListSid/IpAddresses.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[
          ':IpAccessControlListSid'
        ]['IpAddresses.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[
            ':IpAccessControlListSid'
          ]['IpAddresses.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists/:IpAccessControlListSid/IpAddresses/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[
          ':IpAccessControlListSid'
        ].IpAddresses[':Sid.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[
            ':IpAccessControlListSid'
          ].IpAddresses[':Sid.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
      Extract<
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Transcriptions/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidTranscriptionsSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidTranscriptionsSidJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Transcriptions[':Sid.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidTranscriptionsSidJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidTranscriptionsSidJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidTranscriptionsSidJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Transcriptions[':Sid.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Transcriptions.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidTranscriptionsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidTranscriptionsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid']['Transcriptions.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidTranscriptionsJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidTranscriptionsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidTranscriptionsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid']['Transcriptions.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidUsageRecordsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Usage/Records.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidUsageRecordsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidUsageRecordsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Usage['Records.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidUsageRecordsJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidUsageRecordsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidUsageRecordsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Usage['Records.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidUsageRecordsAllTimeJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['AllTime.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Usage/Records/AllTime.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidUsageRecordsAllTimeJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['AllTime.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidUsageRecordsAllTimeJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['AllTime.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['AllTime.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['AllTime.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['AllTime.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidUsageRecordsAllTimeJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['AllTime.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidUsageRecordsAllTimeJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidUsageRecordsAllTimeJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['AllTime.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidUsageRecordsDailyJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Daily.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Usage/Records/Daily.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidUsageRecordsDailyJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Daily.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidUsageRecordsDailyJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Daily.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Daily.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Daily.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Daily.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidUsageRecordsDailyJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Daily.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidUsageRecordsDailyJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidUsageRecordsDailyJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Daily.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidUsageRecordsLastMonthJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['LastMonth.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Usage/Records/LastMonth.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidUsageRecordsLastMonthJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['LastMonth.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidUsageRecordsLastMonthJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['LastMonth.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['LastMonth.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['LastMonth.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['LastMonth.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidUsageRecordsLastMonthJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['LastMonth.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidUsageRecordsLastMonthJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidUsageRecordsLastMonthJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['LastMonth.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidUsageRecordsMonthlyJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Monthly.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Usage/Records/Monthly.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidUsageRecordsMonthlyJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Monthly.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidUsageRecordsMonthlyJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Monthly.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Monthly.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Monthly.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Monthly.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidUsageRecordsMonthlyJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Monthly.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidUsageRecordsMonthlyJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidUsageRecordsMonthlyJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Monthly.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidUsageRecordsThisMonthJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['ThisMonth.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Usage/Records/ThisMonth.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidUsageRecordsThisMonthJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['ThisMonth.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidUsageRecordsThisMonthJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['ThisMonth.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['ThisMonth.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['ThisMonth.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['ThisMonth.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidUsageRecordsThisMonthJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['ThisMonth.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidUsageRecordsThisMonthJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidUsageRecordsThisMonthJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['ThisMonth.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidUsageRecordsTodayJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Today.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Usage/Records/Today.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidUsageRecordsTodayJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Today.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidUsageRecordsTodayJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Today.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Today.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Today.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Today.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidUsageRecordsTodayJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Today.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidUsageRecordsTodayJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidUsageRecordsTodayJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Today.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidUsageRecordsYearlyJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yearly.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Usage/Records/Yearly.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidUsageRecordsYearlyJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yearly.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidUsageRecordsYearlyJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Yearly.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yearly.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yearly.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yearly.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidUsageRecordsYearlyJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yearly.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidUsageRecordsYearlyJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidUsageRecordsYearlyJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Yearly.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidUsageRecordsYesterdayJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yesterday.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Usage/Records/Yesterday.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidUsageRecordsYesterdayJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yesterday.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidUsageRecordsYesterdayJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Yesterday.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yesterday.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yesterday.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yesterday.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidUsageRecordsYesterdayJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yesterday.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidUsageRecordsYesterdayJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20100401AccountsAccountSidUsageRecordsYesterdayJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Yesterday.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function get20100401AccountsAccountSidUsageTriggersSidJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Usage/Triggers/:Sid.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidUsageTriggersSidJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidUsageTriggersSidJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Usage.Triggers[':Sid.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidUsageTriggersSidJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidUsageTriggersSidJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidUsageTriggersSidJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Triggers[':Sid.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$get']
    >
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Usage/Triggers.json',
    toValue(args),
  ] as const
}

export function get20100401AccountsAccountSidUsageTriggersJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20100401AccountsAccountSidUsageTriggersJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2010-04-01'].Accounts[':AccountSid'].Usage['Triggers.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$get']
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
                    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20100401AccountsAccountSidUsageTriggersJsonQueryKey>
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
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20100401AccountsAccountSidUsageTriggersJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20100401AccountsAccountSidUsageTriggersJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Usage['Triggers.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
      Extract<
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
      Extract<
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
