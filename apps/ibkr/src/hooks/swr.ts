import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetGwApiV1AccountsKey(
  args: InferRequestType<typeof client.gw.api.v1.accounts.$get>,
) {
  return ['gw', '/gw/api/v1/accounts', args] as const
}

export function useGetGwApiV1Accounts<TError = unknown>(
  args: InferRequestType<typeof client.gw.api.v1.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.$get>>>>
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
        ? getGetGwApiV1AccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1Accounts<TError = unknown>(
  args: InferRequestType<typeof client.gw.api.v1.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.$get>>>>
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
        ? getGetGwApiV1AccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGwApiV1AccountsKey() {
  return ['gw', '/gw/api/v1/accounts', 'POST'] as const
}

export function usePostGwApiV1Accounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.gw.api.v1.accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1AccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.gw.api.v1.accounts.$post> }) =>
        parseResponse(client.gw.api.v1.accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchGwApiV1AccountsKey() {
  return ['gw', '/gw/api/v1/accounts', 'PATCH'] as const
}

export function usePatchGwApiV1Accounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.gw.api.v1.accounts.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGwApiV1AccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.gw.api.v1.accounts.$patch> }) =>
        parseResponse(client.gw.api.v1.accounts.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV1AccountsDocumentsKey() {
  return ['gw', '/gw/api/v1/accounts/documents', 'POST'] as const
}

export function usePostGwApiV1AccountsDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.documents.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.gw.api.v1.accounts.documents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1AccountsDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.gw.api.v1.accounts.documents.$post> },
      ) => parseResponse(client.gw.api.v1.accounts.documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGwApiV1AccountsAccountIdTasksKey(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$get']>,
) {
  return ['gw', '/gw/api/v1/accounts/:accountId/tasks', args] as const
}

export function useGetGwApiV1AccountsAccountIdTasks<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$get']>>
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
        ? getGetGwApiV1AccountsAccountIdTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gw.api.v1.accounts[':accountId'].tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1AccountsAccountIdTasks<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$get']>>
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
        ? getGetGwApiV1AccountsAccountIdTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gw.api.v1.accounts[':accountId'].tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGwApiV1AccountsAccountIdTasksKey() {
  return ['gw', '/gw/api/v1/accounts/:accountId/tasks', 'POST'] as const
}

export function usePostGwApiV1AccountsAccountIdTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1AccountsAccountIdTasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$post']>
        },
      ) => parseResponse(client.gw.api.v1.accounts[':accountId'].tasks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchGwApiV1AccountsAccountIdTasksKey() {
  return ['gw', '/gw/api/v1/accounts/:accountId/tasks', 'PATCH'] as const
}

export function usePatchGwApiV1AccountsAccountIdTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGwApiV1AccountsAccountIdTasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['tasks']['$patch']>
        },
      ) => parseResponse(client.gw.api.v1.accounts[':accountId'].tasks.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV1BalancesQueryKey() {
  return ['gw', '/gw/api/v1/balances/query', 'POST'] as const
}

export function usePostGwApiV1BalancesQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.balances.query.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.gw.api.v1.balances.query.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1BalancesQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.gw.api.v1.balances.query.$post> },
      ) => parseResponse(client.gw.api.v1.balances.query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV1BankInstructionsKey() {
  return ['gw', '/gw/api/v1/bank-instructions', 'POST'] as const
}

export function usePostGwApiV1BankInstructions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['bank-instructions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gw.api.v1)['bank-instructions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1BankInstructionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.gw.api.v1)['bank-instructions']['$post']> },
      ) => parseResponse(client.gw.api.v1['bank-instructions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV1BankInstructionsQueryKey() {
  return ['gw', '/gw/api/v1/bank-instructions/query', 'POST'] as const
}

export function usePostGwApiV1BankInstructionsQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['bank-instructions']['query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gw.api.v1)['bank-instructions']['query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1BankInstructionsQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.gw.api.v1)['bank-instructions']['query']['$post']>
        },
      ) => parseResponse(client.gw.api.v1['bank-instructions'].query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV1BankInstructionsBulkKey() {
  return ['gw', '/gw/api/v1/bank-instructions:bulk', 'POST'] as const
}

export function usePostGwApiV1BankInstructionsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['bank-instructions:bulk']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gw.api.v1)['bank-instructions:bulk']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1BankInstructionsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.gw.api.v1)['bank-instructions:bulk']['$post']> },
      ) => parseResponse(client.gw.api.v1['bank-instructions:bulk'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV1EchoSignedJwtKey() {
  return ['gw', '/gw/api/v1/echo/signed-jwt', 'POST'] as const
}

export function usePostGwApiV1EchoSignedJwt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1.echo)['signed-jwt']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gw.api.v1.echo)['signed-jwt']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1EchoSignedJwtKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.gw.api.v1.echo)['signed-jwt']['$post']> },
      ) => parseResponse(client.gw.api.v1.echo['signed-jwt'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV1ExternalAssetTransfersKey() {
  return ['gw', '/gw/api/v1/external-asset-transfers', 'POST'] as const
}

export function usePostGwApiV1ExternalAssetTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['external-asset-transfers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gw.api.v1)['external-asset-transfers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1ExternalAssetTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.gw.api.v1)['external-asset-transfers']['$post']>
        },
      ) => parseResponse(client.gw.api.v1['external-asset-transfers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV1ExternalAssetTransfersBulkKey() {
  return ['gw', '/gw/api/v1/external-asset-transfers:bulk', 'POST'] as const
}

export function usePostGwApiV1ExternalAssetTransfersBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['external-asset-transfers:bulk']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gw.api.v1)['external-asset-transfers:bulk']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1ExternalAssetTransfersBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.gw.api.v1)['external-asset-transfers:bulk']['$post']>
        },
      ) =>
        parseResponse(client.gw.api.v1['external-asset-transfers:bulk'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV1ExternalCashTransfersKey() {
  return ['gw', '/gw/api/v1/external-cash-transfers', 'POST'] as const
}

export function usePostGwApiV1ExternalCashTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['external-cash-transfers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gw.api.v1)['external-cash-transfers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1ExternalCashTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.gw.api.v1)['external-cash-transfers']['$post']> },
      ) => parseResponse(client.gw.api.v1['external-cash-transfers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV1ExternalCashTransfersQueryKey() {
  return ['gw', '/gw/api/v1/external-cash-transfers/query', 'POST'] as const
}

export function usePostGwApiV1ExternalCashTransfersQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.gw.api.v1)['external-cash-transfers']['query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1ExternalCashTransfersQueryKey()
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
            (typeof client.gw.api.v1)['external-cash-transfers']['query']['$post']
          >
        },
      ) =>
        parseResponse(client.gw.api.v1['external-cash-transfers'].query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV1ExternalCashTransfersBulkKey() {
  return ['gw', '/gw/api/v1/external-cash-transfers:bulk', 'POST'] as const
}

export function usePostGwApiV1ExternalCashTransfersBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['external-cash-transfers:bulk']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gw.api.v1)['external-cash-transfers:bulk']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1ExternalCashTransfersBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.gw.api.v1)['external-cash-transfers:bulk']['$post']>
        },
      ) =>
        parseResponse(client.gw.api.v1['external-cash-transfers:bulk'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV1InstructionsCancelKey() {
  return ['gw', '/gw/api/v1/instructions/cancel', 'POST'] as const
}

export function usePostGwApiV1InstructionsCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.instructions.cancel.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.gw.api.v1.instructions.cancel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1InstructionsCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.gw.api.v1.instructions.cancel.$post> },
      ) => parseResponse(client.gw.api.v1.instructions.cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV1InstructionsCancelBulkKey() {
  return ['gw', '/gw/api/v1/instructions/cancel:bulk', 'POST'] as const
}

export function usePostGwApiV1InstructionsCancelBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1.instructions)['cancel:bulk']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gw.api.v1.instructions)['cancel:bulk']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1InstructionsCancelBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.gw.api.v1.instructions)['cancel:bulk']['$post']>
        },
      ) => parseResponse(client.gw.api.v1.instructions['cancel:bulk'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV1InstructionsQueryKey() {
  return ['gw', '/gw/api/v1/instructions/query', 'POST'] as const
}

export function usePostGwApiV1InstructionsQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.instructions.query.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.gw.api.v1.instructions.query.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1InstructionsQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.gw.api.v1.instructions.query.$post> },
      ) => parseResponse(client.gw.api.v1.instructions.query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV1InternalAssetTransfersKey() {
  return ['gw', '/gw/api/v1/internal-asset-transfers', 'POST'] as const
}

export function usePostGwApiV1InternalAssetTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['internal-asset-transfers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gw.api.v1)['internal-asset-transfers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1InternalAssetTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.gw.api.v1)['internal-asset-transfers']['$post']>
        },
      ) => parseResponse(client.gw.api.v1['internal-asset-transfers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV1InternalAssetTransfersBulkKey() {
  return ['gw', '/gw/api/v1/internal-asset-transfers:bulk', 'POST'] as const
}

export function usePostGwApiV1InternalAssetTransfersBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['internal-asset-transfers:bulk']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gw.api.v1)['internal-asset-transfers:bulk']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1InternalAssetTransfersBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.gw.api.v1)['internal-asset-transfers:bulk']['$post']>
        },
      ) =>
        parseResponse(client.gw.api.v1['internal-asset-transfers:bulk'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV1InternalCashTransfersKey() {
  return ['gw', '/gw/api/v1/internal-cash-transfers', 'POST'] as const
}

export function usePostGwApiV1InternalCashTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['internal-cash-transfers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gw.api.v1)['internal-cash-transfers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1InternalCashTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.gw.api.v1)['internal-cash-transfers']['$post']> },
      ) => parseResponse(client.gw.api.v1['internal-cash-transfers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV1InternalCashTransfersBulkKey() {
  return ['gw', '/gw/api/v1/internal-cash-transfers:bulk', 'POST'] as const
}

export function usePostGwApiV1InternalCashTransfersBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['internal-cash-transfers:bulk']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gw.api.v1)['internal-cash-transfers:bulk']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1InternalCashTransfersBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.gw.api.v1)['internal-cash-transfers:bulk']['$post']>
        },
      ) =>
        parseResponse(client.gw.api.v1['internal-cash-transfers:bulk'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV1RestrictionsKey() {
  return ['gw', '/gw/api/v1/restrictions', 'POST'] as const
}

export function usePostGwApiV1Restrictions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.gw.api.v1.restrictions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1RestrictionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.gw.api.v1.restrictions.$post> },
      ) => parseResponse(client.gw.api.v1.restrictions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV1RestrictionsVerifyKey() {
  return ['gw', '/gw/api/v1/restrictions/verify', 'POST'] as const
}

export function usePostGwApiV1RestrictionsVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.verify.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.gw.api.v1.restrictions.verify.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1RestrictionsVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.gw.api.v1.restrictions.verify.$post> },
      ) => parseResponse(client.gw.api.v1.restrictions.verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV1SsoBrowserSessionsKey() {
  return ['gw', '/gw/api/v1/sso-browser-sessions', 'POST'] as const
}

export function usePostGwApiV1SsoBrowserSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['sso-browser-sessions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gw.api.v1)['sso-browser-sessions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1SsoBrowserSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.gw.api.v1)['sso-browser-sessions']['$post']> },
      ) => parseResponse(client.gw.api.v1['sso-browser-sessions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV1SsoSessionsKey() {
  return ['gw', '/gw/api/v1/sso-sessions', 'POST'] as const
}

export function usePostGwApiV1SsoSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['sso-sessions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gw.api.v1)['sso-sessions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1SsoSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.gw.api.v1)['sso-sessions']['$post']> },
      ) => parseResponse(client.gw.api.v1['sso-sessions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV1StatementsKey() {
  return ['gw', '/gw/api/v1/statements', 'POST'] as const
}

export function usePostGwApiV1Statements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.statements.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.gw.api.v1.statements.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1StatementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.gw.api.v1.statements.$post> },
      ) => parseResponse(client.gw.api.v1.statements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV1TaxDocumentsKey() {
  return ['gw', '/gw/api/v1/tax-documents', 'POST'] as const
}

export function usePostGwApiV1TaxDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['tax-documents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gw.api.v1)['tax-documents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1TaxDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.gw.api.v1)['tax-documents']['$post']> },
      ) => parseResponse(client.gw.api.v1['tax-documents'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV1TaxVouchersKey() {
  return ['gw', '/gw/api/v1/tax-vouchers', 'POST'] as const
}

export function usePostGwApiV1TaxVouchers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1TaxVouchersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['$post']> },
      ) => parseResponse(client.gw.api.v1['tax-vouchers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV1TradeConfirmationsKey() {
  return ['gw', '/gw/api/v1/trade-confirmations', 'POST'] as const
}

export function usePostGwApiV1TradeConfirmations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1)['trade-confirmations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gw.api.v1)['trade-confirmations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV1TradeConfirmationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.gw.api.v1)['trade-confirmations']['$post']> },
      ) => parseResponse(client.gw.api.v1['trade-confirmations'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV2ExternalAssetTransfersKey() {
  return ['gw', '/gw/api/v2/external-asset-transfers', 'POST'] as const
}

export function usePostGwApiV2ExternalAssetTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v2)['external-asset-transfers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gw.api.v2)['external-asset-transfers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV2ExternalAssetTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.gw.api.v2)['external-asset-transfers']['$post']>
        },
      ) => parseResponse(client.gw.api.v2['external-asset-transfers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGwApiV2ExternalAssetTransfersBulkKey() {
  return ['gw', '/gw/api/v2/external-asset-transfers:bulk', 'POST'] as const
}

export function usePostGwApiV2ExternalAssetTransfersBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v2)['external-asset-transfers:bulk']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gw.api.v2)['external-asset-transfers:bulk']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGwApiV2ExternalAssetTransfersBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.gw.api.v2)['external-asset-transfers:bulk']['$post']>
        },
      ) =>
        parseResponse(client.gw.api.v2['external-asset-transfers:bulk'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauth2ApiV1TokenKey() {
  return ['oauth2', '/oauth2/api/v1/token', 'POST'] as const
}

export function usePostOauth2ApiV1Token<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.api.v1.token.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth2.api.v1.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth2ApiV1TokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth2.api.v1.token.$post> }) =>
        parseResponse(client.oauth2.api.v1.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiFaFaPresetGetKey() {
  return ['v1', '/v1/api/fa/fa-preset/get', 'POST'] as const
}

export function usePostV1ApiFaFaPresetGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fa)['fa-preset']['get']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.api.fa)['fa-preset']['get']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiFaFaPresetGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.api.fa)['fa-preset']['get']['$post']> },
      ) => parseResponse(client.v1.api.fa['fa-preset'].get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiFaFaPresetSaveKey() {
  return ['v1', '/v1/api/fa/fa-preset/save', 'POST'] as const
}

export function usePostV1ApiFaFaPresetSave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fa)['fa-preset']['save']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.api.fa)['fa-preset']['save']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiFaFaPresetSaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.api.fa)['fa-preset']['save']['$post']> },
      ) => parseResponse(client.v1.api.fa['fa-preset'].save.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiFaIsFullMasterKey() {
  return ['v1', '/v1/api/fa/is-full-master', 'POST'] as const
}

export function usePostV1ApiFaIsFullMaster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fa)['is-full-master']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.api.fa)['is-full-master']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiFaIsFullMasterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.api.fa)['is-full-master']['$post']> },
      ) => parseResponse(client.v1.api.fa['is-full-master'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiFaModelAccountsDetailsKey() {
  return ['v1', '/v1/api/fa/model/accounts-details', 'POST'] as const
}

export function usePostV1ApiFaModelAccountsDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fa.model)['accounts-details']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.api.fa.model)['accounts-details']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiFaModelAccountsDetailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.api.fa.model)['accounts-details']['$post']> },
      ) => parseResponse(client.v1.api.fa.model['accounts-details'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiFaModelCashAnalyzerKey() {
  return ['v1', '/v1/api/fa/model/cash-analyzer', 'POST'] as const
}

export function usePostV1ApiFaModelCashAnalyzer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fa.model)['cash-analyzer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.api.fa.model)['cash-analyzer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiFaModelCashAnalyzerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.api.fa.model)['cash-analyzer']['$post']> },
      ) => parseResponse(client.v1.api.fa.model['cash-analyzer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiFaModelInvestDivestKey() {
  return ['v1', '/v1/api/fa/model/invest-divest', 'POST'] as const
}

export function usePostV1ApiFaModelInvestDivest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fa.model)['invest-divest']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.api.fa.model)['invest-divest']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiFaModelInvestDivestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.api.fa.model)['invest-divest']['$post']> },
      ) => parseResponse(client.v1.api.fa.model['invest-divest'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiFaModelInvestDivestPositionsKey() {
  return ['v1', '/v1/api/fa/model/invest-divest-positions', 'POST'] as const
}

export function usePostV1ApiFaModelInvestDivestPositions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fa.model)['invest-divest-positions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.api.fa.model)['invest-divest-positions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiFaModelInvestDivestPositionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.api.fa.model)['invest-divest-positions']['$post']>
        },
      ) =>
        parseResponse(client.v1.api.fa.model['invest-divest-positions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiFaModelListKey() {
  return ['v1', '/v1/api/fa/model/list', 'POST'] as const
}

export function usePostV1ApiFaModelList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fa.model.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.fa.model.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiFaModelListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.api.fa.model.list.$post> },
      ) => parseResponse(client.v1.api.fa.model.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiFaModelPositionsKey() {
  return ['v1', '/v1/api/fa/model/positions', 'POST'] as const
}

export function usePostV1ApiFaModelPositions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fa.model.positions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.fa.model.positions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiFaModelPositionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.api.fa.model.positions.$post> },
      ) => parseResponse(client.v1.api.fa.model.positions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiFaModelRebalanceToExistingTargetsKey() {
  return ['v1', '/v1/api/fa/model/rebalance/to-existing-targets', 'POST'] as const
}

export function usePostV1ApiFaModelRebalanceToExistingTargets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.api.fa.model.rebalance)['to-existing-targets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiFaModelRebalanceToExistingTargetsKey()
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
            (typeof client.v1.api.fa.model.rebalance)['to-existing-targets']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.api.fa.model.rebalance['to-existing-targets'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiFaModelRebalanceToNewTargetsKey() {
  return ['v1', '/v1/api/fa/model/rebalance/to-new-targets', 'POST'] as const
}

export function usePostV1ApiFaModelRebalanceToNewTargets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fa.model.rebalance)['to-new-targets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.api.fa.model.rebalance)['to-new-targets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiFaModelRebalanceToNewTargetsKey()
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
            (typeof client.v1.api.fa.model.rebalance)['to-new-targets']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.api.fa.model.rebalance['to-new-targets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiFaModelRebalanceToSpecificTargetsKey() {
  return ['v1', '/v1/api/fa/model/rebalance/to-specific-targets', 'POST'] as const
}

export function usePostV1ApiFaModelRebalanceToSpecificTargets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.api.fa.model.rebalance)['to-specific-targets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiFaModelRebalanceToSpecificTargetsKey()
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
            (typeof client.v1.api.fa.model.rebalance)['to-specific-targets']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.api.fa.model.rebalance['to-specific-targets'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiFaModelSaveKey() {
  return ['v1', '/v1/api/fa/model/save', 'POST'] as const
}

export function usePostV1ApiFaModelSave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fa.model.save.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.fa.model.save.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiFaModelSaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.api.fa.model.save.$post> },
      ) => parseResponse(client.v1.api.fa.model.save.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiFaModelSubmitTransfersKey() {
  return ['v1', '/v1/api/fa/model/submit-transfers', 'POST'] as const
}

export function usePostV1ApiFaModelSubmitTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fa.model)['submit-transfers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.api.fa.model)['submit-transfers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiFaModelSubmitTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.api.fa.model)['submit-transfers']['$post']> },
      ) => parseResponse(client.v1.api.fa.model['submit-transfers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiFaModelSummaryKey() {
  return ['v1', '/v1/api/fa/model/summary', 'POST'] as const
}

export function usePostV1ApiFaModelSummary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fa.model.summary.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.fa.model.summary.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiFaModelSummaryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.api.fa.model.summary.$post> },
      ) => parseResponse(client.v1.api.fa.model.summary.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiFaModelTwsInvestDivestKey() {
  return ['v1', '/v1/api/fa/model/tws-invest-divest', 'POST'] as const
}

export function usePostV1ApiFaModelTwsInvestDivest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fa.model)['tws-invest-divest']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.api.fa.model)['tws-invest-divest']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiFaModelTwsInvestDivestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.api.fa.model)['tws-invest-divest']['$post']> },
      ) => parseResponse(client.v1.api.fa.model['tws-invest-divest'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiFyiDeliveryoptionsDeviceKey() {
  return ['v1', '/v1/api/fyi/deliveryoptions/device', 'POST'] as const
}

export function usePostV1ApiFyiDeliveryoptionsDevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.fyi.deliveryoptions.device.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.fyi.deliveryoptions.device.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiFyiDeliveryoptionsDeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.api.fyi.deliveryoptions.device.$post> },
      ) => parseResponse(client.v1.api.fyi.deliveryoptions.device.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiFyiSettingsTypecodeKey() {
  return ['v1', '/v1/api/fyi/settings/:typecode', 'POST'] as const
}

export function usePostV1ApiFyiSettingsTypecode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fyi.settings)[':typecode']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.api.fyi.settings)[':typecode']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiFyiSettingsTypecodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.api.fyi.settings)[':typecode']['$post']> },
      ) => parseResponse(client.v1.api.fyi.settings[':typecode'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiIserverAccountKey() {
  return ['v1', '/v1/api/iserver/account', 'POST'] as const
}

export function usePostV1ApiIserverAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.account.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.iserver.account.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiIserverAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.api.iserver.account.$post> },
      ) => parseResponse(client.v1.api.iserver.account.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ApiIserverAccountAllocationGroupKey() {
  return ['v1', '/v1/api/iserver/account/allocation/group'] as const
}

export function useGetV1ApiIserverAccountAllocationGroup<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.group.$get>>
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
        ? getGetV1ApiIserverAccountAllocationGroupKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.group.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.api.iserver.account.allocation.group.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverAccountAllocationGroup<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.group.$get>>
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
        ? getGetV1ApiIserverAccountAllocationGroupKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.group.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.api.iserver.account.allocation.group.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ApiIserverAccountAllocationGroupKey() {
  return ['v1', '/v1/api/iserver/account/allocation/group', 'PUT'] as const
}

export function usePutV1ApiIserverAccountAllocationGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.group.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.iserver.account.allocation.group.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ApiIserverAccountAllocationGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.api.iserver.account.allocation.group.$put> },
      ) => parseResponse(client.v1.api.iserver.account.allocation.group.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiIserverAccountAllocationGroupKey() {
  return ['v1', '/v1/api/iserver/account/allocation/group', 'POST'] as const
}

export function usePostV1ApiIserverAccountAllocationGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.group.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.iserver.account.allocation.group.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiIserverAccountAllocationGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.api.iserver.account.allocation.group.$post> },
      ) => parseResponse(client.v1.api.iserver.account.allocation.group.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiIserverAccountAllocationGroupDeleteKey() {
  return ['v1', '/v1/api/iserver/account/allocation/group/delete', 'POST'] as const
}

export function usePostV1ApiIserverAccountAllocationGroupDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.group.delete.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.iserver.account.allocation.group.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiIserverAccountAllocationGroupDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.api.iserver.account.allocation.group.delete.$post>
        },
      ) =>
        parseResponse(
          client.v1.api.iserver.account.allocation.group.delete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiIserverAccountAllocationGroupSingleKey() {
  return ['v1', '/v1/api/iserver/account/allocation/group/single', 'POST'] as const
}

export function usePostV1ApiIserverAccountAllocationGroupSingle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.group.single.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.iserver.account.allocation.group.single.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiIserverAccountAllocationGroupSingleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.api.iserver.account.allocation.group.single.$post>
        },
      ) =>
        parseResponse(
          client.v1.api.iserver.account.allocation.group.single.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ApiIserverAccountAllocationPresetsKey() {
  return ['v1', '/v1/api/iserver/account/allocation/presets'] as const
}

export function useGetV1ApiIserverAccountAllocationPresets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.presets.$get>>
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
        ? getGetV1ApiIserverAccountAllocationPresetsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.presets.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.api.iserver.account.allocation.presets.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverAccountAllocationPresets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.presets.$get>>
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
        ? getGetV1ApiIserverAccountAllocationPresetsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.presets.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.api.iserver.account.allocation.presets.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ApiIserverAccountAllocationPresetsKey() {
  return ['v1', '/v1/api/iserver/account/allocation/presets', 'POST'] as const
}

export function usePostV1ApiIserverAccountAllocationPresets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.presets.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.iserver.account.allocation.presets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiIserverAccountAllocationPresetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.api.iserver.account.allocation.presets.$post> },
      ) =>
        parseResponse(client.v1.api.iserver.account.allocation.presets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiIserverAccountAccountIdAlertKey() {
  return ['v1', '/v1/api/iserver/account/:accountId/alert', 'POST'] as const
}

export function usePostV1ApiIserverAccountAccountIdAlert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.api.iserver.account)[':accountId']['alert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiIserverAccountAccountIdAlertKey()
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
            (typeof client.v1.api.iserver.account)[':accountId']['alert']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.api.iserver.account[':accountId'].alert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiIserverAccountAccountIdAlertActivateKey() {
  return ['v1', '/v1/api/iserver/account/:accountId/alert/activate', 'POST'] as const
}

export function usePostV1ApiIserverAccountAccountIdAlertActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.api.iserver.account)[':accountId']['alert']['activate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiIserverAccountAccountIdAlertActivateKey()
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
            (typeof client.v1.api.iserver.account)[':accountId']['alert']['activate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.api.iserver.account[':accountId'].alert.activate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiIserverAccountAccountIdOrderOrderIdKey() {
  return ['v1', '/v1/api/iserver/account/:accountId/order/:orderId', 'POST'] as const
}

export function usePostV1ApiIserverAccountAccountIdOrderOrderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.api.iserver.account)[':accountId']['order'][':orderId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiIserverAccountAccountIdOrderOrderIdKey()
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
            (typeof client.v1.api.iserver.account)[':accountId']['order'][':orderId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.api.iserver.account[':accountId'].order[':orderId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ApiIserverAccountAccountIdOrderOrderIdKey() {
  return ['v1', '/v1/api/iserver/account/:accountId/order/:orderId', 'DELETE'] as const
}

export function useDeleteV1ApiIserverAccountAccountIdOrderOrderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.api.iserver.account)[':accountId']['order'][':orderId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ApiIserverAccountAccountIdOrderOrderIdKey()
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
            (typeof client.v1.api.iserver.account)[':accountId']['order'][':orderId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.api.iserver.account[':accountId'].order[':orderId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiIserverAccountAccountIdOrdersKey() {
  return ['v1', '/v1/api/iserver/account/:accountId/orders', 'POST'] as const
}

export function usePostV1ApiIserverAccountAccountIdOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.api.iserver.account)[':accountId']['orders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiIserverAccountAccountIdOrdersKey()
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
            (typeof client.v1.api.iserver.account)[':accountId']['orders']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.api.iserver.account[':accountId'].orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiIserverAccountAccountIdOrdersWhatifKey() {
  return ['v1', '/v1/api/iserver/account/:accountId/orders/whatif', 'POST'] as const
}

export function usePostV1ApiIserverAccountAccountIdOrdersWhatif<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.api.iserver.account)[':accountId']['orders']['whatif']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiIserverAccountAccountIdOrdersWhatifKey()
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
            (typeof client.v1.api.iserver.account)[':accountId']['orders']['whatif']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.api.iserver.account[':accountId'].orders.whatif.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiIserverAccountModelCodeOrdersKey() {
  return ['v1', '/v1/api/iserver/account/:modelCode/orders', 'POST'] as const
}

export function usePostV1ApiIserverAccountModelCodeOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.api.iserver.account)[':modelCode']['orders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiIserverAccountModelCodeOrdersKey()
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
            (typeof client.v1.api.iserver.account)[':modelCode']['orders']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.api.iserver.account[':modelCode'].orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiIserverAuthSsodhInitKey() {
  return ['v1', '/v1/api/iserver/auth/ssodh/init', 'POST'] as const
}

export function usePostV1ApiIserverAuthSsodhInit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.auth.ssodh.init.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.iserver.auth.ssodh.init.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiIserverAuthSsodhInitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.api.iserver.auth.ssodh.init.$post> },
      ) => parseResponse(client.v1.api.iserver.auth.ssodh.init.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiIserverAuthStatusKey() {
  return ['v1', '/v1/api/iserver/auth/status', 'POST'] as const
}

export function usePostV1ApiIserverAuthStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.auth.status.$post>>>
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
  const swrKey = customKey ?? getPostV1ApiIserverAuthStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.v1.api.iserver.auth.status.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiIserverContractRulesKey() {
  return ['v1', '/v1/api/iserver/contract/rules', 'POST'] as const
}

export function usePostV1ApiIserverContractRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.contract.rules.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.iserver.contract.rules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiIserverContractRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.api.iserver.contract.rules.$post> },
      ) => parseResponse(client.v1.api.iserver.contract.rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiIserverDynaccountKey() {
  return ['v1', '/v1/api/iserver/dynaccount', 'POST'] as const
}

export function usePostV1ApiIserverDynaccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.dynaccount.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.iserver.dynaccount.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiIserverDynaccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.api.iserver.dynaccount.$post> },
      ) => parseResponse(client.v1.api.iserver.dynaccount.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiIserverMarketdataUnsubscribeKey() {
  return ['v1', '/v1/api/iserver/marketdata/unsubscribe', 'POST'] as const
}

export function usePostV1ApiIserverMarketdataUnsubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.unsubscribe.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.iserver.marketdata.unsubscribe.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiIserverMarketdataUnsubscribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.api.iserver.marketdata.unsubscribe.$post> },
      ) => parseResponse(client.v1.api.iserver.marketdata.unsubscribe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiIserverNotificationKey() {
  return ['v1', '/v1/api/iserver/notification', 'POST'] as const
}

export function usePostV1ApiIserverNotification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.notification.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.iserver.notification.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiIserverNotificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.api.iserver.notification.$post> },
      ) => parseResponse(client.v1.api.iserver.notification.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiIserverQuestionsSuppressKey() {
  return ['v1', '/v1/api/iserver/questions/suppress', 'POST'] as const
}

export function usePostV1ApiIserverQuestionsSuppress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.questions.suppress.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.iserver.questions.suppress.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiIserverQuestionsSuppressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.api.iserver.questions.suppress.$post> },
      ) => parseResponse(client.v1.api.iserver.questions.suppress.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiIserverQuestionsSuppressResetKey() {
  return ['v1', '/v1/api/iserver/questions/suppress/reset', 'POST'] as const
}

export function usePostV1ApiIserverQuestionsSuppressReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.questions.suppress.reset.$post>>
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
  const swrKey = customKey ?? getPostV1ApiIserverQuestionsSuppressResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.v1.api.iserver.questions.suppress.reset.$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiIserverReplyReplyIdKey() {
  return ['v1', '/v1/api/iserver/reply/:replyId', 'POST'] as const
}

export function usePostV1ApiIserverReplyReplyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.iserver.reply)[':replyId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.api.iserver.reply)[':replyId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiIserverReplyReplyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.api.iserver.reply)[':replyId']['$post']> },
      ) => parseResponse(client.v1.api.iserver.reply[':replyId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiIserverScannerRunKey() {
  return ['v1', '/v1/api/iserver/scanner/run', 'POST'] as const
}

export function usePostV1ApiIserverScannerRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.scanner.run.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.iserver.scanner.run.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiIserverScannerRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.api.iserver.scanner.run.$post> },
      ) => parseResponse(client.v1.api.iserver.scanner.run.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ApiIserverSecdefSearchKey(
  args: InferRequestType<typeof client.v1.api.iserver.secdef.search.$get>,
) {
  return ['v1', '/v1/api/iserver/secdef/search', args] as const
}

export function useGetV1ApiIserverSecdefSearch<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.iserver.secdef.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.secdef.search.$get>>>
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
        ? getGetV1ApiIserverSecdefSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.secdef.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.iserver.secdef.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverSecdefSearch<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.iserver.secdef.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.secdef.search.$get>>>
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
        ? getGetV1ApiIserverSecdefSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.secdef.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.iserver.secdef.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ApiIserverSecdefSearchKey() {
  return ['v1', '/v1/api/iserver/secdef/search', 'POST'] as const
}

export function usePostV1ApiIserverSecdefSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.secdef.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.iserver.secdef.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiIserverSecdefSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.api.iserver.secdef.search.$post> },
      ) => parseResponse(client.v1.api.iserver.secdef.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ApiIserverWatchlistKey(
  args: InferRequestType<typeof client.v1.api.iserver.watchlist.$get>,
) {
  return ['v1', '/v1/api/iserver/watchlist', args] as const
}

export function useGetV1ApiIserverWatchlist<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.iserver.watchlist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.watchlist.$get>>>
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
        ? getGetV1ApiIserverWatchlistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.watchlist.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.iserver.watchlist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverWatchlist<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.iserver.watchlist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.watchlist.$get>>>
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
        ? getGetV1ApiIserverWatchlistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.watchlist.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.iserver.watchlist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ApiIserverWatchlistKey() {
  return ['v1', '/v1/api/iserver/watchlist', 'POST'] as const
}

export function usePostV1ApiIserverWatchlist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.watchlist.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.iserver.watchlist.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiIserverWatchlistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.api.iserver.watchlist.$post> },
      ) => parseResponse(client.v1.api.iserver.watchlist.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ApiIserverWatchlistKey() {
  return ['v1', '/v1/api/iserver/watchlist', 'DELETE'] as const
}

export function useDeleteV1ApiIserverWatchlist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.watchlist.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.iserver.watchlist.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ApiIserverWatchlistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.api.iserver.watchlist.$delete> },
      ) => parseResponse(client.v1.api.iserver.watchlist.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiLogoutKey() {
  return ['v1', '/v1/api/logout', 'POST'] as const
}

export function usePostV1ApiLogout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.logout.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiLogoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.v1.api.logout.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiOauthAccessTokenKey() {
  return ['v1', '/v1/api/oauth/access_token', 'POST'] as const
}

export function usePostV1ApiOauthAccessToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.oauth.access_token.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.oauth.access_token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiOauthAccessTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.api.oauth.access_token.$post> },
      ) => parseResponse(client.v1.api.oauth.access_token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiOauthLiveSessionTokenKey() {
  return ['v1', '/v1/api/oauth/live_session_token', 'POST'] as const
}

export function usePostV1ApiOauthLiveSessionToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.oauth.live_session_token.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.oauth.live_session_token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiOauthLiveSessionTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.api.oauth.live_session_token.$post> },
      ) => parseResponse(client.v1.api.oauth.live_session_token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiOauthRequestTokenKey() {
  return ['v1', '/v1/api/oauth/request_token', 'POST'] as const
}

export function usePostV1ApiOauthRequestToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.oauth.request_token.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.oauth.request_token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiOauthRequestTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.api.oauth.request_token.$post> },
      ) => parseResponse(client.v1.api.oauth.request_token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiPaAllocationKey() {
  return ['v1', '/v1/api/pa/allocation', 'POST'] as const
}

export function usePostV1ApiPaAllocation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.pa.allocation.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.pa.allocation.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiPaAllocationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.api.pa.allocation.$post> },
      ) => parseResponse(client.v1.api.pa.allocation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiPaAllperiodsKey() {
  return ['v1', '/v1/api/pa/allperiods', 'POST'] as const
}

export function usePostV1ApiPaAllperiods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.pa.allperiods.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.pa.allperiods.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiPaAllperiodsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.api.pa.allperiods.$post> },
      ) => parseResponse(client.v1.api.pa.allperiods.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiPaPerformanceKey() {
  return ['v1', '/v1/api/pa/performance', 'POST'] as const
}

export function usePostV1ApiPaPerformance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.pa.performance.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.pa.performance.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiPaPerformanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.api.pa.performance.$post> },
      ) => parseResponse(client.v1.api.pa.performance.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiPaTransactionsKey() {
  return ['v1', '/v1/api/pa/transactions', 'POST'] as const
}

export function usePostV1ApiPaTransactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.pa.transactions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.pa.transactions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiPaTransactionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.api.pa.transactions.$post> },
      ) => parseResponse(client.v1.api.pa.transactions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiPortfolioAccountIdPositionsInvalidateKey() {
  return ['v1', '/v1/api/portfolio/:accountId/positions/invalidate', 'POST'] as const
}

export function usePostV1ApiPortfolioAccountIdPositionsInvalidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.api.portfolio)[':accountId']['positions']['invalidate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiPortfolioAccountIdPositionsInvalidateKey()
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
            (typeof client.v1.api.portfolio)[':accountId']['positions']['invalidate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.api.portfolio[':accountId'].positions.invalidate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiTickleKey() {
  return ['v1', '/v1/api/tickle', 'POST'] as const
}

export function usePostV1ApiTickle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.tickle.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiTickleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.v1.api.tickle.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGwApiV1AccountsAccountIdStatusKey(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['status']['$get']>,
) {
  return ['gw', '/gw/api/v1/accounts/:accountId/status', args] as const
}

export function useGetGwApiV1AccountsAccountIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['status']['$get']>>
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
        ? getGetGwApiV1AccountsAccountIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gw.api.v1.accounts[':accountId'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1AccountsAccountIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['status']['$get']>>
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
        ? getGetGwApiV1AccountsAccountIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gw.api.v1.accounts[':accountId'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchGwApiV1AccountsAccountIdStatusKey() {
  return ['gw', '/gw/api/v1/accounts/:accountId/status', 'PATCH'] as const
}

export function usePatchGwApiV1AccountsAccountIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['status']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['status']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGwApiV1AccountsAccountIdStatusKey()
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
            (typeof client.gw.api.v1.accounts)[':accountId']['status']['$patch']
          >
        },
      ) => parseResponse(client.gw.api.v1.accounts[':accountId'].status.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGwApiV1RequestsRequestIdStatusKey(
  args: InferRequestType<(typeof client.gw.api.v1.requests)[':requestId']['status']['$get']>,
) {
  return ['gw', '/gw/api/v1/requests/:requestId/status', args] as const
}

export function useGetGwApiV1RequestsRequestIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1.requests)[':requestId']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.requests)[':requestId']['status']['$get']>>
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
        ? getGetGwApiV1RequestsRequestIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.requests)[':requestId']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gw.api.v1.requests[':requestId'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1RequestsRequestIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1.requests)[':requestId']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.requests)[':requestId']['status']['$get']>>
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
        ? getGetGwApiV1RequestsRequestIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.requests)[':requestId']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gw.api.v1.requests[':requestId'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchGwApiV1RequestsRequestIdStatusKey() {
  return ['gw', '/gw/api/v1/requests/:requestId/status', 'PATCH'] as const
}

export function usePatchGwApiV1RequestsRequestIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gw.api.v1.requests)[':requestId']['status']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gw.api.v1.requests)[':requestId']['status']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGwApiV1RequestsRequestIdStatusKey()
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
            (typeof client.gw.api.v1.requests)[':requestId']['status']['$patch']
          >
        },
      ) => parseResponse(client.gw.api.v1.requests[':requestId'].status.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGwApiV1AccountsLoginMessagesKey(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)['login-messages']['$get']>,
) {
  return ['gw', '/gw/api/v1/accounts/login-messages', args] as const
}

