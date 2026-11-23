import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAmendmentKey() {
  return ['amendment'] as const
}

export function getBillKey() {
  return ['bill'] as const
}

export function getBoundCongressionalRecordKey() {
  return ['bound-congressional-record'] as const
}

export function getCommitteeKey() {
  return ['committee'] as const
}

export function getCommitteeMeetingKey() {
  return ['committee-meeting'] as const
}

export function getCommitteePrintKey() {
  return ['committee-print'] as const
}

export function getCommitteeReportKey() {
  return ['committee-report'] as const
}

export function getCongressKey() {
  return ['congress'] as const
}

export function getCongressionalRecordKey() {
  return ['congressional-record'] as const
}

export function getCrsreportKey() {
  return ['crsreport'] as const
}

export function getDailyCongressionalRecordKey() {
  return ['daily-congressional-record'] as const
}

export function getHearingKey() {
  return ['hearing'] as const
}

export function getHouseCommunicationKey() {
  return ['house-communication'] as const
}

export function getHouseRequirementKey() {
  return ['house-requirement'] as const
}

export function getHouseVoteKey() {
  return ['house-vote'] as const
}

export function getLawKey() {
  return ['law'] as const
}

export function getMemberKey() {
  return ['member'] as const
}

export function getNominationKey() {
  return ['nomination'] as const
}

export function getSenateCommunicationKey() {
  return ['senate-communication'] as const
}

export function getSummariesKey() {
  return ['summaries'] as const
}

export function getTreatyKey() {
  return ['treaty'] as const
}

export function getGetBillKey(args: InferRequestType<typeof client.bill.$get>) {
  return ['bill', '/bill', args] as const
}

