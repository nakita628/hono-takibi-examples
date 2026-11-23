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

export function getV1Key() {
  return ['v1'] as const
}

export function getV3Key() {
  return ['v3'] as const
}

export function getV1AccountsQueryKey() {
  return ['v1', '/v1/accounts'] as const
}

export function getV1AccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1AccountsQueryKey>
  >({
    queryKey: getV1AccountsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Accounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AccountsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1AccountsMutationKey() {
  return ['v1', '/v1/accounts', 'POST'] as const
}

export function getPostV1AccountsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.accounts.$post>) {
      return parseResponse(client.v1.accounts.$post(args, options))
    },
  })
}

export function injectPostV1Accounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.accounts.$post>,
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
    const mutationDefaults = getPostV1AccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1AccountsIcanQueryKey(
  args: InferRequestType<(typeof client.v1.accounts)[':ican']['$get']>,
) {
  return ['v1', '/v1/accounts/:ican', args] as const
}

export function getV1AccountsIcanQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accounts)[':ican']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':ican']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accounts)[':ican']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsIcanQueryKey>
  >({
    queryKey: getV1AccountsIcanQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':ican'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1AccountsIcan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accounts)[':ican']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.accounts)[':ican']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accounts)[':ican']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsIcanQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AccountsIcanQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1AccountsIcanTransactionsQueryKey(
  args: InferRequestType<(typeof client.v1.accounts)[':ican']['transactions']['$get']>,
) {
  return ['v1', '/v1/accounts/:ican/transactions', args] as const
}

export function getV1AccountsIcanTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':ican']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':ican']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':ican']['transactions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsIcanTransactionsQueryKey>
  >({
    queryKey: getV1AccountsIcanTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':ican'].transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AccountsIcanTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':ican']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.accounts)[':ican']['transactions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accounts)[':ican']['transactions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsIcanTransactionsQueryKey>
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
      ...getV1AccountsIcanTransactionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1AccountsIcanTransactionsFilterQueryKey(
  args: InferRequestType<(typeof client.v1.accounts)[':ican']['transactions']['filter']['$get']>,
) {
  return ['v1', '/v1/accounts/:ican/transactions/filter', args] as const
}

export function getV1AccountsIcanTransactionsFilterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':ican']['transactions']['filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':ican']['transactions']['filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.accounts)[':ican']['transactions']['filter']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsIcanTransactionsFilterQueryKey>
  >({
    queryKey: getV1AccountsIcanTransactionsFilterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':ican'].transactions.filter.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AccountsIcanTransactionsFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':ican']['transactions']['filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.accounts)[':ican']['transactions']['filter']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.accounts)[':ican']['transactions']['filter']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsIcanTransactionsFilterQueryKey>
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
      ...getV1AccountsIcanTransactionsFilterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1AppsMutationKey() {
  return ['v1', '/v1/apps', 'POST'] as const
}

export function getPostV1AppsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.apps.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.apps.$post>) {
      return parseResponse(client.v1.apps.$post(args, options))
    },
  })
}

export function injectPostV1Apps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$post>>>>>,
        TError,
        InferRequestType<typeof client.v1.apps.$post>,
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
    const mutationDefaults = getPostV1AppsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1AppsAccesstokensMutationKey() {
  return ['v1', '/v1/apps/accesstokens', 'POST'] as const
}

export function getPostV1AppsAccesstokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.accesstokens.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.apps.accesstokens.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppsAccesstokensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.apps.accesstokens.$post>) {
      return parseResponse(client.v1.apps.accesstokens.$post(args, options))
    },
  })
}

export function injectPostV1AppsAccesstokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.accesstokens.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.apps.accesstokens.$post>,
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
    const mutationDefaults = getPostV1AppsAccesstokensMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1AspspsQueryKey(args: InferRequestType<typeof client.v1.aspsps.$get>) {
  return ['v1', '/v1/aspsps', args] as const
}

