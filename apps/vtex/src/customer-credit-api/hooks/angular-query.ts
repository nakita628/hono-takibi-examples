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

export function getApiCreditcontrolAccountsQueryKey(
  args: InferRequestType<typeof client.api.creditcontrol.accounts.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/creditcontrol/accounts', keyArgs] as const
}

export function getApiCreditcontrolAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.creditcontrol.accounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.creditcontrol.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.creditcontrol.accounts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCreditcontrolAccountsQueryKey>
  >({
    queryKey: getApiCreditcontrolAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.creditcontrol.accounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiCreditcontrolAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.creditcontrol.accounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.creditcontrol.accounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.creditcontrol.accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCreditcontrolAccountsQueryKey>
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
      ...getApiCreditcontrolAccountsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiCreditcontrolAccountsMutationKey() {
  return ['api', '/api/creditcontrol/accounts', 'POST'] as const
}

export function getPostApiCreditcontrolAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.creditcontrol.accounts.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.creditcontrol.accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCreditcontrolAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.creditcontrol.accounts.$post>) {
      return parseResponse(client.api.creditcontrol.accounts.$post(args, options))
    },
  })
}

export function injectPostApiCreditcontrolAccounts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.creditcontrol.accounts.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.creditcontrol.accounts.$post>,
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
    const mutationDefaults = getPostApiCreditcontrolAccountsMutationOptions<
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

export function getPutApiCreditcontrolAccountsAccountIdMutationKey() {
  return ['api', '/api/creditcontrol/accounts/:accountId', 'PUT'] as const
}

export function getPutApiCreditcontrolAccountsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.creditcontrol.accounts)[':accountId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.creditcontrol.accounts)[':accountId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCreditcontrolAccountsAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.creditcontrol.accounts)[':accountId']['$put']>,
    ) {
      return parseResponse(client.api.creditcontrol.accounts[':accountId'].$put(args, options))
    },
  })
}

export function injectPutApiCreditcontrolAccountsAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.creditcontrol.accounts)[':accountId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.creditcontrol.accounts)[':accountId']['$put']>,
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
    const mutationDefaults = getPutApiCreditcontrolAccountsAccountIdMutationOptions<
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

export function getApiCreditcontrolAccountsCreditAccountIdQueryKey(
  args: InferRequestType<(typeof client.api.creditcontrol.accounts)[':creditAccountId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/creditcontrol/accounts/:creditAccountId', keyArgs] as const
}

export function getApiCreditcontrolAccountsCreditAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.creditcontrol.accounts)[':creditAccountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.creditcontrol.accounts)[':creditAccountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.creditcontrol.accounts)[':creditAccountId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCreditcontrolAccountsCreditAccountIdQueryKey>
  >({
    queryKey: getApiCreditcontrolAccountsCreditAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.creditcontrol.accounts[':creditAccountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiCreditcontrolAccountsCreditAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.creditcontrol.accounts)[':creditAccountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.creditcontrol.accounts)[':creditAccountId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCreditcontrolAccountsCreditAccountIdQueryKey>
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
      ...getApiCreditcontrolAccountsCreditAccountIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutApiCreditcontrolAccountsCreditAccountIdMutationKey() {
  return ['api', '/api/creditcontrol/accounts/:creditAccountId', 'PUT'] as const
}

export function getPutApiCreditcontrolAccountsCreditAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.creditcontrol.accounts)[':creditAccountId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.creditcontrol.accounts)[':creditAccountId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCreditcontrolAccountsCreditAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.creditcontrol.accounts)[':creditAccountId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.creditcontrol.accounts[':creditAccountId'].$put(args, options),
      )
    },
  })
}

