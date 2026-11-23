import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAccountsKey(args: InferRequestType<typeof client.accounts.$get>) {
  return ['accounts', '/accounts', args] as const
}

export function useGetAccounts<TError = unknown>(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.accounts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAccounts<TError = unknown>(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.accounts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAccountsAccountIdKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
) {
  return ['accounts', '/accounts/:accountId', args] as const
}

export function useGetAccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAccountIdAdclientsKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['adclients']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/adclients', args] as const
}

export function useGetAccountsAccountIdAdclients<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['adclients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['adclients']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdAdclientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['adclients']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].adclients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdAdclients<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['adclients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['adclients']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdAdclientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['adclients']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].adclients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAccountIdAdclientsAdClientIdKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['$get']
  >,
) {
  return ['accounts', '/accounts/:accountId/adclients/:adClientId', args] as const
}

export function useGetAccountsAccountIdAdclientsAdClientId<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':accountId']['adclients'][':adClientId']['$get']>
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
        ? getGetAccountsAccountIdAdclientsAdClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':accountId']['adclients'][':adClientId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.accounts[':accountId'].adclients[':adClientId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdAdclientsAdClientId<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':accountId']['adclients'][':adClientId']['$get']>
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
        ? getGetAccountsAccountIdAdclientsAdClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':accountId']['adclients'][':adClientId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.accounts[':accountId'].adclients[':adClientId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAccountIdAdclientsAdClientIdAdunitsKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
  >,
) {
  return ['accounts', '/accounts/:accountId/adclients/:adClientId/adunits', args] as const
}

export function useGetAccountsAccountIdAdclientsAdClientIdAdunits<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdAdclientsAdClientIdAdunitsKey(args)
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
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
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
          client.accounts[':accountId'].adclients[':adClientId'].adunits.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdAdclientsAdClientIdAdunits<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdAdclientsAdClientIdAdunitsKey(args)
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
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
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
          client.accounts[':accountId'].adclients[':adClientId'].adunits.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAccountIdAdclientsAdClientIdAdunitsKey() {
  return ['accounts', '/accounts/:accountId/adclients/:adClientId/adunits', 'PUT'] as const
}

export function usePutAccountsAccountIdAdclientsAdClientIdAdunits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAccountIdAdclientsAdClientIdAdunitsKey()
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
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].adclients[':adClientId'].adunits.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAccountIdAdclientsAdClientIdAdunitsKey() {
  return ['accounts', '/accounts/:accountId/adclients/:adClientId/adunits', 'POST'] as const
}

export function usePostAccountsAccountIdAdclientsAdClientIdAdunits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdAdclientsAdClientIdAdunitsKey()
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
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].adclients[':adClientId'].adunits.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountsAccountIdAdclientsAdClientIdAdunitsKey() {
  return ['accounts', '/accounts/:accountId/adclients/:adClientId/adunits', 'PATCH'] as const
}

export function usePatchAccountsAccountIdAdclientsAdClientIdAdunits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountsAccountIdAdclientsAdClientIdAdunitsKey()
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
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].adclients[':adClientId'].adunits.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
  >,
) {
  return ['accounts', '/accounts/:accountId/adclients/:adClientId/adunits/:adUnitId', args] as const
}

export function useGetAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitId<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdKey(args)
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
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
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
          client.accounts[':accountId'].adclients[':adClientId'].adunits[':adUnitId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdKey(args)
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
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
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
          client.accounts[':accountId'].adclients[':adClientId'].adunits[':adUnitId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdKey() {
  return [
    'accounts',
    '/accounts/:accountId/adclients/:adClientId/adunits/:adUnitId',
    'DELETE',
  ] as const
}

export function useDeleteAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdKey()
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
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].adclients[':adClientId'].adunits[':adUnitId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeKey(
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

export function useGetAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcode<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeKey(args)
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
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
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
          client.accounts[':accountId'].adclients[':adClientId'].adunits[':adUnitId'].adcode.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcode<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeKey(args)
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
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
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
          client.accounts[':accountId'].adclients[':adClientId'].adunits[':adUnitId'].adcode.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAccountIdReportsKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['reports']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/reports', args] as const
}

