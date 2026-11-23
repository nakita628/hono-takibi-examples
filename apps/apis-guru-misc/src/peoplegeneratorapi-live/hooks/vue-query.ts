import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiAddressQueryKey() {
  return ['api', '/api/address'] as const
}

export function getApiAddressQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiAddressQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.address.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiAddress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.address.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.address.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.address.$get>>>>
          >,
          ReturnType<typeof getApiAddressQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.address.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiAddressQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.address.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAddressIndexQueryKey() {
  return ['api', '/api/address/'] as const
}

export function getApiAddressIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiAddressIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.address.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAddressIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.address.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.address.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.address.index.$get>>>
            >
          >,
          ReturnType<typeof getApiAddressIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.address.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAddressIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiAddressIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.address.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLifestoryQueryKey() {
  return ['api', '/api/lifestory'] as const
}

export function getApiLifestoryQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiLifestoryQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.lifestory.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiLifestory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lifestory.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lifestory.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lifestory.$get>>>>
          >,
          ReturnType<typeof getApiLifestoryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lifestory.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLifestoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiLifestoryQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.lifestory.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLifestoryIndexQueryKey() {
  return ['api', '/api/lifestory/'] as const
}

export function getApiLifestoryIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiLifestoryIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.lifestory.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLifestoryIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lifestory.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.lifestory.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.lifestory.index.$get>>>
            >
          >,
          ReturnType<typeof getApiLifestoryIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lifestory.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLifestoryIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiLifestoryIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.lifestory.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonQueryKey() {
  return ['api', '/api/person'] as const
}

export function getApiPersonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiPerson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.$get>>>>
          >,
          ReturnType<typeof getApiPersonQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPersonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonIndexQueryKey() {
  return ['api', '/api/person/'] as const
}

export function getApiPersonIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiPersonIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.index.$get>>>
            >
          >,
          ReturnType<typeof getApiPersonIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonAgeQueryKey() {
  return ['api', '/api/person/age'] as const
}

export function getApiPersonAgeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonAgeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.age.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiPersonAge<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.age.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.age.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.age.$get>>>>
          >,
          ReturnType<typeof getApiPersonAgeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.age.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonAgeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonAgeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.age.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonAgeIndexQueryKey() {
  return ['api', '/api/person/age/'] as const
}

export function getApiPersonAgeIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonAgeIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.age.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPersonAgeIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.age.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.age.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.age.index.$get>>>
            >
          >,
          ReturnType<typeof getApiPersonAgeIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.age.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonAgeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonAgeIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.age.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonBloodtypeQueryKey() {
  return ['api', '/api/person/bloodtype'] as const
}

export function getApiPersonBloodtypeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonBloodtypeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.bloodtype.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPersonBloodtype<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.bloodtype.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.bloodtype.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.bloodtype.$get>>>
            >
          >,
          ReturnType<typeof getApiPersonBloodtypeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.bloodtype.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonBloodtypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonBloodtypeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.bloodtype.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonBloodtypeIndexQueryKey() {
  return ['api', '/api/person/bloodtype/'] as const
}

export function getApiPersonBloodtypeIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonBloodtypeIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.bloodtype.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.person.bloodtype.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.person.bloodtype.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiPersonBloodtypeIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.bloodtype.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonBloodtypeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonBloodtypeIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.bloodtype.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonCreditcardnumberQueryKey() {
  return ['api', '/api/person/creditcardnumber'] as const
}

export function getApiPersonCreditcardnumberQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonCreditcardnumberQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.creditcardnumber.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.person.creditcardnumber.$get>>
              >
            >
          >,
          ReturnType<typeof getApiPersonCreditcardnumberQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.creditcardnumber.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonCreditcardnumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonCreditcardnumberQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.creditcardnumber.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonCreditcardnumberIndexQueryKey() {
  return ['api', '/api/person/creditcardnumber/'] as const
}

export function getApiPersonCreditcardnumberIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonCreditcardnumberIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.creditcardnumber.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.person.creditcardnumber.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiPersonCreditcardnumberIndexQueryKey>
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
          Awaited<ReturnType<typeof client.api.person.creditcardnumber.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonCreditcardnumberIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonCreditcardnumberIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.creditcardnumber.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonCreditscoreQueryKey() {
  return ['api', '/api/person/creditscore'] as const
}

export function getApiPersonCreditscoreQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonCreditscoreQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.creditscore.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPersonCreditscore<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.creditscore.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.creditscore.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.creditscore.$get>>>
            >
          >,
          ReturnType<typeof getApiPersonCreditscoreQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.creditscore.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonCreditscoreQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonCreditscoreQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.creditscore.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonCreditscoreIndexQueryKey() {
  return ['api', '/api/person/creditscore/'] as const
}

export function getApiPersonCreditscoreIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonCreditscoreIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.creditscore.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.person.creditscore.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiPersonCreditscoreIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.creditscore.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonCreditscoreIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonCreditscoreIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.creditscore.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonEmailQueryKey() {
  return ['api', '/api/person/email'] as const
}

export function getApiPersonEmailQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonEmailQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.email.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiPersonEmail<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.email.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.email.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.email.$get>>>
            >
          >,
          ReturnType<typeof getApiPersonEmailQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.email.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonEmailQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.email.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonEmailIndexQueryKey() {
  return ['api', '/api/person/email/'] as const
}

export function getApiPersonEmailIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonEmailIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.email.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPersonEmailIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.email.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.email.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.email.index.$get>>>
            >
          >,
          ReturnType<typeof getApiPersonEmailIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.email.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonEmailIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonEmailIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.email.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonEyecolorQueryKey() {
  return ['api', '/api/person/eyecolor'] as const
}

export function getApiPersonEyecolorQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonEyecolorQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.eyecolor.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPersonEyecolor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.eyecolor.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.eyecolor.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.eyecolor.$get>>>
            >
          >,
          ReturnType<typeof getApiPersonEyecolorQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.eyecolor.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonEyecolorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonEyecolorQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.eyecolor.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonEyecolorIndexQueryKey() {
  return ['api', '/api/person/eyecolor/'] as const
}

export function getApiPersonEyecolorIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonEyecolorIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.eyecolor.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.person.eyecolor.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.person.eyecolor.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiPersonEyecolorIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.eyecolor.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonEyecolorIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonEyecolorIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.eyecolor.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonGenderQueryKey() {
  return ['api', '/api/person/gender'] as const
}

export function getApiPersonGenderQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonGenderQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.gender.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPersonGender<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gender.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gender.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gender.$get>>>
            >
          >,
          ReturnType<typeof getApiPersonGenderQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gender.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonGenderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonGenderQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.gender.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonGenderIndexQueryKey() {
  return ['api', '/api/person/gender/'] as const
}

export function getApiPersonGenderIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonGenderIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.gender.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gender.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gender.index.$get>>>
            >
          >,
          ReturnType<typeof getApiPersonGenderIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gender.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonGenderIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonGenderIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.gender.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonGpaQueryKey() {
  return ['api', '/api/person/gpa'] as const
}

export function getApiPersonGpaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonGpaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.gpa.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiPersonGpa<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gpa.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gpa.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gpa.$get>>>>
          >,
          ReturnType<typeof getApiPersonGpaQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gpa.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonGpaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonGpaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.gpa.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonGpaIndexQueryKey() {
  return ['api', '/api/person/gpa/'] as const
}

export function getApiPersonGpaIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonGpaIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.gpa.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPersonGpaIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gpa.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gpa.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gpa.index.$get>>>
            >
          >,
          ReturnType<typeof getApiPersonGpaIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gpa.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonGpaIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonGpaIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.gpa.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonHaschildrenQueryKey() {
  return ['api', '/api/person/haschildren'] as const
}

export function getApiPersonHaschildrenQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonHaschildrenQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.haschildren.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPersonHaschildren<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.haschildren.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.haschildren.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.haschildren.$get>>>
            >
          >,
          ReturnType<typeof getApiPersonHaschildrenQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.haschildren.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonHaschildrenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonHaschildrenQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.haschildren.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonHaschildrenIndexQueryKey() {
  return ['api', '/api/person/haschildren/'] as const
}

export function getApiPersonHaschildrenIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonHaschildrenIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.haschildren.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.person.haschildren.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiPersonHaschildrenIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.haschildren.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonHaschildrenIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonHaschildrenIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.haschildren.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonHasdegreeQueryKey() {
  return ['api', '/api/person/hasdegree'] as const
}

export function getApiPersonHasdegreeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonHasdegreeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.hasdegree.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPersonHasdegree<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.hasdegree.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.hasdegree.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.hasdegree.$get>>>
            >
          >,
          ReturnType<typeof getApiPersonHasdegreeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.hasdegree.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonHasdegreeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonHasdegreeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.hasdegree.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonHasdegreeIndexQueryKey() {
  return ['api', '/api/person/hasdegree/'] as const
}

export function getApiPersonHasdegreeIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonHasdegreeIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.hasdegree.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.person.hasdegree.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.person.hasdegree.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiPersonHasdegreeIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.hasdegree.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonHasdegreeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonHasdegreeIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.hasdegree.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonHeightQueryKey() {
  return ['api', '/api/person/height'] as const
}

export function getApiPersonHeightQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonHeightQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.height.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPersonHeight<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.height.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.height.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.height.$get>>>
            >
          >,
          ReturnType<typeof getApiPersonHeightQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.height.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonHeightQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonHeightQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.height.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonHeightIndexQueryKey() {
  return ['api', '/api/person/height/'] as const
}

export function getApiPersonHeightIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonHeightIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.height.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.height.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.height.index.$get>>>
            >
          >,
          ReturnType<typeof getApiPersonHeightIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.height.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonHeightIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonHeightIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.height.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonIncomeQueryKey() {
  return ['api', '/api/person/income'] as const
}

export function getApiPersonIncomeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonIncomeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.income.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPersonIncome<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.income.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.income.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.income.$get>>>
            >
          >,
          ReturnType<typeof getApiPersonIncomeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.income.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonIncomeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonIncomeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.income.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonIncomeIndexQueryKey() {
  return ['api', '/api/person/income/'] as const
}

export function getApiPersonIncomeIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonIncomeIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.income.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.income.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.income.index.$get>>>
            >
          >,
          ReturnType<typeof getApiPersonIncomeIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.income.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonIncomeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonIncomeIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.income.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonJobQueryKey() {
  return ['api', '/api/person/job'] as const
}

export function getApiPersonJobQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonJobQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.job.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiPersonJob<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.job.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.job.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.job.$get>>>>
          >,
          ReturnType<typeof getApiPersonJobQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.job.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonJobQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonJobQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.job.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonJobIndexQueryKey() {
  return ['api', '/api/person/job/'] as const
}

export function getApiPersonJobIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonJobIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.job.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPersonJobIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.job.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.job.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.job.index.$get>>>
            >
          >,
          ReturnType<typeof getApiPersonJobIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.job.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonJobIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonJobIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.job.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonMaritalstatusQueryKey() {
  return ['api', '/api/person/maritalstatus'] as const
}

export function getApiPersonMaritalstatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonMaritalstatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.maritalstatus.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.maritalstatus.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.maritalstatus.$get>>>
            >
          >,
          ReturnType<typeof getApiPersonMaritalstatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.maritalstatus.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonMaritalstatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonMaritalstatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.maritalstatus.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonMaritalstatusIndexQueryKey() {
  return ['api', '/api/person/maritalstatus/'] as const
}

export function getApiPersonMaritalstatusIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonMaritalstatusIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.maritalstatus.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.person.maritalstatus.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiPersonMaritalstatusIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.maritalstatus.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonMaritalstatusIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonMaritalstatusIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.maritalstatus.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonNameQueryKey() {
  return ['api', '/api/person/name'] as const
}

