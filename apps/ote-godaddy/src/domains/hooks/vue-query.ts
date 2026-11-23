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

export function getV1Key() {
  return ['v1'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getV1DomainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.domains.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/domains', keyArgs] as const
}

export function getV1DomainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.domains.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.domains.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Domains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.domains.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>
          >,
          ReturnType<typeof getV1DomainsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1DomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.domains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DomainsAgreementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.domains.agreements.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/domains/agreements', keyArgs] as const
}

export function getV1DomainsAgreementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.domains.agreements.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DomainsAgreementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.domains.agreements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DomainsAgreements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.agreements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.domains.agreements.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.agreements.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.agreements.$get>>>
            >
          >,
          ReturnType<typeof getV1DomainsAgreementsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.agreements.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DomainsAgreementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DomainsAgreementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.domains.agreements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DomainsAvailableQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.domains.available.$get>>,
) {
  return ['v1', '/v1/domains/available', toValue(args)] as const
}

export function getV1DomainsAvailableQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.domains.available.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DomainsAvailableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.domains.available.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DomainsAvailable<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.available.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.domains.available.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.available.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.available.$get>>>
            >
          >,
          ReturnType<typeof getV1DomainsAvailableQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.available.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1DomainsAvailableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DomainsAvailableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.domains.available.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1DomainsAvailableMutationKey() {
  return ['v1', '/v1/domains/available', 'POST'] as const
}

export function getPostV1DomainsAvailableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.available.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.domains.available.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainsAvailableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.domains.available.$post>) {
      return parseResponse(client.v1.domains.available.$post(args, options))
    },
  })
}

export function usePostV1DomainsAvailable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.available.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.domains.available.$post>,
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
  const mutationDefaults = getPostV1DomainsAvailableMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1DomainsContactsValidateMutationKey() {
  return ['v1', '/v1/domains/contacts/validate', 'POST'] as const
}

export function getPostV1DomainsContactsValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.domains.contacts.validate.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.domains.contacts.validate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainsContactsValidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.domains.contacts.validate.$post>) {
      return parseResponse(client.v1.domains.contacts.validate.$post(args, options))
    },
  })
}

export function usePostV1DomainsContactsValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v1.domains.contacts.validate.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.domains.contacts.validate.$post>,
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
  const mutationDefaults = getPostV1DomainsContactsValidateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1DomainsPurchaseMutationKey() {
  return ['v1', '/v1/domains/purchase', 'POST'] as const
}

export function getPostV1DomainsPurchaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.purchase.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.domains.purchase.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainsPurchaseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.domains.purchase.$post>) {
      return parseResponse(client.v1.domains.purchase.$post(args, options))
    },
  })
}

export function usePostV1DomainsPurchase<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.purchase.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.domains.purchase.$post>,
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
  const mutationDefaults = getPostV1DomainsPurchaseMutationOptions<TError, TOnMutateResult>(
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

export function getV1DomainsPurchaseSchemaTldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.domains.purchase.schema)[':tld']['$get']>
  >,
) {
  return ['v1', '/v1/domains/purchase/schema/:tld', toValue(args)] as const
}

export function getV1DomainsPurchaseSchemaTldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.domains.purchase.schema)[':tld']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DomainsPurchaseSchemaTldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.domains.purchase.schema[':tld'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DomainsPurchaseSchemaTld<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.domains.purchase.schema)[':tld']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.domains.purchase.schema)[':tld']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.domains.purchase.schema)[':tld']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.domains.purchase.schema)[':tld']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DomainsPurchaseSchemaTldQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.domains.purchase.schema)[':tld']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DomainsPurchaseSchemaTldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DomainsPurchaseSchemaTldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.domains.purchase.schema[':tld'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1DomainsPurchaseValidateMutationKey() {
  return ['v1', '/v1/domains/purchase/validate', 'POST'] as const
}

export function getPostV1DomainsPurchaseValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.purchase.validate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.domains.purchase.validate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainsPurchaseValidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.domains.purchase.validate.$post>) {
      return parseResponse(client.v1.domains.purchase.validate.$post(args, options))
    },
  })
}

export function usePostV1DomainsPurchaseValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.domains.purchase.validate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.domains.purchase.validate.$post>,
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
  const mutationDefaults = getPostV1DomainsPurchaseValidateMutationOptions<TError, TOnMutateResult>(
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

export function getV1DomainsSuggestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.domains.suggest.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/domains/suggest', keyArgs] as const
}

