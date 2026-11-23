import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getGetV1AccountHoldersKey(
  args: InferRequestType<typeof client.v1.account_holders.$get>,
) {
  return ['v1', '/v1/account_holders', args] as const
}

export function useGetV1AccountHolders<TError = unknown>(
  args: InferRequestType<typeof client.v1.account_holders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_holders.$get>>>>
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
        ? getGetV1AccountHoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_holders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.account_holders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountHolders<TError = unknown>(
  args: InferRequestType<typeof client.v1.account_holders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_holders.$get>>>>
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
        ? getGetV1AccountHoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_holders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.account_holders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountHoldersKey() {
  return ['v1', '/v1/account_holders', 'POST'] as const
}

export function usePostV1AccountHolders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_holders.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.account_holders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountHoldersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.account_holders.$post> }) =>
        parseResponse(client.v1.account_holders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountHoldersAccountHolderTokenKey(
  args: InferRequestType<(typeof client.v1.account_holders)[':account_holder_token']['$get']>,
) {
  return ['v1', '/v1/account_holders/:account_holder_token', args] as const
}

export function useGetV1AccountHoldersAccountHolderToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.account_holders)[':account_holder_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.account_holders)[':account_holder_token']['$get']>>
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
        ? getGetV1AccountHoldersAccountHolderTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.account_holders)[':account_holder_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.account_holders[':account_holder_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountHoldersAccountHolderToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.account_holders)[':account_holder_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.account_holders)[':account_holder_token']['$get']>>
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
        ? getGetV1AccountHoldersAccountHolderTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.account_holders)[':account_holder_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.account_holders[':account_holder_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1AccountHoldersAccountHolderTokenKey() {
  return ['v1', '/v1/account_holders/:account_holder_token', 'PATCH'] as const
}

export function usePatchV1AccountHoldersAccountHolderToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.account_holders)[':account_holder_token']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.account_holders)[':account_holder_token']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AccountHoldersAccountHolderTokenKey()
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
            (typeof client.v1.account_holders)[':account_holder_token']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.account_holders[':account_holder_token'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountHoldersAccountHolderTokenDocumentsKey(
  args: InferRequestType<
    (typeof client.v1.account_holders)[':account_holder_token']['documents']['$get']
  >,
) {
  return ['v1', '/v1/account_holders/:account_holder_token/documents', args] as const
}

export function useGetV1AccountHoldersAccountHolderTokenDocuments<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.account_holders)[':account_holder_token']['documents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.account_holders)[':account_holder_token']['documents']['$get']
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
        ? getGetV1AccountHoldersAccountHolderTokenDocumentsKey(args)
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
                (typeof client.v1.account_holders)[':account_holder_token']['documents']['$get']
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
          client.v1.account_holders[':account_holder_token'].documents.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountHoldersAccountHolderTokenDocuments<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.account_holders)[':account_holder_token']['documents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.account_holders)[':account_holder_token']['documents']['$get']
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
        ? getGetV1AccountHoldersAccountHolderTokenDocumentsKey(args)
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
                (typeof client.v1.account_holders)[':account_holder_token']['documents']['$get']
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
          client.v1.account_holders[':account_holder_token'].documents.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountHoldersAccountHolderTokenDocumentsKey() {
  return ['v1', '/v1/account_holders/:account_holder_token/documents', 'POST'] as const
}

export function usePostV1AccountHoldersAccountHolderTokenDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.account_holders)[':account_holder_token']['documents']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.account_holders)[':account_holder_token']['documents']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountHoldersAccountHolderTokenDocumentsKey()
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
            (typeof client.v1.account_holders)[':account_holder_token']['documents']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.account_holders[':account_holder_token'].documents.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountHoldersAccountHolderTokenDocumentsDocumentTokenKey(
  args: InferRequestType<
    (typeof client.v1.account_holders)[':account_holder_token']['documents'][':document_token']['$get']
  >,
) {
  return [
    'v1',
    '/v1/account_holders/:account_holder_token/documents/:document_token',
    args,
  ] as const
}

export function useGetV1AccountHoldersAccountHolderTokenDocumentsDocumentToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.account_holders)[':account_holder_token']['documents'][':document_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.account_holders)[':account_holder_token']['documents'][':document_token']['$get']
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
        ? getGetV1AccountHoldersAccountHolderTokenDocumentsDocumentTokenKey(args)
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
                (typeof client.v1.account_holders)[':account_holder_token']['documents'][':document_token']['$get']
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
          client.v1.account_holders[':account_holder_token'].documents[':document_token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountHoldersAccountHolderTokenDocumentsDocumentToken<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.account_holders)[':account_holder_token']['documents'][':document_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.account_holders)[':account_holder_token']['documents'][':document_token']['$get']
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
        ? getGetV1AccountHoldersAccountHolderTokenDocumentsDocumentTokenKey(args)
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
                (typeof client.v1.account_holders)[':account_holder_token']['documents'][':document_token']['$get']
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
          client.v1.account_holders[':account_holder_token'].documents[':document_token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountHoldersAccountHolderTokenEntitiesKey() {
  return ['v1', '/v1/account_holders/:account_holder_token/entities', 'POST'] as const
}

export function usePostV1AccountHoldersAccountHolderTokenEntities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.account_holders)[':account_holder_token']['entities']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.account_holders)[':account_holder_token']['entities']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountHoldersAccountHolderTokenEntitiesKey()
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
            (typeof client.v1.account_holders)[':account_holder_token']['entities']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.account_holders[':account_holder_token'].entities.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AccountHoldersAccountHolderTokenEntitiesEntityTokenKey() {
  return [
    'v1',
    '/v1/account_holders/:account_holder_token/entities/:entity_token',
    'DELETE',
  ] as const
}

export function useDeleteV1AccountHoldersAccountHolderTokenEntitiesEntityToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.account_holders)[':account_holder_token']['entities'][':entity_token']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.account_holders)[':account_holder_token']['entities'][':entity_token']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AccountHoldersAccountHolderTokenEntitiesEntityTokenKey()
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
            (typeof client.v1.account_holders)[':account_holder_token']['entities'][':entity_token']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.account_holders[':account_holder_token'].entities[':entity_token'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsKey(args: InferRequestType<typeof client.v1.accounts.$get>) {
  return ['v1', '/v1/accounts', args] as const
}

export function useGetV1Accounts<TError = unknown>(
  args: InferRequestType<typeof client.v1.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Accounts<TError = unknown>(
  args: InferRequestType<typeof client.v1.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountsAccountTokenKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account_token']['$get']>,
) {
  return ['v1', '/v1/accounts/:account_token', args] as const
}

export function useGetV1AccountsAccountToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_token']['$get']>>
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
        ? getGetV1AccountsAccountTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts[':account_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_token']['$get']>>
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
        ? getGetV1AccountsAccountTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts[':account_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1AccountsAccountTokenKey() {
  return ['v1', '/v1/accounts/:account_token', 'PATCH'] as const
}

export function usePatchV1AccountsAccountToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account_token']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account_token']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AccountsAccountTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.accounts)[':account_token']['$patch']> },
      ) => parseResponse(client.v1.accounts[':account_token'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountTokenSpendLimitsKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account_token']['spend_limits']['$get']>,
) {
  return ['v1', '/v1/accounts/:account_token/spend_limits', args] as const
}

export function useGetV1AccountsAccountTokenSpendLimits<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_token']['spend_limits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account_token']['spend_limits']['$get']>
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
        ? getGetV1AccountsAccountTokenSpendLimitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account_token']['spend_limits']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':account_token'].spend_limits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountTokenSpendLimits<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_token']['spend_limits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account_token']['spend_limits']['$get']>
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
        ? getGetV1AccountsAccountTokenSpendLimitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account_token']['spend_limits']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':account_token'].spend_limits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AuthRulesKey(args: InferRequestType<typeof client.v2.auth_rules.$get>) {
  return ['v2', '/v2/auth_rules', args] as const
}

