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

export function getWhatsappKey() {
  return ['whatsapp'] as const
}

export function getVersionKey() {
  return ['{Version}'] as const
}

export function getVersionApplicationIDConnectedClientBusinessesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Application-ID']['connected_client_businesses']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Application-ID/connected_client_businesses', keyArgs] as const
}

export function getVersionApplicationIDConnectedClientBusinessesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Application-ID']['connected_client_businesses']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionApplicationIDConnectedClientBusinessesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Application-ID'].connected_client_businesses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionApplicationIDConnectedClientBusinesses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':Version'][':Application-ID']['connected_client_businesses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Application-ID']['connected_client_businesses']['$get']
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
                    (typeof client)[':Version'][':Application-ID']['connected_client_businesses']['$get']
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
                    (typeof client)[':Version'][':Application-ID']['connected_client_businesses']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVersionApplicationIDConnectedClientBusinessesQueryKey>
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
              (typeof client)[':Version'][':Application-ID']['connected_client_businesses']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionApplicationIDConnectedClientBusinessesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionApplicationIDConnectedClientBusinessesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Application-ID'].connected_client_businesses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionApplicationIDWhatsappBusinessSolutionMutationKey() {
  return [':Version', '/:Version/:Application-ID/whatsapp_business_solution', 'POST'] as const
}

export function getPostVersionApplicationIDWhatsappBusinessSolutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Application-ID']['whatsapp_business_solution']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':Version'][':Application-ID']['whatsapp_business_solution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVersionApplicationIDWhatsappBusinessSolutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':Application-ID']['whatsapp_business_solution']['$post']
      >,
    ) {
      return parseResponse(
        client[':Version'][':Application-ID'].whatsapp_business_solution.$post(args, options),
      )
    },
  })
}

export function usePostVersionApplicationIDWhatsappBusinessSolution<
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
                    (typeof client)[':Version'][':Application-ID']['whatsapp_business_solution']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':Version'][':Application-ID']['whatsapp_business_solution']['$post']
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
  const mutationDefaults = getPostVersionApplicationIDWhatsappBusinessSolutionMutationOptions<
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

export function getVersionApplicationIDWhatsappBusinessSolutionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Application-ID']['whatsapp_business_solutions']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Application-ID/whatsapp_business_solutions', keyArgs] as const
}

export function getVersionApplicationIDWhatsappBusinessSolutionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Application-ID']['whatsapp_business_solutions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionApplicationIDWhatsappBusinessSolutionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Application-ID'].whatsapp_business_solutions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionApplicationIDWhatsappBusinessSolutions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':Version'][':Application-ID']['whatsapp_business_solutions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Application-ID']['whatsapp_business_solutions']['$get']
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
                    (typeof client)[':Version'][':Application-ID']['whatsapp_business_solutions']['$get']
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
                    (typeof client)[':Version'][':Application-ID']['whatsapp_business_solutions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVersionApplicationIDWhatsappBusinessSolutionsQueryKey>
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
              (typeof client)[':Version'][':Application-ID']['whatsapp_business_solutions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionApplicationIDWhatsappBusinessSolutionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionApplicationIDWhatsappBusinessSolutionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Application-ID'].whatsapp_business_solutions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionBusinessIDAddPhoneNumbersMutationKey() {
  return [':Version', '/:Version/:Business-ID/add_phone_numbers', 'POST'] as const
}

export function getPostVersionBusinessIDAddPhoneNumbersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':Version'][':Business-ID']['add_phone_numbers']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':Business-ID']['add_phone_numbers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionBusinessIDAddPhoneNumbersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':Business-ID']['add_phone_numbers']['$post']
      >,
    ) {
      return parseResponse(
        client[':Version'][':Business-ID'].add_phone_numbers.$post(args, options),
      )
    },
  })
}

export function usePostVersionBusinessIDAddPhoneNumbers<
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
                    (typeof client)[':Version'][':Business-ID']['add_phone_numbers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':Version'][':Business-ID']['add_phone_numbers']['$post']
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
  const mutationDefaults = getPostVersionBusinessIDAddPhoneNumbersMutationOptions<
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

export function getVersionBusinessIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':Business-ID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Business-ID', keyArgs] as const
}

export function getVersionBusinessIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':Business-ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionBusinessIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Business-ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionBusinessID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':Business-ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':Business-ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':Business-ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':Business-ID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVersionBusinessIDQueryKey>
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
          Awaited<ReturnType<(typeof client)[':Version'][':Business-ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionBusinessIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionBusinessIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Business-ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVersionBusinessIDPreverifiedNumbersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Business-ID']['preverified_numbers']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Business-ID/preverified_numbers', keyArgs] as const
}

export function getVersionBusinessIDPreverifiedNumbersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Business-ID']['preverified_numbers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionBusinessIDPreverifiedNumbersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Business-ID'].preverified_numbers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionBusinessIDPreverifiedNumbers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':Version'][':Business-ID']['preverified_numbers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Business-ID']['preverified_numbers']['$get']>
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
                    (typeof client)[':Version'][':Business-ID']['preverified_numbers']['$get']
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
                    (typeof client)[':Version'][':Business-ID']['preverified_numbers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVersionBusinessIDPreverifiedNumbersQueryKey>
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
            ReturnType<(typeof client)[':Version'][':Business-ID']['preverified_numbers']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionBusinessIDPreverifiedNumbersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionBusinessIDPreverifiedNumbersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Business-ID'].preverified_numbers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVersionBusinessIDClientWhatsappBusinessAccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Business-ID']['client_whatsapp_business_accounts']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Business-ID/client_whatsapp_business_accounts', keyArgs] as const
}

export function getVersionBusinessIDClientWhatsappBusinessAccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Business-ID']['client_whatsapp_business_accounts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionBusinessIDClientWhatsappBusinessAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Business-ID'].client_whatsapp_business_accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionBusinessIDClientWhatsappBusinessAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':Version'][':Business-ID']['client_whatsapp_business_accounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Business-ID']['client_whatsapp_business_accounts']['$get']
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
                    (typeof client)[':Version'][':Business-ID']['client_whatsapp_business_accounts']['$get']
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
                    (typeof client)[':Version'][':Business-ID']['client_whatsapp_business_accounts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVersionBusinessIDClientWhatsappBusinessAccountsQueryKey>
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
              (typeof client)[':Version'][':Business-ID']['client_whatsapp_business_accounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionBusinessIDClientWhatsappBusinessAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionBusinessIDClientWhatsappBusinessAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Business-ID'].client_whatsapp_business_accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionBusinessIDOnboardPartnersToMmLiteMutationKey() {
  return [':Version', '/:Version/:Business-ID/onboard_partners_to_mm_lite', 'POST'] as const
}

export function getPostVersionBusinessIDOnboardPartnersToMmLiteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Business-ID']['onboard_partners_to_mm_lite']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':Version'][':Business-ID']['onboard_partners_to_mm_lite']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVersionBusinessIDOnboardPartnersToMmLiteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':Business-ID']['onboard_partners_to_mm_lite']['$post']
      >,
    ) {
      return parseResponse(
        client[':Version'][':Business-ID'].onboard_partners_to_mm_lite.$post(args, options),
      )
    },
  })
}

export function usePostVersionBusinessIDOnboardPartnersToMmLite<
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
                    (typeof client)[':Version'][':Business-ID']['onboard_partners_to_mm_lite']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':Version'][':Business-ID']['onboard_partners_to_mm_lite']['$post']
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
  const mutationDefaults = getPostVersionBusinessIDOnboardPartnersToMmLiteMutationOptions<
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

export function getVersionBusinessIDOwnedWhatsappBusinessAccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Business-ID']['owned_whatsapp_business_accounts']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Business-ID/owned_whatsapp_business_accounts', keyArgs] as const
}

export function getVersionBusinessIDOwnedWhatsappBusinessAccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Business-ID']['owned_whatsapp_business_accounts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionBusinessIDOwnedWhatsappBusinessAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Business-ID'].owned_whatsapp_business_accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionBusinessIDOwnedWhatsappBusinessAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':Version'][':Business-ID']['owned_whatsapp_business_accounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Business-ID']['owned_whatsapp_business_accounts']['$get']
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
                    (typeof client)[':Version'][':Business-ID']['owned_whatsapp_business_accounts']['$get']
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
                    (typeof client)[':Version'][':Business-ID']['owned_whatsapp_business_accounts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVersionBusinessIDOwnedWhatsappBusinessAccountsQueryKey>
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
              (typeof client)[':Version'][':Business-ID']['owned_whatsapp_business_accounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionBusinessIDOwnedWhatsappBusinessAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionBusinessIDOwnedWhatsappBusinessAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Business-ID'].owned_whatsapp_business_accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionBusinessIDSharePreverifiedNumbersMutationKey() {
  return [':Version', '/:Version/:Business-ID/share_preverified_numbers', 'POST'] as const
}

export function getPostVersionBusinessIDSharePreverifiedNumbersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Business-ID']['share_preverified_numbers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':Version'][':Business-ID']['share_preverified_numbers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVersionBusinessIDSharePreverifiedNumbersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':Business-ID']['share_preverified_numbers']['$post']
      >,
    ) {
      return parseResponse(
        client[':Version'][':Business-ID'].share_preverified_numbers.$post(args, options),
      )
    },
  })
}

export function usePostVersionBusinessIDSharePreverifiedNumbers<
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
                    (typeof client)[':Version'][':Business-ID']['share_preverified_numbers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':Version'][':Business-ID']['share_preverified_numbers']['$post']
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
  const mutationDefaults = getPostVersionBusinessIDSharePreverifiedNumbersMutationOptions<
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

export function getVersionPhoneNumberIDBlockUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['block_users']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Phone-Number-ID/block_users', keyArgs] as const
}

export function getVersionPhoneNumberIDBlockUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['block_users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionPhoneNumberIDBlockUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Phone-Number-ID'].block_users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionPhoneNumberIDBlockUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['block_users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['block_users']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['block_users']['$get']>
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
                  ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['block_users']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVersionPhoneNumberIDBlockUsersQueryKey>
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
            ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['block_users']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionPhoneNumberIDBlockUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionPhoneNumberIDBlockUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Phone-Number-ID'].block_users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionPhoneNumberIDBlockUsersMutationKey() {
  return [':Version', '/:Version/:Phone-Number-ID/block_users', 'POST'] as const
}

export function getPostVersionPhoneNumberIDBlockUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['block_users']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['block_users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionPhoneNumberIDBlockUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':Phone-Number-ID']['block_users']['$post']
      >,
    ) {
      return parseResponse(client[':Version'][':Phone-Number-ID'].block_users.$post(args, options))
    },
  })
}

export function usePostVersionPhoneNumberIDBlockUsers<
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
                    (typeof client)[':Version'][':Phone-Number-ID']['block_users']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['block_users']['$post']>,
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
  const mutationDefaults = getPostVersionPhoneNumberIDBlockUsersMutationOptions<
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

export function getDeleteVersionPhoneNumberIDBlockUsersMutationKey() {
  return [':Version', '/:Version/:Phone-Number-ID/block_users', 'DELETE'] as const
}

export function getDeleteVersionPhoneNumberIDBlockUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['block_users']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['block_users']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVersionPhoneNumberIDBlockUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':Phone-Number-ID']['block_users']['$delete']
      >,
    ) {
      return parseResponse(
        client[':Version'][':Phone-Number-ID'].block_users.$delete(args, options),
      )
    },
  })
}

export function useDeleteVersionPhoneNumberIDBlockUsers<
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
                    (typeof client)[':Version'][':Phone-Number-ID']['block_users']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':Version'][':Phone-Number-ID']['block_users']['$delete']
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
  const mutationDefaults = getDeleteVersionPhoneNumberIDBlockUsersMutationOptions<
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

export function getVersionPhoneNumberIDCallPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['call_permissions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Phone-Number-ID/call_permissions', keyArgs] as const
}

export function getVersionPhoneNumberIDCallPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['call_permissions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionPhoneNumberIDCallPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Phone-Number-ID'].call_permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionPhoneNumberIDCallPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['call_permissions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['call_permissions']['$get']>
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
                    (typeof client)[':Version'][':Phone-Number-ID']['call_permissions']['$get']
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
                    (typeof client)[':Version'][':Phone-Number-ID']['call_permissions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVersionPhoneNumberIDCallPermissionsQueryKey>
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
            ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['call_permissions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionPhoneNumberIDCallPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionPhoneNumberIDCallPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Phone-Number-ID'].call_permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionPhoneNumberIDCallsMutationKey() {
  return [':Version', '/:Version/:Phone-Number-ID/calls', 'POST'] as const
}

export function getPostVersionPhoneNumberIDCallsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['calls']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['calls']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionPhoneNumberIDCallsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['calls']['$post']>,
    ) {
      return parseResponse(client[':Version'][':Phone-Number-ID'].calls.$post(args, options))
    },
  })
}

export function usePostVersionPhoneNumberIDCalls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['calls']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['calls']['$post']>,
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
  const mutationDefaults = getPostVersionPhoneNumberIDCallsMutationOptions<TError, TOnMutateResult>(
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

export function getVersionPhoneNumberIDGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['groups']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Phone-Number-ID/groups', keyArgs] as const
}

export function getVersionPhoneNumberIDGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['groups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionPhoneNumberIDGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Phone-Number-ID'].groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionPhoneNumberIDGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['groups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['groups']['$get']>
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
                  ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['groups']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVersionPhoneNumberIDGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionPhoneNumberIDGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionPhoneNumberIDGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Phone-Number-ID'].groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionPhoneNumberIDGroupsMutationKey() {
  return [':Version', '/:Version/:Phone-Number-ID/groups', 'POST'] as const
}

export function getPostVersionPhoneNumberIDGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['groups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionPhoneNumberIDGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['groups']['$post']>,
    ) {
      return parseResponse(client[':Version'][':Phone-Number-ID'].groups.$post(args, options))
    },
  })
}

export function usePostVersionPhoneNumberIDGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['groups']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['groups']['$post']>,
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
  const mutationDefaults = getPostVersionPhoneNumberIDGroupsMutationOptions<
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

export function getPostVersionPhoneNumberIDMarketingMessagesMutationKey() {
  return [':Version', '/:Version/:Phone-Number-ID/marketing_messages', 'POST'] as const
}

export function getPostVersionPhoneNumberIDMarketingMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Phone-Number-ID']['marketing_messages']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['marketing_messages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVersionPhoneNumberIDMarketingMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':Phone-Number-ID']['marketing_messages']['$post']
      >,
    ) {
      return parseResponse(
        client[':Version'][':Phone-Number-ID'].marketing_messages.$post(args, options),
      )
    },
  })
}

export function usePostVersionPhoneNumberIDMarketingMessages<
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
                    (typeof client)[':Version'][':Phone-Number-ID']['marketing_messages']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':Version'][':Phone-Number-ID']['marketing_messages']['$post']
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
  const mutationDefaults = getPostVersionPhoneNumberIDMarketingMessagesMutationOptions<
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

export function getPostVersionPhoneNumberIDMediaMutationKey() {
  return [':Version', '/:Version/:Phone-Number-ID/media', 'POST'] as const
}

export function getPostVersionPhoneNumberIDMediaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['media']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['media']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionPhoneNumberIDMediaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['media']['$post']>,
    ) {
      return parseResponse(client[':Version'][':Phone-Number-ID'].media.$post(args, options))
    },
  })
}

export function usePostVersionPhoneNumberIDMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['media']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['media']['$post']>,
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
  const mutationDefaults = getPostVersionPhoneNumberIDMediaMutationOptions<TError, TOnMutateResult>(
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

export function getPostVersionPhoneNumberIDMessagesMutationKey() {
  return [':Version', '/:Version/:Phone-Number-ID/messages', 'POST'] as const
}

export function getPostVersionPhoneNumberIDMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['messages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionPhoneNumberIDMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['messages']['$post']>,
    ) {
      return parseResponse(client[':Version'][':Phone-Number-ID'].messages.$post(args, options))
    },
  })
}

export function usePostVersionPhoneNumberIDMessages<
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
                  ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['messages']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['messages']['$post']>,
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
  const mutationDefaults = getPostVersionPhoneNumberIDMessagesMutationOptions<
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

export function getVersionPhoneNumberIDMessageQrdlsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['message_qrdls']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Phone-Number-ID/message_qrdls', keyArgs] as const
}

export function getVersionPhoneNumberIDMessageQrdlsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['message_qrdls']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionPhoneNumberIDMessageQrdlsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Phone-Number-ID'].message_qrdls.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionPhoneNumberIDMessageQrdls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['message_qrdls']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['message_qrdls']['$get']>
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
                    (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls']['$get']
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
                    (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVersionPhoneNumberIDMessageQrdlsQueryKey>
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
            ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['message_qrdls']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionPhoneNumberIDMessageQrdlsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionPhoneNumberIDMessageQrdlsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Phone-Number-ID'].message_qrdls.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionPhoneNumberIDMessageQrdlsMutationKey() {
  return [':Version', '/:Version/:Phone-Number-ID/message_qrdls', 'POST'] as const
}

export function getPostVersionPhoneNumberIDMessageQrdlsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['message_qrdls']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['message_qrdls']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionPhoneNumberIDMessageQrdlsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls']['$post']
      >,
    ) {
      return parseResponse(
        client[':Version'][':Phone-Number-ID'].message_qrdls.$post(args, options),
      )
    },
  })
}

export function usePostVersionPhoneNumberIDMessageQrdls<
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
                    (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls']['$post']
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
  const mutationDefaults = getPostVersionPhoneNumberIDMessageQrdlsMutationOptions<
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

export function getVersionPhoneNumberIDMessageQrdlsQRCodeIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls'][':QR-Code-ID']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Phone-Number-ID/message_qrdls/:QR-Code-ID', keyArgs] as const
}

export function getVersionPhoneNumberIDMessageQrdlsQRCodeIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls'][':QR-Code-ID']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionPhoneNumberIDMessageQrdlsQRCodeIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Phone-Number-ID'].message_qrdls[':QR-Code-ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionPhoneNumberIDMessageQrdlsQRCodeID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls'][':QR-Code-ID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls'][':QR-Code-ID']['$get']
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
                    (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls'][':QR-Code-ID']['$get']
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
                    (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls'][':QR-Code-ID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVersionPhoneNumberIDMessageQrdlsQRCodeIDQueryKey>
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
              (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls'][':QR-Code-ID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionPhoneNumberIDMessageQrdlsQRCodeIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionPhoneNumberIDMessageQrdlsQRCodeIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Phone-Number-ID'].message_qrdls[':QR-Code-ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteVersionPhoneNumberIDMessageQrdlsQRCodeIDMutationKey() {
  return [':Version', '/:Version/:Phone-Number-ID/message_qrdls/:QR-Code-ID', 'DELETE'] as const
}

export function getDeleteVersionPhoneNumberIDMessageQrdlsQRCodeIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls'][':QR-Code-ID']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls'][':QR-Code-ID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteVersionPhoneNumberIDMessageQrdlsQRCodeIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls'][':QR-Code-ID']['$delete']
      >,
    ) {
      return parseResponse(
        client[':Version'][':Phone-Number-ID'].message_qrdls[':QR-Code-ID'].$delete(args, options),
      )
    },
  })
}

export function useDeleteVersionPhoneNumberIDMessageQrdlsQRCodeID<
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
                    (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls'][':QR-Code-ID']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls'][':QR-Code-ID']['$delete']
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
  const mutationDefaults = getDeleteVersionPhoneNumberIDMessageQrdlsQRCodeIDMutationOptions<
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

export function getPostVersionPhoneNumberIDMessagesEncryptedMutationKey() {
  return [':Version', '/:Version/:Phone-Number-ID/messages_encrypted', 'POST'] as const
}

