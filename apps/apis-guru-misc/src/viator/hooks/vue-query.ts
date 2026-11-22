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

export function getAvailableKey() {
  return ['available'] as const
}

export function getBookingKey() {
  return ['booking'] as const
}

export function getBookingsKey() {
  return ['bookings'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getMerchantKey() {
  return ['merchant'] as const
}

export function getProductKey() {
  return ['product'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getTaxonomyKey() {
  return ['taxonomy'] as const
}

export function getPostAvailableProductsMutationKey() {
  return ['available', '/available/products', 'POST'] as const
}

export function getPostAvailableProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.available.products.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.available.products.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAvailableProductsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.available.products.$post>) {
      return parseResponse(client.available.products.$post(args, options))
    },
  })
}

export function usePostAvailableProducts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.available.products.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.available.products.$post>,
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
  const mutationDefaults = getPostAvailableProductsMutationOptions<TError, TOnMutateResult>(
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

export function getPostBookingAvailabilityMutationKey() {
  return ['booking', '/booking/availability', 'POST'] as const
}

export function getPostBookingAvailabilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.booking.availability.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.booking.availability.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBookingAvailabilityMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.booking.availability.$post>) {
      return parseResponse(client.booking.availability.$post(args, options))
    },
  })
}

export function usePostBookingAvailability<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.booking.availability.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.booking.availability.$post>,
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
  const mutationDefaults = getPostBookingAvailabilityMutationOptions<TError, TOnMutateResult>(
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

export function getBookingAvailabilityDatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.booking.availability.dates.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['booking', '/booking/availability/dates', keyArgs] as const
}

export function getBookingAvailabilityDatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.booking.availability.dates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBookingAvailabilityDatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.booking.availability.dates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBookingAvailabilityDates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.booking.availability.dates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.booking.availability.dates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.booking.availability.dates.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.booking.availability.dates.$get>>
              >
            >
          >,
          ReturnType<typeof getBookingAvailabilityDatesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.booking.availability.dates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBookingAvailabilityDatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBookingAvailabilityDatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.booking.availability.dates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBookingAvailabilityTourgradesMutationKey() {
  return ['booking', '/booking/availability/tourgrades', 'POST'] as const
}

export function getPostBookingAvailabilityTourgradesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.booking.availability.tourgrades.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.booking.availability.tourgrades.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBookingAvailabilityTourgradesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.booking.availability.tourgrades.$post>) {
      return parseResponse(client.booking.availability.tourgrades.$post(args, options))
    },
  })
}

export function usePostBookingAvailabilityTourgrades<
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
                Awaited<ReturnType<typeof client.booking.availability.tourgrades.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.booking.availability.tourgrades.$post>,
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
  const mutationDefaults = getPostBookingAvailabilityTourgradesMutationOptions<
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

export function getPostBookingAvailabilityTourgradesPricingmatrixMutationKey() {
  return ['booking', '/booking/availability/tourgrades/pricingmatrix', 'POST'] as const
}

export function getPostBookingAvailabilityTourgradesPricingmatrixMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.booking.availability.tourgrades.pricingmatrix.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.booking.availability.tourgrades.pricingmatrix.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBookingAvailabilityTourgradesPricingmatrixMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.booking.availability.tourgrades.pricingmatrix.$post>,
    ) {
      return parseResponse(
        client.booking.availability.tourgrades.pricingmatrix.$post(args, options),
      )
    },
  })
}

export function usePostBookingAvailabilityTourgradesPricingmatrix<
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
                  ReturnType<typeof client.booking.availability.tourgrades.pricingmatrix.$post>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.booking.availability.tourgrades.pricingmatrix.$post>,
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
  const mutationDefaults = getPostBookingAvailabilityTourgradesPricingmatrixMutationOptions<
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

export function getPostBookingBookMutationKey() {
  return ['booking', '/booking/book', 'POST'] as const
}

export function getPostBookingBookMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booking.book.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.booking.book.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBookingBookMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.booking.book.$post>) {
      return parseResponse(client.booking.book.$post(args, options))
    },
  })
}