export function injectPutApiCreditcontrolAccountsCreditAccountId<
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
                ReturnType<(typeof client.api.creditcontrol.accounts)[':creditAccountId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.creditcontrol.accounts)[':creditAccountId']['$put']>,
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
    const mutationDefaults = getPutApiCreditcontrolAccountsCreditAccountIdMutationOptions<
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

export function getDeleteApiCreditcontrolAccountsCreditAccountIdMutationKey() {
  return ['api', '/api/creditcontrol/accounts/:creditAccountId', 'DELETE'] as const
}

export function getDeleteApiCreditcontrolAccountsCreditAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.creditcontrol.accounts)[':creditAccountId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.creditcontrol.accounts)[':creditAccountId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCreditcontrolAccountsCreditAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.creditcontrol.accounts)[':creditAccountId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.creditcontrol.accounts[':creditAccountId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteApiCreditcontrolAccountsCreditAccountId<
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
                  (typeof client.api.creditcontrol.accounts)[':creditAccountId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.creditcontrol.accounts)[':creditAccountId']['$delete']>,
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
    const mutationDefaults = getDeleteApiCreditcontrolAccountsCreditAccountIdMutationOptions<
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

export function getPutApiCreditcontrolAccountsCreditAccountIdCreditlimitMutationKey() {
  return ['api', '/api/creditcontrol/accounts/:creditAccountId/creditlimit', 'PUT'] as const
}

export function getPutApiCreditcontrolAccountsCreditAccountIdCreditlimitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.creditcontrol.accounts)[':creditAccountId']['creditlimit']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['creditlimit']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiCreditcontrolAccountsCreditAccountIdCreditlimitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.creditcontrol.accounts)[':creditAccountId']['creditlimit']['$put']
      >,
    ) {
      return parseResponse(
        client.api.creditcontrol.accounts[':creditAccountId'].creditlimit.$put(args, options),
      )
    },
  })
}

export function injectPutApiCreditcontrolAccountsCreditAccountIdCreditlimit<
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
                  (typeof client.api.creditcontrol.accounts)[':creditAccountId']['creditlimit']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.creditcontrol.accounts)[':creditAccountId']['creditlimit']['$put']
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
    const mutationDefaults =
      getPutApiCreditcontrolAccountsCreditAccountIdCreditlimitMutationOptions<
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

export function getPostApiCreditcontrolAccountsCreditAccountIdHoldersMutationKey() {
  return ['api', '/api/creditcontrol/accounts/:creditAccountId/holders', 'POST'] as const
}

export function getPostApiCreditcontrolAccountsCreditAccountIdHoldersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.creditcontrol.accounts)[':creditAccountId']['holders']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['holders']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCreditcontrolAccountsCreditAccountIdHoldersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.creditcontrol.accounts)[':creditAccountId']['holders']['$post']
      >,
    ) {
      return parseResponse(
        client.api.creditcontrol.accounts[':creditAccountId'].holders.$post(args, options),
      )
    },
  })
}

export function injectPostApiCreditcontrolAccountsCreditAccountIdHolders<
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
                  (typeof client.api.creditcontrol.accounts)[':creditAccountId']['holders']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.creditcontrol.accounts)[':creditAccountId']['holders']['$post']
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
    const mutationDefaults = getPostApiCreditcontrolAccountsCreditAccountIdHoldersMutationOptions<
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

export function getDeleteApiCreditcontrolAccountsCreditAccountIdHoldersHolderIdMutationKey() {
  return [
    'api',
    '/api/creditcontrol/accounts/:creditAccountId/holders/:holderId',
    'DELETE',
  ] as const
}

