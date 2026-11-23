import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getGetV2CustomerShortNameBranchBranchesKey(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['branch']['branches']['$get']>,
) {
  return ['v2', '/v2/customer/:shortName/branch/branches', args] as const
}

export function useGetV2CustomerShortNameBranchBranches<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['branch']['branches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['branch']['branches']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CustomerShortNameBranchBranchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['branch']['branches']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customer[':shortName'].branch.branches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomerShortNameBranchBranches<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['branch']['branches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['branch']['branches']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CustomerShortNameBranchBranchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['branch']['branches']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customer[':shortName'].branch.branches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomerShortNameBranchBranchesBranchIDKey(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['branch']['branches'][':branchID']['$get']
  >,
) {
  return ['v2', '/v2/customer/:shortName/branch/branches/:branchID', args] as const
}

export function useGetV2CustomerShortNameBranchBranchesBranchID<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['branch']['branches'][':branchID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customer)[':shortName']['branch']['branches'][':branchID']['$get']
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
        ? getGetV2CustomerShortNameBranchBranchesBranchIDKey(args)
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
                (typeof client.v2.customer)[':shortName']['branch']['branches'][':branchID']['$get']
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
          client.v2.customer[':shortName'].branch.branches[':branchID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomerShortNameBranchBranchesBranchID<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['branch']['branches'][':branchID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customer)[':shortName']['branch']['branches'][':branchID']['$get']
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
        ? getGetV2CustomerShortNameBranchBranchesBranchIDKey(args)
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
                (typeof client.v2.customer)[':shortName']['branch']['branches'][':branchID']['$get']
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
          client.v2.customer[':shortName'].branch.branches[':branchID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomerShortNameLandlordAccountingKey(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['accounting']['$get']
  >,
) {
  return ['v2', '/v2/customer/:shortName/landlord/accounting', args] as const
}

export function useGetV2CustomerShortNameLandlordAccounting<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['accounting']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customer)[':shortName']['landlord']['accounting']['$get']
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
        ? getGetV2CustomerShortNameLandlordAccountingKey(args)
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
                (typeof client.v2.customer)[':shortName']['landlord']['accounting']['$get']
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
          client.v2.customer[':shortName'].landlord.accounting.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomerShortNameLandlordAccounting<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['accounting']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customer)[':shortName']['landlord']['accounting']['$get']
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
        ? getGetV2CustomerShortNameLandlordAccountingKey(args)
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
                (typeof client.v2.customer)[':shortName']['landlord']['accounting']['$get']
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
          client.v2.customer[':shortName'].landlord.accounting.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomerShortNameLandlordDocumentKey(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['document']['$get']>,
) {
  return ['v2', '/v2/customer/:shortName/landlord/document', args] as const
}

export function useGetV2CustomerShortNameLandlordDocument<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['document']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['document']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CustomerShortNameLandlordDocumentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['document']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customer[':shortName'].landlord.document.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomerShortNameLandlordDocument<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['document']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['document']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CustomerShortNameLandlordDocumentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['document']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customer[':shortName'].landlord.document.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomerShortNameLandlordInventoryKey(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['inventory']['$get']
  >,
) {
  return ['v2', '/v2/customer/:shortName/landlord/inventory', args] as const
}

