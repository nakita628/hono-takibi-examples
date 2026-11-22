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

export function getApiV2AccountsPremiumIdTransactionsIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.accounts.premium)[':id']['transactions']['index']['$get']
  >,
) {
  return ['api', '/api/v2/accounts/premium/:id/transactions/', args] as const
}

export function getApiV2AccountsPremiumIdTransactionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts.premium)[':id']['transactions']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts.premium)[':id']['transactions']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.accounts.premium)[':id']['transactions']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsPremiumIdTransactionsIndexQueryKey>
  >({
    queryKey: getApiV2AccountsPremiumIdTransactionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.accounts.premium[':id'].transactions.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV2AccountsPremiumIdTransactionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts.premium)[':id']['transactions']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.accounts.premium)[':id']['transactions']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.accounts.premium)[':id']['transactions']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AccountsPremiumIdTransactionsIndexQueryKey>
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
      ...getApiV2AccountsPremiumIdTransactionsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiV2AccountsIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2.accounts)[':id']['index']['$get']>,
) {
  return ['api', '/api/v2/accounts/:id/', args] as const
}

export function getApiV2AccountsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.accounts)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.accounts)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.accounts)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsIdIndexQueryKey>
  >({
    queryKey: getApiV2AccountsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.accounts[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV2AccountsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.accounts)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.accounts)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.accounts)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AccountsIdIndexQueryKey>
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
      ...getApiV2AccountsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV2AccountsIdBalancesIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2.accounts)[':id']['balances']['index']['$get']>,
) {
  return ['api', '/api/v2/accounts/:id/balances/', args] as const
}

export function getApiV2AccountsIdBalancesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.accounts)[':id']['balances']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.accounts)[':id']['balances']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.accounts)[':id']['balances']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsIdBalancesIndexQueryKey>
  >({
    queryKey: getApiV2AccountsIdBalancesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.accounts[':id'].balances.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV2AccountsIdBalancesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.accounts)[':id']['balances']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.accounts)[':id']['balances']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v2.accounts)[':id']['balances']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AccountsIdBalancesIndexQueryKey>
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
      ...getApiV2AccountsIdBalancesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV2AccountsIdDetailsIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2.accounts)[':id']['details']['index']['$get']>,
) {
  return ['api', '/api/v2/accounts/:id/details/', args] as const
}

export function getApiV2AccountsIdDetailsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.accounts)[':id']['details']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.accounts)[':id']['details']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.accounts)[':id']['details']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsIdDetailsIndexQueryKey>
  >({
    queryKey: getApiV2AccountsIdDetailsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.accounts[':id'].details.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV2AccountsIdDetailsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.accounts)[':id']['details']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.accounts)[':id']['details']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v2.accounts)[':id']['details']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AccountsIdDetailsIndexQueryKey>
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
      ...getApiV2AccountsIdDetailsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV2AccountsIdTransactionsIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2.accounts)[':id']['transactions']['index']['$get']>,
) {
  return ['api', '/api/v2/accounts/:id/transactions/', args] as const
}

export function getApiV2AccountsIdTransactionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.accounts)[':id']['transactions']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.accounts)[':id']['transactions']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.accounts)[':id']['transactions']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsIdTransactionsIndexQueryKey>
  >({
    queryKey: getApiV2AccountsIdTransactionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.accounts[':id'].transactions.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV2AccountsIdTransactionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.accounts)[':id']['transactions']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.accounts)[':id']['transactions']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v2.accounts)[':id']['transactions']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AccountsIdTransactionsIndexQueryKey>
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
      ...getApiV2AccountsIdTransactionsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV2AgreementsEnduserIndexQueryKey(
  args: InferRequestType<typeof client.api.v2.agreements.enduser.index.$get>,
) {
  return ['api', '/api/v2/agreements/enduser/', args] as const
}

export function getApiV2AgreementsEnduserIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agreements.enduser.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.agreements.enduser.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.agreements.enduser.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AgreementsEnduserIndexQueryKey>
  >({
    queryKey: getApiV2AgreementsEnduserIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.agreements.enduser.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV2AgreementsEnduserIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agreements.enduser.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.agreements.enduser.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v2.agreements.enduser.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AgreementsEnduserIndexQueryKey>
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
      ...getApiV2AgreementsEnduserIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiV2AgreementsEnduserIndexMutationKey() {
  return ['api', '/api/v2/agreements/enduser/', 'POST'] as const
}

export function getPostApiV2AgreementsEnduserIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.agreements.enduser.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.agreements.enduser.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2AgreementsEnduserIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.agreements.enduser.index.$post>) {
      return parseResponse(client.api.v2.agreements.enduser.index.$post(args, options))
    },
  })
}

