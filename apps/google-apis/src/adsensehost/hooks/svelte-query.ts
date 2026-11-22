import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getAdclientsKey() {
  return ['adclients'] as const
}

export function getAssociationsessionsKey() {
  return ['associationsessions'] as const
}

export function getReportsKey() {
  return ['reports'] as const
}

export function getAccountsQueryKey(args: InferRequestType<typeof client.accounts.$get>) {
  return ['accounts', '/accounts', args] as const
}

export function getAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountsQueryKey>
  >({
    queryKey: getAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.accounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAccountsAccountIdQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
) {
  return ['accounts', '/accounts/:accountId', args] as const
}

export function getAccountsAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdQueryKey>
  >({
    queryKey: getAccountsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountsAccountIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAccountsAccountIdAdclientsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['adclients']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/adclients', args] as const
}

export function getAccountsAccountIdAdclientsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['adclients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['adclients']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['adclients']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdAdclientsQueryKey>
  >({
    queryKey: getAccountsAccountIdAdclientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].adclients.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdAdclients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['adclients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountId']['adclients']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountId']['adclients']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdAdclientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountsAccountIdAdclientsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAccountIdAdclientsAdClientIdQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['$get']
  >,
) {
  return ['accounts', '/accounts/:accountId/adclients/:adClientId', args] as const
}

export function getAccountsAccountIdAdclientsAdClientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':accountId']['adclients'][':adClientId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':accountId']['adclients'][':adClientId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdQueryKey>
  >({
    queryKey: getAccountsAccountIdAdclientsAdClientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdAdclientsAdClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':accountId']['adclients'][':adClientId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':accountId']['adclients'][':adClientId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountsAccountIdAdclientsAdClientIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAccountIdAdclientsAdClientIdAdunitsQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
  >,
) {
  return ['accounts', '/accounts/:accountId/adclients/:adClientId/adunits', args] as const
}

export function getAccountsAccountIdAdclientsAdClientIdAdunitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdAdunitsQueryKey>
  >({
    queryKey: getAccountsAccountIdAdclientsAdClientIdAdunitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].adunits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdAdclientsAdClientIdAdunits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdAdunitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountsAccountIdAdclientsAdClientIdAdunitsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutAccountsAccountIdAdclientsAdClientIdAdunitsMutationKey() {
  return ['accounts', '/accounts/:accountId/adclients/:adClientId/adunits', 'PUT'] as const
}

export function getPutAccountsAccountIdAdclientsAdClientIdAdunitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAccountIdAdclientsAdClientIdAdunitsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].adunits.$put(args, options),
      )
    },
  })
}

export function createPutAccountsAccountIdAdclientsAdClientIdAdunits<
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
                  (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountsAccountIdAdclientsAdClientIdAdunitsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountsAccountIdAdclientsAdClientIdAdunitsMutationKey() {
  return ['accounts', '/accounts/:accountId/adclients/:adClientId/adunits', 'POST'] as const
}

export function getPostAccountsAccountIdAdclientsAdClientIdAdunitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdAdclientsAdClientIdAdunitsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].adunits.$post(args, options),
      )
    },
  })
}

export function createPostAccountsAccountIdAdclientsAdClientIdAdunits<
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
                  (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountsAccountIdAdclientsAdClientIdAdunitsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchAccountsAccountIdAdclientsAdClientIdAdunitsMutationKey() {
  return ['accounts', '/accounts/:accountId/adclients/:adClientId/adunits', 'PATCH'] as const
}

export function getPatchAccountsAccountIdAdclientsAdClientIdAdunitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountsAccountIdAdclientsAdClientIdAdunitsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$patch']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].adunits.$patch(args, options),
      )
    },
  })
}

export function createPatchAccountsAccountIdAdclientsAdClientIdAdunits<
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
                  (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAccountsAccountIdAdclientsAdClientIdAdunitsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
  >,
) {
  return ['accounts', '/accounts/:accountId/adclients/:adClientId/adunits/:adUnitId', args] as const
}