export function usePostBookingBook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booking.book.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.booking.book.$post>,
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
  const mutationDefaults = getPostBookingBookMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostBookingCalculatepriceMutationKey() {
  return ['booking', '/booking/calculateprice', 'POST'] as const
}

export function getPostBookingCalculatepriceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.booking.calculateprice.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.booking.calculateprice.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBookingCalculatepriceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.booking.calculateprice.$post>) {
      return parseResponse(client.booking.calculateprice.$post(args, options))
    },
  })
}

export function usePostBookingCalculateprice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.booking.calculateprice.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.booking.calculateprice.$post>,
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
  const mutationDefaults = getPostBookingCalculatepriceMutationOptions<TError, TOnMutateResult>(
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

export function getBookingHotelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.booking.hotels.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['booking', '/booking/hotels', keyArgs] as const
}

export function getBookingHotelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.booking.hotels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBookingHotelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.booking.hotels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBookingHotels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booking.hotels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.booking.hotels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booking.hotels.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booking.hotels.$get>>>>
          >,
          ReturnType<typeof getBookingHotelsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booking.hotels.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBookingHotelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBookingHotelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.booking.hotels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBookingMybookingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.booking.mybookings.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['booking', '/booking/mybookings', keyArgs] as const
}

export function getBookingMybookingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.booking.mybookings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBookingMybookingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.booking.mybookings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBookingMybookings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booking.mybookings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.booking.mybookings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.booking.mybookings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.booking.mybookings.$get>>>
            >
          >,
          ReturnType<typeof getBookingMybookingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booking.mybookings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBookingMybookingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBookingMybookingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.booking.mybookings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBookingPastbookingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.booking.pastbooking.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['booking', '/booking/pastbooking', keyArgs] as const
}

export function getBookingPastbookingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.booking.pastbooking.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBookingPastbookingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.booking.pastbooking.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBookingPastbooking<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booking.pastbooking.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.booking.pastbooking.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.booking.pastbooking.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.booking.pastbooking.$get>>>
            >
          >,
          ReturnType<typeof getBookingPastbookingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booking.pastbooking.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBookingPastbookingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBookingPastbookingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.booking.pastbooking.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBookingPricingmatrixMutationKey() {
  return ['booking', '/booking/pricingmatrix', 'POST'] as const
}

export function getPostBookingPricingmatrixMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.booking.pricingmatrix.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.booking.pricingmatrix.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBookingPricingmatrixMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.booking.pricingmatrix.$post>) {
      return parseResponse(client.booking.pricingmatrix.$post(args, options))
    },
  })
}

export function usePostBookingPricingmatrix<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.booking.pricingmatrix.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.booking.pricingmatrix.$post>,
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
  const mutationDefaults = getPostBookingPricingmatrixMutationOptions<TError, TOnMutateResult>(
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

export function getPostBookingStatusMutationKey() {
  return ['booking', '/booking/status', 'POST'] as const
}

export function getPostBookingStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booking.status.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.booking.status.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBookingStatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.booking.status.$post>) {
      return parseResponse(client.booking.status.$post(args, options))
    },
  })
}

export function usePostBookingStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.booking.status.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.booking.status.$post>,
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
  const mutationDefaults = getPostBookingStatusMutationOptions<TError, TOnMutateResult>(
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

export function getPostBookingStatusItemsMutationKey() {
  return ['booking', '/booking/status/items', 'POST'] as const
}

export function getPostBookingStatusItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.booking.status.items.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.booking.status.items.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBookingStatusItemsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.booking.status.items.$post>) {
      return parseResponse(client.booking.status.items.$post(args, options))
    },
  })
}

export function usePostBookingStatusItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.booking.status.items.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.booking.status.items.$post>,
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
  const mutationDefaults = getPostBookingStatusItemsMutationOptions<TError, TOnMutateResult>(
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

export function getBookingVoucherQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.booking.voucher.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['booking', '/booking/voucher', keyArgs] as const
}