export function injectPostApiV2AgreementsEnduserIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v2.agreements.enduser.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v2.agreements.enduser.index.$post>,
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
    const mutationDefaults = getPostApiV2AgreementsEnduserIndexMutationOptions<
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

export function getApiV2AgreementsEnduserIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2.agreements.enduser)[':id']['index']['$get']>,
) {
  return ['api', '/api/v2/agreements/enduser/:id/', args] as const
}

export function getApiV2AgreementsEnduserIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.agreements.enduser)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.agreements.enduser)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.agreements.enduser)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AgreementsEnduserIdIndexQueryKey>
  >({
    queryKey: getApiV2AgreementsEnduserIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.agreements.enduser[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV2AgreementsEnduserIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.agreements.enduser)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.agreements.enduser)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.agreements.enduser)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AgreementsEnduserIdIndexQueryKey>
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
      ...getApiV2AgreementsEnduserIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteApiV2AgreementsEnduserIdIndexMutationKey() {
  return ['api', '/api/v2/agreements/enduser/:id/', 'DELETE'] as const
}

export function getDeleteApiV2AgreementsEnduserIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.agreements.enduser)[':id']['index']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.agreements.enduser)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2AgreementsEnduserIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.agreements.enduser)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.api.v2.agreements.enduser[':id'].index.$delete(args, options))
    },
  })
}

export function injectDeleteApiV2AgreementsEnduserIdIndex<
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
                ReturnType<(typeof client.api.v2.agreements.enduser)[':id']['index']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v2.agreements.enduser)[':id']['index']['$delete']>,
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
    const mutationDefaults = getDeleteApiV2AgreementsEnduserIdIndexMutationOptions<
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

export function getPutApiV2AgreementsEnduserIdAcceptIndexMutationKey() {
  return ['api', '/api/v2/agreements/enduser/:id/accept/', 'PUT'] as const
}

export function getPutApiV2AgreementsEnduserIdAcceptIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.agreements.enduser)[':id']['accept']['index']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.agreements.enduser)[':id']['accept']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2AgreementsEnduserIdAcceptIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.agreements.enduser)[':id']['accept']['index']['$put']
      >,
    ) {
      return parseResponse(client.api.v2.agreements.enduser[':id'].accept.index.$put(args, options))
    },
  })
}

export function injectPutApiV2AgreementsEnduserIdAcceptIndex<
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
                  (typeof client.api.v2.agreements.enduser)[':id']['accept']['index']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v2.agreements.enduser)[':id']['accept']['index']['$put']
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
    const mutationDefaults = getPutApiV2AgreementsEnduserIdAcceptIndexMutationOptions<
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

export function getApiV2InstitutionsIndexQueryKey(
  args: InferRequestType<typeof client.api.v2.institutions.index.$get>,
) {
  return ['api', '/api/v2/institutions/', args] as const
}

export function getApiV2InstitutionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.institutions.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.institutions.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.institutions.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2InstitutionsIndexQueryKey>
  >({
    queryKey: getApiV2InstitutionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.institutions.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV2InstitutionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.institutions.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.institutions.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.institutions.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2InstitutionsIndexQueryKey>
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
      ...getApiV2InstitutionsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV2InstitutionsIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2.institutions)[':id']['index']['$get']>,
) {
  return ['api', '/api/v2/institutions/:id/', args] as const
}

export function getApiV2InstitutionsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.institutions)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.institutions)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.institutions)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2InstitutionsIdIndexQueryKey>
  >({
    queryKey: getApiV2InstitutionsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.institutions[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV2InstitutionsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.institutions)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.institutions)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.institutions)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2InstitutionsIdIndexQueryKey>
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
      ...getApiV2InstitutionsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV2PaymentsIndexQueryKey(
  args: InferRequestType<typeof client.api.v2.payments.index.$get>,
) {
  return ['api', '/api/v2/payments/', args] as const
}

