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

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getAddressesKey() {
  return ['addresses'] as const
}

export function getCatchementAreasKey() {
  return ['catchement_areas'] as const
}

export function getCreditCardsKey() {
  return ['credit_cards'] as const
}

export function getProductsKey() {
  return ['products'] as const
}

export function getPromotionalCodesKey() {
  return ['promotional_codes'] as const
}

export function getRidesKey() {
  return ['rides'] as const
}

export function getRidesPagePagePerPagePerPageKey() {
  return ['rides?page={page}&per_page={per_page}'] as const
}

export function getVersionKey() {
  return ['{version}'] as const
}

export function getQueryKey() {
  return ['', '/'] as const
}

export function getQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          ReturnType<typeof getQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts', keyArgs] as const
}

export function getAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
          >,
          ReturnType<typeof getAccountsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsMutationKey() {
  return ['accounts', '/accounts', 'PUT'] as const
}

export function getPutAccountsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$put>>>>>,
    TError,
    InferRequestType<typeof client.accounts.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounts.$put>) {
      return parseResponse(client.accounts.$put(args, options))
    },
  })
}

export function usePutAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.accounts.$put>,
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
  const mutationDefaults = getPutAccountsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAccountsMutationKey() {
  return ['accounts', '/accounts', 'POST'] as const
}

export function getPostAccountsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>>,
    TError,
    InferRequestType<typeof client.accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounts.$post>) {
      return parseResponse(client.accounts.$post(args, options))
    },
  })
}

export function usePostAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.accounts.$post>,
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
  const mutationDefaults = getPostAccountsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAccountsPasswordMutationKey() {
  return ['accounts', '/accounts/password', 'POST'] as const
}

export function getPostAccountsPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.password.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.accounts.password.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsPasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounts.password.$post>) {
      return parseResponse(client.accounts.password.$post(args, options))
    },
  })
}

export function usePostAccountsPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounts.password.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.accounts.password.$post>,
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
  const mutationDefaults = getPostAccountsPasswordMutationOptions<TError, TOnMutateResult>(
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

export function getAccountsPaymentMethodsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.payment_methods.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/payment_methods', keyArgs] as const
}

export function getAccountsPaymentMethodsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.payment_methods.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsPaymentMethodsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts.payment_methods.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsPaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.accounts.payment_methods.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.payment_methods.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounts.payment_methods.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounts.payment_methods.$get>>>
            >
          >,
          ReturnType<typeof getAccountsPaymentMethodsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.accounts.payment_methods.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsPaymentMethodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsPaymentMethodsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts.payment_methods.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountsSettingsMutationKey() {
  return ['accounts', '/accounts/settings', 'POST'] as const
}

export function getPostAccountsSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.settings.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.accounts.settings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounts.settings.$post>) {
      return parseResponse(client.accounts.settings.$post(args, options))
    },
  })
}

export function usePostAccountsSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounts.settings.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.accounts.settings.$post>,
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
  const mutationDefaults = getPostAccountsSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountsSignInMutationKey() {
  return ['accounts', '/accounts/sign_in', 'POST'] as const
}

export function getPostAccountsSignInMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.sign_in.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.accounts.sign_in.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsSignInMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounts.sign_in.$post>) {
      return parseResponse(client.accounts.sign_in.$post(args, options))
    },
  })
}

export function usePostAccountsSignIn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounts.sign_in.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.accounts.sign_in.$post>,
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
  const mutationDefaults = getPostAccountsSignInMutationOptions<TError, TOnMutateResult>(
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

export function getPutAccountsUpdatePasswordMutationKey() {
  return ['accounts', '/accounts/update_password', 'PUT'] as const
}

export function getPutAccountsUpdatePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.accounts.update_password.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.accounts.update_password.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsUpdatePasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounts.update_password.$put>) {
      return parseResponse(client.accounts.update_password.$put(args, options))
    },
  })
}

export function usePutAccountsUpdatePassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounts.update_password.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.accounts.update_password.$put>,
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
  const mutationDefaults = getPutAccountsUpdatePasswordMutationOptions<TError, TOnMutateResult>(
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

export function getPostAddressesPlacesAutocompleteMutationKey() {
  return ['addresses', '/addresses/places_autocomplete', 'POST'] as const
}

export function getPostAddressesPlacesAutocompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.addresses.places_autocomplete.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.addresses.places_autocomplete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAddressesPlacesAutocompleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.addresses.places_autocomplete.$post>) {
      return parseResponse(client.addresses.places_autocomplete.$post(args, options))
    },
  })
}