export function useGetGwApiV1AccountsLoginMessages<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)['login-messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.accounts)['login-messages']['$get']>>
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
        ? getGetGwApiV1AccountsLoginMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.accounts)['login-messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gw.api.v1.accounts['login-messages'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1AccountsLoginMessages<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)['login-messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.accounts)['login-messages']['$get']>>
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
        ? getGetGwApiV1AccountsLoginMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.accounts)['login-messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gw.api.v1.accounts['login-messages'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1AccountsStatusKey(
  args: InferRequestType<typeof client.gw.api.v1.accounts.status.$get>,
) {
  return ['gw', '/gw/api/v1/accounts/status', args] as const
}

export function useGetGwApiV1AccountsStatus<TError = unknown>(
  args: InferRequestType<typeof client.gw.api.v1.accounts.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.status.$get>>>
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
        ? getGetGwApiV1AccountsStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1.accounts.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1AccountsStatus<TError = unknown>(
  args: InferRequestType<typeof client.gw.api.v1.accounts.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.status.$get>>>
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
        ? getGetGwApiV1AccountsStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.accounts.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1.accounts.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1AccountsAccountIdDetailsKey(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['details']['$get']>,
) {
  return ['gw', '/gw/api/v1/accounts/:accountId/details', args] as const
}

export function useGetGwApiV1AccountsAccountIdDetails<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['details']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['details']['$get']>>
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
        ? getGetGwApiV1AccountsAccountIdDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['details']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gw.api.v1.accounts[':accountId'].details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1AccountsAccountIdDetails<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['details']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['details']['$get']>>
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
        ? getGetGwApiV1AccountsAccountIdDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['details']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gw.api.v1.accounts[':accountId'].details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1AccountsAccountIdKycKey(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['kyc']['$get']>,
) {
  return ['gw', '/gw/api/v1/accounts/:accountId/kyc', args] as const
}

export function useGetGwApiV1AccountsAccountIdKyc<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['kyc']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['kyc']['$get']>>
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
        ? getGetGwApiV1AccountsAccountIdKycKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['kyc']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gw.api.v1.accounts[':accountId'].kyc.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1AccountsAccountIdKyc<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1.accounts)[':accountId']['kyc']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['kyc']['$get']>>
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
        ? getGetGwApiV1AccountsAccountIdKycKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['kyc']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gw.api.v1.accounts[':accountId'].kyc.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1AccountsAccountIdLoginMessagesKey(
  args: InferRequestType<
    (typeof client.gw.api.v1.accounts)[':accountId']['login-messages']['$get']
  >,
) {
  return ['gw', '/gw/api/v1/accounts/:accountId/login-messages', args] as const
}

export function useGetGwApiV1AccountsAccountIdLoginMessages<TError = unknown>(
  args: InferRequestType<
    (typeof client.gw.api.v1.accounts)[':accountId']['login-messages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['login-messages']['$get']>
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
        ? getGetGwApiV1AccountsAccountIdLoginMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['login-messages']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.gw.api.v1.accounts[':accountId']['login-messages'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1AccountsAccountIdLoginMessages<TError = unknown>(
  args: InferRequestType<
    (typeof client.gw.api.v1.accounts)[':accountId']['login-messages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['login-messages']['$get']>
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
        ? getGetGwApiV1AccountsAccountIdLoginMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1.accounts)[':accountId']['login-messages']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.gw.api.v1.accounts[':accountId']['login-messages'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1ClientInstructionsClientInstructionIdKey(
  args: InferRequestType<
    (typeof client.gw.api.v1)['client-instructions'][':clientInstructionId']['$get']
  >,
) {
  return ['gw', '/gw/api/v1/client-instructions/:clientInstructionId', args] as const
}

export function useGetGwApiV1ClientInstructionsClientInstructionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.gw.api.v1)['client-instructions'][':clientInstructionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGwApiV1ClientInstructionsClientInstructionIdKey(args)
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
                (typeof client.gw.api.v1)['client-instructions'][':clientInstructionId']['$get']
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
          client.gw.api.v1['client-instructions'][':clientInstructionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1ClientInstructionsClientInstructionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.gw.api.v1)['client-instructions'][':clientInstructionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGwApiV1ClientInstructionsClientInstructionIdKey(args)
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
                (typeof client.gw.api.v1)['client-instructions'][':clientInstructionId']['$get']
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
          client.gw.api.v1['client-instructions'][':clientInstructionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1EchoHttpsKey() {
  return ['gw', '/gw/api/v1/echo/https'] as const
}

export function useGetGwApiV1EchoHttps<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.echo.https.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGwApiV1EchoHttpsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.echo.https.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1.echo.https.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1EchoHttps<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.echo.https.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGwApiV1EchoHttpsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.echo.https.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1.echo.https.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1EnumerationsComplexAssetTransferKey(
  args: InferRequestType<(typeof client.gw.api.v1.enumerations)['complex-asset-transfer']['$get']>,
) {
  return ['gw', '/gw/api/v1/enumerations/complex-asset-transfer', args] as const
}

export function useGetGwApiV1EnumerationsComplexAssetTransfer<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1.enumerations)['complex-asset-transfer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1.enumerations)['complex-asset-transfer']['$get']>
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
        ? getGetGwApiV1EnumerationsComplexAssetTransferKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1.enumerations)['complex-asset-transfer']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.gw.api.v1.enumerations['complex-asset-transfer'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1EnumerationsComplexAssetTransfer<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1.enumerations)['complex-asset-transfer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1.enumerations)['complex-asset-transfer']['$get']>
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
        ? getGetGwApiV1EnumerationsComplexAssetTransferKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1.enumerations)['complex-asset-transfer']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.gw.api.v1.enumerations['complex-asset-transfer'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1EnumerationsEnumerationTypeKey(
  args: InferRequestType<(typeof client.gw.api.v1.enumerations)[':enumerationType']['$get']>,
) {
  return ['gw', '/gw/api/v1/enumerations/:enumerationType', args] as const
}

export function useGetGwApiV1EnumerationsEnumerationType<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1.enumerations)[':enumerationType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.enumerations)[':enumerationType']['$get']>>
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
        ? getGetGwApiV1EnumerationsEnumerationTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.enumerations)[':enumerationType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gw.api.v1.enumerations[':enumerationType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1EnumerationsEnumerationType<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1.enumerations)[':enumerationType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.enumerations)[':enumerationType']['$get']>>
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
        ? getGetGwApiV1EnumerationsEnumerationTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.enumerations)[':enumerationType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gw.api.v1.enumerations[':enumerationType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1FormsKey(args: InferRequestType<typeof client.gw.api.v1.forms.$get>) {
  return ['gw', '/gw/api/v1/forms', args] as const
}

export function useGetGwApiV1Forms<TError = unknown>(
  args: InferRequestType<typeof client.gw.api.v1.forms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.forms.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGwApiV1FormsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.forms.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1.forms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1Forms<TError = unknown>(
  args: InferRequestType<typeof client.gw.api.v1.forms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.forms.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGwApiV1FormsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.forms.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1.forms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1FormsRequiredFormsKey(
  args: InferRequestType<(typeof client.gw.api.v1.forms)['required-forms']['$get']>,
) {
  return ['gw', '/gw/api/v1/forms/required-forms', args] as const
}

export function useGetGwApiV1FormsRequiredForms<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1.forms)['required-forms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.forms)['required-forms']['$get']>>
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
        ? getGetGwApiV1FormsRequiredFormsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.forms)['required-forms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1.forms['required-forms'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1FormsRequiredForms<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1.forms)['required-forms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.forms)['required-forms']['$get']>>
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
        ? getGetGwApiV1FormsRequiredFormsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.forms)['required-forms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1.forms['required-forms'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1InstructionSetsInstructionSetIdKey(
  args: InferRequestType<
    (typeof client.gw.api.v1)['instruction-sets'][':instructionSetId']['$get']
  >,
) {
  return ['gw', '/gw/api/v1/instruction-sets/:instructionSetId', args] as const
}

export function useGetGwApiV1InstructionSetsInstructionSetId<TError = unknown>(
  args: InferRequestType<
    (typeof client.gw.api.v1)['instruction-sets'][':instructionSetId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1)['instruction-sets'][':instructionSetId']['$get']>
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
        ? getGetGwApiV1InstructionSetsInstructionSetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1)['instruction-sets'][':instructionSetId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.gw.api.v1['instruction-sets'][':instructionSetId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1InstructionSetsInstructionSetId<TError = unknown>(
  args: InferRequestType<
    (typeof client.gw.api.v1)['instruction-sets'][':instructionSetId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1)['instruction-sets'][':instructionSetId']['$get']>
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
        ? getGetGwApiV1InstructionSetsInstructionSetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1)['instruction-sets'][':instructionSetId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.gw.api.v1['instruction-sets'][':instructionSetId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1InstructionsInstructionIdKey(
  args: InferRequestType<(typeof client.gw.api.v1.instructions)[':instructionId']['$get']>,
) {
  return ['gw', '/gw/api/v1/instructions/:instructionId', args] as const
}

export function useGetGwApiV1InstructionsInstructionId<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1.instructions)[':instructionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.instructions)[':instructionId']['$get']>>
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
        ? getGetGwApiV1InstructionsInstructionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.instructions)[':instructionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gw.api.v1.instructions[':instructionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1InstructionsInstructionId<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1.instructions)[':instructionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.instructions)[':instructionId']['$get']>>
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
        ? getGetGwApiV1InstructionsInstructionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.instructions)[':instructionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gw.api.v1.instructions[':instructionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1ParticipatingBanksKey(
  args: InferRequestType<(typeof client.gw.api.v1)['participating-banks']['$get']>,
) {
  return ['gw', '/gw/api/v1/participating-banks', args] as const
}

export function useGetGwApiV1ParticipatingBanks<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1)['participating-banks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1)['participating-banks']['$get']>>
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
        ? getGetGwApiV1ParticipatingBanksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1)['participating-banks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1['participating-banks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1ParticipatingBanks<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1)['participating-banks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1)['participating-banks']['$get']>>
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
        ? getGetGwApiV1ParticipatingBanksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1)['participating-banks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1['participating-banks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1RequestsKey(
  args: InferRequestType<typeof client.gw.api.v1.requests.$get>,
) {
  return ['gw', '/gw/api/v1/requests', args] as const
}

export function useGetGwApiV1Requests<TError = unknown>(
  args: InferRequestType<typeof client.gw.api.v1.requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.requests.$get>>>>
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
        ? getGetGwApiV1RequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.requests.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1.requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1Requests<TError = unknown>(
  args: InferRequestType<typeof client.gw.api.v1.requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.requests.$get>>>>
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
        ? getGetGwApiV1RequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.requests.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1.requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1RestrictionsAccountKey(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.account.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/restrictions/account', keyArgs] as const
}

export function useGetGwApiV1RestrictionsAccount<TError = unknown>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.gw.api.v1.restrictions.account.$get>>
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
        ? getGetGwApiV1RestrictionsAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.gw.api.v1.restrictions.account.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1.restrictions.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1RestrictionsAccount<TError = unknown>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.gw.api.v1.restrictions.account.$get>>
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
        ? getGetGwApiV1RestrictionsAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.gw.api.v1.restrictions.account.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1.restrictions.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1RestrictionsIdsKey(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.ids.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/restrictions/ids', keyArgs] as const
}

export function useGetGwApiV1RestrictionsIds<TError = unknown>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.ids.$get>>>
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
        ? getGetGwApiV1RestrictionsIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.ids.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1.restrictions.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1RestrictionsIds<TError = unknown>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.ids.$get>>>
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
        ? getGetGwApiV1RestrictionsIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.ids.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1.restrictions.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1RestrictionsListKey(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.list.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/restrictions/list', keyArgs] as const
}

export function useGetGwApiV1RestrictionsList<TError = unknown>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.list.$get>>>
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
        ? getGetGwApiV1RestrictionsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1.restrictions.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1RestrictionsList<TError = unknown>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.list.$get>>>
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
        ? getGetGwApiV1RestrictionsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1.restrictions.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1RestrictionsListsIdsKey(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.lists.ids.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/restrictions/lists/ids', keyArgs] as const
}

export function useGetGwApiV1RestrictionsListsIds<TError = unknown>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.lists.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.gw.api.v1.restrictions.lists.ids.$get>>
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
        ? getGetGwApiV1RestrictionsListsIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.gw.api.v1.restrictions.lists.ids.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1.restrictions.lists.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1RestrictionsListsIds<TError = unknown>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.lists.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.gw.api.v1.restrictions.lists.ids.$get>>
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
        ? getGetGwApiV1RestrictionsListsIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.gw.api.v1.restrictions.lists.ids.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1.restrictions.lists.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1RestrictionsRestrictionKey(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.restriction.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/restrictions/restriction', keyArgs] as const
}

export function useGetGwApiV1RestrictionsRestriction<TError = unknown>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.restriction.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.gw.api.v1.restrictions.restriction.$get>>
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
        ? getGetGwApiV1RestrictionsRestrictionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.gw.api.v1.restrictions.restriction.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gw.api.v1.restrictions.restriction.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1RestrictionsRestriction<TError = unknown>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.restriction.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.gw.api.v1.restrictions.restriction.$get>>
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
        ? getGetGwApiV1RestrictionsRestrictionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.gw.api.v1.restrictions.restriction.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gw.api.v1.restrictions.restriction.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1RestrictionsRestrictionScopeKey(
  args: InferRequestType<(typeof client.gw.api.v1.restrictions)['restriction-scope']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/restrictions/restriction-scope', keyArgs] as const
}

export function useGetGwApiV1RestrictionsRestrictionScope<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1.restrictions)['restriction-scope']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.restrictions)['restriction-scope']['$get']>>
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
        ? getGetGwApiV1RestrictionsRestrictionScopeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.restrictions)['restriction-scope']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gw.api.v1.restrictions['restriction-scope'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1RestrictionsRestrictionScope<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1.restrictions)['restriction-scope']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.restrictions)['restriction-scope']['$get']>>
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
        ? getGetGwApiV1RestrictionsRestrictionScopeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1.restrictions)['restriction-scope']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gw.api.v1.restrictions['restriction-scope'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1RestrictionsUserKey(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.user.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/restrictions/user', keyArgs] as const
}

export function useGetGwApiV1RestrictionsUser<TError = unknown>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.user.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.user.$get>>>
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
        ? getGetGwApiV1RestrictionsUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.user.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1.restrictions.user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1RestrictionsUser<TError = unknown>(
  args: InferRequestType<typeof client.gw.api.v1.restrictions.user.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.user.$get>>>
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
        ? getGetGwApiV1RestrictionsUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gw.api.v1.restrictions.user.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1.restrictions.user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1StatementsAvailableKey(
  args: InferRequestType<typeof client.gw.api.v1.statements.available.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/statements/available', keyArgs] as const
}

export function useGetGwApiV1StatementsAvailable<TError = unknown>(
  args: InferRequestType<typeof client.gw.api.v1.statements.available.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.gw.api.v1.statements.available.$get>>
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
        ? getGetGwApiV1StatementsAvailableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.gw.api.v1.statements.available.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1.statements.available.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1StatementsAvailable<TError = unknown>(
  args: InferRequestType<typeof client.gw.api.v1.statements.available.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.gw.api.v1.statements.available.$get>>
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
        ? getGetGwApiV1StatementsAvailableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.gw.api.v1.statements.available.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1.statements.available.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1TaxDocumentsAvailableKey(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-documents']['available']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/tax-documents/available', keyArgs] as const
}

export function useGetGwApiV1TaxDocumentsAvailable<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-documents']['available']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1)['tax-documents']['available']['$get']>>
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
        ? getGetGwApiV1TaxDocumentsAvailableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1)['tax-documents']['available']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gw.api.v1['tax-documents'].available.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1TaxDocumentsAvailable<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-documents']['available']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1)['tax-documents']['available']['$get']>>
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
        ? getGetGwApiV1TaxDocumentsAvailableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1)['tax-documents']['available']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gw.api.v1['tax-documents'].available.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1TaxVouchersActiveCountriesKey(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['active-countries']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/tax-vouchers/active-countries', keyArgs] as const
}

export function useGetGwApiV1TaxVouchersActiveCountries<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['active-countries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['active-countries']['$get']>
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
        ? getGetGwApiV1TaxVouchersActiveCountriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['active-countries']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.gw.api.v1['tax-vouchers']['active-countries'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1TaxVouchersActiveCountries<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['active-countries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['active-countries']['$get']>
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
        ? getGetGwApiV1TaxVouchersActiveCountriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['active-countries']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.gw.api.v1['tax-vouchers']['active-countries'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1TaxVouchersDividendsKey(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['dividends']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/tax-vouchers/dividends', keyArgs] as const
}

export function useGetGwApiV1TaxVouchersDividends<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['dividends']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['dividends']['$get']>>
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
        ? getGetGwApiV1TaxVouchersDividendsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['dividends']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gw.api.v1['tax-vouchers'].dividends.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1TaxVouchersDividends<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['dividends']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['dividends']['$get']>>
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
        ? getGetGwApiV1TaxVouchersDividendsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['dividends']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gw.api.v1['tax-vouchers'].dividends.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1TaxVouchersYearsKey(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['years']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/tax-vouchers/years', keyArgs] as const
}

export function useGetGwApiV1TaxVouchersYears<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['years']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['years']['$get']>>
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
        ? getGetGwApiV1TaxVouchersYearsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['years']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1['tax-vouchers'].years.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1TaxVouchersYears<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers']['years']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['years']['$get']>>
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
        ? getGetGwApiV1TaxVouchersYearsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gw.api.v1)['tax-vouchers']['years']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gw.api.v1['tax-vouchers'].years.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1TaxVouchersRequestIdDownloadKey(
  args: InferRequestType<
    (typeof client.gw.api.v1)['tax-vouchers'][':requestId']['download']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/tax-vouchers/:requestId/download', keyArgs] as const
}

export function useGetGwApiV1TaxVouchersRequestIdDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.gw.api.v1)['tax-vouchers'][':requestId']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGwApiV1TaxVouchersRequestIdDownloadKey(args)
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
                (typeof client.gw.api.v1)['tax-vouchers'][':requestId']['download']['$get']
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
          client.gw.api.v1['tax-vouchers'][':requestId'].download.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1TaxVouchersRequestIdDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.gw.api.v1)['tax-vouchers'][':requestId']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGwApiV1TaxVouchersRequestIdDownloadKey(args)
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
                (typeof client.gw.api.v1)['tax-vouchers'][':requestId']['download']['$get']
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
          client.gw.api.v1['tax-vouchers'][':requestId'].download.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1TaxVouchersRequestIdStateKey(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers'][':requestId']['state']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/tax-vouchers/:requestId/state', keyArgs] as const
}

export function useGetGwApiV1TaxVouchersRequestIdState<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers'][':requestId']['state']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1)['tax-vouchers'][':requestId']['state']['$get']>
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
        ? getGetGwApiV1TaxVouchersRequestIdStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1)['tax-vouchers'][':requestId']['state']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.gw.api.v1['tax-vouchers'][':requestId'].state.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1TaxVouchersRequestIdState<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1)['tax-vouchers'][':requestId']['state']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1)['tax-vouchers'][':requestId']['state']['$get']>
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
        ? getGetGwApiV1TaxVouchersRequestIdStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1)['tax-vouchers'][':requestId']['state']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.gw.api.v1['tax-vouchers'][':requestId'].state.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1TradeConfirmationsAvailableKey(
  args: InferRequestType<(typeof client.gw.api.v1)['trade-confirmations']['available']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['gw', '/gw/api/v1/trade-confirmations/available', keyArgs] as const
}

export function useGetGwApiV1TradeConfirmationsAvailable<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1)['trade-confirmations']['available']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1)['trade-confirmations']['available']['$get']>
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
        ? getGetGwApiV1TradeConfirmationsAvailableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1)['trade-confirmations']['available']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gw.api.v1['trade-confirmations'].available.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1TradeConfirmationsAvailable<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1)['trade-confirmations']['available']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1)['trade-confirmations']['available']['$get']>
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
        ? getGetGwApiV1TradeConfirmationsAvailableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1)['trade-confirmations']['available']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gw.api.v1['trade-confirmations'].available.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGwApiV1ValidationsUsernamesUsernameKey(
  args: InferRequestType<(typeof client.gw.api.v1.validations.usernames)[':username']['$get']>,
) {
  return ['gw', '/gw/api/v1/validations/usernames/:username', args] as const
}