export function getV1AspspsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.aspsps.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.aspsps.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.aspsps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1AspspsQueryKey>
  >({
    queryKey: getV1AspspsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.aspsps.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Aspsps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.aspsps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.aspsps.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.aspsps.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AspspsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AspspsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1BatchesQueryKey(args: InferRequestType<typeof client.v1.batches.$get>) {
  return ['v1', '/v1/batches', args] as const
}

export function getV1BatchesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batches.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.batches.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batches.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1BatchesQueryKey>
  >({
    queryKey: getV1BatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.batches.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Batches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.batches.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batches.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1BatchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1BatchesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1BatchesMutationKey() {
  return ['v1', '/v1/batches', 'POST'] as const
}

export function getPostV1BatchesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batches.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.batches.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BatchesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.batches.$post>) {
      return parseResponse(client.v1.batches.$post(args, options))
    },
  })
}

export function injectPostV1Batches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batches.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.batches.$post>,
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
    const mutationDefaults = getPostV1BatchesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1BatchesBatchUuidQueryKey(
  args: InferRequestType<(typeof client.v1.batches)[':batchUuid']['$get']>,
) {
  return ['v1', '/v1/batches/:batchUuid', args] as const
}

export function getV1BatchesBatchUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.batches)[':batchUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BatchesBatchUuidQueryKey>
  >({
    queryKey: getV1BatchesBatchUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.batches[':batchUuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1BatchesBatchUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.batches)[':batchUuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BatchesBatchUuidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1BatchesBatchUuidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutV1BatchesBatchUuidMutationKey() {
  return ['v1', '/v1/batches/:batchUuid', 'PUT'] as const
}

export function getPutV1BatchesBatchUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.batches)[':batchUuid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1BatchesBatchUuidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.batches)[':batchUuid']['$put']>) {
      return parseResponse(client.v1.batches[':batchUuid'].$put(args, options))
    },
  })
}

export function injectPutV1BatchesBatchUuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.batches)[':batchUuid']['$put']>,
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
    const mutationDefaults = getPutV1BatchesBatchUuidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV1BatchesBatchUuidMutationKey() {
  return ['v1', '/v1/batches/:batchUuid', 'DELETE'] as const
}

export function getDeleteV1BatchesBatchUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.batches)[':batchUuid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BatchesBatchUuidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.batches)[':batchUuid']['$delete']>) {
      return parseResponse(client.v1.batches[':batchUuid'].$delete(args, options))
    },
  })
}

export function injectDeleteV1BatchesBatchUuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.batches)[':batchUuid']['$delete']>,
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
    const mutationDefaults = getDeleteV1BatchesBatchUuidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1BatchesBatchUuidApprovalsQueryKey(
  args: InferRequestType<(typeof client.v1.batches)[':batchUuid']['approvals']['$get']>,
) {
  return ['v1', '/v1/batches/:batchUuid/approvals', args] as const
}

export function getV1BatchesBatchUuidApprovalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['approvals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.batches)[':batchUuid']['approvals']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['approvals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BatchesBatchUuidApprovalsQueryKey>
  >({
    queryKey: getV1BatchesBatchUuidApprovalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.batches[':batchUuid'].approvals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1BatchesBatchUuidApprovals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['approvals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.batches)[':batchUuid']['approvals']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['approvals']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BatchesBatchUuidApprovalsQueryKey>
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
      ...getV1BatchesBatchUuidApprovalsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1BatchesBatchUuidBanktransfersQueryKey(
  args: InferRequestType<(typeof client.v1.batches)[':batchUuid']['banktransfers']['$get']>,
) {
  return ['v1', '/v1/batches/:batchUuid/banktransfers', args] as const
}

export function getV1BatchesBatchUuidBanktransfersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['banktransfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.batches)[':batchUuid']['banktransfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['banktransfers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BatchesBatchUuidBanktransfersQueryKey>
  >({
    queryKey: getV1BatchesBatchUuidBanktransfersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.batches[':batchUuid'].banktransfers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1BatchesBatchUuidBanktransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['banktransfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.batches)[':batchUuid']['banktransfers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['banktransfers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BatchesBatchUuidBanktransfersQueryKey>
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
      ...getV1BatchesBatchUuidBanktransfersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1BatchesBatchUuidBanktransfersMutationKey() {
  return ['v1', '/v1/batches/:batchUuid/banktransfers', 'POST'] as const
}

export function getPostV1BatchesBatchUuidBanktransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['banktransfers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.batches)[':batchUuid']['banktransfers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BatchesBatchUuidBanktransfersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.batches)[':batchUuid']['banktransfers']['$post']>,
    ) {
      return parseResponse(client.v1.batches[':batchUuid'].banktransfers.$post(args, options))
    },
  })
}

export function injectPostV1BatchesBatchUuidBanktransfers<
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
                ReturnType<(typeof client.v1.batches)[':batchUuid']['banktransfers']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.batches)[':batchUuid']['banktransfers']['$post']>,
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
    const mutationDefaults = getPostV1BatchesBatchUuidBanktransfersMutationOptions<
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

export function getDeleteV1BatchesBatchUuidBanktransfersItemUuidMutationKey() {
  return ['v1', '/v1/batches/:batchUuid/banktransfers/:itemUuid', 'DELETE'] as const
}

export function getDeleteV1BatchesBatchUuidBanktransfersItemUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.batches)[':batchUuid']['banktransfers'][':itemUuid']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.batches)[':batchUuid']['banktransfers'][':itemUuid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BatchesBatchUuidBanktransfersItemUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.batches)[':batchUuid']['banktransfers'][':itemUuid']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.batches[':batchUuid'].banktransfers[':itemUuid'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV1BatchesBatchUuidBanktransfersItemUuid<
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
                  (typeof client.v1.batches)[':batchUuid']['banktransfers'][':itemUuid']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.batches)[':batchUuid']['banktransfers'][':itemUuid']['$delete']
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
    const mutationDefaults = getDeleteV1BatchesBatchUuidBanktransfersItemUuidMutationOptions<
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

export function getV1BatchesBatchUuidInternaltransfersQueryKey(
  args: InferRequestType<(typeof client.v1.batches)[':batchUuid']['internaltransfers']['$get']>,
) {
  return ['v1', '/v1/batches/:batchUuid/internaltransfers', args] as const
}

export function getV1BatchesBatchUuidInternaltransfersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['internaltransfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.batches)[':batchUuid']['internaltransfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['internaltransfers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BatchesBatchUuidInternaltransfersQueryKey>
  >({
    queryKey: getV1BatchesBatchUuidInternaltransfersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.batches[':batchUuid'].internaltransfers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1BatchesBatchUuidInternaltransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['internaltransfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.batches)[':batchUuid']['internaltransfers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.batches)[':batchUuid']['internaltransfers']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BatchesBatchUuidInternaltransfersQueryKey>
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
      ...getV1BatchesBatchUuidInternaltransfersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1BatchesBatchUuidInternaltransfersMutationKey() {
  return ['v1', '/v1/batches/:batchUuid/internaltransfers', 'POST'] as const
}

export function getPostV1BatchesBatchUuidInternaltransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.batches)[':batchUuid']['internaltransfers']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.batches)[':batchUuid']['internaltransfers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BatchesBatchUuidInternaltransfersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.batches)[':batchUuid']['internaltransfers']['$post']
      >,
    ) {
      return parseResponse(client.v1.batches[':batchUuid'].internaltransfers.$post(args, options))
    },
  })
}

export function injectPostV1BatchesBatchUuidInternaltransfers<
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
                ReturnType<(typeof client.v1.batches)[':batchUuid']['internaltransfers']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.batches)[':batchUuid']['internaltransfers']['$post']>,
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
    const mutationDefaults = getPostV1BatchesBatchUuidInternaltransfersMutationOptions<
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

export function getDeleteV1BatchesBatchUuidInternaltransfersItemUuidMutationKey() {
  return ['v1', '/v1/batches/:batchUuid/internaltransfers/:itemUuid', 'DELETE'] as const
}

export function getDeleteV1BatchesBatchUuidInternaltransfersItemUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.batches)[':batchUuid']['internaltransfers'][':itemUuid']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.batches)[':batchUuid']['internaltransfers'][':itemUuid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BatchesBatchUuidInternaltransfersItemUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.batches)[':batchUuid']['internaltransfers'][':itemUuid']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.batches[':batchUuid'].internaltransfers[':itemUuid'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV1BatchesBatchUuidInternaltransfersItemUuid<
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
                  (typeof client.v1.batches)[':batchUuid']['internaltransfers'][':itemUuid']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.batches)[':batchUuid']['internaltransfers'][':itemUuid']['$delete']
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
    const mutationDefaults = getDeleteV1BatchesBatchUuidInternaltransfersItemUuidMutationOptions<
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

