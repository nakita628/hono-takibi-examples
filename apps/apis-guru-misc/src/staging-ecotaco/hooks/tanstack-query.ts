import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAccountsQueryKey(args: InferRequestType<typeof client.accounts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts', keyArgs] as const
}

export function getAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountsQueryKey>
  >({
    queryKey: getAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$put>>>>>,
        TError,
        InferRequestType<typeof client.accounts.$put>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.accounts.$post>,
        TOnMutateResult
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
  args: InferRequestType<typeof client.accounts.payment_methods.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/payment_methods', keyArgs] as const
}

export function getAccountsPaymentMethodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.accounts.payment_methods.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accounts.payment_methods.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.accounts.payment_methods.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsPaymentMethodsQueryKey>
  >({
    queryKey: getAccountsPaymentMethodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts.payment_methods.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountsPaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.accounts.payment_methods.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accounts.payment_methods.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.accounts.payment_methods.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsPaymentMethodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAccountsPaymentMethodsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsPaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.accounts.payment_methods.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accounts.payment_methods.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.accounts.payment_methods.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsPaymentMethodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAccountsPaymentMethodsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.addresses.places_details.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.addresses.places_details.$post>,
        TOnMutateResult
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
  args: InferRequestType<typeof client.catchement_areas.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['catchement_areas', '/catchement_areas', keyArgs] as const
}

export function getCatchementAreasQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catchement_areas.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.catchement_areas.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catchement_areas.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCatchementAreasQueryKey>
  >({
    queryKey: getCatchementAreasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catchement_areas.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCatchementAreas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catchement_areas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.catchement_areas.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catchement_areas.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCatchementAreasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCatchementAreasQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCatchementAreas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catchement_areas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.catchement_areas.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catchement_areas.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCatchementAreasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCatchementAreasQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCatchementAreasIdQueryKey(
  args: InferRequestType<(typeof client.catchement_areas)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['catchement_areas', '/catchement_areas/:id', keyArgs] as const
}

export function getCatchementAreasIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.catchement_areas)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.catchement_areas)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.catchement_areas)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatchementAreasIdQueryKey>
  >({
    queryKey: getCatchementAreasIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catchement_areas[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCatchementAreasId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.catchement_areas)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.catchement_areas)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getCatchementAreasIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCatchementAreasIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCatchementAreasId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.catchement_areas)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.catchement_areas)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.catchement_areas)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCatchementAreasIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCatchementAreasIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCreditCardsQueryKey(args: InferRequestType<typeof client.credit_cards.$get>) {
  const { header: _, ...keyArgs } = args
  return ['credit_cards', '/credit_cards', keyArgs] as const
}

export function getCreditCardsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_cards.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.credit_cards.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_cards.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCreditCardsQueryKey>
  >({
    queryKey: getCreditCardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.credit_cards.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCreditCards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_cards.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.credit_cards.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_cards.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCreditCardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCreditCardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCreditCards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_cards.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.credit_cards.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_cards.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCreditCardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCreditCardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCreditCardsIdQueryKey(
  args: InferRequestType<(typeof client.credit_cards)[':id']['$get']>,
) {
  return ['credit_cards', '/credit_cards/:id', args] as const
}

export function getCreditCardsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.credit_cards)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.credit_cards)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.credit_cards)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreditCardsIdQueryKey>
  >({
    queryKey: getCreditCardsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.credit_cards[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCreditCardsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.credit_cards)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.credit_cards)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.credit_cards)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCreditCardsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCreditCardsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCreditCardsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.credit_cards)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.credit_cards)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.credit_cards)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCreditCardsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCreditCardsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProductsQueryKey(args: InferRequestType<typeof client.products.$get>) {
  const { header: _, ...keyArgs } = args
  return ['products', '/products', keyArgs] as const
}

export function getProductsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.products.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProductsQueryKey>
  >({
    queryKey: getProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.products.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProductsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.products.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProductsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProductsIdQueryKey(
  args: InferRequestType<(typeof client.products)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['products', '/products/:id', keyArgs] as const
}

export function getProductsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.products)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsIdQueryKey>
  >({
    queryKey: getProductsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProductsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.products)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProductsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProductsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.products)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProductsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPromotionalCodesQueryKey(
  args: InferRequestType<typeof client.promotional_codes.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['promotional_codes', '/promotional_codes', keyArgs] as const
}

export function getPromotionalCodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotional_codes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.promotional_codes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotional_codes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPromotionalCodesQueryKey>
  >({
    queryKey: getPromotionalCodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.promotional_codes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePromotionalCodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotional_codes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.promotional_codes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.promotional_codes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPromotionalCodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPromotionalCodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePromotionalCodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotional_codes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.promotional_codes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.promotional_codes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPromotionalCodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPromotionalCodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function getRidesIdQueryKey(args: InferRequestType<(typeof client.rides)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['rides', '/rides/:id', keyArgs] as const
}

export function getRidesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.rides)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.rides)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.rides)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRidesIdQueryKey>
  >({
    queryKey: getRidesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rides[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRidesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.rides)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rides)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.rides)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRidesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRidesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRidesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.rides)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rides)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.rides)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRidesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRidesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRidesIdCancelQueryKey(
  args: InferRequestType<(typeof client.rides)[':id']['cancel']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['rides', '/rides/:id/cancel', keyArgs] as const
}

