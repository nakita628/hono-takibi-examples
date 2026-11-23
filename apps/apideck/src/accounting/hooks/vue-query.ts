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

export function getAccountingKey() {
  return ['accounting'] as const
}

export function getAccountingBalanceSheetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting)['balance-sheet']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounting', '/accounting/balance-sheet', keyArgs] as const
}

export function getAccountingBalanceSheetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting)['balance-sheet']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingBalanceSheetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting['balance-sheet'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingBalanceSheet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting)['balance-sheet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting)['balance-sheet']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting)['balance-sheet']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting)['balance-sheet']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountingBalanceSheetQueryKey>
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
          Awaited<ReturnType<(typeof client.accounting)['balance-sheet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingBalanceSheetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingBalanceSheetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting['balance-sheet'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountingBillsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.bills.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounting', '/accounting/bills', keyArgs] as const
}

export function getAccountingBillsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.bills.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingBillsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting.bills.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingBills<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.bills.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.bills.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounting.bills.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounting.bills.$get>>>
            >
          >,
          ReturnType<typeof getAccountingBillsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.bills.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingBillsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingBillsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting.bills.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountingBills<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounting.bills.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.accounting.bills.$post>,
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
  const mutationDefaults = getPostAccountingBillsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountingBillsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting.bills)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounting', '/accounting/bills/:id', keyArgs] as const
}

export function getAccountingBillsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting.bills)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingBillsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting.bills[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingBillsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting.bills)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting.bills)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting.bills)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting.bills)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountingBillsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounting.bills)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingBillsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingBillsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting.bills[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAccountingBillsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountingBillsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchAccountingBillsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountingBillsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountingCompanyInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting)['company-info']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounting', '/accounting/company-info', keyArgs] as const
}

export function getAccountingCompanyInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting)['company-info']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingCompanyInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting['company-info'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingCompanyInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting)['company-info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting)['company-info']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting)['company-info']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting)['company-info']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountingCompanyInfoQueryKey>
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
          Awaited<ReturnType<(typeof client.accounting)['company-info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingCompanyInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingCompanyInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting['company-info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountingCreditNotesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting)['credit-notes']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounting', '/accounting/credit-notes', keyArgs] as const
}

export function getAccountingCreditNotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting)['credit-notes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingCreditNotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting['credit-notes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingCreditNotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting)['credit-notes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting)['credit-notes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting)['credit-notes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting)['credit-notes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountingCreditNotesQueryKey>
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
          Awaited<ReturnType<(typeof client.accounting)['credit-notes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingCreditNotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingCreditNotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting['credit-notes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountingCreditNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountingCreditNotesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountingCreditNotesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounting)['credit-notes'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounting', '/accounting/credit-notes/:id', keyArgs] as const
}

export function getAccountingCreditNotesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounting)['credit-notes'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingCreditNotesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting['credit-notes'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingCreditNotesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting)['credit-notes'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounting)['credit-notes'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting)['credit-notes'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting)['credit-notes'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountingCreditNotesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.accounting)['credit-notes'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingCreditNotesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingCreditNotesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting['credit-notes'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAccountingCreditNotesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountingCreditNotesIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchAccountingCreditNotesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountingCreditNotesIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountingCustomersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.customers.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounting', '/accounting/customers', keyArgs] as const
}

export function getAccountingCustomersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.customers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingCustomersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting.customers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingCustomers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.customers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounting.customers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounting.customers.$get>>>
            >
          >,
          ReturnType<typeof getAccountingCustomersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.customers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingCustomersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingCustomersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting.customers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountingCustomers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounting.customers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.accounting.customers.$post>,
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
  const mutationDefaults = getPostAccountingCustomersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountingCustomersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting.customers)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounting', '/accounting/customers/:id', keyArgs] as const
}

export function getAccountingCustomersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting.customers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingCustomersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting.customers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingCustomersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting.customers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting.customers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting.customers)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting.customers)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountingCustomersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.accounting.customers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingCustomersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingCustomersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting.customers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAccountingCustomersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountingCustomersIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchAccountingCustomersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountingCustomersIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountingInvoiceItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting)['invoice-items']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounting', '/accounting/invoice-items', keyArgs] as const
}