export function useGetBill<TError = unknown>(
  args: InferRequestType<typeof client.bill.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bill.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBillKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bill.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.bill.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBill<TError = unknown>(
  args: InferRequestType<typeof client.bill.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bill.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBillKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bill.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.bill.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetBillCongressKey(
  args: InferRequestType<(typeof client.bill)[':congress']['$get']>,
) {
  return ['bill', '/bill/:congress', args] as const
}

export function useGetBillCongress<TError = unknown>(
  args: InferRequestType<(typeof client.bill)[':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bill)[':congress']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBillCongressKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bill)[':congress']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bill[':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillCongress<TError = unknown>(
  args: InferRequestType<(typeof client.bill)[':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bill)[':congress']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBillCongressKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bill)[':congress']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bill[':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBillCongressBillTypeKey(
  args: InferRequestType<(typeof client.bill)[':congress'][':billType']['$get']>,
) {
  return ['bill', '/bill/:congress/:billType', args] as const
}

export function useGetBillCongressBillType<TError = unknown>(
  args: InferRequestType<(typeof client.bill)[':congress'][':billType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bill)[':congress'][':billType']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBillCongressBillTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bill)[':congress'][':billType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bill[':congress'][':billType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillCongressBillType<TError = unknown>(
  args: InferRequestType<(typeof client.bill)[':congress'][':billType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bill)[':congress'][':billType']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBillCongressBillTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bill)[':congress'][':billType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bill[':congress'][':billType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBillCongressBillTypeBillNumberKey(
  args: InferRequestType<(typeof client.bill)[':congress'][':billType'][':billNumber']['$get']>,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber', args] as const
}

export function useGetBillCongressBillTypeBillNumber<TError = unknown>(
  args: InferRequestType<(typeof client.bill)[':congress'][':billType'][':billNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bill)[':congress'][':billType'][':billNumber']['$get']>
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
        ? getGetBillCongressBillTypeBillNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bill)[':congress'][':billType'][':billNumber']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.bill[':congress'][':billType'][':billNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillCongressBillTypeBillNumber<TError = unknown>(
  args: InferRequestType<(typeof client.bill)[':congress'][':billType'][':billNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bill)[':congress'][':billType'][':billNumber']['$get']>
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
        ? getGetBillCongressBillTypeBillNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bill)[':congress'][':billType'][':billNumber']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.bill[':congress'][':billType'][':billNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBillCongressBillTypeBillNumberActionsKey(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['actions']['$get']
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber/actions', args] as const
}

export function useGetBillCongressBillTypeBillNumberActions<TError = unknown>(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['actions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bill)[':congress'][':billType'][':billNumber']['actions']['$get']
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
        ? getGetBillCongressBillTypeBillNumberActionsKey(args)
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
                (typeof client.bill)[':congress'][':billType'][':billNumber']['actions']['$get']
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
          client.bill[':congress'][':billType'][':billNumber'].actions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillCongressBillTypeBillNumberActions<TError = unknown>(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['actions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bill)[':congress'][':billType'][':billNumber']['actions']['$get']
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
        ? getGetBillCongressBillTypeBillNumberActionsKey(args)
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
                (typeof client.bill)[':congress'][':billType'][':billNumber']['actions']['$get']
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
          client.bill[':congress'][':billType'][':billNumber'].actions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBillCongressBillTypeBillNumberAmendmentsKey(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['amendments']['$get']
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber/amendments', args] as const
}

export function useGetBillCongressBillTypeBillNumberAmendments<TError = unknown>(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['amendments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bill)[':congress'][':billType'][':billNumber']['amendments']['$get']
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
        ? getGetBillCongressBillTypeBillNumberAmendmentsKey(args)
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
                (typeof client.bill)[':congress'][':billType'][':billNumber']['amendments']['$get']
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
          client.bill[':congress'][':billType'][':billNumber'].amendments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillCongressBillTypeBillNumberAmendments<TError = unknown>(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['amendments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bill)[':congress'][':billType'][':billNumber']['amendments']['$get']
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
        ? getGetBillCongressBillTypeBillNumberAmendmentsKey(args)
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
                (typeof client.bill)[':congress'][':billType'][':billNumber']['amendments']['$get']
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
          client.bill[':congress'][':billType'][':billNumber'].amendments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBillCongressBillTypeBillNumberCommitteesKey(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['committees']['$get']
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber/committees', args] as const
}

export function useGetBillCongressBillTypeBillNumberCommittees<TError = unknown>(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['committees']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bill)[':congress'][':billType'][':billNumber']['committees']['$get']
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
        ? getGetBillCongressBillTypeBillNumberCommitteesKey(args)
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
                (typeof client.bill)[':congress'][':billType'][':billNumber']['committees']['$get']
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
          client.bill[':congress'][':billType'][':billNumber'].committees.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillCongressBillTypeBillNumberCommittees<TError = unknown>(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['committees']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bill)[':congress'][':billType'][':billNumber']['committees']['$get']
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
        ? getGetBillCongressBillTypeBillNumberCommitteesKey(args)
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
                (typeof client.bill)[':congress'][':billType'][':billNumber']['committees']['$get']
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
          client.bill[':congress'][':billType'][':billNumber'].committees.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBillCongressBillTypeBillNumberCosponsorsKey(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['cosponsors']['$get']
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber/cosponsors', args] as const
}

export function useGetBillCongressBillTypeBillNumberCosponsors<TError = unknown>(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['cosponsors']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bill)[':congress'][':billType'][':billNumber']['cosponsors']['$get']
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
        ? getGetBillCongressBillTypeBillNumberCosponsorsKey(args)
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
                (typeof client.bill)[':congress'][':billType'][':billNumber']['cosponsors']['$get']
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
          client.bill[':congress'][':billType'][':billNumber'].cosponsors.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillCongressBillTypeBillNumberCosponsors<TError = unknown>(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['cosponsors']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bill)[':congress'][':billType'][':billNumber']['cosponsors']['$get']
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
        ? getGetBillCongressBillTypeBillNumberCosponsorsKey(args)
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
                (typeof client.bill)[':congress'][':billType'][':billNumber']['cosponsors']['$get']
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
          client.bill[':congress'][':billType'][':billNumber'].cosponsors.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBillCongressBillTypeBillNumberRelatedbillsKey(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['relatedbills']['$get']
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber/relatedbills', args] as const
}

export function useGetBillCongressBillTypeBillNumberRelatedbills<TError = unknown>(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['relatedbills']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bill)[':congress'][':billType'][':billNumber']['relatedbills']['$get']
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
        ? getGetBillCongressBillTypeBillNumberRelatedbillsKey(args)
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
                (typeof client.bill)[':congress'][':billType'][':billNumber']['relatedbills']['$get']
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
          client.bill[':congress'][':billType'][':billNumber'].relatedbills.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillCongressBillTypeBillNumberRelatedbills<TError = unknown>(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['relatedbills']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bill)[':congress'][':billType'][':billNumber']['relatedbills']['$get']
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
        ? getGetBillCongressBillTypeBillNumberRelatedbillsKey(args)
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
                (typeof client.bill)[':congress'][':billType'][':billNumber']['relatedbills']['$get']
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
          client.bill[':congress'][':billType'][':billNumber'].relatedbills.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBillCongressBillTypeBillNumberSubjectsKey(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['subjects']['$get']
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber/subjects', args] as const
}

export function useGetBillCongressBillTypeBillNumberSubjects<TError = unknown>(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['subjects']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bill)[':congress'][':billType'][':billNumber']['subjects']['$get']
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
        ? getGetBillCongressBillTypeBillNumberSubjectsKey(args)
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
                (typeof client.bill)[':congress'][':billType'][':billNumber']['subjects']['$get']
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
          client.bill[':congress'][':billType'][':billNumber'].subjects.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillCongressBillTypeBillNumberSubjects<TError = unknown>(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['subjects']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bill)[':congress'][':billType'][':billNumber']['subjects']['$get']
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
        ? getGetBillCongressBillTypeBillNumberSubjectsKey(args)
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
                (typeof client.bill)[':congress'][':billType'][':billNumber']['subjects']['$get']
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
          client.bill[':congress'][':billType'][':billNumber'].subjects.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBillCongressBillTypeBillNumberSummariesKey(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['summaries']['$get']
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber/summaries', args] as const
}

export function useGetBillCongressBillTypeBillNumberSummaries<TError = unknown>(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['summaries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bill)[':congress'][':billType'][':billNumber']['summaries']['$get']
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
        ? getGetBillCongressBillTypeBillNumberSummariesKey(args)
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
                (typeof client.bill)[':congress'][':billType'][':billNumber']['summaries']['$get']
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
          client.bill[':congress'][':billType'][':billNumber'].summaries.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillCongressBillTypeBillNumberSummaries<TError = unknown>(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['summaries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bill)[':congress'][':billType'][':billNumber']['summaries']['$get']
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
        ? getGetBillCongressBillTypeBillNumberSummariesKey(args)
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
                (typeof client.bill)[':congress'][':billType'][':billNumber']['summaries']['$get']
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
          client.bill[':congress'][':billType'][':billNumber'].summaries.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBillCongressBillTypeBillNumberTextKey(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['text']['$get']
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber/text', args] as const
}

export function useGetBillCongressBillTypeBillNumberText<TError = unknown>(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['text']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bill)[':congress'][':billType'][':billNumber']['text']['$get']
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
        ? getGetBillCongressBillTypeBillNumberTextKey(args)
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
                (typeof client.bill)[':congress'][':billType'][':billNumber']['text']['$get']
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
          client.bill[':congress'][':billType'][':billNumber'].text.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillCongressBillTypeBillNumberText<TError = unknown>(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['text']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bill)[':congress'][':billType'][':billNumber']['text']['$get']
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
        ? getGetBillCongressBillTypeBillNumberTextKey(args)
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
                (typeof client.bill)[':congress'][':billType'][':billNumber']['text']['$get']
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
          client.bill[':congress'][':billType'][':billNumber'].text.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBillCongressBillTypeBillNumberTitlesKey(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['titles']['$get']
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber/titles', args] as const
}

export function useGetBillCongressBillTypeBillNumberTitles<TError = unknown>(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['titles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bill)[':congress'][':billType'][':billNumber']['titles']['$get']
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
        ? getGetBillCongressBillTypeBillNumberTitlesKey(args)
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
                (typeof client.bill)[':congress'][':billType'][':billNumber']['titles']['$get']
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
          client.bill[':congress'][':billType'][':billNumber'].titles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillCongressBillTypeBillNumberTitles<TError = unknown>(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['titles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bill)[':congress'][':billType'][':billNumber']['titles']['$get']
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
        ? getGetBillCongressBillTypeBillNumberTitlesKey(args)
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
                (typeof client.bill)[':congress'][':billType'][':billNumber']['titles']['$get']
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
          client.bill[':congress'][':billType'][':billNumber'].titles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLawCongressKey(
  args: InferRequestType<(typeof client.law)[':congress']['$get']>,
) {
  return ['law', '/law/:congress', args] as const
}

export function useGetLawCongress<TError = unknown>(
  args: InferRequestType<(typeof client.law)[':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.law)[':congress']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLawCongressKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.law)[':congress']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.law[':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLawCongress<TError = unknown>(
  args: InferRequestType<(typeof client.law)[':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.law)[':congress']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLawCongressKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.law)[':congress']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.law[':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLawCongressLawTypeKey(
  args: InferRequestType<(typeof client.law)[':congress'][':lawType']['$get']>,
) {
  return ['law', '/law/:congress/:lawType', args] as const
}

export function useGetLawCongressLawType<TError = unknown>(
  args: InferRequestType<(typeof client.law)[':congress'][':lawType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.law)[':congress'][':lawType']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLawCongressLawTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.law)[':congress'][':lawType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.law[':congress'][':lawType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLawCongressLawType<TError = unknown>(
  args: InferRequestType<(typeof client.law)[':congress'][':lawType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.law)[':congress'][':lawType']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLawCongressLawTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.law)[':congress'][':lawType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.law[':congress'][':lawType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLawCongressLawTypeLawNumberKey(
  args: InferRequestType<(typeof client.law)[':congress'][':lawType'][':lawNumber']['$get']>,
) {
  return ['law', '/law/:congress/:lawType/:lawNumber', args] as const
}

export function useGetLawCongressLawTypeLawNumber<TError = unknown>(
  args: InferRequestType<(typeof client.law)[':congress'][':lawType'][':lawNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.law)[':congress'][':lawType'][':lawNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLawCongressLawTypeLawNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.law)[':congress'][':lawType'][':lawNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.law[':congress'][':lawType'][':lawNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLawCongressLawTypeLawNumber<TError = unknown>(
  args: InferRequestType<(typeof client.law)[':congress'][':lawType'][':lawNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.law)[':congress'][':lawType'][':lawNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLawCongressLawTypeLawNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.law)[':congress'][':lawType'][':lawNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.law[':congress'][':lawType'][':lawNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAmendmentKey(args: InferRequestType<typeof client.amendment.$get>) {
  return ['amendment', '/amendment', args] as const
}

export function useGetAmendment<TError = unknown>(
  args: InferRequestType<typeof client.amendment.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.amendment.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAmendmentKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.amendment.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.amendment.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAmendment<TError = unknown>(
  args: InferRequestType<typeof client.amendment.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.amendment.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAmendmentKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.amendment.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.amendment.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAmendmentCongressKey(
  args: InferRequestType<(typeof client.amendment)[':congress']['$get']>,
) {
  return ['amendment', '/amendment/:congress', args] as const
}

export function useGetAmendmentCongress<TError = unknown>(
  args: InferRequestType<(typeof client.amendment)[':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.amendment)[':congress']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAmendmentCongressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.amendment)[':congress']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.amendment[':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAmendmentCongress<TError = unknown>(
  args: InferRequestType<(typeof client.amendment)[':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.amendment)[':congress']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAmendmentCongressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.amendment)[':congress']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.amendment[':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAmendmentCongressAmendmentTypeKey(
  args: InferRequestType<(typeof client.amendment)[':congress'][':amendmentType']['$get']>,
) {
  return ['amendment', '/amendment/:congress/:amendmentType', args] as const
}

export function useGetAmendmentCongressAmendmentType<TError = unknown>(
  args: InferRequestType<(typeof client.amendment)[':congress'][':amendmentType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.amendment)[':congress'][':amendmentType']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAmendmentCongressAmendmentTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.amendment)[':congress'][':amendmentType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.amendment[':congress'][':amendmentType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAmendmentCongressAmendmentType<TError = unknown>(
  args: InferRequestType<(typeof client.amendment)[':congress'][':amendmentType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.amendment)[':congress'][':amendmentType']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAmendmentCongressAmendmentTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.amendment)[':congress'][':amendmentType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.amendment[':congress'][':amendmentType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAmendmentCongressAmendmentTypeAmendmentNumberKey(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['$get']
  >,
) {
  return ['amendment', '/amendment/:congress/:amendmentType/:amendmentNumber', args] as const
}

export function useGetAmendmentCongressAmendmentTypeAmendmentNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['$get']
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
        ? getGetAmendmentCongressAmendmentTypeAmendmentNumberKey(args)
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
                (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['$get']
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
          client.amendment[':congress'][':amendmentType'][':amendmentNumber'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAmendmentCongressAmendmentTypeAmendmentNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['$get']
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
        ? getGetAmendmentCongressAmendmentTypeAmendmentNumberKey(args)
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
                (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['$get']
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
          client.amendment[':congress'][':amendmentType'][':amendmentNumber'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAmendmentCongressAmendmentTypeAmendmentNumberActionsKey(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['actions']['$get']
  >,
) {
  return [
    'amendment',
    '/amendment/:congress/:amendmentType/:amendmentNumber/actions',
    args,
  ] as const
}

export function useGetAmendmentCongressAmendmentTypeAmendmentNumberActions<TError = unknown>(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['actions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['actions']['$get']
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
        ? getGetAmendmentCongressAmendmentTypeAmendmentNumberActionsKey(args)
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
                (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['actions']['$get']
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
          client.amendment[':congress'][':amendmentType'][':amendmentNumber'].actions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAmendmentCongressAmendmentTypeAmendmentNumberActions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['actions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['actions']['$get']
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
        ? getGetAmendmentCongressAmendmentTypeAmendmentNumberActionsKey(args)
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
                (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['actions']['$get']
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
          client.amendment[':congress'][':amendmentType'][':amendmentNumber'].actions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAmendmentCongressAmendmentTypeAmendmentNumberCosponsorsKey(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['cosponsors']['$get']
  >,
) {
  return [
    'amendment',
    '/amendment/:congress/:amendmentType/:amendmentNumber/cosponsors',
    args,
  ] as const
}

export function useGetAmendmentCongressAmendmentTypeAmendmentNumberCosponsors<TError = unknown>(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['cosponsors']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['cosponsors']['$get']
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
        ? getGetAmendmentCongressAmendmentTypeAmendmentNumberCosponsorsKey(args)
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
                (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['cosponsors']['$get']
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
          client.amendment[':congress'][':amendmentType'][':amendmentNumber'].cosponsors.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAmendmentCongressAmendmentTypeAmendmentNumberCosponsors<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['cosponsors']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['cosponsors']['$get']
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
        ? getGetAmendmentCongressAmendmentTypeAmendmentNumberCosponsorsKey(args)
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
                (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['cosponsors']['$get']
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
          client.amendment[':congress'][':amendmentType'][':amendmentNumber'].cosponsors.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAmendmentCongressAmendmentTypeAmendmentNumberAmendmentsKey(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['amendments']['$get']
  >,
) {
  return [
    'amendment',
    '/amendment/:congress/:amendmentType/:amendmentNumber/amendments',
    args,
  ] as const
}

export function useGetAmendmentCongressAmendmentTypeAmendmentNumberAmendments<TError = unknown>(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['amendments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['amendments']['$get']
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
        ? getGetAmendmentCongressAmendmentTypeAmendmentNumberAmendmentsKey(args)
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
                (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['amendments']['$get']
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
          client.amendment[':congress'][':amendmentType'][':amendmentNumber'].amendments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAmendmentCongressAmendmentTypeAmendmentNumberAmendments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['amendments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['amendments']['$get']
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
        ? getGetAmendmentCongressAmendmentTypeAmendmentNumberAmendmentsKey(args)
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
                (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['amendments']['$get']
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
          client.amendment[':congress'][':amendmentType'][':amendmentNumber'].amendments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAmendmentCongressAmendmentTypeAmendmentNumberTextKey(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['text']['$get']
  >,
) {
  return ['amendment', '/amendment/:congress/:amendmentType/:amendmentNumber/text', args] as const
}

export function useGetAmendmentCongressAmendmentTypeAmendmentNumberText<TError = unknown>(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['text']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['text']['$get']
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
        ? getGetAmendmentCongressAmendmentTypeAmendmentNumberTextKey(args)
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
                (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['text']['$get']
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
          client.amendment[':congress'][':amendmentType'][':amendmentNumber'].text.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAmendmentCongressAmendmentTypeAmendmentNumberText<TError = unknown>(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['text']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['text']['$get']
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
        ? getGetAmendmentCongressAmendmentTypeAmendmentNumberTextKey(args)
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
                (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['text']['$get']
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
          client.amendment[':congress'][':amendmentType'][':amendmentNumber'].text.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSummariesKey(args: InferRequestType<typeof client.summaries.$get>) {
  return ['summaries', '/summaries', args] as const
}

export function useGetSummaries<TError = unknown>(
  args: InferRequestType<typeof client.summaries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summaries.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSummariesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summaries.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.summaries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSummaries<TError = unknown>(
  args: InferRequestType<typeof client.summaries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summaries.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSummariesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summaries.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.summaries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSummariesCongressKey(
  args: InferRequestType<(typeof client.summaries)[':congress']['$get']>,
) {
  return ['summaries', '/summaries/:congress', args] as const
}

export function useGetSummariesCongress<TError = unknown>(
  args: InferRequestType<(typeof client.summaries)[':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.summaries)[':congress']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSummariesCongressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.summaries)[':congress']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.summaries[':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSummariesCongress<TError = unknown>(
  args: InferRequestType<(typeof client.summaries)[':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.summaries)[':congress']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSummariesCongressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.summaries)[':congress']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.summaries[':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSummariesCongressBillTypeKey(
  args: InferRequestType<(typeof client.summaries)[':congress'][':billType']['$get']>,
) {
  return ['summaries', '/summaries/:congress/:billType', args] as const
}

export function useGetSummariesCongressBillType<TError = unknown>(
  args: InferRequestType<(typeof client.summaries)[':congress'][':billType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.summaries)[':congress'][':billType']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSummariesCongressBillTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.summaries)[':congress'][':billType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.summaries[':congress'][':billType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSummariesCongressBillType<TError = unknown>(
  args: InferRequestType<(typeof client.summaries)[':congress'][':billType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.summaries)[':congress'][':billType']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSummariesCongressBillTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.summaries)[':congress'][':billType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.summaries[':congress'][':billType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCongressKey(args: InferRequestType<typeof client.congress.$get>) {
  return ['congress', '/congress', args] as const
}

export function useGetCongress<TError = unknown>(
  args: InferRequestType<typeof client.congress.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCongressKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.congress.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCongress<TError = unknown>(
  args: InferRequestType<typeof client.congress.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCongressKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.congress.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetCongressCongressKey(
  args: InferRequestType<(typeof client.congress)[':congress']['$get']>,
) {
  return ['congress', '/congress/:congress', args] as const
}

export function useGetCongressCongress<TError = unknown>(
  args: InferRequestType<(typeof client.congress)[':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.congress)[':congress']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCongressCongressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.congress)[':congress']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.congress[':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCongressCongress<TError = unknown>(
  args: InferRequestType<(typeof client.congress)[':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.congress)[':congress']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCongressCongressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.congress)[':congress']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.congress[':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCongressCurrentKey(
  args: InferRequestType<typeof client.congress.current.$get>,
) {
  return ['congress', '/congress/current', args] as const
}

export function useGetCongressCurrent<TError = unknown>(
  args: InferRequestType<typeof client.congress.current.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.current.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCongressCurrentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.current.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.congress.current.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCongressCurrent<TError = unknown>(
  args: InferRequestType<typeof client.congress.current.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.current.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCongressCurrentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.current.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.congress.current.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMemberKey(args: InferRequestType<typeof client.member.$get>) {
  return ['member', '/member', args] as const
}

export function useGetMember<TError = unknown>(
  args: InferRequestType<typeof client.member.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.member.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMemberKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.member.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.member.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMember<TError = unknown>(
  args: InferRequestType<typeof client.member.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.member.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMemberKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.member.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.member.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMemberBioguideIdKey(
  args: InferRequestType<(typeof client.member)[':bioguideId']['$get']>,
) {
  return ['member', '/member/:bioguideId', args] as const
}

export function useGetMemberBioguideId<TError = unknown>(
  args: InferRequestType<(typeof client.member)[':bioguideId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.member)[':bioguideId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMemberBioguideIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.member)[':bioguideId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.member[':bioguideId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMemberBioguideId<TError = unknown>(
  args: InferRequestType<(typeof client.member)[':bioguideId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.member)[':bioguideId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMemberBioguideIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.member)[':bioguideId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.member[':bioguideId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMemberBioguideIdSponsoredLegislationKey(
  args: InferRequestType<(typeof client.member)[':bioguideId']['sponsored-legislation']['$get']>,
) {
  return ['member', '/member/:bioguideId/sponsored-legislation', args] as const
}

export function useGetMemberBioguideIdSponsoredLegislation<TError = unknown>(
  args: InferRequestType<(typeof client.member)[':bioguideId']['sponsored-legislation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.member)[':bioguideId']['sponsored-legislation']['$get']>
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
        ? getGetMemberBioguideIdSponsoredLegislationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.member)[':bioguideId']['sponsored-legislation']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.member[':bioguideId']['sponsored-legislation'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMemberBioguideIdSponsoredLegislation<TError = unknown>(
  args: InferRequestType<(typeof client.member)[':bioguideId']['sponsored-legislation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.member)[':bioguideId']['sponsored-legislation']['$get']>
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
        ? getGetMemberBioguideIdSponsoredLegislationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.member)[':bioguideId']['sponsored-legislation']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.member[':bioguideId']['sponsored-legislation'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMemberBioguideIdCosponsoredLegislationKey(
  args: InferRequestType<(typeof client.member)[':bioguideId']['cosponsored-legislation']['$get']>,
) {
  return ['member', '/member/:bioguideId/cosponsored-legislation', args] as const
}

export function useGetMemberBioguideIdCosponsoredLegislation<TError = unknown>(
  args: InferRequestType<(typeof client.member)[':bioguideId']['cosponsored-legislation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.member)[':bioguideId']['cosponsored-legislation']['$get']>
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
        ? getGetMemberBioguideIdCosponsoredLegislationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.member)[':bioguideId']['cosponsored-legislation']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.member[':bioguideId']['cosponsored-legislation'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMemberBioguideIdCosponsoredLegislation<TError = unknown>(
  args: InferRequestType<(typeof client.member)[':bioguideId']['cosponsored-legislation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.member)[':bioguideId']['cosponsored-legislation']['$get']>
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
        ? getGetMemberBioguideIdCosponsoredLegislationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.member)[':bioguideId']['cosponsored-legislation']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.member[':bioguideId']['cosponsored-legislation'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMemberCongressCongressKey(
  args: InferRequestType<(typeof client.member.congress)[':congress']['$get']>,
) {
  return ['member', '/member/congress/:congress', args] as const
}

export function useGetMemberCongressCongress<TError = unknown>(
  args: InferRequestType<(typeof client.member.congress)[':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.member.congress)[':congress']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMemberCongressCongressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.member.congress)[':congress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.member.congress[':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMemberCongressCongress<TError = unknown>(
  args: InferRequestType<(typeof client.member.congress)[':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.member.congress)[':congress']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMemberCongressCongressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.member.congress)[':congress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.member.congress[':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMemberStateCodeKey(
  args: InferRequestType<(typeof client.member)[':stateCode']['$get']>,
) {
  return ['member', '/member/:stateCode', args] as const
}

export function useGetMemberStateCode<TError = unknown>(
  args: InferRequestType<(typeof client.member)[':stateCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.member)[':stateCode']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMemberStateCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.member)[':stateCode']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.member[':stateCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMemberStateCode<TError = unknown>(
  args: InferRequestType<(typeof client.member)[':stateCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.member)[':stateCode']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMemberStateCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.member)[':stateCode']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.member[':stateCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMemberStateCodeDistrictKey(
  args: InferRequestType<(typeof client.member)[':stateCode'][':district']['$get']>,
) {
  return ['member', '/member/:stateCode/:district', args] as const
}

export function useGetMemberStateCodeDistrict<TError = unknown>(
  args: InferRequestType<(typeof client.member)[':stateCode'][':district']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.member)[':stateCode'][':district']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMemberStateCodeDistrictKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.member)[':stateCode'][':district']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.member[':stateCode'][':district'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMemberStateCodeDistrict<TError = unknown>(
  args: InferRequestType<(typeof client.member)[':stateCode'][':district']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.member)[':stateCode'][':district']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMemberStateCodeDistrictKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.member)[':stateCode'][':district']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.member[':stateCode'][':district'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMemberCongressCongressStateCodeDistrictKey(
  args: InferRequestType<
    (typeof client.member.congress)[':congress'][':stateCode'][':district']['$get']
  >,
) {
  return ['member', '/member/congress/:congress/:stateCode/:district', args] as const
}

export function useGetMemberCongressCongressStateCodeDistrict<TError = unknown>(
  args: InferRequestType<
    (typeof client.member.congress)[':congress'][':stateCode'][':district']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.member.congress)[':congress'][':stateCode'][':district']['$get']
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
        ? getGetMemberCongressCongressStateCodeDistrictKey(args)
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
                (typeof client.member.congress)[':congress'][':stateCode'][':district']['$get']
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
          client.member.congress[':congress'][':stateCode'][':district'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMemberCongressCongressStateCodeDistrict<TError = unknown>(
  args: InferRequestType<
    (typeof client.member.congress)[':congress'][':stateCode'][':district']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.member.congress)[':congress'][':stateCode'][':district']['$get']
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
        ? getGetMemberCongressCongressStateCodeDistrictKey(args)
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
                (typeof client.member.congress)[':congress'][':stateCode'][':district']['$get']
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
          client.member.congress[':congress'][':stateCode'][':district'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetHouseVoteKey(args: InferRequestType<(typeof client)['house-vote']['$get']>) {
  return ['house-vote', '/house-vote', args] as const
}

export function useGetHouseVote<TError = unknown>(
  args: InferRequestType<(typeof client)['house-vote']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['house-vote']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHouseVoteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['house-vote']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['house-vote'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHouseVote<TError = unknown>(
  args: InferRequestType<(typeof client)['house-vote']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['house-vote']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHouseVoteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['house-vote']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['house-vote'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHouseVoteCongressKey(
  args: InferRequestType<(typeof client)['house-vote'][':congress']['$get']>,
) {
  return ['house-vote', '/house-vote/:congress', args] as const
}

export function useGetHouseVoteCongress<TError = unknown>(
  args: InferRequestType<(typeof client)['house-vote'][':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['house-vote'][':congress']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHouseVoteCongressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['house-vote'][':congress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['house-vote'][':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHouseVoteCongress<TError = unknown>(
  args: InferRequestType<(typeof client)['house-vote'][':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['house-vote'][':congress']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHouseVoteCongressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['house-vote'][':congress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['house-vote'][':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHouseVoteCongressSessionKey(
  args: InferRequestType<(typeof client)['house-vote'][':congress'][':session']['$get']>,
) {
  return ['house-vote', '/house-vote/:congress/:session', args] as const
}

export function useGetHouseVoteCongressSession<TError = unknown>(
  args: InferRequestType<(typeof client)['house-vote'][':congress'][':session']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['house-vote'][':congress'][':session']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHouseVoteCongressSessionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['house-vote'][':congress'][':session']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['house-vote'][':congress'][':session'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHouseVoteCongressSession<TError = unknown>(
  args: InferRequestType<(typeof client)['house-vote'][':congress'][':session']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['house-vote'][':congress'][':session']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHouseVoteCongressSessionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['house-vote'][':congress'][':session']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['house-vote'][':congress'][':session'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHouseVoteCongressSessionVoteNumberKey(
  args: InferRequestType<
    (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['$get']
  >,
) {
  return ['house-vote', '/house-vote/:congress/:session/:voteNumber', args] as const
}

export function useGetHouseVoteCongressSessionVoteNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['$get']
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
        ? getGetHouseVoteCongressSessionVoteNumberKey(args)
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
                (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['$get']
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
          client['house-vote'][':congress'][':session'][':voteNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHouseVoteCongressSessionVoteNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['$get']
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
        ? getGetHouseVoteCongressSessionVoteNumberKey(args)
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
                (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['$get']
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
          client['house-vote'][':congress'][':session'][':voteNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetHouseVoteCongressSessionVoteNumberMembersKey(
  args: InferRequestType<
    (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['members']['$get']
  >,
) {
  return ['house-vote', '/house-vote/:congress/:session/:voteNumber/members', args] as const
}

export function useGetHouseVoteCongressSessionVoteNumberMembers<TError = unknown>(
  args: InferRequestType<
    (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['members']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['members']['$get']
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
        ? getGetHouseVoteCongressSessionVoteNumberMembersKey(args)
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
                (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['members']['$get']
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
          client['house-vote'][':congress'][':session'][':voteNumber'].members.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHouseVoteCongressSessionVoteNumberMembers<TError = unknown>(
  args: InferRequestType<
    (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['members']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['members']['$get']
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
        ? getGetHouseVoteCongressSessionVoteNumberMembersKey(args)
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
                (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['members']['$get']
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
          client['house-vote'][':congress'][':session'][':voteNumber'].members.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeKey(args: InferRequestType<typeof client.committee.$get>) {
  return ['committee', '/committee', args] as const
}

export function useGetCommittee<TError = unknown>(
  args: InferRequestType<typeof client.committee.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committee.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCommitteeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committee.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.committee.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommittee<TError = unknown>(
  args: InferRequestType<typeof client.committee.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committee.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCommitteeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committee.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.committee.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeChamberKey(
  args: InferRequestType<(typeof client.committee)[':chamber']['$get']>,
) {
  return ['committee', '/committee/:chamber', args] as const
}

export function useGetCommitteeChamber<TError = unknown>(
  args: InferRequestType<(typeof client.committee)[':chamber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.committee)[':chamber']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommitteeChamberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.committee)[':chamber']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.committee[':chamber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeChamber<TError = unknown>(
  args: InferRequestType<(typeof client.committee)[':chamber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.committee)[':chamber']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommitteeChamberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.committee)[':chamber']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.committee[':chamber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeCongressKey(
  args: InferRequestType<(typeof client.committee)[':congress']['$get']>,
) {
  return ['committee', '/committee/:congress', args] as const
}

export function useGetCommitteeCongress<TError = unknown>(
  args: InferRequestType<(typeof client.committee)[':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.committee)[':congress']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommitteeCongressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.committee)[':congress']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.committee[':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeCongress<TError = unknown>(
  args: InferRequestType<(typeof client.committee)[':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.committee)[':congress']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommitteeCongressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.committee)[':congress']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.committee[':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeCongressChamberKey(
  args: InferRequestType<(typeof client.committee)[':congress'][':chamber']['$get']>,
) {
  return ['committee', '/committee/:congress/:chamber', args] as const
}

export function useGetCommitteeCongressChamber<TError = unknown>(
  args: InferRequestType<(typeof client.committee)[':congress'][':chamber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.committee)[':congress'][':chamber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommitteeCongressChamberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.committee)[':congress'][':chamber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.committee[':congress'][':chamber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeCongressChamber<TError = unknown>(
  args: InferRequestType<(typeof client.committee)[':congress'][':chamber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.committee)[':congress'][':chamber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommitteeCongressChamberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.committee)[':congress'][':chamber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.committee[':congress'][':chamber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeChamberCommitteeCodeKey(
  args: InferRequestType<(typeof client.committee)[':chamber'][':committeeCode']['$get']>,
) {
  return ['committee', '/committee/:chamber/:committeeCode', args] as const
}

export function useGetCommitteeChamberCommitteeCode<TError = unknown>(
  args: InferRequestType<(typeof client.committee)[':chamber'][':committeeCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommitteeChamberCommitteeCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.committee[':chamber'][':committeeCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeChamberCommitteeCode<TError = unknown>(
  args: InferRequestType<(typeof client.committee)[':chamber'][':committeeCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommitteeChamberCommitteeCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.committee[':chamber'][':committeeCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeCongressChamberCommitteeCodeKey(
  args: InferRequestType<
    (typeof client.committee)[':congress'][':chamber'][':committeeCode']['$get']
  >,
) {
  return ['committee', '/committee/:congress/:chamber/:committeeCode', args] as const
}

export function useGetCommitteeCongressChamberCommitteeCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.committee)[':congress'][':chamber'][':committeeCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.committee)[':congress'][':chamber'][':committeeCode']['$get']
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
        ? getGetCommitteeCongressChamberCommitteeCodeKey(args)
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
                (typeof client.committee)[':congress'][':chamber'][':committeeCode']['$get']
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
          client.committee[':congress'][':chamber'][':committeeCode'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeCongressChamberCommitteeCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.committee)[':congress'][':chamber'][':committeeCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.committee)[':congress'][':chamber'][':committeeCode']['$get']
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
        ? getGetCommitteeCongressChamberCommitteeCodeKey(args)
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
                (typeof client.committee)[':congress'][':chamber'][':committeeCode']['$get']
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
          client.committee[':congress'][':chamber'][':committeeCode'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeChamberCommitteeCodeBillsKey(
  args: InferRequestType<(typeof client.committee)[':chamber'][':committeeCode']['bills']['$get']>,
) {
  return ['committee', '/committee/:chamber/:committeeCode/bills', args] as const
}

export function useGetCommitteeChamberCommitteeCodeBills<TError = unknown>(
  args: InferRequestType<(typeof client.committee)[':chamber'][':committeeCode']['bills']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['bills']['$get']>
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
        ? getGetCommitteeChamberCommitteeCodeBillsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['bills']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.committee[':chamber'][':committeeCode'].bills.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeChamberCommitteeCodeBills<TError = unknown>(
  args: InferRequestType<(typeof client.committee)[':chamber'][':committeeCode']['bills']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['bills']['$get']>
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
        ? getGetCommitteeChamberCommitteeCodeBillsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['bills']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.committee[':chamber'][':committeeCode'].bills.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeChamberCommitteeCodeReportsKey(
  args: InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['reports']['$get']
  >,
) {
  return ['committee', '/committee/:chamber/:committeeCode/reports', args] as const
}

export function useGetCommitteeChamberCommitteeCodeReports<TError = unknown>(
  args: InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['reports']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['reports']['$get']>
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
        ? getGetCommitteeChamberCommitteeCodeReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['reports']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.committee[':chamber'][':committeeCode'].reports.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeChamberCommitteeCodeReports<TError = unknown>(
  args: InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['reports']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['reports']['$get']>
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
        ? getGetCommitteeChamberCommitteeCodeReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['reports']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.committee[':chamber'][':committeeCode'].reports.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeChamberCommitteeCodeNominationsKey(
  args: InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['nominations']['$get']
  >,
) {
  return ['committee', '/committee/:chamber/:committeeCode/nominations', args] as const
}

export function useGetCommitteeChamberCommitteeCodeNominations<TError = unknown>(
  args: InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['nominations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.committee)[':chamber'][':committeeCode']['nominations']['$get']
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
        ? getGetCommitteeChamberCommitteeCodeNominationsKey(args)
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
                (typeof client.committee)[':chamber'][':committeeCode']['nominations']['$get']
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
          client.committee[':chamber'][':committeeCode'].nominations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeChamberCommitteeCodeNominations<TError = unknown>(
  args: InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['nominations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.committee)[':chamber'][':committeeCode']['nominations']['$get']
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
        ? getGetCommitteeChamberCommitteeCodeNominationsKey(args)
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
                (typeof client.committee)[':chamber'][':committeeCode']['nominations']['$get']
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
          client.committee[':chamber'][':committeeCode'].nominations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeChamberCommitteeCodeHouseCommunicationKey(
  args: InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['house-communication']['$get']
  >,
) {
  return ['committee', '/committee/:chamber/:committeeCode/house-communication', args] as const
}

export function useGetCommitteeChamberCommitteeCodeHouseCommunication<TError = unknown>(
  args: InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['house-communication']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.committee)[':chamber'][':committeeCode']['house-communication']['$get']
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
        ? getGetCommitteeChamberCommitteeCodeHouseCommunicationKey(args)
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
                (typeof client.committee)[':chamber'][':committeeCode']['house-communication']['$get']
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
          client.committee[':chamber'][':committeeCode']['house-communication'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeChamberCommitteeCodeHouseCommunication<TError = unknown>(
  args: InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['house-communication']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.committee)[':chamber'][':committeeCode']['house-communication']['$get']
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
        ? getGetCommitteeChamberCommitteeCodeHouseCommunicationKey(args)
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
                (typeof client.committee)[':chamber'][':committeeCode']['house-communication']['$get']
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
          client.committee[':chamber'][':committeeCode']['house-communication'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeChamberCommitteeCodeSenateCommunicationKey(
  args: InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['senate-communication']['$get']
  >,
) {
  return ['committee', '/committee/:chamber/:committeeCode/senate-communication', args] as const
}

export function useGetCommitteeChamberCommitteeCodeSenateCommunication<TError = unknown>(
  args: InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['senate-communication']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.committee)[':chamber'][':committeeCode']['senate-communication']['$get']
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
        ? getGetCommitteeChamberCommitteeCodeSenateCommunicationKey(args)
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
                (typeof client.committee)[':chamber'][':committeeCode']['senate-communication']['$get']
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
          client.committee[':chamber'][':committeeCode']['senate-communication'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeChamberCommitteeCodeSenateCommunication<TError = unknown>(
  args: InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['senate-communication']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.committee)[':chamber'][':committeeCode']['senate-communication']['$get']
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
        ? getGetCommitteeChamberCommitteeCodeSenateCommunicationKey(args)
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
                (typeof client.committee)[':chamber'][':committeeCode']['senate-communication']['$get']
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
          client.committee[':chamber'][':committeeCode']['senate-communication'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeReportKey(
  args: InferRequestType<(typeof client)['committee-report']['$get']>,
) {
  return ['committee-report', '/committee-report', args] as const
}

export function useGetCommitteeReport<TError = unknown>(
  args: InferRequestType<(typeof client)['committee-report']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-report']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommitteeReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-report']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['committee-report'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeReport<TError = unknown>(
  args: InferRequestType<(typeof client)['committee-report']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-report']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommitteeReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-report']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['committee-report'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeReportCongressKey(
  args: InferRequestType<(typeof client)['committee-report'][':congress']['$get']>,
) {
  return ['committee-report', '/committee-report/:congress', args] as const
}

export function useGetCommitteeReportCongress<TError = unknown>(
  args: InferRequestType<(typeof client)['committee-report'][':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['committee-report'][':congress']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommitteeReportCongressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['committee-report'][':congress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['committee-report'][':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeReportCongress<TError = unknown>(
  args: InferRequestType<(typeof client)['committee-report'][':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['committee-report'][':congress']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommitteeReportCongressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['committee-report'][':congress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['committee-report'][':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeReportCongressReportTypeKey(
  args: InferRequestType<(typeof client)['committee-report'][':congress'][':reportType']['$get']>,
) {
  return ['committee-report', '/committee-report/:congress/:reportType', args] as const
}

export function useGetCommitteeReportCongressReportType<TError = unknown>(
  args: InferRequestType<(typeof client)['committee-report'][':congress'][':reportType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['committee-report'][':congress'][':reportType']['$get']>
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
        ? getGetCommitteeReportCongressReportTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['committee-report'][':congress'][':reportType']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['committee-report'][':congress'][':reportType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeReportCongressReportType<TError = unknown>(
  args: InferRequestType<(typeof client)['committee-report'][':congress'][':reportType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['committee-report'][':congress'][':reportType']['$get']>
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
        ? getGetCommitteeReportCongressReportTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['committee-report'][':congress'][':reportType']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['committee-report'][':congress'][':reportType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeReportCongressReportTypeReportNumberKey(
  args: InferRequestType<
    (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['$get']
  >,
) {
  return [
    'committee-report',
    '/committee-report/:congress/:reportType/:reportNumber',
    args,
  ] as const
}

export function useGetCommitteeReportCongressReportTypeReportNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['$get']
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
        ? getGetCommitteeReportCongressReportTypeReportNumberKey(args)
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
                (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['$get']
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
          client['committee-report'][':congress'][':reportType'][':reportNumber'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeReportCongressReportTypeReportNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['$get']
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
        ? getGetCommitteeReportCongressReportTypeReportNumberKey(args)
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
                (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['$get']
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
          client['committee-report'][':congress'][':reportType'][':reportNumber'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeReportCongressReportTypeReportNumberTextKey(
  args: InferRequestType<
    (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['text']['$get']
  >,
) {
  return [
    'committee-report',
    '/committee-report/:congress/:reportType/:reportNumber/text',
    args,
  ] as const
}

export function useGetCommitteeReportCongressReportTypeReportNumberText<TError = unknown>(
  args: InferRequestType<
    (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['text']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['text']['$get']
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
        ? getGetCommitteeReportCongressReportTypeReportNumberTextKey(args)
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
                (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['text']['$get']
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
          client['committee-report'][':congress'][':reportType'][':reportNumber'].text.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeReportCongressReportTypeReportNumberText<TError = unknown>(
  args: InferRequestType<
    (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['text']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['text']['$get']
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
        ? getGetCommitteeReportCongressReportTypeReportNumberTextKey(args)
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
                (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['text']['$get']
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
          client['committee-report'][':congress'][':reportType'][':reportNumber'].text.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteePrintKey(
  args: InferRequestType<(typeof client)['committee-print']['$get']>,
) {
  return ['committee-print', '/committee-print', args] as const
}

export function useGetCommitteePrint<TError = unknown>(
  args: InferRequestType<(typeof client)['committee-print']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-print']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCommitteePrintKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-print']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['committee-print'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteePrint<TError = unknown>(
  args: InferRequestType<(typeof client)['committee-print']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-print']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCommitteePrintKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-print']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['committee-print'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteePrintCongressKey(
  args: InferRequestType<(typeof client)['committee-print'][':congress']['$get']>,
) {
  return ['committee-print', '/committee-print/:congress', args] as const
}

export function useGetCommitteePrintCongress<TError = unknown>(
  args: InferRequestType<(typeof client)['committee-print'][':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['committee-print'][':congress']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommitteePrintCongressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['committee-print'][':congress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['committee-print'][':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteePrintCongress<TError = unknown>(
  args: InferRequestType<(typeof client)['committee-print'][':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['committee-print'][':congress']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommitteePrintCongressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['committee-print'][':congress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['committee-print'][':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteePrintCongressChamberKey(
  args: InferRequestType<(typeof client)['committee-print'][':congress'][':chamber']['$get']>,
) {
  return ['committee-print', '/committee-print/:congress/:chamber', args] as const
}

export function useGetCommitteePrintCongressChamber<TError = unknown>(
  args: InferRequestType<(typeof client)['committee-print'][':congress'][':chamber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['committee-print'][':congress'][':chamber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommitteePrintCongressChamberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['committee-print'][':congress'][':chamber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['committee-print'][':congress'][':chamber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteePrintCongressChamber<TError = unknown>(
  args: InferRequestType<(typeof client)['committee-print'][':congress'][':chamber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['committee-print'][':congress'][':chamber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommitteePrintCongressChamberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['committee-print'][':congress'][':chamber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['committee-print'][':congress'][':chamber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteePrintCongressChamberJacketNumberKey(
  args: InferRequestType<
    (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['$get']
  >,
) {
  return ['committee-print', '/committee-print/:congress/:chamber/:jacketNumber', args] as const
}

export function useGetCommitteePrintCongressChamberJacketNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['$get']
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
        ? getGetCommitteePrintCongressChamberJacketNumberKey(args)
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
                (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['$get']
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
          client['committee-print'][':congress'][':chamber'][':jacketNumber'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteePrintCongressChamberJacketNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['$get']
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
        ? getGetCommitteePrintCongressChamberJacketNumberKey(args)
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
                (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['$get']
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
          client['committee-print'][':congress'][':chamber'][':jacketNumber'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteePrintCongressChamberJacketNumberTextKey(
  args: InferRequestType<
    (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['text']['$get']
  >,
) {
  return [
    'committee-print',
    '/committee-print/:congress/:chamber/:jacketNumber/text',
    args,
  ] as const
}

export function useGetCommitteePrintCongressChamberJacketNumberText<TError = unknown>(
  args: InferRequestType<
    (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['text']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['text']['$get']
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
        ? getGetCommitteePrintCongressChamberJacketNumberTextKey(args)
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
                (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['text']['$get']
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
          client['committee-print'][':congress'][':chamber'][':jacketNumber'].text.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteePrintCongressChamberJacketNumberText<TError = unknown>(
  args: InferRequestType<
    (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['text']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['text']['$get']
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
        ? getGetCommitteePrintCongressChamberJacketNumberTextKey(args)
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
                (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['text']['$get']
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
          client['committee-print'][':congress'][':chamber'][':jacketNumber'].text.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeMeetingKey(
  args: InferRequestType<(typeof client)['committee-meeting']['$get']>,
) {
  return ['committee-meeting', '/committee-meeting', args] as const
}

export function useGetCommitteeMeeting<TError = unknown>(
  args: InferRequestType<(typeof client)['committee-meeting']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-meeting']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommitteeMeetingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-meeting']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['committee-meeting'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeMeeting<TError = unknown>(
  args: InferRequestType<(typeof client)['committee-meeting']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-meeting']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommitteeMeetingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-meeting']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['committee-meeting'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeMeetingCongressKey(
  args: InferRequestType<(typeof client)['committee-meeting'][':congress']['$get']>,
) {
  return ['committee-meeting', '/committee-meeting/:congress', args] as const
}

export function useGetCommitteeMeetingCongress<TError = unknown>(
  args: InferRequestType<(typeof client)['committee-meeting'][':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['committee-meeting'][':congress']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommitteeMeetingCongressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['committee-meeting'][':congress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['committee-meeting'][':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeMeetingCongress<TError = unknown>(
  args: InferRequestType<(typeof client)['committee-meeting'][':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['committee-meeting'][':congress']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommitteeMeetingCongressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['committee-meeting'][':congress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['committee-meeting'][':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeMeetingCongressChamberKey(
  args: InferRequestType<(typeof client)['committee-meeting'][':congress'][':chamber']['$get']>,
) {
  return ['committee-meeting', '/committee-meeting/:congress/:chamber', args] as const
}

export function useGetCommitteeMeetingCongressChamber<TError = unknown>(
  args: InferRequestType<(typeof client)['committee-meeting'][':congress'][':chamber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['committee-meeting'][':congress'][':chamber']['$get']>
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
        ? getGetCommitteeMeetingCongressChamberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['committee-meeting'][':congress'][':chamber']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['committee-meeting'][':congress'][':chamber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeMeetingCongressChamber<TError = unknown>(
  args: InferRequestType<(typeof client)['committee-meeting'][':congress'][':chamber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['committee-meeting'][':congress'][':chamber']['$get']>
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
        ? getGetCommitteeMeetingCongressChamberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['committee-meeting'][':congress'][':chamber']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['committee-meeting'][':congress'][':chamber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeMeetingCongressChamberEventIdKey(
  args: InferRequestType<
    (typeof client)['committee-meeting'][':congress'][':chamber'][':eventId']['$get']
  >,
) {
  return ['committee-meeting', '/committee-meeting/:congress/:chamber/:eventId', args] as const
}

export function useGetCommitteeMeetingCongressChamberEventId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['committee-meeting'][':congress'][':chamber'][':eventId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['committee-meeting'][':congress'][':chamber'][':eventId']['$get']
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
        ? getGetCommitteeMeetingCongressChamberEventIdKey(args)
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
                (typeof client)['committee-meeting'][':congress'][':chamber'][':eventId']['$get']
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
          client['committee-meeting'][':congress'][':chamber'][':eventId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeMeetingCongressChamberEventId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['committee-meeting'][':congress'][':chamber'][':eventId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['committee-meeting'][':congress'][':chamber'][':eventId']['$get']
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
        ? getGetCommitteeMeetingCongressChamberEventIdKey(args)
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
                (typeof client)['committee-meeting'][':congress'][':chamber'][':eventId']['$get']
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
          client['committee-meeting'][':congress'][':chamber'][':eventId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetHearingKey(args: InferRequestType<typeof client.hearing.$get>) {
  return ['hearing', '/hearing', args] as const
}

export function useGetHearing<TError = unknown>(
  args: InferRequestType<typeof client.hearing.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hearing.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHearingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hearing.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.hearing.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetHearing<TError = unknown>(
  args: InferRequestType<typeof client.hearing.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hearing.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHearingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hearing.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.hearing.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetHearingCongressKey(
  args: InferRequestType<(typeof client.hearing)[':congress']['$get']>,
) {
  return ['hearing', '/hearing/:congress', args] as const
}

export function useGetHearingCongress<TError = unknown>(
  args: InferRequestType<(typeof client.hearing)[':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hearing)[':congress']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHearingCongressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hearing)[':congress']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hearing[':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHearingCongress<TError = unknown>(
  args: InferRequestType<(typeof client.hearing)[':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hearing)[':congress']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHearingCongressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hearing)[':congress']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hearing[':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHearingCongressChamberKey(
  args: InferRequestType<(typeof client.hearing)[':congress'][':chamber']['$get']>,
) {
  return ['hearing', '/hearing/:congress/:chamber', args] as const
}

export function useGetHearingCongressChamber<TError = unknown>(
  args: InferRequestType<(typeof client.hearing)[':congress'][':chamber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hearing)[':congress'][':chamber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHearingCongressChamberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hearing)[':congress'][':chamber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hearing[':congress'][':chamber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHearingCongressChamber<TError = unknown>(
  args: InferRequestType<(typeof client.hearing)[':congress'][':chamber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hearing)[':congress'][':chamber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHearingCongressChamberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hearing)[':congress'][':chamber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hearing[':congress'][':chamber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHearingCongressChamberJacketNumberKey(
  args: InferRequestType<(typeof client.hearing)[':congress'][':chamber'][':jacketNumber']['$get']>,
) {
  return ['hearing', '/hearing/:congress/:chamber/:jacketNumber', args] as const
}

export function useGetHearingCongressChamberJacketNumber<TError = unknown>(
  args: InferRequestType<(typeof client.hearing)[':congress'][':chamber'][':jacketNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.hearing)[':congress'][':chamber'][':jacketNumber']['$get']>
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
        ? getGetHearingCongressChamberJacketNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.hearing)[':congress'][':chamber'][':jacketNumber']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.hearing[':congress'][':chamber'][':jacketNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHearingCongressChamberJacketNumber<TError = unknown>(
  args: InferRequestType<(typeof client.hearing)[':congress'][':chamber'][':jacketNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.hearing)[':congress'][':chamber'][':jacketNumber']['$get']>
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
        ? getGetHearingCongressChamberJacketNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.hearing)[':congress'][':chamber'][':jacketNumber']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.hearing[':congress'][':chamber'][':jacketNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCongressionalRecordKey(
  args: InferRequestType<(typeof client)['congressional-record']['$get']>,
) {
  return ['congressional-record', '/congressional-record', args] as const
}

export function useGetCongressionalRecord<TError = unknown>(
  args: InferRequestType<(typeof client)['congressional-record']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['congressional-record']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCongressionalRecordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['congressional-record']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['congressional-record'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCongressionalRecord<TError = unknown>(
  args: InferRequestType<(typeof client)['congressional-record']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['congressional-record']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCongressionalRecordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['congressional-record']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['congressional-record'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDailyCongressionalRecordKey(
  args: InferRequestType<(typeof client)['daily-congressional-record']['$get']>,
) {
  return ['daily-congressional-record', '/daily-congressional-record', args] as const
}

export function useGetDailyCongressionalRecord<TError = unknown>(
  args: InferRequestType<(typeof client)['daily-congressional-record']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['daily-congressional-record']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDailyCongressionalRecordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['daily-congressional-record']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['daily-congressional-record'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDailyCongressionalRecord<TError = unknown>(
  args: InferRequestType<(typeof client)['daily-congressional-record']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['daily-congressional-record']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDailyCongressionalRecordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['daily-congressional-record']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['daily-congressional-record'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDailyCongressionalRecordVolumeNumberKey(
  args: InferRequestType<(typeof client)['daily-congressional-record'][':volumeNumber']['$get']>,
) {
  return ['daily-congressional-record', '/daily-congressional-record/:volumeNumber', args] as const
}

export function useGetDailyCongressionalRecordVolumeNumber<TError = unknown>(
  args: InferRequestType<(typeof client)['daily-congressional-record'][':volumeNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['daily-congressional-record'][':volumeNumber']['$get']>
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
        ? getGetDailyCongressionalRecordVolumeNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['daily-congressional-record'][':volumeNumber']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['daily-congressional-record'][':volumeNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDailyCongressionalRecordVolumeNumber<TError = unknown>(
  args: InferRequestType<(typeof client)['daily-congressional-record'][':volumeNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['daily-congressional-record'][':volumeNumber']['$get']>
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
        ? getGetDailyCongressionalRecordVolumeNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['daily-congressional-record'][':volumeNumber']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['daily-congressional-record'][':volumeNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDailyCongressionalRecordVolumeNumberIssueNumberKey(
  args: InferRequestType<
    (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['$get']
  >,
) {
  return [
    'daily-congressional-record',
    '/daily-congressional-record/:volumeNumber/:issueNumber',
    args,
  ] as const
}

export function useGetDailyCongressionalRecordVolumeNumberIssueNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['$get']
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
        ? getGetDailyCongressionalRecordVolumeNumberIssueNumberKey(args)
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
                (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['$get']
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
          client['daily-congressional-record'][':volumeNumber'][':issueNumber'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDailyCongressionalRecordVolumeNumberIssueNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['$get']
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
        ? getGetDailyCongressionalRecordVolumeNumberIssueNumberKey(args)
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
                (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['$get']
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
          client['daily-congressional-record'][':volumeNumber'][':issueNumber'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDailyCongressionalRecordVolumeNumberIssueNumberArticlesKey(
  args: InferRequestType<
    (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['articles']['$get']
  >,
) {
  return [
    'daily-congressional-record',
    '/daily-congressional-record/:volumeNumber/:issueNumber/articles',
    args,
  ] as const
}

export function useGetDailyCongressionalRecordVolumeNumberIssueNumberArticles<TError = unknown>(
  args: InferRequestType<
    (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['articles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['articles']['$get']
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
        ? getGetDailyCongressionalRecordVolumeNumberIssueNumberArticlesKey(args)
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
                (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['articles']['$get']
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
          client['daily-congressional-record'][':volumeNumber'][':issueNumber'].articles.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDailyCongressionalRecordVolumeNumberIssueNumberArticles<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['articles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['articles']['$get']
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
        ? getGetDailyCongressionalRecordVolumeNumberIssueNumberArticlesKey(args)
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
                (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['articles']['$get']
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
          client['daily-congressional-record'][':volumeNumber'][':issueNumber'].articles.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBoundCongressionalRecordKey(
  args: InferRequestType<(typeof client)['bound-congressional-record']['$get']>,
) {
  return ['bound-congressional-record', '/bound-congressional-record', args] as const
}

export function useGetBoundCongressionalRecord<TError = unknown>(
  args: InferRequestType<(typeof client)['bound-congressional-record']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['bound-congressional-record']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoundCongressionalRecordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['bound-congressional-record']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['bound-congressional-record'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoundCongressionalRecord<TError = unknown>(
  args: InferRequestType<(typeof client)['bound-congressional-record']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['bound-congressional-record']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoundCongressionalRecordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['bound-congressional-record']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['bound-congressional-record'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBoundCongressionalRecordYearKey(
  args: InferRequestType<(typeof client)['bound-congressional-record'][':year']['$get']>,
) {
  return ['bound-congressional-record', '/bound-congressional-record/:year', args] as const
}

export function useGetBoundCongressionalRecordYear<TError = unknown>(
  args: InferRequestType<(typeof client)['bound-congressional-record'][':year']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['bound-congressional-record'][':year']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoundCongressionalRecordYearKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['bound-congressional-record'][':year']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['bound-congressional-record'][':year'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoundCongressionalRecordYear<TError = unknown>(
  args: InferRequestType<(typeof client)['bound-congressional-record'][':year']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['bound-congressional-record'][':year']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoundCongressionalRecordYearKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['bound-congressional-record'][':year']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['bound-congressional-record'][':year'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBoundCongressionalRecordYearMonthKey(
  args: InferRequestType<(typeof client)['bound-congressional-record'][':year'][':month']['$get']>,
) {
  return ['bound-congressional-record', '/bound-congressional-record/:year/:month', args] as const
}

export function useGetBoundCongressionalRecordYearMonth<TError = unknown>(
  args: InferRequestType<(typeof client)['bound-congressional-record'][':year'][':month']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['bound-congressional-record'][':year'][':month']['$get']>
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
        ? getGetBoundCongressionalRecordYearMonthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['bound-congressional-record'][':year'][':month']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['bound-congressional-record'][':year'][':month'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoundCongressionalRecordYearMonth<TError = unknown>(
  args: InferRequestType<(typeof client)['bound-congressional-record'][':year'][':month']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['bound-congressional-record'][':year'][':month']['$get']>
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
        ? getGetBoundCongressionalRecordYearMonthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['bound-congressional-record'][':year'][':month']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['bound-congressional-record'][':year'][':month'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBoundCongressionalRecordYearMonthDayKey(
  args: InferRequestType<
    (typeof client)['bound-congressional-record'][':year'][':month'][':day']['$get']
  >,
) {
  return [
    'bound-congressional-record',
    '/bound-congressional-record/:year/:month/:day',
    args,
  ] as const
}

export function useGetBoundCongressionalRecordYearMonthDay<TError = unknown>(
  args: InferRequestType<
    (typeof client)['bound-congressional-record'][':year'][':month'][':day']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['bound-congressional-record'][':year'][':month'][':day']['$get']
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
        ? getGetBoundCongressionalRecordYearMonthDayKey(args)
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
                (typeof client)['bound-congressional-record'][':year'][':month'][':day']['$get']
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
          client['bound-congressional-record'][':year'][':month'][':day'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoundCongressionalRecordYearMonthDay<TError = unknown>(
  args: InferRequestType<
    (typeof client)['bound-congressional-record'][':year'][':month'][':day']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['bound-congressional-record'][':year'][':month'][':day']['$get']
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
        ? getGetBoundCongressionalRecordYearMonthDayKey(args)
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
                (typeof client)['bound-congressional-record'][':year'][':month'][':day']['$get']
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
          client['bound-congressional-record'][':year'][':month'][':day'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetHouseCommunicationKey(
  args: InferRequestType<(typeof client)['house-communication']['$get']>,
) {
  return ['house-communication', '/house-communication', args] as const
}

export function useGetHouseCommunication<TError = unknown>(
  args: InferRequestType<(typeof client)['house-communication']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['house-communication']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHouseCommunicationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['house-communication']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['house-communication'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHouseCommunication<TError = unknown>(
  args: InferRequestType<(typeof client)['house-communication']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['house-communication']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHouseCommunicationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['house-communication']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['house-communication'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHouseCommunicationCongressKey(
  args: InferRequestType<(typeof client)['house-communication'][':congress']['$get']>,
) {
  return ['house-communication', '/house-communication/:congress', args] as const
}

export function useGetHouseCommunicationCongress<TError = unknown>(
  args: InferRequestType<(typeof client)['house-communication'][':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['house-communication'][':congress']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHouseCommunicationCongressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['house-communication'][':congress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['house-communication'][':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHouseCommunicationCongress<TError = unknown>(
  args: InferRequestType<(typeof client)['house-communication'][':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['house-communication'][':congress']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHouseCommunicationCongressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['house-communication'][':congress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['house-communication'][':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHouseCommunicationCongressCommunicationTypeKey(
  args: InferRequestType<
    (typeof client)['house-communication'][':congress'][':communicationType']['$get']
  >,
) {
  return ['house-communication', '/house-communication/:congress/:communicationType', args] as const
}

export function useGetHouseCommunicationCongressCommunicationType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['house-communication'][':congress'][':communicationType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['house-communication'][':congress'][':communicationType']['$get']
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
        ? getGetHouseCommunicationCongressCommunicationTypeKey(args)
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
                (typeof client)['house-communication'][':congress'][':communicationType']['$get']
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
          client['house-communication'][':congress'][':communicationType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHouseCommunicationCongressCommunicationType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['house-communication'][':congress'][':communicationType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['house-communication'][':congress'][':communicationType']['$get']
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
        ? getGetHouseCommunicationCongressCommunicationTypeKey(args)
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
                (typeof client)['house-communication'][':congress'][':communicationType']['$get']
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
          client['house-communication'][':congress'][':communicationType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetHouseCommunicationCongressCommunicationTypeCommunicationNumberKey(
  args: InferRequestType<
    (typeof client)['house-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
  >,
) {
  return [
    'house-communication',
    '/house-communication/:congress/:communicationType/:communicationNumber',
    args,
  ] as const
}

export function useGetHouseCommunicationCongressCommunicationTypeCommunicationNumber<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['house-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['house-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
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
        ? getGetHouseCommunicationCongressCommunicationTypeCommunicationNumberKey(args)
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
                (typeof client)['house-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
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
          client['house-communication'][':congress'][':communicationType'][
            ':communicationNumber'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHouseCommunicationCongressCommunicationTypeCommunicationNumber<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['house-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['house-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
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
        ? getGetHouseCommunicationCongressCommunicationTypeCommunicationNumberKey(args)
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
                (typeof client)['house-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
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
          client['house-communication'][':congress'][':communicationType'][
            ':communicationNumber'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetHouseRequirementKey(
  args: InferRequestType<(typeof client)['house-requirement']['$get']>,
) {
  return ['house-requirement', '/house-requirement', args] as const
}

export function useGetHouseRequirement<TError = unknown>(
  args: InferRequestType<(typeof client)['house-requirement']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['house-requirement']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHouseRequirementKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['house-requirement']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['house-requirement'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHouseRequirement<TError = unknown>(
  args: InferRequestType<(typeof client)['house-requirement']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['house-requirement']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHouseRequirementKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['house-requirement']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['house-requirement'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHouseRequirementRequirementNumberKey(
  args: InferRequestType<(typeof client)['house-requirement'][':requirementNumber']['$get']>,
) {
  return ['house-requirement', '/house-requirement/:requirementNumber', args] as const
}

export function useGetHouseRequirementRequirementNumber<TError = unknown>(
  args: InferRequestType<(typeof client)['house-requirement'][':requirementNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['house-requirement'][':requirementNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHouseRequirementRequirementNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['house-requirement'][':requirementNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['house-requirement'][':requirementNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHouseRequirementRequirementNumber<TError = unknown>(
  args: InferRequestType<(typeof client)['house-requirement'][':requirementNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['house-requirement'][':requirementNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHouseRequirementRequirementNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['house-requirement'][':requirementNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['house-requirement'][':requirementNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHouseRequirementRequirementNumberMatchingCommunicationsKey(
  args: InferRequestType<
    (typeof client)['house-requirement'][':requirementNumber']['matching-communications']['$get']
  >,
) {
  return [
    'house-requirement',
    '/house-requirement/:requirementNumber/matching-communications',
    args,
  ] as const
}

export function useGetHouseRequirementRequirementNumberMatchingCommunications<TError = unknown>(
  args: InferRequestType<
    (typeof client)['house-requirement'][':requirementNumber']['matching-communications']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['house-requirement'][':requirementNumber']['matching-communications']['$get']
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
        ? getGetHouseRequirementRequirementNumberMatchingCommunicationsKey(args)
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
                (typeof client)['house-requirement'][':requirementNumber']['matching-communications']['$get']
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
          client['house-requirement'][':requirementNumber']['matching-communications'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHouseRequirementRequirementNumberMatchingCommunications<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['house-requirement'][':requirementNumber']['matching-communications']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['house-requirement'][':requirementNumber']['matching-communications']['$get']
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
        ? getGetHouseRequirementRequirementNumberMatchingCommunicationsKey(args)
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
                (typeof client)['house-requirement'][':requirementNumber']['matching-communications']['$get']
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
          client['house-requirement'][':requirementNumber']['matching-communications'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSenateCommunicationKey(
  args: InferRequestType<(typeof client)['senate-communication']['$get']>,
) {
  return ['senate-communication', '/senate-communication', args] as const
}

export function useGetSenateCommunication<TError = unknown>(
  args: InferRequestType<(typeof client)['senate-communication']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['senate-communication']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSenateCommunicationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['senate-communication']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['senate-communication'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSenateCommunication<TError = unknown>(
  args: InferRequestType<(typeof client)['senate-communication']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['senate-communication']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSenateCommunicationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['senate-communication']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['senate-communication'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSenateCommunicationCongressKey(
  args: InferRequestType<(typeof client)['senate-communication'][':congress']['$get']>,
) {
  return ['senate-communication', '/senate-communication/:congress', args] as const
}

export function useGetSenateCommunicationCongress<TError = unknown>(
  args: InferRequestType<(typeof client)['senate-communication'][':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['senate-communication'][':congress']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSenateCommunicationCongressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['senate-communication'][':congress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['senate-communication'][':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSenateCommunicationCongress<TError = unknown>(
  args: InferRequestType<(typeof client)['senate-communication'][':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['senate-communication'][':congress']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSenateCommunicationCongressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['senate-communication'][':congress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['senate-communication'][':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSenateCommunicationCongressCommunicationTypeKey(
  args: InferRequestType<
    (typeof client)['senate-communication'][':congress'][':communicationType']['$get']
  >,
) {
  return [
    'senate-communication',
    '/senate-communication/:congress/:communicationType',
    args,
  ] as const
}

export function useGetSenateCommunicationCongressCommunicationType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['senate-communication'][':congress'][':communicationType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['senate-communication'][':congress'][':communicationType']['$get']
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
        ? getGetSenateCommunicationCongressCommunicationTypeKey(args)
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
                (typeof client)['senate-communication'][':congress'][':communicationType']['$get']
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
          client['senate-communication'][':congress'][':communicationType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSenateCommunicationCongressCommunicationType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['senate-communication'][':congress'][':communicationType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['senate-communication'][':congress'][':communicationType']['$get']
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
        ? getGetSenateCommunicationCongressCommunicationTypeKey(args)
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
                (typeof client)['senate-communication'][':congress'][':communicationType']['$get']
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
          client['senate-communication'][':congress'][':communicationType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSenateCommunicationCongressCommunicationTypeCommunicationNumberKey(
  args: InferRequestType<
    (typeof client)['senate-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
  >,
) {
  return [
    'senate-communication',
    '/senate-communication/:congress/:communicationType/:communicationNumber',
    args,
  ] as const
}

export function useGetSenateCommunicationCongressCommunicationTypeCommunicationNumber<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['senate-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['senate-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
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
        ? getGetSenateCommunicationCongressCommunicationTypeCommunicationNumberKey(args)
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
                (typeof client)['senate-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
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
          client['senate-communication'][':congress'][':communicationType'][
            ':communicationNumber'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSenateCommunicationCongressCommunicationTypeCommunicationNumber<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['senate-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['senate-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
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
        ? getGetSenateCommunicationCongressCommunicationTypeCommunicationNumberKey(args)
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
                (typeof client)['senate-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
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
          client['senate-communication'][':congress'][':communicationType'][
            ':communicationNumber'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNominationKey(args: InferRequestType<typeof client.nomination.$get>) {
  return ['nomination', '/nomination', args] as const
}

export function useGetNomination<TError = unknown>(
  args: InferRequestType<typeof client.nomination.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nomination.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNominationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nomination.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nomination.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNomination<TError = unknown>(
  args: InferRequestType<typeof client.nomination.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nomination.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNominationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nomination.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nomination.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNominationCongressKey(
  args: InferRequestType<(typeof client.nomination)[':congress']['$get']>,
) {
  return ['nomination', '/nomination/:congress', args] as const
}

export function useGetNominationCongress<TError = unknown>(
  args: InferRequestType<(typeof client.nomination)[':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nomination)[':congress']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNominationCongressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nomination)[':congress']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nomination[':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNominationCongress<TError = unknown>(
  args: InferRequestType<(typeof client.nomination)[':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nomination)[':congress']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNominationCongressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nomination)[':congress']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nomination[':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNominationCongressNominationNumberKey(
  args: InferRequestType<(typeof client.nomination)[':congress'][':nominationNumber']['$get']>,
) {
  return ['nomination', '/nomination/:congress/:nominationNumber', args] as const
}

export function useGetNominationCongressNominationNumber<TError = unknown>(
  args: InferRequestType<(typeof client.nomination)[':congress'][':nominationNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.nomination)[':congress'][':nominationNumber']['$get']>
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
        ? getGetNominationCongressNominationNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.nomination)[':congress'][':nominationNumber']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.nomination[':congress'][':nominationNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNominationCongressNominationNumber<TError = unknown>(
  args: InferRequestType<(typeof client.nomination)[':congress'][':nominationNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.nomination)[':congress'][':nominationNumber']['$get']>
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
        ? getGetNominationCongressNominationNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.nomination)[':congress'][':nominationNumber']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.nomination[':congress'][':nominationNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNominationCongressNominationNumberOrdinalKey(
  args: InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber'][':ordinal']['$get']
  >,
) {
  return ['nomination', '/nomination/:congress/:nominationNumber/:ordinal', args] as const
}

export function useGetNominationCongressNominationNumberOrdinal<TError = unknown>(
  args: InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber'][':ordinal']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nomination)[':congress'][':nominationNumber'][':ordinal']['$get']
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
        ? getGetNominationCongressNominationNumberOrdinalKey(args)
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
                (typeof client.nomination)[':congress'][':nominationNumber'][':ordinal']['$get']
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
          client.nomination[':congress'][':nominationNumber'][':ordinal'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNominationCongressNominationNumberOrdinal<TError = unknown>(
  args: InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber'][':ordinal']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nomination)[':congress'][':nominationNumber'][':ordinal']['$get']
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
        ? getGetNominationCongressNominationNumberOrdinalKey(args)
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
                (typeof client.nomination)[':congress'][':nominationNumber'][':ordinal']['$get']
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
          client.nomination[':congress'][':nominationNumber'][':ordinal'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNominationCongressNominationNumberActionsKey(
  args: InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber']['actions']['$get']
  >,
) {
  return ['nomination', '/nomination/:congress/:nominationNumber/actions', args] as const
}

export function useGetNominationCongressNominationNumberActions<TError = unknown>(
  args: InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber']['actions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nomination)[':congress'][':nominationNumber']['actions']['$get']
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
        ? getGetNominationCongressNominationNumberActionsKey(args)
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
                (typeof client.nomination)[':congress'][':nominationNumber']['actions']['$get']
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
          client.nomination[':congress'][':nominationNumber'].actions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNominationCongressNominationNumberActions<TError = unknown>(
  args: InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber']['actions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nomination)[':congress'][':nominationNumber']['actions']['$get']
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
        ? getGetNominationCongressNominationNumberActionsKey(args)
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
                (typeof client.nomination)[':congress'][':nominationNumber']['actions']['$get']
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
          client.nomination[':congress'][':nominationNumber'].actions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNominationCongressNominationNumberCommitteesKey(
  args: InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber']['committees']['$get']
  >,
) {
  return ['nomination', '/nomination/:congress/:nominationNumber/committees', args] as const
}

export function useGetNominationCongressNominationNumberCommittees<TError = unknown>(
  args: InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber']['committees']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nomination)[':congress'][':nominationNumber']['committees']['$get']
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
        ? getGetNominationCongressNominationNumberCommitteesKey(args)
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
                (typeof client.nomination)[':congress'][':nominationNumber']['committees']['$get']
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
          client.nomination[':congress'][':nominationNumber'].committees.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNominationCongressNominationNumberCommittees<TError = unknown>(
  args: InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber']['committees']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nomination)[':congress'][':nominationNumber']['committees']['$get']
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
        ? getGetNominationCongressNominationNumberCommitteesKey(args)
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
                (typeof client.nomination)[':congress'][':nominationNumber']['committees']['$get']
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
          client.nomination[':congress'][':nominationNumber'].committees.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNominationCongressNominationNumberHearingsKey(
  args: InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber']['hearings']['$get']
  >,
) {
  return ['nomination', '/nomination/:congress/:nominationNumber/hearings', args] as const
}

export function useGetNominationCongressNominationNumberHearings<TError = unknown>(
  args: InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber']['hearings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nomination)[':congress'][':nominationNumber']['hearings']['$get']
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
        ? getGetNominationCongressNominationNumberHearingsKey(args)
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
                (typeof client.nomination)[':congress'][':nominationNumber']['hearings']['$get']
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
          client.nomination[':congress'][':nominationNumber'].hearings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNominationCongressNominationNumberHearings<TError = unknown>(
  args: InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber']['hearings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nomination)[':congress'][':nominationNumber']['hearings']['$get']
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
        ? getGetNominationCongressNominationNumberHearingsKey(args)
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
                (typeof client.nomination)[':congress'][':nominationNumber']['hearings']['$get']
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
          client.nomination[':congress'][':nominationNumber'].hearings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCrsreportKey(args: InferRequestType<typeof client.crsreport.$get>) {
  return ['crsreport', '/crsreport', args] as const
}

export function useGetCrsreport<TError = unknown>(
  args: InferRequestType<typeof client.crsreport.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsreport.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCrsreportKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsreport.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crsreport.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrsreport<TError = unknown>(
  args: InferRequestType<typeof client.crsreport.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsreport.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCrsreportKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsreport.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crsreport.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCrsreportReportNumberKey(
  args: InferRequestType<(typeof client.crsreport)[':reportNumber']['$get']>,
) {
  return ['crsreport', '/crsreport/:reportNumber', args] as const
}

export function useGetCrsreportReportNumber<TError = unknown>(
  args: InferRequestType<(typeof client.crsreport)[':reportNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crsreport)[':reportNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrsreportReportNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crsreport)[':reportNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crsreport[':reportNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrsreportReportNumber<TError = unknown>(
  args: InferRequestType<(typeof client.crsreport)[':reportNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crsreport)[':reportNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrsreportReportNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crsreport)[':reportNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crsreport[':reportNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTreatyKey(args: InferRequestType<typeof client.treaty.$get>) {
  return ['treaty', '/treaty', args] as const
}

export function useGetTreaty<TError = unknown>(
  args: InferRequestType<typeof client.treaty.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.treaty.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTreatyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.treaty.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.treaty.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTreaty<TError = unknown>(
  args: InferRequestType<typeof client.treaty.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.treaty.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTreatyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.treaty.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.treaty.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetTreatyCongressKey(
  args: InferRequestType<(typeof client.treaty)[':congress']['$get']>,
) {
  return ['treaty', '/treaty/:congress', args] as const
}

export function useGetTreatyCongress<TError = unknown>(
  args: InferRequestType<(typeof client.treaty)[':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.treaty)[':congress']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTreatyCongressKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.treaty)[':congress']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.treaty[':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTreatyCongress<TError = unknown>(
  args: InferRequestType<(typeof client.treaty)[':congress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.treaty)[':congress']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTreatyCongressKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.treaty)[':congress']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.treaty[':congress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTreatyCongressTreatyNumberKey(
  args: InferRequestType<(typeof client.treaty)[':congress'][':treatyNumber']['$get']>,
) {
  return ['treaty', '/treaty/:congress/:treatyNumber', args] as const
}

export function useGetTreatyCongressTreatyNumber<TError = unknown>(
  args: InferRequestType<(typeof client.treaty)[':congress'][':treatyNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.treaty)[':congress'][':treatyNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTreatyCongressTreatyNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.treaty)[':congress'][':treatyNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.treaty[':congress'][':treatyNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTreatyCongressTreatyNumber<TError = unknown>(
  args: InferRequestType<(typeof client.treaty)[':congress'][':treatyNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.treaty)[':congress'][':treatyNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTreatyCongressTreatyNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.treaty)[':congress'][':treatyNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.treaty[':congress'][':treatyNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTreatyCongressTreatyNumberTreatySuffixKey(
  args: InferRequestType<
    (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['$get']
  >,
) {
  return ['treaty', '/treaty/:congress/:treatyNumber/:treatySuffix', args] as const
}

export function useGetTreatyCongressTreatyNumberTreatySuffix<TError = unknown>(
  args: InferRequestType<
    (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['$get']
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
        ? getGetTreatyCongressTreatyNumberTreatySuffixKey(args)
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
                (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['$get']
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
          client.treaty[':congress'][':treatyNumber'][':treatySuffix'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTreatyCongressTreatyNumberTreatySuffix<TError = unknown>(
  args: InferRequestType<
    (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['$get']
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
        ? getGetTreatyCongressTreatyNumberTreatySuffixKey(args)
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
                (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['$get']
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
          client.treaty[':congress'][':treatyNumber'][':treatySuffix'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTreatyCongressTreatyNumberActionsKey(
  args: InferRequestType<(typeof client.treaty)[':congress'][':treatyNumber']['actions']['$get']>,
) {
  return ['treaty', '/treaty/:congress/:treatyNumber/actions', args] as const
}

export function useGetTreatyCongressTreatyNumberActions<TError = unknown>(
  args: InferRequestType<(typeof client.treaty)[':congress'][':treatyNumber']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.treaty)[':congress'][':treatyNumber']['actions']['$get']>
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
        ? getGetTreatyCongressTreatyNumberActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.treaty)[':congress'][':treatyNumber']['actions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.treaty[':congress'][':treatyNumber'].actions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTreatyCongressTreatyNumberActions<TError = unknown>(
  args: InferRequestType<(typeof client.treaty)[':congress'][':treatyNumber']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.treaty)[':congress'][':treatyNumber']['actions']['$get']>
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
        ? getGetTreatyCongressTreatyNumberActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.treaty)[':congress'][':treatyNumber']['actions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.treaty[':congress'][':treatyNumber'].actions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTreatyCongressTreatyNumberTreatySuffixActionsKey(
  args: InferRequestType<
    (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['actions']['$get']
  >,
) {
  return ['treaty', '/treaty/:congress/:treatyNumber/:treatySuffix/actions', args] as const
}

export function useGetTreatyCongressTreatyNumberTreatySuffixActions<TError = unknown>(
  args: InferRequestType<
    (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['actions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['actions']['$get']
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
        ? getGetTreatyCongressTreatyNumberTreatySuffixActionsKey(args)
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
                (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['actions']['$get']
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
          client.treaty[':congress'][':treatyNumber'][':treatySuffix'].actions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTreatyCongressTreatyNumberTreatySuffixActions<TError = unknown>(
  args: InferRequestType<
    (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['actions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['actions']['$get']
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
        ? getGetTreatyCongressTreatyNumberTreatySuffixActionsKey(args)
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
                (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['actions']['$get']
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
          client.treaty[':congress'][':treatyNumber'][':treatySuffix'].actions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTreatyCongressTreatyNumberCommitteesKey(
  args: InferRequestType<
    (typeof client.treaty)[':congress'][':treatyNumber']['committees']['$get']
  >,
) {
  return ['treaty', '/treaty/:congress/:treatyNumber/committees', args] as const
}

export function useGetTreatyCongressTreatyNumberCommittees<TError = unknown>(
  args: InferRequestType<
    (typeof client.treaty)[':congress'][':treatyNumber']['committees']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.treaty)[':congress'][':treatyNumber']['committees']['$get']>
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
        ? getGetTreatyCongressTreatyNumberCommitteesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.treaty)[':congress'][':treatyNumber']['committees']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.treaty[':congress'][':treatyNumber'].committees.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTreatyCongressTreatyNumberCommittees<TError = unknown>(
  args: InferRequestType<
    (typeof client.treaty)[':congress'][':treatyNumber']['committees']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.treaty)[':congress'][':treatyNumber']['committees']['$get']>
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
        ? getGetTreatyCongressTreatyNumberCommitteesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.treaty)[':congress'][':treatyNumber']['committees']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.treaty[':congress'][':treatyNumber'].committees.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
