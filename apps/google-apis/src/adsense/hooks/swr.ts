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

export function getAlertsKey() {
  return ['alerts'] as const
}

export function getMetadataKey() {
  return ['metadata'] as const
}

export function getPaymentsKey() {
  return ['payments'] as const
}

export function getReportsKey() {
  return ['reports'] as const
}

export function getSavedadstylesKey() {
  return ['savedadstyles'] as const
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

export function getGetAccountsAccountIdAdclientsAdClientIdAdcodeKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adcode']['$get']
  >,
) {
  return ['accounts', '/accounts/:accountId/adclients/:adClientId/adcode', args] as const
}

export function useGetAccountsAccountIdAdclientsAdClientIdAdcode<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adcode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adcode']['$get']
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
        ? getGetAccountsAccountIdAdclientsAdClientIdAdcodeKey(args)
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
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adcode']['$get']
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
          client.accounts[':accountId'].adclients[':adClientId'].adcode.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdAdclientsAdClientIdAdcode<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adcode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adcode']['$get']
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
        ? getGetAccountsAccountIdAdclientsAdClientIdAdcodeKey(args)
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
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adcode']['$get']
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
          client.accounts[':accountId'].adclients[':adClientId'].adcode.$get(args, clientOptions),
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

export function getGetAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
  >,
) {
  return [
    'accounts',
    '/accounts/:accountId/adclients/:adClientId/adunits/:adUnitId/customchannels',
    args,
  ] as const
}

export function useGetAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannels<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
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
        ? getGetAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsKey(args)
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
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
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
          client.accounts[':accountId'].adclients[':adClientId'].adunits[
            ':adUnitId'
          ].customchannels.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannels<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
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
        ? getGetAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsKey(args)
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
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
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
          client.accounts[':accountId'].adclients[':adClientId'].adunits[
            ':adUnitId'
          ].customchannels.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAccountIdAdclientsAdClientIdCustomchannelsKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels']['$get']
  >,
) {
  return ['accounts', '/accounts/:accountId/adclients/:adClientId/customchannels', args] as const
}

export function useGetAccountsAccountIdAdclientsAdClientIdCustomchannels<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels']['$get']
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
        ? getGetAccountsAccountIdAdclientsAdClientIdCustomchannelsKey(args)
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
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels']['$get']
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
          client.accounts[':accountId'].adclients[':adClientId'].customchannels.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdAdclientsAdClientIdCustomchannels<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels']['$get']
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
        ? getGetAccountsAccountIdAdclientsAdClientIdCustomchannelsKey(args)
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
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels']['$get']
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
          client.accounts[':accountId'].adclients[':adClientId'].customchannels.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['$get']
  >,
) {
  return [
    'accounts',
    '/accounts/:accountId/adclients/:adClientId/customchannels/:customChannelId',
    args,
  ] as const
}

export function useGetAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['$get']
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
        ? getGetAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdKey(args)
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
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['$get']
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
          client.accounts[':accountId'].adclients[':adClientId'].customchannels[
            ':customChannelId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['$get']
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
        ? getGetAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdKey(args)
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
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['$get']
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
          client.accounts[':accountId'].adclients[':adClientId'].customchannels[
            ':customChannelId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
  >,
) {
  return [
    'accounts',
    '/accounts/:accountId/adclients/:adClientId/customchannels/:customChannelId/adunits',
    args,
  ] as const
}

export function useGetAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunits<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
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
        ? getGetAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsKey(args)
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
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
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
          client.accounts[':accountId'].adclients[':adClientId'].customchannels[
            ':customChannelId'
          ].adunits.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunits<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
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
        ? getGetAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsKey(args)
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
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
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
          client.accounts[':accountId'].adclients[':adClientId'].customchannels[
            ':customChannelId'
          ].adunits.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAccountIdAdclientsAdClientIdUrlchannelsKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['urlchannels']['$get']
  >,
) {
  return ['accounts', '/accounts/:accountId/adclients/:adClientId/urlchannels', args] as const
}