export function useGetV2AuthRules<TError = unknown>(
  args: InferRequestType<typeof client.v2.auth_rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AuthRulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.auth_rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AuthRules<TError = unknown>(
  args: InferRequestType<typeof client.v2.auth_rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AuthRulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.auth_rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2AuthRulesKey() {
  return ['v2', '/v2/auth_rules', 'POST'] as const
}

export function usePostV2AuthRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.auth_rules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AuthRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.auth_rules.$post> }) =>
        parseResponse(client.v2.auth_rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2AuthRulesAuthRuleTokenKey(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['$get']>,
) {
  return ['v2', '/v2/auth_rules/:auth_rule_token', args] as const
}

export function useGetV2AuthRulesAuthRuleToken<TError = unknown>(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['$get']>>
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
        ? getGetV2AuthRulesAuthRuleTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.auth_rules[':auth_rule_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AuthRulesAuthRuleToken<TError = unknown>(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['$get']>>
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
        ? getGetV2AuthRulesAuthRuleTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.auth_rules[':auth_rule_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2AuthRulesAuthRuleTokenKey() {
  return ['v2', '/v2/auth_rules/:auth_rule_token', 'DELETE'] as const
}

export function useDeleteV2AuthRulesAuthRuleToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2AuthRulesAuthRuleTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['$delete']> },
      ) => parseResponse(client.v2.auth_rules[':auth_rule_token'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2AuthRulesAuthRuleTokenKey() {
  return ['v2', '/v2/auth_rules/:auth_rule_token', 'PATCH'] as const
}

export function usePatchV2AuthRulesAuthRuleToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2AuthRulesAuthRuleTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['$patch']> },
      ) => parseResponse(client.v2.auth_rules[':auth_rule_token'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2AuthRulesAuthRuleTokenEntitiesKey() {
  return ['v2', '/v2/auth_rules/:auth_rule_token/entities', 'PATCH'] as const
}

export function usePatchV2AuthRulesAuthRuleTokenEntities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['entities']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['entities']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2AuthRulesAuthRuleTokenEntitiesKey()
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
            (typeof client.v2.auth_rules)[':auth_rule_token']['entities']['$patch']
          >
        },
      ) =>
        parseResponse(client.v2.auth_rules[':auth_rule_token'].entities.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2AuthRulesAuthRuleTokenDraftKey() {
  return ['v2', '/v2/auth_rules/:auth_rule_token/draft', 'POST'] as const
}

export function usePostV2AuthRulesAuthRuleTokenDraft<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['draft']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['draft']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AuthRulesAuthRuleTokenDraftKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['draft']['$post']>
        },
      ) => parseResponse(client.v2.auth_rules[':auth_rule_token'].draft.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2AuthRulesAuthRuleTokenFeaturesKey(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['features']['$get']>,
) {
  return ['v2', '/v2/auth_rules/:auth_rule_token/features', args] as const
}

export function useGetV2AuthRulesAuthRuleTokenFeatures<TError = unknown>(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['features']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['features']['$get']>
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
        ? getGetV2AuthRulesAuthRuleTokenFeaturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['features']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.auth_rules[':auth_rule_token'].features.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AuthRulesAuthRuleTokenFeatures<TError = unknown>(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['features']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['features']['$get']>
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
        ? getGetV2AuthRulesAuthRuleTokenFeaturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['features']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.auth_rules[':auth_rule_token'].features.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2AuthRulesAuthRuleTokenPromoteKey() {
  return ['v2', '/v2/auth_rules/:auth_rule_token/promote', 'POST'] as const
}

export function usePostV2AuthRulesAuthRuleTokenPromote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['promote']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['promote']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AuthRulesAuthRuleTokenPromoteKey()
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
            (typeof client.v2.auth_rules)[':auth_rule_token']['promote']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.auth_rules[':auth_rule_token'].promote.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2AuthRulesAuthRuleTokenVersionsKey(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['versions']['$get']>,
) {
  return ['v2', '/v2/auth_rules/:auth_rule_token/versions', args] as const
}

export function useGetV2AuthRulesAuthRuleTokenVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['versions']['$get']>
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
        ? getGetV2AuthRulesAuthRuleTokenVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['versions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.auth_rules[':auth_rule_token'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AuthRulesAuthRuleTokenVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['versions']['$get']>
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
        ? getGetV2AuthRulesAuthRuleTokenVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['versions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.auth_rules[':auth_rule_token'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AuthRulesAuthRuleTokenReportKey(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['report']['$get']>,
) {
  return ['v2', '/v2/auth_rules/:auth_rule_token/report', args] as const
}

export function useGetV2AuthRulesAuthRuleTokenReport<TError = unknown>(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['report']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['report']['$get']>>
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
        ? getGetV2AuthRulesAuthRuleTokenReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['report']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.auth_rules[':auth_rule_token'].report.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AuthRulesAuthRuleTokenReport<TError = unknown>(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['report']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['report']['$get']>>
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
        ? getGetV2AuthRulesAuthRuleTokenReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['report']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.auth_rules[':auth_rule_token'].report.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AuthRulesAuthRuleTokenBacktestsKey(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$get']>,
) {
  return ['v2', '/v2/auth_rules/:auth_rule_token/backtests', args] as const
}

export function useGetV2AuthRulesAuthRuleTokenBacktests<TError = unknown>(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$get']>
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
        ? getGetV2AuthRulesAuthRuleTokenBacktestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.auth_rules[':auth_rule_token'].backtests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AuthRulesAuthRuleTokenBacktests<TError = unknown>(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$get']>
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
        ? getGetV2AuthRulesAuthRuleTokenBacktestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.auth_rules[':auth_rule_token'].backtests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2AuthRulesAuthRuleTokenBacktestsKey() {
  return ['v2', '/v2/auth_rules/:auth_rule_token/backtests', 'POST'] as const
}

export function usePostV2AuthRulesAuthRuleTokenBacktests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AuthRulesAuthRuleTokenBacktestsKey()
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
            (typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.auth_rules[':auth_rule_token'].backtests.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2AuthRulesAuthRuleTokenBacktestsAuthRuleBacktestTokenKey(
  args: InferRequestType<
    (typeof client.v2.auth_rules)[':auth_rule_token']['backtests'][':auth_rule_backtest_token']['$get']
  >,
) {
  return [
    'v2',
    '/v2/auth_rules/:auth_rule_token/backtests/:auth_rule_backtest_token',
    args,
  ] as const
}

export function useGetV2AuthRulesAuthRuleTokenBacktestsAuthRuleBacktestToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.auth_rules)[':auth_rule_token']['backtests'][':auth_rule_backtest_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.auth_rules)[':auth_rule_token']['backtests'][':auth_rule_backtest_token']['$get']
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
        ? getGetV2AuthRulesAuthRuleTokenBacktestsAuthRuleBacktestTokenKey(args)
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
                (typeof client.v2.auth_rules)[':auth_rule_token']['backtests'][':auth_rule_backtest_token']['$get']
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
          client.v2.auth_rules[':auth_rule_token'].backtests[':auth_rule_backtest_token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AuthRulesAuthRuleTokenBacktestsAuthRuleBacktestToken<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.auth_rules)[':auth_rule_token']['backtests'][':auth_rule_backtest_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.auth_rules)[':auth_rule_token']['backtests'][':auth_rule_backtest_token']['$get']
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
        ? getGetV2AuthRulesAuthRuleTokenBacktestsAuthRuleBacktestTokenKey(args)
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
                (typeof client.v2.auth_rules)[':auth_rule_token']['backtests'][':auth_rule_backtest_token']['$get']
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
          client.v2.auth_rules[':auth_rule_token'].backtests[':auth_rule_backtest_token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2AuthRulesResultsKey(
  args: InferRequestType<typeof client.v2.auth_rules.results.$get>,
) {
  return ['v2', '/v2/auth_rules/results', args] as const
}

export function useGetV2AuthRulesResults<TError = unknown>(
  args: InferRequestType<typeof client.v2.auth_rules.results.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.results.$get>>>
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
        ? getGetV2AuthRulesResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.results.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.auth_rules.results.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AuthRulesResults<TError = unknown>(
  args: InferRequestType<typeof client.v2.auth_rules.results.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.results.$get>>>
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
        ? getGetV2AuthRulesResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.results.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.auth_rules.results.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CardsCardTokenSignalsKey(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['signals']['$get']>,
) {
  return ['v1', '/v1/cards/:card_token/signals', args] as const
}

export function useGetV1CardsCardTokenSignals<TError = unknown>(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['signals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['signals']['$get']>>
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
        ? getGetV1CardsCardTokenSignalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['signals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.cards[':card_token'].signals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CardsCardTokenSignals<TError = unknown>(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['signals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['signals']['$get']>>
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
        ? getGetV1CardsCardTokenSignalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['signals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.cards[':card_token'].signals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountsAccountTokenSignalsKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account_token']['signals']['$get']>,
) {
  return ['v1', '/v1/accounts/:account_token/signals', args] as const
}

export function useGetV1AccountsAccountTokenSignals<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_token']['signals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_token']['signals']['$get']>>
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
        ? getGetV1AccountsAccountTokenSignalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_token']['signals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':account_token'].signals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountTokenSignals<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_token']['signals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_token']['signals']['$get']>>
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
        ? getGetV1AccountsAccountTokenSignalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_token']['signals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':account_token'].signals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AuthStreamSecretKey() {
  return ['v1', '/v1/auth_stream/secret'] as const
}

export function useGetV1AuthStreamSecret<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth_stream.secret.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AuthStreamSecretKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth_stream.secret.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.auth_stream.secret.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AuthStreamSecret<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth_stream.secret.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AuthStreamSecretKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth_stream.secret.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.auth_stream.secret.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AuthStreamSecretRotateKey() {
  return ['v1', '/v1/auth_stream/secret/rotate', 'POST'] as const
}

export function usePostV1AuthStreamSecretRotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.auth_stream.secret.rotate.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AuthStreamSecretRotateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.v1.auth_stream.secret.rotate.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BalancesKey(args: InferRequestType<typeof client.v1.balances.$get>) {
  return ['v1', '/v1/balances', args] as const
}

export function useGetV1Balances<TError = unknown>(
  args: InferRequestType<typeof client.v1.balances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.balances.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BalancesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.balances.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.balances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Balances<TError = unknown>(
  args: InferRequestType<typeof client.v1.balances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.balances.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BalancesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.balances.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.balances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CardProgramsKey(
  args: InferRequestType<typeof client.v1.card_programs.$get>,
) {
  return ['v1', '/v1/card_programs', args] as const
}

export function useGetV1CardPrograms<TError = unknown>(
  args: InferRequestType<typeof client.v1.card_programs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_programs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CardProgramsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_programs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.card_programs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CardPrograms<TError = unknown>(
  args: InferRequestType<typeof client.v1.card_programs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_programs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CardProgramsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_programs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.card_programs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CardProgramsCardProgramTokenKey(
  args: InferRequestType<(typeof client.v1.card_programs)[':card_program_token']['$get']>,
) {
  return ['v1', '/v1/card_programs/:card_program_token', args] as const
}

export function useGetV1CardProgramsCardProgramToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.card_programs)[':card_program_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.card_programs)[':card_program_token']['$get']>>
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
        ? getGetV1CardProgramsCardProgramTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.card_programs)[':card_program_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.card_programs[':card_program_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CardProgramsCardProgramToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.card_programs)[':card_program_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.card_programs)[':card_program_token']['$get']>>
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
        ? getGetV1CardProgramsCardProgramTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.card_programs)[':card_program_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.card_programs[':card_program_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CardsKey(args: InferRequestType<typeof client.v1.cards.$get>) {
  return ['v1', '/v1/cards', args] as const
}

export function useGetV1Cards<TError = unknown>(
  args: InferRequestType<typeof client.v1.cards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.cards.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV1Cards<TError = unknown>(
  args: InferRequestType<typeof client.v1.cards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.cards.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostV1CardsKey() {
  return ['v1', '/v1/cards', 'POST'] as const
}

export function usePostV1Cards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.cards.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.cards.$post> }) =>
        parseResponse(client.v1.cards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CardsSearchByPanKey() {
  return ['v1', '/v1/cards/search_by_pan', 'POST'] as const
}

export function usePostV1CardsSearchByPan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.search_by_pan.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.cards.search_by_pan.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CardsSearchByPanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.cards.search_by_pan.$post> },
      ) => parseResponse(client.v1.cards.search_by_pan.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CardsCardTokenKey(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['$get']>,
) {
  return ['v1', '/v1/cards/:card_token', args] as const
}

export function useGetV1CardsCardToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['$get']>>>
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
        ? getGetV1CardsCardTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.cards[':card_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CardsCardToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['$get']>>>
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
        ? getGetV1CardsCardTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.cards[':card_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1CardsCardTokenKey() {
  return ['v1', '/v1/cards/:card_token', 'PATCH'] as const
}

export function usePatchV1CardsCardToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.cards)[':card_token']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1CardsCardTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.cards)[':card_token']['$patch']> },
      ) => parseResponse(client.v1.cards[':card_token'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CardsCardTokenBalancesKey(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['balances']['$get']>,
) {
  return ['v1', '/v1/cards/:card_token/balances', args] as const
}

export function useGetV1CardsCardTokenBalances<TError = unknown>(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['balances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['balances']['$get']>>
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
        ? getGetV1CardsCardTokenBalancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['balances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.cards[':card_token'].balances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CardsCardTokenBalances<TError = unknown>(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['balances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['balances']['$get']>>
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
        ? getGetV1CardsCardTokenBalancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['balances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.cards[':card_token'].balances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CardsCardTokenFinancialTransactionsKey(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['financial_transactions']['$get']>,
) {
  return ['v1', '/v1/cards/:card_token/financial_transactions', args] as const
}

export function useGetV1CardsCardTokenFinancialTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['financial_transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.cards)[':card_token']['financial_transactions']['$get']>
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
        ? getGetV1CardsCardTokenFinancialTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.cards)[':card_token']['financial_transactions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.cards[':card_token'].financial_transactions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CardsCardTokenFinancialTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['financial_transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.cards)[':card_token']['financial_transactions']['$get']>
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
        ? getGetV1CardsCardTokenFinancialTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.cards)[':card_token']['financial_transactions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.cards[':card_token'].financial_transactions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1CardsCardTokenFinancialTransactionsFinancialTransactionTokenKey(
  args: InferRequestType<
    (typeof client.v1.cards)[':card_token']['financial_transactions'][':financial_transaction_token']['$get']
  >,
) {
  return [
    'v1',
    '/v1/cards/:card_token/financial_transactions/:financial_transaction_token',
    args,
  ] as const
}

export function useGetV1CardsCardTokenFinancialTransactionsFinancialTransactionToken<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.cards)[':card_token']['financial_transactions'][':financial_transaction_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.cards)[':card_token']['financial_transactions'][':financial_transaction_token']['$get']
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
        ? getGetV1CardsCardTokenFinancialTransactionsFinancialTransactionTokenKey(args)
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
                (typeof client.v1.cards)[':card_token']['financial_transactions'][':financial_transaction_token']['$get']
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
          client.v1.cards[':card_token'].financial_transactions[
            ':financial_transaction_token'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CardsCardTokenFinancialTransactionsFinancialTransactionToken<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.cards)[':card_token']['financial_transactions'][':financial_transaction_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.cards)[':card_token']['financial_transactions'][':financial_transaction_token']['$get']
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
        ? getGetV1CardsCardTokenFinancialTransactionsFinancialTransactionTokenKey(args)
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
                (typeof client.v1.cards)[':card_token']['financial_transactions'][':financial_transaction_token']['$get']
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
          client.v1.cards[':card_token'].financial_transactions[
            ':financial_transaction_token'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1CardsCardTokenProvisionKey() {
  return ['v1', '/v1/cards/:card_token/provision', 'POST'] as const
}

export function usePostV1CardsCardTokenProvision<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['provision']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.cards)[':card_token']['provision']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CardsCardTokenProvisionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.cards)[':card_token']['provision']['$post']> },
      ) => parseResponse(client.v1.cards[':card_token'].provision.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CardsCardTokenWebProvisionKey() {
  return ['v1', '/v1/cards/:card_token/web_provision', 'POST'] as const
}

export function usePostV1CardsCardTokenWebProvision<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['web_provision']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.cards)[':card_token']['web_provision']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CardsCardTokenWebProvisionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.cards)[':card_token']['web_provision']['$post']>
        },
      ) => parseResponse(client.v1.cards[':card_token'].web_provision.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CardsCardTokenReissueKey() {
  return ['v1', '/v1/cards/:card_token/reissue', 'POST'] as const
}

export function usePostV1CardsCardTokenReissue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['reissue']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.cards)[':card_token']['reissue']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CardsCardTokenReissueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.cards)[':card_token']['reissue']['$post']> },
      ) => parseResponse(client.v1.cards[':card_token'].reissue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CardsCardTokenRenewKey() {
  return ['v1', '/v1/cards/:card_token/renew', 'POST'] as const
}

export function usePostV1CardsCardTokenRenew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['renew']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.cards)[':card_token']['renew']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CardsCardTokenRenewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.cards)[':card_token']['renew']['$post']> },
      ) => parseResponse(client.v1.cards[':card_token'].renew.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CardsCardTokenReassignAccountKey() {
  return ['v1', '/v1/cards/:card_token/reassign_account', 'POST'] as const
}

export function usePostV1CardsCardTokenReassignAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['reassign_account']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.cards)[':card_token']['reassign_account']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CardsCardTokenReassignAccountKey()
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
            (typeof client.v1.cards)[':card_token']['reassign_account']['$post']
          >
        },
      ) => parseResponse(client.v1.cards[':card_token'].reassign_account.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CardsCardTokenConvertPhysicalKey() {
  return ['v1', '/v1/cards/:card_token/convert_physical', 'POST'] as const
}

export function usePostV1CardsCardTokenConvertPhysical<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['convert_physical']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.cards)[':card_token']['convert_physical']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CardsCardTokenConvertPhysicalKey()
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
            (typeof client.v1.cards)[':card_token']['convert_physical']['$post']
          >
        },
      ) => parseResponse(client.v1.cards[':card_token'].convert_physical.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CardsCardTokenSpendLimitsKey(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['spend_limits']['$get']>,
) {
  return ['v1', '/v1/cards/:card_token/spend_limits', args] as const
}

export function useGetV1CardsCardTokenSpendLimits<TError = unknown>(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['spend_limits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['spend_limits']['$get']>>
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
        ? getGetV1CardsCardTokenSpendLimitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['spend_limits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.cards[':card_token'].spend_limits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CardsCardTokenSpendLimits<TError = unknown>(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['spend_limits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['spend_limits']['$get']>>
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
        ? getGetV1CardsCardTokenSpendLimitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['spend_limits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.cards[':card_token'].spend_limits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CardsCardTokenEmbedKey() {
  return ['v1', '/v1/cards/:card_token/embed', 'POST'] as const
}

export function usePostV1CardsCardTokenEmbed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['embed']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.cards)[':card_token']['embed']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CardsCardTokenEmbedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.cards)[':card_token']['embed']['$post']> },
      ) => parseResponse(client.v1.cards[':card_token'].embed.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CardAuthorizationsEventTokenChallengeResponseKey() {
  return ['v1', '/v1/card_authorizations/:event_token/challenge_response', 'POST'] as const
}

export function usePostV1CardAuthorizationsEventTokenChallengeResponse<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.card_authorizations)[':event_token']['challenge_response']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.card_authorizations)[':event_token']['challenge_response']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CardAuthorizationsEventTokenChallengeResponseKey()
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
            (typeof client.v1.card_authorizations)[':event_token']['challenge_response']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.card_authorizations[':event_token'].challenge_response.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1CardBulkOrdersKey(
  args: InferRequestType<typeof client.v1.card_bulk_orders.$get>,
) {
  return ['v1', '/v1/card_bulk_orders', args] as const
}

