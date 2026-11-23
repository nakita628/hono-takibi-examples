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

export function getAccountingKey() {
  return ['accounting'] as const
}

export function getAccountingBalanceSheetQueryKey(
  args: InferRequestType<(typeof client.accounting)['balance-sheet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounting', '/accounting/balance-sheet', keyArgs] as const
}

export function getAccountingBalanceSheetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting)['balance-sheet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounting)['balance-sheet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting)['balance-sheet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingBalanceSheetQueryKey>
  >({
    queryKey: getAccountingBalanceSheetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting['balance-sheet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountingBalanceSheet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting)['balance-sheet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounting)['balance-sheet']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['balance-sheet']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountingBalanceSheetQueryKey>
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
      ...getAccountingBalanceSheetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAccountingBillsQueryKey(
  args: InferRequestType<typeof client.accounting.bills.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounting', '/accounting/bills', keyArgs] as const
}

export function getAccountingBillsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.bills.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.accounting.bills.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.bills.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingBillsQueryKey>
  >({
    queryKey: getAccountingBillsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting.bills.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAccountingBills<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.bills.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.accounting.bills.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.bills.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountingBillsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountingBillsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostAccountingBillsMutationKey() {
  return ['accounting', '/accounting/bills', 'POST'] as const
}

export function getPostAccountingBillsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.bills.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.accounting.bills.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountingBillsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounting.bills.$post>) {
      return parseResponse(client.accounting.bills.$post(args, options))
    },
  })
}

export function injectPostAccountingBills<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.accounting.bills.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.accounting.bills.$post>,
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
    const mutationDefaults = getPostAccountingBillsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAccountingBillsIdQueryKey(
  args: InferRequestType<(typeof client.accounting.bills)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounting', '/accounting/bills/:id', keyArgs] as const
}

export function getAccountingBillsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting.bills)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounting.bills)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounting.bills)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingBillsIdQueryKey>
  >({
    queryKey: getAccountingBillsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting.bills[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountingBillsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting.bills)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounting.bills)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting.bills)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountingBillsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountingBillsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteAccountingBillsIdMutationKey() {
  return ['accounting', '/accounting/bills/:id', 'DELETE'] as const
}

export function getDeleteAccountingBillsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting.bills)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounting.bills)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountingBillsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounting.bills)[':id']['$delete']>) {
      return parseResponse(client.accounting.bills[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteAccountingBillsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting.bills)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounting.bills)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteAccountingBillsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAccountingBillsIdMutationKey() {
  return ['accounting', '/accounting/bills/:id', 'PATCH'] as const
}

export function getPatchAccountingBillsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounting.bills)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.accounting.bills)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountingBillsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounting.bills)[':id']['$patch']>) {
      return parseResponse(client.accounting.bills[':id'].$patch(args, options))
    },
  })
}

export function injectPatchAccountingBillsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting.bills)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounting.bills)[':id']['$patch']>,
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
    const mutationDefaults = getPatchAccountingBillsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAccountingCompanyInfoQueryKey(
  args: InferRequestType<(typeof client.accounting)['company-info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounting', '/accounting/company-info', keyArgs] as const
}