export function useGetGwApiV1ValidationsUsernamesUsername<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1.validations.usernames)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1.validations.usernames)[':username']['$get']>
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
        ? getGetGwApiV1ValidationsUsernamesUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1.validations.usernames)[':username']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.gw.api.v1.validations.usernames[':username'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGwApiV1ValidationsUsernamesUsername<TError = unknown>(
  args: InferRequestType<(typeof client.gw.api.v1.validations.usernames)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1.validations.usernames)[':username']['$get']>
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
        ? getGetGwApiV1ValidationsUsernamesUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gw.api.v1.validations.usernames)[':username']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.gw.api.v1.validations.usernames[':username'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiAceswsAccountIdSignaturesAndOwnersKey(
  args: InferRequestType<
    (typeof client.v1.api.acesws)[':accountId']['signatures-and-owners']['$get']
  >,
) {
  return ['v1', '/v1/api/acesws/:accountId/signatures-and-owners', args] as const
}

export function useGetV1ApiAceswsAccountIdSignaturesAndOwners<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.api.acesws)[':accountId']['signatures-and-owners']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ApiAceswsAccountIdSignaturesAndOwnersKey(args)
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
                (typeof client.v1.api.acesws)[':accountId']['signatures-and-owners']['$get']
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
          client.v1.api.acesws[':accountId']['signatures-and-owners'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiAceswsAccountIdSignaturesAndOwners<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.api.acesws)[':accountId']['signatures-and-owners']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ApiAceswsAccountIdSignaturesAndOwnersKey(args)
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
                (typeof client.v1.api.acesws)[':accountId']['signatures-and-owners']['$get']
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
          client.v1.api.acesws[':accountId']['signatures-and-owners'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiContractTradingScheduleKey(
  args: InferRequestType<(typeof client.v1.api.contract)['trading-schedule']['$get']>,
) {
  return ['v1', '/v1/api/contract/trading-schedule', args] as const
}

export function useGetV1ApiContractTradingSchedule<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.contract)['trading-schedule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.contract)['trading-schedule']['$get']>>
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
        ? getGetV1ApiContractTradingScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.contract)['trading-schedule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.contract['trading-schedule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiContractTradingSchedule<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.contract)['trading-schedule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.contract)['trading-schedule']['$get']>>
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
        ? getGetV1ApiContractTradingScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.contract)['trading-schedule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.contract['trading-schedule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiForecastCategoryTreeKey() {
  return ['v1', '/v1/api/forecast/category/tree'] as const
}

export function useGetV1ApiForecastCategoryTree<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.forecast.category.tree.$get>>>
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
        ? getGetV1ApiForecastCategoryTreeKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.forecast.category.tree.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.forecast.category.tree.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiForecastCategoryTree<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.forecast.category.tree.$get>>>
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
        ? getGetV1ApiForecastCategoryTreeKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.forecast.category.tree.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.forecast.category.tree.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiForecastContractDetailsKey(
  args: InferRequestType<typeof client.v1.api.forecast.contract.details.$get>,
) {
  return ['v1', '/v1/api/forecast/contract/details', args] as const
}

export function useGetV1ApiForecastContractDetails<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.forecast.contract.details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.forecast.contract.details.$get>>
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
        ? getGetV1ApiForecastContractDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.forecast.contract.details.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.forecast.contract.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiForecastContractDetails<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.forecast.contract.details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.forecast.contract.details.$get>>
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
        ? getGetV1ApiForecastContractDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.forecast.contract.details.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.forecast.contract.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiForecastContractMarketKey(
  args: InferRequestType<typeof client.v1.api.forecast.contract.market.$get>,
) {
  return ['v1', '/v1/api/forecast/contract/market', args] as const
}

export function useGetV1ApiForecastContractMarket<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.forecast.contract.market.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.forecast.contract.market.$get>>
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
        ? getGetV1ApiForecastContractMarketKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.forecast.contract.market.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.forecast.contract.market.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiForecastContractMarket<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.forecast.contract.market.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.forecast.contract.market.$get>>
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
        ? getGetV1ApiForecastContractMarketKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.forecast.contract.market.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.forecast.contract.market.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiForecastContractRulesKey(
  args: InferRequestType<typeof client.v1.api.forecast.contract.rules.$get>,
) {
  return ['v1', '/v1/api/forecast/contract/rules', args] as const
}

export function useGetV1ApiForecastContractRules<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.forecast.contract.rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.forecast.contract.rules.$get>>
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
        ? getGetV1ApiForecastContractRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.forecast.contract.rules.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.forecast.contract.rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiForecastContractRules<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.forecast.contract.rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.forecast.contract.rules.$get>>
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
        ? getGetV1ApiForecastContractRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.forecast.contract.rules.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.forecast.contract.rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiForecastContractSchedulesKey(
  args: InferRequestType<typeof client.v1.api.forecast.contract.schedules.$get>,
) {
  return ['v1', '/v1/api/forecast/contract/schedules', args] as const
}

export function useGetV1ApiForecastContractSchedules<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.forecast.contract.schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.forecast.contract.schedules.$get>>
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
        ? getGetV1ApiForecastContractSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.forecast.contract.schedules.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.forecast.contract.schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiForecastContractSchedules<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.forecast.contract.schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.forecast.contract.schedules.$get>>
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
        ? getGetV1ApiForecastContractSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.forecast.contract.schedules.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.forecast.contract.schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiFyiDeliveryoptionsKey() {
  return ['v1', '/v1/api/fyi/deliveryoptions'] as const
}

export function useGetV1ApiFyiDeliveryoptions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.deliveryoptions.$get>>>
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
        ? getGetV1ApiFyiDeliveryoptionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.deliveryoptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.fyi.deliveryoptions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiFyiDeliveryoptions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.deliveryoptions.$get>>>
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
        ? getGetV1ApiFyiDeliveryoptionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.deliveryoptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.fyi.deliveryoptions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiFyiDisclaimerTypecodeKey(
  args: InferRequestType<(typeof client.v1.api.fyi.disclaimer)[':typecode']['$get']>,
) {
  return ['v1', '/v1/api/fyi/disclaimer/:typecode', args] as const
}

export function useGetV1ApiFyiDisclaimerTypecode<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.fyi.disclaimer)[':typecode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.fyi.disclaimer)[':typecode']['$get']>>
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
        ? getGetV1ApiFyiDisclaimerTypecodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.fyi.disclaimer)[':typecode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.fyi.disclaimer[':typecode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiFyiDisclaimerTypecode<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.fyi.disclaimer)[':typecode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.fyi.disclaimer)[':typecode']['$get']>>
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
        ? getGetV1ApiFyiDisclaimerTypecodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.fyi.disclaimer)[':typecode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.fyi.disclaimer[':typecode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ApiFyiDisclaimerTypecodeKey() {
  return ['v1', '/v1/api/fyi/disclaimer/:typecode', 'PUT'] as const
}

export function usePutV1ApiFyiDisclaimerTypecode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fyi.disclaimer)[':typecode']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.api.fyi.disclaimer)[':typecode']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ApiFyiDisclaimerTypecodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.api.fyi.disclaimer)[':typecode']['$put']> },
      ) => parseResponse(client.v1.api.fyi.disclaimer[':typecode'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ApiFyiNotificationsKey(
  args: InferRequestType<typeof client.v1.api.fyi.notifications.$get>,
) {
  return ['v1', '/v1/api/fyi/notifications', args] as const
}

export function useGetV1ApiFyiNotifications<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.fyi.notifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.notifications.$get>>>
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
        ? getGetV1ApiFyiNotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.notifications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.fyi.notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiFyiNotifications<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.fyi.notifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.notifications.$get>>>
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
        ? getGetV1ApiFyiNotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.notifications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.fyi.notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiFyiSettingsKey() {
  return ['v1', '/v1/api/fyi/settings'] as const
}

export function useGetV1ApiFyiSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.settings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ApiFyiSettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.fyi.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiFyiSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.settings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ApiFyiSettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.fyi.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiFyiUnreadnumberKey() {
  return ['v1', '/v1/api/fyi/unreadnumber'] as const
}

export function useGetV1ApiFyiUnreadnumber<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.unreadnumber.$get>>>
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
        ? getGetV1ApiFyiUnreadnumberKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.unreadnumber.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.fyi.unreadnumber.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiFyiUnreadnumber<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.unreadnumber.$get>>>
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
        ? getGetV1ApiFyiUnreadnumberKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.fyi.unreadnumber.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.fyi.unreadnumber.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverAccountAlertAlertIdKey(
  args: InferRequestType<(typeof client.v1.api.iserver.account.alert)[':alertId']['$get']>,
) {
  return ['v1', '/v1/api/iserver/account/alert/:alertId', args] as const
}

export function useGetV1ApiIserverAccountAlertAlertId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.iserver.account.alert)[':alertId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.iserver.account.alert)[':alertId']['$get']>>
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
        ? getGetV1ApiIserverAccountAlertAlertIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.iserver.account.alert)[':alertId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.iserver.account.alert[':alertId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverAccountAlertAlertId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.iserver.account.alert)[':alertId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.iserver.account.alert)[':alertId']['$get']>>
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
        ? getGetV1ApiIserverAccountAlertAlertIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.iserver.account.alert)[':alertId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.iserver.account.alert[':alertId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverAccountAllocationAccountsKey() {
  return ['v1', '/v1/api/iserver/account/allocation/accounts'] as const
}

export function useGetV1ApiIserverAccountAllocationAccounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.accounts.$get>>
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
        ? getGetV1ApiIserverAccountAllocationAccountsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.accounts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.api.iserver.account.allocation.accounts.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverAccountAllocationAccounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.accounts.$get>>
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
        ? getGetV1ApiIserverAccountAllocationAccountsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.accounts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.api.iserver.account.allocation.accounts.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverAccountAllocationModelsKey() {
  return ['v1', '/v1/api/iserver/account/allocation/models'] as const
}

export function useGetV1ApiIserverAccountAllocationModels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.models.$get>>
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
        ? getGetV1ApiIserverAccountAllocationModelsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.models.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.api.iserver.account.allocation.models.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverAccountAllocationModels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.models.$get>>
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
        ? getGetV1ApiIserverAccountAllocationModelsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.account.allocation.models.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.api.iserver.account.allocation.models.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverAccountMtaKey() {
  return ['v1', '/v1/api/iserver/account/mta'] as const
}

export function useGetV1ApiIserverAccountMta<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.account.mta.$get>>>
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
        ? getGetV1ApiIserverAccountMtaKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.account.mta.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.iserver.account.mta.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverAccountMta<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.account.mta.$get>>>
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
        ? getGetV1ApiIserverAccountMtaKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.account.mta.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.iserver.account.mta.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverAccountOrderStatusOrderIdKey(
  args: InferRequestType<(typeof client.v1.api.iserver.account.order.status)[':orderId']['$get']>,
) {
  return ['v1', '/v1/api/iserver/account/order/status/:orderId', args] as const
}

export function useGetV1ApiIserverAccountOrderStatusOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.iserver.account.order.status)[':orderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.api.iserver.account.order.status)[':orderId']['$get']>
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
        ? getGetV1ApiIserverAccountOrderStatusOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.api.iserver.account.order.status)[':orderId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.api.iserver.account.order.status[':orderId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverAccountOrderStatusOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.iserver.account.order.status)[':orderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.api.iserver.account.order.status)[':orderId']['$get']>
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
        ? getGetV1ApiIserverAccountOrderStatusOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.api.iserver.account.order.status)[':orderId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.api.iserver.account.order.status[':orderId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverAccountOrdersKey(
  args: InferRequestType<typeof client.v1.api.iserver.account.orders.$get>,
) {
  return ['v1', '/v1/api/iserver/account/orders', args] as const
}

export function useGetV1ApiIserverAccountOrders<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.iserver.account.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.account.orders.$get>>
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
        ? getGetV1ApiIserverAccountOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.account.orders.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.iserver.account.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverAccountOrders<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.iserver.account.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.account.orders.$get>>
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
        ? getGetV1ApiIserverAccountOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.account.orders.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.iserver.account.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverAccountPnlPartitionedKey() {
  return ['v1', '/v1/api/iserver/account/pnl/partitioned'] as const
}

export function useGetV1ApiIserverAccountPnlPartitioned<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.account.pnl.partitioned.$get>>
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
        ? getGetV1ApiIserverAccountPnlPartitionedKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.account.pnl.partitioned.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.iserver.account.pnl.partitioned.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverAccountPnlPartitioned<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.account.pnl.partitioned.$get>>
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
        ? getGetV1ApiIserverAccountPnlPartitionedKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.account.pnl.partitioned.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.iserver.account.pnl.partitioned.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverAccountSearchSearchPatternKey(
  args: InferRequestType<(typeof client.v1.api.iserver.account.search)[':searchPattern']['$get']>,
) {
  return ['v1', '/v1/api/iserver/account/search/:searchPattern', args] as const
}

export function useGetV1ApiIserverAccountSearchSearchPattern<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.iserver.account.search)[':searchPattern']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.api.iserver.account.search)[':searchPattern']['$get']>
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
        ? getGetV1ApiIserverAccountSearchSearchPatternKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.api.iserver.account.search)[':searchPattern']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.api.iserver.account.search[':searchPattern'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverAccountSearchSearchPattern<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.iserver.account.search)[':searchPattern']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.api.iserver.account.search)[':searchPattern']['$get']>
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
        ? getGetV1ApiIserverAccountSearchSearchPatternKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.api.iserver.account.search)[':searchPattern']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.api.iserver.account.search[':searchPattern'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverAccountTradesKey(
  args: InferRequestType<typeof client.v1.api.iserver.account.trades.$get>,
) {
  return ['v1', '/v1/api/iserver/account/trades', args] as const
}

export function useGetV1ApiIserverAccountTrades<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.iserver.account.trades.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.account.trades.$get>>
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
        ? getGetV1ApiIserverAccountTradesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.account.trades.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.iserver.account.trades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverAccountTrades<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.iserver.account.trades.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.account.trades.$get>>
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
        ? getGetV1ApiIserverAccountTradesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.account.trades.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.iserver.account.trades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverAccountAccountIdAlertsKey(
  args: InferRequestType<(typeof client.v1.api.iserver.account)[':accountId']['alerts']['$get']>,
) {
  return ['v1', '/v1/api/iserver/account/:accountId/alerts', args] as const
}

export function useGetV1ApiIserverAccountAccountIdAlerts<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.iserver.account)[':accountId']['alerts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.api.iserver.account)[':accountId']['alerts']['$get']>
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
        ? getGetV1ApiIserverAccountAccountIdAlertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.api.iserver.account)[':accountId']['alerts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.iserver.account[':accountId'].alerts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverAccountAccountIdAlerts<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.iserver.account)[':accountId']['alerts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.api.iserver.account)[':accountId']['alerts']['$get']>
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
        ? getGetV1ApiIserverAccountAccountIdAlertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.api.iserver.account)[':accountId']['alerts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.iserver.account[':accountId'].alerts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverAccountAccountIdSummaryKey(
  args: InferRequestType<(typeof client.v1.api.iserver.account)[':accountId']['summary']['$get']>,
) {
  return ['v1', '/v1/api/iserver/account/:accountId/summary', args] as const
}