export function getAccountingInvoiceItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting)['invoice-items']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingInvoiceItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting['invoice-items'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingInvoiceItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting)['invoice-items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting)['invoice-items']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting)['invoice-items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting)['invoice-items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountingInvoiceItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.accounting)['invoice-items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingInvoiceItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingInvoiceItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting['invoice-items'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountingInvoiceItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountingInvoiceItemsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountingInvoiceItemsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounting)['invoice-items'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounting', '/accounting/invoice-items/:id', keyArgs] as const
}

export function getAccountingInvoiceItemsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounting)['invoice-items'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingInvoiceItemsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting['invoice-items'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingInvoiceItemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting)['invoice-items'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounting)['invoice-items'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting)['invoice-items'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting)['invoice-items'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountingInvoiceItemsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.accounting)['invoice-items'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingInvoiceItemsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingInvoiceItemsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting['invoice-items'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAccountingInvoiceItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountingInvoiceItemsIdMutationOptions<
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

export function usePatchAccountingInvoiceItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountingInvoiceItemsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountingInvoicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.invoices.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounting', '/accounting/invoices', keyArgs] as const
}

export function getAccountingInvoicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.invoices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingInvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting.invoices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingInvoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.invoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.invoices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounting.invoices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounting.invoices.$get>>>
            >
          >,
          ReturnType<typeof getAccountingInvoicesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.invoices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingInvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingInvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting.invoices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountingInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounting.invoices.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.accounting.invoices.$post>,
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
  const mutationDefaults = getPostAccountingInvoicesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountingInvoicesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting.invoices)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounting', '/accounting/invoices/:id', keyArgs] as const
}

export function getAccountingInvoicesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting.invoices)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingInvoicesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting.invoices[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingInvoicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting.invoices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting.invoices)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting.invoices)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting.invoices)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountingInvoicesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.accounting.invoices)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingInvoicesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingInvoicesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting.invoices[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAccountingInvoicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountingInvoicesIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchAccountingInvoicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountingInvoicesIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountingJournalEntriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting)['journal-entries']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounting', '/accounting/journal-entries', keyArgs] as const
}

export function getAccountingJournalEntriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting)['journal-entries']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingJournalEntriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting['journal-entries'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingJournalEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting)['journal-entries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting)['journal-entries']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting)['journal-entries']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting)['journal-entries']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountingJournalEntriesQueryKey>
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
          Awaited<ReturnType<(typeof client.accounting)['journal-entries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingJournalEntriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingJournalEntriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting['journal-entries'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountingJournalEntries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountingJournalEntriesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountingJournalEntriesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounting)['journal-entries'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounting', '/accounting/journal-entries/:id', keyArgs] as const
}

export function getAccountingJournalEntriesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounting)['journal-entries'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingJournalEntriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting['journal-entries'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingJournalEntriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting)['journal-entries'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounting)['journal-entries'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting)['journal-entries'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting)['journal-entries'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountingJournalEntriesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.accounting)['journal-entries'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingJournalEntriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingJournalEntriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting['journal-entries'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAccountingJournalEntriesId<
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
                Awaited<ReturnType<(typeof client.accounting)['journal-entries'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounting)['journal-entries'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAccountingJournalEntriesIdMutationOptions<
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

export function usePatchAccountingJournalEntriesId<
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
                Awaited<ReturnType<(typeof client.accounting)['journal-entries'][':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounting)['journal-entries'][':id']['$patch']>,
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
  const mutationDefaults = getPatchAccountingJournalEntriesIdMutationOptions<
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

export function getAccountingLedgerAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting)['ledger-accounts']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounting', '/accounting/ledger-accounts', keyArgs] as const
}

export function getAccountingLedgerAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting)['ledger-accounts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingLedgerAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting['ledger-accounts'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingLedgerAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting)['ledger-accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting)['ledger-accounts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting)['ledger-accounts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting)['ledger-accounts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountingLedgerAccountsQueryKey>
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
          Awaited<ReturnType<(typeof client.accounting)['ledger-accounts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingLedgerAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingLedgerAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting['ledger-accounts'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountingLedgerAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountingLedgerAccountsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountingLedgerAccountsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounting)['ledger-accounts'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounting', '/accounting/ledger-accounts/:id', keyArgs] as const
}

export function getAccountingLedgerAccountsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounting)['ledger-accounts'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingLedgerAccountsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting['ledger-accounts'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingLedgerAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting)['ledger-accounts'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounting)['ledger-accounts'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting)['ledger-accounts'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting)['ledger-accounts'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountingLedgerAccountsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.accounting)['ledger-accounts'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingLedgerAccountsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingLedgerAccountsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting['ledger-accounts'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAccountingLedgerAccountsId<
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
                Awaited<ReturnType<(typeof client.accounting)['ledger-accounts'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounting)['ledger-accounts'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAccountingLedgerAccountsIdMutationOptions<
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

export function usePatchAccountingLedgerAccountsId<
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
                Awaited<ReturnType<(typeof client.accounting)['ledger-accounts'][':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounting)['ledger-accounts'][':id']['$patch']>,
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
  const mutationDefaults = getPatchAccountingLedgerAccountsIdMutationOptions<
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

export function getAccountingPaymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.payments.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounting', '/accounting/payments', keyArgs] as const
}

export function getAccountingPaymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.payments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingPaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting.payments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingPayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.payments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounting.payments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounting.payments.$get>>>
            >
          >,
          ReturnType<typeof getAccountingPaymentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.payments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingPaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingPaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting.payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountingPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounting.payments.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.accounting.payments.$post>,
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
  const mutationDefaults = getPostAccountingPaymentsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountingPaymentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting.payments)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounting', '/accounting/payments/:id', keyArgs] as const
}

export function getAccountingPaymentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting.payments)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingPaymentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting.payments[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingPaymentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting.payments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting.payments)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting.payments)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting.payments)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountingPaymentsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.accounting.payments)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingPaymentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingPaymentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting.payments[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAccountingPaymentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountingPaymentsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchAccountingPaymentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountingPaymentsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountingProfitAndLossQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting)['profit-and-loss']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounting', '/accounting/profit-and-loss', keyArgs] as const
}

export function getAccountingProfitAndLossQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting)['profit-and-loss']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingProfitAndLossQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting['profit-and-loss'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingProfitAndLoss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting)['profit-and-loss']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting)['profit-and-loss']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting)['profit-and-loss']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting)['profit-and-loss']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountingProfitAndLossQueryKey>
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
          Awaited<ReturnType<(typeof client.accounting)['profit-and-loss']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingProfitAndLossQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingProfitAndLossQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting['profit-and-loss'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountingSuppliersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.suppliers.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounting', '/accounting/suppliers', keyArgs] as const
}

export function getAccountingSuppliersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.suppliers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingSuppliersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting.suppliers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingSuppliers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.suppliers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.suppliers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounting.suppliers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounting.suppliers.$get>>>
            >
          >,
          ReturnType<typeof getAccountingSuppliersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.suppliers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingSuppliersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingSuppliersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting.suppliers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountingSuppliers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounting.suppliers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.accounting.suppliers.$post>,
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
  const mutationDefaults = getPostAccountingSuppliersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountingSuppliersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting.suppliers)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounting', '/accounting/suppliers/:id', keyArgs] as const
}

export function getAccountingSuppliersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting.suppliers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingSuppliersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting.suppliers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingSuppliersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting.suppliers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting.suppliers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting.suppliers)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting.suppliers)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountingSuppliersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.accounting.suppliers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingSuppliersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingSuppliersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting.suppliers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAccountingSuppliersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountingSuppliersIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchAccountingSuppliersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountingSuppliersIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountingTaxRatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting)['tax-rates']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounting', '/accounting/tax-rates', keyArgs] as const
}

export function getAccountingTaxRatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting)['tax-rates']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingTaxRatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting['tax-rates'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingTaxRates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounting)['tax-rates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting)['tax-rates']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting)['tax-rates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting)['tax-rates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountingTaxRatesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounting)['tax-rates']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingTaxRatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingTaxRatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting['tax-rates'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountingTaxRates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountingTaxRatesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountingTaxRatesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting)['tax-rates'][':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounting', '/accounting/tax-rates/:id', keyArgs] as const
}

export function getAccountingTaxRatesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting)['tax-rates'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingTaxRatesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting['tax-rates'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingTaxRatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting)['tax-rates'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounting)['tax-rates'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting)['tax-rates'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounting)['tax-rates'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountingTaxRatesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.accounting)['tax-rates'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingTaxRatesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingTaxRatesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting['tax-rates'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAccountingTaxRatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountingTaxRatesIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchAccountingTaxRatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountingTaxRatesIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