export function useGetV1CardBulkOrders<TError = unknown>(
  args: InferRequestType<typeof client.v1.card_bulk_orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_bulk_orders.$get>>>
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
        ? getGetV1CardBulkOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_bulk_orders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.card_bulk_orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CardBulkOrders<TError = unknown>(
  args: InferRequestType<typeof client.v1.card_bulk_orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_bulk_orders.$get>>>
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
        ? getGetV1CardBulkOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_bulk_orders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.card_bulk_orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CardBulkOrdersKey() {
  return ['v1', '/v1/card_bulk_orders', 'POST'] as const
}

export function usePostV1CardBulkOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_bulk_orders.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.card_bulk_orders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CardBulkOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.card_bulk_orders.$post> }) =>
        parseResponse(client.v1.card_bulk_orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CardBulkOrdersBulkOrderTokenKey(
  args: InferRequestType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$get']>,
) {
  return ['v1', '/v1/card_bulk_orders/:bulk_order_token', args] as const
}

export function useGetV1CardBulkOrdersBulkOrderToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$get']>>
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
        ? getGetV1CardBulkOrdersBulkOrderTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.card_bulk_orders[':bulk_order_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CardBulkOrdersBulkOrderToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$get']>>
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
        ? getGetV1CardBulkOrdersBulkOrderTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.card_bulk_orders[':bulk_order_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1CardBulkOrdersBulkOrderTokenKey() {
  return ['v1', '/v1/card_bulk_orders/:bulk_order_token', 'PATCH'] as const
}

export function usePatchV1CardBulkOrdersBulkOrderToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1CardBulkOrdersBulkOrderTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$patch']>
        },
      ) =>
        parseResponse(client.v1.card_bulk_orders[':bulk_order_token'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DigitalCardArtKey(
  args: InferRequestType<typeof client.v1.digital_card_art.$get>,
) {
  return ['v1', '/v1/digital_card_art', args] as const
}

export function useGetV1DigitalCardArt<TError = unknown>(
  args: InferRequestType<typeof client.v1.digital_card_art.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.digital_card_art.$get>>>
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
        ? getGetV1DigitalCardArtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.digital_card_art.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.digital_card_art.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DigitalCardArt<TError = unknown>(
  args: InferRequestType<typeof client.v1.digital_card_art.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.digital_card_art.$get>>>
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
        ? getGetV1DigitalCardArtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.digital_card_art.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.digital_card_art.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DigitalCardArtDigitalCardArtTokenKey(
  args: InferRequestType<(typeof client.v1.digital_card_art)[':digital_card_art_token']['$get']>,
) {
  return ['v1', '/v1/digital_card_art/:digital_card_art_token', args] as const
}

export function useGetV1DigitalCardArtDigitalCardArtToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.digital_card_art)[':digital_card_art_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.digital_card_art)[':digital_card_art_token']['$get']>
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
        ? getGetV1DigitalCardArtDigitalCardArtTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.digital_card_art)[':digital_card_art_token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.digital_card_art[':digital_card_art_token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DigitalCardArtDigitalCardArtToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.digital_card_art)[':digital_card_art_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.digital_card_art)[':digital_card_art_token']['$get']>
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
        ? getGetV1DigitalCardArtDigitalCardArtTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.digital_card_art)[':digital_card_art_token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.digital_card_art[':digital_card_art_token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1DisputesKey(args: InferRequestType<typeof client.v1.disputes.$get>) {
  return ['v1', '/v1/disputes', args] as const
}

export function useGetV1Disputes<TError = unknown>(
  args: InferRequestType<typeof client.v1.disputes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.disputes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DisputesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.disputes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.disputes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Disputes<TError = unknown>(
  args: InferRequestType<typeof client.v1.disputes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.disputes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DisputesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.disputes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.disputes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DisputesKey() {
  return ['v1', '/v1/disputes', 'POST'] as const
}

export function usePostV1Disputes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.disputes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.disputes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DisputesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.disputes.$post> }) =>
        parseResponse(client.v1.disputes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DisputesDisputeTokenKey(
  args: InferRequestType<(typeof client.v1.disputes)[':dispute_token']['$get']>,
) {
  return ['v1', '/v1/disputes/:dispute_token', args] as const
}

export function useGetV1DisputesDisputeToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.disputes)[':dispute_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.disputes)[':dispute_token']['$get']>>
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
        ? getGetV1DisputesDisputeTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.disputes)[':dispute_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.disputes[':dispute_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DisputesDisputeToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.disputes)[':dispute_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.disputes)[':dispute_token']['$get']>>
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
        ? getGetV1DisputesDisputeTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.disputes)[':dispute_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.disputes[':dispute_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1DisputesDisputeTokenKey() {
  return ['v1', '/v1/disputes/:dispute_token', 'DELETE'] as const
}

export function useDeleteV1DisputesDisputeToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.disputes)[':dispute_token']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.disputes)[':dispute_token']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DisputesDisputeTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.disputes)[':dispute_token']['$delete']> },
      ) => parseResponse(client.v1.disputes[':dispute_token'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1DisputesDisputeTokenKey() {
  return ['v1', '/v1/disputes/:dispute_token', 'PATCH'] as const
}

export function usePatchV1DisputesDisputeToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.disputes)[':dispute_token']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.disputes)[':dispute_token']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1DisputesDisputeTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.disputes)[':dispute_token']['$patch']> },
      ) => parseResponse(client.v1.disputes[':dispute_token'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DisputesDisputeTokenEvidencesKey(
  args: InferRequestType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$get']>,
) {
  return ['v1', '/v1/disputes/:dispute_token/evidences', args] as const
}

export function useGetV1DisputesDisputeTokenEvidences<TError = unknown>(
  args: InferRequestType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$get']>>
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
        ? getGetV1DisputesDisputeTokenEvidencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.disputes[':dispute_token'].evidences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DisputesDisputeTokenEvidences<TError = unknown>(
  args: InferRequestType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$get']>>
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
        ? getGetV1DisputesDisputeTokenEvidencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.disputes[':dispute_token'].evidences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DisputesDisputeTokenEvidencesKey() {
  return ['v1', '/v1/disputes/:dispute_token/evidences', 'POST'] as const
}

export function usePostV1DisputesDisputeTokenEvidences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DisputesDisputeTokenEvidencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$post']>
        },
      ) => parseResponse(client.v1.disputes[':dispute_token'].evidences.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DisputesDisputeTokenEvidencesEvidenceTokenKey(
  args: InferRequestType<
    (typeof client.v1.disputes)[':dispute_token']['evidences'][':evidence_token']['$get']
  >,
) {
  return ['v1', '/v1/disputes/:dispute_token/evidences/:evidence_token', args] as const
}

export function useGetV1DisputesDisputeTokenEvidencesEvidenceToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.disputes)[':dispute_token']['evidences'][':evidence_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.disputes)[':dispute_token']['evidences'][':evidence_token']['$get']
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
        ? getGetV1DisputesDisputeTokenEvidencesEvidenceTokenKey(args)
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
                (typeof client.v1.disputes)[':dispute_token']['evidences'][':evidence_token']['$get']
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
          client.v1.disputes[':dispute_token'].evidences[':evidence_token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DisputesDisputeTokenEvidencesEvidenceToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.disputes)[':dispute_token']['evidences'][':evidence_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.disputes)[':dispute_token']['evidences'][':evidence_token']['$get']
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
        ? getGetV1DisputesDisputeTokenEvidencesEvidenceTokenKey(args)
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
                (typeof client.v1.disputes)[':dispute_token']['evidences'][':evidence_token']['$get']
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
          client.v1.disputes[':dispute_token'].evidences[':evidence_token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1DisputesDisputeTokenEvidencesEvidenceTokenKey() {
  return ['v1', '/v1/disputes/:dispute_token/evidences/:evidence_token', 'DELETE'] as const
}

export function useDeleteV1DisputesDisputeTokenEvidencesEvidenceToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.disputes)[':dispute_token']['evidences'][':evidence_token']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.disputes)[':dispute_token']['evidences'][':evidence_token']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DisputesDisputeTokenEvidencesEvidenceTokenKey()
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
            (typeof client.v1.disputes)[':dispute_token']['evidences'][':evidence_token']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.disputes[':dispute_token'].evidences[':evidence_token'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1EmbedCardKey(args: InferRequestType<typeof client.v1.embed.card.$get>) {
  return ['v1', '/v1/embed/card', args] as const
}

export function useGetV1EmbedCard<TError = unknown>(
  args: InferRequestType<typeof client.v1.embed.card.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.card.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EmbedCardKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.card.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.embed.card.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EmbedCard<TError = unknown>(
  args: InferRequestType<typeof client.v1.embed.card.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.card.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EmbedCardKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.card.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.embed.card.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1EmbedKey(args: InferRequestType<typeof client.v1.embed.$get>) {
  return ['v1', '/v1/embed', args] as const
}

export function useGetV1Embed<TError = unknown>(
  args: InferRequestType<typeof client.v1.embed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EmbedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.embed.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV1Embed<TError = unknown>(
  args: InferRequestType<typeof client.v1.embed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EmbedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.embed.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetV1FraudTransactionsTransactionTokenKey(
  args: InferRequestType<(typeof client.v1.fraud.transactions)[':transaction_token']['$get']>,
) {
  return ['v1', '/v1/fraud/transactions/:transaction_token', args] as const
}

export function useGetV1FraudTransactionsTransactionToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.fraud.transactions)[':transaction_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.fraud.transactions)[':transaction_token']['$get']>>
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
        ? getGetV1FraudTransactionsTransactionTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.fraud.transactions)[':transaction_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.fraud.transactions[':transaction_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FraudTransactionsTransactionToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.fraud.transactions)[':transaction_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.fraud.transactions)[':transaction_token']['$get']>>
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
        ? getGetV1FraudTransactionsTransactionTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.fraud.transactions)[':transaction_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.fraud.transactions[':transaction_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1FraudTransactionsTransactionTokenKey() {
  return ['v1', '/v1/fraud/transactions/:transaction_token', 'POST'] as const
}

export function usePostV1FraudTransactionsTransactionToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.fraud.transactions)[':transaction_token']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.fraud.transactions)[':transaction_token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FraudTransactionsTransactionTokenKey()
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
            (typeof client.v1.fraud.transactions)[':transaction_token']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.fraud.transactions[':transaction_token'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TransactionsTransactionTokenEnhancedCommercialDataKey(
  args: InferRequestType<
    (typeof client.v1.transactions)[':transaction_token']['enhanced_commercial_data']['$get']
  >,
) {
  return ['v1', '/v1/transactions/:transaction_token/enhanced_commercial_data', args] as const
}

export function useGetV1TransactionsTransactionTokenEnhancedCommercialData<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.transactions)[':transaction_token']['enhanced_commercial_data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.transactions)[':transaction_token']['enhanced_commercial_data']['$get']
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
        ? getGetV1TransactionsTransactionTokenEnhancedCommercialDataKey(args)
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
                (typeof client.v1.transactions)[':transaction_token']['enhanced_commercial_data']['$get']
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
          client.v1.transactions[':transaction_token'].enhanced_commercial_data.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TransactionsTransactionTokenEnhancedCommercialData<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.transactions)[':transaction_token']['enhanced_commercial_data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.transactions)[':transaction_token']['enhanced_commercial_data']['$get']
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
        ? getGetV1TransactionsTransactionTokenEnhancedCommercialDataKey(args)
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
                (typeof client.v1.transactions)[':transaction_token']['enhanced_commercial_data']['$get']
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
          client.v1.transactions[':transaction_token'].enhanced_commercial_data.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1TransactionsTransactionTokenExpireAuthorizationKey() {
  return ['v1', '/v1/transactions/:transaction_token/expire_authorization', 'POST'] as const
}

export function usePostV1TransactionsTransactionTokenExpireAuthorization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.transactions)[':transaction_token']['expire_authorization']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.transactions)[':transaction_token']['expire_authorization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TransactionsTransactionTokenExpireAuthorizationKey()
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
            (typeof client.v1.transactions)[':transaction_token']['expire_authorization']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.transactions[':transaction_token'].expire_authorization.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TransactionsTransactionTokenRouteKey() {
  return ['v1', '/v1/transactions/:transaction_token/route', 'POST'] as const
}

export function usePostV1TransactionsTransactionTokenRoute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.transactions)[':transaction_token']['route']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.transactions)[':transaction_token']['route']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TransactionsTransactionTokenRouteKey()
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
            (typeof client.v1.transactions)[':transaction_token']['route']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.transactions[':transaction_token'].route.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TransactionsEventsEventTokenEnhancedCommercialDataKey(
  args: InferRequestType<
    (typeof client.v1.transactions.events)[':event_token']['enhanced_commercial_data']['$get']
  >,
) {
  return ['v1', '/v1/transactions/events/:event_token/enhanced_commercial_data', args] as const
}

export function useGetV1TransactionsEventsEventTokenEnhancedCommercialData<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.transactions.events)[':event_token']['enhanced_commercial_data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.transactions.events)[':event_token']['enhanced_commercial_data']['$get']
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
        ? getGetV1TransactionsEventsEventTokenEnhancedCommercialDataKey(args)
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
                (typeof client.v1.transactions.events)[':event_token']['enhanced_commercial_data']['$get']
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
          client.v1.transactions.events[':event_token'].enhanced_commercial_data.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TransactionsEventsEventTokenEnhancedCommercialData<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.transactions.events)[':event_token']['enhanced_commercial_data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.transactions.events)[':event_token']['enhanced_commercial_data']['$get']
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
        ? getGetV1TransactionsEventsEventTokenEnhancedCommercialDataKey(args)
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
                (typeof client.v1.transactions.events)[':event_token']['enhanced_commercial_data']['$get']
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
          client.v1.transactions.events[':event_token'].enhanced_commercial_data.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1EventSubscriptionsKey(
  args: InferRequestType<typeof client.v1.event_subscriptions.$get>,
) {
  return ['v1', '/v1/event_subscriptions', args] as const
}

export function useGetV1EventSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.v1.event_subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.event_subscriptions.$get>>>
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
        ? getGetV1EventSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.event_subscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.event_subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EventSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.v1.event_subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.event_subscriptions.$get>>>
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
        ? getGetV1EventSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.event_subscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.event_subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1EventSubscriptionsKey() {
  return ['v1', '/v1/event_subscriptions', 'POST'] as const
}

export function usePostV1EventSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.event_subscriptions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.event_subscriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EventSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.event_subscriptions.$post> },
      ) => parseResponse(client.v1.event_subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EventSubscriptionsEventSubscriptionTokenKey(
  args: InferRequestType<
    (typeof client.v1.event_subscriptions)[':event_subscription_token']['$get']
  >,
) {
  return ['v1', '/v1/event_subscriptions/:event_subscription_token', args] as const
}

export function useGetV1EventSubscriptionsEventSubscriptionToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.event_subscriptions)[':event_subscription_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.event_subscriptions)[':event_subscription_token']['$get']
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
        ? getGetV1EventSubscriptionsEventSubscriptionTokenKey(args)
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
                (typeof client.v1.event_subscriptions)[':event_subscription_token']['$get']
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
          client.v1.event_subscriptions[':event_subscription_token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EventSubscriptionsEventSubscriptionToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.event_subscriptions)[':event_subscription_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.event_subscriptions)[':event_subscription_token']['$get']
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
        ? getGetV1EventSubscriptionsEventSubscriptionTokenKey(args)
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
                (typeof client.v1.event_subscriptions)[':event_subscription_token']['$get']
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
          client.v1.event_subscriptions[':event_subscription_token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1EventSubscriptionsEventSubscriptionTokenKey() {
  return ['v1', '/v1/event_subscriptions/:event_subscription_token', 'DELETE'] as const
}

export function useDeleteV1EventSubscriptionsEventSubscriptionToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.event_subscriptions)[':event_subscription_token']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.event_subscriptions)[':event_subscription_token']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1EventSubscriptionsEventSubscriptionTokenKey()
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
            (typeof client.v1.event_subscriptions)[':event_subscription_token']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.event_subscriptions[':event_subscription_token'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1EventSubscriptionsEventSubscriptionTokenKey() {
  return ['v1', '/v1/event_subscriptions/:event_subscription_token', 'PATCH'] as const
}

export function usePatchV1EventSubscriptionsEventSubscriptionToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.event_subscriptions)[':event_subscription_token']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.event_subscriptions)[':event_subscription_token']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1EventSubscriptionsEventSubscriptionTokenKey()
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
            (typeof client.v1.event_subscriptions)[':event_subscription_token']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.event_subscriptions[':event_subscription_token'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1EventSubscriptionsEventSubscriptionTokenAttemptsKey(
  args: InferRequestType<
    (typeof client.v1.event_subscriptions)[':event_subscription_token']['attempts']['$get']
  >,
) {
  return ['v1', '/v1/event_subscriptions/:event_subscription_token/attempts', args] as const
}

export function useGetV1EventSubscriptionsEventSubscriptionTokenAttempts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.event_subscriptions)[':event_subscription_token']['attempts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.event_subscriptions)[':event_subscription_token']['attempts']['$get']
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
        ? getGetV1EventSubscriptionsEventSubscriptionTokenAttemptsKey(args)
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
                (typeof client.v1.event_subscriptions)[':event_subscription_token']['attempts']['$get']
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
          client.v1.event_subscriptions[':event_subscription_token'].attempts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EventSubscriptionsEventSubscriptionTokenAttempts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.event_subscriptions)[':event_subscription_token']['attempts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.event_subscriptions)[':event_subscription_token']['attempts']['$get']
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
        ? getGetV1EventSubscriptionsEventSubscriptionTokenAttemptsKey(args)
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
                (typeof client.v1.event_subscriptions)[':event_subscription_token']['attempts']['$get']
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
          client.v1.event_subscriptions[':event_subscription_token'].attempts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1EventSubscriptionsEventSubscriptionTokenRecoverKey() {
  return ['v1', '/v1/event_subscriptions/:event_subscription_token/recover', 'POST'] as const
}

export function usePostV1EventSubscriptionsEventSubscriptionTokenRecover<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.event_subscriptions)[':event_subscription_token']['recover']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.event_subscriptions)[':event_subscription_token']['recover']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EventSubscriptionsEventSubscriptionTokenRecoverKey()
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
            (typeof client.v1.event_subscriptions)[':event_subscription_token']['recover']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.event_subscriptions[':event_subscription_token'].recover.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1EventSubscriptionsEventSubscriptionTokenReplayMissingKey() {
  return ['v1', '/v1/event_subscriptions/:event_subscription_token/replay_missing', 'POST'] as const
}

export function usePostV1EventSubscriptionsEventSubscriptionTokenReplayMissing<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.event_subscriptions)[':event_subscription_token']['replay_missing']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.event_subscriptions)[':event_subscription_token']['replay_missing']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EventSubscriptionsEventSubscriptionTokenReplayMissingKey()
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
            (typeof client.v1.event_subscriptions)[':event_subscription_token']['replay_missing']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.event_subscriptions[':event_subscription_token'].replay_missing.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1EventSubscriptionsEventSubscriptionTokenSecretKey(
  args: InferRequestType<
    (typeof client.v1.event_subscriptions)[':event_subscription_token']['secret']['$get']
  >,
) {
  return ['v1', '/v1/event_subscriptions/:event_subscription_token/secret', args] as const
}

export function useGetV1EventSubscriptionsEventSubscriptionTokenSecret<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.event_subscriptions)[':event_subscription_token']['secret']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.event_subscriptions)[':event_subscription_token']['secret']['$get']
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
        ? getGetV1EventSubscriptionsEventSubscriptionTokenSecretKey(args)
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
                (typeof client.v1.event_subscriptions)[':event_subscription_token']['secret']['$get']
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
          client.v1.event_subscriptions[':event_subscription_token'].secret.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EventSubscriptionsEventSubscriptionTokenSecret<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.event_subscriptions)[':event_subscription_token']['secret']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.event_subscriptions)[':event_subscription_token']['secret']['$get']
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
        ? getGetV1EventSubscriptionsEventSubscriptionTokenSecretKey(args)
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
                (typeof client.v1.event_subscriptions)[':event_subscription_token']['secret']['$get']
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
          client.v1.event_subscriptions[':event_subscription_token'].secret.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1EventSubscriptionsEventSubscriptionTokenSecretRotateKey() {
  return ['v1', '/v1/event_subscriptions/:event_subscription_token/secret/rotate', 'POST'] as const
}