export function getV1CardsQueryKey() {
  return ['v1', '/v1/cards'] as const
}

export function getV1CardsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1CardsQueryKey>
  >({
    queryKey: getV1CardsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.cards.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Cards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1CardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CardsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1CardsMutationKey() {
  return ['v1', '/v1/cards', 'POST'] as const
}

export function getPostV1CardsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.cards.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.cards.$post>) {
      return parseResponse(client.v1.cards.$post(args, options))
    },
  })
}

export function injectPostV1Cards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.cards.$post>,
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
    const mutationDefaults = getPostV1CardsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1CardsCardIdBlockMutationKey() {
  return ['v1', '/v1/cards/:cardId/block', 'POST'] as const
}

export function getPostV1CardsCardIdBlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.cards)[':cardId']['block']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.cards)[':cardId']['block']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CardsCardIdBlockMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.cards)[':cardId']['block']['$post']>,
    ) {
      return parseResponse(client.v1.cards[':cardId'].block.$post(args, options))
    },
  })
}

export function injectPostV1CardsCardIdBlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.cards)[':cardId']['block']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.cards)[':cardId']['block']['$post']>,
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
    const mutationDefaults = getPostV1CardsCardIdBlockMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1CardsCardIdTransactionsQueryKey(
  args: InferRequestType<(typeof client.v1.cards)[':cardId']['transactions']['$get']>,
) {
  return ['v1', '/v1/cards/:cardId/transactions', args] as const
}

export function getV1CardsCardIdTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.cards)[':cardId']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.cards)[':cardId']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.cards)[':cardId']['transactions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CardsCardIdTransactionsQueryKey>
  >({
    queryKey: getV1CardsCardIdTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.cards[':cardId'].transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1CardsCardIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.cards)[':cardId']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.cards)[':cardId']['transactions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.cards)[':cardId']['transactions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CardsCardIdTransactionsQueryKey>
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
      ...getV1CardsCardIdTransactionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1CardsCardIdUnblockMutationKey() {
  return ['v1', '/v1/cards/:cardId/unblock', 'POST'] as const
}

export function getPostV1CardsCardIdUnblockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.cards)[':cardId']['unblock']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.cards)[':cardId']['unblock']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CardsCardIdUnblockMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.cards)[':cardId']['unblock']['$post']>,
    ) {
      return parseResponse(client.v1.cards[':cardId'].unblock.$post(args, options))
    },
  })
}

export function injectPostV1CardsCardIdUnblock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.cards)[':cardId']['unblock']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.cards)[':cardId']['unblock']['$post']>,
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
    const mutationDefaults = getPostV1CardsCardIdUnblockMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1DirectdebitsQueryKey(
  args: InferRequestType<typeof client.v1.directdebits.$get>,
) {
  return ['v1', '/v1/directdebits', args] as const
}