export function getPostVersionPhoneNumberIDMessagesEncryptedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Phone-Number-ID']['messages_encrypted']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['messages_encrypted']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVersionPhoneNumberIDMessagesEncryptedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':Phone-Number-ID']['messages_encrypted']['$post']
      >,
    ) {
      return parseResponse(
        client[':Version'][':Phone-Number-ID'].messages_encrypted.$post(args, options),
      )
    },
  })
}

export function usePostVersionPhoneNumberIDMessagesEncrypted<
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
                    (typeof client)[':Version'][':Phone-Number-ID']['messages_encrypted']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':Version'][':Phone-Number-ID']['messages_encrypted']['$post']
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
  const mutationDefaults = getPostVersionPhoneNumberIDMessagesEncryptedMutationOptions<
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

export function getVersionPhoneNumberIDOfficialBusinessAccountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['official_business_account']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Phone-Number-ID/official_business_account', keyArgs] as const
}

export function getVersionPhoneNumberIDOfficialBusinessAccountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['official_business_account']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionPhoneNumberIDOfficialBusinessAccountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Phone-Number-ID'].official_business_account.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionPhoneNumberIDOfficialBusinessAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':Version'][':Phone-Number-ID']['official_business_account']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['official_business_account']['$get']
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
                    (typeof client)[':Version'][':Phone-Number-ID']['official_business_account']['$get']
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
                    (typeof client)[':Version'][':Phone-Number-ID']['official_business_account']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVersionPhoneNumberIDOfficialBusinessAccountQueryKey>
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
              (typeof client)[':Version'][':Phone-Number-ID']['official_business_account']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionPhoneNumberIDOfficialBusinessAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionPhoneNumberIDOfficialBusinessAccountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Phone-Number-ID'].official_business_account.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionPhoneNumberIDOfficialBusinessAccountMutationKey() {
  return [':Version', '/:Version/:Phone-Number-ID/official_business_account', 'POST'] as const
}

export function getPostVersionPhoneNumberIDOfficialBusinessAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Phone-Number-ID']['official_business_account']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['official_business_account']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVersionPhoneNumberIDOfficialBusinessAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':Phone-Number-ID']['official_business_account']['$post']
      >,
    ) {
      return parseResponse(
        client[':Version'][':Phone-Number-ID'].official_business_account.$post(args, options),
      )
    },
  })
}

export function usePostVersionPhoneNumberIDOfficialBusinessAccount<
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
                    (typeof client)[':Version'][':Phone-Number-ID']['official_business_account']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':Version'][':Phone-Number-ID']['official_business_account']['$post']
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
  const mutationDefaults = getPostVersionPhoneNumberIDOfficialBusinessAccountMutationOptions<
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

export function getVersionPhoneNumberIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Phone-Number-ID', keyArgs] as const
}

export function getVersionPhoneNumberIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionPhoneNumberIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Phone-Number-ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionPhoneNumberID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVersionPhoneNumberIDQueryKey>
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
          Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionPhoneNumberIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionPhoneNumberIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Phone-Number-ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionPhoneNumberIDMutationKey() {
  return [':Version', '/:Version/:Phone-Number-ID', 'POST'] as const
}

export function getPostVersionPhoneNumberIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionPhoneNumberIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['$post']>,
    ) {
      return parseResponse(client[':Version'][':Phone-Number-ID'].$post(args, options))
    },
  })
}

export function usePostVersionPhoneNumberID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['$post']>,
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
  const mutationDefaults = getPostVersionPhoneNumberIDMutationOptions<TError, TOnMutateResult>(
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

export function getPostVersionPhoneNumberIDDeregisterMutationKey() {
  return [':Version', '/:Version/:Phone-Number-ID/deregister', 'POST'] as const
}

export function getPostVersionPhoneNumberIDDeregisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['deregister']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['deregister']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionPhoneNumberIDDeregisterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':Phone-Number-ID']['deregister']['$post']
      >,
    ) {
      return parseResponse(client[':Version'][':Phone-Number-ID'].deregister.$post(args, options))
    },
  })
}

export function usePostVersionPhoneNumberIDDeregister<
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
                  ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['deregister']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['deregister']['$post']>,
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
  const mutationDefaults = getPostVersionPhoneNumberIDDeregisterMutationOptions<
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

export function getVersionPhoneNumberIDMessageHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['message_history']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Phone-Number-ID/message_history', keyArgs] as const
}

export function getVersionPhoneNumberIDMessageHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['message_history']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionPhoneNumberIDMessageHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Phone-Number-ID'].message_history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionPhoneNumberIDMessageHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['message_history']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['message_history']['$get']>
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
                    (typeof client)[':Version'][':Phone-Number-ID']['message_history']['$get']
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
                    (typeof client)[':Version'][':Phone-Number-ID']['message_history']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVersionPhoneNumberIDMessageHistoryQueryKey>
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
            ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['message_history']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionPhoneNumberIDMessageHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionPhoneNumberIDMessageHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Phone-Number-ID'].message_history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionPhoneNumberIDRegisterMutationKey() {
  return [':Version', '/:Version/:Phone-Number-ID/register', 'POST'] as const
}

export function getPostVersionPhoneNumberIDRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['register']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['register']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionPhoneNumberIDRegisterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['register']['$post']>,
    ) {
      return parseResponse(client[':Version'][':Phone-Number-ID'].register.$post(args, options))
    },
  })
}

export function usePostVersionPhoneNumberIDRegister<
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
                  ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['register']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['register']['$post']>,
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
  const mutationDefaults = getPostVersionPhoneNumberIDRegisterMutationOptions<
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

export function getPostVersionPhoneNumberIDRequestCodeMutationKey() {
  return [':Version', '/:Version/:Phone-Number-ID/request_code', 'POST'] as const
}

export function getPostVersionPhoneNumberIDRequestCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['request_code']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['request_code']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionPhoneNumberIDRequestCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':Phone-Number-ID']['request_code']['$post']
      >,
    ) {
      return parseResponse(client[':Version'][':Phone-Number-ID'].request_code.$post(args, options))
    },
  })
}

export function usePostVersionPhoneNumberIDRequestCode<
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
                    (typeof client)[':Version'][':Phone-Number-ID']['request_code']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':Version'][':Phone-Number-ID']['request_code']['$post']
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
  const mutationDefaults = getPostVersionPhoneNumberIDRequestCodeMutationOptions<
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

export function getVersionPhoneNumberIDSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['settings']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Phone-Number-ID/settings', keyArgs] as const
}

export function getVersionPhoneNumberIDSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionPhoneNumberIDSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Phone-Number-ID'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionPhoneNumberIDSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['settings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['settings']['$get']>
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
                  ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['settings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVersionPhoneNumberIDSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionPhoneNumberIDSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionPhoneNumberIDSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Phone-Number-ID'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionPhoneNumberIDSettingsMutationKey() {
  return [':Version', '/:Version/:Phone-Number-ID/settings', 'POST'] as const
}

export function getPostVersionPhoneNumberIDSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['settings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['settings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionPhoneNumberIDSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['settings']['$post']>,
    ) {
      return parseResponse(client[':Version'][':Phone-Number-ID'].settings.$post(args, options))
    },
  })
}

export function usePostVersionPhoneNumberIDSettings<
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
                  ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['settings']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['settings']['$post']>,
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
  const mutationDefaults = getPostVersionPhoneNumberIDSettingsMutationOptions<
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

export function getPostVersionPhoneNumberIDVerifyCodeMutationKey() {
  return [':Version', '/:Version/:Phone-Number-ID/verify_code', 'POST'] as const
}

export function getPostVersionPhoneNumberIDVerifyCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['verify_code']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['verify_code']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionPhoneNumberIDVerifyCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':Phone-Number-ID']['verify_code']['$post']
      >,
    ) {
      return parseResponse(client[':Version'][':Phone-Number-ID'].verify_code.$post(args, options))
    },
  })
}

export function usePostVersionPhoneNumberIDVerifyCode<
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
                    (typeof client)[':Version'][':Phone-Number-ID']['verify_code']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['verify_code']['$post']>,
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
  const mutationDefaults = getPostVersionPhoneNumberIDVerifyCodeMutationOptions<
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

export function getVersionPhoneNumberIDWhatsappBusinessEncryptionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_encryption']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Phone-Number-ID/whatsapp_business_encryption', keyArgs] as const
}

export function getVersionPhoneNumberIDWhatsappBusinessEncryptionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_encryption']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionPhoneNumberIDWhatsappBusinessEncryptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Phone-Number-ID'].whatsapp_business_encryption.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionPhoneNumberIDWhatsappBusinessEncryption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_encryption']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_encryption']['$get']
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
                    (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_encryption']['$get']
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
                    (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_encryption']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVersionPhoneNumberIDWhatsappBusinessEncryptionQueryKey>
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
              (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_encryption']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionPhoneNumberIDWhatsappBusinessEncryptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionPhoneNumberIDWhatsappBusinessEncryptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Phone-Number-ID'].whatsapp_business_encryption.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionPhoneNumberIDWhatsappBusinessEncryptionMutationKey() {
  return [':Version', '/:Version/:Phone-Number-ID/whatsapp_business_encryption', 'POST'] as const
}

export function getPostVersionPhoneNumberIDWhatsappBusinessEncryptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_encryption']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_encryption']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVersionPhoneNumberIDWhatsappBusinessEncryptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_encryption']['$post']
      >,
    ) {
      return parseResponse(
        client[':Version'][':Phone-Number-ID'].whatsapp_business_encryption.$post(args, options),
      )
    },
  })
}

export function usePostVersionPhoneNumberIDWhatsappBusinessEncryption<
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
                    (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_encryption']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_encryption']['$post']
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
  const mutationDefaults = getPostVersionPhoneNumberIDWhatsappBusinessEncryptionMutationOptions<
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

export function getVersionPhoneNumberIDWhatsappBusinessProfileQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_profile']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Phone-Number-ID/whatsapp_business_profile', keyArgs] as const
}