export function getBookingVoucherQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.booking.voucher.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBookingVoucherQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.booking.voucher.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBookingVoucher<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booking.voucher.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.booking.voucher.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.booking.voucher.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.booking.voucher.$get>>>
            >
          >,
          ReturnType<typeof getBookingVoucherQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.booking.voucher.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBookingVoucherQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBookingVoucherQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.booking.voucher.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBookingsCancelReasonsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bookings)['cancel-reasons']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['bookings', '/bookings/cancel-reasons', keyArgs] as const
}

export function getBookingsCancelReasonsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bookings)['cancel-reasons']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBookingsCancelReasonsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bookings['cancel-reasons'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBookingsCancelReasons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bookings)['cancel-reasons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bookings)['cancel-reasons']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookings)['cancel-reasons']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookings)['cancel-reasons']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBookingsCancelReasonsQueryKey>
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
          Awaited<ReturnType<(typeof client.bookings)['cancel-reasons']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBookingsCancelReasonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBookingsCancelReasonsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bookings['cancel-reasons'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBookingsBookingReferenceCancelMutationKey() {
  return ['bookings', '/bookings/:booking-reference/cancel', 'POST'] as const
}

export function getPostBookingsBookingReferenceCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bookings)[':booking-reference']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bookings)[':booking-reference']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBookingsBookingReferenceCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.bookings)[':booking-reference']['cancel']['$post']>,
    ) {
      return parseResponse(client.bookings[':booking-reference'].cancel.$post(args, options))
    },
  })
}

export function usePostBookingsBookingReferenceCancel<
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
                  ReturnType<(typeof client.bookings)[':booking-reference']['cancel']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.bookings)[':booking-reference']['cancel']['$post']>,
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
  const mutationDefaults = getPostBookingsBookingReferenceCancelMutationOptions<
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

export function getBookingsBookingReferenceCancelQuoteQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bookings)[':booking-reference']['cancel-quote']['$get']>
  >,
) {
  return ['bookings', '/bookings/:booking-reference/cancel-quote', toValue(args)] as const
}

export function getBookingsBookingReferenceCancelQuoteQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bookings)[':booking-reference']['cancel-quote']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBookingsBookingReferenceCancelQuoteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bookings[':booking-reference']['cancel-quote'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBookingsBookingReferenceCancelQuote<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bookings)[':booking-reference']['cancel-quote']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bookings)[':booking-reference']['cancel-quote']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bookings)[':booking-reference']['cancel-quote']['$get']>
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
                  ReturnType<(typeof client.bookings)[':booking-reference']['cancel-quote']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBookingsBookingReferenceCancelQuoteQueryKey>
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
            ReturnType<(typeof client.bookings)[':booking-reference']['cancel-quote']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBookingsBookingReferenceCancelQuoteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBookingsBookingReferenceCancelQuoteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bookings[':booking-reference']['cancel-quote'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthCheckQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.check.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['health', '/health/check', keyArgs] as const
}

export function getHealthCheckQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.check.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHealthCheckQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.check.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealthCheck<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.check.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.check.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.check.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.check.$get>>>>
          >,
          ReturnType<typeof getHealthCheckQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.check.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthCheckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHealthCheckQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.health.check.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMerchantCancellationMutationKey() {
  return ['merchant', '/merchant/cancellation', 'POST'] as const
}

export function getPostMerchantCancellationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.merchant.cancellation.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.merchant.cancellation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantCancellationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.merchant.cancellation.$post>) {
      return parseResponse(client.merchant.cancellation.$post(args, options))
    },
  })
}

export function usePostMerchantCancellation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.merchant.cancellation.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.merchant.cancellation.$post>,
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
  const mutationDefaults = getPostMerchantCancellationMutationOptions<TError, TOnMutateResult>(
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

export function getProductQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.product.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['product', '/product', keyArgs] as const
}