export function getDeleteApiCreditcontrolAccountsCreditAccountIdHoldersHolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.creditcontrol.accounts)[':creditAccountId']['holders'][':holderId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['holders'][':holderId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCreditcontrolAccountsCreditAccountIdHoldersHolderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.creditcontrol.accounts)[':creditAccountId']['holders'][':holderId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.creditcontrol.accounts[':creditAccountId'].holders[':holderId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteApiCreditcontrolAccountsCreditAccountIdHoldersHolderId<
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
                  (typeof client.api.creditcontrol.accounts)[':creditAccountId']['holders'][':holderId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.creditcontrol.accounts)[':creditAccountId']['holders'][':holderId']['$delete']
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
    const mutationDefaults =
      getDeleteApiCreditcontrolAccountsCreditAccountIdHoldersHolderIdMutationOptions<
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

export function getApiCreditcontrolAccountsCreditAccountIdInvoicesQueryKey(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/creditcontrol/accounts/:creditAccountId/invoices', keyArgs] as const
}

export function getApiCreditcontrolAccountsCreditAccountIdInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCreditcontrolAccountsCreditAccountIdInvoicesQueryKey>
  >({
    queryKey: getApiCreditcontrolAccountsCreditAccountIdInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.creditcontrol.accounts[':creditAccountId'].invoices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiCreditcontrolAccountsCreditAccountIdInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCreditcontrolAccountsCreditAccountIdInvoicesQueryKey>
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
      ...getApiCreditcontrolAccountsCreditAccountIdInvoicesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdQueryKey(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/creditcontrol/accounts/:creditAccountId/invoices/:invoiceId',
    keyArgs,
  ] as const
}

export function getApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdQueryKey>
  >({
    queryKey: getApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.creditcontrol.accounts[':creditAccountId'].invoices[':invoiceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdQueryKey>
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
      ...getApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdMutationKey() {
  return ['api', '/api/creditcontrol/accounts/:creditAccountId/invoices/:invoiceId', 'PUT'] as const
}

export function getPutApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.creditcontrol.accounts[':creditAccountId'].invoices[':invoiceId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceId<
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
                  (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['$put']
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
    const mutationDefaults =
      getPutApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdMutationOptions<
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

export function getDeleteApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdMutationKey() {
  return [
    'api',
    '/api/creditcontrol/accounts/:creditAccountId/invoices/:invoiceId',
    'DELETE',
  ] as const
}

export function getDeleteApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.creditcontrol.accounts[':creditAccountId'].invoices[':invoiceId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceId<
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
                  (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['$delete']
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
    const mutationDefaults =
      getDeleteApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdMutationOptions<
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

export function getPostApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPaymentsMutationKey() {
  return [
    'api',
    '/api/creditcontrol/accounts/:creditAccountId/invoices/:invoiceId/payments',
    'POST',
  ] as const
}

export function getPostApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['payments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['payments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPaymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['payments']['$post']
      >,
    ) {
      return parseResponse(
        client.api.creditcontrol.accounts[':creditAccountId'].invoices[':invoiceId'].payments.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPayments<
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
                  (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['payments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['payments']['$post']
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
    const mutationDefaults =
      getPostApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPaymentsMutationOptions<
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

export function getPutApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPostponementMutationKey() {
  return [
    'api',
    '/api/creditcontrol/accounts/:creditAccountId/invoices/:invoiceId/postponement',
    'PUT',
  ] as const
}

export function getPutApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPostponementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['postponement']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['postponement']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPostponementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['postponement']['$put']
      >,
    ) {
      return parseResponse(
        client.api.creditcontrol.accounts[':creditAccountId'].invoices[
          ':invoiceId'
        ].postponement.$put(args, options),
      )
    },
  })
}

export function injectPutApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPostponement<
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
                  (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['postponement']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['postponement']['$put']
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
    const mutationDefaults =
      getPutApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPostponementMutationOptions<
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

export function getApiCreditcontrolAccountsCreditAccountIdStatementsQueryKey(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['statements']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/creditcontrol/accounts/:creditAccountId/statements', keyArgs] as const
}

export function getApiCreditcontrolAccountsCreditAccountIdStatementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.creditcontrol.accounts)[':creditAccountId']['statements']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['statements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.creditcontrol.accounts)[':creditAccountId']['statements']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCreditcontrolAccountsCreditAccountIdStatementsQueryKey>
  >({
    queryKey: getApiCreditcontrolAccountsCreditAccountIdStatementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.creditcontrol.accounts[':creditAccountId'].statements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiCreditcontrolAccountsCreditAccountIdStatements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.creditcontrol.accounts)[':creditAccountId']['statements']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['statements']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.creditcontrol.accounts)[':creditAccountId']['statements']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCreditcontrolAccountsCreditAccountIdStatementsQueryKey>
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
      ...getApiCreditcontrolAccountsCreditAccountIdStatementsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutApiCreditcontrolAccountsCreditAccountIdStatementsStatementIdMutationKey() {
  return [
    'api',
    '/api/creditcontrol/accounts/:creditAccountId/statements/:statementId',
    'PUT',
  ] as const
}

export function getPutApiCreditcontrolAccountsCreditAccountIdStatementsStatementIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.creditcontrol.accounts)[':creditAccountId']['statements'][':statementId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['statements'][':statementId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiCreditcontrolAccountsCreditAccountIdStatementsStatementIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.creditcontrol.accounts)[':creditAccountId']['statements'][':statementId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.creditcontrol.accounts[':creditAccountId'].statements[':statementId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutApiCreditcontrolAccountsCreditAccountIdStatementsStatementId<
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
                  (typeof client.api.creditcontrol.accounts)[':creditAccountId']['statements'][':statementId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.creditcontrol.accounts)[':creditAccountId']['statements'][':statementId']['$put']
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
    const mutationDefaults =
      getPutApiCreditcontrolAccountsCreditAccountIdStatementsStatementIdMutationOptions<
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

export function getPutApiCreditcontrolAccountsCreditAccountIdToleranceMutationKey() {
  return ['api', '/api/creditcontrol/accounts/:creditAccountId/tolerance', 'PUT'] as const
}

export function getPutApiCreditcontrolAccountsCreditAccountIdToleranceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.creditcontrol.accounts)[':creditAccountId']['tolerance']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['tolerance']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiCreditcontrolAccountsCreditAccountIdToleranceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.creditcontrol.accounts)[':creditAccountId']['tolerance']['$put']
      >,
    ) {
      return parseResponse(
        client.api.creditcontrol.accounts[':creditAccountId'].tolerance.$put(args, options),
      )
    },
  })
}

export function injectPutApiCreditcontrolAccountsCreditAccountIdTolerance<
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
                  (typeof client.api.creditcontrol.accounts)[':creditAccountId']['tolerance']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.creditcontrol.accounts)[':creditAccountId']['tolerance']['$put']
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
    const mutationDefaults = getPutApiCreditcontrolAccountsCreditAccountIdToleranceMutationOptions<
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

export function getPostApiCreditcontrolAccountsCreditAccountIdTransactionMutationKey() {
  return ['api', '/api/creditcontrol/accounts/:creditAccountId/transaction', 'POST'] as const
}

export function getPostApiCreditcontrolAccountsCreditAccountIdTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transaction']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transaction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCreditcontrolAccountsCreditAccountIdTransactionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transaction']['$post']
      >,
    ) {
      return parseResponse(
        client.api.creditcontrol.accounts[':creditAccountId'].transaction.$post(args, options),
      )
    },
  })
}