export function getV1DomainsSuggestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.domains.suggest.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DomainsSuggestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.domains.suggest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DomainsSuggest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.suggest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.domains.suggest.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.suggest.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.suggest.$get>>>
            >
          >,
          ReturnType<typeof getV1DomainsSuggestQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.suggest.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1DomainsSuggestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DomainsSuggestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.domains.suggest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DomainsTldsQueryKey() {
  return ['v1', '/v1/domains/tlds'] as const
}

export function getV1DomainsTldsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1DomainsTldsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.domains.tlds.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1DomainsTlds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.tlds.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.tlds.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.tlds.$get>>>
            >
          >,
          ReturnType<typeof getV1DomainsTldsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.tlds.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1DomainsTldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1DomainsTldsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.domains.tlds.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DomainsDomainQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.domains)[':domain']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/domains/:domain', keyArgs] as const
}

export function getV1DomainsDomainQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.domains)[':domain']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DomainsDomainQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.domains[':domain'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DomainsDomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.domains)[':domain']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DomainsDomainQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DomainsDomainQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DomainsDomainQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.domains[':domain'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1DomainsDomainMutationKey() {
  return ['v1', '/v1/domains/:domain', 'DELETE'] as const
}

export function getDeleteV1DomainsDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.domains)[':domain']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DomainsDomainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.domains)[':domain']['$delete']>) {
      return parseResponse(client.v1.domains[':domain'].$delete(args, options))
    },
  })
}

export function useDeleteV1DomainsDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.domains)[':domain']['$delete']>,
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
  const mutationDefaults = getDeleteV1DomainsDomainMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1DomainsDomainMutationKey() {
  return ['v1', '/v1/domains/:domain', 'PATCH'] as const
}

export function getPatchV1DomainsDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.domains)[':domain']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1DomainsDomainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.domains)[':domain']['$patch']>) {
      return parseResponse(client.v1.domains[':domain'].$patch(args, options))
    },
  })
}

export function usePatchV1DomainsDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.domains)[':domain']['$patch']>,
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
  const mutationDefaults = getPatchV1DomainsDomainMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1DomainsDomainContactsMutationKey() {
  return ['v1', '/v1/domains/:domain/contacts', 'PATCH'] as const
}

export function getPatchV1DomainsDomainContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domains)[':domain']['contacts']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.domains)[':domain']['contacts']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1DomainsDomainContactsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.domains)[':domain']['contacts']['$patch']>,
    ) {
      return parseResponse(client.v1.domains[':domain'].contacts.$patch(args, options))
    },
  })
}

export function usePatchV1DomainsDomainContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.domains)[':domain']['contacts']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.domains)[':domain']['contacts']['$patch']>,
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
  const mutationDefaults = getPatchV1DomainsDomainContactsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1DomainsDomainPrivacyMutationKey() {
  return ['v1', '/v1/domains/:domain/privacy', 'DELETE'] as const
}

export function getDeleteV1DomainsDomainPrivacyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains)[':domain']['privacy']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.domains)[':domain']['privacy']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DomainsDomainPrivacyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.domains)[':domain']['privacy']['$delete']>,
    ) {
      return parseResponse(client.v1.domains[':domain'].privacy.$delete(args, options))
    },
  })
}

export function useDeleteV1DomainsDomainPrivacy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.domains)[':domain']['privacy']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.domains)[':domain']['privacy']['$delete']>,
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
  const mutationDefaults = getDeleteV1DomainsDomainPrivacyMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1DomainsDomainPrivacyPurchaseMutationKey() {
  return ['v1', '/v1/domains/:domain/privacy/purchase', 'POST'] as const
}

export function getPostV1DomainsDomainPrivacyPurchaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains)[':domain']['privacy']['purchase']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.domains)[':domain']['privacy']['purchase']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainsDomainPrivacyPurchaseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.domains)[':domain']['privacy']['purchase']['$post']>,
    ) {
      return parseResponse(client.v1.domains[':domain'].privacy.purchase.$post(args, options))
    },
  })
}