export function useGetV1ApiIserverAccountAccountIdSummary<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.iserver.account)[':accountId']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.api.iserver.account)[':accountId']['summary']['$get']>
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
        ? getGetV1ApiIserverAccountAccountIdSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.api.iserver.account)[':accountId']['summary']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.api.iserver.account[':accountId'].summary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverAccountAccountIdSummary<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.iserver.account)[':accountId']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.api.iserver.account)[':accountId']['summary']['$get']>
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
        ? getGetV1ApiIserverAccountAccountIdSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.api.iserver.account)[':accountId']['summary']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.api.iserver.account[':accountId'].summary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverAccountAccountIdSummaryAvailableFundsKey(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['available_funds']['$get']
  >,
) {
  return ['v1', '/v1/api/iserver/account/:accountId/summary/available_funds', args] as const
}

export function useGetV1ApiIserverAccountAccountIdSummaryAvailableFunds<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['available_funds']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ApiIserverAccountAccountIdSummaryAvailableFundsKey(args)
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
                (typeof client.v1.api.iserver.account)[':accountId']['summary']['available_funds']['$get']
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
          client.v1.api.iserver.account[':accountId'].summary.available_funds.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverAccountAccountIdSummaryAvailableFunds<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['available_funds']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ApiIserverAccountAccountIdSummaryAvailableFundsKey(args)
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
                (typeof client.v1.api.iserver.account)[':accountId']['summary']['available_funds']['$get']
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
          client.v1.api.iserver.account[':accountId'].summary.available_funds.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverAccountAccountIdSummaryBalancesKey(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['balances']['$get']
  >,
) {
  return ['v1', '/v1/api/iserver/account/:accountId/summary/balances', args] as const
}