export function useGetV2CustomerShortNameLandlordInventory<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['inventory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['inventory']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CustomerShortNameLandlordInventoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['inventory']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.customer[':shortName'].landlord.inventory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomerShortNameLandlordInventory<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['inventory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['inventory']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CustomerShortNameLandlordInventoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['inventory']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.customer[':shortName'].landlord.inventory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomerShortNameLandlordInvoiceKey(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['invoice']['$get']>,
) {
  return ['v2', '/v2/customer/:shortName/landlord/invoice', args] as const
}

export function useGetV2CustomerShortNameLandlordInvoice<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['invoice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['invoice']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CustomerShortNameLandlordInvoiceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['invoice']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customer[':shortName'].landlord.invoice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomerShortNameLandlordInvoice<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['invoice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['invoice']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CustomerShortNameLandlordInvoiceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['invoice']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customer[':shortName'].landlord.invoice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomerShortNameLandlordLandlordcrmentriesKey(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['landlordcrmentries']['$get']
  >,
) {
  return ['v2', '/v2/customer/:shortName/landlord/landlordcrmentries', args] as const
}

export function useGetV2CustomerShortNameLandlordLandlordcrmentries<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['landlordcrmentries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customer)[':shortName']['landlord']['landlordcrmentries']['$get']
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
        ? getGetV2CustomerShortNameLandlordLandlordcrmentriesKey(args)
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
                (typeof client.v2.customer)[':shortName']['landlord']['landlordcrmentries']['$get']
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
          client.v2.customer[':shortName'].landlord.landlordcrmentries.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomerShortNameLandlordLandlordcrmentries<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['landlordcrmentries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customer)[':shortName']['landlord']['landlordcrmentries']['$get']
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
        ? getGetV2CustomerShortNameLandlordLandlordcrmentriesKey(args)
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
                (typeof client.v2.customer)[':shortName']['landlord']['landlordcrmentries']['$get']
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
          client.v2.customer[':shortName'].landlord.landlordcrmentries.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomerShortNameLandlordMaintenanceKey(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['maintenance']['$get']
  >,
) {
  return ['v2', '/v2/customer/:shortName/landlord/maintenance', args] as const
}

export function useGetV2CustomerShortNameLandlordMaintenance<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['maintenance']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customer)[':shortName']['landlord']['maintenance']['$get']
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
        ? getGetV2CustomerShortNameLandlordMaintenanceKey(args)
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
                (typeof client.v2.customer)[':shortName']['landlord']['maintenance']['$get']
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
          client.v2.customer[':shortName'].landlord.maintenance.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomerShortNameLandlordMaintenance<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['maintenance']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customer)[':shortName']['landlord']['maintenance']['$get']
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
        ? getGetV2CustomerShortNameLandlordMaintenanceKey(args)
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
                (typeof client.v2.customer)[':shortName']['landlord']['maintenance']['$get']
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
          client.v2.customer[':shortName'].landlord.maintenance.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomerShortNameLandlordProfitlossKey(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['profitloss']['$get']
  >,
) {
  return ['v2', '/v2/customer/:shortName/landlord/profitloss', args] as const
}

export function useGetV2CustomerShortNameLandlordProfitloss<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['profitloss']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customer)[':shortName']['landlord']['profitloss']['$get']
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
        ? getGetV2CustomerShortNameLandlordProfitlossKey(args)
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
                (typeof client.v2.customer)[':shortName']['landlord']['profitloss']['$get']
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
          client.v2.customer[':shortName'].landlord.profitloss.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomerShortNameLandlordProfitloss<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['profitloss']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customer)[':shortName']['landlord']['profitloss']['$get']
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
        ? getGetV2CustomerShortNameLandlordProfitlossKey(args)
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
                (typeof client.v2.customer)[':shortName']['landlord']['profitloss']['$get']
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
          client.v2.customer[':shortName'].landlord.profitloss.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomerShortNameLandlordRentarrearsKey(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['rentarrears']['$get']
  >,
) {
  return ['v2', '/v2/customer/:shortName/landlord/rentarrears', args] as const
}

export function useGetV2CustomerShortNameLandlordRentarrears<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['rentarrears']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customer)[':shortName']['landlord']['rentarrears']['$get']
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
        ? getGetV2CustomerShortNameLandlordRentarrearsKey(args)
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
                (typeof client.v2.customer)[':shortName']['landlord']['rentarrears']['$get']
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
          client.v2.customer[':shortName'].landlord.rentarrears.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomerShortNameLandlordRentarrears<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['rentarrears']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customer)[':shortName']['landlord']['rentarrears']['$get']
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
        ? getGetV2CustomerShortNameLandlordRentarrearsKey(args)
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
                (typeof client.v2.customer)[':shortName']['landlord']['rentarrears']['$get']
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
          client.v2.customer[':shortName'].landlord.rentarrears.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomerShortNameLandlordSasKey(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['sas']['$get']>,
) {
  return ['v2', '/v2/customer/:shortName/landlord/sas', args] as const
}