export function usePostV1DomainsDomainPrivacyPurchase<
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
                  ReturnType<(typeof client.v1.domains)[':domain']['privacy']['purchase']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.domains)[':domain']['privacy']['purchase']['$post']>,
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
  const mutationDefaults = getPostV1DomainsDomainPrivacyPurchaseMutationOptions<
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

export function getPutV1DomainsDomainRecordsMutationKey() {
  return ['v1', '/v1/domains/:domain/records', 'PUT'] as const
}

export function getPutV1DomainsDomainRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains)[':domain']['records']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.domains)[':domain']['records']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1DomainsDomainRecordsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.domains)[':domain']['records']['$put']>,
    ) {
      return parseResponse(client.v1.domains[':domain'].records.$put(args, options))
    },
  })
}

export function usePutV1DomainsDomainRecords<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.domains)[':domain']['records']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.domains)[':domain']['records']['$put']>,
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
  const mutationDefaults = getPutV1DomainsDomainRecordsMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1DomainsDomainRecordsMutationKey() {
  return ['v1', '/v1/domains/:domain/records', 'PATCH'] as const
}

export function getPatchV1DomainsDomainRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains)[':domain']['records']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.domains)[':domain']['records']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1DomainsDomainRecordsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.domains)[':domain']['records']['$patch']>,
    ) {
      return parseResponse(client.v1.domains[':domain'].records.$patch(args, options))
    },
  })
}

export function usePatchV1DomainsDomainRecords<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.domains)[':domain']['records']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.domains)[':domain']['records']['$patch']>,
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
  const mutationDefaults = getPatchV1DomainsDomainRecordsMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1DomainsDomainRecordsTypeMutationKey() {
  return ['v1', '/v1/domains/:domain/records/:type', 'PUT'] as const
}

export function getPutV1DomainsDomainRecordsTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains)[':domain']['records'][':type']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.domains)[':domain']['records'][':type']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1DomainsDomainRecordsTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.domains)[':domain']['records'][':type']['$put']>,
    ) {
      return parseResponse(client.v1.domains[':domain'].records[':type'].$put(args, options))
    },
  })
}

export function usePutV1DomainsDomainRecordsType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.domains)[':domain']['records'][':type']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.domains)[':domain']['records'][':type']['$put']>,
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
  const mutationDefaults = getPutV1DomainsDomainRecordsTypeMutationOptions<TError, TOnMutateResult>(
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

export function getV1DomainsDomainRecordsTypeNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.domains)[':domain']['records'][':type'][':name']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/domains/:domain/records/:type/:name', keyArgs] as const
}

export function getV1DomainsDomainRecordsTypeNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.domains)[':domain']['records'][':type'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DomainsDomainRecordsTypeNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.domains[':domain'].records[':type'][':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DomainsDomainRecordsTypeName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.domains)[':domain']['records'][':type'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.domains)[':domain']['records'][':type'][':name']['$get']>
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
                    (typeof client.v1.domains)[':domain']['records'][':type'][':name']['$get']
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
                    (typeof client.v1.domains)[':domain']['records'][':type'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1DomainsDomainRecordsTypeNameQueryKey>
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
            ReturnType<(typeof client.v1.domains)[':domain']['records'][':type'][':name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DomainsDomainRecordsTypeNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DomainsDomainRecordsTypeNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.domains[':domain'].records[':type'][':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1DomainsDomainRecordsTypeNameMutationKey() {
  return ['v1', '/v1/domains/:domain/records/:type/:name', 'PUT'] as const
}

export function getPutV1DomainsDomainRecordsTypeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.domains)[':domain']['records'][':type'][':name']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.domains)[':domain']['records'][':type'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1DomainsDomainRecordsTypeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.domains)[':domain']['records'][':type'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.domains[':domain'].records[':type'][':name'].$put(args, options),
      )
    },
  })
}

export function usePutV1DomainsDomainRecordsTypeName<
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
                    (typeof client.v1.domains)[':domain']['records'][':type'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.domains)[':domain']['records'][':type'][':name']['$put']
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
  const mutationDefaults = getPutV1DomainsDomainRecordsTypeNameMutationOptions<
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

export function getDeleteV1DomainsDomainRecordsTypeNameMutationKey() {
  return ['v1', '/v1/domains/:domain/records/:type/:name', 'DELETE'] as const
}