export function useGetV1ApiIserverAccountAccountIdSummaryBalances<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['balances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ApiIserverAccountAccountIdSummaryBalancesKey(args)
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
                (typeof client.v1.api.iserver.account)[':accountId']['summary']['balances']['$get']
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
          client.v1.api.iserver.account[':accountId'].summary.balances.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverAccountAccountIdSummaryBalances<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['balances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ApiIserverAccountAccountIdSummaryBalancesKey(args)
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
                (typeof client.v1.api.iserver.account)[':accountId']['summary']['balances']['$get']
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
          client.v1.api.iserver.account[':accountId'].summary.balances.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverAccountAccountIdSummaryMarginsKey(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['margins']['$get']
  >,
) {
  return ['v1', '/v1/api/iserver/account/:accountId/summary/margins', args] as const
}

export function useGetV1ApiIserverAccountAccountIdSummaryMargins<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['margins']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ApiIserverAccountAccountIdSummaryMarginsKey(args)
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
                (typeof client.v1.api.iserver.account)[':accountId']['summary']['margins']['$get']
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
          client.v1.api.iserver.account[':accountId'].summary.margins.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverAccountAccountIdSummaryMargins<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['margins']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ApiIserverAccountAccountIdSummaryMarginsKey(args)
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
                (typeof client.v1.api.iserver.account)[':accountId']['summary']['margins']['$get']
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
          client.v1.api.iserver.account[':accountId'].summary.margins.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverAccountAccountIdSummaryMarketValueKey(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['market_value']['$get']
  >,
) {
  return ['v1', '/v1/api/iserver/account/:accountId/summary/market_value', args] as const
}

export function useGetV1ApiIserverAccountAccountIdSummaryMarketValue<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['market_value']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ApiIserverAccountAccountIdSummaryMarketValueKey(args)
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
                (typeof client.v1.api.iserver.account)[':accountId']['summary']['market_value']['$get']
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
          client.v1.api.iserver.account[':accountId'].summary.market_value.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverAccountAccountIdSummaryMarketValue<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.api.iserver.account)[':accountId']['summary']['market_value']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ApiIserverAccountAccountIdSummaryMarketValueKey(args)
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
                (typeof client.v1.api.iserver.account)[':accountId']['summary']['market_value']['$get']
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
          client.v1.api.iserver.account[':accountId'].summary.market_value.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverAccountsKey() {
  return ['v1', '/v1/api/iserver/accounts'] as const
}

export function useGetV1ApiIserverAccounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.accounts.$get>>>
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
        ? getGetV1ApiIserverAccountsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.iserver.accounts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverAccounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.accounts.$get>>>
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
        ? getGetV1ApiIserverAccountsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.iserver.accounts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverContractConidAlgosKey(
  args: InferRequestType<(typeof client.v1.api.iserver.contract)[':conid']['algos']['$get']>,
) {
  return ['v1', '/v1/api/iserver/contract/:conid/algos', args] as const
}

export function useGetV1ApiIserverContractConidAlgos<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.iserver.contract)[':conid']['algos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.iserver.contract)[':conid']['algos']['$get']>>
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
        ? getGetV1ApiIserverContractConidAlgosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.iserver.contract)[':conid']['algos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.iserver.contract[':conid'].algos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverContractConidAlgos<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.iserver.contract)[':conid']['algos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.iserver.contract)[':conid']['algos']['$get']>>
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
        ? getGetV1ApiIserverContractConidAlgosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.iserver.contract)[':conid']['algos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.iserver.contract[':conid'].algos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverContractConidInfoKey(
  args: InferRequestType<(typeof client.v1.api.iserver.contract)[':conid']['info']['$get']>,
) {
  return ['v1', '/v1/api/iserver/contract/:conid/info', args] as const
}