export function getVersionPhoneNumberIDWhatsappBusinessProfileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_profile']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionPhoneNumberIDWhatsappBusinessProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Phone-Number-ID'].whatsapp_business_profile.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionPhoneNumberIDWhatsappBusinessProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_profile']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_profile']['$get']
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
                    (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_profile']['$get']
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
                    (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_profile']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVersionPhoneNumberIDWhatsappBusinessProfileQueryKey>
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
              (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_profile']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionPhoneNumberIDWhatsappBusinessProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionPhoneNumberIDWhatsappBusinessProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Phone-Number-ID'].whatsapp_business_profile.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionPhoneNumberIDWhatsappBusinessProfileMutationKey() {
  return [':Version', '/:Version/:Phone-Number-ID/whatsapp_business_profile', 'POST'] as const
}

export function getPostVersionPhoneNumberIDWhatsappBusinessProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_profile']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_profile']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVersionPhoneNumberIDWhatsappBusinessProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_profile']['$post']
      >,
    ) {
      return parseResponse(
        client[':Version'][':Phone-Number-ID'].whatsapp_business_profile.$post(args, options),
      )
    },
  })
}

export function usePostVersionPhoneNumberIDWhatsappBusinessProfile<
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
                    (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_profile']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_profile']['$post']
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
  const mutationDefaults = getPostVersionPhoneNumberIDWhatsappBusinessProfileMutationOptions<
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

export function getVersionPhoneNumberIDWhatsappCommerceSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_commerce_settings']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Phone-Number-ID/whatsapp_commerce_settings', keyArgs] as const
}

export function getVersionPhoneNumberIDWhatsappCommerceSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_commerce_settings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionPhoneNumberIDWhatsappCommerceSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Phone-Number-ID'].whatsapp_commerce_settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionPhoneNumberIDWhatsappCommerceSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_commerce_settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_commerce_settings']['$get']
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
                    (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_commerce_settings']['$get']
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
                    (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_commerce_settings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVersionPhoneNumberIDWhatsappCommerceSettingsQueryKey>
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
              (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_commerce_settings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionPhoneNumberIDWhatsappCommerceSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionPhoneNumberIDWhatsappCommerceSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Phone-Number-ID'].whatsapp_commerce_settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionPhoneNumberIDWhatsappCommerceSettingsMutationKey() {
  return [':Version', '/:Version/:Phone-Number-ID/whatsapp_commerce_settings', 'POST'] as const
}

export function getPostVersionPhoneNumberIDWhatsappCommerceSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_commerce_settings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_commerce_settings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVersionPhoneNumberIDWhatsappCommerceSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_commerce_settings']['$post']
      >,
    ) {
      return parseResponse(
        client[':Version'][':Phone-Number-ID'].whatsapp_commerce_settings.$post(args, options),
      )
    },
  })
}

export function usePostVersionPhoneNumberIDWhatsappCommerceSettings<
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
                    (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_commerce_settings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_commerce_settings']['$post']
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
  const mutationDefaults = getPostVersionPhoneNumberIDWhatsappCommerceSettingsMutationOptions<
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

export function getVersionPhoneNumberIDBusinessComplianceInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['business_compliance_info']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Phone-Number-ID/business_compliance_info', keyArgs] as const
}

export function getVersionPhoneNumberIDBusinessComplianceInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['business_compliance_info']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionPhoneNumberIDBusinessComplianceInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Phone-Number-ID'].business_compliance_info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionPhoneNumberIDBusinessComplianceInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':Version'][':Phone-Number-ID']['business_compliance_info']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['business_compliance_info']['$get']
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
                    (typeof client)[':Version'][':Phone-Number-ID']['business_compliance_info']['$get']
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
                    (typeof client)[':Version'][':Phone-Number-ID']['business_compliance_info']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVersionPhoneNumberIDBusinessComplianceInfoQueryKey>
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
              (typeof client)[':Version'][':Phone-Number-ID']['business_compliance_info']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionPhoneNumberIDBusinessComplianceInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionPhoneNumberIDBusinessComplianceInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Phone-Number-ID'].business_compliance_info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionPhoneNumberIDBusinessComplianceInfoMutationKey() {
  return [':Version', '/:Version/:Phone-Number-ID/business_compliance_info', 'POST'] as const
}

export function getPostVersionPhoneNumberIDBusinessComplianceInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Phone-Number-ID']['business_compliance_info']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['business_compliance_info']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVersionPhoneNumberIDBusinessComplianceInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':Phone-Number-ID']['business_compliance_info']['$post']
      >,
    ) {
      return parseResponse(
        client[':Version'][':Phone-Number-ID'].business_compliance_info.$post(args, options),
      )
    },
  })
}

export function usePostVersionPhoneNumberIDBusinessComplianceInfo<
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
                    (typeof client)[':Version'][':Phone-Number-ID']['business_compliance_info']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':Version'][':Phone-Number-ID']['business_compliance_info']['$post']
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
  const mutationDefaults = getPostVersionPhoneNumberIDBusinessComplianceInfoMutationOptions<
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

export function getPostVersionGroupIdInviteLinkMutationKey() {
  return [':Version', '/:Version/:group_id/invite_link', 'POST'] as const
}

export function getPostVersionGroupIdInviteLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':group_id']['invite_link']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':group_id']['invite_link']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionGroupIdInviteLinkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Version'][':group_id']['invite_link']['$post']>,
    ) {
      return parseResponse(client[':Version'][':group_id'].invite_link.$post(args, options))
    },
  })
}

export function usePostVersionGroupIdInviteLink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':Version'][':group_id']['invite_link']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':group_id']['invite_link']['$post']>,
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
  const mutationDefaults = getPostVersionGroupIdInviteLinkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteVersionGroupIdInviteLinkMutationKey() {
  return [':Version', '/:Version/:group_id/invite_link', 'DELETE'] as const
}

export function getDeleteVersionGroupIdInviteLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':group_id']['invite_link']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':group_id']['invite_link']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVersionGroupIdInviteLinkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Version'][':group_id']['invite_link']['$delete']>,
    ) {
      return parseResponse(client[':Version'][':group_id'].invite_link.$delete(args, options))
    },
  })
}

export function useDeleteVersionGroupIdInviteLink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':Version'][':group_id']['invite_link']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':group_id']['invite_link']['$delete']>,
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
  const mutationDefaults = getDeleteVersionGroupIdInviteLinkMutationOptions<
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

export function getVersionGroupIdJoinRequestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':group_id']['join_requests']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:group_id/join_requests', keyArgs] as const
}

export function getVersionGroupIdJoinRequestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':group_id']['join_requests']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionGroupIdJoinRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':group_id'].join_requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionGroupIdJoinRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Version'][':group_id']['join_requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':group_id']['join_requests']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':Version'][':group_id']['join_requests']['$get']>
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
                  ReturnType<(typeof client)[':Version'][':group_id']['join_requests']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVersionGroupIdJoinRequestsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':Version'][':group_id']['join_requests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionGroupIdJoinRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionGroupIdJoinRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':group_id'].join_requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionGroupIdJoinRequestsMutationKey() {
  return [':Version', '/:Version/:group_id/join_requests', 'POST'] as const
}

export function getPostVersionGroupIdJoinRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':group_id']['join_requests']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':group_id']['join_requests']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionGroupIdJoinRequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Version'][':group_id']['join_requests']['$post']>,
    ) {
      return parseResponse(client[':Version'][':group_id'].join_requests.$post(args, options))
    },
  })
}

export function usePostVersionGroupIdJoinRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':Version'][':group_id']['join_requests']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':group_id']['join_requests']['$post']>,
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
  const mutationDefaults = getPostVersionGroupIdJoinRequestsMutationOptions<
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

export function getDeleteVersionGroupIdJoinRequestsMutationKey() {
  return [':Version', '/:Version/:group_id/join_requests', 'DELETE'] as const
}

export function getDeleteVersionGroupIdJoinRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':group_id']['join_requests']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':group_id']['join_requests']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVersionGroupIdJoinRequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Version'][':group_id']['join_requests']['$delete']>,
    ) {
      return parseResponse(client[':Version'][':group_id'].join_requests.$delete(args, options))
    },
  })
}

export function useDeleteVersionGroupIdJoinRequests<
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
                  ReturnType<(typeof client)[':Version'][':group_id']['join_requests']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':group_id']['join_requests']['$delete']>,
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
  const mutationDefaults = getDeleteVersionGroupIdJoinRequestsMutationOptions<
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

export function getPostVersionGroupIdParticipantsMutationKey() {
  return [':Version', '/:Version/:group_id/participants', 'POST'] as const
}

export function getPostVersionGroupIdParticipantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':group_id']['participants']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':group_id']['participants']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionGroupIdParticipantsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Version'][':group_id']['participants']['$post']>,
    ) {
      return parseResponse(client[':Version'][':group_id'].participants.$post(args, options))
    },
  })
}

export function usePostVersionGroupIdParticipants<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':Version'][':group_id']['participants']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':group_id']['participants']['$post']>,
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
  const mutationDefaults = getPostVersionGroupIdParticipantsMutationOptions<
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

export function getDeleteVersionGroupIdParticipantsMutationKey() {
  return [':Version', '/:Version/:group_id/participants', 'DELETE'] as const
}

export function getDeleteVersionGroupIdParticipantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':group_id']['participants']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':group_id']['participants']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVersionGroupIdParticipantsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Version'][':group_id']['participants']['$delete']>,
    ) {
      return parseResponse(client[':Version'][':group_id'].participants.$delete(args, options))
    },
  })
}

export function useDeleteVersionGroupIdParticipants<
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
                  ReturnType<(typeof client)[':Version'][':group_id']['participants']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':group_id']['participants']['$delete']>,
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
  const mutationDefaults = getDeleteVersionGroupIdParticipantsMutationOptions<
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

export function getVersionGroupIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':group_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:group_id', keyArgs] as const
}

export function getVersionGroupIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':group_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':group_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':group_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':group_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':group_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':group_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVersionGroupIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':group_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':group_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionGroupIdMutationKey() {
  return [':Version', '/:Version/:group_id', 'POST'] as const
}