export function getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdQueryKey>
  >({
    queryKey: getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].adunits[':adUnitId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdMutationKey() {
  return [
    'accounts',
    '/accounts/:accountId/adclients/:adClientId/adunits/:adUnitId',
    'DELETE',
  ] as const
}

export function getDeleteAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].adunits[':adUnitId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitId<
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
                  (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
  >,
) {
  return [
    'accounts',
    '/accounts/:accountId/adclients/:adClientId/adunits/:adUnitId/adcode',
    args,
  ] as const
}

export function getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryKey>
  >({
    queryKey: getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].adunits[':adUnitId'].adcode.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAccountIdReportsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['reports']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/reports', args] as const
}

export function getAccountsAccountIdReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['reports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['reports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdReportsQueryKey>
  >({
    queryKey: getAccountsAccountIdReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].reports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountId']['reports']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountId']['reports']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountsAccountIdReportsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAdclientsQueryKey(args: InferRequestType<typeof client.adclients.$get>) {
  return ['adclients', '/adclients', args] as const
}

export function getAdclientsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adclients.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.adclients.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adclients.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdclientsQueryKey>
  >({
    queryKey: getAdclientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.adclients.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAdclients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adclients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.adclients.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adclients.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdclientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdclientsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAdclientsAdClientIdQueryKey(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['$get']>,
) {
  return ['adclients', '/adclients/:adClientId', args] as const
}

export function getAdclientsAdClientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.adclients)[':adClientId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.adclients)[':adClientId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdclientsAdClientIdQueryKey>
  >({
    queryKey: getAdclientsAdClientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.adclients[':adClientId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdclientsAdClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.adclients)[':adClientId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.adclients)[':adClientId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.adclients)[':adClientId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdclientsAdClientIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdclientsAdClientIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAdclientsAdClientIdCustomchannelsQueryKey(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>,
) {
  return ['adclients', '/adclients/:adClientId/customchannels', args] as const
}

export function getAdclientsAdClientIdCustomchannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdclientsAdClientIdCustomchannelsQueryKey>
  >({
    queryKey: getAdclientsAdClientIdCustomchannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.adclients[':adClientId'].customchannels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdclientsAdClientIdCustomchannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdclientsAdClientIdCustomchannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdclientsAdClientIdCustomchannelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutAdclientsAdClientIdCustomchannelsMutationKey() {
  return ['adclients', '/adclients/:adClientId/customchannels', 'PUT'] as const
}

export function getPutAdclientsAdClientIdCustomchannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdclientsAdClientIdCustomchannelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$put']>,
    ) {
      return parseResponse(client.adclients[':adClientId'].customchannels.$put(args, options))
    },
  })
}

export function createPutAdclientsAdClientIdCustomchannels<
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
                ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAdclientsAdClientIdCustomchannelsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAdclientsAdClientIdCustomchannelsMutationKey() {
  return ['adclients', '/adclients/:adClientId/customchannels', 'POST'] as const
}

export function getPostAdclientsAdClientIdCustomchannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdclientsAdClientIdCustomchannelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$post']>,
    ) {
      return parseResponse(client.adclients[':adClientId'].customchannels.$post(args, options))
    },
  })
}

export function createPostAdclientsAdClientIdCustomchannels<
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
                ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdclientsAdClientIdCustomchannelsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchAdclientsAdClientIdCustomchannelsMutationKey() {
  return ['adclients', '/adclients/:adClientId/customchannels', 'PATCH'] as const
}

export function getPatchAdclientsAdClientIdCustomchannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAdclientsAdClientIdCustomchannelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$patch']>,
    ) {
      return parseResponse(client.adclients[':adClientId'].customchannels.$patch(args, options))
    },
  })
}

export function createPatchAdclientsAdClientIdCustomchannels<
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
                ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdclientsAdClientIdCustomchannelsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAdclientsAdClientIdCustomchannelsCustomChannelIdQueryKey(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
  >,
) {
  return ['adclients', '/adclients/:adClientId/customchannels/:customChannelId', args] as const
}

