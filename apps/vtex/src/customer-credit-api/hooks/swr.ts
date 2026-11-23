import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiCreditcontrolAccountsKey(
  args: InferRequestType<typeof client.api.creditcontrol.accounts.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/creditcontrol/accounts', keyArgs] as const
}

export function useGetApiCreditcontrolAccounts<TError = unknown>(
  args: InferRequestType<typeof client.api.creditcontrol.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.creditcontrol.accounts.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCreditcontrolAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.creditcontrol.accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.creditcontrol.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCreditcontrolAccounts<TError = unknown>(
  args: InferRequestType<typeof client.api.creditcontrol.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.creditcontrol.accounts.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCreditcontrolAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.creditcontrol.accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.creditcontrol.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiCreditcontrolAccountsKey() {
  return ['api', '/api/creditcontrol/accounts', 'POST'] as const
}

export function usePostApiCreditcontrolAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.creditcontrol.accounts.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.creditcontrol.accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCreditcontrolAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.creditcontrol.accounts.$post> },
      ) => parseResponse(client.api.creditcontrol.accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiCreditcontrolAccountsAccountIdKey() {
  return ['api', '/api/creditcontrol/accounts/:accountId', 'PUT'] as const
}

export function usePutApiCreditcontrolAccountsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.creditcontrol.accounts)[':accountId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.creditcontrol.accounts)[':accountId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCreditcontrolAccountsAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.creditcontrol.accounts)[':accountId']['$put']>
        },
      ) => parseResponse(client.api.creditcontrol.accounts[':accountId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCreditcontrolAccountsCreditAccountIdKey(
  args: InferRequestType<(typeof client.api.creditcontrol.accounts)[':creditAccountId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/creditcontrol/accounts/:creditAccountId', keyArgs] as const
}

export function useGetApiCreditcontrolAccountsCreditAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.api.creditcontrol.accounts)[':creditAccountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.creditcontrol.accounts)[':creditAccountId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCreditcontrolAccountsCreditAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.creditcontrol.accounts)[':creditAccountId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.creditcontrol.accounts[':creditAccountId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCreditcontrolAccountsCreditAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.api.creditcontrol.accounts)[':creditAccountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.creditcontrol.accounts)[':creditAccountId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCreditcontrolAccountsCreditAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.creditcontrol.accounts)[':creditAccountId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.creditcontrol.accounts[':creditAccountId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiCreditcontrolAccountsCreditAccountIdKey() {
  return ['api', '/api/creditcontrol/accounts/:creditAccountId', 'PUT'] as const
}

export function usePutApiCreditcontrolAccountsCreditAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.creditcontrol.accounts)[':creditAccountId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCreditcontrolAccountsCreditAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.creditcontrol.accounts)[':creditAccountId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.creditcontrol.accounts[':creditAccountId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCreditcontrolAccountsCreditAccountIdKey() {
  return ['api', '/api/creditcontrol/accounts/:creditAccountId', 'DELETE'] as const
}

export function useDeleteApiCreditcontrolAccountsCreditAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.creditcontrol.accounts)[':creditAccountId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCreditcontrolAccountsCreditAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.creditcontrol.accounts)[':creditAccountId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.creditcontrol.accounts[':creditAccountId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiCreditcontrolAccountsCreditAccountIdCreditlimitKey() {
  return ['api', '/api/creditcontrol/accounts/:creditAccountId/creditlimit', 'PUT'] as const
}

export function usePutApiCreditcontrolAccountsCreditAccountIdCreditlimit<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['creditlimit']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCreditcontrolAccountsCreditAccountIdCreditlimitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.creditcontrol.accounts)[':creditAccountId']['creditlimit']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.creditcontrol.accounts[':creditAccountId'].creditlimit.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCreditcontrolAccountsCreditAccountIdHoldersKey() {
  return ['api', '/api/creditcontrol/accounts/:creditAccountId/holders', 'POST'] as const
}