export function getPostVersionGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':group_id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':group_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionGroupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Version'][':group_id']['$post']>) {
      return parseResponse(client[':Version'][':group_id'].$post(args, options))
    },
  })
}

export function usePostVersionGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':group_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':group_id']['$post']>,
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
  const mutationDefaults = getPostVersionGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteVersionGroupIdMutationKey() {
  return [':Version', '/:Version/:group_id', 'DELETE'] as const
}

export function getDeleteVersionGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':group_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':group_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVersionGroupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Version'][':group_id']['$delete']>) {
      return parseResponse(client[':Version'][':group_id'].$delete(args, options))
    },
  })
}

export function useDeleteVersionGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':group_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':group_id']['$delete']>,
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
  const mutationDefaults = getDeleteVersionGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getVersionMediaIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':Media-ID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Media-ID', keyArgs] as const
}

export function getVersionMediaIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':Media-ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionMediaIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Media-ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionMediaID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':Media-ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':Media-ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':Media-ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':Media-ID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVersionMediaIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':Media-ID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionMediaIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionMediaIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Media-ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteVersionMediaIDMutationKey() {
  return [':Version', '/:Version/:Media-ID', 'DELETE'] as const
}

export function getDeleteVersionMediaIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Media-ID']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':Media-ID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVersionMediaIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Version'][':Media-ID']['$delete']>) {
      return parseResponse(client[':Version'][':Media-ID'].$delete(args, options))
    },
  })
}

export function useDeleteVersionMediaID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':Media-ID']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':Media-ID']['$delete']>,
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
  const mutationDefaults = getDeleteVersionMediaIDMutationOptions<TError, TOnMutateResult>(
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

export function getVersionMediaURLQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':Media-URL']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Media-URL', keyArgs] as const
}

export function getVersionMediaURLQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':Media-URL']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionMediaURLQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Media-URL'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionMediaURL<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':Media-URL']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':Media-URL']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':Media-URL']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':Media-URL']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVersionMediaURLQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':Media-URL']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionMediaURLQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionMediaURLQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Media-URL'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVersionMessageHistoryIDEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Message-History-ID']['events']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Message-History-ID/events', keyArgs] as const
}

export function getVersionMessageHistoryIDEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Message-History-ID']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionMessageHistoryIDEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Message-History-ID'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionMessageHistoryIDEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Version'][':Message-History-ID']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Message-History-ID']['events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':Version'][':Message-History-ID']['events']['$get']>
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
                  ReturnType<(typeof client)[':Version'][':Message-History-ID']['events']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVersionMessageHistoryIDEventsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':Version'][':Message-History-ID']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionMessageHistoryIDEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionMessageHistoryIDEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Message-History-ID'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVersionMigrationIntentIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Migration-Intent-ID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Migration-Intent-ID', keyArgs] as const
}

export function getVersionMigrationIntentIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Migration-Intent-ID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionMigrationIntentIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Migration-Intent-ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionMigrationIntentID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Version'][':Migration-Intent-ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Migration-Intent-ID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':Migration-Intent-ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':Migration-Intent-ID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVersionMigrationIntentIDQueryKey>
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
          Awaited<ReturnType<(typeof client)[':Version'][':Migration-Intent-ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionMigrationIntentIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionMigrationIntentIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Migration-Intent-ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVersionPreVerifiedPhoneNumberIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Pre-Verified-Phone-Number-ID', keyArgs] as const
}

export function getVersionPreVerifiedPhoneNumberIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionPreVerifiedPhoneNumberIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Pre-Verified-Phone-Number-ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionPreVerifiedPhoneNumberID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['$get']>
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
                  ReturnType<(typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVersionPreVerifiedPhoneNumberIDQueryKey>
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
          Awaited<ReturnType<(typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionPreVerifiedPhoneNumberIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionPreVerifiedPhoneNumberIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Pre-Verified-Phone-Number-ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteVersionPreVerifiedPhoneNumberIDMutationKey() {
  return [':Version', '/:Version/:Pre-Verified-Phone-Number-ID', 'DELETE'] as const
}

export function getDeleteVersionPreVerifiedPhoneNumberIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVersionPreVerifiedPhoneNumberIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['$delete']
      >,
    ) {
      return parseResponse(
        client[':Version'][':Pre-Verified-Phone-Number-ID'].$delete(args, options),
      )
    },
  })
}

export function useDeleteVersionPreVerifiedPhoneNumberID<
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
                    (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['$delete']>,
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
  const mutationDefaults = getDeleteVersionPreVerifiedPhoneNumberIDMutationOptions<
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

export function getVersionPreVerifiedPhoneNumberIDPartnersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['partners']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Pre-Verified-Phone-Number-ID/partners', keyArgs] as const
}

export function getVersionPreVerifiedPhoneNumberIDPartnersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['partners']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionPreVerifiedPhoneNumberIDPartnersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Pre-Verified-Phone-Number-ID'].partners.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionPreVerifiedPhoneNumberIDPartners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['partners']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['partners']['$get']
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
                    (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['partners']['$get']
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
                    (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['partners']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVersionPreVerifiedPhoneNumberIDPartnersQueryKey>
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
              (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['partners']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionPreVerifiedPhoneNumberIDPartnersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionPreVerifiedPhoneNumberIDPartnersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Pre-Verified-Phone-Number-ID'].partners.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionPreVerifiedPhoneNumberIDRequestCodeMutationKey() {
  return [':Version', '/:Version/:Pre-Verified-Phone-Number-ID/request_code', 'POST'] as const
}

export function getPostVersionPreVerifiedPhoneNumberIDRequestCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['request_code']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['request_code']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVersionPreVerifiedPhoneNumberIDRequestCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['request_code']['$post']
      >,
    ) {
      return parseResponse(
        client[':Version'][':Pre-Verified-Phone-Number-ID'].request_code.$post(args, options),
      )
    },
  })
}

export function usePostVersionPreVerifiedPhoneNumberIDRequestCode<
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
                    (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['request_code']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['request_code']['$post']
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
  const mutationDefaults = getPostVersionPreVerifiedPhoneNumberIDRequestCodeMutationOptions<
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

export function getPostVersionPreVerifiedPhoneNumberIDVerifyCodeMutationKey() {
  return [':Version', '/:Version/:Pre-Verified-Phone-Number-ID/verify_code', 'POST'] as const
}

export function getPostVersionPreVerifiedPhoneNumberIDVerifyCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['verify_code']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['verify_code']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVersionPreVerifiedPhoneNumberIDVerifyCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['verify_code']['$post']
      >,
    ) {
      return parseResponse(
        client[':Version'][':Pre-Verified-Phone-Number-ID'].verify_code.$post(args, options),
      )
    },
  })
}

export function usePostVersionPreVerifiedPhoneNumberIDVerifyCode<
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
                    (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['verify_code']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['verify_code']['$post']
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
  const mutationDefaults = getPostVersionPreVerifiedPhoneNumberIDVerifyCodeMutationOptions<
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

export function getVersionSolutionIDAccessTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Solution-ID']['access_token']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Solution-ID/access_token', keyArgs] as const
}

export function getVersionSolutionIDAccessTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Solution-ID']['access_token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionSolutionIDAccessTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Solution-ID'].access_token.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionSolutionIDAccessToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Version'][':Solution-ID']['access_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Solution-ID']['access_token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':Version'][':Solution-ID']['access_token']['$get']>
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
                  ReturnType<(typeof client)[':Version'][':Solution-ID']['access_token']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVersionSolutionIDAccessTokenQueryKey>
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
          Awaited<ReturnType<(typeof client)[':Version'][':Solution-ID']['access_token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionSolutionIDAccessTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionSolutionIDAccessTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Solution-ID'].access_token.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionSolutionIDAcceptDeactivationRequestMutationKey() {
  return [':Version', '/:Version/:Solution-ID/accept_deactivation_request', 'POST'] as const
}

export function getPostVersionSolutionIDAcceptDeactivationRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Solution-ID']['accept_deactivation_request']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':Version'][':Solution-ID']['accept_deactivation_request']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVersionSolutionIDAcceptDeactivationRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':Solution-ID']['accept_deactivation_request']['$post']
      >,
    ) {
      return parseResponse(
        client[':Version'][':Solution-ID'].accept_deactivation_request.$post(args, options),
      )
    },
  })
}

export function usePostVersionSolutionIDAcceptDeactivationRequest<
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
                    (typeof client)[':Version'][':Solution-ID']['accept_deactivation_request']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':Version'][':Solution-ID']['accept_deactivation_request']['$post']
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
  const mutationDefaults = getPostVersionSolutionIDAcceptDeactivationRequestMutationOptions<
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

export function getPostVersionSolutionIDAcceptMutationKey() {
  return [':Version', '/:Version/:Solution-ID/accept', 'POST'] as const
}

export function getPostVersionSolutionIDAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Solution-ID']['accept']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':Solution-ID']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionSolutionIDAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Version'][':Solution-ID']['accept']['$post']>,
    ) {
      return parseResponse(client[':Version'][':Solution-ID'].accept.$post(args, options))
    },
  })
}

export function usePostVersionSolutionIDAccept<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':Solution-ID']['accept']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':Solution-ID']['accept']['$post']>,
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
  const mutationDefaults = getPostVersionSolutionIDAcceptMutationOptions<TError, TOnMutateResult>(
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

export function getVersionSolutionIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':Solution-ID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Solution-ID', keyArgs] as const
}

export function getVersionSolutionIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':Solution-ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionSolutionIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Solution-ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionSolutionID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':Solution-ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':Solution-ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':Solution-ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':Solution-ID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVersionSolutionIDQueryKey>
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
          Awaited<ReturnType<(typeof client)[':Version'][':Solution-ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionSolutionIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionSolutionIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Solution-ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionSolutionIDRejectDeactivationRequestMutationKey() {
  return [':Version', '/:Version/:Solution-ID/reject_deactivation_request', 'POST'] as const
}

export function getPostVersionSolutionIDRejectDeactivationRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Solution-ID']['reject_deactivation_request']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':Version'][':Solution-ID']['reject_deactivation_request']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVersionSolutionIDRejectDeactivationRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':Solution-ID']['reject_deactivation_request']['$post']
      >,
    ) {
      return parseResponse(
        client[':Version'][':Solution-ID'].reject_deactivation_request.$post(args, options),
      )
    },
  })
}