export function getRidesIdCancelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rides)[':id']['cancel']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rides)[':id']['cancel']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rides)[':id']['cancel']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRidesIdCancelQueryKey>
  >({
    queryKey: getRidesIdCancelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rides[':id'].cancel.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRidesIdCancel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rides)[':id']['cancel']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rides)[':id']['cancel']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRidesIdCancelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRidesIdCancelQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRidesIdCancel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rides)[':id']['cancel']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rides)[':id']['cancel']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.rides)[':id']['cancel']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRidesIdCancelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRidesIdCancelQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRidesIdCancelFeesQueryKey(
  args: InferRequestType<(typeof client.rides)[':id']['cancel_fees']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['rides', '/rides/:id/cancel_fees', keyArgs] as const
}

export function getRidesIdCancelFeesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rides)[':id']['cancel_fees']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rides)[':id']['cancel_fees']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRidesIdCancelFeesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rides[':id'].cancel_fees.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRidesIdCancelFees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rides)[':id']['cancel_fees']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rides)[':id']['cancel_fees']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRidesIdCancelFeesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRidesIdCancelFeesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRidesIdCancelFees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rides)[':id']['cancel_fees']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rides)[':id']['cancel_fees']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRidesIdCancelFeesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRidesIdEstimateQueryKey(
  args: InferRequestType<(typeof client.rides)[':id']['estimate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['rides', '/rides/:id/estimate', keyArgs] as const
}

export function getRidesIdEstimateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rides)[':id']['estimate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rides)[':id']['estimate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rides)[':id']['estimate']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRidesIdEstimateQueryKey>
  >({
    queryKey: getRidesIdEstimateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rides[':id'].estimate.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRidesIdEstimate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rides)[':id']['estimate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rides)[':id']['estimate']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRidesIdEstimateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRidesIdEstimateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRidesIdEstimate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rides)[':id']['estimate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rides)[':id']['estimate']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.rides)[':id']['estimate']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRidesIdEstimateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRidesIdEstimateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client)['rides?page=:page&per_page=:per_page']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'rides?page=:page&per_page=:per_page',
    '/rides?page=:page&per_page=:per_page',
    keyArgs,
  ] as const
}

export function getRidesPagePagePerPagePerPageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rides?page=:page&per_page=:per_page']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rides?page=:page&per_page=:per_page']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['rides?page=:page&per_page=:per_page']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRidesPagePagePerPagePerPageQueryKey>
  >({
    queryKey: getRidesPagePagePerPagePerPageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['rides?page=:page&per_page=:per_page'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRidesPagePagePerPagePerPage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rides?page=:page&per_page=:per_page']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rides?page=:page&per_page=:per_page']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rides?page=:page&per_page=:per_page']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRidesPagePagePerPagePerPageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getRidesPagePagePerPagePerPageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRidesPagePagePerPagePerPage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['rides?page=:page&per_page=:per_page']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rides?page=:page&per_page=:per_page']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rides?page=:page&per_page=:per_page']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRidesPagePagePerPagePerPageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getRidesPagePagePerPagePerPageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostRidesPagePagePerPagePerPageMutationKey() {
  return [
    'rides?page=:page&per_page=:per_page',
    '/rides?page=:page&per_page=:per_page',
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
          Awaited<ReturnType<(typeof client)['rides?page=:page&per_page=:per_page']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['rides?page=:page&per_page=:per_page']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRidesPagePagePerPagePerPageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['rides?page=:page&per_page=:per_page']['$post']>,
    ) {
      return parseResponse(client['rides?page=:page&per_page=:per_page'].$post(args, options))
    },
  })
}

export function usePostRidesPagePagePerPagePerPage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rides?page=:page&per_page=:per_page']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['rides?page=:page&per_page=:per_page']['$post']>,
        TOnMutateResult
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

export function getVersionQueryKey(args: InferRequestType<(typeof client)[':version']['$get']>) {
  return [':version', '/:version', args] as const
}

export function getVersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':version']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)[':version']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':version']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVersionQueryKey>
  >({
    queryKey: getVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':version'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':version']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':version']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':version']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVersionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':version']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':version']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':version']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVersionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
