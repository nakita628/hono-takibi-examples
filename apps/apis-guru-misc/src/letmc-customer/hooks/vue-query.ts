import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getV2CustomerShortNameBranchBranchesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['branch']['branches']['$get']>
  >,
) {
  return ['v2', '/v2/customer/:shortName/branch/branches', toValue(args)] as const
}

export function getV2CustomerShortNameBranchBranchesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['branch']['branches']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomerShortNameBranchBranchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customer[':shortName'].branch.branches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomerShortNameBranchBranches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customer)[':shortName']['branch']['branches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['branch']['branches']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.customer)[':shortName']['branch']['branches']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.customer)[':shortName']['branch']['branches']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CustomerShortNameBranchBranchesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomerShortNameBranchBranchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customer[':shortName'].branch.branches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomerShortNameBranchBranchesBranchIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customer)[':shortName']['branch']['branches'][':branchID']['$get']
    >
  >,
) {
  return ['v2', '/v2/customer/:shortName/branch/branches/:branchID', toValue(args)] as const
}

export function getV2CustomerShortNameBranchBranchesBranchIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customer)[':shortName']['branch']['branches'][':branchID']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomerShortNameBranchBranchesBranchIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customer[':shortName'].branch.branches[':branchID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomerShortNameBranchBranchesBranchID<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customer)[':shortName']['branch']['branches'][':branchID']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV2CustomerShortNameBranchBranchesBranchIDQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomerShortNameBranchBranchesBranchIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customer[':shortName'].branch.branches[':branchID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomerShortNameLandlordAccountingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['accounting']['$get']>
  >,
) {
  return ['v2', '/v2/customer/:shortName/landlord/accounting', toValue(args)] as const
}

export function getV2CustomerShortNameLandlordAccountingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['accounting']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomerShortNameLandlordAccountingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customer[':shortName'].landlord.accounting.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomerShortNameLandlordAccounting<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['accounting']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV2CustomerShortNameLandlordAccountingQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomerShortNameLandlordAccountingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customer[':shortName'].landlord.accounting.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomerShortNameLandlordDocumentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['document']['$get']>
  >,
) {
  return ['v2', '/v2/customer/:shortName/landlord/document', toValue(args)] as const
}

export function getV2CustomerShortNameLandlordDocumentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['document']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomerShortNameLandlordDocumentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customer[':shortName'].landlord.document.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomerShortNameLandlordDocument<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['document']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV2CustomerShortNameLandlordDocumentQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomerShortNameLandlordDocumentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customer[':shortName'].landlord.document.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomerShortNameLandlordInventoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['inventory']['$get']>
  >,
) {
  return ['v2', '/v2/customer/:shortName/landlord/inventory', toValue(args)] as const
}

export function getV2CustomerShortNameLandlordInventoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['inventory']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomerShortNameLandlordInventoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customer[':shortName'].landlord.inventory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomerShortNameLandlordInventory<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['inventory']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV2CustomerShortNameLandlordInventoryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomerShortNameLandlordInventoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customer[':shortName'].landlord.inventory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomerShortNameLandlordInvoiceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['invoice']['$get']>
  >,
) {
  return ['v2', '/v2/customer/:shortName/landlord/invoice', toValue(args)] as const
}

export function getV2CustomerShortNameLandlordInvoiceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['invoice']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomerShortNameLandlordInvoiceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customer[':shortName'].landlord.invoice.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomerShortNameLandlordInvoice<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['invoice']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.customer)[':shortName']['landlord']['invoice']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.customer)[':shortName']['landlord']['invoice']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CustomerShortNameLandlordInvoiceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomerShortNameLandlordInvoiceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customer[':shortName'].landlord.invoice.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomerShortNameLandlordLandlordcrmentriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customer)[':shortName']['landlord']['landlordcrmentries']['$get']
    >
  >,
) {
  return ['v2', '/v2/customer/:shortName/landlord/landlordcrmentries', toValue(args)] as const
}