export function getDeleteV1DomainsDomainRecordsTypeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.domains)[':domain']['records'][':type'][':name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.domains)[':domain']['records'][':type'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DomainsDomainRecordsTypeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.domains)[':domain']['records'][':type'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.domains[':domain'].records[':type'][':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1DomainsDomainRecordsTypeName<
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
                      (typeof client.v1.domains)[':domain']['records'][':type'][':name']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.domains)[':domain']['records'][':type'][':name']['$delete']
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
  const mutationDefaults = getDeleteV1DomainsDomainRecordsTypeNameMutationOptions<
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

export function getPostV1DomainsDomainRenewMutationKey() {
  return ['v1', '/v1/domains/:domain/renew', 'POST'] as const
}

export function getPostV1DomainsDomainRenewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains)[':domain']['renew']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.domains)[':domain']['renew']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainsDomainRenewMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.domains)[':domain']['renew']['$post']>,
    ) {
      return parseResponse(client.v1.domains[':domain'].renew.$post(args, options))
    },
  })
}

export function usePostV1DomainsDomainRenew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.domains)[':domain']['renew']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.domains)[':domain']['renew']['$post']>,
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
  const mutationDefaults = getPostV1DomainsDomainRenewMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1DomainsDomainTransferMutationKey() {
  return ['v1', '/v1/domains/:domain/transfer', 'POST'] as const
}

export function getPostV1DomainsDomainTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains)[':domain']['transfer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.domains)[':domain']['transfer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainsDomainTransferMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.domains)[':domain']['transfer']['$post']>,
    ) {
      return parseResponse(client.v1.domains[':domain'].transfer.$post(args, options))
    },
  })
}

export function usePostV1DomainsDomainTransfer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.domains)[':domain']['transfer']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.domains)[':domain']['transfer']['$post']>,
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
  const mutationDefaults = getPostV1DomainsDomainTransferMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1DomainsDomainVerifyRegistrantEmailMutationKey() {
  return ['v1', '/v1/domains/:domain/verifyRegistrantEmail', 'POST'] as const
}

export function getPostV1DomainsDomainVerifyRegistrantEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.domains)[':domain']['verifyRegistrantEmail']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.domains)[':domain']['verifyRegistrantEmail']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainsDomainVerifyRegistrantEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.domains)[':domain']['verifyRegistrantEmail']['$post']
      >,
    ) {
      return parseResponse(client.v1.domains[':domain'].verifyRegistrantEmail.$post(args, options))
    },
  })
}

export function usePostV1DomainsDomainVerifyRegistrantEmail<
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
                    (typeof client.v1.domains)[':domain']['verifyRegistrantEmail']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.domains)[':domain']['verifyRegistrantEmail']['$post']>,
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
  const mutationDefaults = getPostV1DomainsDomainVerifyRegistrantEmailMutationOptions<
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

export function getV2CustomersCustomerIdDomainsForwardsFqdnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$get']
    >
  >,
) {
  return ['v2', '/v2/customers/:customerId/domains/forwards/:fqdn', toValue(args)] as const
}

export function getV2CustomersCustomerIdDomainsForwardsFqdnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomersCustomerIdDomainsForwardsFqdnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customers[':customerId'].domains.forwards[':fqdn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomersCustomerIdDomainsForwardsFqdn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$get']
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
                    (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$get']
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
                    (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CustomersCustomerIdDomainsForwardsFqdnQueryKey>
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
              (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersCustomerIdDomainsForwardsFqdnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomersCustomerIdDomainsForwardsFqdnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customers[':customerId'].domains.forwards[':fqdn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2CustomersCustomerIdDomainsForwardsFqdnMutationKey() {
  return ['v2', '/v2/customers/:customerId/domains/forwards/:fqdn', 'PUT'] as const
}

export function getPutV2CustomersCustomerIdDomainsForwardsFqdnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2CustomersCustomerIdDomainsForwardsFqdnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.customers[':customerId'].domains.forwards[':fqdn'].$put(args, options),
      )
    },
  })
}

export function usePutV2CustomersCustomerIdDomainsForwardsFqdn<
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
                      (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$put']
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
  const mutationDefaults = getPutV2CustomersCustomerIdDomainsForwardsFqdnMutationOptions<
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

export function getPostV2CustomersCustomerIdDomainsForwardsFqdnMutationKey() {
  return ['v2', '/v2/customers/:customerId/domains/forwards/:fqdn', 'POST'] as const
}

export function getPostV2CustomersCustomerIdDomainsForwardsFqdnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2CustomersCustomerIdDomainsForwardsFqdnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.customers[':customerId'].domains.forwards[':fqdn'].$post(args, options),
      )
    },
  })
}

