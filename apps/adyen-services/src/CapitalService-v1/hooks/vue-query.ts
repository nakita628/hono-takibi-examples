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

export function getDynamicOffersKey() {
  return ['dynamicOffers'] as const
}

export function getGrantAccountsKey() {
  return ['grantAccounts'] as const
}

export function getGrantOffersKey() {
  return ['grantOffers'] as const
}

export function getGrantsKey() {
  return ['grants'] as const
}

export function getDynamicOffersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dynamicOffers.$get>>,
) {
  return ['dynamicOffers', '/dynamicOffers', toValue(args)] as const
}

export function getDynamicOffersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dynamicOffers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDynamicOffersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dynamicOffers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDynamicOffers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dynamicOffers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dynamicOffers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dynamicOffers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dynamicOffers.$get>>>>
          >,
          ReturnType<typeof getDynamicOffersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dynamicOffers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDynamicOffersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDynamicOffersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dynamicOffers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDynamicOffersIdCalculateMutationKey() {
  return ['dynamicOffers', '/dynamicOffers/:id/calculate', 'POST'] as const
}

export function getPostDynamicOffersIdCalculateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dynamicOffers)[':id']['calculate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dynamicOffers)[':id']['calculate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDynamicOffersIdCalculateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dynamicOffers)[':id']['calculate']['$post']>,
    ) {
      return parseResponse(client.dynamicOffers[':id'].calculate.$post(args, options))
    },
  })
}

export function usePostDynamicOffersIdCalculate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dynamicOffers)[':id']['calculate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dynamicOffers)[':id']['calculate']['$post']>,
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
  const mutationDefaults = getPostDynamicOffersIdCalculateMutationOptions<TError, TOnMutateResult>(
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

export function getPostDynamicOffersIdGrantOfferMutationKey() {
  return ['dynamicOffers', '/dynamicOffers/:id/grantOffer', 'POST'] as const
}

export function getPostDynamicOffersIdGrantOfferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dynamicOffers)[':id']['grantOffer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dynamicOffers)[':id']['grantOffer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDynamicOffersIdGrantOfferMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dynamicOffers)[':id']['grantOffer']['$post']>,
    ) {
      return parseResponse(client.dynamicOffers[':id'].grantOffer.$post(args, options))
    },
  })
}

export function usePostDynamicOffersIdGrantOffer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dynamicOffers)[':id']['grantOffer']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dynamicOffers)[':id']['grantOffer']['$post']>,
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
  const mutationDefaults = getPostDynamicOffersIdGrantOfferMutationOptions<TError, TOnMutateResult>(
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

export function getGrantAccountsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.grantAccounts)[':id']['$get']>>,
) {
  return ['grantAccounts', '/grantAccounts/:id', toValue(args)] as const
}

export function getGrantAccountsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.grantAccounts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGrantAccountsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.grantAccounts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGrantAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.grantAccounts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.grantAccounts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.grantAccounts)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.grantAccounts)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGrantAccountsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.grantAccounts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGrantAccountsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGrantAccountsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.grantAccounts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGrantOffersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.grantOffers.$get>>,
) {
  return ['grantOffers', '/grantOffers', toValue(args)] as const
}

export function getGrantOffersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.grantOffers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGrantOffersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.grantOffers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGrantOffers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grantOffers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.grantOffers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grantOffers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grantOffers.$get>>>>
          >,
          ReturnType<typeof getGrantOffersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grantOffers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGrantOffersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGrantOffersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.grantOffers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGrantOffersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.grantOffers)[':id']['$get']>>,
) {
  return ['grantOffers', '/grantOffers/:id', toValue(args)] as const
}

export function getGrantOffersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.grantOffers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGrantOffersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.grantOffers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGrantOffersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.grantOffers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.grantOffers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.grantOffers)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.grantOffers)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getGrantOffersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.grantOffers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGrantOffersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGrantOffersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.grantOffers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGrantsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.grants.$get>>,
) {
  return ['grants', '/grants', toValue(args)] as const
}