export function getV2CustomerShortNameLandlordLandlordcrmentriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customer)[':shortName']['landlord']['landlordcrmentries']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomerShortNameLandlordLandlordcrmentriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customer[':shortName'].landlord.landlordcrmentries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomerShortNameLandlordLandlordcrmentries<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customer)[':shortName']['landlord']['landlordcrmentries']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV2CustomerShortNameLandlordLandlordcrmentriesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomerShortNameLandlordLandlordcrmentriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customer[':shortName'].landlord.landlordcrmentries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomerShortNameLandlordMaintenanceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['maintenance']['$get']>
  >,
) {
  return ['v2', '/v2/customer/:shortName/landlord/maintenance', toValue(args)] as const
}

export function getV2CustomerShortNameLandlordMaintenanceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['maintenance']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomerShortNameLandlordMaintenanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customer[':shortName'].landlord.maintenance.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomerShortNameLandlordMaintenance<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['maintenance']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV2CustomerShortNameLandlordMaintenanceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomerShortNameLandlordMaintenanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customer[':shortName'].landlord.maintenance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomerShortNameLandlordProfitlossQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['profitloss']['$get']>
  >,
) {
  return ['v2', '/v2/customer/:shortName/landlord/profitloss', toValue(args)] as const
}

export function getV2CustomerShortNameLandlordProfitlossQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['profitloss']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomerShortNameLandlordProfitlossQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customer[':shortName'].landlord.profitloss.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomerShortNameLandlordProfitloss<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['profitloss']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV2CustomerShortNameLandlordProfitlossQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomerShortNameLandlordProfitlossQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customer[':shortName'].landlord.profitloss.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomerShortNameLandlordRentarrearsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['rentarrears']['$get']>
  >,
) {
  return ['v2', '/v2/customer/:shortName/landlord/rentarrears', toValue(args)] as const
}

export function getV2CustomerShortNameLandlordRentarrearsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['rentarrears']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomerShortNameLandlordRentarrearsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customer[':shortName'].landlord.rentarrears.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomerShortNameLandlordRentarrears<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['rentarrears']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV2CustomerShortNameLandlordRentarrearsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomerShortNameLandlordRentarrearsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customer[':shortName'].landlord.rentarrears.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomerShortNameLandlordSasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['sas']['$get']>
  >,
) {
  return ['v2', '/v2/customer/:shortName/landlord/sas', toValue(args)] as const
}

export function getV2CustomerShortNameLandlordSasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['sas']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomerShortNameLandlordSasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customer[':shortName'].landlord.sas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomerShortNameLandlordSas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['sas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['sas']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.customer)[':shortName']['landlord']['sas']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2CustomerShortNameLandlordSasQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomerShortNameLandlordSasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customer[':shortName'].landlord.sas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomerShortNameLandlordSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['settings']['$get']>
  >,
) {
  return ['v2', '/v2/customer/:shortName/landlord/settings', toValue(args)] as const
}

export function getV2CustomerShortNameLandlordSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomerShortNameLandlordSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customer[':shortName'].landlord.settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomerShortNameLandlordSettings<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['settings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV2CustomerShortNameLandlordSettingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomerShortNameLandlordSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customer[':shortName'].landlord.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomerShortNameLandlordSummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['summary']['$get']>
  >,
) {
  return ['v2', '/v2/customer/:shortName/landlord/summary', toValue(args)] as const
}

export function getV2CustomerShortNameLandlordSummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['summary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomerShortNameLandlordSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customer[':shortName'].landlord.summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomerShortNameLandlordSummary<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['summary']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.customer)[':shortName']['landlord']['summary']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.customer)[':shortName']['landlord']['summary']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CustomerShortNameLandlordSummaryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomerShortNameLandlordSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customer[':shortName'].landlord.summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomerShortNameLandlordTenancyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['tenancy']['$get']>
  >,
) {
  return ['v2', '/v2/customer/:shortName/landlord/tenancy', toValue(args)] as const
}

export function getV2CustomerShortNameLandlordTenancyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['tenancy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomerShortNameLandlordTenancyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customer[':shortName'].landlord.tenancy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomerShortNameLandlordTenancy<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['tenancy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.customer)[':shortName']['landlord']['tenancy']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.customer)[':shortName']['landlord']['tenancy']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CustomerShortNameLandlordTenancyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomerShortNameLandlordTenancyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customer[':shortName'].landlord.tenancy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2CustomerShortNameLandlordTenancyMaintenancePreference<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostV2CustomerShortNameLandlordTenancyMaintenancePreferenceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2CustomerShortNameLandlordTenancyagreementQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customer)[':shortName']['landlord']['tenancyagreement']['$get']
    >
  >,
) {
  return ['v2', '/v2/customer/:shortName/landlord/tenancyagreement', toValue(args)] as const
}

export function getV2CustomerShortNameLandlordTenancyagreementQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customer)[':shortName']['landlord']['tenancyagreement']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomerShortNameLandlordTenancyagreementQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customer[':shortName'].landlord.tenancyagreement.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomerShortNameLandlordTenancyagreement<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customer)[':shortName']['landlord']['tenancyagreement']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV2CustomerShortNameLandlordTenancyagreementQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomerShortNameLandlordTenancyagreementQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customer[':shortName'].landlord.tenancyagreement.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomerShortNamePhotoDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['photo']['download']['$get']>
  >,
) {
  return ['v2', '/v2/customer/:shortName/photo/download', toValue(args)] as const
}

export function getV2CustomerShortNamePhotoDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['photo']['download']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomerShortNamePhotoDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customer[':shortName'].photo.download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomerShortNamePhotoDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customer)[':shortName']['photo']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['photo']['download']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.customer)[':shortName']['photo']['download']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2CustomerShortNamePhotoDownloadQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomerShortNamePhotoDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customer[':shortName'].photo.download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomerShortNamePropertyPropertyIDPhotosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customer)[':shortName']['property'][':propertyID']['photos']['$get']
    >
  >,
) {
  return ['v2', '/v2/customer/:shortName/property/:propertyID/photos', toValue(args)] as const
}

export function getV2CustomerShortNamePropertyPropertyIDPhotosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customer)[':shortName']['property'][':propertyID']['photos']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomerShortNamePropertyPropertyIDPhotosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customer[':shortName'].property[':propertyID'].photos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomerShortNamePropertyPropertyIDPhotos<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customer)[':shortName']['property'][':propertyID']['photos']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV2CustomerShortNamePropertyPropertyIDPhotosQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomerShortNamePropertyPropertyIDPhotosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customer[':shortName'].property[':propertyID'].photos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomerShortNameSessionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['session']['$get']>
  >,
) {
  return ['v2', '/v2/customer/:shortName/session', toValue(args)] as const
}

export function getV2CustomerShortNameSessionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['session']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomerShortNameSessionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customer[':shortName'].session.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomerShortNameSession<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customer)[':shortName']['session']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customer)[':shortName']['session']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.customer)[':shortName']['session']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.customer)[':shortName']['session']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2CustomerShortNameSessionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomerShortNameSessionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customer[':shortName'].session.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2CustomerShortNameSession<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2CustomerShortNameSessionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteV2CustomerShortNameSession<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v2.customer)[':shortName']['session']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.customer)[':shortName']['session']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2CustomerShortNameSessionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2CustomerShortNameSessionCreatelandlordlogin<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2CustomerShortNameSessionCreatelandlordloginMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutV2CustomerShortNameSessionPassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.v2.customer)[':shortName']['session']['password']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2CustomerShortNameSessionPasswordMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2CustomerShortNameSessionResetpassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2CustomerShortNameSessionResetpasswordMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
