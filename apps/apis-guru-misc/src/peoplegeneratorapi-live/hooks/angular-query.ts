import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectApiAddress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.address.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAddressQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiAddressIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.address.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAddressIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiLifestory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lifestory.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLifestoryQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiLifestoryIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lifestory.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLifestoryIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPerson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonAge<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.age.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonAgeQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonAgeIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.age.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonAgeIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonBloodtype<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.bloodtype.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonBloodtypeQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonBloodtypeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.bloodtype.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonBloodtypeIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonCreditcardnumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.creditcardnumber.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonCreditcardnumberQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonCreditcardnumberIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.person.creditcardnumber.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiPersonCreditcardnumberIndexQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectApiPersonCreditscore<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.creditscore.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonCreditscoreQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonCreditscoreIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.creditscore.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonCreditscoreIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonEmail<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.email.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonEmailQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonEmailIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.email.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonEmailIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonEyecolor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.eyecolor.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonEyecolorQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonEyecolorIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.eyecolor.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonEyecolorIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonGender<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gender.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonGenderQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonGenderIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gender.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonGenderIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonGpa<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gpa.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonGpaQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonGpaIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.gpa.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonGpaIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonHaschildren<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.haschildren.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonHaschildrenQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonHaschildrenIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.haschildren.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonHaschildrenIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonHasdegree<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.hasdegree.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonHasdegreeQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonHasdegreeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.hasdegree.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonHasdegreeIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonHeight<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.height.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonHeightQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonHeightIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.height.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonHeightIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonIncome<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.income.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonIncomeQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonIncomeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.income.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonIncomeIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonJob<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.job.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonJobQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonJobIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.job.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonJobIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonMaritalstatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.maritalstatus.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonMaritalstatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonMaritalstatusIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.maritalstatus.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonMaritalstatusIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.name.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonNameQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonNameIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.name.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonNameIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonPoliticalleaning<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.politicalleaning.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonPoliticalleaningQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonPoliticalleaningIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.person.politicalleaning.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiPersonPoliticalleaningIndexQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectApiPersonReligion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.religion.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonReligionQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonReligionIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.religion.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonReligionIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonUsername<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.username.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonUsernameQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonUsernameIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.username.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonUsernameIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonWeight<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.person.weight.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonWeightQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonWeightIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.person.weight.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonWeightIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.person)[':number']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.person)[':number']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPersonNumberQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectApiPersonNumberIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.person)[':number']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.person)[':number']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiPersonNumberIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