export function useGetAccountsAccountIdReports<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['reports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['reports']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['reports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdReports<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['reports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['reports']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['reports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdclientsKey(args: InferRequestType<typeof client.adclients.$get>) {
  return ['adclients', '/adclients', args] as const
}

export function useGetAdclients<TError = unknown>(
  args: InferRequestType<typeof client.adclients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adclients.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdclientsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adclients.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.adclients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdclients<TError = unknown>(
  args: InferRequestType<typeof client.adclients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adclients.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdclientsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adclients.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.adclients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdclientsAdClientIdKey(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['$get']>,
) {
  return ['adclients', '/adclients/:adClientId', args] as const
}

export function useGetAdclientsAdClientId<TError = unknown>(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.adclients)[':adClientId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdclientsAdClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.adclients)[':adClientId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.adclients[':adClientId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdclientsAdClientId<TError = unknown>(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.adclients)[':adClientId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdclientsAdClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.adclients)[':adClientId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.adclients[':adClientId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdclientsAdClientIdCustomchannelsKey(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>,
) {
  return ['adclients', '/adclients/:adClientId/customchannels', args] as const
}

export function useGetAdclientsAdClientIdCustomchannels<TError = unknown>(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdclientsAdClientIdCustomchannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.adclients[':adClientId'].customchannels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdclientsAdClientIdCustomchannels<TError = unknown>(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdclientsAdClientIdCustomchannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.adclients[':adClientId'].customchannels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAdclientsAdClientIdCustomchannelsKey() {
  return ['adclients', '/adclients/:adClientId/customchannels', 'PUT'] as const
}

export function usePutAdclientsAdClientIdCustomchannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdclientsAdClientIdCustomchannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$put']>
        },
      ) => parseResponse(client.adclients[':adClientId'].customchannels.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdclientsAdClientIdCustomchannelsKey() {
  return ['adclients', '/adclients/:adClientId/customchannels', 'POST'] as const
}

export function usePostAdclientsAdClientIdCustomchannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdclientsAdClientIdCustomchannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$post']>
        },
      ) => parseResponse(client.adclients[':adClientId'].customchannels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAdclientsAdClientIdCustomchannelsKey() {
  return ['adclients', '/adclients/:adClientId/customchannels', 'PATCH'] as const
}

export function usePatchAdclientsAdClientIdCustomchannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdclientsAdClientIdCustomchannelsKey()
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
            (typeof client.adclients)[':adClientId']['customchannels']['$patch']
          >
        },
      ) => parseResponse(client.adclients[':adClientId'].customchannels.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdclientsAdClientIdCustomchannelsCustomChannelIdKey(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
  >,
) {
  return ['adclients', '/adclients/:adClientId/customchannels/:customChannelId', args] as const
}

export function useGetAdclientsAdClientIdCustomchannelsCustomChannelId<TError = unknown>(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdclientsAdClientIdCustomchannelsCustomChannelIdKey(args)
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
                (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
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
          client.adclients[':adClientId'].customchannels[':customChannelId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdclientsAdClientIdCustomchannelsCustomChannelId<TError = unknown>(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdclientsAdClientIdCustomchannelsCustomChannelIdKey(args)
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
                (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
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
          client.adclients[':adClientId'].customchannels[':customChannelId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAdclientsAdClientIdCustomchannelsCustomChannelIdKey() {
  return ['adclients', '/adclients/:adClientId/customchannels/:customChannelId', 'DELETE'] as const
}

export function useDeleteAdclientsAdClientIdCustomchannelsCustomChannelId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdclientsAdClientIdCustomchannelsCustomChannelIdKey()
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
            (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.adclients[':adClientId'].customchannels[':customChannelId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdclientsAdClientIdUrlchannelsKey(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>,
) {
  return ['adclients', '/adclients/:adClientId/urlchannels', args] as const
}

export function useGetAdclientsAdClientIdUrlchannels<TError = unknown>(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdclientsAdClientIdUrlchannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.adclients[':adClientId'].urlchannels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdclientsAdClientIdUrlchannels<TError = unknown>(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdclientsAdClientIdUrlchannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.adclients[':adClientId'].urlchannels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdclientsAdClientIdUrlchannelsKey() {
  return ['adclients', '/adclients/:adClientId/urlchannels', 'POST'] as const
}

export function usePostAdclientsAdClientIdUrlchannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.adclients)[':adClientId']['urlchannels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.adclients)[':adClientId']['urlchannels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdclientsAdClientIdUrlchannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.adclients)[':adClientId']['urlchannels']['$post']>
        },
      ) => parseResponse(client.adclients[':adClientId'].urlchannels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdclientsAdClientIdUrlchannelsUrlChannelIdKey() {
  return ['adclients', '/adclients/:adClientId/urlchannels/:urlChannelId', 'DELETE'] as const
}

export function useDeleteAdclientsAdClientIdUrlchannelsUrlChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.adclients)[':adClientId']['urlchannels'][':urlChannelId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdclientsAdClientIdUrlchannelsUrlChannelIdKey()
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
            (typeof client.adclients)[':adClientId']['urlchannels'][':urlChannelId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.adclients[':adClientId'].urlchannels[':urlChannelId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAssociationsessionsStartKey(
  args: InferRequestType<typeof client.associationsessions.start.$get>,
) {
  return ['associationsessions', '/associationsessions/start', args] as const
}

export function useGetAssociationsessionsStart<TError = unknown>(
  args: InferRequestType<typeof client.associationsessions.start.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.associationsessions.start.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAssociationsessionsStartKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.associationsessions.start.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.associationsessions.start.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssociationsessionsStart<TError = unknown>(
  args: InferRequestType<typeof client.associationsessions.start.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.associationsessions.start.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAssociationsessionsStartKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.associationsessions.start.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.associationsessions.start.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssociationsessionsVerifyKey(
  args: InferRequestType<typeof client.associationsessions.verify.$get>,
) {
  return ['associationsessions', '/associationsessions/verify', args] as const
}

export function useGetAssociationsessionsVerify<TError = unknown>(
  args: InferRequestType<typeof client.associationsessions.verify.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.associationsessions.verify.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAssociationsessionsVerifyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.associationsessions.verify.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.associationsessions.verify.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssociationsessionsVerify<TError = unknown>(
  args: InferRequestType<typeof client.associationsessions.verify.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.associationsessions.verify.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAssociationsessionsVerifyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.associationsessions.verify.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.associationsessions.verify.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportsKey(args: InferRequestType<typeof client.reports.$get>) {
  return ['reports', '/reports', args] as const
}

export function useGetReports<TError = unknown>(
  args: InferRequestType<typeof client.reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.reports.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetReports<TError = unknown>(
  args: InferRequestType<typeof client.reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.reports.$get(args, clientOptions)), restSwrOptions),
  }
}