export function usePostApiCreditcontrolAccountsCreditAccountIdHolders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['holders']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCreditcontrolAccountsCreditAccountIdHoldersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.creditcontrol.accounts)[':creditAccountId']['holders']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.creditcontrol.accounts[':creditAccountId'].holders.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCreditcontrolAccountsCreditAccountIdHoldersHolderIdKey() {
  return [
    'api',
    '/api/creditcontrol/accounts/:creditAccountId/holders/:holderId',
    'DELETE',
  ] as const
}

export function useDeleteApiCreditcontrolAccountsCreditAccountIdHoldersHolderId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['holders'][':holderId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCreditcontrolAccountsCreditAccountIdHoldersHolderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.creditcontrol.accounts)[':creditAccountId']['holders'][':holderId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.creditcontrol.accounts[':creditAccountId'].holders[':holderId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCreditcontrolAccountsCreditAccountIdInvoicesKey(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/creditcontrol/accounts/:creditAccountId/invoices', keyArgs] as const
}

export function useGetApiCreditcontrolAccountsCreditAccountIdInvoices<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCreditcontrolAccountsCreditAccountIdInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.creditcontrol.accounts[':creditAccountId'].invoices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCreditcontrolAccountsCreditAccountIdInvoices<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCreditcontrolAccountsCreditAccountIdInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.creditcontrol.accounts[':creditAccountId'].invoices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdKey(
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

export function useGetApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.creditcontrol.accounts[':creditAccountId'].invoices[':invoiceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.creditcontrol.accounts[':creditAccountId'].invoices[':invoiceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdKey() {
  return ['api', '/api/creditcontrol/accounts/:creditAccountId/invoices/:invoiceId', 'PUT'] as const
}

export function usePutApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.creditcontrol.accounts[':creditAccountId'].invoices[':invoiceId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdKey() {
  return [
    'api',
    '/api/creditcontrol/accounts/:creditAccountId/invoices/:invoiceId',
    'DELETE',
  ] as const
}

export function useDeleteApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.creditcontrol.accounts[':creditAccountId'].invoices[':invoiceId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPaymentsKey() {
  return [
    'api',
    '/api/creditcontrol/accounts/:creditAccountId/invoices/:invoiceId/payments',
    'POST',
  ] as const
}

export function usePostApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPayments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['payments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['payments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.creditcontrol.accounts[':creditAccountId'].invoices[
            ':invoiceId'
          ].payments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPostponementKey() {
  return [
    'api',
    '/api/creditcontrol/accounts/:creditAccountId/invoices/:invoiceId/postponement',
    'PUT',
  ] as const
}

export function usePutApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPostponement<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['postponement']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPostponementKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['postponement']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.creditcontrol.accounts[':creditAccountId'].invoices[
            ':invoiceId'
          ].postponement.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCreditcontrolAccountsCreditAccountIdStatementsKey(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['statements']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/creditcontrol/accounts/:creditAccountId/statements', keyArgs] as const
}

export function useGetApiCreditcontrolAccountsCreditAccountIdStatements<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['statements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCreditcontrolAccountsCreditAccountIdStatementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.creditcontrol.accounts[':creditAccountId'].statements.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCreditcontrolAccountsCreditAccountIdStatements<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['statements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCreditcontrolAccountsCreditAccountIdStatementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.creditcontrol.accounts[':creditAccountId'].statements.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiCreditcontrolAccountsCreditAccountIdStatementsStatementIdKey() {
  return [
    'api',
    '/api/creditcontrol/accounts/:creditAccountId/statements/:statementId',
    'PUT',
  ] as const
}

export function usePutApiCreditcontrolAccountsCreditAccountIdStatementsStatementId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['statements'][':statementId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApiCreditcontrolAccountsCreditAccountIdStatementsStatementIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.creditcontrol.accounts)[':creditAccountId']['statements'][':statementId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.creditcontrol.accounts[':creditAccountId'].statements[':statementId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiCreditcontrolAccountsCreditAccountIdToleranceKey() {
  return ['api', '/api/creditcontrol/accounts/:creditAccountId/tolerance', 'PUT'] as const
}

export function usePutApiCreditcontrolAccountsCreditAccountIdTolerance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['tolerance']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCreditcontrolAccountsCreditAccountIdToleranceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.creditcontrol.accounts)[':creditAccountId']['tolerance']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.creditcontrol.accounts[':creditAccountId'].tolerance.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCreditcontrolAccountsCreditAccountIdTransactionKey() {
  return ['api', '/api/creditcontrol/accounts/:creditAccountId/transaction', 'POST'] as const
}

export function usePostApiCreditcontrolAccountsCreditAccountIdTransaction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transaction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCreditcontrolAccountsCreditAccountIdTransactionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transaction']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.creditcontrol.accounts[':creditAccountId'].transaction.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdKey() {
  return [
    'api',
    '/api/creditcontrol/accounts/:creditAccountId/transactions/:transactionId',
    'PUT',
  ] as const
}

export function usePutApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.creditcontrol.accounts[':creditAccountId'].transactions[':transactionId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdKey() {
  return [
    'api',
    '/api/creditcontrol/accounts/:creditAccountId/transactions/:transactionId',
    'DELETE',
  ] as const
}

export function useDeleteApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.creditcontrol.accounts[':creditAccountId'].transactions[
            ':transactionId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRefundsKey() {
  return [
    'api',
    '/api/creditcontrol/accounts/:creditAccountId/transactions/:transactionId/refunds',
    'POST',
  ] as const
}

export function usePostApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRefunds<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['refunds']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRefundsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['refunds']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.creditcontrol.accounts[':creditAccountId'].transactions[
            ':transactionId'
          ].refunds.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdSettlementKey() {
  return [
    'api',
    '/api/creditcontrol/accounts/:creditAccountId/transactions/:transactionId/settlement',
    'PUT',
  ] as const
}

export function usePutApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdSettlement<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['settlement']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdSettlementKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['settlement']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.creditcontrol.accounts[':creditAccountId'].transactions[
            ':transactionId'
          ].settlement.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCreditcontrolInvoicesKey(
  args: InferRequestType<typeof client.api.creditcontrol.invoices.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/creditcontrol/invoices', keyArgs] as const
}

export function useGetApiCreditcontrolInvoices<TError = unknown>(
  args: InferRequestType<typeof client.api.creditcontrol.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.creditcontrol.invoices.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCreditcontrolInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.creditcontrol.invoices.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.creditcontrol.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCreditcontrolInvoices<TError = unknown>(
  args: InferRequestType<typeof client.api.creditcontrol.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.creditcontrol.invoices.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCreditcontrolInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.creditcontrol.invoices.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.creditcontrol.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiCreditcontrolStoreconfigKey(
  args: InferRequestType<typeof client.api.creditcontrol.storeconfig.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/creditcontrol/storeconfig', keyArgs] as const
}

export function useGetApiCreditcontrolStoreconfig<TError = unknown>(
  args: InferRequestType<typeof client.api.creditcontrol.storeconfig.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.creditcontrol.storeconfig.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCreditcontrolStoreconfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.creditcontrol.storeconfig.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.creditcontrol.storeconfig.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCreditcontrolStoreconfig<TError = unknown>(
  args: InferRequestType<typeof client.api.creditcontrol.storeconfig.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.creditcontrol.storeconfig.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCreditcontrolStoreconfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.creditcontrol.storeconfig.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.creditcontrol.storeconfig.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiCreditcontrolStoreconfigKey() {
  return ['api', '/api/creditcontrol/storeconfig', 'PUT'] as const
}

export function usePutApiCreditcontrolStoreconfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.creditcontrol.storeconfig.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.creditcontrol.storeconfig.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCreditcontrolStoreconfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.creditcontrol.storeconfig.$put> },
      ) => parseResponse(client.api.creditcontrol.storeconfig.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