export function usePostV1EventSubscriptionsEventSubscriptionTokenSecretRotate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.event_subscriptions)[':event_subscription_token']['secret']['rotate']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.event_subscriptions)[':event_subscription_token']['secret']['rotate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EventSubscriptionsEventSubscriptionTokenSecretRotateKey()
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
            (typeof client.v1.event_subscriptions)[':event_subscription_token']['secret']['rotate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.event_subscriptions[':event_subscription_token'].secret.rotate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1EventsKey(args: InferRequestType<typeof client.v1.events.$get>) {
  return ['v1', '/v1/events', args] as const
}

export function useGetV1Events<TError = unknown>(
  args: InferRequestType<typeof client.v1.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Events<TError = unknown>(
  args: InferRequestType<typeof client.v1.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1EventsEventTokenKey(
  args: InferRequestType<(typeof client.v1.events)[':event_token']['$get']>,
) {
  return ['v1', '/v1/events/:event_token', args] as const
}

export function useGetV1EventsEventToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.events)[':event_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.events)[':event_token']['$get']>>
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
        ? getGetV1EventsEventTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.events)[':event_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.events[':event_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EventsEventToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.events)[':event_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.events)[':event_token']['$get']>>
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
        ? getGetV1EventsEventTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.events)[':event_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.events[':event_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1EventsEventTokenAttemptsKey(
  args: InferRequestType<(typeof client.v1.events)[':event_token']['attempts']['$get']>,
) {
  return ['v1', '/v1/events/:event_token/attempts', args] as const
}

export function useGetV1EventsEventTokenAttempts<TError = unknown>(
  args: InferRequestType<(typeof client.v1.events)[':event_token']['attempts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.events)[':event_token']['attempts']['$get']>>
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
        ? getGetV1EventsEventTokenAttemptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.events)[':event_token']['attempts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.events[':event_token'].attempts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EventsEventTokenAttempts<TError = unknown>(
  args: InferRequestType<(typeof client.v1.events)[':event_token']['attempts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.events)[':event_token']['attempts']['$get']>>
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
        ? getGetV1EventsEventTokenAttemptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.events)[':event_token']['attempts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.events[':event_token'].attempts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1EventsEventTokenEventSubscriptionsEventSubscriptionTokenResendKey() {
  return [
    'v1',
    '/v1/events/:event_token/event_subscriptions/:event_subscription_token/resend',
    'POST',
  ] as const
}

export function usePostV1EventsEventTokenEventSubscriptionsEventSubscriptionTokenResend<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.events)[':event_token']['event_subscriptions'][':event_subscription_token']['resend']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.events)[':event_token']['event_subscriptions'][':event_subscription_token']['resend']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1EventsEventTokenEventSubscriptionsEventSubscriptionTokenResendKey()
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
            (typeof client.v1.events)[':event_token']['event_subscriptions'][':event_subscription_token']['resend']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.events[':event_token'].event_subscriptions[
            ':event_subscription_token'
          ].resend.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1BlockchainRecipientsKey() {
  return ['v1', '/v1/blockchain_recipients', 'POST'] as const
}

export function usePostV1BlockchainRecipients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.blockchain_recipients.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.blockchain_recipients.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BlockchainRecipientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.blockchain_recipients.$post> },
      ) => parseResponse(client.v1.blockchain_recipients.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BlockchainRecipientsBlockchainRecipientTokenKey(
  args: InferRequestType<
    (typeof client.v1.blockchain_recipients)[':blockchain_recipient_token']['$get']
  >,
) {
  return ['v1', '/v1/blockchain_recipients/:blockchain_recipient_token', args] as const
}

export function useGetV1BlockchainRecipientsBlockchainRecipientToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.blockchain_recipients)[':blockchain_recipient_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.blockchain_recipients)[':blockchain_recipient_token']['$get']
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
        ? getGetV1BlockchainRecipientsBlockchainRecipientTokenKey(args)
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
                (typeof client.v1.blockchain_recipients)[':blockchain_recipient_token']['$get']
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
          client.v1.blockchain_recipients[':blockchain_recipient_token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BlockchainRecipientsBlockchainRecipientToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.blockchain_recipients)[':blockchain_recipient_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.blockchain_recipients)[':blockchain_recipient_token']['$get']
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
        ? getGetV1BlockchainRecipientsBlockchainRecipientTokenKey(args)
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
                (typeof client.v1.blockchain_recipients)[':blockchain_recipient_token']['$get']
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
          client.v1.blockchain_recipients[':blockchain_recipient_token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ExternalBankAccountsKey(
  args: InferRequestType<typeof client.v1.external_bank_accounts.$get>,
) {
  return ['v1', '/v1/external_bank_accounts', args] as const
}

export function useGetV1ExternalBankAccounts<TError = unknown>(
  args: InferRequestType<typeof client.v1.external_bank_accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_bank_accounts.$get>>>
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
        ? getGetV1ExternalBankAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_bank_accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.external_bank_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ExternalBankAccounts<TError = unknown>(
  args: InferRequestType<typeof client.v1.external_bank_accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_bank_accounts.$get>>>
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
        ? getGetV1ExternalBankAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_bank_accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.external_bank_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ExternalBankAccountsKey() {
  return ['v1', '/v1/external_bank_accounts', 'POST'] as const
}

export function usePostV1ExternalBankAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_bank_accounts.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.external_bank_accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExternalBankAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.external_bank_accounts.$post> },
      ) => parseResponse(client.v1.external_bank_accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ExternalBankAccountsExternalBankAccountTokenKey(
  args: InferRequestType<
    (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['$get']
  >,
) {
  return ['v1', '/v1/external_bank_accounts/:external_bank_account_token', args] as const
}

export function useGetV1ExternalBankAccountsExternalBankAccountToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['$get']
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
        ? getGetV1ExternalBankAccountsExternalBankAccountTokenKey(args)
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
                (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['$get']
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
          client.v1.external_bank_accounts[':external_bank_account_token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ExternalBankAccountsExternalBankAccountToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['$get']
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
        ? getGetV1ExternalBankAccountsExternalBankAccountTokenKey(args)
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
                (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['$get']
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
          client.v1.external_bank_accounts[':external_bank_account_token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV1ExternalBankAccountsExternalBankAccountTokenKey() {
  return ['v1', '/v1/external_bank_accounts/:external_bank_account_token', 'PATCH'] as const
}

export function usePatchV1ExternalBankAccountsExternalBankAccountToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ExternalBankAccountsExternalBankAccountTokenKey()
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
            (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.external_bank_accounts[':external_bank_account_token'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ExternalBankAccountsExternalBankAccountTokenMicroDepositsKey() {
  return [
    'v1',
    '/v1/external_bank_accounts/:external_bank_account_token/micro_deposits',
    'POST',
  ] as const
}

export function usePostV1ExternalBankAccountsExternalBankAccountTokenMicroDeposits<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['micro_deposits']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['micro_deposits']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1ExternalBankAccountsExternalBankAccountTokenMicroDepositsKey()
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
            (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['micro_deposits']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.external_bank_accounts[':external_bank_account_token'].micro_deposits.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ExternalBankAccountsExternalBankAccountTokenPauseKey() {
  return ['v1', '/v1/external_bank_accounts/:external_bank_account_token/pause', 'POST'] as const
}

export function usePostV1ExternalBankAccountsExternalBankAccountTokenPause<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['pause']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExternalBankAccountsExternalBankAccountTokenPauseKey()
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
            (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['pause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.external_bank_accounts[':external_bank_account_token'].pause.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ExternalBankAccountsExternalBankAccountTokenRetryMicroDepositsKey() {
  return [
    'v1',
    '/v1/external_bank_accounts/:external_bank_account_token/retry_micro_deposits',
    'POST',
  ] as const
}

export function usePostV1ExternalBankAccountsExternalBankAccountTokenRetryMicroDeposits<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['retry_micro_deposits']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['retry_micro_deposits']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1ExternalBankAccountsExternalBankAccountTokenRetryMicroDepositsKey()
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
            (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['retry_micro_deposits']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.external_bank_accounts[
            ':external_bank_account_token'
          ].retry_micro_deposits.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ExternalBankAccountsExternalBankAccountTokenRetryPrenoteKey() {
  return [
    'v1',
    '/v1/external_bank_accounts/:external_bank_account_token/retry_prenote',
    'POST',
  ] as const
}

export function usePostV1ExternalBankAccountsExternalBankAccountTokenRetryPrenote<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['retry_prenote']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['retry_prenote']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExternalBankAccountsExternalBankAccountTokenRetryPrenoteKey()
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
            (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['retry_prenote']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.external_bank_accounts[':external_bank_account_token'].retry_prenote.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ExternalBankAccountsExternalBankAccountTokenSetVerificationMethodKey() {
  return [
    'v1',
    '/v1/external_bank_accounts/:external_bank_account_token/set_verification_method',
    'POST',
  ] as const
}

export function usePostV1ExternalBankAccountsExternalBankAccountTokenSetVerificationMethod<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['set_verification_method']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['set_verification_method']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1ExternalBankAccountsExternalBankAccountTokenSetVerificationMethodKey()
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
            (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['set_verification_method']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.external_bank_accounts[
            ':external_bank_account_token'
          ].set_verification_method.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ExternalBankAccountsExternalBankAccountTokenUnpauseKey() {
  return ['v1', '/v1/external_bank_accounts/:external_bank_account_token/unpause', 'POST'] as const
}

export function usePostV1ExternalBankAccountsExternalBankAccountTokenUnpause<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['unpause']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['unpause']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExternalBankAccountsExternalBankAccountTokenUnpauseKey()
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
            (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['unpause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.external_bank_accounts[':external_bank_account_token'].unpause.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1CreditProductsCreditProductTokenExtendedCreditKey(
  args: InferRequestType<
    (typeof client.v1.credit_products)[':credit_product_token']['extended_credit']['$get']
  >,
) {
  return ['v1', '/v1/credit_products/:credit_product_token/extended_credit', args] as const
}

export function useGetV1CreditProductsCreditProductTokenExtendedCredit<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.credit_products)[':credit_product_token']['extended_credit']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.credit_products)[':credit_product_token']['extended_credit']['$get']
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
        ? getGetV1CreditProductsCreditProductTokenExtendedCreditKey(args)
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
                (typeof client.v1.credit_products)[':credit_product_token']['extended_credit']['$get']
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
          client.v1.credit_products[':credit_product_token'].extended_credit.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CreditProductsCreditProductTokenExtendedCredit<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.credit_products)[':credit_product_token']['extended_credit']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.credit_products)[':credit_product_token']['extended_credit']['$get']
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
        ? getGetV1CreditProductsCreditProductTokenExtendedCreditKey(args)
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
                (typeof client.v1.credit_products)[':credit_product_token']['extended_credit']['$get']
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
          client.v1.credit_products[':credit_product_token'].extended_credit.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1CreditProductsCreditProductTokenPrimeRatesKey(
  args: InferRequestType<
    (typeof client.v1.credit_products)[':credit_product_token']['prime_rates']['$get']
  >,
) {
  return ['v1', '/v1/credit_products/:credit_product_token/prime_rates', args] as const
}

export function useGetV1CreditProductsCreditProductTokenPrimeRates<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.credit_products)[':credit_product_token']['prime_rates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.credit_products)[':credit_product_token']['prime_rates']['$get']
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
        ? getGetV1CreditProductsCreditProductTokenPrimeRatesKey(args)
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
                (typeof client.v1.credit_products)[':credit_product_token']['prime_rates']['$get']
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
          client.v1.credit_products[':credit_product_token'].prime_rates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CreditProductsCreditProductTokenPrimeRates<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.credit_products)[':credit_product_token']['prime_rates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.credit_products)[':credit_product_token']['prime_rates']['$get']
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
        ? getGetV1CreditProductsCreditProductTokenPrimeRatesKey(args)
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
                (typeof client.v1.credit_products)[':credit_product_token']['prime_rates']['$get']
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
          client.v1.credit_products[':credit_product_token'].prime_rates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1CreditProductsCreditProductTokenPrimeRatesKey() {
  return ['v1', '/v1/credit_products/:credit_product_token/prime_rates', 'POST'] as const
}

export function usePostV1CreditProductsCreditProductTokenPrimeRates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.credit_products)[':credit_product_token']['prime_rates']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.credit_products)[':credit_product_token']['prime_rates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CreditProductsCreditProductTokenPrimeRatesKey()
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
            (typeof client.v1.credit_products)[':credit_product_token']['prime_rates']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.credit_products[':credit_product_token'].prime_rates.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1FinancialAccountsKey(
  args: InferRequestType<typeof client.v1.financial_accounts.$get>,
) {
  return ['v1', '/v1/financial_accounts', args] as const
}

export function useGetV1FinancialAccounts<TError = unknown>(
  args: InferRequestType<typeof client.v1.financial_accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.financial_accounts.$get>>>
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
        ? getGetV1FinancialAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.financial_accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.financial_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinancialAccounts<TError = unknown>(
  args: InferRequestType<typeof client.v1.financial_accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.financial_accounts.$get>>>
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
        ? getGetV1FinancialAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.financial_accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.financial_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1FinancialAccountsKey() {
  return ['v1', '/v1/financial_accounts', 'POST'] as const
}

export function usePostV1FinancialAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.financial_accounts.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.financial_accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FinancialAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.financial_accounts.$post> },
      ) => parseResponse(client.v1.financial_accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1FinancialAccountsFinancialAccountTokenKey(
  args: InferRequestType<(typeof client.v1.financial_accounts)[':financial_account_token']['$get']>,
) {
  return ['v1', '/v1/financial_accounts/:financial_account_token', args] as const
}

export function useGetV1FinancialAccountsFinancialAccountToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.financial_accounts)[':financial_account_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.financial_accounts)[':financial_account_token']['$get']>
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
        ? getGetV1FinancialAccountsFinancialAccountTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.financial_accounts)[':financial_account_token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.financial_accounts[':financial_account_token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinancialAccountsFinancialAccountToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.financial_accounts)[':financial_account_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.financial_accounts)[':financial_account_token']['$get']>
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
        ? getGetV1FinancialAccountsFinancialAccountTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.financial_accounts)[':financial_account_token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.financial_accounts[':financial_account_token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV1FinancialAccountsFinancialAccountTokenKey() {
  return ['v1', '/v1/financial_accounts/:financial_account_token', 'PATCH'] as const
}

export function usePatchV1FinancialAccountsFinancialAccountToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.financial_accounts)[':financial_account_token']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.financial_accounts)[':financial_account_token']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1FinancialAccountsFinancialAccountTokenKey()
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
            (typeof client.v1.financial_accounts)[':financial_account_token']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.financial_accounts[':financial_account_token'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1FinancialAccountsFinancialAccountTokenBalancesKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['balances']['$get']
  >,
) {
  return ['v1', '/v1/financial_accounts/:financial_account_token/balances', args] as const
}

export function useGetV1FinancialAccountsFinancialAccountTokenBalances<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['balances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['balances']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenBalancesKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['balances']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].balances.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinancialAccountsFinancialAccountTokenBalances<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['balances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['balances']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenBalancesKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['balances']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].balances.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1FinancialAccountsFinancialAccountTokenOpenToBuyKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['open_to_buy']['$get']
  >,
) {
  return ['v1', '/v1/financial_accounts/:financial_account_token/open_to_buy', args] as const
}

export function useGetV1FinancialAccountsFinancialAccountTokenOpenToBuy<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['open_to_buy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['open_to_buy']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenOpenToBuyKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['open_to_buy']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].open_to_buy.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinancialAccountsFinancialAccountTokenOpenToBuy<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['open_to_buy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['open_to_buy']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenOpenToBuyKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['open_to_buy']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].open_to_buy.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1FinancialAccountsFinancialAccountTokenCreditConfigurationKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['credit_configuration']['$get']
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/credit_configuration',
    args,
  ] as const
}

export function useGetV1FinancialAccountsFinancialAccountTokenCreditConfiguration<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['credit_configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['credit_configuration']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenCreditConfigurationKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['credit_configuration']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].credit_configuration.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinancialAccountsFinancialAccountTokenCreditConfiguration<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['credit_configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['credit_configuration']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenCreditConfigurationKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['credit_configuration']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].credit_configuration.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV1FinancialAccountsFinancialAccountTokenCreditConfigurationKey() {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/credit_configuration',
    'PATCH',
  ] as const
}

export function usePatchV1FinancialAccountsFinancialAccountTokenCreditConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.financial_accounts)[':financial_account_token']['credit_configuration']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['credit_configuration']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchV1FinancialAccountsFinancialAccountTokenCreditConfigurationKey()
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
            (typeof client.v1.financial_accounts)[':financial_account_token']['credit_configuration']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.financial_accounts[':financial_account_token'].credit_configuration.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1FinancialAccountsFinancialAccountTokenFinancialTransactionsKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions']['$get']
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/financial_transactions',
    args,
  ] as const
}

export function useGetV1FinancialAccountsFinancialAccountTokenFinancialTransactions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenFinancialTransactionsKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].financial_transactions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinancialAccountsFinancialAccountTokenFinancialTransactions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenFinancialTransactionsKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].financial_transactions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1FinancialAccountsFinancialAccountTokenFinancialTransactionsFinancialTransactionTokenKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions'][':financial_transaction_token']['$get']
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/financial_transactions/:financial_transaction_token',
    args,
  ] as const
}