export function getGrantsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.grants.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGrantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.grants.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGrants<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grants.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.grants.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grants.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grants.$get>>>>>,
          ReturnType<typeof getGrantsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grants.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGrantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGrantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.grants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGrantsMutationKey() {
  return ['grants', '/grants', 'POST'] as const
}

export function getPostGrantsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grants.$post>>>>>,
    TError,
    InferRequestType<typeof client.grants.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGrantsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.grants.$post>) {
      return parseResponse(client.grants.$post(args, options))
    },
  })
}

export function usePostGrants<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grants.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.grants.$post>,
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
  const mutationDefaults = getPostGrantsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGrantsGrantIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.grants)[':grantId']['$get']>>,
) {
  return ['grants', '/grants/:grantId', toValue(args)] as const
}

export function getGrantsGrantIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.grants)[':grantId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGrantsGrantIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.grants[':grantId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGrantsGrantId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.grants)[':grantId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.grants)[':grantId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.grants)[':grantId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.grants)[':grantId']['$get']>>>
            >
          >,
          ReturnType<typeof getGrantsGrantIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.grants)[':grantId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGrantsGrantIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGrantsGrantIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.grants[':grantId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGrantsGrantIdDisbursementsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.grants)[':grantId']['disbursements']['$get']>
  >,
) {
  return ['grants', '/grants/:grantId/disbursements', toValue(args)] as const
}

export function getGrantsGrantIdDisbursementsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.grants)[':grantId']['disbursements']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGrantsGrantIdDisbursementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.grants[':grantId'].disbursements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGrantsGrantIdDisbursements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.grants)[':grantId']['disbursements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.grants)[':grantId']['disbursements']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.grants)[':grantId']['disbursements']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.grants)[':grantId']['disbursements']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGrantsGrantIdDisbursementsQueryKey>
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
          Awaited<ReturnType<(typeof client.grants)[':grantId']['disbursements']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGrantsGrantIdDisbursementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGrantsGrantIdDisbursementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.grants[':grantId'].disbursements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGrantsGrantIdDisbursementsDisbursementIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.grants)[':grantId']['disbursements'][':disbursementId']['$get']>
  >,
) {
  return ['grants', '/grants/:grantId/disbursements/:disbursementId', toValue(args)] as const
}

export function getGrantsGrantIdDisbursementsDisbursementIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.grants)[':grantId']['disbursements'][':disbursementId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGrantsGrantIdDisbursementsDisbursementIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.grants[':grantId'].disbursements[':disbursementId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGrantsGrantIdDisbursementsDisbursementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.grants)[':grantId']['disbursements'][':disbursementId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.grants)[':grantId']['disbursements'][':disbursementId']['$get']>
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
                    (typeof client.grants)[':grantId']['disbursements'][':disbursementId']['$get']
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
                    (typeof client.grants)[':grantId']['disbursements'][':disbursementId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGrantsGrantIdDisbursementsDisbursementIdQueryKey>
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
              (typeof client.grants)[':grantId']['disbursements'][':disbursementId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGrantsGrantIdDisbursementsDisbursementIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGrantsGrantIdDisbursementsDisbursementIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.grants[':grantId'].disbursements[':disbursementId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchGrantsGrantIdDisbursementsDisbursementIdMutationKey() {
  return ['grants', '/grants/:grantId/disbursements/:disbursementId', 'PATCH'] as const
}

export function getPatchGrantsGrantIdDisbursementsDisbursementIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.grants)[':grantId']['disbursements'][':disbursementId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.grants)[':grantId']['disbursements'][':disbursementId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchGrantsGrantIdDisbursementsDisbursementIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.grants)[':grantId']['disbursements'][':disbursementId']['$patch']
      >,
    ) {
      return parseResponse(
        client.grants[':grantId'].disbursements[':disbursementId'].$patch(args, options),
      )
    },
  })
}

export function usePatchGrantsGrantIdDisbursementsDisbursementId<
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
                    (typeof client.grants)[':grantId']['disbursements'][':disbursementId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.grants)[':grantId']['disbursements'][':disbursementId']['$patch']
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
  const mutationDefaults = getPatchGrantsGrantIdDisbursementsDisbursementIdMutationOptions<
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