export function usePostV2CustomersCustomerIdDomainsForwardsFqdn<
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
                      (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$post']
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
  const mutationDefaults = getPostV2CustomersCustomerIdDomainsForwardsFqdnMutationOptions<
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

export function getDeleteV2CustomersCustomerIdDomainsForwardsFqdnMutationKey() {
  return ['v2', '/v2/customers/:customerId/domains/forwards/:fqdn', 'DELETE'] as const
}

export function getDeleteV2CustomersCustomerIdDomainsForwardsFqdnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2CustomersCustomerIdDomainsForwardsFqdnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.customers[':customerId'].domains.forwards[':fqdn'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2CustomersCustomerIdDomainsForwardsFqdn<
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
                      (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.customers)[':customerId']['domains']['forwards'][':fqdn']['$delete']
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
  const mutationDefaults = getDeleteV2CustomersCustomerIdDomainsForwardsFqdnMutationOptions<
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

export function getV2CustomersCustomerIdDomainsNotificationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains']['notifications']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v2', '/v2/customers/:customerId/domains/notifications', keyArgs] as const
}

export function getV2CustomersCustomerIdDomainsNotificationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains']['notifications']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomersCustomerIdDomainsNotificationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customers[':customerId'].domains.notifications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomersCustomerIdDomainsNotifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customers)[':customerId']['domains']['notifications']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains']['notifications']['$get']
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
                    (typeof client.v2.customers)[':customerId']['domains']['notifications']['$get']
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
                    (typeof client.v2.customers)[':customerId']['domains']['notifications']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CustomersCustomerIdDomainsNotificationsQueryKey>
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
              (typeof client.v2.customers)[':customerId']['domains']['notifications']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersCustomerIdDomainsNotificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomersCustomerIdDomainsNotificationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customers[':customerId'].domains.notifications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomersCustomerIdDomainsNotificationsOptInQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains']['notifications']['optIn']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v2', '/v2/customers/:customerId/domains/notifications/optIn', keyArgs] as const
}

export function getV2CustomersCustomerIdDomainsNotificationsOptInQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains']['notifications']['optIn']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomersCustomerIdDomainsNotificationsOptInQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customers[':customerId'].domains.notifications.optIn.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomersCustomerIdDomainsNotificationsOptIn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customers)[':customerId']['domains']['notifications']['optIn']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains']['notifications']['optIn']['$get']
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
                    (typeof client.v2.customers)[':customerId']['domains']['notifications']['optIn']['$get']
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
                    (typeof client.v2.customers)[':customerId']['domains']['notifications']['optIn']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CustomersCustomerIdDomainsNotificationsOptInQueryKey>
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
              (typeof client.v2.customers)[':customerId']['domains']['notifications']['optIn']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersCustomerIdDomainsNotificationsOptInQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomersCustomerIdDomainsNotificationsOptInQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customers[':customerId'].domains.notifications.optIn.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2CustomersCustomerIdDomainsNotificationsOptInMutationKey() {
  return ['v2', '/v2/customers/:customerId/domains/notifications/optIn', 'PUT'] as const
}

export function getPutV2CustomersCustomerIdDomainsNotificationsOptInMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['domains']['notifications']['optIn']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains']['notifications']['optIn']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2CustomersCustomerIdDomainsNotificationsOptInMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.customers)[':customerId']['domains']['notifications']['optIn']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.customers[':customerId'].domains.notifications.optIn.$put(args, options),
      )
    },
  })
}

export function usePutV2CustomersCustomerIdDomainsNotificationsOptIn<
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
                      (typeof client.v2.customers)[':customerId']['domains']['notifications']['optIn']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.customers)[':customerId']['domains']['notifications']['optIn']['$put']
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
  const mutationDefaults = getPutV2CustomersCustomerIdDomainsNotificationsOptInMutationOptions<
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

export function getV2CustomersCustomerIdDomainsNotificationsSchemasTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains']['notifications']['schemas'][':type']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v2', '/v2/customers/:customerId/domains/notifications/schemas/:type', keyArgs] as const
}