export function useGetV1FinancialAccountsFinancialAccountTokenFinancialTransactionsFinancialTransactionToken<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions'][':financial_transaction_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions'][':financial_transaction_token']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenFinancialTransactionsFinancialTransactionTokenKey(
            args,
          )
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions'][':financial_transaction_token']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].financial_transactions[
            ':financial_transaction_token'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinancialAccountsFinancialAccountTokenFinancialTransactionsFinancialTransactionToken<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions'][':financial_transaction_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions'][':financial_transaction_token']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenFinancialTransactionsFinancialTransactionTokenKey(
            args,
          )
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions'][':financial_transaction_token']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].financial_transactions[
            ':financial_transaction_token'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1FinancialAccountsFinancialAccountTokenRegisterAccountNumberKey() {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/register_account_number',
    'POST',
  ] as const
}

export function usePostV1FinancialAccountsFinancialAccountTokenRegisterAccountNumber<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.financial_accounts)[':financial_account_token']['register_account_number']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['register_account_number']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1FinancialAccountsFinancialAccountTokenRegisterAccountNumberKey()
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
            (typeof client.v1.financial_accounts)[':financial_account_token']['register_account_number']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.financial_accounts[':financial_account_token'].register_account_number.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1FinancialAccountsFinancialAccountTokenHoldsKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['holds']['$get']
  >,
) {
  return ['v1', '/v1/financial_accounts/:financial_account_token/holds', args] as const
}

export function useGetV1FinancialAccountsFinancialAccountTokenHolds<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['holds']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['holds']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenHoldsKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['holds']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].holds.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinancialAccountsFinancialAccountTokenHolds<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['holds']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['holds']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenHoldsKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['holds']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].holds.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1FinancialAccountsFinancialAccountTokenHoldsKey() {
  return ['v1', '/v1/financial_accounts/:financial_account_token/holds', 'POST'] as const
}

export function usePostV1FinancialAccountsFinancialAccountTokenHolds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.financial_accounts)[':financial_account_token']['holds']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['holds']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FinancialAccountsFinancialAccountTokenHoldsKey()
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
            (typeof client.v1.financial_accounts)[':financial_account_token']['holds']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.financial_accounts[':financial_account_token'].holds.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1HoldsHoldTokenKey(
  args: InferRequestType<(typeof client.v1.holds)[':hold_token']['$get']>,
) {
  return ['v1', '/v1/holds/:hold_token', args] as const
}

export function useGetV1HoldsHoldToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.holds)[':hold_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.holds)[':hold_token']['$get']>>>
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
        ? getGetV1HoldsHoldTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.holds)[':hold_token']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.holds[':hold_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1HoldsHoldToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.holds)[':hold_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.holds)[':hold_token']['$get']>>>
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
        ? getGetV1HoldsHoldTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.holds)[':hold_token']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.holds[':hold_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1HoldsHoldTokenVoidKey() {
  return ['v1', '/v1/holds/:hold_token/void', 'POST'] as const
}

export function usePostV1HoldsHoldTokenVoid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.holds)[':hold_token']['void']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.holds)[':hold_token']['void']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HoldsHoldTokenVoidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.holds)[':hold_token']['void']['$post']> },
      ) => parseResponse(client.v1.holds[':hold_token'].void.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1FinancialAccountsFinancialAccountTokenStatementsKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['statements']['$get']
  >,
) {
  return ['v1', '/v1/financial_accounts/:financial_account_token/statements', args] as const
}

export function useGetV1FinancialAccountsFinancialAccountTokenStatements<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['statements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['statements']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenStatementsKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['statements']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].statements.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinancialAccountsFinancialAccountTokenStatements<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['statements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['statements']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenStatementsKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['statements']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].statements.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['$get']
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/statements/:statement_token',
    args,
  ] as const
}

export function useGetV1FinancialAccountsFinancialAccountTokenStatementsStatementToken<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].statements[
            ':statement_token'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinancialAccountsFinancialAccountTokenStatementsStatementToken<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].statements[
            ':statement_token'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenLineItemsKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['line_items']['$get']
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/statements/:statement_token/line_items',
    args,
  ] as const
}

export function useGetV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenLineItems<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['line_items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['line_items']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenLineItemsKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['line_items']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].statements[
            ':statement_token'
          ].line_items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenLineItems<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['line_items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['line_items']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenLineItemsKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['line_items']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].statements[
            ':statement_token'
          ].line_items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1FinancialAccountsFinancialAccountTokenLoanTapesKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes']['$get']
  >,
) {
  return ['v1', '/v1/financial_accounts/:financial_account_token/loan_tapes', args] as const
}

export function useGetV1FinancialAccountsFinancialAccountTokenLoanTapes<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenLoanTapesKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].loan_tapes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinancialAccountsFinancialAccountTokenLoanTapes<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenLoanTapesKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].loan_tapes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1FinancialAccountsFinancialAccountTokenLoanTapesLoanTapeTokenKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes'][':loan_tape_token']['$get']
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/loan_tapes/:loan_tape_token',
    args,
  ] as const
}

export function useGetV1FinancialAccountsFinancialAccountTokenLoanTapesLoanTapeToken<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes'][':loan_tape_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes'][':loan_tape_token']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenLoanTapesLoanTapeTokenKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes'][':loan_tape_token']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].loan_tapes[
            ':loan_tape_token'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinancialAccountsFinancialAccountTokenLoanTapesLoanTapeToken<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes'][':loan_tape_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes'][':loan_tape_token']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenLoanTapesLoanTapeTokenKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes'][':loan_tape_token']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].loan_tapes[
            ':loan_tape_token'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1FinancialAccountsFinancialAccountTokenLoanTapeConfigurationKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tape_configuration']['$get']
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/loan_tape_configuration',
    args,
  ] as const
}

export function useGetV1FinancialAccountsFinancialAccountTokenLoanTapeConfiguration<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tape_configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tape_configuration']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenLoanTapeConfigurationKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tape_configuration']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].loan_tape_configuration.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinancialAccountsFinancialAccountTokenLoanTapeConfiguration<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tape_configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tape_configuration']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenLoanTapeConfigurationKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tape_configuration']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].loan_tape_configuration.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1FinancialAccountsFinancialAccountTokenInstallmentPlansKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans']['$get']
  >,
) {
  return ['v1', '/v1/financial_accounts/:financial_account_token/installment_plans', args] as const
}

export function useGetV1FinancialAccountsFinancialAccountTokenInstallmentPlans<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenInstallmentPlansKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].installment_plans.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinancialAccountsFinancialAccountTokenInstallmentPlans<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenInstallmentPlansKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].installment_plans.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['$get']
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/installment_plans/:installment_plan_token',
    args,
  ] as const
}

export function useGetV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanToken<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenKey(
            args,
          )
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].installment_plans[
            ':installment_plan_token'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanToken<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenKey(
            args,
          )
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].installment_plans[
            ':installment_plan_token'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements']['$get']
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/installment_plans/:installment_plan_token/statements',
    args,
  ] as const
}

export function useGetV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatements<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsKey(
            args,
          )
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].installment_plans[
            ':installment_plan_token'
          ].statements.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatements<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsKey(
            args,
          )
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].installment_plans[
            ':installment_plan_token'
          ].statements.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsStatementTokenKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements'][':statement_token']['$get']
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/installment_plans/:installment_plan_token/statements/:statement_token',
    args,
  ] as const
}

export function useGetV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsStatementToken<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements'][':statement_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements'][':statement_token']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsStatementTokenKey(
            args,
          )
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements'][':statement_token']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].installment_plans[
            ':installment_plan_token'
          ].statements[':statement_token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsStatementToken<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements'][':statement_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements'][':statement_token']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsStatementTokenKey(
            args,
          )
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements'][':statement_token']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].installment_plans[
            ':installment_plan_token'
          ].statements[':statement_token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1FinancialAccountsFinancialAccountTokenInterestTierScheduleKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule']['$get']
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/interest_tier_schedule',
    args,
  ] as const
}

export function useGetV1FinancialAccountsFinancialAccountTokenInterestTierSchedule<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenInterestTierScheduleKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].interest_tier_schedule.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinancialAccountsFinancialAccountTokenInterestTierSchedule<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenInterestTierScheduleKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].interest_tier_schedule.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1FinancialAccountsFinancialAccountTokenInterestTierScheduleKey() {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/interest_tier_schedule',
    'POST',
  ] as const
}

export function usePostV1FinancialAccountsFinancialAccountTokenInterestTierSchedule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1FinancialAccountsFinancialAccountTokenInterestTierScheduleKey()
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
            (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.financial_accounts[':financial_account_token'].interest_tier_schedule.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$get']
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/interest_tier_schedule/:effective_date',
    args,
  ] as const
}

export function useGetV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].interest_tier_schedule[
            ':effective_date'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$get']
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
        ? getGetV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateKey(args)
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
                (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$get']
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
          client.v1.financial_accounts[':financial_account_token'].interest_tier_schedule[
            ':effective_date'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateKey() {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/interest_tier_schedule/:effective_date',
    'PUT',
  ] as const
}

export function usePutV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateKey()
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
            (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.financial_accounts[':financial_account_token'].interest_tier_schedule[
            ':effective_date'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateKey() {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/interest_tier_schedule/:effective_date',
    'DELETE',
  ] as const
}

export function useDeleteV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateKey()
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
            (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.financial_accounts[':financial_account_token'].interest_tier_schedule[
            ':effective_date'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1FinancialAccountsFinancialAccountTokenUpdateStatusKey() {
  return ['v1', '/v1/financial_accounts/:financial_account_token/update_status', 'POST'] as const
}

export function usePostV1FinancialAccountsFinancialAccountTokenUpdateStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.financial_accounts)[':financial_account_token']['update_status']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.financial_accounts)[':financial_account_token']['update_status']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FinancialAccountsFinancialAccountTokenUpdateStatusKey()
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
            (typeof client.v1.financial_accounts)[':financial_account_token']['update_status']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.financial_accounts[':financial_account_token'].update_status.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountActivityKey(
  args: InferRequestType<typeof client.v1.account_activity.$get>,
) {
  return ['v1', '/v1/account_activity', args] as const
}

export function useGetV1AccountActivity<TError = unknown>(
  args: InferRequestType<typeof client.v1.account_activity.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_activity.$get>>>
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
        ? getGetV1AccountActivityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_activity.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.account_activity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountActivity<TError = unknown>(
  args: InferRequestType<typeof client.v1.account_activity.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_activity.$get>>>
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
        ? getGetV1AccountActivityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_activity.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.account_activity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountActivityTransactionTokenKey(
  args: InferRequestType<(typeof client.v1.account_activity)[':transaction_token']['$get']>,
) {
  return ['v1', '/v1/account_activity/:transaction_token', args] as const
}

export function useGetV1AccountActivityTransactionToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.account_activity)[':transaction_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.account_activity)[':transaction_token']['$get']>>
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
        ? getGetV1AccountActivityTransactionTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.account_activity)[':transaction_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.account_activity[':transaction_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountActivityTransactionToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.account_activity)[':transaction_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.account_activity)[':transaction_token']['$get']>>
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
        ? getGetV1AccountActivityTransactionTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.account_activity)[':transaction_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.account_activity[':transaction_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PaymentsKey(args: InferRequestType<typeof client.v1.payments.$get>) {
  return ['v1', '/v1/payments', args] as const
}

export function useGetV1Payments<TError = unknown>(
  args: InferRequestType<typeof client.v1.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Payments<TError = unknown>(
  args: InferRequestType<typeof client.v1.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PaymentsKey() {
  return ['v1', '/v1/payments', 'POST'] as const
}

export function usePostV1Payments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.payments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.payments.$post> }) =>
        parseResponse(client.v1.payments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PaymentsStablecoinKey() {
  return ['v1', '/v1/payments/stablecoin', 'POST'] as const
}

export function usePostV1PaymentsStablecoin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.stablecoin.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.payments.stablecoin.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentsStablecoinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.payments.stablecoin.$post> },
      ) => parseResponse(client.v1.payments.stablecoin.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PaymentsPaymentTokenKey(
  args: InferRequestType<(typeof client.v1.payments)[':payment_token']['$get']>,
) {
  return ['v1', '/v1/payments/:payment_token', args] as const
}

export function useGetV1PaymentsPaymentToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.payments)[':payment_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payments)[':payment_token']['$get']>>
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
        ? getGetV1PaymentsPaymentTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payments)[':payment_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payments[':payment_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentsPaymentToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.payments)[':payment_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payments)[':payment_token']['$get']>>
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
        ? getGetV1PaymentsPaymentTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payments)[':payment_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payments[':payment_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PaymentsPaymentTokenRetryKey() {
  return ['v1', '/v1/payments/:payment_token/retry', 'POST'] as const
}

export function usePostV1PaymentsPaymentTokenRetry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payments)[':payment_token']['retry']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.payments)[':payment_token']['retry']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentsPaymentTokenRetryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.payments)[':payment_token']['retry']['$post']>
        },
      ) => parseResponse(client.v1.payments[':payment_token'].retry.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PaymentsPaymentTokenReturnKey() {
  return ['v1', '/v1/payments/:payment_token/return', 'POST'] as const
}

export function usePostV1PaymentsPaymentTokenReturn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payments)[':payment_token']['return']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.payments)[':payment_token']['return']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentsPaymentTokenReturnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.payments)[':payment_token']['return']['$post']>
        },
      ) => parseResponse(client.v1.payments[':payment_token'].return.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ReportsSettlementDetailsReportDateKey(
  args: InferRequestType<(typeof client.v1.reports.settlement.details)[':report_date']['$get']>,
) {
  return ['v1', '/v1/reports/settlement/details/:report_date', args] as const
}

export function useGetV1ReportsSettlementDetailsReportDate<TError = unknown>(
  args: InferRequestType<(typeof client.v1.reports.settlement.details)[':report_date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.reports.settlement.details)[':report_date']['$get']>
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
        ? getGetV1ReportsSettlementDetailsReportDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.reports.settlement.details)[':report_date']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.reports.settlement.details[':report_date'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReportsSettlementDetailsReportDate<TError = unknown>(
  args: InferRequestType<(typeof client.v1.reports.settlement.details)[':report_date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.reports.settlement.details)[':report_date']['$get']>
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
        ? getGetV1ReportsSettlementDetailsReportDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.reports.settlement.details)[':report_date']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.reports.settlement.details[':report_date'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ReportsSettlementSummaryReportDateKey(
  args: InferRequestType<(typeof client.v1.reports.settlement.summary)[':report_date']['$get']>,
) {
  return ['v1', '/v1/reports/settlement/summary/:report_date', args] as const
}

export function useGetV1ReportsSettlementSummaryReportDate<TError = unknown>(
  args: InferRequestType<(typeof client.v1.reports.settlement.summary)[':report_date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.reports.settlement.summary)[':report_date']['$get']>
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
        ? getGetV1ReportsSettlementSummaryReportDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.reports.settlement.summary)[':report_date']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.reports.settlement.summary[':report_date'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReportsSettlementSummaryReportDate<TError = unknown>(
  args: InferRequestType<(typeof client.v1.reports.settlement.summary)[':report_date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.reports.settlement.summary)[':report_date']['$get']>
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
        ? getGetV1ReportsSettlementSummaryReportDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.reports.settlement.summary)[':report_date']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.reports.settlement.summary[':report_date'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ReportsSettlementNetworkTotalsKey(
  args: InferRequestType<typeof client.v1.reports.settlement.network_totals.$get>,
) {
  return ['v1', '/v1/reports/settlement/network_totals', args] as const
}

export function useGetV1ReportsSettlementNetworkTotals<TError = unknown>(
  args: InferRequestType<typeof client.v1.reports.settlement.network_totals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.reports.settlement.network_totals.$get>>
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
        ? getGetV1ReportsSettlementNetworkTotalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.reports.settlement.network_totals.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.reports.settlement.network_totals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReportsSettlementNetworkTotals<TError = unknown>(
  args: InferRequestType<typeof client.v1.reports.settlement.network_totals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.reports.settlement.network_totals.$get>>
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
        ? getGetV1ReportsSettlementNetworkTotalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.reports.settlement.network_totals.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.reports.settlement.network_totals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ReportsSettlementNetworkTotalsTokenKey(
  args: InferRequestType<(typeof client.v1.reports.settlement.network_totals)[':token']['$get']>,
) {
  return ['v1', '/v1/reports/settlement/network_totals/:token', args] as const
}

export function useGetV1ReportsSettlementNetworkTotalsToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.reports.settlement.network_totals)[':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.reports.settlement.network_totals)[':token']['$get']>
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
        ? getGetV1ReportsSettlementNetworkTotalsTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.reports.settlement.network_totals)[':token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.reports.settlement.network_totals[':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReportsSettlementNetworkTotalsToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.reports.settlement.network_totals)[':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.reports.settlement.network_totals)[':token']['$get']>
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
        ? getGetV1ReportsSettlementNetworkTotalsTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.reports.settlement.network_totals)[':token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.reports.settlement.network_totals[':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ResponderEndpointsKey(
  args: InferRequestType<typeof client.v1.responder_endpoints.$get>,
) {
  return ['v1', '/v1/responder_endpoints', args] as const
}

export function useGetV1ResponderEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.v1.responder_endpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.responder_endpoints.$get>>>
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
        ? getGetV1ResponderEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.responder_endpoints.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.responder_endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ResponderEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.v1.responder_endpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.responder_endpoints.$get>>>
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
        ? getGetV1ResponderEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.responder_endpoints.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.responder_endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ResponderEndpointsKey() {
  return ['v1', '/v1/responder_endpoints', 'POST'] as const
}

export function usePostV1ResponderEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.responder_endpoints.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.responder_endpoints.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ResponderEndpointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.responder_endpoints.$post> },
      ) => parseResponse(client.v1.responder_endpoints.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ResponderEndpointsKey() {
  return ['v1', '/v1/responder_endpoints', 'DELETE'] as const
}

export function useDeleteV1ResponderEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.responder_endpoints.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.responder_endpoints.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ResponderEndpointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.responder_endpoints.$delete> },
      ) => parseResponse(client.v1.responder_endpoints.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1IpRangesKey() {
  return ['v1', '/v1/ip_ranges'] as const
}

export function useGetV1IpRanges<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ip_ranges.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1IpRangesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ip_ranges.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.ip_ranges.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IpRanges<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ip_ranges.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1IpRangesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ip_ranges.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.ip_ranges.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SimulateAuthorizationAdviceKey() {
  return ['v1', '/v1/simulate/authorization_advice', 'POST'] as const
}

export function usePostV1SimulateAuthorizationAdvice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.simulate.authorization_advice.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.simulate.authorization_advice.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SimulateAuthorizationAdviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.simulate.authorization_advice.$post> },
      ) => parseResponse(client.v1.simulate.authorization_advice.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SimulateAuthorizeKey() {
  return ['v1', '/v1/simulate/authorize', 'POST'] as const
}

export function usePostV1SimulateAuthorize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.simulate.authorize.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.simulate.authorize.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SimulateAuthorizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.simulate.authorize.$post> },
      ) => parseResponse(client.v1.simulate.authorize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SimulateClearingKey() {
  return ['v1', '/v1/simulate/clearing', 'POST'] as const
}

export function usePostV1SimulateClearing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.simulate.clearing.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.simulate.clearing.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SimulateClearingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.simulate.clearing.$post> },
      ) => parseResponse(client.v1.simulate.clearing.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SimulateCreditAuthorizationAdviceKey() {
  return ['v1', '/v1/simulate/credit_authorization_advice', 'POST'] as const
}

export function usePostV1SimulateCreditAuthorizationAdvice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.simulate.credit_authorization_advice.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.simulate.credit_authorization_advice.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SimulateCreditAuthorizationAdviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.simulate.credit_authorization_advice.$post> },
      ) => parseResponse(client.v1.simulate.credit_authorization_advice.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SimulateEventSubscriptionsEventSubscriptionTokenSendExampleKey() {
  return [
    'v1',
    '/v1/simulate/event_subscriptions/:event_subscription_token/send_example',
    'POST',
  ] as const
}

export function usePostV1SimulateEventSubscriptionsEventSubscriptionTokenSendExample<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.simulate.event_subscriptions)[':event_subscription_token']['send_example']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.simulate.event_subscriptions)[':event_subscription_token']['send_example']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1SimulateEventSubscriptionsEventSubscriptionTokenSendExampleKey()
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
            (typeof client.v1.simulate.event_subscriptions)[':event_subscription_token']['send_example']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.simulate.event_subscriptions[':event_subscription_token'].send_example.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SimulatePaymentsReceiptKey() {
  return ['v1', '/v1/simulate/payments/receipt', 'POST'] as const
}

export function usePostV1SimulatePaymentsReceipt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.simulate.payments.receipt.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.simulate.payments.receipt.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SimulatePaymentsReceiptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.simulate.payments.receipt.$post> },
      ) => parseResponse(client.v1.simulate.payments.receipt.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SimulatePaymentsReleaseKey() {
  return ['v1', '/v1/simulate/payments/release', 'POST'] as const
}

export function usePostV1SimulatePaymentsRelease<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.simulate.payments.release.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.simulate.payments.release.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SimulatePaymentsReleaseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.simulate.payments.release.$post> },
      ) => parseResponse(client.v1.simulate.payments.release.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SimulatePaymentsReturnKey() {
  return ['v1', '/v1/simulate/payments/return', 'POST'] as const
}

export function usePostV1SimulatePaymentsReturn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.simulate.payments.return.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.simulate.payments.return.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SimulatePaymentsReturnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.simulate.payments.return.$post> },
      ) => parseResponse(client.v1.simulate.payments.return.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SimulatePaymentsPaymentTokenActionKey() {
  return ['v1', '/v1/simulate/payments/:payment_token/action', 'POST'] as const
}

export function usePostV1SimulatePaymentsPaymentTokenAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.simulate.payments)[':payment_token']['action']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.simulate.payments)[':payment_token']['action']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SimulatePaymentsPaymentTokenActionKey()
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
            (typeof client.v1.simulate.payments)[':payment_token']['action']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.simulate.payments[':payment_token'].action.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SimulateReturnKey() {
  return ['v1', '/v1/simulate/return', 'POST'] as const
}

