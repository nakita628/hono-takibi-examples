import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiAddressQueryKey() {
  return ['api', '/api/address'] as const
}

export function getApiAddressQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.address.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.address.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiAddressQueryKey>
  >({
    queryKey: getApiAddressQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.address.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiAddress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.address.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.address.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAddressQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAddress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.address.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.address.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAddressQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiAddressIndexQueryKey() {
  return ['api', '/api/address/'] as const
}

export function getApiAddressIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.address.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.address.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAddressIndexQueryKey>
  >({
    queryKey: getApiAddressIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.address.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAddressIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.address.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.address.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAddressIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAddressIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAddressIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.address.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.address.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAddressIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAddressIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiLifestoryQueryKey() {
  return ['api', '/api/lifestory'] as const
}

export function getApiLifestoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lifestory.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lifestory.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLifestoryQueryKey>
  >({
    queryKey: getApiLifestoryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.lifestory.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiLifestory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lifestory.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lifestory.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiLifestoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiLifestoryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiLifestory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lifestory.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lifestory.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiLifestoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiLifestoryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiLifestoryIndexQueryKey() {
  return ['api', '/api/lifestory/'] as const
}

export function getApiLifestoryIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lifestory.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lifestory.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLifestoryIndexQueryKey>
  >({
    queryKey: getApiLifestoryIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.lifestory.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiLifestoryIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lifestory.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.lifestory.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLifestoryIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiLifestoryIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiLifestoryIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lifestory.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.lifestory.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLifestoryIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiLifestoryIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonQueryKey() {
  return ['api', '/api/person'] as const
}

export function getApiPersonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPersonQueryKey>
  >({
    queryKey: getApiPersonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPerson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPerson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonIndexQueryKey() {
  return ['api', '/api/person/'] as const
}

export function getApiPersonIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonIndexQueryKey>
  >({
    queryKey: getApiPersonIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPersonIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonAgeQueryKey() {
  return ['api', '/api/person/age'] as const
}

export function getApiPersonAgeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.age.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.age.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonAgeQueryKey>
  >({
    queryKey: getApiPersonAgeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.age.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPersonAge<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.age.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.age.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonAgeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonAgeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonAge<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.age.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.age.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonAgeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonAgeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonAgeIndexQueryKey() {
  return ['api', '/api/person/age/'] as const
}

export function getApiPersonAgeIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.age.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.age.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonAgeIndexQueryKey>
  >({
    queryKey: getApiPersonAgeIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.age.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonAgeIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.age.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.age.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonAgeIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonAgeIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonAgeIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.age.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.age.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonAgeIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonAgeIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonBloodtypeQueryKey() {
  return ['api', '/api/person/bloodtype'] as const
}

export function getApiPersonBloodtypeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.bloodtype.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.bloodtype.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonBloodtypeQueryKey>
  >({
    queryKey: getApiPersonBloodtypeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.bloodtype.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonBloodtype<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.bloodtype.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.bloodtype.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonBloodtypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonBloodtypeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonBloodtype<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.bloodtype.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.bloodtype.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonBloodtypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonBloodtypeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonBloodtypeIndexQueryKey() {
  return ['api', '/api/person/bloodtype/'] as const
}

export function getApiPersonBloodtypeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.bloodtype.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.bloodtype.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonBloodtypeIndexQueryKey>
  >({
    queryKey: getApiPersonBloodtypeIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.bloodtype.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonBloodtypeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.bloodtype.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.bloodtype.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonBloodtypeIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonBloodtypeIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonBloodtypeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.bloodtype.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.bloodtype.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonBloodtypeIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonBloodtypeIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonCreditcardnumberQueryKey() {
  return ['api', '/api/person/creditcardnumber'] as const
}

export function getApiPersonCreditcardnumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.creditcardnumber.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.creditcardnumber.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonCreditcardnumberQueryKey>
  >({
    queryKey: getApiPersonCreditcardnumberQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.creditcardnumber.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonCreditcardnumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.creditcardnumber.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.person.creditcardnumber.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonCreditcardnumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonCreditcardnumberQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonCreditcardnumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.creditcardnumber.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.person.creditcardnumber.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonCreditcardnumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonCreditcardnumberQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonCreditcardnumberIndexQueryKey() {
  return ['api', '/api/person/creditcardnumber/'] as const
}

export function getApiPersonCreditcardnumberIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.person.creditcardnumber.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.person.creditcardnumber.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonCreditcardnumberIndexQueryKey>
  >({
    queryKey: getApiPersonCreditcardnumberIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.creditcardnumber.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonCreditcardnumberIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.person.creditcardnumber.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.person.creditcardnumber.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonCreditcardnumberIndexQueryKey>
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
      ...getApiPersonCreditcardnumberIndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPersonCreditcardnumberIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.person.creditcardnumber.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.person.creditcardnumber.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonCreditcardnumberIndexQueryKey>
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
      ...getApiPersonCreditcardnumberIndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPersonCreditscoreQueryKey() {
  return ['api', '/api/person/creditscore'] as const
}

export function getApiPersonCreditscoreQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.creditscore.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.creditscore.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonCreditscoreQueryKey>
  >({
    queryKey: getApiPersonCreditscoreQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.creditscore.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonCreditscore<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.creditscore.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.creditscore.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonCreditscoreQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonCreditscoreQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonCreditscore<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.creditscore.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.creditscore.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonCreditscoreQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonCreditscoreQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonCreditscoreIndexQueryKey() {
  return ['api', '/api/person/creditscore/'] as const
}

export function getApiPersonCreditscoreIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.creditscore.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.creditscore.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonCreditscoreIndexQueryKey>
  >({
    queryKey: getApiPersonCreditscoreIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.creditscore.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonCreditscoreIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.creditscore.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.person.creditscore.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonCreditscoreIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonCreditscoreIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonCreditscoreIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.creditscore.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.person.creditscore.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonCreditscoreIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonCreditscoreIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonEmailQueryKey() {
  return ['api', '/api/person/email'] as const
}

export function getApiPersonEmailQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.email.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.email.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonEmailQueryKey>
  >({
    queryKey: getApiPersonEmailQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.email.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPersonEmail<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.email.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.email.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonEmailQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonEmailQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonEmail<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.email.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.email.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonEmailQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonEmailQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonEmailIndexQueryKey() {
  return ['api', '/api/person/email/'] as const
}

export function getApiPersonEmailIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.email.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.email.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonEmailIndexQueryKey>
  >({
    queryKey: getApiPersonEmailIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.email.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonEmailIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.email.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.email.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonEmailIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonEmailIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonEmailIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.email.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.email.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonEmailIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonEmailIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonEyecolorQueryKey() {
  return ['api', '/api/person/eyecolor'] as const
}

export function getApiPersonEyecolorQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.eyecolor.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.eyecolor.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonEyecolorQueryKey>
  >({
    queryKey: getApiPersonEyecolorQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.eyecolor.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonEyecolor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.eyecolor.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.eyecolor.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonEyecolorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonEyecolorQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonEyecolor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.eyecolor.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.eyecolor.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonEyecolorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonEyecolorQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonEyecolorIndexQueryKey() {
  return ['api', '/api/person/eyecolor/'] as const
}

export function getApiPersonEyecolorIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.eyecolor.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.eyecolor.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonEyecolorIndexQueryKey>
  >({
    queryKey: getApiPersonEyecolorIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.eyecolor.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonEyecolorIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.eyecolor.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.eyecolor.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonEyecolorIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonEyecolorIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonEyecolorIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.eyecolor.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.eyecolor.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonEyecolorIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonEyecolorIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonGenderQueryKey() {
  return ['api', '/api/person/gender'] as const
}

export function getApiPersonGenderQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gender.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gender.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonGenderQueryKey>
  >({
    queryKey: getApiPersonGenderQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.gender.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonGender<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gender.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gender.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonGenderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonGenderQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonGender<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gender.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gender.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonGenderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonGenderQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonGenderIndexQueryKey() {
  return ['api', '/api/person/gender/'] as const
}

export function getApiPersonGenderIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gender.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gender.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonGenderIndexQueryKey>
  >({
    queryKey: getApiPersonGenderIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.gender.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonGenderIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gender.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gender.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonGenderIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonGenderIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonGenderIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gender.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gender.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonGenderIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonGenderIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonGpaQueryKey() {
  return ['api', '/api/person/gpa'] as const
}

export function getApiPersonGpaQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gpa.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gpa.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonGpaQueryKey>
  >({
    queryKey: getApiPersonGpaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.gpa.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPersonGpa<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gpa.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gpa.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonGpaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonGpaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonGpa<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gpa.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gpa.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonGpaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonGpaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonGpaIndexQueryKey() {
  return ['api', '/api/person/gpa/'] as const
}

export function getApiPersonGpaIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gpa.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gpa.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonGpaIndexQueryKey>
  >({
    queryKey: getApiPersonGpaIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.gpa.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonGpaIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gpa.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gpa.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonGpaIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonGpaIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonGpaIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gpa.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gpa.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonGpaIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonGpaIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonHaschildrenQueryKey() {
  return ['api', '/api/person/haschildren'] as const
}

export function getApiPersonHaschildrenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.haschildren.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.haschildren.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonHaschildrenQueryKey>
  >({
    queryKey: getApiPersonHaschildrenQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.haschildren.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonHaschildren<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.haschildren.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.haschildren.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonHaschildrenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonHaschildrenQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonHaschildren<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.haschildren.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.haschildren.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonHaschildrenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonHaschildrenQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonHaschildrenIndexQueryKey() {
  return ['api', '/api/person/haschildren/'] as const
}

export function getApiPersonHaschildrenIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.haschildren.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.haschildren.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonHaschildrenIndexQueryKey>
  >({
    queryKey: getApiPersonHaschildrenIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.haschildren.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonHaschildrenIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.haschildren.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.person.haschildren.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonHaschildrenIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonHaschildrenIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonHaschildrenIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.haschildren.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.person.haschildren.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonHaschildrenIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonHaschildrenIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonHasdegreeQueryKey() {
  return ['api', '/api/person/hasdegree'] as const
}

export function getApiPersonHasdegreeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.hasdegree.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.hasdegree.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonHasdegreeQueryKey>
  >({
    queryKey: getApiPersonHasdegreeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.hasdegree.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonHasdegree<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.hasdegree.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.hasdegree.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonHasdegreeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonHasdegreeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonHasdegree<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.hasdegree.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.hasdegree.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonHasdegreeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonHasdegreeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonHasdegreeIndexQueryKey() {
  return ['api', '/api/person/hasdegree/'] as const
}

export function getApiPersonHasdegreeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.hasdegree.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.hasdegree.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonHasdegreeIndexQueryKey>
  >({
    queryKey: getApiPersonHasdegreeIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.hasdegree.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonHasdegreeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.hasdegree.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.hasdegree.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonHasdegreeIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonHasdegreeIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonHasdegreeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.hasdegree.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.hasdegree.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonHasdegreeIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonHasdegreeIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonHeightQueryKey() {
  return ['api', '/api/person/height'] as const
}

export function getApiPersonHeightQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.height.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.height.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonHeightQueryKey>
  >({
    queryKey: getApiPersonHeightQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.height.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonHeight<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.height.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.height.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonHeightQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonHeightQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonHeight<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.height.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.height.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonHeightQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonHeightQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonHeightIndexQueryKey() {
  return ['api', '/api/person/height/'] as const
}

export function getApiPersonHeightIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.height.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.height.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonHeightIndexQueryKey>
  >({
    queryKey: getApiPersonHeightIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.height.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonHeightIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.height.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.height.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonHeightIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonHeightIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonHeightIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.height.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.height.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonHeightIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonHeightIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonIncomeQueryKey() {
  return ['api', '/api/person/income'] as const
}

export function getApiPersonIncomeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.income.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.income.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonIncomeQueryKey>
  >({
    queryKey: getApiPersonIncomeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.income.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonIncome<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.income.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.income.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonIncomeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonIncomeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonIncome<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.income.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.income.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonIncomeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonIncomeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonIncomeIndexQueryKey() {
  return ['api', '/api/person/income/'] as const
}

export function getApiPersonIncomeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.income.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.income.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonIncomeIndexQueryKey>
  >({
    queryKey: getApiPersonIncomeIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.income.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonIncomeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.income.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.income.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonIncomeIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonIncomeIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonIncomeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.income.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.income.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonIncomeIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonIncomeIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonJobQueryKey() {
  return ['api', '/api/person/job'] as const
}

export function getApiPersonJobQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.job.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.job.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonJobQueryKey>
  >({
    queryKey: getApiPersonJobQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.job.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPersonJob<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.job.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.job.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonJobQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonJobQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonJob<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.job.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.job.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonJobQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonJobQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonJobIndexQueryKey() {
  return ['api', '/api/person/job/'] as const
}

export function getApiPersonJobIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.job.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.job.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonJobIndexQueryKey>
  >({
    queryKey: getApiPersonJobIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.job.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonJobIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.job.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.job.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonJobIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonJobIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonJobIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.job.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.job.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonJobIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonJobIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonMaritalstatusQueryKey() {
  return ['api', '/api/person/maritalstatus'] as const
}

export function getApiPersonMaritalstatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.maritalstatus.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.maritalstatus.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonMaritalstatusQueryKey>
  >({
    queryKey: getApiPersonMaritalstatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.maritalstatus.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonMaritalstatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.maritalstatus.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.maritalstatus.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonMaritalstatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonMaritalstatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonMaritalstatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.maritalstatus.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.maritalstatus.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonMaritalstatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonMaritalstatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonMaritalstatusIndexQueryKey() {
  return ['api', '/api/person/maritalstatus/'] as const
}

export function getApiPersonMaritalstatusIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.maritalstatus.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.maritalstatus.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonMaritalstatusIndexQueryKey>
  >({
    queryKey: getApiPersonMaritalstatusIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.maritalstatus.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonMaritalstatusIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.maritalstatus.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.person.maritalstatus.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonMaritalstatusIndexQueryKey>
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
      ...getApiPersonMaritalstatusIndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPersonMaritalstatusIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.maritalstatus.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.person.maritalstatus.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonMaritalstatusIndexQueryKey>
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
      ...getApiPersonMaritalstatusIndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPersonNameQueryKey() {
  return ['api', '/api/person/name'] as const
}

export function getApiPersonNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.name.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.name.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonNameQueryKey>
  >({
    queryKey: getApiPersonNameQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.name.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPersonName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.name.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.name.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonNameQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.name.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.name.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonNameQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonNameIndexQueryKey() {
  return ['api', '/api/person/name/'] as const
}

export function getApiPersonNameIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.name.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.name.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonNameIndexQueryKey>
  >({
    queryKey: getApiPersonNameIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.name.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonNameIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.name.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.name.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonNameIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonNameIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonNameIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.name.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.name.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonNameIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonNameIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonPoliticalleaningQueryKey() {
  return ['api', '/api/person/politicalleaning'] as const
}

export function getApiPersonPoliticalleaningQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.politicalleaning.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.politicalleaning.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonPoliticalleaningQueryKey>
  >({
    queryKey: getApiPersonPoliticalleaningQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.politicalleaning.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonPoliticalleaning<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.politicalleaning.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.person.politicalleaning.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonPoliticalleaningQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonPoliticalleaningQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonPoliticalleaning<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.politicalleaning.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.person.politicalleaning.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonPoliticalleaningQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonPoliticalleaningQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonPoliticalleaningIndexQueryKey() {
  return ['api', '/api/person/politicalleaning/'] as const
}

export function getApiPersonPoliticalleaningIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.person.politicalleaning.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.person.politicalleaning.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonPoliticalleaningIndexQueryKey>
  >({
    queryKey: getApiPersonPoliticalleaningIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.politicalleaning.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonPoliticalleaningIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.person.politicalleaning.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.person.politicalleaning.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonPoliticalleaningIndexQueryKey>
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
      ...getApiPersonPoliticalleaningIndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPersonPoliticalleaningIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.person.politicalleaning.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.person.politicalleaning.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonPoliticalleaningIndexQueryKey>
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
      ...getApiPersonPoliticalleaningIndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPersonReligionQueryKey() {
  return ['api', '/api/person/religion'] as const
}

export function getApiPersonReligionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.religion.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.religion.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonReligionQueryKey>
  >({
    queryKey: getApiPersonReligionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.religion.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonReligion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.religion.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.religion.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonReligionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonReligionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonReligion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.religion.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.religion.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonReligionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonReligionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonReligionIndexQueryKey() {
  return ['api', '/api/person/religion/'] as const
}

export function getApiPersonReligionIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.religion.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.religion.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonReligionIndexQueryKey>
  >({
    queryKey: getApiPersonReligionIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.religion.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonReligionIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.religion.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.religion.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonReligionIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonReligionIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonReligionIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.religion.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.religion.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonReligionIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonReligionIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonUsernameQueryKey() {
  return ['api', '/api/person/username'] as const
}

export function getApiPersonUsernameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.username.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.username.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonUsernameQueryKey>
  >({
    queryKey: getApiPersonUsernameQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.username.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonUsername<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.username.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.username.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonUsernameQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonUsername<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.username.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.username.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonUsernameQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonUsernameIndexQueryKey() {
  return ['api', '/api/person/username/'] as const
}

export function getApiPersonUsernameIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.username.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.username.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonUsernameIndexQueryKey>
  >({
    queryKey: getApiPersonUsernameIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.username.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonUsernameIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.username.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.username.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonUsernameIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonUsernameIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonUsernameIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.username.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.username.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonUsernameIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonUsernameIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonWeightQueryKey() {
  return ['api', '/api/person/weight'] as const
}

export function getApiPersonWeightQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.weight.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.weight.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonWeightQueryKey>
  >({
    queryKey: getApiPersonWeightQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.weight.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonWeight<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.weight.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.weight.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonWeightQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonWeightQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonWeight<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.weight.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.weight.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonWeightQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonWeightQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonWeightIndexQueryKey() {
  return ['api', '/api/person/weight/'] as const
}

export function getApiPersonWeightIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.weight.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.weight.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonWeightIndexQueryKey>
  >({
    queryKey: getApiPersonWeightIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person.weight.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonWeightIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.weight.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.weight.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonWeightIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonWeightIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonWeightIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.weight.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.person.weight.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonWeightIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonWeightIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonNumberQueryKey(
  args: InferRequestType<(typeof client.api.person)[':number']['$get']>,
) {
  return ['api', '/api/person/:number', args] as const
}

export function getApiPersonNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.person)[':number']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.person)[':number']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.person)[':number']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonNumberQueryKey>
  >({
    queryKey: getApiPersonNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person[':number'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPersonNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.person)[':number']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.person)[':number']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.person)[':number']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonNumberQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.person)[':number']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.person)[':number']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.person)[':number']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonNumberQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPersonNumberIndexQueryKey(
  args: InferRequestType<(typeof client.api.person)[':number']['index']['$get']>,
) {
  return ['api', '/api/person/:number/', args] as const
}

export function getApiPersonNumberIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.person)[':number']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.person)[':number']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.person)[':number']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonNumberIndexQueryKey>
  >({
    queryKey: getApiPersonNumberIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.person[':number'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPersonNumberIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.person)[':number']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.person)[':number']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.person)[':number']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonNumberIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPersonNumberIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPersonNumberIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.person)[':number']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.person)[':number']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.person)[':number']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPersonNumberIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPersonNumberIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