export function usePostAddressesPlacesAutocomplete<
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
                Awaited<ReturnType<typeof client.addresses.places_autocomplete.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.addresses.places_autocomplete.$post>,
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
  const mutationDefaults = getPostAddressesPlacesAutocompleteMutationOptions<
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

export function getPostAddressesPlacesDetailsMutationKey() {
  return ['addresses', '/addresses/places_details', 'POST'] as const
}

export function getPostAddressesPlacesDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.addresses.places_details.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.addresses.places_details.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAddressesPlacesDetailsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.addresses.places_details.$post>) {
      return parseResponse(client.addresses.places_details.$post(args, options))
    },
  })
}

export function usePostAddressesPlacesDetails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.addresses.places_details.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.addresses.places_details.$post>,
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
  const mutationDefaults = getPostAddressesPlacesDetailsMutationOptions<TError, TOnMutateResult>(
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

export function getCatchementAreasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.catchement_areas.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['catchement_areas', '/catchement_areas', keyArgs] as const
}

export function getCatchementAreasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.catchement_areas.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCatchementAreasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catchement_areas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCatchementAreas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catchement_areas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.catchement_areas.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.catchement_areas.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.catchement_areas.$get>>>
            >
          >,
          ReturnType<typeof getCatchementAreasQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catchement_areas.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCatchementAreasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCatchementAreasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.catchement_areas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCatchementAreasIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.catchement_areas)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['catchement_areas', '/catchement_areas/:id', keyArgs] as const
}

export function getCatchementAreasIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.catchement_areas)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCatchementAreasIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catchement_areas[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCatchementAreasId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.catchement_areas)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.catchement_areas)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.catchement_areas)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.catchement_areas)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCatchementAreasIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.catchement_areas)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatchementAreasIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCatchementAreasIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.catchement_areas[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCreditCardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.credit_cards.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['credit_cards', '/credit_cards', keyArgs] as const
}

export function getCreditCardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.credit_cards.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreditCardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.credit_cards.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCreditCards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_cards.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.credit_cards.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_cards.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_cards.$get>>>>
          >,
          ReturnType<typeof getCreditCardsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_cards.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCreditCardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreditCardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.credit_cards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCreditCardsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.credit_cards)[':id']['$get']>>,
) {
  return ['credit_cards', '/credit_cards/:id', toValue(args)] as const
}

export function getCreditCardsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.credit_cards)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreditCardsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.credit_cards[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCreditCardsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.credit_cards)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.credit_cards)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.credit_cards)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.credit_cards)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCreditCardsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.credit_cards)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreditCardsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreditCardsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.credit_cards[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.products.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['products', '/products', keyArgs] as const
}

export function getProductsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.products.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.products.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
          >,
          ReturnType<typeof getProductsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.products.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.products)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['products', '/products/:id', keyArgs] as const
}

export function getProductsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.products)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.products)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getProductsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.products[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPromotionalCodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.promotional_codes.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['promotional_codes', '/promotional_codes', keyArgs] as const
}

export function getPromotionalCodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.promotional_codes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPromotionalCodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.promotional_codes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePromotionalCodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotional_codes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.promotional_codes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.promotional_codes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.promotional_codes.$get>>>
            >
          >,
          ReturnType<typeof getPromotionalCodesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotional_codes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPromotionalCodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPromotionalCodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.promotional_codes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPromotionalCodesMutationKey() {
  return ['promotional_codes', '/promotional_codes', 'POST'] as const
}

export function getPostPromotionalCodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotional_codes.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.promotional_codes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPromotionalCodesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.promotional_codes.$post>) {
      return parseResponse(client.promotional_codes.$post(args, options))
    },
  })
}

export function usePostPromotionalCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.promotional_codes.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.promotional_codes.$post>,
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
  const mutationDefaults = getPostPromotionalCodesMutationOptions<TError, TOnMutateResult>(
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

export function getRidesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rides)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['rides', '/rides/:id', keyArgs] as const
}

export function getRidesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rides)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRidesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rides[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRidesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.rides)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rides)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.rides)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.rides)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getRidesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.rides)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRidesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRidesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rides[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRidesIdCancelQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rides)[':id']['cancel']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['rides', '/rides/:id/cancel', keyArgs] as const
}