export function getApiPersonNameQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonNameQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.name.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiPersonName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.name.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.name.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.name.$get>>>
            >
          >,
          ReturnType<typeof getApiPersonNameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.name.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonNameQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.name.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonNameIndexQueryKey() {
  return ['api', '/api/person/name/'] as const
}

export function getApiPersonNameIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonNameIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.name.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPersonNameIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.name.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.name.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.name.index.$get>>>
            >
          >,
          ReturnType<typeof getApiPersonNameIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.name.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonNameIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonNameIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.name.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonPoliticalleaningQueryKey() {
  return ['api', '/api/person/politicalleaning'] as const
}

export function getApiPersonPoliticalleaningQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonPoliticalleaningQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.politicalleaning.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.person.politicalleaning.$get>>
              >
            >
          >,
          ReturnType<typeof getApiPersonPoliticalleaningQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.politicalleaning.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonPoliticalleaningQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonPoliticalleaningQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.politicalleaning.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonPoliticalleaningIndexQueryKey() {
  return ['api', '/api/person/politicalleaning/'] as const
}

export function getApiPersonPoliticalleaningIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonPoliticalleaningIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.politicalleaning.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.person.politicalleaning.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiPersonPoliticalleaningIndexQueryKey>
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
          Awaited<ReturnType<typeof client.api.person.politicalleaning.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonPoliticalleaningIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonPoliticalleaningIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.politicalleaning.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonReligionQueryKey() {
  return ['api', '/api/person/religion'] as const
}

export function getApiPersonReligionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonReligionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.religion.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPersonReligion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.religion.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.religion.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.religion.$get>>>
            >
          >,
          ReturnType<typeof getApiPersonReligionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.religion.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonReligionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonReligionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.religion.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonReligionIndexQueryKey() {
  return ['api', '/api/person/religion/'] as const
}

export function getApiPersonReligionIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonReligionIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.religion.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.person.religion.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.person.religion.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiPersonReligionIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.religion.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonReligionIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonReligionIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.religion.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonUsernameQueryKey() {
  return ['api', '/api/person/username'] as const
}

export function getApiPersonUsernameQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonUsernameQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.username.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPersonUsername<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.username.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.username.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.username.$get>>>
            >
          >,
          ReturnType<typeof getApiPersonUsernameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.username.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonUsernameQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.username.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonUsernameIndexQueryKey() {
  return ['api', '/api/person/username/'] as const
}

export function getApiPersonUsernameIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonUsernameIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.username.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.person.username.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.person.username.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiPersonUsernameIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.username.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonUsernameIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonUsernameIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.username.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonWeightQueryKey() {
  return ['api', '/api/person/weight'] as const
}

export function getApiPersonWeightQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonWeightQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.weight.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPersonWeight<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.weight.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.weight.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.weight.$get>>>
            >
          >,
          ReturnType<typeof getApiPersonWeightQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.weight.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonWeightQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonWeightQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.weight.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonWeightIndexQueryKey() {
  return ['api', '/api/person/weight/'] as const
}

export function getApiPersonWeightIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPersonWeightIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person.weight.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.weight.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.person.weight.index.$get>>>
            >
          >,
          ReturnType<typeof getApiPersonWeightIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.person.weight.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonWeightIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPersonWeightIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person.weight.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonNumberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.person)[':number']['$get']>>,
) {
  return ['api', '/api/person/:number', toValue(args)] as const
}

export function getApiPersonNumberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.person)[':number']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPersonNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person[':number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPersonNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.person)[':number']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.person)[':number']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.person)[':number']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.person)[':number']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPersonNumberQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.person)[':number']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPersonNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person[':number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPersonNumberIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.person)[':number']['index']['$get']>>,
) {
  return ['api', '/api/person/:number/', toValue(args)] as const
}

export function getApiPersonNumberIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.person)[':number']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPersonNumberIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.person[':number'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.person)[':number']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.person)[':number']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPersonNumberIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.person)[':number']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPersonNumberIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPersonNumberIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.person[':number'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