export function usePostV1SimulateReturn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.simulate.return.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.simulate.return.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SimulateReturnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.simulate.return.$post> }) =>
        parseResponse(client.v1.simulate.return.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SimulateReturnReversalKey() {
  return ['v1', '/v1/simulate/return_reversal', 'POST'] as const
}

export function usePostV1SimulateReturnReversal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.simulate.return_reversal.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.simulate.return_reversal.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SimulateReturnReversalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.simulate.return_reversal.$post> },
      ) => parseResponse(client.v1.simulate.return_reversal.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SimulateTokenizationsKey() {
  return ['v1', '/v1/simulate/tokenizations', 'POST'] as const
}

export function usePostV1SimulateTokenizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.simulate.tokenizations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.simulate.tokenizations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SimulateTokenizationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.simulate.tokenizations.$post> },
      ) => parseResponse(client.v1.simulate.tokenizations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SimulateVoidKey() {
  return ['v1', '/v1/simulate/void', 'POST'] as const
}

export function usePostV1SimulateVoid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.simulate.void.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.simulate.void.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SimulateVoidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.simulate.void.$post> }) =>
        parseResponse(client.v1.simulate.void.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SimulateAccountHoldersEnrollmentReviewKey() {
  return ['v1', '/v1/simulate/account_holders/enrollment_review', 'POST'] as const
}

export function usePostV1SimulateAccountHoldersEnrollmentReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.simulate.account_holders.enrollment_review.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.simulate.account_holders.enrollment_review.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SimulateAccountHoldersEnrollmentReviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.simulate.account_holders.enrollment_review.$post>
        },
      ) =>
        parseResponse(
          client.v1.simulate.account_holders.enrollment_review.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SimulateAccountHoldersEnrollmentDocumentReviewKey() {
  return ['v1', '/v1/simulate/account_holders/enrollment_document_review', 'POST'] as const
}

export function usePostV1SimulateAccountHoldersEnrollmentDocumentReview<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.v1.simulate.account_holders.enrollment_document_review.$post>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.simulate.account_holders.enrollment_document_review.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SimulateAccountHoldersEnrollmentDocumentReviewKey()
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
            typeof client.v1.simulate.account_holders.enrollment_document_review.$post
          >
        },
      ) =>
        parseResponse(
          client.v1.simulate.account_holders.enrollment_document_review.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1StatusKey() {
  return ['v1', '/v1/status'] as const
}

export function useGetV1Status<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.status.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1StatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.status.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Status<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.status.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1StatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.status.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ThreeDsAuthenticationSimulateKey() {
  return ['v1', '/v1/three_ds_authentication/simulate', 'POST'] as const
}

export function usePostV1ThreeDsAuthenticationSimulate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.three_ds_authentication.simulate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.three_ds_authentication.simulate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ThreeDsAuthenticationSimulateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.three_ds_authentication.simulate.$post> },
      ) => parseResponse(client.v1.three_ds_authentication.simulate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ThreeDsDecisioningSimulateEnterOtpKey() {
  return ['v1', '/v1/three_ds_decisioning/simulate/enter_otp', 'POST'] as const
}

export function usePostV1ThreeDsDecisioningSimulateEnterOtp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.three_ds_decisioning.simulate.enter_otp.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.three_ds_decisioning.simulate.enter_otp.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ThreeDsDecisioningSimulateEnterOtpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.three_ds_decisioning.simulate.enter_otp.$post>
        },
      ) =>
        parseResponse(client.v1.three_ds_decisioning.simulate.enter_otp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ThreeDsAuthenticationThreeDsAuthenticationTokenKey(
  args: InferRequestType<
    (typeof client.v1.three_ds_authentication)[':three_ds_authentication_token']['$get']
  >,
) {
  return ['v1', '/v1/three_ds_authentication/:three_ds_authentication_token', args] as const
}

export function useGetV1ThreeDsAuthenticationThreeDsAuthenticationToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.three_ds_authentication)[':three_ds_authentication_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.three_ds_authentication)[':three_ds_authentication_token']['$get']
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
        ? getGetV1ThreeDsAuthenticationThreeDsAuthenticationTokenKey(args)
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
                (typeof client.v1.three_ds_authentication)[':three_ds_authentication_token']['$get']
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
          client.v1.three_ds_authentication[':three_ds_authentication_token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ThreeDsAuthenticationThreeDsAuthenticationToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.three_ds_authentication)[':three_ds_authentication_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.three_ds_authentication)[':three_ds_authentication_token']['$get']
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
        ? getGetV1ThreeDsAuthenticationThreeDsAuthenticationTokenKey(args)
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
                (typeof client.v1.three_ds_authentication)[':three_ds_authentication_token']['$get']
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
          client.v1.three_ds_authentication[':three_ds_authentication_token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ThreeDsDecisioningSecretKey() {
  return ['v1', '/v1/three_ds_decisioning/secret'] as const
}

export function useGetV1ThreeDsDecisioningSecret<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.three_ds_decisioning.secret.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ThreeDsDecisioningSecretKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.three_ds_decisioning.secret.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.three_ds_decisioning.secret.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ThreeDsDecisioningSecret<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.three_ds_decisioning.secret.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ThreeDsDecisioningSecretKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.three_ds_decisioning.secret.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.three_ds_decisioning.secret.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ThreeDsDecisioningSecretRotateKey() {
  return ['v1', '/v1/three_ds_decisioning/secret/rotate', 'POST'] as const
}

export function usePostV1ThreeDsDecisioningSecretRotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.three_ds_decisioning.secret.rotate.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ThreeDsDecisioningSecretRotateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.v1.three_ds_decisioning.secret.rotate.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ThreeDsDecisioningChallengeResponseKey() {
  return ['v1', '/v1/three_ds_decisioning/challenge_response', 'POST'] as const
}

export function usePostV1ThreeDsDecisioningChallengeResponse<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.three_ds_decisioning.challenge_response.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.three_ds_decisioning.challenge_response.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ThreeDsDecisioningChallengeResponseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.three_ds_decisioning.challenge_response.$post>
        },
      ) =>
        parseResponse(client.v1.three_ds_decisioning.challenge_response.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TokenizationDecisioningSecretKey() {
  return ['v1', '/v1/tokenization_decisioning/secret'] as const
}

export function useGetV1TokenizationDecisioningSecret<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.tokenization_decisioning.secret.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TokenizationDecisioningSecretKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.tokenization_decisioning.secret.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.tokenization_decisioning.secret.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TokenizationDecisioningSecret<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.tokenization_decisioning.secret.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TokenizationDecisioningSecretKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.tokenization_decisioning.secret.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.tokenization_decisioning.secret.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TokenizationDecisioningSecretRotateKey() {
  return ['v1', '/v1/tokenization_decisioning/secret/rotate', 'POST'] as const
}

export function usePostV1TokenizationDecisioningSecretRotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.tokenization_decisioning.secret.rotate.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TokenizationDecisioningSecretRotateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.v1.tokenization_decisioning.secret.rotate.$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1CardsCardTokenTokenizationsKey() {
  return ['v1', '/v1/cards/:card_token/tokenizations', 'POST'] as const
}

export function usePostV1CardsCardTokenTokenizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['tokenizations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.cards)[':card_token']['tokenizations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CardsCardTokenTokenizationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.cards)[':card_token']['tokenizations']['$post']>
        },
      ) => parseResponse(client.v1.cards[':card_token'].tokenizations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TokenizationsTokenizationTokenSelectTfaMethodKey() {
  return ['v1', '/v1/tokenizations/:tokenization_token/select_tfa_method', 'POST'] as const
}

export function usePostV1TokenizationsTokenizationTokenSelectTfaMethod<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.tokenizations)[':tokenization_token']['select_tfa_method']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.tokenizations)[':tokenization_token']['select_tfa_method']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TokenizationsTokenizationTokenSelectTfaMethodKey()
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
            (typeof client.v1.tokenizations)[':tokenization_token']['select_tfa_method']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.tokenizations[':tokenization_token'].select_tfa_method.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TokenizationsTokenizationTokenSubmitTfaKey() {
  return ['v1', '/v1/tokenizations/:tokenization_token/submit_tfa', 'POST'] as const
}

export function usePostV1TokenizationsTokenizationTokenSubmitTfa<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.tokenizations)[':tokenization_token']['submit_tfa']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.tokenizations)[':tokenization_token']['submit_tfa']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TokenizationsTokenizationTokenSubmitTfaKey()
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
            (typeof client.v1.tokenizations)[':tokenization_token']['submit_tfa']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.tokenizations[':tokenization_token'].submit_tfa.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TokenizationsTokenizationTokenPaymentCredentialsKey() {
  return ['v1', '/v1/tokenizations/:tokenization_token/payment_credentials', 'POST'] as const
}

export function usePostV1TokenizationsTokenizationTokenPaymentCredentials<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.tokenizations)[':tokenization_token']['payment_credentials']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.tokenizations)[':tokenization_token']['payment_credentials']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TokenizationsTokenizationTokenPaymentCredentialsKey()
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
            (typeof client.v1.tokenizations)[':tokenization_token']['payment_credentials']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.tokenizations[':tokenization_token'].payment_credentials.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1TokenizationsKey(
  args: InferRequestType<typeof client.v1.tokenizations.$get>,
) {
  return ['v1', '/v1/tokenizations', args] as const
}