export function getProductQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.product.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.product.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProduct<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.product.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$get>>>>
          >,
          ReturnType<typeof getProductQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProductQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.product.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductPhotosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.product.photos.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['product', '/product/photos', keyArgs] as const
}

export function getProductPhotosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.product.photos.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductPhotosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.product.photos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductPhotos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.photos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.product.photos.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.photos.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.photos.$get>>>>
          >,
          ReturnType<typeof getProductPhotosQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.photos.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductPhotosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductPhotosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.product.photos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductReviewsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.product.reviews.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['product', '/product/reviews', keyArgs] as const
}

export function getProductReviewsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.product.reviews.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductReviewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.product.reviews.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductReviews<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.reviews.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.product.reviews.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.product.reviews.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.product.reviews.$get>>>
            >
          >,
          ReturnType<typeof getProductReviewsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.reviews.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductReviewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductReviewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.product.reviews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSearchFreetextMutationKey() {
  return ['search', '/search/freetext', 'POST'] as const
}

export function getPostSearchFreetextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.freetext.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.search.freetext.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchFreetextMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.search.freetext.$post>) {
      return parseResponse(client.search.freetext.$post(args, options))
    },
  })
}

export function usePostSearchFreetext<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.freetext.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.search.freetext.$post>,
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
  const mutationDefaults = getPostSearchFreetextMutationOptions<TError, TOnMutateResult>(
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

export function getPostSearchProductsMutationKey() {
  return ['search', '/search/products', 'POST'] as const
}

export function getPostSearchProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.products.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.search.products.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchProductsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.search.products.$post>) {
      return parseResponse(client.search.products.$post(args, options))
    },
  })
}

export function usePostSearchProducts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.products.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.search.products.$post>,
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
  const mutationDefaults = getPostSearchProductsMutationOptions<TError, TOnMutateResult>(
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

export function getPostSearchProductsCodesMutationKey() {
  return ['search', '/search/products/codes', 'POST'] as const
}

export function getPostSearchProductsCodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.search.products.codes.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.search.products.codes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchProductsCodesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.search.products.codes.$post>) {
      return parseResponse(client.search.products.codes.$post(args, options))
    },
  })
}

export function usePostSearchProductsCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.products.codes.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.search.products.codes.$post>,
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
  const mutationDefaults = getPostSearchProductsCodesMutationOptions<TError, TOnMutateResult>(
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

export function getPostTaxonomyAttractionsMutationKey() {
  return ['taxonomy', '/taxonomy/attractions', 'POST'] as const
}

export function getPostTaxonomyAttractionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.taxonomy.attractions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.taxonomy.attractions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTaxonomyAttractionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.taxonomy.attractions.$post>) {
      return parseResponse(client.taxonomy.attractions.$post(args, options))
    },
  })
}

export function usePostTaxonomyAttractions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.taxonomy.attractions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.taxonomy.attractions.$post>,
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
  const mutationDefaults = getPostTaxonomyAttractionsMutationOptions<TError, TOnMutateResult>(
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

export function getTaxonomyCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.taxonomy.categories.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['taxonomy', '/taxonomy/categories', keyArgs] as const
}

export function getTaxonomyCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.taxonomy.categories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaxonomyCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.taxonomy.categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTaxonomyCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxonomy.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.taxonomy.categories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.taxonomy.categories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.taxonomy.categories.$get>>>
            >
          >,
          ReturnType<typeof getTaxonomyCategoriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxonomy.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTaxonomyCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaxonomyCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.taxonomy.categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTaxonomyDestinationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.taxonomy.destinations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['taxonomy', '/taxonomy/destinations', keyArgs] as const
}

export function getTaxonomyDestinationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.taxonomy.destinations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaxonomyDestinationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.taxonomy.destinations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTaxonomyDestinations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxonomy.destinations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.taxonomy.destinations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.taxonomy.destinations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.taxonomy.destinations.$get>>>
            >
          >,
          ReturnType<typeof getTaxonomyDestinationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.taxonomy.destinations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaxonomyDestinationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaxonomyDestinationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.taxonomy.destinations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