export function usePostVersionSolutionIDRejectDeactivationRequest<
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
                    (typeof client)[':Version'][':Solution-ID']['reject_deactivation_request']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':Version'][':Solution-ID']['reject_deactivation_request']['$post']
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
  const mutationDefaults = getPostVersionSolutionIDRejectDeactivationRequestMutationOptions<
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

export function getPostVersionSolutionIDRejectMutationKey() {
  return [':Version', '/:Version/:Solution-ID/reject', 'POST'] as const
}

export function getPostVersionSolutionIDRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Solution-ID']['reject']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':Solution-ID']['reject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionSolutionIDRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Version'][':Solution-ID']['reject']['$post']>,
    ) {
      return parseResponse(client[':Version'][':Solution-ID'].reject.$post(args, options))
    },
  })
}

export function usePostVersionSolutionIDReject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':Solution-ID']['reject']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':Solution-ID']['reject']['$post']>,
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
  const mutationDefaults = getPostVersionSolutionIDRejectMutationOptions<TError, TOnMutateResult>(
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

export function getPostVersionSolutionIDSendDeactivationRequestMutationKey() {
  return [':Version', '/:Version/:Solution-ID/send_deactivation_request', 'POST'] as const
}

export function getPostVersionSolutionIDSendDeactivationRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Solution-ID']['send_deactivation_request']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':Version'][':Solution-ID']['send_deactivation_request']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVersionSolutionIDSendDeactivationRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':Solution-ID']['send_deactivation_request']['$post']
      >,
    ) {
      return parseResponse(
        client[':Version'][':Solution-ID'].send_deactivation_request.$post(args, options),
      )
    },
  })
}

export function usePostVersionSolutionIDSendDeactivationRequest<
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
                    (typeof client)[':Version'][':Solution-ID']['send_deactivation_request']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':Version'][':Solution-ID']['send_deactivation_request']['$post']
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
  const mutationDefaults = getPostVersionSolutionIDSendDeactivationRequestMutationOptions<
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

export function getVersionUserIDAssignedWhatsappBusinessAccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':User-ID']['assigned_whatsapp_business_accounts']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:User-ID/assigned_whatsapp_business_accounts', keyArgs] as const
}

export function getVersionUserIDAssignedWhatsappBusinessAccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':User-ID']['assigned_whatsapp_business_accounts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionUserIDAssignedWhatsappBusinessAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':User-ID'].assigned_whatsapp_business_accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionUserIDAssignedWhatsappBusinessAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':Version'][':User-ID']['assigned_whatsapp_business_accounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':User-ID']['assigned_whatsapp_business_accounts']['$get']
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
                    (typeof client)[':Version'][':User-ID']['assigned_whatsapp_business_accounts']['$get']
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
                    (typeof client)[':Version'][':User-ID']['assigned_whatsapp_business_accounts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVersionUserIDAssignedWhatsappBusinessAccountsQueryKey>
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
              (typeof client)[':Version'][':User-ID']['assigned_whatsapp_business_accounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionUserIDAssignedWhatsappBusinessAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionUserIDAssignedWhatsappBusinessAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':User-ID'].assigned_whatsapp_business_accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVersionWhatsAppAccountNumberIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':WhatsApp-Account-Number-ID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:WhatsApp-Account-Number-ID', keyArgs] as const
}

export function getVersionWhatsAppAccountNumberIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':WhatsApp-Account-Number-ID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionWhatsAppAccountNumberIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':WhatsApp-Account-Number-ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionWhatsAppAccountNumberID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Version'][':WhatsApp-Account-Number-ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':WhatsApp-Account-Number-ID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':Version'][':WhatsApp-Account-Number-ID']['$get']>
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
                  ReturnType<(typeof client)[':Version'][':WhatsApp-Account-Number-ID']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVersionWhatsAppAccountNumberIDQueryKey>
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
          Awaited<ReturnType<(typeof client)[':Version'][':WhatsApp-Account-Number-ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionWhatsAppAccountNumberIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionWhatsAppAccountNumberIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':WhatsApp-Account-Number-ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVersionWhatsAppBusinessAccountIDAssignedUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:WhatsApp-Business-Account-ID/assigned_users', keyArgs] as const
}

export function getVersionWhatsAppBusinessAccountIDAssignedUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionWhatsAppBusinessAccountIDAssignedUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':WhatsApp-Business-Account-ID'].assigned_users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionWhatsAppBusinessAccountIDAssignedUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$get']
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
                    (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$get']
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
                    (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVersionWhatsAppBusinessAccountIDAssignedUsersQueryKey>
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
              (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionWhatsAppBusinessAccountIDAssignedUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionWhatsAppBusinessAccountIDAssignedUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':WhatsApp-Business-Account-ID'].assigned_users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionWhatsAppBusinessAccountIDAssignedUsersMutationKey() {
  return [':Version', '/:Version/:WhatsApp-Business-Account-ID/assigned_users', 'POST'] as const
}

export function getPostVersionWhatsAppBusinessAccountIDAssignedUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVersionWhatsAppBusinessAccountIDAssignedUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$post']
      >,
    ) {
      return parseResponse(
        client[':Version'][':WhatsApp-Business-Account-ID'].assigned_users.$post(args, options),
      )
    },
  })
}

export function usePostVersionWhatsAppBusinessAccountIDAssignedUsers<
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
                    (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$post']
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
  const mutationDefaults = getPostVersionWhatsAppBusinessAccountIDAssignedUsersMutationOptions<
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

export function getDeleteVersionWhatsAppBusinessAccountIDAssignedUsersMutationKey() {
  return [':Version', '/:Version/:WhatsApp-Business-Account-ID/assigned_users', 'DELETE'] as const
}

export function getDeleteVersionWhatsAppBusinessAccountIDAssignedUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteVersionWhatsAppBusinessAccountIDAssignedUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$delete']
      >,
    ) {
      return parseResponse(
        client[':Version'][':WhatsApp-Business-Account-ID'].assigned_users.$delete(args, options),
      )
    },
  })
}

export function useDeleteVersionWhatsAppBusinessAccountIDAssignedUsers<
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
                    (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$delete']
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
  const mutationDefaults = getDeleteVersionWhatsAppBusinessAccountIDAssignedUsersMutationOptions<
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

export function getPostVersionPhoneNumberIDConversationalAutomationMutationKey() {
  return [':Version', '/:Version/:Phone-Number-ID/conversational_automation', 'POST'] as const
}

export function getPostVersionPhoneNumberIDConversationalAutomationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Phone-Number-ID']['conversational_automation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['conversational_automation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVersionPhoneNumberIDConversationalAutomationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':Phone-Number-ID']['conversational_automation']['$post']
      >,
    ) {
      return parseResponse(
        client[':Version'][':Phone-Number-ID'].conversational_automation.$post(args, options),
      )
    },
  })
}

export function usePostVersionPhoneNumberIDConversationalAutomation<
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
                    (typeof client)[':Version'][':Phone-Number-ID']['conversational_automation']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':Version'][':Phone-Number-ID']['conversational_automation']['$post']
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
  const mutationDefaults = getPostVersionPhoneNumberIDConversationalAutomationMutationOptions<
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

export function getVersionBusinessIDExtendedcreditsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Business-ID']['extendedcredits']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Business-ID/extendedcredits', keyArgs] as const
}

export function getVersionBusinessIDExtendedcreditsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Business-ID']['extendedcredits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionBusinessIDExtendedcreditsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Business-ID'].extendedcredits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionBusinessIDExtendedcredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Version'][':Business-ID']['extendedcredits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Business-ID']['extendedcredits']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':Version'][':Business-ID']['extendedcredits']['$get']>
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
                  ReturnType<(typeof client)[':Version'][':Business-ID']['extendedcredits']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVersionBusinessIDExtendedcreditsQueryKey>
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
            ReturnType<(typeof client)[':Version'][':Business-ID']['extendedcredits']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionBusinessIDExtendedcreditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionBusinessIDExtendedcreditsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Business-ID'].extendedcredits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVersionWABAIDFlowsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['flows']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:WABA-ID/flows', keyArgs] as const
}

export function getVersionWABAIDFlowsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['flows']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionWABAIDFlowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':WABA-ID'].flows.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionWABAIDFlows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['flows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['flows']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['flows']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['flows']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVersionWABAIDFlowsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['flows']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionWABAIDFlowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionWABAIDFlowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':WABA-ID'].flows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionWABAIDFlowsMutationKey() {
  return [':Version', '/:Version/:WABA-ID/flows', 'POST'] as const
}

export function getPostVersionWABAIDFlowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['flows']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['flows']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionWABAIDFlowsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['flows']['$post']>,
    ) {
      return parseResponse(client[':Version'][':WABA-ID'].flows.$post(args, options))
    },
  })
}

export function usePostVersionWABAIDFlows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['flows']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':WABA-ID']['flows']['$post']>,
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
  const mutationDefaults = getPostVersionWABAIDFlowsMutationOptions<TError, TOnMutateResult>(
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

export function getPostVersionWABAIDMigrateFlowsMutationKey() {
  return [':Version', '/:Version/:WABA-ID/migrate_flows', 'POST'] as const
}

export function getPostVersionWABAIDMigrateFlowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['migrate_flows']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['migrate_flows']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionWABAIDMigrateFlowsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['migrate_flows']['$post']>,
    ) {
      return parseResponse(client[':Version'][':WABA-ID'].migrate_flows.$post(args, options))
    },
  })
}

export function usePostVersionWABAIDMigrateFlows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':Version'][':WABA-ID']['migrate_flows']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':WABA-ID']['migrate_flows']['$post']>,
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
  const mutationDefaults = getPostVersionWABAIDMigrateFlowsMutationOptions<TError, TOnMutateResult>(
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

export function getVersionFlowIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':Flow-ID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Flow-ID', keyArgs] as const
}