export function useGetV2CustomerShortNameLandlordSas<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['sas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['sas']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CustomerShortNameLandlordSasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['sas']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customer[':shortName'].landlord.sas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomerShortNameLandlordSas<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['sas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['sas']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CustomerShortNameLandlordSasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['sas']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customer[':shortName'].landlord.sas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomerShortNameLandlordSettingsKey(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['settings']['$get']>,
) {
  return ['v2', '/v2/customer/:shortName/landlord/settings', args] as const
}

export function useGetV2CustomerShortNameLandlordSettings<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['settings']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CustomerShortNameLandlordSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customer[':shortName'].landlord.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomerShortNameLandlordSettings<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['settings']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CustomerShortNameLandlordSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customer[':shortName'].landlord.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomerShortNameLandlordSummaryKey(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['summary']['$get']>,
) {
  return ['v2', '/v2/customer/:shortName/landlord/summary', args] as const
}

export function useGetV2CustomerShortNameLandlordSummary<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['summary']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CustomerShortNameLandlordSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['summary']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customer[':shortName'].landlord.summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomerShortNameLandlordSummary<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['summary']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CustomerShortNameLandlordSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['summary']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customer[':shortName'].landlord.summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomerShortNameLandlordTenancyKey(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['tenancy']['$get']>,
) {
  return ['v2', '/v2/customer/:shortName/landlord/tenancy', args] as const
}

export function useGetV2CustomerShortNameLandlordTenancy<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['tenancy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['tenancy']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CustomerShortNameLandlordTenancyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['tenancy']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customer[':shortName'].landlord.tenancy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomerShortNameLandlordTenancy<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['tenancy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['tenancy']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CustomerShortNameLandlordTenancyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['tenancy']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customer[':shortName'].landlord.tenancy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2CustomerShortNameLandlordTenancyMaintenancePreferenceKey() {
  return ['v2', '/v2/customer/:shortName/landlord/tenancy/maintenance/preference', 'POST'] as const
}

export function usePostV2CustomerShortNameLandlordTenancyMaintenancePreference<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.customer)[':shortName']['landlord']['tenancy']['maintenance']['preference']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.customer)[':shortName']['landlord']['tenancy']['maintenance']['preference']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CustomerShortNameLandlordTenancyMaintenancePreferenceKey()
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
            (typeof client.v2.customer)[':shortName']['landlord']['tenancy']['maintenance']['preference']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.customer[':shortName'].landlord.tenancy.maintenance.preference.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2CustomerShortNameLandlordTenancyagreementKey(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['tenancyagreement']['$get']
  >,
) {
  return ['v2', '/v2/customer/:shortName/landlord/tenancyagreement', args] as const
}

export function useGetV2CustomerShortNameLandlordTenancyagreement<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['tenancyagreement']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customer)[':shortName']['landlord']['tenancyagreement']['$get']
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
        ? getGetV2CustomerShortNameLandlordTenancyagreementKey(args)
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
                (typeof client.v2.customer)[':shortName']['landlord']['tenancyagreement']['$get']
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
          client.v2.customer[':shortName'].landlord.tenancyagreement.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomerShortNameLandlordTenancyagreement<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['tenancyagreement']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customer)[':shortName']['landlord']['tenancyagreement']['$get']
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
        ? getGetV2CustomerShortNameLandlordTenancyagreementKey(args)
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
                (typeof client.v2.customer)[':shortName']['landlord']['tenancyagreement']['$get']
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
          client.v2.customer[':shortName'].landlord.tenancyagreement.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomerShortNamePhotoDownloadKey(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['photo']['download']['$get']>,
) {
  return ['v2', '/v2/customer/:shortName/photo/download', args] as const
}