export function getV2CustomersCustomerIdDomainsNotificationsSchemasTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains']['notifications']['schemas'][':type']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomersCustomerIdDomainsNotificationsSchemasTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customers[':customerId'].domains.notifications.schemas[':type'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2CustomersCustomerIdDomainsNotificationsSchemasType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customers)[':customerId']['domains']['notifications']['schemas'][':type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains']['notifications']['schemas'][':type']['$get']
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
                    (typeof client.v2.customers)[':customerId']['domains']['notifications']['schemas'][':type']['$get']
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
                    (typeof client.v2.customers)[':customerId']['domains']['notifications']['schemas'][':type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CustomersCustomerIdDomainsNotificationsSchemasTypeQueryKey>
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
              (typeof client.v2.customers)[':customerId']['domains']['notifications']['schemas'][':type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersCustomerIdDomainsNotificationsSchemasTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2CustomersCustomerIdDomainsNotificationsSchemasTypeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customers[':customerId'].domains.notifications.schemas[':type'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2CustomersCustomerIdDomainsNotificationsNotificationIdAcknowledgeMutationKey() {
  return [
    'v2',
    '/v2/customers/:customerId/domains/notifications/:notificationId/acknowledge',
    'POST',
  ] as const
}

export function getPostV2CustomersCustomerIdDomainsNotificationsNotificationIdAcknowledgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['domains']['notifications'][':notificationId']['acknowledge']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains']['notifications'][':notificationId']['acknowledge']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2CustomersCustomerIdDomainsNotificationsNotificationIdAcknowledgeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.customers)[':customerId']['domains']['notifications'][':notificationId']['acknowledge']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.customers[':customerId'].domains.notifications[
          ':notificationId'
        ].acknowledge.$post(args, options),
      )
    },
  })
}

export function usePostV2CustomersCustomerIdDomainsNotificationsNotificationIdAcknowledge<
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
                      (typeof client.v2.customers)[':customerId']['domains']['notifications'][':notificationId']['acknowledge']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.customers)[':customerId']['domains']['notifications'][':notificationId']['acknowledge']['$post']
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
    getPostV2CustomersCustomerIdDomainsNotificationsNotificationIdAcknowledgeMutationOptions<
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

export function getV2CustomersCustomerIdDomainsDomainQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customers)[':customerId']['domains'][':domain']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v2', '/v2/customers/:customerId/domains/:domain', keyArgs] as const
}

export function getV2CustomersCustomerIdDomainsDomainQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customers)[':customerId']['domains'][':domain']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomersCustomerIdDomainsDomainQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customers[':customerId'].domains[':domain'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomersCustomerIdDomainsDomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customers)[':customerId']['domains'][':domain']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customers)[':customerId']['domains'][':domain']['$get']>
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
                    (typeof client.v2.customers)[':customerId']['domains'][':domain']['$get']
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
                    (typeof client.v2.customers)[':customerId']['domains'][':domain']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CustomersCustomerIdDomainsDomainQueryKey>
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
            ReturnType<(typeof client.v2.customers)[':customerId']['domains'][':domain']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersCustomerIdDomainsDomainQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomersCustomerIdDomainsDomainQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customers[':customerId'].domains[':domain'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomersCustomerIdDomainsDomainActionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v2', '/v2/customers/:customerId/domains/:domain/actions', keyArgs] as const
}