export function getV1DirectdebitsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.directdebits.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.directdebits.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.directdebits.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1DirectdebitsQueryKey>
  >({
    queryKey: getV1DirectdebitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.directdebits.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Directdebits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.directdebits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.directdebits.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.directdebits.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1DirectdebitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1DirectdebitsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1DirectdebitsDirectDebitUuidQueryKey(
  args: InferRequestType<(typeof client.v1.directdebits)[':directDebitUuid']['$get']>,
) {
  return ['v1', '/v1/directdebits/:directDebitUuid', args] as const
}

export function getV1DirectdebitsDirectDebitUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.directdebits)[':directDebitUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.directdebits)[':directDebitUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.directdebits)[':directDebitUuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DirectdebitsDirectDebitUuidQueryKey>
  >({
    queryKey: getV1DirectdebitsDirectDebitUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.directdebits[':directDebitUuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1DirectdebitsDirectDebitUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.directdebits)[':directDebitUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.directdebits)[':directDebitUuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.directdebits)[':directDebitUuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DirectdebitsDirectDebitUuidQueryKey>
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
      ...getV1DirectdebitsDirectDebitUuidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1DirectdebitsDirectDebitUuidRejectMutationKey() {
  return ['v1', '/v1/directdebits/:directDebitUuid/reject', 'POST'] as const
}

export function getPostV1DirectdebitsDirectDebitUuidRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.directdebits)[':directDebitUuid']['reject']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.directdebits)[':directDebitUuid']['reject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DirectdebitsDirectDebitUuidRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.directdebits)[':directDebitUuid']['reject']['$post']
      >,
    ) {
      return parseResponse(client.v1.directdebits[':directDebitUuid'].reject.$post(args, options))
    },
  })
}

export function injectPostV1DirectdebitsDirectDebitUuidReject<
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
                  ReturnType<(typeof client.v1.directdebits)[':directDebitUuid']['reject']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.directdebits)[':directDebitUuid']['reject']['$post']>,
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
    const mutationDefaults = getPostV1DirectdebitsDirectDebitUuidRejectMutationOptions<
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

export function getV1MandatesQueryKey() {
  return ['v1', '/v1/mandates'] as const
}

export function getV1MandatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.mandates.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.mandates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1MandatesQueryKey>
  >({
    queryKey: getV1MandatesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.mandates.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Mandates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.mandates.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.mandates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1MandatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1MandatesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1MandatesMandateUuidQueryKey(
  args: InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['$get']>,
) {
  return ['v1', '/v1/mandates/:mandateUuid', args] as const
}

export function getV1MandatesMandateUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.mandates)[':mandateUuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.mandates)[':mandateUuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MandatesMandateUuidQueryKey>
  >({
    queryKey: getV1MandatesMandateUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.mandates[':mandateUuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1MandatesMandateUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.mandates)[':mandateUuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.mandates)[':mandateUuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1MandatesMandateUuidQueryKey>
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
      ...getV1MandatesMandateUuidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1MandatesMandateUuidMutationKey() {
  return ['v1', '/v1/mandates/:mandateUuid', 'POST'] as const
}

export function getPostV1MandatesMandateUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.mandates)[':mandateUuid']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MandatesMandateUuidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['$post']>) {
      return parseResponse(client.v1.mandates[':mandateUuid'].$post(args, options))
    },
  })
}

export function injectPostV1MandatesMandateUuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.mandates)[':mandateUuid']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['$post']>,
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
    const mutationDefaults = getPostV1MandatesMandateUuidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1MandatesMandateUuidActivateMutationKey() {
  return ['v1', '/v1/mandates/:mandateUuid/activate', 'POST'] as const
}

export function getPostV1MandatesMandateUuidActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.mandates)[':mandateUuid']['activate']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['activate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MandatesMandateUuidActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['activate']['$post']>,
    ) {
      return parseResponse(client.v1.mandates[':mandateUuid'].activate.$post(args, options))
    },
  })
}