export function getAccountingCompanyInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting)['company-info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounting)['company-info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting)['company-info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingCompanyInfoQueryKey>
  >({
    queryKey: getAccountingCompanyInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting['company-info'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountingCompanyInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting)['company-info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounting)['company-info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['company-info']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountingCompanyInfoQueryKey>
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
      ...getAccountingCompanyInfoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAccountingCreditNotesQueryKey(
  args: InferRequestType<(typeof client.accounting)['credit-notes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounting', '/accounting/credit-notes', keyArgs] as const
}

export function getAccountingCreditNotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting)['credit-notes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounting)['credit-notes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting)['credit-notes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingCreditNotesQueryKey>
  >({
    queryKey: getAccountingCreditNotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting['credit-notes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountingCreditNotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting)['credit-notes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounting)['credit-notes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['credit-notes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountingCreditNotesQueryKey>
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
      ...getAccountingCreditNotesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAccountingCreditNotesMutationKey() {
  return ['accounting', '/accounting/credit-notes', 'POST'] as const
}

export function getPostAccountingCreditNotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting)['credit-notes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounting)['credit-notes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountingCreditNotesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounting)['credit-notes']['$post']>) {
      return parseResponse(client.accounting['credit-notes'].$post(args, options))
    },
  })
}

export function injectPostAccountingCreditNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['credit-notes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounting)['credit-notes']['$post']>,
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
    const mutationDefaults = getPostAccountingCreditNotesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAccountingCreditNotesIdQueryKey(
  args: InferRequestType<(typeof client.accounting)['credit-notes'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounting', '/accounting/credit-notes/:id', keyArgs] as const
}

export function getAccountingCreditNotesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting)['credit-notes'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounting)['credit-notes'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting)['credit-notes'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingCreditNotesIdQueryKey>
  >({
    queryKey: getAccountingCreditNotesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting['credit-notes'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountingCreditNotesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting)['credit-notes'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounting)['credit-notes'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['credit-notes'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountingCreditNotesIdQueryKey>
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
      ...getAccountingCreditNotesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteAccountingCreditNotesIdMutationKey() {
  return ['accounting', '/accounting/credit-notes/:id', 'DELETE'] as const
}

export function getDeleteAccountingCreditNotesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting)['credit-notes'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounting)['credit-notes'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountingCreditNotesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounting)['credit-notes'][':id']['$delete']>,
    ) {
      return parseResponse(client.accounting['credit-notes'][':id'].$delete(args, options))
    },
  })
}

export function injectDeleteAccountingCreditNotesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['credit-notes'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounting)['credit-notes'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteAccountingCreditNotesIdMutationOptions<
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

export function getPatchAccountingCreditNotesIdMutationKey() {
  return ['accounting', '/accounting/credit-notes/:id', 'PATCH'] as const
}

export function getPatchAccountingCreditNotesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting)['credit-notes'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounting)['credit-notes'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountingCreditNotesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounting)['credit-notes'][':id']['$patch']>,
    ) {
      return parseResponse(client.accounting['credit-notes'][':id'].$patch(args, options))
    },
  })
}

export function injectPatchAccountingCreditNotesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['credit-notes'][':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounting)['credit-notes'][':id']['$patch']>,
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
    const mutationDefaults = getPatchAccountingCreditNotesIdMutationOptions<
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

export function getAccountingCustomersQueryKey(
  args: InferRequestType<typeof client.accounting.customers.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounting', '/accounting/customers', keyArgs] as const
}

export function getAccountingCustomersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.customers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.accounting.customers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.customers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingCustomersQueryKey>
  >({
    queryKey: getAccountingCustomersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting.customers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAccountingCustomers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.accounting.customers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.accounting.customers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountingCustomersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountingCustomersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostAccountingCustomersMutationKey() {
  return ['accounting', '/accounting/customers', 'POST'] as const
}

export function getPostAccountingCustomersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.accounting.customers.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.accounting.customers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountingCustomersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounting.customers.$post>) {
      return parseResponse(client.accounting.customers.$post(args, options))
    },
  })
}

export function injectPostAccountingCustomers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.accounting.customers.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.accounting.customers.$post>,
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
    const mutationDefaults = getPostAccountingCustomersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAccountingCustomersIdQueryKey(
  args: InferRequestType<(typeof client.accounting.customers)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounting', '/accounting/customers/:id', keyArgs] as const
}

export function getAccountingCustomersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting.customers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounting.customers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting.customers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingCustomersIdQueryKey>
  >({
    queryKey: getAccountingCustomersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting.customers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountingCustomersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting.customers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounting.customers)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting.customers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountingCustomersIdQueryKey>
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
      ...getAccountingCustomersIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteAccountingCustomersIdMutationKey() {
  return ['accounting', '/accounting/customers/:id', 'DELETE'] as const
}

export function getDeleteAccountingCustomersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting.customers)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounting.customers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountingCustomersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounting.customers)[':id']['$delete']>,
    ) {
      return parseResponse(client.accounting.customers[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteAccountingCustomersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting.customers)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounting.customers)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteAccountingCustomersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAccountingCustomersIdMutationKey() {
  return ['accounting', '/accounting/customers/:id', 'PATCH'] as const
}

export function getPatchAccountingCustomersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting.customers)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounting.customers)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountingCustomersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounting.customers)[':id']['$patch']>,
    ) {
      return parseResponse(client.accounting.customers[':id'].$patch(args, options))
    },
  })
}

export function injectPatchAccountingCustomersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting.customers)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounting.customers)[':id']['$patch']>,
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
    const mutationDefaults = getPatchAccountingCustomersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAccountingInvoiceItemsQueryKey(
  args: InferRequestType<(typeof client.accounting)['invoice-items']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounting', '/accounting/invoice-items', keyArgs] as const
}

export function getAccountingInvoiceItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting)['invoice-items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounting)['invoice-items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting)['invoice-items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingInvoiceItemsQueryKey>
  >({
    queryKey: getAccountingInvoiceItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting['invoice-items'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountingInvoiceItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting)['invoice-items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounting)['invoice-items']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['invoice-items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountingInvoiceItemsQueryKey>
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
      ...getAccountingInvoiceItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAccountingInvoiceItemsMutationKey() {
  return ['accounting', '/accounting/invoice-items', 'POST'] as const
}

export function getPostAccountingInvoiceItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting)['invoice-items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounting)['invoice-items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountingInvoiceItemsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounting)['invoice-items']['$post']>) {
      return parseResponse(client.accounting['invoice-items'].$post(args, options))
    },
  })
}

export function injectPostAccountingInvoiceItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['invoice-items']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounting)['invoice-items']['$post']>,
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
    const mutationDefaults = getPostAccountingInvoiceItemsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAccountingInvoiceItemsIdQueryKey(
  args: InferRequestType<(typeof client.accounting)['invoice-items'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounting', '/accounting/invoice-items/:id', keyArgs] as const
}

export function getAccountingInvoiceItemsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting)['invoice-items'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounting)['invoice-items'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting)['invoice-items'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingInvoiceItemsIdQueryKey>
  >({
    queryKey: getAccountingInvoiceItemsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting['invoice-items'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountingInvoiceItemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting)['invoice-items'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounting)['invoice-items'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['invoice-items'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountingInvoiceItemsIdQueryKey>
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
      ...getAccountingInvoiceItemsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteAccountingInvoiceItemsIdMutationKey() {
  return ['accounting', '/accounting/invoice-items/:id', 'DELETE'] as const
}

export function getDeleteAccountingInvoiceItemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting)['invoice-items'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounting)['invoice-items'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountingInvoiceItemsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounting)['invoice-items'][':id']['$delete']>,
    ) {
      return parseResponse(client.accounting['invoice-items'][':id'].$delete(args, options))
    },
  })
}

export function injectDeleteAccountingInvoiceItemsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['invoice-items'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounting)['invoice-items'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteAccountingInvoiceItemsIdMutationOptions<
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

export function getPatchAccountingInvoiceItemsIdMutationKey() {
  return ['accounting', '/accounting/invoice-items/:id', 'PATCH'] as const
}

export function getPatchAccountingInvoiceItemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting)['invoice-items'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounting)['invoice-items'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountingInvoiceItemsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounting)['invoice-items'][':id']['$patch']>,
    ) {
      return parseResponse(client.accounting['invoice-items'][':id'].$patch(args, options))
    },
  })
}

export function injectPatchAccountingInvoiceItemsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['invoice-items'][':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounting)['invoice-items'][':id']['$patch']>,
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
    const mutationDefaults = getPatchAccountingInvoiceItemsIdMutationOptions<
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

export function getAccountingInvoicesQueryKey(
  args: InferRequestType<typeof client.accounting.invoices.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounting', '/accounting/invoices', keyArgs] as const
}

export function getAccountingInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.invoices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.accounting.invoices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.invoices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingInvoicesQueryKey>
  >({
    queryKey: getAccountingInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting.invoices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAccountingInvoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.invoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.accounting.invoices.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.accounting.invoices.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountingInvoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountingInvoicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostAccountingInvoicesMutationKey() {
  return ['accounting', '/accounting/invoices', 'POST'] as const
}

export function getPostAccountingInvoicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.invoices.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.accounting.invoices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountingInvoicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounting.invoices.$post>) {
      return parseResponse(client.accounting.invoices.$post(args, options))
    },
  })
}

