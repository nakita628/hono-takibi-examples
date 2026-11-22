import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBusinessUnitsKey() {
  return ['business-units'] as const
}

export function getGetBusinessUnitsPublic202609BusinessUnitsUserUserIdKey(
  args: InferRequestType<
    (typeof client)['business-units']['public']['2026-09']['business-units']['user'][':userId']['$get']
  >,
) {
  return [
    'business-units',
    '/business-units/public/2026-09/business-units/user/:userId',
    args,
  ] as const
}

export function useGetBusinessUnitsPublic202609BusinessUnitsUserUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['business-units']['public']['2026-09']['business-units']['user'][':userId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['business-units']['public']['2026-09']['business-units']['user'][':userId']['$get']
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
        ? getGetBusinessUnitsPublic202609BusinessUnitsUserUserIdKey(args)
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
                (typeof client)['business-units']['public']['2026-09']['business-units']['user'][':userId']['$get']
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
          client['business-units'].public['2026-09']['business-units'].user[':userId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessUnitsPublic202609BusinessUnitsUserUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['business-units']['public']['2026-09']['business-units']['user'][':userId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['business-units']['public']['2026-09']['business-units']['user'][':userId']['$get']
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
        ? getGetBusinessUnitsPublic202609BusinessUnitsUserUserIdKey(args)
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
                (typeof client)['business-units']['public']['2026-09']['business-units']['user'][':userId']['$get']
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
          client['business-units'].public['2026-09']['business-units'].user[':userId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