export function useGetAccountsAccountIdAdclientsAdClientIdUrlchannels<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['urlchannels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['urlchannels']['$get']
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
        ? getGetAccountsAccountIdAdclientsAdClientIdUrlchannelsKey(args)
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
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['urlchannels']['$get']
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
          client.accounts[':accountId'].adclients[':adClientId'].urlchannels.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdAdclientsAdClientIdUrlchannels<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['urlchannels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['urlchannels']['$get']
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
        ? getGetAccountsAccountIdAdclientsAdClientIdUrlchannelsKey(args)
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
                (typeof client.accounts)[':accountId']['adclients'][':adClientId']['urlchannels']['$get']
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
          client.accounts[':accountId'].adclients[':adClientId'].urlchannels.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAccountIdAlertsKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['alerts']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/alerts', args] as const
}

export function useGetAccountsAccountIdAlerts<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['alerts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['alerts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdAlertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['alerts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].alerts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdAlerts<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['alerts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['alerts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdAlertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['alerts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].alerts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccountsAccountIdAlertsAlertIdKey() {
  return ['accounts', '/accounts/:accountId/alerts/:alertId', 'DELETE'] as const
}

export function useDeleteAccountsAccountIdAlertsAlertId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':accountId']['alerts'][':alertId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['alerts'][':alertId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAccountIdAlertsAlertIdKey()
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
            (typeof client.accounts)[':accountId']['alerts'][':alertId']['$delete']
          >
        },
      ) =>
        parseResponse(client.accounts[':accountId'].alerts[':alertId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdPaymentsKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['payments']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/payments', args] as const
}

export function useGetAccountsAccountIdPayments<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['payments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['payments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['payments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdPayments<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['payments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['payments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['payments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].payments.$get(args, clientOptions)),
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

export function getGetAccountsAccountIdReportsSavedKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['reports']['saved']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/reports/saved', args] as const
}

export function useGetAccountsAccountIdReportsSaved<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['reports']['saved']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['reports']['saved']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdReportsSavedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['reports']['saved']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':accountId'].reports.saved.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdReportsSaved<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['reports']['saved']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['reports']['saved']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdReportsSavedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['reports']['saved']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':accountId'].reports.saved.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAccountIdReportsSavedReportIdKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['reports'][':savedReportId']['$get']
  >,
) {
  return ['accounts', '/accounts/:accountId/reports/:savedReportId', args] as const
}