export function injectPostV1MandatesMandateUuidActivate<
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
                  ReturnType<(typeof client.v1.mandates)[':mandateUuid']['activate']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['activate']['$post']>,
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
    const mutationDefaults = getPostV1MandatesMandateUuidActivateMutationOptions<
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

export function getPostV1MandatesMandateUuidCancelMutationKey() {
  return ['v1', '/v1/mandates/:mandateUuid/cancel', 'POST'] as const
}

export function getPostV1MandatesMandateUuidCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.mandates)[':mandateUuid']['cancel']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MandatesMandateUuidCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['cancel']['$post']>,
    ) {
      return parseResponse(client.v1.mandates[':mandateUuid'].cancel.$post(args, options))
    },
  })
}

export function injectPostV1MandatesMandateUuidCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.mandates)[':mandateUuid']['cancel']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['cancel']['$post']>,
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
    const mutationDefaults = getPostV1MandatesMandateUuidCancelMutationOptions<
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

export function getV1PayeesQueryKey() {
  return ['v1', '/v1/payees'] as const
}

export function getV1PayeesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payees.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payees.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1PayeesQueryKey>
  >({
    queryKey: getV1PayeesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.payees.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Payees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payees.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payees.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1PayeesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PayeesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1PaymentrequestsMutationKey() {
  return ['v1', '/v1/paymentrequests', 'POST'] as const
}

export function getPostV1PaymentrequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentrequests.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.paymentrequests.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PaymentrequestsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.paymentrequests.$post>) {
      return parseResponse(client.v1.paymentrequests.$post(args, options))
    },
  })
}

export function injectPostV1Paymentrequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentrequests.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.paymentrequests.$post>,
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
    const mutationDefaults = getPostV1PaymentrequestsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1PaymentsPaymentUuidQueryKey(
  args: InferRequestType<(typeof client.v1.payments)[':paymentUuid']['$get']>,
) {
  return ['v1', '/v1/payments/:paymentUuid', args] as const
}

export function getV1PaymentsPaymentUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payments)[':paymentUuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.payments)[':paymentUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payments)[':paymentUuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentsPaymentUuidQueryKey>
  >({
    queryKey: getV1PaymentsPaymentUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.payments[':paymentUuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1PaymentsPaymentUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payments)[':paymentUuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.payments)[':paymentUuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.payments)[':paymentUuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PaymentsPaymentUuidQueryKey>
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
      ...getV1PaymentsPaymentUuidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1UserUserIdQueryKey(
  args: InferRequestType<(typeof client.v1.user)[':userId']['$get']>,
) {
  return ['v1', '/v1/user/:userId', args] as const
}

export function getV1UserUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.user)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.user)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.user)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UserUserIdQueryKey>
  >({
    queryKey: getV1UserUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.user[':userId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1UserUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.user)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.user)[':userId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.user)[':userId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UserUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1UserUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1UsersQueryKey() {
  return ['v1', '/v1/users'] as const
}

export function getV1UsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1UsersQueryKey>
  >({
    queryKey: getV1UsersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1UsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1UsersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV3AccountsIcanTransactionsQueryKey(
  args: InferRequestType<(typeof client.v3.accounts)[':ican']['transactions']['$get']>,
) {
  return ['v3', '/v3/accounts/:ican/transactions', args] as const
}

export function getV3AccountsIcanTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.accounts)[':ican']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.accounts)[':ican']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.accounts)[':ican']['transactions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3AccountsIcanTransactionsQueryKey>
  >({
    queryKey: getV3AccountsIcanTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.accounts[':ican'].transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV3AccountsIcanTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.accounts)[':ican']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.accounts)[':ican']['transactions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.accounts)[':ican']['transactions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3AccountsIcanTransactionsQueryKey>
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
      ...getV3AccountsIcanTransactionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