export function useGetV1Tokenizations<TError = unknown>(
  args: InferRequestType<typeof client.v1.tokenizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokenizations.$get>>>>
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
        ? getGetV1TokenizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokenizations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tokenizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Tokenizations<TError = unknown>(
  args: InferRequestType<typeof client.v1.tokenizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokenizations.$get>>>>
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
        ? getGetV1TokenizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokenizations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tokenizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TokenizationsTokenizationTokenKey(
  args: InferRequestType<(typeof client.v1.tokenizations)[':tokenization_token']['$get']>,
) {
  return ['v1', '/v1/tokenizations/:tokenization_token', args] as const
}

export function useGetV1TokenizationsTokenizationToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.tokenizations)[':tokenization_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tokenizations)[':tokenization_token']['$get']>>
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
        ? getGetV1TokenizationsTokenizationTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tokenizations)[':tokenization_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.tokenizations[':tokenization_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TokenizationsTokenizationToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.tokenizations)[':tokenization_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tokenizations)[':tokenization_token']['$get']>>
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
        ? getGetV1TokenizationsTokenizationTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tokenizations)[':tokenization_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.tokenizations[':tokenization_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TokenizationsTokenizationTokenPauseKey() {
  return ['v1', '/v1/tokenizations/:tokenization_token/pause', 'POST'] as const
}

export function usePostV1TokenizationsTokenizationTokenPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.tokenizations)[':tokenization_token']['pause']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.tokenizations)[':tokenization_token']['pause']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TokenizationsTokenizationTokenPauseKey()
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
            (typeof client.v1.tokenizations)[':tokenization_token']['pause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.tokenizations[':tokenization_token'].pause.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TokenizationsTokenizationTokenUnpauseKey() {
  return ['v1', '/v1/tokenizations/:tokenization_token/unpause', 'POST'] as const
}

export function usePostV1TokenizationsTokenizationTokenUnpause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.tokenizations)[':tokenization_token']['unpause']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.tokenizations)[':tokenization_token']['unpause']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TokenizationsTokenizationTokenUnpauseKey()
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
            (typeof client.v1.tokenizations)[':tokenization_token']['unpause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.tokenizations[':tokenization_token'].unpause.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TokenizationsTokenizationTokenDeactivateKey() {
  return ['v1', '/v1/tokenizations/:tokenization_token/deactivate', 'POST'] as const
}

export function usePostV1TokenizationsTokenizationTokenDeactivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.tokenizations)[':tokenization_token']['deactivate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.tokenizations)[':tokenization_token']['deactivate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TokenizationsTokenizationTokenDeactivateKey()
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
            (typeof client.v1.tokenizations)[':tokenization_token']['deactivate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.tokenizations[':tokenization_token'].deactivate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TokenizationsTokenizationTokenActivateKey() {
  return ['v1', '/v1/tokenizations/:tokenization_token/activate', 'POST'] as const
}

export function usePostV1TokenizationsTokenizationTokenActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.tokenizations)[':tokenization_token']['activate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.tokenizations)[':tokenization_token']['activate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TokenizationsTokenizationTokenActivateKey()
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
            (typeof client.v1.tokenizations)[':tokenization_token']['activate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.tokenizations[':tokenization_token'].activate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TokenizationsTokenizationTokenResendActivationCodeKey() {
  return ['v1', '/v1/tokenizations/:tokenization_token/resend_activation_code', 'POST'] as const
}

export function usePostV1TokenizationsTokenizationTokenResendActivationCode<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.tokenizations)[':tokenization_token']['resend_activation_code']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.tokenizations)[':tokenization_token']['resend_activation_code']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TokenizationsTokenizationTokenResendActivationCodeKey()
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
            (typeof client.v1.tokenizations)[':tokenization_token']['resend_activation_code']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.tokenizations[':tokenization_token'].resend_activation_code.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TokenizationsTokenizationTokenUpdateDigitalCardArtKey() {
  return ['v1', '/v1/tokenizations/:tokenization_token/update_digital_card_art', 'POST'] as const
}

export function usePostV1TokenizationsTokenizationTokenUpdateDigitalCardArt<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.tokenizations)[':tokenization_token']['update_digital_card_art']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.tokenizations)[':tokenization_token']['update_digital_card_art']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TokenizationsTokenizationTokenUpdateDigitalCardArtKey()
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
            (typeof client.v1.tokenizations)[':tokenization_token']['update_digital_card_art']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.tokenizations[':tokenization_token'].update_digital_card_art.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1TransactionsKey(
  args: InferRequestType<typeof client.v1.transactions.$get>,
) {
  return ['v1', '/v1/transactions', args] as const
}

export function useGetV1Transactions<TError = unknown>(
  args: InferRequestType<typeof client.v1.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transactions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TransactionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transactions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Transactions<TError = unknown>(
  args: InferRequestType<typeof client.v1.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transactions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TransactionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transactions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TransactionsTransactionTokenKey(
  args: InferRequestType<(typeof client.v1.transactions)[':transaction_token']['$get']>,
) {
  return ['v1', '/v1/transactions/:transaction_token', args] as const
}

export function useGetV1TransactionsTransactionToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.transactions)[':transaction_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.transactions)[':transaction_token']['$get']>>
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
        ? getGetV1TransactionsTransactionTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.transactions)[':transaction_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.transactions[':transaction_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TransactionsTransactionToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.transactions)[':transaction_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.transactions)[':transaction_token']['$get']>>
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
        ? getGetV1TransactionsTransactionTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.transactions)[':transaction_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.transactions[':transaction_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TransactionMonitoringCasesKey(
  args: InferRequestType<typeof client.v1.transaction_monitoring.cases.$get>,
) {
  return ['v1', '/v1/transaction_monitoring/cases', args] as const
}

export function useGetV1TransactionMonitoringCases<TError = unknown>(
  args: InferRequestType<typeof client.v1.transaction_monitoring.cases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.transaction_monitoring.cases.$get>>
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
        ? getGetV1TransactionMonitoringCasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.transaction_monitoring.cases.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.transaction_monitoring.cases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TransactionMonitoringCases<TError = unknown>(
  args: InferRequestType<typeof client.v1.transaction_monitoring.cases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.transaction_monitoring.cases.$get>>
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
        ? getGetV1TransactionMonitoringCasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.transaction_monitoring.cases.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.transaction_monitoring.cases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TransactionMonitoringCasesCaseTokenKey(
  args: InferRequestType<(typeof client.v1.transaction_monitoring.cases)[':case_token']['$get']>,
) {
  return ['v1', '/v1/transaction_monitoring/cases/:case_token', args] as const
}

export function useGetV1TransactionMonitoringCasesCaseToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.transaction_monitoring.cases)[':case_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.transaction_monitoring.cases)[':case_token']['$get']>
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
        ? getGetV1TransactionMonitoringCasesCaseTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.transaction_monitoring.cases)[':case_token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.transaction_monitoring.cases[':case_token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TransactionMonitoringCasesCaseToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.transaction_monitoring.cases)[':case_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.transaction_monitoring.cases)[':case_token']['$get']>
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
        ? getGetV1TransactionMonitoringCasesCaseTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.transaction_monitoring.cases)[':case_token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.transaction_monitoring.cases[':case_token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV1TransactionMonitoringCasesCaseTokenKey() {
  return ['v1', '/v1/transaction_monitoring/cases/:case_token', 'PATCH'] as const
}

export function usePatchV1TransactionMonitoringCasesCaseToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.transaction_monitoring.cases)[':case_token']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.transaction_monitoring.cases)[':case_token']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1TransactionMonitoringCasesCaseTokenKey()
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
            (typeof client.v1.transaction_monitoring.cases)[':case_token']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.transaction_monitoring.cases[':case_token'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1TransactionMonitoringCasesCaseTokenActivityKey(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['activity']['$get']
  >,
) {
  return ['v1', '/v1/transaction_monitoring/cases/:case_token/activity', args] as const
}

export function useGetV1TransactionMonitoringCasesCaseTokenActivity<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['activity']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.transaction_monitoring.cases)[':case_token']['activity']['$get']
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
        ? getGetV1TransactionMonitoringCasesCaseTokenActivityKey(args)
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
                (typeof client.v1.transaction_monitoring.cases)[':case_token']['activity']['$get']
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
          client.v1.transaction_monitoring.cases[':case_token'].activity.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TransactionMonitoringCasesCaseTokenActivity<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['activity']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.transaction_monitoring.cases)[':case_token']['activity']['$get']
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
        ? getGetV1TransactionMonitoringCasesCaseTokenActivityKey(args)
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
                (typeof client.v1.transaction_monitoring.cases)[':case_token']['activity']['$get']
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
          client.v1.transaction_monitoring.cases[':case_token'].activity.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1TransactionMonitoringCasesCaseTokenTransactionsKey(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['transactions']['$get']
  >,
) {
  return ['v1', '/v1/transaction_monitoring/cases/:case_token/transactions', args] as const
}

export function useGetV1TransactionMonitoringCasesCaseTokenTransactions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.transaction_monitoring.cases)[':case_token']['transactions']['$get']
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
        ? getGetV1TransactionMonitoringCasesCaseTokenTransactionsKey(args)
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
                (typeof client.v1.transaction_monitoring.cases)[':case_token']['transactions']['$get']
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
          client.v1.transaction_monitoring.cases[':case_token'].transactions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TransactionMonitoringCasesCaseTokenTransactions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.transaction_monitoring.cases)[':case_token']['transactions']['$get']
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
        ? getGetV1TransactionMonitoringCasesCaseTokenTransactionsKey(args)
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
                (typeof client.v1.transaction_monitoring.cases)[':case_token']['transactions']['$get']
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
          client.v1.transaction_monitoring.cases[':case_token'].transactions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1TransactionMonitoringCasesCaseTokenCardsKey(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['cards']['$get']
  >,
) {
  return ['v1', '/v1/transaction_monitoring/cases/:case_token/cards', args] as const
}

export function useGetV1TransactionMonitoringCasesCaseTokenCards<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['cards']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.transaction_monitoring.cases)[':case_token']['cards']['$get']
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
        ? getGetV1TransactionMonitoringCasesCaseTokenCardsKey(args)
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
                (typeof client.v1.transaction_monitoring.cases)[':case_token']['cards']['$get']
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
          client.v1.transaction_monitoring.cases[':case_token'].cards.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TransactionMonitoringCasesCaseTokenCards<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['cards']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.transaction_monitoring.cases)[':case_token']['cards']['$get']
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
        ? getGetV1TransactionMonitoringCasesCaseTokenCardsKey(args)
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
                (typeof client.v1.transaction_monitoring.cases)[':case_token']['cards']['$get']
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
          client.v1.transaction_monitoring.cases[':case_token'].cards.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1TransactionMonitoringCasesCaseTokenCommentsKey() {
  return ['v1', '/v1/transaction_monitoring/cases/:case_token/comments', 'POST'] as const
}

export function usePostV1TransactionMonitoringCasesCaseTokenComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.transaction_monitoring.cases)[':case_token']['comments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.transaction_monitoring.cases)[':case_token']['comments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TransactionMonitoringCasesCaseTokenCommentsKey()
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
            (typeof client.v1.transaction_monitoring.cases)[':case_token']['comments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.transaction_monitoring.cases[':case_token'].comments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TransactionMonitoringCasesCaseTokenCommentsCommentTokenKey() {
  return [
    'v1',
    '/v1/transaction_monitoring/cases/:case_token/comments/:comment_token',
    'DELETE',
  ] as const
}

export function useDeleteV1TransactionMonitoringCasesCaseTokenCommentsCommentToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.transaction_monitoring.cases)[':case_token']['comments'][':comment_token']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.transaction_monitoring.cases)[':case_token']['comments'][':comment_token']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1TransactionMonitoringCasesCaseTokenCommentsCommentTokenKey()
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
            (typeof client.v1.transaction_monitoring.cases)[':case_token']['comments'][':comment_token']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.transaction_monitoring.cases[':case_token'].comments[':comment_token'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1TransactionMonitoringCasesCaseTokenCommentsCommentTokenKey() {
  return [
    'v1',
    '/v1/transaction_monitoring/cases/:case_token/comments/:comment_token',
    'PATCH',
  ] as const
}

export function usePatchV1TransactionMonitoringCasesCaseTokenCommentsCommentToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.transaction_monitoring.cases)[':case_token']['comments'][':comment_token']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.transaction_monitoring.cases)[':case_token']['comments'][':comment_token']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1TransactionMonitoringCasesCaseTokenCommentsCommentTokenKey()
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
            (typeof client.v1.transaction_monitoring.cases)[':case_token']['comments'][':comment_token']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.transaction_monitoring.cases[':case_token'].comments[':comment_token'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1TransactionMonitoringCasesCaseTokenFilesKey(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['files']['$get']
  >,
) {
  return ['v1', '/v1/transaction_monitoring/cases/:case_token/files', args] as const
}

export function useGetV1TransactionMonitoringCasesCaseTokenFiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['files']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.transaction_monitoring.cases)[':case_token']['files']['$get']
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
        ? getGetV1TransactionMonitoringCasesCaseTokenFilesKey(args)
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
                (typeof client.v1.transaction_monitoring.cases)[':case_token']['files']['$get']
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
          client.v1.transaction_monitoring.cases[':case_token'].files.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TransactionMonitoringCasesCaseTokenFiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['files']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.transaction_monitoring.cases)[':case_token']['files']['$get']
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
        ? getGetV1TransactionMonitoringCasesCaseTokenFilesKey(args)
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
                (typeof client.v1.transaction_monitoring.cases)[':case_token']['files']['$get']
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
          client.v1.transaction_monitoring.cases[':case_token'].files.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1TransactionMonitoringCasesCaseTokenFilesKey() {
  return ['v1', '/v1/transaction_monitoring/cases/:case_token/files', 'POST'] as const
}

export function usePostV1TransactionMonitoringCasesCaseTokenFiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.transaction_monitoring.cases)[':case_token']['files']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.transaction_monitoring.cases)[':case_token']['files']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TransactionMonitoringCasesCaseTokenFilesKey()
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
            (typeof client.v1.transaction_monitoring.cases)[':case_token']['files']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.transaction_monitoring.cases[':case_token'].files.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1TransactionMonitoringCasesCaseTokenFilesFileTokenKey(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['files'][':file_token']['$get']
  >,
) {
  return ['v1', '/v1/transaction_monitoring/cases/:case_token/files/:file_token', args] as const
}