export function injectPostApiCreditcontrolAccountsCreditAccountIdTransaction<
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
                  (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transaction']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transaction']['$post']
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
    const mutationDefaults =
      getPostApiCreditcontrolAccountsCreditAccountIdTransactionMutationOptions<
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

export function getPutApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdMutationKey() {
  return [
    'api',
    '/api/creditcontrol/accounts/:creditAccountId/transactions/:transactionId',
    'PUT',
  ] as const
}

export function getPutApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.creditcontrol.accounts[':creditAccountId'].transactions[':transactionId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionId<
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
                  (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['$put']
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
    const mutationDefaults =
      getPutApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdMutationOptions<
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

export function getDeleteApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdMutationKey() {
  return [
    'api',
    '/api/creditcontrol/accounts/:creditAccountId/transactions/:transactionId',
    'DELETE',
  ] as const
}

export function getDeleteApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.creditcontrol.accounts[':creditAccountId'].transactions[
          ':transactionId'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionId<
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
                  (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['$delete']
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
    const mutationDefaults =
      getDeleteApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdMutationOptions<
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

export function getPostApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRefundsMutationKey() {
  return [
    'api',
    '/api/creditcontrol/accounts/:creditAccountId/transactions/:transactionId/refunds',
    'POST',
  ] as const
}

export function getPostApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRefundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['refunds']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['refunds']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRefundsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['refunds']['$post']
      >,
    ) {
      return parseResponse(
        client.api.creditcontrol.accounts[':creditAccountId'].transactions[
          ':transactionId'
        ].refunds.$post(args, options),
      )
    },
  })
}