export function useGetV2CustomerShortNamePhotoDownload<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['photo']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['photo']['download']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CustomerShortNamePhotoDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['photo']['download']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customer[':shortName'].photo.download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomerShortNamePhotoDownload<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['photo']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['photo']['download']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CustomerShortNamePhotoDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['photo']['download']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customer[':shortName'].photo.download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomerShortNamePropertyPropertyIDPhotosKey(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['property'][':propertyID']['photos']['$get']
  >,
) {
  return ['v2', '/v2/customer/:shortName/property/:propertyID/photos', args] as const
}

export function useGetV2CustomerShortNamePropertyPropertyIDPhotos<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['property'][':propertyID']['photos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customer)[':shortName']['property'][':propertyID']['photos']['$get']
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
        ? getGetV2CustomerShortNamePropertyPropertyIDPhotosKey(args)
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
                (typeof client.v2.customer)[':shortName']['property'][':propertyID']['photos']['$get']
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
          client.v2.customer[':shortName'].property[':propertyID'].photos.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomerShortNamePropertyPropertyIDPhotos<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['property'][':propertyID']['photos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customer)[':shortName']['property'][':propertyID']['photos']['$get']
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
        ? getGetV2CustomerShortNamePropertyPropertyIDPhotosKey(args)
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
                (typeof client.v2.customer)[':shortName']['property'][':propertyID']['photos']['$get']
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
          client.v2.customer[':shortName'].property[':propertyID'].photos.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomerShortNameSessionKey(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['session']['$get']>,
) {
  return ['v2', '/v2/customer/:shortName/session', args] as const
}

export function useGetV2CustomerShortNameSession<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['session']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customer)[':shortName']['session']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CustomerShortNameSessionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customer)[':shortName']['session']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customer[':shortName'].session.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomerShortNameSession<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['session']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customer)[':shortName']['session']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CustomerShortNameSessionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customer)[':shortName']['session']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customer[':shortName'].session.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2CustomerShortNameSessionKey() {
  return ['v2', '/v2/customer/:shortName/session', 'POST'] as const
}

export function usePostV2CustomerShortNameSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customer)[':shortName']['session']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.customer)[':shortName']['session']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CustomerShortNameSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.customer)[':shortName']['session']['$post']> },
      ) => parseResponse(client.v2.customer[':shortName'].session.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2CustomerShortNameSessionKey() {
  return ['v2', '/v2/customer/:shortName/session', 'DELETE'] as const
}

export function useDeleteV2CustomerShortNameSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customer)[':shortName']['session']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.customer)[':shortName']['session']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2CustomerShortNameSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.customer)[':shortName']['session']['$delete']>
        },
      ) => parseResponse(client.v2.customer[':shortName'].session.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2CustomerShortNameSessionCreatelandlordloginKey() {
  return ['v2', '/v2/customer/:shortName/session/createlandlordlogin', 'POST'] as const
}

export function usePostV2CustomerShortNameSessionCreatelandlordlogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customer)[':shortName']['session']['createlandlordlogin']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.customer)[':shortName']['session']['createlandlordlogin']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CustomerShortNameSessionCreatelandlordloginKey()
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
            (typeof client.v2.customer)[':shortName']['session']['createlandlordlogin']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.customer[':shortName'].session.createlandlordlogin.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2CustomerShortNameSessionPasswordKey() {
  return ['v2', '/v2/customer/:shortName/session/password', 'PUT'] as const
}

export function usePutV2CustomerShortNameSessionPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customer)[':shortName']['session']['password']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.customer)[':shortName']['session']['password']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2CustomerShortNameSessionPasswordKey()
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
            (typeof client.v2.customer)[':shortName']['session']['password']['$put']
          >
        },
      ) =>
        parseResponse(client.v2.customer[':shortName'].session.password.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2CustomerShortNameSessionResetpasswordKey() {
  return ['v2', '/v2/customer/:shortName/session/resetpassword', 'POST'] as const
}

export function usePostV2CustomerShortNameSessionResetpassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customer)[':shortName']['session']['resetpassword']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.customer)[':shortName']['session']['resetpassword']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CustomerShortNameSessionResetpasswordKey()
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
            (typeof client.v2.customer)[':shortName']['session']['resetpassword']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.customer[':shortName'].session.resetpassword.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