export function getAdclientsAdClientIdCustomchannelsCustomChannelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdclientsAdClientIdCustomchannelsCustomChannelIdQueryKey>
  >({
    queryKey: getAdclientsAdClientIdCustomchannelsCustomChannelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.adclients[':adClientId'].customchannels[':customChannelId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdclientsAdClientIdCustomchannelsCustomChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdclientsAdClientIdCustomchannelsCustomChannelIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdclientsAdClientIdCustomchannelsCustomChannelIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteAdclientsAdClientIdCustomchannelsCustomChannelIdMutationKey() {
  return ['adclients', '/adclients/:adClientId/customchannels/:customChannelId', 'DELETE'] as const
}

export function getDeleteAdclientsAdClientIdCustomchannelsCustomChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdclientsAdClientIdCustomchannelsCustomChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$delete']
      >,
    ) {
      return parseResponse(
        client.adclients[':adClientId'].customchannels[':customChannelId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAdclientsAdClientIdCustomchannelsCustomChannelId<
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
                  (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAdclientsAdClientIdCustomchannelsCustomChannelIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAdclientsAdClientIdUrlchannelsQueryKey(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>,
) {
  return ['adclients', '/adclients/:adClientId/urlchannels', args] as const
}

export function getAdclientsAdClientIdUrlchannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdclientsAdClientIdUrlchannelsQueryKey>
  >({
    queryKey: getAdclientsAdClientIdUrlchannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.adclients[':adClientId'].urlchannels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdclientsAdClientIdUrlchannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdclientsAdClientIdUrlchannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdclientsAdClientIdUrlchannelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAdclientsAdClientIdUrlchannelsMutationKey() {
  return ['adclients', '/adclients/:adClientId/urlchannels', 'POST'] as const
}

export function getPostAdclientsAdClientIdUrlchannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.adclients)[':adClientId']['urlchannels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.adclients)[':adClientId']['urlchannels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdclientsAdClientIdUrlchannelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.adclients)[':adClientId']['urlchannels']['$post']>,
    ) {
      return parseResponse(client.adclients[':adClientId'].urlchannels.$post(args, options))
    },
  })
}

export function createPostAdclientsAdClientIdUrlchannels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.adclients)[':adClientId']['urlchannels']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.adclients)[':adClientId']['urlchannels']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdclientsAdClientIdUrlchannelsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteAdclientsAdClientIdUrlchannelsUrlChannelIdMutationKey() {
  return ['adclients', '/adclients/:adClientId/urlchannels/:urlChannelId', 'DELETE'] as const
}

export function getDeleteAdclientsAdClientIdUrlchannelsUrlChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.adclients)[':adClientId']['urlchannels'][':urlChannelId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.adclients)[':adClientId']['urlchannels'][':urlChannelId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdclientsAdClientIdUrlchannelsUrlChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.adclients)[':adClientId']['urlchannels'][':urlChannelId']['$delete']
      >,
    ) {
      return parseResponse(
        client.adclients[':adClientId'].urlchannels[':urlChannelId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAdclientsAdClientIdUrlchannelsUrlChannelId<
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
                  (typeof client.adclients)[':adClientId']['urlchannels'][':urlChannelId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.adclients)[':adClientId']['urlchannels'][':urlChannelId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdclientsAdClientIdUrlchannelsUrlChannelIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAssociationsessionsStartQueryKey(
  args: InferRequestType<typeof client.associationsessions.start.$get>,
) {
  return ['associationsessions', '/associationsessions/start', args] as const
}

export function getAssociationsessionsStartQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.associationsessions.start.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.associationsessions.start.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.associationsessions.start.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationsessionsStartQueryKey>
  >({
    queryKey: getAssociationsessionsStartQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.associationsessions.start.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAssociationsessionsStart<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.associationsessions.start.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.associationsessions.start.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.associationsessions.start.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAssociationsessionsStartQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAssociationsessionsStartQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAssociationsessionsVerifyQueryKey(
  args: InferRequestType<typeof client.associationsessions.verify.$get>,
) {
  return ['associationsessions', '/associationsessions/verify', args] as const
}

export function getAssociationsessionsVerifyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.associationsessions.verify.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.associationsessions.verify.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.associationsessions.verify.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationsessionsVerifyQueryKey>
  >({
    queryKey: getAssociationsessionsVerifyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.associationsessions.verify.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAssociationsessionsVerify<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.associationsessions.verify.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.associationsessions.verify.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.associationsessions.verify.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAssociationsessionsVerifyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAssociationsessionsVerifyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getReportsQueryKey(args: InferRequestType<typeof client.reports.$get>) {
  return ['reports', '/reports', args] as const
}

export function getReportsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.reports.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReportsQueryKey>
  >({
    queryKey: getReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.reports.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