export function injectPostApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRefunds<
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
                  (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['refunds']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['refunds']['$post']
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
    const mutationDefaults =
      getPostApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRefundsMutationOptions<
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

export function getPutApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdSettlementMutationKey() {
  return [
    'api',
    '/api/creditcontrol/accounts/:creditAccountId/transactions/:transactionId/settlement',
    'PUT',
  ] as const
}

export function getPutApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdSettlementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['settlement']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['settlement']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdSettlementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['settlement']['$put']
      >,
    ) {
      return parseResponse(
        client.api.creditcontrol.accounts[':creditAccountId'].transactions[
          ':transactionId'
        ].settlement.$put(args, options),
      )
    },
  })
}

export function injectPutApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdSettlement<
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
                  (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['settlement']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['settlement']['$put']
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
    const mutationDefaults =
      getPutApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdSettlementMutationOptions<
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

export function getApiCreditcontrolInvoicesQueryKey(
  args: InferRequestType<typeof client.api.creditcontrol.invoices.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/creditcontrol/invoices', keyArgs] as const
}

export function getApiCreditcontrolInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.creditcontrol.invoices.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.creditcontrol.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.creditcontrol.invoices.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCreditcontrolInvoicesQueryKey>
  >({
    queryKey: getApiCreditcontrolInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.creditcontrol.invoices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiCreditcontrolInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.creditcontrol.invoices.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.creditcontrol.invoices.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.creditcontrol.invoices.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCreditcontrolInvoicesQueryKey>
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
      ...getApiCreditcontrolInvoicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiCreditcontrolStoreconfigQueryKey(
  args: InferRequestType<typeof client.api.creditcontrol.storeconfig.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/creditcontrol/storeconfig', keyArgs] as const
}

export function getApiCreditcontrolStoreconfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.creditcontrol.storeconfig.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.creditcontrol.storeconfig.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.creditcontrol.storeconfig.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCreditcontrolStoreconfigQueryKey>
  >({
    queryKey: getApiCreditcontrolStoreconfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.creditcontrol.storeconfig.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiCreditcontrolStoreconfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.creditcontrol.storeconfig.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.creditcontrol.storeconfig.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.creditcontrol.storeconfig.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCreditcontrolStoreconfigQueryKey>
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
      ...getApiCreditcontrolStoreconfigQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutApiCreditcontrolStoreconfigMutationKey() {
  return ['api', '/api/creditcontrol/storeconfig', 'PUT'] as const
}

export function getPutApiCreditcontrolStoreconfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.creditcontrol.storeconfig.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.creditcontrol.storeconfig.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCreditcontrolStoreconfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.creditcontrol.storeconfig.$put>) {
      return parseResponse(client.api.creditcontrol.storeconfig.$put(args, options))
    },
  })
}

export function injectPutApiCreditcontrolStoreconfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.creditcontrol.storeconfig.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.creditcontrol.storeconfig.$put>,
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
    const mutationDefaults = getPutApiCreditcontrolStoreconfigMutationOptions<
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