export function getVersionFlowIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':Flow-ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionFlowIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Flow-ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionFlowID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':Flow-ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVersionFlowIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionFlowIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionFlowIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Flow-ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionFlowIDMutationKey() {
  return [':Version', '/:Version/:Flow-ID', 'POST'] as const
}

export function getPostVersionFlowIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':Flow-ID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionFlowIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Version'][':Flow-ID']['$post']>) {
      return parseResponse(client[':Version'][':Flow-ID'].$post(args, options))
    },
  })
}

export function usePostVersionFlowID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':Flow-ID']['$post']>,
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
  const mutationDefaults = getPostVersionFlowIDMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteVersionFlowIDMutationKey() {
  return [':Version', '/:Version/:Flow-ID', 'DELETE'] as const
}

export function getDeleteVersionFlowIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':Flow-ID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVersionFlowIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Version'][':Flow-ID']['$delete']>) {
      return parseResponse(client[':Version'][':Flow-ID'].$delete(args, options))
    },
  })
}

export function useDeleteVersionFlowID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':Flow-ID']['$delete']>,
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
  const mutationDefaults = getDeleteVersionFlowIDMutationOptions<TError, TOnMutateResult>(
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

export function getVersionFlowIDAssetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Flow-ID']['assets']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:Flow-ID/assets', keyArgs] as const
}

export function getVersionFlowIDAssetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Flow-ID']['assets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionFlowIDAssetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':Flow-ID'].assets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionFlowIDAssets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['assets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':Flow-ID']['assets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['assets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['assets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVersionFlowIDAssetsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['assets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionFlowIDAssetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionFlowIDAssetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':Flow-ID'].assets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionFlowIDAssetsMutationKey() {
  return [':Version', '/:Version/:Flow-ID/assets', 'POST'] as const
}

export function getPostVersionFlowIDAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['assets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':Flow-ID']['assets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionFlowIDAssetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Version'][':Flow-ID']['assets']['$post']>,
    ) {
      return parseResponse(client[':Version'][':Flow-ID'].assets.$post(args, options))
    },
  })
}

export function usePostVersionFlowIDAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['assets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':Flow-ID']['assets']['$post']>,
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
  const mutationDefaults = getPostVersionFlowIDAssetsMutationOptions<TError, TOnMutateResult>(
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

export function getPostVersionFlowIDPublishMutationKey() {
  return [':Version', '/:Version/:Flow-ID/publish', 'POST'] as const
}

export function getPostVersionFlowIDPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['publish']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':Flow-ID']['publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionFlowIDPublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Version'][':Flow-ID']['publish']['$post']>,
    ) {
      return parseResponse(client[':Version'][':Flow-ID'].publish.$post(args, options))
    },
  })
}

export function usePostVersionFlowIDPublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['publish']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':Flow-ID']['publish']['$post']>,
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
  const mutationDefaults = getPostVersionFlowIDPublishMutationOptions<TError, TOnMutateResult>(
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

export function getPostVersionFlowIDDeprecateMutationKey() {
  return [':Version', '/:Version/:Flow-ID/deprecate', 'POST'] as const
}

export function getPostVersionFlowIDDeprecateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['deprecate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':Flow-ID']['deprecate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionFlowIDDeprecateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Version'][':Flow-ID']['deprecate']['$post']>,
    ) {
      return parseResponse(client[':Version'][':Flow-ID'].deprecate.$post(args, options))
    },
  })
}

export function usePostVersionFlowIDDeprecate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['deprecate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':Flow-ID']['deprecate']['$post']>,
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
  const mutationDefaults = getPostVersionFlowIDDeprecateMutationOptions<TError, TOnMutateResult>(
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

export function getVersionWABAIDInProgressOnbehalfRequestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':WABA-ID']['in_progress_onbehalf_request']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:WABA-ID/in_progress_onbehalf_request', keyArgs] as const
}

export function getVersionWABAIDInProgressOnbehalfRequestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':WABA-ID']['in_progress_onbehalf_request']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionWABAIDInProgressOnbehalfRequestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':WABA-ID'].in_progress_onbehalf_request.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionWABAIDInProgressOnbehalfRequest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':Version'][':WABA-ID']['in_progress_onbehalf_request']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':Version'][':WABA-ID']['in_progress_onbehalf_request']['$get']
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
                    (typeof client)[':Version'][':WABA-ID']['in_progress_onbehalf_request']['$get']
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
                    (typeof client)[':Version'][':WABA-ID']['in_progress_onbehalf_request']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVersionWABAIDInProgressOnbehalfRequestQueryKey>
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
              (typeof client)[':Version'][':WABA-ID']['in_progress_onbehalf_request']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionWABAIDInProgressOnbehalfRequestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionWABAIDInProgressOnbehalfRequestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':WABA-ID'].in_progress_onbehalf_request.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVersionOBOMobilityIntentIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':OBO-Mobility-Intent-ID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:OBO-Mobility-Intent-ID', keyArgs] as const
}

export function getVersionOBOMobilityIntentIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':OBO-Mobility-Intent-ID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionOBOMobilityIntentIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':OBO-Mobility-Intent-ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionOBOMobilityIntentID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Version'][':OBO-Mobility-Intent-ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':OBO-Mobility-Intent-ID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':OBO-Mobility-Intent-ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':OBO-Mobility-Intent-ID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVersionOBOMobilityIntentIDQueryKey>
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
          Awaited<ReturnType<(typeof client)[':Version'][':OBO-Mobility-Intent-ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionOBOMobilityIntentIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionOBOMobilityIntentIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':OBO-Mobility-Intent-ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionWABAIDOboMobilityIntentMutationKey() {
  return [':Version', '/:Version/:WABA-ID/obo_mobility_intent', 'POST'] as const
}

export function getPostVersionWABAIDOboMobilityIntentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':Version'][':WABA-ID']['obo_mobility_intent']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['obo_mobility_intent']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionWABAIDOboMobilityIntentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':WABA-ID']['obo_mobility_intent']['$post']
      >,
    ) {
      return parseResponse(client[':Version'][':WABA-ID'].obo_mobility_intent.$post(args, options))
    },
  })
}

export function usePostVersionWABAIDOboMobilityIntent<
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
                    (typeof client)[':Version'][':WABA-ID']['obo_mobility_intent']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':WABA-ID']['obo_mobility_intent']['$post']>,
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
  const mutationDefaults = getPostVersionWABAIDOboMobilityIntentMutationOptions<
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

export function getVersionWABAIDPhoneNumbersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['phone_numbers']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:WABA-ID/phone_numbers', keyArgs] as const
}

export function getVersionWABAIDPhoneNumbersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['phone_numbers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionWABAIDPhoneNumbersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':WABA-ID'].phone_numbers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionWABAIDPhoneNumbers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['phone_numbers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['phone_numbers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':Version'][':WABA-ID']['phone_numbers']['$get']>
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
                  ReturnType<(typeof client)[':Version'][':WABA-ID']['phone_numbers']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVersionWABAIDPhoneNumbersQueryKey>
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
          Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['phone_numbers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionWABAIDPhoneNumbersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionWABAIDPhoneNumbersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':WABA-ID'].phone_numbers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionWABAIDPhoneNumbersMutationKey() {
  return [':Version', '/:Version/:WABA-ID/phone_numbers', 'POST'] as const
}

export function getPostVersionWABAIDPhoneNumbersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['phone_numbers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['phone_numbers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionWABAIDPhoneNumbersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['phone_numbers']['$post']>,
    ) {
      return parseResponse(client[':Version'][':WABA-ID'].phone_numbers.$post(args, options))
    },
  })
}

export function usePostVersionWABAIDPhoneNumbers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':Version'][':WABA-ID']['phone_numbers']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':WABA-ID']['phone_numbers']['$post']>,
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
  const mutationDefaults = getPostVersionWABAIDPhoneNumbersMutationOptions<TError, TOnMutateResult>(
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

export function getVersionWABAIDSchedulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['schedules']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:WABA-ID/schedules', keyArgs] as const
}

export function getVersionWABAIDSchedulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['schedules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionWABAIDSchedulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':WABA-ID'].schedules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionWABAIDSchedules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['schedules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['schedules']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['schedules']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['schedules']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVersionWABAIDSchedulesQueryKey>
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
          Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['schedules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionWABAIDSchedulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionWABAIDSchedulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':WABA-ID'].schedules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionWABAIDSchedulesMutationKey() {
  return [':Version', '/:Version/:WABA-ID/schedules', 'POST'] as const
}

export function getPostVersionWABAIDSchedulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['schedules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['schedules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionWABAIDSchedulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['schedules']['$post']>,
    ) {
      return parseResponse(client[':Version'][':WABA-ID'].schedules.$post(args, options))
    },
  })
}

export function usePostVersionWABAIDSchedules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['schedules']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':WABA-ID']['schedules']['$post']>,
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
  const mutationDefaults = getPostVersionWABAIDSchedulesMutationOptions<TError, TOnMutateResult>(
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

export function getPostVersionWABAIDSetOboMobilityIntentMutationKey() {
  return [':Version', '/:Version/:WABA-ID/set_obo_mobility_intent', 'POST'] as const
}

export function getPostVersionWABAIDSetOboMobilityIntentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':Version'][':WABA-ID']['set_obo_mobility_intent']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['set_obo_mobility_intent']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionWABAIDSetOboMobilityIntentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':WABA-ID']['set_obo_mobility_intent']['$post']
      >,
    ) {
      return parseResponse(
        client[':Version'][':WABA-ID'].set_obo_mobility_intent.$post(args, options),
      )
    },
  })
}

export function usePostVersionWABAIDSetOboMobilityIntent<
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
                    (typeof client)[':Version'][':WABA-ID']['set_obo_mobility_intent']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':Version'][':WABA-ID']['set_obo_mobility_intent']['$post']
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
  const mutationDefaults = getPostVersionWABAIDSetOboMobilityIntentMutationOptions<
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

export function getPostVersionWABAIDSetSolutionMigrationIntentMutationKey() {
  return [':Version', '/:Version/:WABA-ID/set_solution_migration_intent', 'POST'] as const
}