export function injectPostAccountingInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.accounting.invoices.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.accounting.invoices.$post>,
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
    const mutationDefaults = getPostAccountingInvoicesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAccountingInvoicesIdQueryKey(
  args: InferRequestType<(typeof client.accounting.invoices)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounting', '/accounting/invoices/:id', keyArgs] as const
}

export function getAccountingInvoicesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting.invoices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounting.invoices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting.invoices)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingInvoicesIdQueryKey>
  >({
    queryKey: getAccountingInvoicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting.invoices[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountingInvoicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting.invoices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounting.invoices)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting.invoices)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountingInvoicesIdQueryKey>
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
      ...getAccountingInvoicesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteAccountingInvoicesIdMutationKey() {
  return ['accounting', '/accounting/invoices/:id', 'DELETE'] as const
}

export function getDeleteAccountingInvoicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting.invoices)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounting.invoices)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountingInvoicesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounting.invoices)[':id']['$delete']>,
    ) {
      return parseResponse(client.accounting.invoices[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteAccountingInvoicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting.invoices)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounting.invoices)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteAccountingInvoicesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAccountingInvoicesIdMutationKey() {
  return ['accounting', '/accounting/invoices/:id', 'PATCH'] as const
}

export function getPatchAccountingInvoicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting.invoices)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounting.invoices)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountingInvoicesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounting.invoices)[':id']['$patch']>) {
      return parseResponse(client.accounting.invoices[':id'].$patch(args, options))
    },
  })
}

export function injectPatchAccountingInvoicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting.invoices)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounting.invoices)[':id']['$patch']>,
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
    const mutationDefaults = getPatchAccountingInvoicesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAccountingJournalEntriesQueryKey(
  args: InferRequestType<(typeof client.accounting)['journal-entries']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounting', '/accounting/journal-entries', keyArgs] as const
}

export function getAccountingJournalEntriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting)['journal-entries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounting)['journal-entries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting)['journal-entries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingJournalEntriesQueryKey>
  >({
    queryKey: getAccountingJournalEntriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting['journal-entries'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountingJournalEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting)['journal-entries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounting)['journal-entries']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['journal-entries']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountingJournalEntriesQueryKey>
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
      ...getAccountingJournalEntriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAccountingJournalEntriesMutationKey() {
  return ['accounting', '/accounting/journal-entries', 'POST'] as const
}

export function getPostAccountingJournalEntriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting)['journal-entries']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounting)['journal-entries']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountingJournalEntriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounting)['journal-entries']['$post']>,
    ) {
      return parseResponse(client.accounting['journal-entries'].$post(args, options))
    },
  })
}

export function injectPostAccountingJournalEntries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['journal-entries']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounting)['journal-entries']['$post']>,
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
    const mutationDefaults = getPostAccountingJournalEntriesMutationOptions<
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

export function getAccountingJournalEntriesIdQueryKey(
  args: InferRequestType<(typeof client.accounting)['journal-entries'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounting', '/accounting/journal-entries/:id', keyArgs] as const
}

export function getAccountingJournalEntriesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting)['journal-entries'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounting)['journal-entries'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting)['journal-entries'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingJournalEntriesIdQueryKey>
  >({
    queryKey: getAccountingJournalEntriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting['journal-entries'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountingJournalEntriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting)['journal-entries'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounting)['journal-entries'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['journal-entries'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountingJournalEntriesIdQueryKey>
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
      ...getAccountingJournalEntriesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteAccountingJournalEntriesIdMutationKey() {
  return ['accounting', '/accounting/journal-entries/:id', 'DELETE'] as const
}

export function getDeleteAccountingJournalEntriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting)['journal-entries'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounting)['journal-entries'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountingJournalEntriesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounting)['journal-entries'][':id']['$delete']>,
    ) {
      return parseResponse(client.accounting['journal-entries'][':id'].$delete(args, options))
    },
  })
}

export function injectDeleteAccountingJournalEntriesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['journal-entries'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounting)['journal-entries'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteAccountingJournalEntriesIdMutationOptions<
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

export function getPatchAccountingJournalEntriesIdMutationKey() {
  return ['accounting', '/accounting/journal-entries/:id', 'PATCH'] as const
}

export function getPatchAccountingJournalEntriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting)['journal-entries'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounting)['journal-entries'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountingJournalEntriesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounting)['journal-entries'][':id']['$patch']>,
    ) {
      return parseResponse(client.accounting['journal-entries'][':id'].$patch(args, options))
    },
  })
}

export function injectPatchAccountingJournalEntriesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['journal-entries'][':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounting)['journal-entries'][':id']['$patch']>,
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
    const mutationDefaults = getPatchAccountingJournalEntriesIdMutationOptions<
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

export function getAccountingLedgerAccountsQueryKey(
  args: InferRequestType<(typeof client.accounting)['ledger-accounts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounting', '/accounting/ledger-accounts', keyArgs] as const
}

export function getAccountingLedgerAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting)['ledger-accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounting)['ledger-accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting)['ledger-accounts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingLedgerAccountsQueryKey>
  >({
    queryKey: getAccountingLedgerAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting['ledger-accounts'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountingLedgerAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting)['ledger-accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounting)['ledger-accounts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['ledger-accounts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountingLedgerAccountsQueryKey>
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
      ...getAccountingLedgerAccountsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAccountingLedgerAccountsMutationKey() {
  return ['accounting', '/accounting/ledger-accounts', 'POST'] as const
}

export function getPostAccountingLedgerAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting)['ledger-accounts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounting)['ledger-accounts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountingLedgerAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounting)['ledger-accounts']['$post']>,
    ) {
      return parseResponse(client.accounting['ledger-accounts'].$post(args, options))
    },
  })
}

export function injectPostAccountingLedgerAccounts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['ledger-accounts']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounting)['ledger-accounts']['$post']>,
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
    const mutationDefaults = getPostAccountingLedgerAccountsMutationOptions<
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

export function getAccountingLedgerAccountsIdQueryKey(
  args: InferRequestType<(typeof client.accounting)['ledger-accounts'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounting', '/accounting/ledger-accounts/:id', keyArgs] as const
}

export function getAccountingLedgerAccountsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting)['ledger-accounts'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounting)['ledger-accounts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting)['ledger-accounts'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingLedgerAccountsIdQueryKey>
  >({
    queryKey: getAccountingLedgerAccountsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting['ledger-accounts'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountingLedgerAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting)['ledger-accounts'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounting)['ledger-accounts'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['ledger-accounts'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountingLedgerAccountsIdQueryKey>
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
      ...getAccountingLedgerAccountsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteAccountingLedgerAccountsIdMutationKey() {
  return ['accounting', '/accounting/ledger-accounts/:id', 'DELETE'] as const
}

export function getDeleteAccountingLedgerAccountsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting)['ledger-accounts'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounting)['ledger-accounts'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountingLedgerAccountsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounting)['ledger-accounts'][':id']['$delete']>,
    ) {
      return parseResponse(client.accounting['ledger-accounts'][':id'].$delete(args, options))
    },
  })
}

export function injectDeleteAccountingLedgerAccountsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['ledger-accounts'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounting)['ledger-accounts'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteAccountingLedgerAccountsIdMutationOptions<
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

export function getPatchAccountingLedgerAccountsIdMutationKey() {
  return ['accounting', '/accounting/ledger-accounts/:id', 'PATCH'] as const
}

export function getPatchAccountingLedgerAccountsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting)['ledger-accounts'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounting)['ledger-accounts'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountingLedgerAccountsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounting)['ledger-accounts'][':id']['$patch']>,
    ) {
      return parseResponse(client.accounting['ledger-accounts'][':id'].$patch(args, options))
    },
  })
}

export function injectPatchAccountingLedgerAccountsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['ledger-accounts'][':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounting)['ledger-accounts'][':id']['$patch']>,
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
    const mutationDefaults = getPatchAccountingLedgerAccountsIdMutationOptions<
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

export function getAccountingPaymentsQueryKey(
  args: InferRequestType<typeof client.accounting.payments.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounting', '/accounting/payments', keyArgs] as const
}

export function getAccountingPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.payments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.accounting.payments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.payments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingPaymentsQueryKey>
  >({
    queryKey: getAccountingPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting.payments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAccountingPayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.accounting.payments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.accounting.payments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountingPaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountingPaymentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostAccountingPaymentsMutationKey() {
  return ['accounting', '/accounting/payments', 'POST'] as const
}

export function getPostAccountingPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.payments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.accounting.payments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountingPaymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounting.payments.$post>) {
      return parseResponse(client.accounting.payments.$post(args, options))
    },
  })
}

export function injectPostAccountingPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.accounting.payments.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.accounting.payments.$post>,
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
    const mutationDefaults = getPostAccountingPaymentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAccountingPaymentsIdQueryKey(
  args: InferRequestType<(typeof client.accounting.payments)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounting', '/accounting/payments/:id', keyArgs] as const
}

export function getAccountingPaymentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting.payments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounting.payments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting.payments)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingPaymentsIdQueryKey>
  >({
    queryKey: getAccountingPaymentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting.payments[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountingPaymentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting.payments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounting.payments)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting.payments)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountingPaymentsIdQueryKey>
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
      ...getAccountingPaymentsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteAccountingPaymentsIdMutationKey() {
  return ['accounting', '/accounting/payments/:id', 'DELETE'] as const
}

export function getDeleteAccountingPaymentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting.payments)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounting.payments)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountingPaymentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounting.payments)[':id']['$delete']>,
    ) {
      return parseResponse(client.accounting.payments[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteAccountingPaymentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting.payments)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounting.payments)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteAccountingPaymentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAccountingPaymentsIdMutationKey() {
  return ['accounting', '/accounting/payments/:id', 'PATCH'] as const
}

export function getPatchAccountingPaymentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting.payments)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounting.payments)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountingPaymentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounting.payments)[':id']['$patch']>) {
      return parseResponse(client.accounting.payments[':id'].$patch(args, options))
    },
  })
}

export function injectPatchAccountingPaymentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting.payments)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounting.payments)[':id']['$patch']>,
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
    const mutationDefaults = getPatchAccountingPaymentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAccountingProfitAndLossQueryKey(
  args: InferRequestType<(typeof client.accounting)['profit-and-loss']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounting', '/accounting/profit-and-loss', keyArgs] as const
}

export function getAccountingProfitAndLossQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting)['profit-and-loss']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounting)['profit-and-loss']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting)['profit-and-loss']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingProfitAndLossQueryKey>
  >({
    queryKey: getAccountingProfitAndLossQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting['profit-and-loss'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountingProfitAndLoss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting)['profit-and-loss']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounting)['profit-and-loss']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['profit-and-loss']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountingProfitAndLossQueryKey>
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
      ...getAccountingProfitAndLossQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAccountingSuppliersQueryKey(
  args: InferRequestType<typeof client.accounting.suppliers.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounting', '/accounting/suppliers', keyArgs] as const
}

export function getAccountingSuppliersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.suppliers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.accounting.suppliers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.suppliers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingSuppliersQueryKey>
  >({
    queryKey: getAccountingSuppliersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting.suppliers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAccountingSuppliers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.suppliers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.accounting.suppliers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.accounting.suppliers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountingSuppliersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountingSuppliersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostAccountingSuppliersMutationKey() {
  return ['accounting', '/accounting/suppliers', 'POST'] as const
}

export function getPostAccountingSuppliersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.accounting.suppliers.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.accounting.suppliers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountingSuppliersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounting.suppliers.$post>) {
      return parseResponse(client.accounting.suppliers.$post(args, options))
    },
  })
}

export function injectPostAccountingSuppliers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.accounting.suppliers.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.accounting.suppliers.$post>,
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
    const mutationDefaults = getPostAccountingSuppliersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAccountingSuppliersIdQueryKey(
  args: InferRequestType<(typeof client.accounting.suppliers)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounting', '/accounting/suppliers/:id', keyArgs] as const
}