export function getV2CustomersCustomerIdDomainsDomainActionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomersCustomerIdDomainsDomainActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customers[':customerId'].domains[':domain'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomersCustomerIdDomainsDomainActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions']['$get']
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
                    (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions']['$get']
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
                    (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CustomersCustomerIdDomainsDomainActionsQueryKey>
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
              (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersCustomerIdDomainsDomainActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomersCustomerIdDomainsDomainActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customers[':customerId'].domains[':domain'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomersCustomerIdDomainsDomainActionsTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions'][':type']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v2', '/v2/customers/:customerId/domains/:domain/actions/:type', keyArgs] as const
}

export function getV2CustomersCustomerIdDomainsDomainActionsTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions'][':type']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomersCustomerIdDomainsDomainActionsTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customers[':customerId'].domains[':domain'].actions[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomersCustomerIdDomainsDomainActionsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions'][':type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions'][':type']['$get']
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
                    (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions'][':type']['$get']
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
                    (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions'][':type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CustomersCustomerIdDomainsDomainActionsTypeQueryKey>
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
              (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions'][':type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersCustomerIdDomainsDomainActionsTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomersCustomerIdDomainsDomainActionsTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customers[':customerId'].domains[':domain'].actions[':type'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2CustomersCustomerIdDomainsDomainActionsTypeMutationKey() {
  return ['v2', '/v2/customers/:customerId/domains/:domain/actions/:type', 'DELETE'] as const
}

export function getDeleteV2CustomersCustomerIdDomainsDomainActionsTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions'][':type']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions'][':type']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2CustomersCustomerIdDomainsDomainActionsTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions'][':type']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.customers[':customerId'].domains[':domain'].actions[':type'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV2CustomersCustomerIdDomainsDomainActionsType<
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
                      (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions'][':type']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.customers)[':customerId']['domains'][':domain']['actions'][':type']['$delete']
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
  const mutationDefaults = getDeleteV2CustomersCustomerIdDomainsDomainActionsTypeMutationOptions<
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

export function getPostV2CustomersCustomerIdDomainsDomainRedeemMutationKey() {
  return ['v2', '/v2/customers/:customerId/domains/:domain/redeem', 'POST'] as const
}

export function getPostV2CustomersCustomerIdDomainsDomainRedeemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.customers)[':customerId']['domains'][':domain']['redeem']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains'][':domain']['redeem']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2CustomersCustomerIdDomainsDomainRedeemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.customers)[':customerId']['domains'][':domain']['redeem']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.customers[':customerId'].domains[':domain'].redeem.$post(args, options),
      )
    },
  })
}

export function usePostV2CustomersCustomerIdDomainsDomainRedeem<
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
                    (typeof client.v2.customers)[':customerId']['domains'][':domain']['redeem']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.customers)[':customerId']['domains'][':domain']['redeem']['$post']
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
  const mutationDefaults = getPostV2CustomersCustomerIdDomainsDomainRedeemMutationOptions<
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

export function getPostV2CustomersCustomerIdDomainsDomainTransferOutMutationKey() {
  return ['v2', '/v2/customers/:customerId/domains/:domain/transferOut', 'POST'] as const
}

export function getPostV2CustomersCustomerIdDomainsDomainTransferOutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.customers)[':customerId']['domains'][':domain']['transferOut']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['domains'][':domain']['transferOut']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2CustomersCustomerIdDomainsDomainTransferOutMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.customers)[':customerId']['domains'][':domain']['transferOut']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.customers[':customerId'].domains[':domain'].transferOut.$post(args, options),
      )
    },
  })
}

export function usePostV2CustomersCustomerIdDomainsDomainTransferOut<
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
                    (typeof client.v2.customers)[':customerId']['domains'][':domain']['transferOut']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.customers)[':customerId']['domains'][':domain']['transferOut']['$post']
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
  const mutationDefaults = getPostV2CustomersCustomerIdDomainsDomainTransferOutMutationOptions<
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

export function getV2DomainsMaintenancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.domains.maintenances.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v2', '/v2/domains/maintenances', keyArgs] as const
}

export function getV2DomainsMaintenancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.domains.maintenances.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DomainsMaintenancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.domains.maintenances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DomainsMaintenances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.domains.maintenances.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.domains.maintenances.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.domains.maintenances.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.domains.maintenances.$get>>>
            >
          >,
          ReturnType<typeof getV2DomainsMaintenancesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.domains.maintenances.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DomainsMaintenancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DomainsMaintenancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.domains.maintenances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2DomainsMaintenancesMaintenanceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.domains.maintenances)[':maintenanceId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v2', '/v2/domains/maintenances/:maintenanceId', keyArgs] as const
}

export function getV2DomainsMaintenancesMaintenanceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.domains.maintenances)[':maintenanceId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DomainsMaintenancesMaintenanceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.domains.maintenances[':maintenanceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DomainsMaintenancesMaintenanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.domains.maintenances)[':maintenanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.domains.maintenances)[':maintenanceId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.domains.maintenances)[':maintenanceId']['$get']>
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
                  ReturnType<(typeof client.v2.domains.maintenances)[':maintenanceId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2DomainsMaintenancesMaintenanceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.domains.maintenances)[':maintenanceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DomainsMaintenancesMaintenanceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DomainsMaintenancesMaintenanceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.domains.maintenances[':maintenanceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
