import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function getDynamicOffersQueryKey(args: InferRequestType<typeof client.dynamicOffers.$get>) {
  return ['dynamicOffers', '/dynamicOffers', args] as const
}

export function getDynamicOffersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dynamicOffers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dynamicOffers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dynamicOffers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDynamicOffersQueryKey>
  >({
    queryKey: getDynamicOffersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dynamicOffers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDynamicOffers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dynamicOffers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.dynamicOffers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dynamicOffers.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getDynamicOffersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDynamicOffersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostDynamicOffersIdCalculate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDynamicOffersIdCalculateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDynamicOffersIdGrantOffer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDynamicOffersIdGrantOfferMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGrantAccountsIdQueryKey(
  args: InferRequestType<(typeof client.grantAccounts)[':id']['$get']>,
) {
  return ['grantAccounts', '/grantAccounts/:id', args] as const
}

export function getGrantAccountsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.grantAccounts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.grantAccounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.grantAccounts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGrantAccountsIdQueryKey>
  >({
    queryKey: getGrantAccountsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.grantAccounts[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGrantAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.grantAccounts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.grantAccounts)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.grantAccounts)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGrantAccountsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGrantAccountsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGrantOffersQueryKey(args: InferRequestType<typeof client.grantOffers.$get>) {
  return ['grantOffers', '/grantOffers', args] as const
}

export function getGrantOffersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grantOffers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.grantOffers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grantOffers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGrantOffersQueryKey>
  >({
    queryKey: getGrantOffersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.grantOffers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGrantOffers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grantOffers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.grantOffers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grantOffers.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getGrantOffersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGrantOffersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGrantOffersIdQueryKey(
  args: InferRequestType<(typeof client.grantOffers)[':id']['$get']>,
) {
  return ['grantOffers', '/grantOffers/:id', args] as const
}

export function getGrantOffersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.grantOffers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.grantOffers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.grantOffers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGrantOffersIdQueryKey>
  >({
    queryKey: getGrantOffersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.grantOffers[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGrantOffersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.grantOffers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.grantOffers)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.grantOffers)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGrantOffersIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGrantOffersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGrantsQueryKey(args: InferRequestType<typeof client.grants.$get>) {
  return ['grants', '/grants', args] as const
}

export function getGrantsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grants.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.grants.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grants.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGrantsQueryKey>
  >({
    queryKey: getGrantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.grants.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGrants<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grants.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.grants.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grants.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getGrantsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGrantsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostGrants<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grants.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.grants.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGrantsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGrantsGrantIdQueryKey(
  args: InferRequestType<(typeof client.grants)[':grantId']['$get']>,
) {
  return ['grants', '/grants/:grantId', args] as const
}

export function getGrantsGrantIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.grants)[':grantId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.grants)[':grantId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.grants)[':grantId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGrantsGrantIdQueryKey>
  >({
    queryKey: getGrantsGrantIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.grants[':grantId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGrantsGrantId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.grants)[':grantId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.grants)[':grantId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.grants)[':grantId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGrantsGrantIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGrantsGrantIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGrantsGrantIdDisbursementsQueryKey(
  args: InferRequestType<(typeof client.grants)[':grantId']['disbursements']['$get']>,
) {
  return ['grants', '/grants/:grantId/disbursements', args] as const
}

export function getGrantsGrantIdDisbursementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.grants)[':grantId']['disbursements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.grants)[':grantId']['disbursements']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGrantsGrantIdDisbursementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.grants[':grantId'].disbursements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGrantsGrantIdDisbursements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.grants)[':grantId']['disbursements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.grants)[':grantId']['disbursements']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGrantsGrantIdDisbursementsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getGrantsGrantIdDisbursementsDisbursementIdQueryKey(
  args: InferRequestType<
    (typeof client.grants)[':grantId']['disbursements'][':disbursementId']['$get']
  >,
) {
  return ['grants', '/grants/:grantId/disbursements/:disbursementId', args] as const
}

export function getGrantsGrantIdDisbursementsDisbursementIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.grants)[':grantId']['disbursements'][':disbursementId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGrantsGrantIdDisbursementsDisbursementIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.grants[':grantId'].disbursements[':disbursementId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGrantsGrantIdDisbursementsDisbursementId<
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
  args: () => InferRequestType<
    (typeof client.grants)[':grantId']['disbursements'][':disbursementId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGrantsGrantIdDisbursementsDisbursementIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPatchGrantsGrantIdDisbursementsDisbursementId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchGrantsGrantIdDisbursementsDisbursementIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
