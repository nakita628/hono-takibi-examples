import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBankAccountsKey() {
  return ['bank-accounts'] as const
}

export function getCurrenciesKey() {
  return ['currencies'] as const
}

export function getDocumentBlocksKey() {
  return ['document-blocks'] as const
}

export function getDocumentsKey() {
  return ['documents'] as const
}

export function getOrganizationKey() {
  return ['organization'] as const
}

export function getPartnersKey() {
  return ['partners'] as const
}

export function getProductsKey() {
  return ['products'] as const
}

export function getUtilsKey() {
  return ['utils'] as const
}

export function getGetBankAccountsKey(
  args: InferRequestType<(typeof client)['bank-accounts']['$get']>,
) {
  return ['bank-accounts', '/bank-accounts', args] as const
}

export function useGetBankAccounts<TError = unknown>(
  args: InferRequestType<(typeof client)['bank-accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBankAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['bank-accounts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBankAccounts<TError = unknown>(
  args: InferRequestType<(typeof client)['bank-accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBankAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['bank-accounts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBankAccountsKey() {
  return ['bank-accounts', '/bank-accounts', 'POST'] as const
}

export function usePostBankAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['bank-accounts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBankAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['bank-accounts']['$post']> },
      ) => parseResponse(client['bank-accounts'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBankAccountsIdKey(
  args: InferRequestType<(typeof client)['bank-accounts'][':id']['$get']>,
) {
  return ['bank-accounts', '/bank-accounts/:id', args] as const
}

export function useGetBankAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client)['bank-accounts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBankAccountsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['bank-accounts'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBankAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client)['bank-accounts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBankAccountsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['bank-accounts'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBankAccountsIdKey() {
  return ['bank-accounts', '/bank-accounts/:id', 'PUT'] as const
}

export function usePutBankAccountsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts'][':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['bank-accounts'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBankAccountsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['bank-accounts'][':id']['$put']> },
      ) => parseResponse(client['bank-accounts'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBankAccountsIdKey() {
  return ['bank-accounts', '/bank-accounts/:id', 'DELETE'] as const
}

export function useDeleteBankAccountsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['bank-accounts'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['bank-accounts'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBankAccountsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['bank-accounts'][':id']['$delete']> },
      ) => parseResponse(client['bank-accounts'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCurrenciesKey(args: InferRequestType<typeof client.currencies.$get>) {
  return ['currencies', '/currencies', args] as const
}

export function useGetCurrencies<TError = unknown>(
  args: InferRequestType<typeof client.currencies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCurrenciesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.currencies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCurrencies<TError = unknown>(
  args: InferRequestType<typeof client.currencies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCurrenciesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currencies.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.currencies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDocumentBlocksKey(
  args: InferRequestType<(typeof client)['document-blocks']['$get']>,
) {
  return ['document-blocks', '/document-blocks', args] as const
}

export function useGetDocumentBlocks<TError = unknown>(
  args: InferRequestType<(typeof client)['document-blocks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['document-blocks']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDocumentBlocksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['document-blocks']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['document-blocks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocumentBlocks<TError = unknown>(
  args: InferRequestType<(typeof client)['document-blocks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['document-blocks']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDocumentBlocksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['document-blocks']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['document-blocks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDocumentsKey(args: InferRequestType<typeof client.documents.$get>) {
  return ['documents', '/documents', args] as const
}

export function useGetDocuments<TError = unknown>(
  args: InferRequestType<typeof client.documents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocumentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocuments<TError = unknown>(
  args: InferRequestType<typeof client.documents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocumentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDocumentsKey() {
  return ['documents', '/documents', 'POST'] as const
}

export function usePostDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.documents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.documents.$post> }) =>
        parseResponse(client.documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDocumentsIdKey(
  args: InferRequestType<(typeof client.documents)[':id']['$get']>,
) {
  return ['documents', '/documents/:id', args] as const
}

export function useGetDocumentsId<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDocumentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocumentsId<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDocumentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDocumentsIdCancelKey() {
  return ['documents', '/documents/:id/cancel', 'POST'] as const
}

export function usePostDocumentsIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.documents)[':id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.documents)[':id']['cancel']['$post']> },
      ) => parseResponse(client.documents[':id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsIdCreateFromProformaKey() {
  return ['documents', '/documents/:id/create-from-proforma', 'POST'] as const
}

export function usePostDocumentsIdCreateFromProforma<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':id']['create-from-proforma']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.documents)[':id']['create-from-proforma']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsIdCreateFromProformaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.documents)[':id']['create-from-proforma']['$post']>
        },
      ) => parseResponse(client.documents[':id']['create-from-proforma'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDocumentsIdDownloadKey(
  args: InferRequestType<(typeof client.documents)[':id']['download']['$get']>,
) {
  return ['documents', '/documents/:id/download', args] as const
}

export function useGetDocumentsIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':id']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':id']['download']['$get']>>
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
        ? getGetDocumentsIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':id']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':id'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocumentsIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':id']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':id']['download']['$get']>>
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
        ? getGetDocumentsIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':id']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':id'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDocumentsIdOnlineSzamlaKey(
  args: InferRequestType<(typeof client.documents)[':id']['online-szamla']['$get']>,
) {
  return ['documents', '/documents/:id/online-szamla', args] as const
}

export function useGetDocumentsIdOnlineSzamla<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':id']['online-szamla']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':id']['online-szamla']['$get']>>
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
        ? getGetDocumentsIdOnlineSzamlaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':id']['online-szamla']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':id']['online-szamla'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocumentsIdOnlineSzamla<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':id']['online-szamla']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':id']['online-szamla']['$get']>>
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
        ? getGetDocumentsIdOnlineSzamlaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':id']['online-szamla']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':id']['online-szamla'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDocumentsIdPaymentsKey(
  args: InferRequestType<(typeof client.documents)[':id']['payments']['$get']>,
) {
  return ['documents', '/documents/:id/payments', args] as const
}

export function useGetDocumentsIdPayments<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':id']['payments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':id']['payments']['$get']>>
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
        ? getGetDocumentsIdPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':id']['payments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':id'].payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocumentsIdPayments<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':id']['payments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':id']['payments']['$get']>>
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
        ? getGetDocumentsIdPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':id']['payments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':id'].payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDocumentsIdPaymentsKey() {
  return ['documents', '/documents/:id/payments', 'PUT'] as const
}