export function getPostVersionWABAIDSetSolutionMigrationIntentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':WABA-ID']['set_solution_migration_intent']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':Version'][':WABA-ID']['set_solution_migration_intent']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVersionWABAIDSetSolutionMigrationIntentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':WABA-ID']['set_solution_migration_intent']['$post']
      >,
    ) {
      return parseResponse(
        client[':Version'][':WABA-ID'].set_solution_migration_intent.$post(args, options),
      )
    },
  })
}

export function usePostVersionWABAIDSetSolutionMigrationIntent<
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
                    (typeof client)[':Version'][':WABA-ID']['set_solution_migration_intent']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':Version'][':WABA-ID']['set_solution_migration_intent']['$post']
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
  const mutationDefaults = getPostVersionWABAIDSetSolutionMigrationIntentMutationOptions<
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

export function getVersionWABAIDSolutionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['solutions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:WABA-ID/solutions', keyArgs] as const
}

export function getVersionWABAIDSolutionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['solutions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionWABAIDSolutionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':WABA-ID'].solutions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionWABAIDSolutions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['solutions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['solutions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['solutions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['solutions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVersionWABAIDSolutionsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['solutions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionWABAIDSolutionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionWABAIDSolutionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':WABA-ID'].solutions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVersionWABAIDSubscribedAppsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:WABA-ID/subscribed_apps', keyArgs] as const
}

export function getVersionWABAIDSubscribedAppsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionWABAIDSubscribedAppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':WABA-ID'].subscribed_apps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionWABAIDSubscribedApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$get']>
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
                  ReturnType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVersionWABAIDSubscribedAppsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionWABAIDSubscribedAppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionWABAIDSubscribedAppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':WABA-ID'].subscribed_apps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionWABAIDSubscribedAppsMutationKey() {
  return [':Version', '/:Version/:WABA-ID/subscribed_apps', 'POST'] as const
}

export function getPostVersionWABAIDSubscribedAppsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionWABAIDSubscribedAppsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$post']>,
    ) {
      return parseResponse(client[':Version'][':WABA-ID'].subscribed_apps.$post(args, options))
    },
  })
}

export function usePostVersionWABAIDSubscribedApps<
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
                  ReturnType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$post']>,
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
  const mutationDefaults = getPostVersionWABAIDSubscribedAppsMutationOptions<
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

export function getDeleteVersionWABAIDSubscribedAppsMutationKey() {
  return [':Version', '/:Version/:WABA-ID/subscribed_apps', 'DELETE'] as const
}

export function getDeleteVersionWABAIDSubscribedAppsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVersionWABAIDSubscribedAppsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$delete']>,
    ) {
      return parseResponse(client[':Version'][':WABA-ID'].subscribed_apps.$delete(args, options))
    },
  })
}

export function useDeleteVersionWABAIDSubscribedApps<
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
                  ReturnType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$delete']>,
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
  const mutationDefaults = getDeleteVersionWABAIDSubscribedAppsMutationOptions<
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

export function getVersionTEMPLATEIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':TEMPLATE_ID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:TEMPLATE_ID', keyArgs] as const
}

export function getVersionTEMPLATEIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':TEMPLATE_ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionTEMPLATEIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':TEMPLATE_ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionTEMPLATEID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':TEMPLATE_ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':TEMPLATE_ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':TEMPLATE_ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':TEMPLATE_ID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVersionTEMPLATEIDQueryKey>
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
          Awaited<ReturnType<(typeof client)[':Version'][':TEMPLATE_ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionTEMPLATEIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionTEMPLATEIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':TEMPLATE_ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionTEMPLATEIDMutationKey() {
  return [':Version', '/:Version/:TEMPLATE_ID', 'POST'] as const
}

export function getPostVersionTEMPLATEIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':TEMPLATE_ID']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':TEMPLATE_ID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionTEMPLATEIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Version'][':TEMPLATE_ID']['$post']>) {
      return parseResponse(client[':Version'][':TEMPLATE_ID'].$post(args, options))
    },
  })
}

export function usePostVersionTEMPLATEID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':TEMPLATE_ID']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':TEMPLATE_ID']['$post']>,
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
  const mutationDefaults = getPostVersionTEMPLATEIDMutationOptions<TError, TOnMutateResult>(
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

export function getVersionWABAIDMessageTemplatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:WABA-ID/message_templates', keyArgs] as const
}

export function getVersionWABAIDMessageTemplatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionWABAIDMessageTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':WABA-ID'].message_templates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionWABAIDMessageTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$get']>
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
                  ReturnType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVersionWABAIDMessageTemplatesQueryKey>
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
          Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionWABAIDMessageTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionWABAIDMessageTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':WABA-ID'].message_templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionWABAIDMessageTemplatesMutationKey() {
  return [':Version', '/:Version/:WABA-ID/message_templates', 'POST'] as const
}

export function getPostVersionWABAIDMessageTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionWABAIDMessageTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$post']>,
    ) {
      return parseResponse(client[':Version'][':WABA-ID'].message_templates.$post(args, options))
    },
  })
}

export function usePostVersionWABAIDMessageTemplates<
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
                  ReturnType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$post']>,
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
  const mutationDefaults = getPostVersionWABAIDMessageTemplatesMutationOptions<
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

export function getDeleteVersionWABAIDMessageTemplatesMutationKey() {
  return [':Version', '/:Version/:WABA-ID/message_templates', 'DELETE'] as const
}

export function getDeleteVersionWABAIDMessageTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVersionWABAIDMessageTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Version'][':WABA-ID']['message_templates']['$delete']
      >,
    ) {
      return parseResponse(client[':Version'][':WABA-ID'].message_templates.$delete(args, options))
    },
  })
}

export function useDeleteVersionWABAIDMessageTemplates<
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
                    (typeof client)[':Version'][':WABA-ID']['message_templates']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$delete']>,
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
  const mutationDefaults = getDeleteVersionWABAIDMessageTemplatesMutationOptions<
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

export function getVersionWABAIDActivitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['activities']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:WABA-ID/activities', keyArgs] as const
}

export function getVersionWABAIDActivitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['activities']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionWABAIDActivitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':WABA-ID'].activities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionWABAIDActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['activities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['activities']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['activities']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['activities']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVersionWABAIDActivitiesQueryKey>
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
          Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['activities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionWABAIDActivitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionWABAIDActivitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':WABA-ID'].activities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVersionWABAIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':WABA-ID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:WABA-ID', keyArgs] as const
}

export function getVersionWABAIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':WABA-ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionWABAIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':WABA-ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionWABAID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':WABA-ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVersionWABAIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionWABAIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionWABAIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':WABA-ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionWABAIDMutationKey() {
  return [':Version', '/:Version/:WABA-ID', 'POST'] as const
}

export function getPostVersionWABAIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionWABAIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['$post']>) {
      return parseResponse(client[':Version'][':WABA-ID'].$post(args, options))
    },
  })
}

export function usePostVersionWABAID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':WABA-ID']['$post']>,
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
  const mutationDefaults = getPostVersionWABAIDMutationOptions<TError, TOnMutateResult>(
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

export function getVersionWABABotIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':WABA-Bot-ID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:WABA-Bot-ID', keyArgs] as const
}

export function getVersionWABABotIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':WABA-Bot-ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionWABABotIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':WABA-Bot-ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionWABABotID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':WABA-Bot-ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':Version'][':WABA-Bot-ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':WABA-Bot-ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Version'][':WABA-Bot-ID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVersionWABABotIDQueryKey>
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
          Awaited<ReturnType<(typeof client)[':Version'][':WABA-Bot-ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionWABABotIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionWABABotIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':WABA-Bot-ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVersionWhatsAppBusinessProfileIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':WhatsApp-Business-Profile-ID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':Version', '/:Version/:WhatsApp-Business-Profile-ID', keyArgs] as const
}

export function getVersionWhatsAppBusinessProfileIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':WhatsApp-Business-Profile-ID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionWhatsAppBusinessProfileIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':Version'][':WhatsApp-Business-Profile-ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionWhatsAppBusinessProfileID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Version'][':WhatsApp-Business-Profile-ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':Version'][':WhatsApp-Business-Profile-ID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':Version'][':WhatsApp-Business-Profile-ID']['$get']>
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
                  ReturnType<(typeof client)[':Version'][':WhatsApp-Business-Profile-ID']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVersionWhatsAppBusinessProfileIDQueryKey>
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
          Awaited<ReturnType<(typeof client)[':Version'][':WhatsApp-Business-Profile-ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionWhatsAppBusinessProfileIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionWhatsAppBusinessProfileIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':Version'][':WhatsApp-Business-Profile-ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionWhatsAppBusinessProfileIDMutationKey() {
  return [':Version', '/:Version/:WhatsApp-Business-Profile-ID', 'POST'] as const
}

export function getPostVersionWhatsAppBusinessProfileIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':WhatsApp-Business-Profile-ID']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Version'][':WhatsApp-Business-Profile-ID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionWhatsAppBusinessProfileIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Version'][':WhatsApp-Business-Profile-ID']['$post']>,
    ) {
      return parseResponse(client[':Version'][':WhatsApp-Business-Profile-ID'].$post(args, options))
    },
  })
}

export function usePostVersionWhatsAppBusinessProfileID<
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
                  ReturnType<(typeof client)[':Version'][':WhatsApp-Business-Profile-ID']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':Version'][':WhatsApp-Business-Profile-ID']['$post']>,
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
  const mutationDefaults = getPostVersionWhatsAppBusinessProfileIDMutationOptions<
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

export function getPostWhatsappWebhooksMutationKey() {
  return ['whatsapp', '/whatsapp/webhooks', 'POST'] as const
}

export function getPostWhatsappWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp.webhooks.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.whatsapp.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWhatsappWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.whatsapp.webhooks.$post>) {
      return parseResponse(client.whatsapp.webhooks.$post(args, options))
    },
  })
}

export function usePostWhatsappWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp.webhooks.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.whatsapp.webhooks.$post>,
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
  const mutationDefaults = getPostWhatsappWebhooksMutationOptions<TError, TOnMutateResult>(
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
