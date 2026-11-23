import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getListingViolationKey() {
  return ['listing_violation'] as const
}

export function getListingViolationSummaryKey() {
  return ['listing_violation_summary'] as const
}

export function getSuppressListingViolationKey() {
  return ['suppress_listing_violation'] as const
}

export function getGetListingViolationKey(
  args: InferRequestType<typeof client.listing_violation.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['listing_violation', '/listing_violation', keyArgs] as const
}

export function useGetListingViolation<TError = unknown>(
  args: InferRequestType<typeof client.listing_violation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetListingViolationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing_violation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingViolation<TError = unknown>(
  args: InferRequestType<typeof client.listing_violation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetListingViolationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing_violation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingViolationSummaryKey(
  args: InferRequestType<typeof client.listing_violation_summary.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['listing_violation_summary', '/listing_violation_summary', keyArgs] as const
}

export function useGetListingViolationSummary<TError = unknown>(
  args: InferRequestType<typeof client.listing_violation_summary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation_summary.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetListingViolationSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation_summary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing_violation_summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingViolationSummary<TError = unknown>(
  args: InferRequestType<typeof client.listing_violation_summary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation_summary.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetListingViolationSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation_summary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listing_violation_summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSuppressListingViolationKey() {
  return ['suppress_listing_violation', '/suppress_listing_violation', 'POST'] as const
}

export function usePostSuppressListingViolation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suppress_listing_violation.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.suppress_listing_violation.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSuppressListingViolationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.suppress_listing_violation.$post> },
      ) => parseResponse(client.suppress_listing_violation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