export function useGetV1TransactionMonitoringCasesCaseTokenFilesFileToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['files'][':file_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.transaction_monitoring.cases)[':case_token']['files'][':file_token']['$get']
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
        ? getGetV1TransactionMonitoringCasesCaseTokenFilesFileTokenKey(args)
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
                (typeof client.v1.transaction_monitoring.cases)[':case_token']['files'][':file_token']['$get']
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
          client.v1.transaction_monitoring.cases[':case_token'].files[':file_token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TransactionMonitoringCasesCaseTokenFilesFileToken<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['files'][':file_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.transaction_monitoring.cases)[':case_token']['files'][':file_token']['$get']
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
        ? getGetV1TransactionMonitoringCasesCaseTokenFilesFileTokenKey(args)
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
                (typeof client.v1.transaction_monitoring.cases)[':case_token']['files'][':file_token']['$get']
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
          client.v1.transaction_monitoring.cases[':case_token'].files[':file_token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1TransactionMonitoringCasesCaseTokenFilesFileTokenKey() {
  return ['v1', '/v1/transaction_monitoring/cases/:case_token/files/:file_token', 'DELETE'] as const
}

export function useDeleteV1TransactionMonitoringCasesCaseTokenFilesFileToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.transaction_monitoring.cases)[':case_token']['files'][':file_token']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.transaction_monitoring.cases)[':case_token']['files'][':file_token']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TransactionMonitoringCasesCaseTokenFilesFileTokenKey()
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
            (typeof client.v1.transaction_monitoring.cases)[':case_token']['files'][':file_token']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.transaction_monitoring.cases[':case_token'].files[':file_token'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1TransactionMonitoringQueuesKey(
  args: InferRequestType<typeof client.v1.transaction_monitoring.queues.$get>,
) {
  return ['v1', '/v1/transaction_monitoring/queues', args] as const
}

export function useGetV1TransactionMonitoringQueues<TError = unknown>(
  args: InferRequestType<typeof client.v1.transaction_monitoring.queues.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.transaction_monitoring.queues.$get>>
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
        ? getGetV1TransactionMonitoringQueuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.transaction_monitoring.queues.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.transaction_monitoring.queues.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TransactionMonitoringQueues<TError = unknown>(
  args: InferRequestType<typeof client.v1.transaction_monitoring.queues.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.transaction_monitoring.queues.$get>>
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
        ? getGetV1TransactionMonitoringQueuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.transaction_monitoring.queues.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.transaction_monitoring.queues.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TransactionMonitoringQueuesKey() {
  return ['v1', '/v1/transaction_monitoring/queues', 'POST'] as const
}

export function usePostV1TransactionMonitoringQueues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.transaction_monitoring.queues.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.transaction_monitoring.queues.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TransactionMonitoringQueuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.transaction_monitoring.queues.$post> },
      ) => parseResponse(client.v1.transaction_monitoring.queues.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TransactionMonitoringQueuesQueueTokenKey(
  args: InferRequestType<(typeof client.v1.transaction_monitoring.queues)[':queue_token']['$get']>,
) {
  return ['v1', '/v1/transaction_monitoring/queues/:queue_token', args] as const
}

export function useGetV1TransactionMonitoringQueuesQueueToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.transaction_monitoring.queues)[':queue_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.transaction_monitoring.queues)[':queue_token']['$get']>
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
        ? getGetV1TransactionMonitoringQueuesQueueTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.transaction_monitoring.queues)[':queue_token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.transaction_monitoring.queues[':queue_token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TransactionMonitoringQueuesQueueToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.transaction_monitoring.queues)[':queue_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.transaction_monitoring.queues)[':queue_token']['$get']>
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
        ? getGetV1TransactionMonitoringQueuesQueueTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.transaction_monitoring.queues)[':queue_token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.transaction_monitoring.queues[':queue_token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1TransactionMonitoringQueuesQueueTokenKey() {
  return ['v1', '/v1/transaction_monitoring/queues/:queue_token', 'DELETE'] as const
}

export function useDeleteV1TransactionMonitoringQueuesQueueToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.transaction_monitoring.queues)[':queue_token']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.transaction_monitoring.queues)[':queue_token']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TransactionMonitoringQueuesQueueTokenKey()
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
            (typeof client.v1.transaction_monitoring.queues)[':queue_token']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.transaction_monitoring.queues[':queue_token'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1TransactionMonitoringQueuesQueueTokenKey() {
  return ['v1', '/v1/transaction_monitoring/queues/:queue_token', 'PATCH'] as const
}

export function usePatchV1TransactionMonitoringQueuesQueueToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.transaction_monitoring.queues)[':queue_token']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.transaction_monitoring.queues)[':queue_token']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1TransactionMonitoringQueuesQueueTokenKey()
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
            (typeof client.v1.transaction_monitoring.queues)[':queue_token']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.transaction_monitoring.queues[':queue_token'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TransferKey() {
  return ['v1', '/v1/transfer', 'POST'] as const
}

export function usePostV1Transfer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfer.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.transfer.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TransferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.transfer.$post> }) =>
        parseResponse(client.v1.transfer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TransferLimitsKey(
  args: InferRequestType<typeof client.v1.transfer_limits.$get>,
) {
  return ['v1', '/v1/transfer_limits', args] as const
}

export function useGetV1TransferLimits<TError = unknown>(
  args: InferRequestType<typeof client.v1.transfer_limits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfer_limits.$get>>>>
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
        ? getGetV1TransferLimitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfer_limits.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.transfer_limits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TransferLimits<TError = unknown>(
  args: InferRequestType<typeof client.v1.transfer_limits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfer_limits.$get>>>>
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
        ? getGetV1TransferLimitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfer_limits.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.transfer_limits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BookTransfersKey(
  args: InferRequestType<typeof client.v1.book_transfers.$get>,
) {
  return ['v1', '/v1/book_transfers', args] as const
}

export function useGetV1BookTransfers<TError = unknown>(
  args: InferRequestType<typeof client.v1.book_transfers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.book_transfers.$get>>>>
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
        ? getGetV1BookTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.book_transfers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.book_transfers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BookTransfers<TError = unknown>(
  args: InferRequestType<typeof client.v1.book_transfers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.book_transfers.$get>>>>
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
        ? getGetV1BookTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.book_transfers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.book_transfers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1BookTransfersKey() {
  return ['v1', '/v1/book_transfers', 'POST'] as const
}

export function usePostV1BookTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.book_transfers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.book_transfers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BookTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.book_transfers.$post> }) =>
        parseResponse(client.v1.book_transfers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BookTransfersBookTransferTokenKey(
  args: InferRequestType<(typeof client.v1.book_transfers)[':book_transfer_token']['$get']>,
) {
  return ['v1', '/v1/book_transfers/:book_transfer_token', args] as const
}

export function useGetV1BookTransfersBookTransferToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.book_transfers)[':book_transfer_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.book_transfers)[':book_transfer_token']['$get']>>
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
        ? getGetV1BookTransfersBookTransferTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.book_transfers)[':book_transfer_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.book_transfers[':book_transfer_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BookTransfersBookTransferToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.book_transfers)[':book_transfer_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.book_transfers)[':book_transfer_token']['$get']>>
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
        ? getGetV1BookTransfersBookTransferTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.book_transfers)[':book_transfer_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.book_transfers[':book_transfer_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1BookTransfersBookTransferTokenRetryKey() {
  return ['v1', '/v1/book_transfers/:book_transfer_token/retry', 'POST'] as const
}

export function usePostV1BookTransfersBookTransferTokenRetry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.book_transfers)[':book_transfer_token']['retry']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.book_transfers)[':book_transfer_token']['retry']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BookTransfersBookTransferTokenRetryKey()
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
            (typeof client.v1.book_transfers)[':book_transfer_token']['retry']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.book_transfers[':book_transfer_token'].retry.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1BookTransfersBookTransferTokenReverseKey() {
  return ['v1', '/v1/book_transfers/:book_transfer_token/reverse', 'POST'] as const
}

export function usePostV1BookTransfersBookTransferTokenReverse<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.book_transfers)[':book_transfer_token']['reverse']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.book_transfers)[':book_transfer_token']['reverse']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BookTransfersBookTransferTokenReverseKey()
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
            (typeof client.v1.book_transfers)[':book_transfer_token']['reverse']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.book_transfers[':book_transfer_token'].reverse.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ExternalPaymentsKey(
  args: InferRequestType<typeof client.v1.external_payments.$get>,
) {
  return ['v1', '/v1/external_payments', args] as const
}

export function useGetV1ExternalPayments<TError = unknown>(
  args: InferRequestType<typeof client.v1.external_payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_payments.$get>>>
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
        ? getGetV1ExternalPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_payments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.external_payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ExternalPayments<TError = unknown>(
  args: InferRequestType<typeof client.v1.external_payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_payments.$get>>>
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
        ? getGetV1ExternalPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_payments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.external_payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ExternalPaymentsKey() {
  return ['v1', '/v1/external_payments', 'POST'] as const
}

export function usePostV1ExternalPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_payments.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.external_payments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExternalPaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.external_payments.$post> },
      ) => parseResponse(client.v1.external_payments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ExternalPaymentsExternalPaymentTokenKey(
  args: InferRequestType<(typeof client.v1.external_payments)[':external_payment_token']['$get']>,
) {
  return ['v1', '/v1/external_payments/:external_payment_token', args] as const
}

export function useGetV1ExternalPaymentsExternalPaymentToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.external_payments)[':external_payment_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.external_payments)[':external_payment_token']['$get']>
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
        ? getGetV1ExternalPaymentsExternalPaymentTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.external_payments)[':external_payment_token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.external_payments[':external_payment_token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ExternalPaymentsExternalPaymentToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.external_payments)[':external_payment_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.external_payments)[':external_payment_token']['$get']>
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
        ? getGetV1ExternalPaymentsExternalPaymentTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.external_payments)[':external_payment_token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.external_payments[':external_payment_token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ExternalPaymentsExternalPaymentTokenSettleKey() {
  return ['v1', '/v1/external_payments/:external_payment_token/settle', 'POST'] as const
}

export function usePostV1ExternalPaymentsExternalPaymentTokenSettle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.external_payments)[':external_payment_token']['settle']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.external_payments)[':external_payment_token']['settle']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExternalPaymentsExternalPaymentTokenSettleKey()
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
            (typeof client.v1.external_payments)[':external_payment_token']['settle']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.external_payments[':external_payment_token'].settle.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ExternalPaymentsExternalPaymentTokenReleaseKey() {
  return ['v1', '/v1/external_payments/:external_payment_token/release', 'POST'] as const
}

export function usePostV1ExternalPaymentsExternalPaymentTokenRelease<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.external_payments)[':external_payment_token']['release']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.external_payments)[':external_payment_token']['release']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExternalPaymentsExternalPaymentTokenReleaseKey()
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
            (typeof client.v1.external_payments)[':external_payment_token']['release']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.external_payments[':external_payment_token'].release.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ExternalPaymentsExternalPaymentTokenCancelKey() {
  return ['v1', '/v1/external_payments/:external_payment_token/cancel', 'POST'] as const
}

export function usePostV1ExternalPaymentsExternalPaymentTokenCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.external_payments)[':external_payment_token']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.external_payments)[':external_payment_token']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExternalPaymentsExternalPaymentTokenCancelKey()
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
            (typeof client.v1.external_payments)[':external_payment_token']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.external_payments[':external_payment_token'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ExternalPaymentsExternalPaymentTokenReverseKey() {
  return ['v1', '/v1/external_payments/:external_payment_token/reverse', 'POST'] as const
}

export function usePostV1ExternalPaymentsExternalPaymentTokenReverse<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.external_payments)[':external_payment_token']['reverse']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.external_payments)[':external_payment_token']['reverse']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExternalPaymentsExternalPaymentTokenReverseKey()
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
            (typeof client.v1.external_payments)[':external_payment_token']['reverse']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.external_payments[':external_payment_token'].reverse.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ManagementOperationsKey(
  args: InferRequestType<typeof client.v1.management_operations.$get>,
) {
  return ['v1', '/v1/management_operations', args] as const
}

export function useGetV1ManagementOperations<TError = unknown>(
  args: InferRequestType<typeof client.v1.management_operations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.management_operations.$get>>>
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
        ? getGetV1ManagementOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.management_operations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.management_operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ManagementOperations<TError = unknown>(
  args: InferRequestType<typeof client.v1.management_operations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.management_operations.$get>>>
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
        ? getGetV1ManagementOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.management_operations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.management_operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ManagementOperationsKey() {
  return ['v1', '/v1/management_operations', 'POST'] as const
}

export function usePostV1ManagementOperations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.management_operations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.management_operations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ManagementOperationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.management_operations.$post> },
      ) => parseResponse(client.v1.management_operations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ManagementOperationsManagementOperationTokenKey(
  args: InferRequestType<
    (typeof client.v1.management_operations)[':management_operation_token']['$get']
  >,
) {
  return ['v1', '/v1/management_operations/:management_operation_token', args] as const
}

export function useGetV1ManagementOperationsManagementOperationToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.management_operations)[':management_operation_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.management_operations)[':management_operation_token']['$get']
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
        ? getGetV1ManagementOperationsManagementOperationTokenKey(args)
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
                (typeof client.v1.management_operations)[':management_operation_token']['$get']
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
          client.v1.management_operations[':management_operation_token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ManagementOperationsManagementOperationToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.management_operations)[':management_operation_token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.management_operations)[':management_operation_token']['$get']
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
        ? getGetV1ManagementOperationsManagementOperationTokenKey(args)
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
                (typeof client.v1.management_operations)[':management_operation_token']['$get']
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
          client.v1.management_operations[':management_operation_token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ManagementOperationsManagementOperationTokenReverseKey() {
  return ['v1', '/v1/management_operations/:management_operation_token/reverse', 'POST'] as const
}

export function usePostV1ManagementOperationsManagementOperationTokenReverse<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.management_operations)[':management_operation_token']['reverse']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.management_operations)[':management_operation_token']['reverse']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ManagementOperationsManagementOperationTokenReverseKey()
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
            (typeof client.v1.management_operations)[':management_operation_token']['reverse']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.management_operations[':management_operation_token'].reverse.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1NetworkProgramsKey(
  args: InferRequestType<typeof client.v1.network_programs.$get>,
) {
  return ['v1', '/v1/network_programs', args] as const
}

export function useGetV1NetworkPrograms<TError = unknown>(
  args: InferRequestType<typeof client.v1.network_programs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.network_programs.$get>>>
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
        ? getGetV1NetworkProgramsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.network_programs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.network_programs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1NetworkPrograms<TError = unknown>(
  args: InferRequestType<typeof client.v1.network_programs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.network_programs.$get>>>
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
        ? getGetV1NetworkProgramsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.network_programs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.network_programs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1NetworkProgramsNetworkProgramTokenKey(
  args: InferRequestType<(typeof client.v1.network_programs)[':network_program_token']['$get']>,
) {
  return ['v1', '/v1/network_programs/:network_program_token', args] as const
}

export function useGetV1NetworkProgramsNetworkProgramToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.network_programs)[':network_program_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.network_programs)[':network_program_token']['$get']>
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
        ? getGetV1NetworkProgramsNetworkProgramTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.network_programs)[':network_program_token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.network_programs[':network_program_token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1NetworkProgramsNetworkProgramToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.network_programs)[':network_program_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.network_programs)[':network_program_token']['$get']>
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
        ? getGetV1NetworkProgramsNetworkProgramTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.network_programs)[':network_program_token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.network_programs[':network_program_token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1FundingEventsKey(
  args: InferRequestType<typeof client.v1.funding_events.$get>,
) {
  return ['v1', '/v1/funding_events', args] as const
}

export function useGetV1FundingEvents<TError = unknown>(
  args: InferRequestType<typeof client.v1.funding_events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.funding_events.$get>>>>
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
        ? getGetV1FundingEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.funding_events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.funding_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FundingEvents<TError = unknown>(
  args: InferRequestType<typeof client.v1.funding_events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.funding_events.$get>>>>
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
        ? getGetV1FundingEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.funding_events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.funding_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1FundingEventsFundingEventTokenKey(
  args: InferRequestType<(typeof client.v1.funding_events)[':funding_event_token']['$get']>,
) {
  return ['v1', '/v1/funding_events/:funding_event_token', args] as const
}

export function useGetV1FundingEventsFundingEventToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.funding_events)[':funding_event_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.funding_events)[':funding_event_token']['$get']>>
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
        ? getGetV1FundingEventsFundingEventTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.funding_events)[':funding_event_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.funding_events[':funding_event_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FundingEventsFundingEventToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.funding_events)[':funding_event_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.funding_events)[':funding_event_token']['$get']>>
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
        ? getGetV1FundingEventsFundingEventTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.funding_events)[':funding_event_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.funding_events[':funding_event_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1FundingEventsFundingEventTokenDetailsKey(
  args: InferRequestType<
    (typeof client.v1.funding_events)[':funding_event_token']['details']['$get']
  >,
) {
  return ['v1', '/v1/funding_events/:funding_event_token/details', args] as const
}

export function useGetV1FundingEventsFundingEventTokenDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.funding_events)[':funding_event_token']['details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.funding_events)[':funding_event_token']['details']['$get']
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
        ? getGetV1FundingEventsFundingEventTokenDetailsKey(args)
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
                (typeof client.v1.funding_events)[':funding_event_token']['details']['$get']
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
          client.v1.funding_events[':funding_event_token'].details.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FundingEventsFundingEventTokenDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.funding_events)[':funding_event_token']['details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.funding_events)[':funding_event_token']['details']['$get']
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
        ? getGetV1FundingEventsFundingEventTokenDetailsKey(args)
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
                (typeof client.v1.funding_events)[':funding_event_token']['details']['$get']
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
          client.v1.funding_events[':funding_event_token'].details.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2DisputesKey(args: InferRequestType<typeof client.v2.disputes.$get>) {
  return ['v2', '/v2/disputes', args] as const
}

export function useGetV2Disputes<TError = unknown>(
  args: InferRequestType<typeof client.v2.disputes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disputes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2DisputesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disputes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.disputes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Disputes<TError = unknown>(
  args: InferRequestType<typeof client.v2.disputes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disputes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2DisputesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disputes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.disputes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2DisputesDisputeTokenKey(
  args: InferRequestType<(typeof client.v2.disputes)[':dispute_token']['$get']>,
) {
  return ['v2', '/v2/disputes/:dispute_token', args] as const
}

export function useGetV2DisputesDisputeToken<TError = unknown>(
  args: InferRequestType<(typeof client.v2.disputes)[':dispute_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_token']['$get']>>
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
        ? getGetV2DisputesDisputeTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.disputes[':dispute_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DisputesDisputeToken<TError = unknown>(
  args: InferRequestType<(typeof client.v2.disputes)[':dispute_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_token']['$get']>>
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
        ? getGetV2DisputesDisputeTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.disputes[':dispute_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