export function usePutDocumentsIdPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':id']['payments']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.documents)[':id']['payments']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDocumentsIdPaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.documents)[':id']['payments']['$put']> },
      ) => parseResponse(client.documents[':id'].payments.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDocumentsIdPaymentsKey() {
  return ['documents', '/documents/:id/payments', 'DELETE'] as const
}

export function useDeleteDocumentsIdPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':id']['payments']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.documents)[':id']['payments']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDocumentsIdPaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.documents)[':id']['payments']['$delete']> },
      ) => parseResponse(client.documents[':id'].payments.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDocumentsIdPublicUrlKey(
  args: InferRequestType<(typeof client.documents)[':id']['public-url']['$get']>,
) {
  return ['documents', '/documents/:id/public-url', args] as const
}

export function useGetDocumentsIdPublicUrl<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':id']['public-url']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':id']['public-url']['$get']>>
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
        ? getGetDocumentsIdPublicUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':id']['public-url']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':id']['public-url'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocumentsIdPublicUrl<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':id']['public-url']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':id']['public-url']['$get']>>
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
        ? getGetDocumentsIdPublicUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':id']['public-url']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':id']['public-url'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDocumentsIdSendKey() {
  return ['documents', '/documents/:id/send', 'POST'] as const
}

export function usePostDocumentsIdSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['send']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.documents)[':id']['send']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsIdSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.documents)[':id']['send']['$post']> },
      ) => parseResponse(client.documents[':id'].send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationKey() {
  return ['organization', '/organization'] as const
}

export function useGetOrganization<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrganizationKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganization<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrganizationKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPartnersKey(args: InferRequestType<typeof client.partners.$get>) {
  return ['partners', '/partners', args] as const
}

export function useGetPartners<TError = unknown>(
  args: InferRequestType<typeof client.partners.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partners.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPartnersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partners.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.partners.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPartners<TError = unknown>(
  args: InferRequestType<typeof client.partners.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partners.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPartnersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partners.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.partners.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostPartnersKey() {
  return ['partners', '/partners', 'POST'] as const
}

export function usePostPartners<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partners.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.partners.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPartnersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.partners.$post> }) =>
        parseResponse(client.partners.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPartnersIdKey(
  args: InferRequestType<(typeof client.partners)[':id']['$get']>,
) {
  return ['partners', '/partners/:id', args] as const
}

export function useGetPartnersId<TError = unknown>(
  args: InferRequestType<(typeof client.partners)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.partners)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPartnersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.partners)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.partners[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPartnersId<TError = unknown>(
  args: InferRequestType<(typeof client.partners)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.partners)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPartnersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.partners)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.partners[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPartnersIdKey() {
  return ['partners', '/partners/:id', 'PUT'] as const
}

export function usePutPartnersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.partners)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.partners)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPartnersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.partners)[':id']['$put']> }) =>
        parseResponse(client.partners[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePartnersIdKey() {
  return ['partners', '/partners/:id', 'DELETE'] as const
}

export function useDeletePartnersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.partners)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.partners)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePartnersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.partners)[':id']['$delete']> },
      ) => parseResponse(client.partners[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProductsKey(args: InferRequestType<typeof client.products.$get>) {
  return ['products', '/products', args] as const
}

export function useGetProducts<TError = unknown>(
  args: InferRequestType<typeof client.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.products.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetProducts<TError = unknown>(
  args: InferRequestType<typeof client.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.products.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostProductsKey() {
  return ['products', '/products', 'POST'] as const
}

export function usePostProducts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.products.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.products.$post> }) =>
        parseResponse(client.products.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProductsIdKey(
  args: InferRequestType<(typeof client.products)[':id']['$get']>,
) {
  return ['products', '/products/:id', args] as const
}

export function useGetProductsId<TError = unknown>(
  args: InferRequestType<(typeof client.products)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetProductsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsId<TError = unknown>(
  args: InferRequestType<(typeof client.products)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetProductsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutProductsIdKey() {
  return ['products', '/products/:id', 'PUT'] as const
}

export function usePutProductsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.products)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProductsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.products)[':id']['$put']> }) =>
        parseResponse(client.products[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProductsIdKey() {
  return ['products', '/products/:id', 'DELETE'] as const
}

export function useDeleteProductsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.products)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProductsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.products)[':id']['$delete']> },
      ) => parseResponse(client.products[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUtilsConvertLegacyIdIdKey(
  args: InferRequestType<(typeof client.utils)['convert-legacy-id'][':id']['$get']>,
) {
  return ['utils', '/utils/convert-legacy-id/:id', args] as const
}

export function useGetUtilsConvertLegacyIdId<TError = unknown>(
  args: InferRequestType<(typeof client.utils)['convert-legacy-id'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.utils)['convert-legacy-id'][':id']['$get']>>
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
        ? getGetUtilsConvertLegacyIdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.utils)['convert-legacy-id'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.utils['convert-legacy-id'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUtilsConvertLegacyIdId<TError = unknown>(
  args: InferRequestType<(typeof client.utils)['convert-legacy-id'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.utils)['convert-legacy-id'][':id']['$get']>>
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
        ? getGetUtilsConvertLegacyIdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.utils)['convert-legacy-id'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.utils['convert-legacy-id'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