export function getAccountingSuppliersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting.suppliers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounting.suppliers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting.suppliers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingSuppliersIdQueryKey>
  >({
    queryKey: getAccountingSuppliersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting.suppliers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountingSuppliersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting.suppliers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounting.suppliers)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting.suppliers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountingSuppliersIdQueryKey>
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
      ...getAccountingSuppliersIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteAccountingSuppliersIdMutationKey() {
  return ['accounting', '/accounting/suppliers/:id', 'DELETE'] as const
}

export function getDeleteAccountingSuppliersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting.suppliers)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounting.suppliers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountingSuppliersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounting.suppliers)[':id']['$delete']>,
    ) {
      return parseResponse(client.accounting.suppliers[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteAccountingSuppliersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting.suppliers)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounting.suppliers)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteAccountingSuppliersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAccountingSuppliersIdMutationKey() {
  return ['accounting', '/accounting/suppliers/:id', 'PATCH'] as const
}

export function getPatchAccountingSuppliersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting.suppliers)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounting.suppliers)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountingSuppliersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounting.suppliers)[':id']['$patch']>,
    ) {
      return parseResponse(client.accounting.suppliers[':id'].$patch(args, options))
    },
  })
}

export function injectPatchAccountingSuppliersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting.suppliers)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounting.suppliers)[':id']['$patch']>,
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
    const mutationDefaults = getPatchAccountingSuppliersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAccountingTaxRatesQueryKey(
  args: InferRequestType<(typeof client.accounting)['tax-rates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounting', '/accounting/tax-rates', keyArgs] as const
}

export function getAccountingTaxRatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting)['tax-rates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounting)['tax-rates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounting)['tax-rates']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingTaxRatesQueryKey>
  >({
    queryKey: getAccountingTaxRatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting['tax-rates'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountingTaxRates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting)['tax-rates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounting)['tax-rates']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['tax-rates']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountingTaxRatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountingTaxRatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostAccountingTaxRatesMutationKey() {
  return ['accounting', '/accounting/tax-rates', 'POST'] as const
}

export function getPostAccountingTaxRatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounting)['tax-rates']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.accounting)['tax-rates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountingTaxRatesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounting)['tax-rates']['$post']>) {
      return parseResponse(client.accounting['tax-rates'].$post(args, options))
    },
  })
}

export function injectPostAccountingTaxRates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['tax-rates']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounting)['tax-rates']['$post']>,
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
    const mutationDefaults = getPostAccountingTaxRatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAccountingTaxRatesIdQueryKey(
  args: InferRequestType<(typeof client.accounting)['tax-rates'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounting', '/accounting/tax-rates/:id', keyArgs] as const
}

export function getAccountingTaxRatesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting)['tax-rates'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounting)['tax-rates'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting)['tax-rates'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingTaxRatesIdQueryKey>
  >({
    queryKey: getAccountingTaxRatesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting['tax-rates'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountingTaxRatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting)['tax-rates'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounting)['tax-rates'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['tax-rates'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountingTaxRatesIdQueryKey>
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
      ...getAccountingTaxRatesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteAccountingTaxRatesIdMutationKey() {
  return ['accounting', '/accounting/tax-rates/:id', 'DELETE'] as const
}

export function getDeleteAccountingTaxRatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting)['tax-rates'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounting)['tax-rates'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountingTaxRatesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounting)['tax-rates'][':id']['$delete']>,
    ) {
      return parseResponse(client.accounting['tax-rates'][':id'].$delete(args, options))
    },
  })
}

export function injectDeleteAccountingTaxRatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['tax-rates'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounting)['tax-rates'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteAccountingTaxRatesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAccountingTaxRatesIdMutationKey() {
  return ['accounting', '/accounting/tax-rates/:id', 'PATCH'] as const
}

export function getPatchAccountingTaxRatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting)['tax-rates'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounting)['tax-rates'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountingTaxRatesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounting)['tax-rates'][':id']['$patch']>,
    ) {
      return parseResponse(client.accounting['tax-rates'][':id'].$patch(args, options))
    },
  })
}

export function injectPatchAccountingTaxRatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounting)['tax-rates'][':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounting)['tax-rates'][':id']['$patch']>,
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
    const mutationDefaults = getPatchAccountingTaxRatesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