export function useGetV1ApiIserverContractConidInfo<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.iserver.contract)[':conid']['info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.iserver.contract)[':conid']['info']['$get']>>
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
        ? getGetV1ApiIserverContractConidInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.iserver.contract)[':conid']['info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.iserver.contract[':conid'].info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverContractConidInfo<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.iserver.contract)[':conid']['info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.iserver.contract)[':conid']['info']['$get']>>
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
        ? getGetV1ApiIserverContractConidInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.iserver.contract)[':conid']['info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.iserver.contract[':conid'].info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverContractConidInfoAndRulesKey(
  args: InferRequestType<
    (typeof client.v1.api.iserver.contract)[':conid']['info-and-rules']['$get']
  >,
) {
  return ['v1', '/v1/api/iserver/contract/:conid/info-and-rules', args] as const
}

export function useGetV1ApiIserverContractConidInfoAndRules<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.api.iserver.contract)[':conid']['info-and-rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ApiIserverContractConidInfoAndRulesKey(args)
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
                (typeof client.v1.api.iserver.contract)[':conid']['info-and-rules']['$get']
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
          client.v1.api.iserver.contract[':conid']['info-and-rules'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverContractConidInfoAndRules<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.api.iserver.contract)[':conid']['info-and-rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ApiIserverContractConidInfoAndRulesKey(args)
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
                (typeof client.v1.api.iserver.contract)[':conid']['info-and-rules']['$get']
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
          client.v1.api.iserver.contract[':conid']['info-and-rules'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverCurrencyPairsKey(
  args: InferRequestType<typeof client.v1.api.iserver.currency.pairs.$get>,
) {
  return ['v1', '/v1/api/iserver/currency/pairs', args] as const
}

export function useGetV1ApiIserverCurrencyPairs<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.iserver.currency.pairs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.currency.pairs.$get>>
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
        ? getGetV1ApiIserverCurrencyPairsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.currency.pairs.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.iserver.currency.pairs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverCurrencyPairs<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.iserver.currency.pairs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.currency.pairs.$get>>
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
        ? getGetV1ApiIserverCurrencyPairsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.currency.pairs.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.iserver.currency.pairs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverExchangerateKey(
  args: InferRequestType<typeof client.v1.api.iserver.exchangerate.$get>,
) {
  return ['v1', '/v1/api/iserver/exchangerate', args] as const
}

export function useGetV1ApiIserverExchangerate<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.iserver.exchangerate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.exchangerate.$get>>>
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
        ? getGetV1ApiIserverExchangerateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.exchangerate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.iserver.exchangerate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverExchangerate<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.iserver.exchangerate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.exchangerate.$get>>>
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
        ? getGetV1ApiIserverExchangerateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.exchangerate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.iserver.exchangerate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverMarketdataHistoryKey(
  args: InferRequestType<typeof client.v1.api.iserver.marketdata.history.$get>,
) {
  return ['v1', '/v1/api/iserver/marketdata/history', args] as const
}

export function useGetV1ApiIserverMarketdataHistory<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.iserver.marketdata.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.history.$get>>
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
        ? getGetV1ApiIserverMarketdataHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.history.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.iserver.marketdata.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverMarketdataHistory<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.iserver.marketdata.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.history.$get>>
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
        ? getGetV1ApiIserverMarketdataHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.history.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.iserver.marketdata.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverMarketdataSnapshotKey(
  args: InferRequestType<typeof client.v1.api.iserver.marketdata.snapshot.$get>,
) {
  return ['v1', '/v1/api/iserver/marketdata/snapshot', args] as const
}

export function useGetV1ApiIserverMarketdataSnapshot<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.iserver.marketdata.snapshot.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.snapshot.$get>>
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
        ? getGetV1ApiIserverMarketdataSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.snapshot.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.iserver.marketdata.snapshot.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverMarketdataSnapshot<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.iserver.marketdata.snapshot.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.snapshot.$get>>
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
        ? getGetV1ApiIserverMarketdataSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.snapshot.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.iserver.marketdata.snapshot.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverMarketdataUnsubscribeallKey() {
  return ['v1', '/v1/api/iserver/marketdata/unsubscribeall'] as const
}

export function useGetV1ApiIserverMarketdataUnsubscribeall<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.unsubscribeall.$get>>
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
        ? getGetV1ApiIserverMarketdataUnsubscribeallKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.unsubscribeall.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.api.iserver.marketdata.unsubscribeall.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverMarketdataUnsubscribeall<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.unsubscribeall.$get>>
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
        ? getGetV1ApiIserverMarketdataUnsubscribeallKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.marketdata.unsubscribeall.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.api.iserver.marketdata.unsubscribeall.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverScannerParamsKey() {
  return ['v1', '/v1/api/iserver/scanner/params'] as const
}

export function useGetV1ApiIserverScannerParams<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.scanner.params.$get>>>
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
        ? getGetV1ApiIserverScannerParamsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.scanner.params.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.iserver.scanner.params.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverScannerParams<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.scanner.params.$get>>>
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
        ? getGetV1ApiIserverScannerParamsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.scanner.params.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.iserver.scanner.params.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverSecdefBondFiltersKey(
  args: InferRequestType<(typeof client.v1.api.iserver.secdef)['bond-filters']['$get']>,
) {
  return ['v1', '/v1/api/iserver/secdef/bond-filters', args] as const
}

export function useGetV1ApiIserverSecdefBondFilters<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.iserver.secdef)['bond-filters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.iserver.secdef)['bond-filters']['$get']>>
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
        ? getGetV1ApiIserverSecdefBondFiltersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.iserver.secdef)['bond-filters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.iserver.secdef['bond-filters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverSecdefBondFilters<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.iserver.secdef)['bond-filters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.iserver.secdef)['bond-filters']['$get']>>
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
        ? getGetV1ApiIserverSecdefBondFiltersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.iserver.secdef)['bond-filters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.iserver.secdef['bond-filters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverSecdefInfoKey(
  args: InferRequestType<typeof client.v1.api.iserver.secdef.info.$get>,
) {
  return ['v1', '/v1/api/iserver/secdef/info', args] as const
}

export function useGetV1ApiIserverSecdefInfo<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.iserver.secdef.info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.secdef.info.$get>>>
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
        ? getGetV1ApiIserverSecdefInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.secdef.info.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.iserver.secdef.info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverSecdefInfo<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.iserver.secdef.info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.secdef.info.$get>>>
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
        ? getGetV1ApiIserverSecdefInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.secdef.info.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.iserver.secdef.info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverSecdefStrikesKey(
  args: InferRequestType<typeof client.v1.api.iserver.secdef.strikes.$get>,
) {
  return ['v1', '/v1/api/iserver/secdef/strikes', args] as const
}

export function useGetV1ApiIserverSecdefStrikes<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.iserver.secdef.strikes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.secdef.strikes.$get>>
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
        ? getGetV1ApiIserverSecdefStrikesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.secdef.strikes.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.iserver.secdef.strikes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverSecdefStrikes<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.iserver.secdef.strikes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.secdef.strikes.$get>>
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
        ? getGetV1ApiIserverSecdefStrikesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.iserver.secdef.strikes.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.iserver.secdef.strikes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiIserverWatchlistsKey(
  args: InferRequestType<typeof client.v1.api.iserver.watchlists.$get>,
) {
  return ['v1', '/v1/api/iserver/watchlists', args] as const
}

export function useGetV1ApiIserverWatchlists<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.iserver.watchlists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.watchlists.$get>>>
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
        ? getGetV1ApiIserverWatchlistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.watchlists.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.iserver.watchlists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiIserverWatchlists<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.iserver.watchlists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.watchlists.$get>>>
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
        ? getGetV1ApiIserverWatchlistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.iserver.watchlists.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.iserver.watchlists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiPortfolioAccountsKey() {
  return ['v1', '/v1/api/portfolio/accounts'] as const
}

export function useGetV1ApiPortfolioAccounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.portfolio.accounts.$get>>>
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
        ? getGetV1ApiPortfolioAccountsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.portfolio.accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.portfolio.accounts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiPortfolioAccounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.portfolio.accounts.$get>>>
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
        ? getGetV1ApiPortfolioAccountsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.portfolio.accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.portfolio.accounts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiPortfolioPositionsConidKey(
  args: InferRequestType<(typeof client.v1.api.portfolio.positions)[':conid']['$get']>,
) {
  return ['v1', '/v1/api/portfolio/positions/:conid', args] as const
}

export function useGetV1ApiPortfolioPositionsConid<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.portfolio.positions)[':conid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.portfolio.positions)[':conid']['$get']>>
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
        ? getGetV1ApiPortfolioPositionsConidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.portfolio.positions)[':conid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.portfolio.positions[':conid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiPortfolioPositionsConid<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.portfolio.positions)[':conid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.portfolio.positions)[':conid']['$get']>>
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
        ? getGetV1ApiPortfolioPositionsConidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.portfolio.positions)[':conid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.portfolio.positions[':conid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiPortfolioSubaccountsKey() {
  return ['v1', '/v1/api/portfolio/subaccounts'] as const
}

export function useGetV1ApiPortfolioSubaccounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.portfolio.subaccounts.$get>>>
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
        ? getGetV1ApiPortfolioSubaccountsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.portfolio.subaccounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.portfolio.subaccounts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiPortfolioSubaccounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.portfolio.subaccounts.$get>>>
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
        ? getGetV1ApiPortfolioSubaccountsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.portfolio.subaccounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.portfolio.subaccounts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiPortfolioSubaccounts2Key(
  args: InferRequestType<typeof client.v1.api.portfolio.subaccounts2.$get>,
) {
  return ['v1', '/v1/api/portfolio/subaccounts2', args] as const
}

export function useGetV1ApiPortfolioSubaccounts2<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.portfolio.subaccounts2.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.portfolio.subaccounts2.$get>>
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
        ? getGetV1ApiPortfolioSubaccounts2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.portfolio.subaccounts2.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.portfolio.subaccounts2.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiPortfolioSubaccounts2<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.portfolio.subaccounts2.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.portfolio.subaccounts2.$get>>
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
        ? getGetV1ApiPortfolioSubaccounts2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.api.portfolio.subaccounts2.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.portfolio.subaccounts2.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiPortfolioAccountIdAllocationKey(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['allocation']['$get']>,
) {
  return ['v1', '/v1/api/portfolio/:accountId/allocation', args] as const
}

export function useGetV1ApiPortfolioAccountIdAllocation<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['allocation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.api.portfolio)[':accountId']['allocation']['$get']>
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
        ? getGetV1ApiPortfolioAccountIdAllocationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.api.portfolio)[':accountId']['allocation']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.portfolio[':accountId'].allocation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiPortfolioAccountIdAllocation<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['allocation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.api.portfolio)[':accountId']['allocation']['$get']>
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
        ? getGetV1ApiPortfolioAccountIdAllocationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.api.portfolio)[':accountId']['allocation']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.portfolio[':accountId'].allocation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiPortfolioAccountIdComboPositionsKey(
  args: InferRequestType<
    (typeof client.v1.api.portfolio)[':accountId']['combo']['positions']['$get']
  >,
) {
  return ['v1', '/v1/api/portfolio/:accountId/combo/positions', args] as const
}

export function useGetV1ApiPortfolioAccountIdComboPositions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.api.portfolio)[':accountId']['combo']['positions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ApiPortfolioAccountIdComboPositionsKey(args)
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
                (typeof client.v1.api.portfolio)[':accountId']['combo']['positions']['$get']
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
          client.v1.api.portfolio[':accountId'].combo.positions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiPortfolioAccountIdComboPositions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.api.portfolio)[':accountId']['combo']['positions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ApiPortfolioAccountIdComboPositionsKey(args)
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
                (typeof client.v1.api.portfolio)[':accountId']['combo']['positions']['$get']
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
          client.v1.api.portfolio[':accountId'].combo.positions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiPortfolioAccountIdLedgerKey(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['ledger']['$get']>,
) {
  return ['v1', '/v1/api/portfolio/:accountId/ledger', args] as const
}

export function useGetV1ApiPortfolioAccountIdLedger<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['ledger']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['ledger']['$get']>>
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
        ? getGetV1ApiPortfolioAccountIdLedgerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['ledger']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.portfolio[':accountId'].ledger.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiPortfolioAccountIdLedger<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['ledger']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['ledger']['$get']>>
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
        ? getGetV1ApiPortfolioAccountIdLedgerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['ledger']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.portfolio[':accountId'].ledger.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiPortfolioAccountIdMetaKey(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['meta']['$get']>,
) {
  return ['v1', '/v1/api/portfolio/:accountId/meta', args] as const
}

export function useGetV1ApiPortfolioAccountIdMeta<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['meta']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['meta']['$get']>>
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
        ? getGetV1ApiPortfolioAccountIdMetaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['meta']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.portfolio[':accountId'].meta.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiPortfolioAccountIdMeta<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['meta']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['meta']['$get']>>
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
        ? getGetV1ApiPortfolioAccountIdMetaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['meta']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.portfolio[':accountId'].meta.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiPortfolioAccountIdPositionConidKey(
  args: InferRequestType<
    (typeof client.v1.api.portfolio)[':accountId']['position'][':conid']['$get']
  >,
) {
  return ['v1', '/v1/api/portfolio/:accountId/position/:conid', args] as const
}

export function useGetV1ApiPortfolioAccountIdPositionConid<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.api.portfolio)[':accountId']['position'][':conid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ApiPortfolioAccountIdPositionConidKey(args)
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
                (typeof client.v1.api.portfolio)[':accountId']['position'][':conid']['$get']
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
          client.v1.api.portfolio[':accountId'].position[':conid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiPortfolioAccountIdPositionConid<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.api.portfolio)[':accountId']['position'][':conid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ApiPortfolioAccountIdPositionConidKey(args)
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
                (typeof client.v1.api.portfolio)[':accountId']['position'][':conid']['$get']
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
          client.v1.api.portfolio[':accountId'].position[':conid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiPortfolioAccountIdPositionsPageIdKey(
  args: InferRequestType<
    (typeof client.v1.api.portfolio)[':accountId']['positions'][':pageId']['$get']
  >,
) {
  return ['v1', '/v1/api/portfolio/:accountId/positions/:pageId', args] as const
}

export function useGetV1ApiPortfolioAccountIdPositionsPageId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.api.portfolio)[':accountId']['positions'][':pageId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ApiPortfolioAccountIdPositionsPageIdKey(args)
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
                (typeof client.v1.api.portfolio)[':accountId']['positions'][':pageId']['$get']
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
          client.v1.api.portfolio[':accountId'].positions[':pageId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiPortfolioAccountIdPositionsPageId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.api.portfolio)[':accountId']['positions'][':pageId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ApiPortfolioAccountIdPositionsPageIdKey(args)
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
                (typeof client.v1.api.portfolio)[':accountId']['positions'][':pageId']['$get']
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
          client.v1.api.portfolio[':accountId'].positions[':pageId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiPortfolioAccountIdSummaryKey(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['summary']['$get']>,
) {
  return ['v1', '/v1/api/portfolio/:accountId/summary', args] as const
}

export function useGetV1ApiPortfolioAccountIdSummary<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['summary']['$get']>>
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
        ? getGetV1ApiPortfolioAccountIdSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['summary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.portfolio[':accountId'].summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiPortfolioAccountIdSummary<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.portfolio)[':accountId']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['summary']['$get']>>
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
        ? getGetV1ApiPortfolioAccountIdSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.portfolio)[':accountId']['summary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.portfolio[':accountId'].summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiPortfolio2AccountIdPositionsKey(
  args: InferRequestType<(typeof client.v1.api.portfolio2)[':accountId']['positions']['$get']>,
) {
  return ['v1', '/v1/api/portfolio2/:accountId/positions', args] as const
}

export function useGetV1ApiPortfolio2AccountIdPositions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.portfolio2)[':accountId']['positions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.api.portfolio2)[':accountId']['positions']['$get']>
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
        ? getGetV1ApiPortfolio2AccountIdPositionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.api.portfolio2)[':accountId']['positions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.portfolio2[':accountId'].positions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiPortfolio2AccountIdPositions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.portfolio2)[':accountId']['positions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.api.portfolio2)[':accountId']['positions']['$get']>
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
        ? getGetV1ApiPortfolio2AccountIdPositionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.api.portfolio2)[':accountId']['positions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.api.portfolio2[':accountId'].positions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiSsoValidateKey() {
  return ['v1', '/v1/api/sso/validate'] as const
}

export function useGetV1ApiSsoValidate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.sso.validate.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ApiSsoValidateKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.sso.validate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.sso.validate.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiSsoValidate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.sso.validate.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ApiSsoValidateKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.sso.validate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.sso.validate.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiTrsrvAllConidsKey(
  args: InferRequestType<(typeof client.v1.api.trsrv)['all-conids']['$get']>,
) {
  return ['v1', '/v1/api/trsrv/all-conids', args] as const
}

export function useGetV1ApiTrsrvAllConids<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.trsrv)['all-conids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.trsrv)['all-conids']['$get']>>
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
        ? getGetV1ApiTrsrvAllConidsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.trsrv)['all-conids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.trsrv['all-conids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiTrsrvAllConids<TError = unknown>(
  args: InferRequestType<(typeof client.v1.api.trsrv)['all-conids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.trsrv)['all-conids']['$get']>>
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
        ? getGetV1ApiTrsrvAllConidsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.api.trsrv)['all-conids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.trsrv['all-conids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiTrsrvFuturesKey(
  args: InferRequestType<typeof client.v1.api.trsrv.futures.$get>,
) {
  return ['v1', '/v1/api/trsrv/futures', args] as const
}

export function useGetV1ApiTrsrvFutures<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.trsrv.futures.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.futures.$get>>>
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
        ? getGetV1ApiTrsrvFuturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.futures.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.trsrv.futures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiTrsrvFutures<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.trsrv.futures.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.futures.$get>>>
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
        ? getGetV1ApiTrsrvFuturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.futures.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.trsrv.futures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiTrsrvSecdefKey(
  args: InferRequestType<typeof client.v1.api.trsrv.secdef.$get>,
) {
  return ['v1', '/v1/api/trsrv/secdef', args] as const
}

export function useGetV1ApiTrsrvSecdef<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.trsrv.secdef.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.secdef.$get>>>
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
        ? getGetV1ApiTrsrvSecdefKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.secdef.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.trsrv.secdef.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiTrsrvSecdef<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.trsrv.secdef.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.secdef.$get>>>
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
        ? getGetV1ApiTrsrvSecdefKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.secdef.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.trsrv.secdef.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiTrsrvSecdefScheduleKey(
  args: InferRequestType<typeof client.v1.api.trsrv.secdef.schedule.$get>,
) {
  return ['v1', '/v1/api/trsrv/secdef/schedule', args] as const
}

export function useGetV1ApiTrsrvSecdefSchedule<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.trsrv.secdef.schedule.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.secdef.schedule.$get>>>
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
        ? getGetV1ApiTrsrvSecdefScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.secdef.schedule.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.trsrv.secdef.schedule.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiTrsrvSecdefSchedule<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.trsrv.secdef.schedule.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.secdef.schedule.$get>>>
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
        ? getGetV1ApiTrsrvSecdefScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.secdef.schedule.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.trsrv.secdef.schedule.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiTrsrvStocksKey(
  args: InferRequestType<typeof client.v1.api.trsrv.stocks.$get>,
) {
  return ['v1', '/v1/api/trsrv/stocks', args] as const
}

export function useGetV1ApiTrsrvStocks<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.trsrv.stocks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.stocks.$get>>>
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
        ? getGetV1ApiTrsrvStocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.stocks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.trsrv.stocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiTrsrvStocks<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.trsrv.stocks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.stocks.$get>>>
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
        ? getGetV1ApiTrsrvStocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.trsrv.stocks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.trsrv.stocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApiWsKey(args: InferRequestType<typeof client.v1.api.ws.$get>) {
  const { header: _, cookie: __, ...keyArgs } = args
  return ['v1', '/v1/api/ws', keyArgs] as const
}

export function useGetV1ApiWs<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.ws.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.ws.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ApiWsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.ws.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.ws.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApiWs<TError = unknown>(
  args: InferRequestType<typeof client.v1.api.ws.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.ws.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ApiWsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.api.ws.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.api.ws.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ApiFyiDeliveryoptionsEmailKey() {
  return ['v1', '/v1/api/fyi/deliveryoptions/email', 'PUT'] as const
}

export function usePutV1ApiFyiDeliveryoptionsEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.api.fyi.deliveryoptions.email.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api.fyi.deliveryoptions.email.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ApiFyiDeliveryoptionsEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.api.fyi.deliveryoptions.email.$put> },
      ) => parseResponse(client.v1.api.fyi.deliveryoptions.email.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1ApiFyiNotificationsNotificationIdKey() {
  return ['v1', '/v1/api/fyi/notifications/:notificationId', 'PUT'] as const
}

export function usePutV1ApiFyiNotificationsNotificationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fyi.notifications)[':notificationId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.api.fyi.notifications)[':notificationId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ApiFyiNotificationsNotificationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.api.fyi.notifications)[':notificationId']['$put']>
        },
      ) =>
        parseResponse(client.v1.api.fyi.notifications[':notificationId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ApiFyiDeliveryoptionsDeviceIdKey() {
  return ['v1', '/v1/api/fyi/deliveryoptions/:deviceId', 'DELETE'] as const
}

export function useDeleteV1ApiFyiDeliveryoptionsDeviceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.api.fyi.deliveryoptions)[':deviceId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.api.fyi.deliveryoptions)[':deviceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ApiFyiDeliveryoptionsDeviceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.api.fyi.deliveryoptions)[':deviceId']['$delete']>
        },
      ) =>
        parseResponse(client.v1.api.fyi.deliveryoptions[':deviceId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ApiIserverAccountAccountIdAlertAlertIdKey() {
  return ['v1', '/v1/api/iserver/account/:accountId/alert/:alertId', 'DELETE'] as const
}

export function useDeleteV1ApiIserverAccountAccountIdAlertAlertId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.api.iserver.account)[':accountId']['alert'][':alertId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ApiIserverAccountAccountIdAlertAlertIdKey()
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
            (typeof client.v1.api.iserver.account)[':accountId']['alert'][':alertId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.api.iserver.account[':accountId'].alert[':alertId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