export function useGetAccountsAccountIdReportsSavedReportId<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['reports'][':savedReportId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['reports'][':savedReportId']['$get']
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
        ? getGetAccountsAccountIdReportsSavedReportIdKey(args)
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
                (typeof client.accounts)[':accountId']['reports'][':savedReportId']['$get']
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
          client.accounts[':accountId'].reports[':savedReportId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdReportsSavedReportId<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['reports'][':savedReportId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['reports'][':savedReportId']['$get']
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
        ? getGetAccountsAccountIdReportsSavedReportIdKey(args)
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
                (typeof client.accounts)[':accountId']['reports'][':savedReportId']['$get']
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
          client.accounts[':accountId'].reports[':savedReportId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAccountIdSavedadstylesKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['savedadstyles']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/savedadstyles', args] as const
}

export function useGetAccountsAccountIdSavedadstyles<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['savedadstyles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['savedadstyles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdSavedadstylesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['savedadstyles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':accountId'].savedadstyles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdSavedadstyles<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['savedadstyles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['savedadstyles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdSavedadstylesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['savedadstyles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':accountId'].savedadstyles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAccountIdSavedadstylesSavedAdStyleIdKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['savedadstyles'][':savedAdStyleId']['$get']
  >,
) {
  return ['accounts', '/accounts/:accountId/savedadstyles/:savedAdStyleId', args] as const
}

export function useGetAccountsAccountIdSavedadstylesSavedAdStyleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['savedadstyles'][':savedAdStyleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['savedadstyles'][':savedAdStyleId']['$get']
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
        ? getGetAccountsAccountIdSavedadstylesSavedAdStyleIdKey(args)
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
                (typeof client.accounts)[':accountId']['savedadstyles'][':savedAdStyleId']['$get']
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
          client.accounts[':accountId'].savedadstyles[':savedAdStyleId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdSavedadstylesSavedAdStyleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['savedadstyles'][':savedAdStyleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['savedadstyles'][':savedAdStyleId']['$get']
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
        ? getGetAccountsAccountIdSavedadstylesSavedAdStyleIdKey(args)
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
                (typeof client.accounts)[':accountId']['savedadstyles'][':savedAdStyleId']['$get']
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
          client.accounts[':accountId'].savedadstyles[':savedAdStyleId'].$get(args, clientOptions),
        ),
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

export function getGetAdclientsAdClientIdAdunitsKey(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['adunits']['$get']>,
) {
  return ['adclients', '/adclients/:adClientId/adunits', args] as const
}

export function useGetAdclientsAdClientIdAdunits<TError = unknown>(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['adunits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.adclients)[':adClientId']['adunits']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdclientsAdClientIdAdunitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.adclients)[':adClientId']['adunits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.adclients[':adClientId'].adunits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdclientsAdClientIdAdunits<TError = unknown>(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['adunits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.adclients)[':adClientId']['adunits']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdclientsAdClientIdAdunitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.adclients)[':adClientId']['adunits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.adclients[':adClientId'].adunits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdclientsAdClientIdAdunitsAdUnitIdKey(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['$get']>,
) {
  return ['adclients', '/adclients/:adClientId/adunits/:adUnitId', args] as const
}

export function useGetAdclientsAdClientIdAdunitsAdUnitId<TError = unknown>(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['$get']>
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
        ? getGetAdclientsAdClientIdAdunitsAdUnitIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.adclients[':adClientId'].adunits[':adUnitId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdclientsAdClientIdAdunitsAdUnitId<TError = unknown>(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['$get']>
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
        ? getGetAdclientsAdClientIdAdunitsAdUnitIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.adclients[':adClientId'].adunits[':adUnitId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdclientsAdClientIdAdunitsAdUnitIdAdcodeKey(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['adcode']['$get']
  >,
) {
  return ['adclients', '/adclients/:adClientId/adunits/:adUnitId/adcode', args] as const
}

export function useGetAdclientsAdClientIdAdunitsAdUnitIdAdcode<TError = unknown>(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['adcode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['adcode']['$get']
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
        ? getGetAdclientsAdClientIdAdunitsAdUnitIdAdcodeKey(args)
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
                (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['adcode']['$get']
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
          client.adclients[':adClientId'].adunits[':adUnitId'].adcode.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdclientsAdClientIdAdunitsAdUnitIdAdcode<TError = unknown>(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['adcode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['adcode']['$get']
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
        ? getGetAdclientsAdClientIdAdunitsAdUnitIdAdcodeKey(args)
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
                (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['adcode']['$get']
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
          client.adclients[':adClientId'].adunits[':adUnitId'].adcode.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsKey(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
  >,
) {
  return ['adclients', '/adclients/:adClientId/adunits/:adUnitId/customchannels', args] as const
}

export function useGetAdclientsAdClientIdAdunitsAdUnitIdCustomchannels<TError = unknown>(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
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
        ? getGetAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsKey(args)
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
                (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
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
          client.adclients[':adClientId'].adunits[':adUnitId'].customchannels.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdclientsAdClientIdAdunitsAdUnitIdCustomchannels<TError = unknown>(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
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
        ? getGetAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsKey(args)
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
                (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
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
          client.adclients[':adClientId'].adunits[':adUnitId'].customchannels.$get(
            args,
            clientOptions,
          ),
        ),
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

export function getGetAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsKey(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
  >,
) {
  return [
    'adclients',
    '/adclients/:adClientId/customchannels/:customChannelId/adunits',
    args,
  ] as const
}

export function useGetAdclientsAdClientIdCustomchannelsCustomChannelIdAdunits<TError = unknown>(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
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
        ? getGetAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsKey(args)
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
                (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
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
          client.adclients[':adClientId'].customchannels[':customChannelId'].adunits.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdclientsAdClientIdCustomchannelsCustomChannelIdAdunits<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
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
        ? getGetAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsKey(args)
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
                (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
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
          client.adclients[':adClientId'].customchannels[':customChannelId'].adunits.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
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

export function getGetAlertsKey(args: InferRequestType<typeof client.alerts.$get>) {
  return ['alerts', '/alerts', args] as const
}

export function useGetAlerts<TError = unknown>(
  args: InferRequestType<typeof client.alerts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAlertsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.alerts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAlerts<TError = unknown>(
  args: InferRequestType<typeof client.alerts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAlertsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.alerts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getDeleteAlertsAlertIdKey() {
  return ['alerts', '/alerts/:alertId', 'DELETE'] as const
}

export function useDeleteAlertsAlertId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alertId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.alerts)[':alertId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAlertsAlertIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.alerts)[':alertId']['$delete']> },
      ) => parseResponse(client.alerts[':alertId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMetadataDimensionsKey(
  args: InferRequestType<typeof client.metadata.dimensions.$get>,
) {
  return ['metadata', '/metadata/dimensions', args] as const
}

export function useGetMetadataDimensions<TError = unknown>(
  args: InferRequestType<typeof client.metadata.dimensions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metadata.dimensions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetadataDimensionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metadata.dimensions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata.dimensions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetadataDimensions<TError = unknown>(
  args: InferRequestType<typeof client.metadata.dimensions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metadata.dimensions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetadataDimensionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metadata.dimensions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata.dimensions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetadataMetricsKey(
  args: InferRequestType<typeof client.metadata.metrics.$get>,
) {
  return ['metadata', '/metadata/metrics', args] as const
}

export function useGetMetadataMetrics<TError = unknown>(
  args: InferRequestType<typeof client.metadata.metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.metrics.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetadataMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.metrics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata.metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetadataMetrics<TError = unknown>(
  args: InferRequestType<typeof client.metadata.metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.metrics.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetadataMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.metrics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata.metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPaymentsKey(args: InferRequestType<typeof client.payments.$get>) {
  return ['payments', '/payments', args] as const
}

export function useGetPayments<TError = unknown>(
  args: InferRequestType<typeof client.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.payments.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPayments<TError = unknown>(
  args: InferRequestType<typeof client.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.payments.$get(args, clientOptions)), restSwrOptions),
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

export function getGetReportsSavedKey(args: InferRequestType<typeof client.reports.saved.$get>) {
  return ['reports', '/reports/saved', args] as const
}

export function useGetReportsSaved<TError = unknown>(
  args: InferRequestType<typeof client.reports.saved.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.saved.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportsSavedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.saved.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.saved.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsSaved<TError = unknown>(
  args: InferRequestType<typeof client.reports.saved.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.saved.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportsSavedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.saved.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.saved.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportsSavedReportIdKey(
  args: InferRequestType<(typeof client.reports)[':savedReportId']['$get']>,
) {
  return ['reports', '/reports/:savedReportId', args] as const
}

export function useGetReportsSavedReportId<TError = unknown>(
  args: InferRequestType<(typeof client.reports)[':savedReportId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports)[':savedReportId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportsSavedReportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports)[':savedReportId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports[':savedReportId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsSavedReportId<TError = unknown>(
  args: InferRequestType<(typeof client.reports)[':savedReportId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports)[':savedReportId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportsSavedReportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports)[':savedReportId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports[':savedReportId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSavedadstylesKey(args: InferRequestType<typeof client.savedadstyles.$get>) {
  return ['savedadstyles', '/savedadstyles', args] as const
}

export function useGetSavedadstyles<TError = unknown>(
  args: InferRequestType<typeof client.savedadstyles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.savedadstyles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSavedadstylesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.savedadstyles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.savedadstyles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSavedadstyles<TError = unknown>(
  args: InferRequestType<typeof client.savedadstyles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.savedadstyles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSavedadstylesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.savedadstyles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.savedadstyles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSavedadstylesSavedAdStyleIdKey(
  args: InferRequestType<(typeof client.savedadstyles)[':savedAdStyleId']['$get']>,
) {
  return ['savedadstyles', '/savedadstyles/:savedAdStyleId', args] as const
}

export function useGetSavedadstylesSavedAdStyleId<TError = unknown>(
  args: InferRequestType<(typeof client.savedadstyles)[':savedAdStyleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.savedadstyles)[':savedAdStyleId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSavedadstylesSavedAdStyleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.savedadstyles)[':savedAdStyleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.savedadstyles[':savedAdStyleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSavedadstylesSavedAdStyleId<TError = unknown>(
  args: InferRequestType<(typeof client.savedadstyles)[':savedAdStyleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.savedadstyles)[':savedAdStyleId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSavedadstylesSavedAdStyleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.savedadstyles)[':savedAdStyleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.savedadstyles[':savedAdStyleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