export function getApiV2PaymentsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.payments.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.payments.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.payments.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PaymentsIndexQueryKey>
  >({
    queryKey: getApiV2PaymentsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.payments.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV2PaymentsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.payments.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.payments.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.payments.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2PaymentsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2PaymentsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiV2PaymentsIndexMutationKey() {
  return ['api', '/api/v2/payments/', 'POST'] as const
}

export function getPostApiV2PaymentsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.payments.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.payments.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2PaymentsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.payments.index.$post>) {
      return parseResponse(client.api.v2.payments.index.$post(args, options))
    },
  })
}

export function injectPostApiV2PaymentsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.payments.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v2.payments.index.$post>,
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
    const mutationDefaults = getPostApiV2PaymentsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV2PaymentsAccountIndexQueryKey() {
  return ['api', '/api/v2/payments/account/'] as const
}

export function getApiV2PaymentsAccountIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.payments.account.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.payments.account.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PaymentsAccountIndexQueryKey>
  >({
    queryKey: getApiV2PaymentsAccountIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.payments.account.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV2PaymentsAccountIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.payments.account.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v2.payments.account.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2PaymentsAccountIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2PaymentsAccountIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiV2PaymentsCreditorsIndexQueryKey(
  args: InferRequestType<typeof client.api.v2.payments.creditors.index.$get>,
) {
  return ['api', '/api/v2/payments/creditors/', args] as const
}

export function getApiV2PaymentsCreditorsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.payments.creditors.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.payments.creditors.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.payments.creditors.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PaymentsCreditorsIndexQueryKey>
  >({
    queryKey: getApiV2PaymentsCreditorsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.payments.creditors.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV2PaymentsCreditorsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.payments.creditors.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.payments.creditors.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v2.payments.creditors.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2PaymentsCreditorsIndexQueryKey>
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
      ...getApiV2PaymentsCreditorsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiV2PaymentsCreditorsIndexMutationKey() {
  return ['api', '/api/v2/payments/creditors/', 'POST'] as const
}

export function getPostApiV2PaymentsCreditorsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.payments.creditors.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.payments.creditors.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2PaymentsCreditorsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.payments.creditors.index.$post>) {
      return parseResponse(client.api.v2.payments.creditors.index.$post(args, options))
    },
  })
}

export function injectPostApiV2PaymentsCreditorsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v2.payments.creditors.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v2.payments.creditors.index.$post>,
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
    const mutationDefaults = getPostApiV2PaymentsCreditorsIndexMutationOptions<
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

export function getApiV2PaymentsCreditorsIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2.payments.creditors)[':id']['index']['$get']>,
) {
  return ['api', '/api/v2/payments/creditors/:id/', args] as const
}

export function getApiV2PaymentsCreditorsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.payments.creditors)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.payments.creditors)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.payments.creditors)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PaymentsCreditorsIdIndexQueryKey>
  >({
    queryKey: getApiV2PaymentsCreditorsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.payments.creditors[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV2PaymentsCreditorsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.payments.creditors)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.payments.creditors)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.payments.creditors)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2PaymentsCreditorsIdIndexQueryKey>
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
      ...getApiV2PaymentsCreditorsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteApiV2PaymentsCreditorsIdIndexMutationKey() {
  return ['api', '/api/v2/payments/creditors/:id/', 'DELETE'] as const
}

export function getDeleteApiV2PaymentsCreditorsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.payments.creditors)[':id']['index']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.payments.creditors)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2PaymentsCreditorsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.payments.creditors)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.api.v2.payments.creditors[':id'].index.$delete(args, options))
    },
  })
}

export function injectDeleteApiV2PaymentsCreditorsIdIndex<
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
                  ReturnType<(typeof client.api.v2.payments.creditors)[':id']['index']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v2.payments.creditors)[':id']['index']['$delete']>,
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
    const mutationDefaults = getDeleteApiV2PaymentsCreditorsIdIndexMutationOptions<
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

export function getApiV2PaymentsFieldsInstitutionIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.payments.fields)[':institution_id']['index']['$get']
  >,
) {
  return ['api', '/api/v2/payments/fields/:institution_id/', args] as const
}

export function getApiV2PaymentsFieldsInstitutionIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.payments.fields)[':institution_id']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.payments.fields)[':institution_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.payments.fields)[':institution_id']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PaymentsFieldsInstitutionIdIndexQueryKey>
  >({
    queryKey: getApiV2PaymentsFieldsInstitutionIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.payments.fields[':institution_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV2PaymentsFieldsInstitutionIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.payments.fields)[':institution_id']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.payments.fields)[':institution_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.payments.fields)[':institution_id']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2PaymentsFieldsInstitutionIdIndexQueryKey>
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
      ...getApiV2PaymentsFieldsInstitutionIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV2PaymentsIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2.payments)[':id']['index']['$get']>,
) {
  return ['api', '/api/v2/payments/:id/', args] as const
}

export function getApiV2PaymentsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.payments)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.payments)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.payments)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PaymentsIdIndexQueryKey>
  >({
    queryKey: getApiV2PaymentsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.payments[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV2PaymentsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.payments)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.payments)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.payments)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2PaymentsIdIndexQueryKey>
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
      ...getApiV2PaymentsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteApiV2PaymentsIdIndexMutationKey() {
  return ['api', '/api/v2/payments/:id/', 'DELETE'] as const
}

export function getDeleteApiV2PaymentsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.payments)[':id']['index']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.payments)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2PaymentsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.payments)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.api.v2.payments[':id'].index.$delete(args, options))
    },
  })
}

export function injectDeleteApiV2PaymentsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.payments)[':id']['index']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v2.payments)[':id']['index']['$delete']>,
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
    const mutationDefaults = getDeleteApiV2PaymentsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV2RequisitionsIndexQueryKey(
  args: InferRequestType<typeof client.api.v2.requisitions.index.$get>,
) {
  return ['api', '/api/v2/requisitions/', args] as const
}

export function getApiV2RequisitionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.requisitions.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.requisitions.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.requisitions.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2RequisitionsIndexQueryKey>
  >({
    queryKey: getApiV2RequisitionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.requisitions.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV2RequisitionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.requisitions.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.requisitions.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.requisitions.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2RequisitionsIndexQueryKey>
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
      ...getApiV2RequisitionsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiV2RequisitionsIndexMutationKey() {
  return ['api', '/api/v2/requisitions/', 'POST'] as const
}

export function getPostApiV2RequisitionsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.requisitions.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.requisitions.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2RequisitionsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.requisitions.index.$post>) {
      return parseResponse(client.api.v2.requisitions.index.$post(args, options))
    },
  })
}

export function injectPostApiV2RequisitionsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.requisitions.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v2.requisitions.index.$post>,
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
    const mutationDefaults = getPostApiV2RequisitionsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV2RequisitionsIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2.requisitions)[':id']['index']['$get']>,
) {
  return ['api', '/api/v2/requisitions/:id/', args] as const
}

export function getApiV2RequisitionsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.requisitions)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.requisitions)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.requisitions)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2RequisitionsIdIndexQueryKey>
  >({
    queryKey: getApiV2RequisitionsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.requisitions[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV2RequisitionsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.requisitions)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.requisitions)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.requisitions)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2RequisitionsIdIndexQueryKey>
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
      ...getApiV2RequisitionsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteApiV2RequisitionsIdIndexMutationKey() {
  return ['api', '/api/v2/requisitions/:id/', 'DELETE'] as const
}

export function getDeleteApiV2RequisitionsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.requisitions)[':id']['index']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.requisitions)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2RequisitionsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.requisitions)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.api.v2.requisitions[':id'].index.$delete(args, options))
    },
  })
}

export function injectDeleteApiV2RequisitionsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.requisitions)[':id']['index']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v2.requisitions)[':id']['index']['$delete']>,
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
    const mutationDefaults = getDeleteApiV2RequisitionsIdIndexMutationOptions<
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

export function getPostApiV2TokenNewIndexMutationKey() {
  return ['api', '/api/v2/token/new/', 'POST'] as const
}

export function getPostApiV2TokenNewIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.token.new.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.token.new.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2TokenNewIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.token.new.index.$post>) {
      return parseResponse(client.api.v2.token.new.index.$post(args, options))
    },
  })
}

export function injectPostApiV2TokenNewIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.token.new.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v2.token.new.index.$post>,
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
    const mutationDefaults = getPostApiV2TokenNewIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV2TokenRefreshIndexMutationKey() {
  return ['api', '/api/v2/token/refresh/', 'POST'] as const
}

export function getPostApiV2TokenRefreshIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.token.refresh.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.token.refresh.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2TokenRefreshIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.token.refresh.index.$post>) {
      return parseResponse(client.api.v2.token.refresh.index.$post(args, options))
    },
  })
}

export function injectPostApiV2TokenRefreshIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v2.token.refresh.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v2.token.refresh.index.$post>,
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
    const mutationDefaults = getPostApiV2TokenRefreshIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