export function getRidesIdCancelQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rides)[':id']['cancel']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRidesIdCancelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rides[':id'].cancel.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRidesIdCancel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rides)[':id']['cancel']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rides)[':id']['cancel']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rides)[':id']['cancel']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rides)[':id']['cancel']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRidesIdCancelQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.rides)[':id']['cancel']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRidesIdCancelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRidesIdCancelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rides[':id'].cancel.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRidesIdCancelFeesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rides)[':id']['cancel_fees']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['rides', '/rides/:id/cancel_fees', keyArgs] as const
}

export function getRidesIdCancelFeesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rides)[':id']['cancel_fees']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRidesIdCancelFeesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rides[':id'].cancel_fees.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRidesIdCancelFees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rides)[':id']['cancel_fees']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rides)[':id']['cancel_fees']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rides)[':id']['cancel_fees']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rides)[':id']['cancel_fees']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRidesIdCancelFeesQueryKey>
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
          Awaited<ReturnType<(typeof client.rides)[':id']['cancel_fees']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRidesIdCancelFeesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRidesIdCancelFeesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rides[':id'].cancel_fees.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRidesIdEstimateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rides)[':id']['estimate']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['rides', '/rides/:id/estimate', keyArgs] as const
}

export function getRidesIdEstimateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rides)[':id']['estimate']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRidesIdEstimateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rides[':id'].estimate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRidesIdEstimate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rides)[':id']['estimate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rides)[':id']['estimate']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rides)[':id']['estimate']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rides)[':id']['estimate']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRidesIdEstimateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.rides)[':id']['estimate']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRidesIdEstimateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRidesIdEstimateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rides[':id'].estimate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRidesIdReserveMutationKey() {
  return ['rides', '/rides/:id/reserve', 'POST'] as const
}

export function getPostRidesIdReserveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rides)[':id']['reserve']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.rides)[':id']['reserve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRidesIdReserveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.rides)[':id']['reserve']['$post']>) {
      return parseResponse(client.rides[':id'].reserve.$post(args, options))
    },
  })
}

export function usePostRidesIdReserve<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rides)[':id']['reserve']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.rides)[':id']['reserve']['$post']>,
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
  const mutationDefaults = getPostRidesIdReserveMutationOptions<TError, TOnMutateResult>(
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

export function getRidesPagePagePerPagePerPageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rides?page={page}&per_page={per_page}']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'rides?page={page}&per_page={per_page}',
    '/rides?page={page}&per_page={per_page}',
    keyArgs,
  ] as const
}

export function getRidesPagePagePerPagePerPageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rides?page={page}&per_page={per_page}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRidesPagePagePerPagePerPageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['rides?page={page}&per_page={per_page}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRidesPagePagePerPagePerPage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rides?page={page}&per_page={per_page}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['rides?page={page}&per_page={per_page}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['rides?page={page}&per_page={per_page}']['$get']>
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
                  ReturnType<(typeof client)['rides?page={page}&per_page={per_page}']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRidesPagePagePerPagePerPageQueryKey>
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
          Awaited<ReturnType<(typeof client)['rides?page={page}&per_page={per_page}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRidesPagePagePerPagePerPageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRidesPagePagePerPagePerPageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['rides?page={page}&per_page={per_page}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRidesPagePagePerPagePerPageMutationKey() {
  return [
    'rides?page={page}&per_page={per_page}',
    '/rides?page={page}&per_page={per_page}',
    'POST',
  ] as const
}

export function getPostRidesPagePagePerPagePerPageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['rides?page={page}&per_page={per_page}']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['rides?page={page}&per_page={per_page}']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRidesPagePagePerPagePerPageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['rides?page={page}&per_page={per_page}']['$post']>,
    ) {
      return parseResponse(client['rides?page={page}&per_page={per_page}'].$post(args, options))
    },
  })
}

export function usePostRidesPagePagePerPagePerPage<
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
                  ReturnType<(typeof client)['rides?page={page}&per_page={per_page}']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['rides?page={page}&per_page={per_page}']['$post']>,
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
  const mutationDefaults = getPostRidesPagePagePerPagePerPageMutationOptions<
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

export function getVersionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':version']['$get']>>,
) {
  return [':version', '/:version', toValue(args)] as const
}

export function getVersionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':version']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':version'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':version']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':version']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':version']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':version']['$get']>>>
            >
          >,
          ReturnType<typeof getVersionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':version']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':version'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
