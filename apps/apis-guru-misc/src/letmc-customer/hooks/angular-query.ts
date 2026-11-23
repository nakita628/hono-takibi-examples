import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getV2CustomerShortNameBranchBranchesQueryKey(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['branch']['branches']['$get']>,
) {
  return ['v2', '/v2/customer/:shortName/branch/branches', args] as const
}

export function getV2CustomerShortNameBranchBranchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customer)[':shortName']['branch']['branches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['branch']['branches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.customer)[':shortName']['branch']['branches']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomerShortNameBranchBranchesQueryKey>
  >({
    queryKey: getV2CustomerShortNameBranchBranchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customer[':shortName'].branch.branches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomerShortNameBranchBranches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customer)[':shortName']['branch']['branches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.customer)[':shortName']['branch']['branches']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.customer)[':shortName']['branch']['branches']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomerShortNameBranchBranchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2CustomerShortNameBranchBranchesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2CustomerShortNameBranchBranchesBranchIDQueryKey(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['branch']['branches'][':branchID']['$get']
  >,
) {
  return ['v2', '/v2/customer/:shortName/branch/branches/:branchID', args] as const
}

export function getV2CustomerShortNameBranchBranchesBranchIDQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['branch']['branches'][':branchID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2CustomerShortNameBranchBranchesBranchIDQueryKey>
  >({
    queryKey: getV2CustomerShortNameBranchBranchesBranchIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customer[':shortName'].branch.branches[':branchID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomerShortNameBranchBranchesBranchID<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.customer)[':shortName']['branch']['branches'][':branchID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2CustomerShortNameBranchBranchesBranchIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2CustomerShortNameBranchBranchesBranchIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2CustomerShortNameLandlordAccountingQueryKey(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['accounting']['$get']
  >,
) {
  return ['v2', '/v2/customer/:shortName/landlord/accounting', args] as const
}

export function getV2CustomerShortNameLandlordAccountingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['accounting']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['accounting']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['accounting']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomerShortNameLandlordAccountingQueryKey>
  >({
    queryKey: getV2CustomerShortNameLandlordAccountingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customer[':shortName'].landlord.accounting.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomerShortNameLandlordAccounting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['accounting']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['accounting']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2CustomerShortNameLandlordAccountingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2CustomerShortNameLandlordAccountingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2CustomerShortNameLandlordDocumentQueryKey(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['document']['$get']>,
) {
  return ['v2', '/v2/customer/:shortName/landlord/document', args] as const
}

export function getV2CustomerShortNameLandlordDocumentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['document']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['document']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['document']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomerShortNameLandlordDocumentQueryKey>
  >({
    queryKey: getV2CustomerShortNameLandlordDocumentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customer[':shortName'].landlord.document.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomerShortNameLandlordDocument<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['document']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['document']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.customer)[':shortName']['landlord']['document']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomerShortNameLandlordDocumentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2CustomerShortNameLandlordDocumentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2CustomerShortNameLandlordInventoryQueryKey(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['inventory']['$get']
  >,
) {
  return ['v2', '/v2/customer/:shortName/landlord/inventory', args] as const
}

export function getV2CustomerShortNameLandlordInventoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['inventory']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['inventory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['inventory']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomerShortNameLandlordInventoryQueryKey>
  >({
    queryKey: getV2CustomerShortNameLandlordInventoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customer[':shortName'].landlord.inventory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomerShortNameLandlordInventory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['inventory']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['inventory']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.customer)[':shortName']['landlord']['inventory']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomerShortNameLandlordInventoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2CustomerShortNameLandlordInventoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2CustomerShortNameLandlordInvoiceQueryKey(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['invoice']['$get']>,
) {
  return ['v2', '/v2/customer/:shortName/landlord/invoice', args] as const
}

export function getV2CustomerShortNameLandlordInvoiceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['invoice']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['invoice']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['invoice']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomerShortNameLandlordInvoiceQueryKey>
  >({
    queryKey: getV2CustomerShortNameLandlordInvoiceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customer[':shortName'].landlord.invoice.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomerShortNameLandlordInvoice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['invoice']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['invoice']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['invoice']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomerShortNameLandlordInvoiceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2CustomerShortNameLandlordInvoiceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2CustomerShortNameLandlordLandlordcrmentriesQueryKey(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['landlordcrmentries']['$get']
  >,
) {
  return ['v2', '/v2/customer/:shortName/landlord/landlordcrmentries', args] as const
}

export function getV2CustomerShortNameLandlordLandlordcrmentriesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['landlordcrmentries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2CustomerShortNameLandlordLandlordcrmentriesQueryKey>
  >({
    queryKey: getV2CustomerShortNameLandlordLandlordcrmentriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customer[':shortName'].landlord.landlordcrmentries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomerShortNameLandlordLandlordcrmentries<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['landlordcrmentries']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2CustomerShortNameLandlordLandlordcrmentriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2CustomerShortNameLandlordLandlordcrmentriesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2CustomerShortNameLandlordMaintenanceQueryKey(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['maintenance']['$get']
  >,
) {
  return ['v2', '/v2/customer/:shortName/landlord/maintenance', args] as const
}

export function getV2CustomerShortNameLandlordMaintenanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['maintenance']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['maintenance']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['maintenance']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomerShortNameLandlordMaintenanceQueryKey>
  >({
    queryKey: getV2CustomerShortNameLandlordMaintenanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customer[':shortName'].landlord.maintenance.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomerShortNameLandlordMaintenance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['maintenance']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['maintenance']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2CustomerShortNameLandlordMaintenanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2CustomerShortNameLandlordMaintenanceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2CustomerShortNameLandlordProfitlossQueryKey(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['profitloss']['$get']
  >,
) {
  return ['v2', '/v2/customer/:shortName/landlord/profitloss', args] as const
}

export function getV2CustomerShortNameLandlordProfitlossQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['profitloss']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['profitloss']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['profitloss']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomerShortNameLandlordProfitlossQueryKey>
  >({
    queryKey: getV2CustomerShortNameLandlordProfitlossQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customer[':shortName'].landlord.profitloss.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomerShortNameLandlordProfitloss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['profitloss']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['profitloss']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2CustomerShortNameLandlordProfitlossQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2CustomerShortNameLandlordProfitlossQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2CustomerShortNameLandlordRentarrearsQueryKey(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['rentarrears']['$get']
  >,
) {
  return ['v2', '/v2/customer/:shortName/landlord/rentarrears', args] as const
}

export function getV2CustomerShortNameLandlordRentarrearsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['rentarrears']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['rentarrears']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['rentarrears']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomerShortNameLandlordRentarrearsQueryKey>
  >({
    queryKey: getV2CustomerShortNameLandlordRentarrearsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customer[':shortName'].landlord.rentarrears.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomerShortNameLandlordRentarrears<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['rentarrears']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['rentarrears']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2CustomerShortNameLandlordRentarrearsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2CustomerShortNameLandlordRentarrearsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2CustomerShortNameLandlordSasQueryKey(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['sas']['$get']>,
) {
  return ['v2', '/v2/customer/:shortName/landlord/sas', args] as const
}

export function getV2CustomerShortNameLandlordSasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['sas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['sas']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['sas']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomerShortNameLandlordSasQueryKey>
  >({
    queryKey: getV2CustomerShortNameLandlordSasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customer[':shortName'].landlord.sas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomerShortNameLandlordSas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['sas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['sas']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['sas']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomerShortNameLandlordSasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2CustomerShortNameLandlordSasQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2CustomerShortNameLandlordSettingsQueryKey(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['settings']['$get']>,
) {
  return ['v2', '/v2/customer/:shortName/landlord/settings', args] as const
}

export function getV2CustomerShortNameLandlordSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['settings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomerShortNameLandlordSettingsQueryKey>
  >({
    queryKey: getV2CustomerShortNameLandlordSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customer[':shortName'].landlord.settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomerShortNameLandlordSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['settings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.customer)[':shortName']['landlord']['settings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomerShortNameLandlordSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2CustomerShortNameLandlordSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2CustomerShortNameLandlordSummaryQueryKey(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['summary']['$get']>,
) {
  return ['v2', '/v2/customer/:shortName/landlord/summary', args] as const
}

export function getV2CustomerShortNameLandlordSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['summary']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['summary']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomerShortNameLandlordSummaryQueryKey>
  >({
    queryKey: getV2CustomerShortNameLandlordSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customer[':shortName'].landlord.summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomerShortNameLandlordSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['summary']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['summary']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['summary']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomerShortNameLandlordSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2CustomerShortNameLandlordSummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2CustomerShortNameLandlordTenancyQueryKey(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['tenancy']['$get']>,
) {
  return ['v2', '/v2/customer/:shortName/landlord/tenancy', args] as const
}

export function getV2CustomerShortNameLandlordTenancyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['tenancy']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['tenancy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['tenancy']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomerShortNameLandlordTenancyQueryKey>
  >({
    queryKey: getV2CustomerShortNameLandlordTenancyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customer[':shortName'].landlord.tenancy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomerShortNameLandlordTenancy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['tenancy']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['tenancy']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['tenancy']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomerShortNameLandlordTenancyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2CustomerShortNameLandlordTenancyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2CustomerShortNameLandlordTenancyMaintenancePreferenceMutationKey() {
  return ['v2', '/v2/customer/:shortName/landlord/tenancy/maintenance/preference', 'POST'] as const
}

export function getPostV2CustomerShortNameLandlordTenancyMaintenancePreferenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.customer)[':shortName']['landlord']['tenancy']['maintenance']['preference']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2CustomerShortNameLandlordTenancyMaintenancePreferenceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.customer)[':shortName']['landlord']['tenancy']['maintenance']['preference']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.customer[':shortName'].landlord.tenancy.maintenance.preference.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV2CustomerShortNameLandlordTenancyMaintenancePreference<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v2.customer)[':shortName']['landlord']['tenancy']['maintenance']['preference']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV2CustomerShortNameLandlordTenancyMaintenancePreferenceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2CustomerShortNameLandlordTenancyagreementQueryKey(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['tenancyagreement']['$get']
  >,
) {
  return ['v2', '/v2/customer/:shortName/landlord/tenancyagreement', args] as const
}

export function getV2CustomerShortNameLandlordTenancyagreementQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['tenancyagreement']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2CustomerShortNameLandlordTenancyagreementQueryKey>
  >({
    queryKey: getV2CustomerShortNameLandlordTenancyagreementQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customer[':shortName'].landlord.tenancyagreement.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomerShortNameLandlordTenancyagreement<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['tenancyagreement']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2CustomerShortNameLandlordTenancyagreementQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2CustomerShortNameLandlordTenancyagreementQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2CustomerShortNamePhotoDownloadQueryKey(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['photo']['download']['$get']>,
) {
  return ['v2', '/v2/customer/:shortName/photo/download', args] as const
}

export function getV2CustomerShortNamePhotoDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customer)[':shortName']['photo']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['photo']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.customer)[':shortName']['photo']['download']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomerShortNamePhotoDownloadQueryKey>
  >({
    queryKey: getV2CustomerShortNamePhotoDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customer[':shortName'].photo.download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomerShortNamePhotoDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customer)[':shortName']['photo']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.customer)[':shortName']['photo']['download']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.customer)[':shortName']['photo']['download']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomerShortNamePhotoDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2CustomerShortNamePhotoDownloadQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2CustomerShortNamePropertyPropertyIDPhotosQueryKey(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['property'][':propertyID']['photos']['$get']
  >,
) {
  return ['v2', '/v2/customer/:shortName/property/:propertyID/photos', args] as const
}

export function getV2CustomerShortNamePropertyPropertyIDPhotosQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['property'][':propertyID']['photos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2CustomerShortNamePropertyPropertyIDPhotosQueryKey>
  >({
    queryKey: getV2CustomerShortNamePropertyPropertyIDPhotosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customer[':shortName'].property[':propertyID'].photos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomerShortNamePropertyPropertyIDPhotos<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.customer)[':shortName']['property'][':propertyID']['photos']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2CustomerShortNamePropertyPropertyIDPhotosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2CustomerShortNamePropertyPropertyIDPhotosQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2CustomerShortNameSessionQueryKey(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['session']['$get']>,
) {
  return ['v2', '/v2/customer/:shortName/session', args] as const
}

export function getV2CustomerShortNameSessionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customer)[':shortName']['session']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['session']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customer)[':shortName']['session']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomerShortNameSessionQueryKey>
  >({
    queryKey: getV2CustomerShortNameSessionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customer[':shortName'].session.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomerShortNameSession<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customer)[':shortName']['session']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.customer)[':shortName']['session']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.customer)[':shortName']['session']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomerShortNameSessionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2CustomerShortNameSessionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2CustomerShortNameSessionMutationKey() {
  return ['v2', '/v2/customer/:shortName/session', 'POST'] as const
}

export function getPostV2CustomerShortNameSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customer)[':shortName']['session']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.customer)[':shortName']['session']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CustomerShortNameSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.customer)[':shortName']['session']['$post']>,
    ) {
      return parseResponse(client.v2.customer[':shortName'].session.$post(args, options))
    },
  })
}

export function injectPostV2CustomerShortNameSession<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.customer)[':shortName']['session']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.customer)[':shortName']['session']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2CustomerShortNameSessionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV2CustomerShortNameSessionMutationKey() {
  return ['v2', '/v2/customer/:shortName/session', 'DELETE'] as const
}

export function getDeleteV2CustomerShortNameSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customer)[':shortName']['session']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.customer)[':shortName']['session']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2CustomerShortNameSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.customer)[':shortName']['session']['$delete']>,
    ) {
      return parseResponse(client.v2.customer[':shortName'].session.$delete(args, options))
    },
  })
}

export function injectDeleteV2CustomerShortNameSession<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.customer)[':shortName']['session']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.customer)[':shortName']['session']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2CustomerShortNameSessionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2CustomerShortNameSessionCreatelandlordloginMutationKey() {
  return ['v2', '/v2/customer/:shortName/session/createlandlordlogin', 'POST'] as const
}

export function getPostV2CustomerShortNameSessionCreatelandlordloginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.customer)[':shortName']['session']['createlandlordlogin']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2CustomerShortNameSessionCreatelandlordloginMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.customer)[':shortName']['session']['createlandlordlogin']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.customer[':shortName'].session.createlandlordlogin.$post(args, options),
      )
    },
  })
}

export function injectPostV2CustomerShortNameSessionCreatelandlordlogin<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v2.customer)[':shortName']['session']['createlandlordlogin']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2CustomerShortNameSessionCreatelandlordloginMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutV2CustomerShortNameSessionPasswordMutationKey() {
  return ['v2', '/v2/customer/:shortName/session/password', 'PUT'] as const
}

export function getPutV2CustomerShortNameSessionPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v2.customer)[':shortName']['session']['password']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2CustomerShortNameSessionPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.customer)[':shortName']['session']['password']['$put']
      >,
    ) {
      return parseResponse(client.v2.customer[':shortName'].session.password.$put(args, options))
    },
  })
}

export function injectPutV2CustomerShortNameSessionPassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.customer)[':shortName']['session']['password']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.customer)[':shortName']['session']['password']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV2CustomerShortNameSessionPasswordMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2CustomerShortNameSessionResetpasswordMutationKey() {
  return ['v2', '/v2/customer/:shortName/session/resetpassword', 'POST'] as const
}

export function getPostV2CustomerShortNameSessionResetpasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.customer)[':shortName']['session']['resetpassword']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2CustomerShortNameSessionResetpasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.customer)[':shortName']['session']['resetpassword']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.customer[':shortName'].session.resetpassword.$post(args, options),
      )
    },
  })
}

export function injectPostV2CustomerShortNameSessionResetpassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v2.customer)[':shortName']['session']['resetpassword']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2CustomerShortNameSessionResetpasswordMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
