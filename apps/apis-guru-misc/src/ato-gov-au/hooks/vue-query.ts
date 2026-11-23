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

export function getBusinessNamesKey() {
  return ['business-names'] as const
}

export function getClassificationsKey() {
  return ['classifications'] as const
}

export function getIndividualsKey() {
  return ['individuals'] as const
}

export function getLicensesKey() {
  return ['licenses'] as const
}

export function getOrganisationsKey() {
  return ['organisations'] as const
}

export function getBusinessNamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['business-names']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['business-names', '/business-names', keyArgs] as const
}

export function getBusinessNamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['business-names']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBusinessNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['business-names'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBusinessNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['business-names']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['business-names']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['business-names']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['business-names']['$get']>>>
            >
          >,
          ReturnType<typeof getBusinessNamesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['business-names']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBusinessNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['business-names'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClassificationsAddressTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifications)['address-types']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['classifications', '/classifications/address-types', keyArgs] as const
}

export function getClassificationsAddressTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifications)['address-types']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClassificationsAddressTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.classifications['address-types'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClassificationsAddressTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifications)['address-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifications)['address-types']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classifications)['address-types']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classifications)['address-types']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClassificationsAddressTypesQueryKey>
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
          Awaited<ReturnType<(typeof client.classifications)['address-types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsAddressTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClassificationsAddressTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.classifications['address-types'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClassificationsBusinessNameLifecycleStatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifications)['business-name-lifecycle-states']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['classifications', '/classifications/business-name-lifecycle-states', keyArgs] as const
}

export function getClassificationsBusinessNameLifecycleStatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifications)['business-name-lifecycle-states']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClassificationsBusinessNameLifecycleStatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.classifications['business-name-lifecycle-states'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClassificationsBusinessNameLifecycleStates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.classifications)['business-name-lifecycle-states']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifications)['business-name-lifecycle-states']['$get']>
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
                    (typeof client.classifications)['business-name-lifecycle-states']['$get']
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
                    (typeof client.classifications)['business-name-lifecycle-states']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getClassificationsBusinessNameLifecycleStatesQueryKey>
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
            ReturnType<(typeof client.classifications)['business-name-lifecycle-states']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsBusinessNameLifecycleStatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClassificationsBusinessNameLifecycleStatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.classifications['business-name-lifecycle-states'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClassificationsElectronicAddressTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifications)['electronic-address-types']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['classifications', '/classifications/electronic-address-types', keyArgs] as const
}

export function getClassificationsElectronicAddressTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifications)['electronic-address-types']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClassificationsElectronicAddressTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.classifications['electronic-address-types'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClassificationsElectronicAddressTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifications)['electronic-address-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifications)['electronic-address-types']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.classifications)['electronic-address-types']['$get']>
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
                  ReturnType<(typeof client.classifications)['electronic-address-types']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getClassificationsElectronicAddressTypesQueryKey>
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
          Awaited<ReturnType<(typeof client.classifications)['electronic-address-types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsElectronicAddressTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClassificationsElectronicAddressTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.classifications['electronic-address-types'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClassificationsGendersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.classifications.genders.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['classifications', '/classifications/genders', keyArgs] as const
}

export function getClassificationsGendersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.classifications.genders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClassificationsGendersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.classifications.genders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClassificationsGenders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.classifications.genders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.classifications.genders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.classifications.genders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.classifications.genders.$get>>>
            >
          >,
          ReturnType<typeof getClassificationsGendersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.classifications.genders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsGendersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClassificationsGendersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.classifications.genders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClassificationsLegalEntityTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifications)['legal-entity-types']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['classifications', '/classifications/legal-entity-types', keyArgs] as const
}

export function getClassificationsLegalEntityTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifications)['legal-entity-types']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClassificationsLegalEntityTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.classifications['legal-entity-types'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClassificationsLegalEntityTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifications)['legal-entity-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifications)['legal-entity-types']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classifications)['legal-entity-types']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classifications)['legal-entity-types']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClassificationsLegalEntityTypesQueryKey>
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
          Awaited<ReturnType<(typeof client.classifications)['legal-entity-types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsLegalEntityTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClassificationsLegalEntityTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.classifications['legal-entity-types'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClassificationsLicenseLifecycleStatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifications)['license-lifecycle-states']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['classifications', '/classifications/license-lifecycle-states', keyArgs] as const
}

export function getClassificationsLicenseLifecycleStatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifications)['license-lifecycle-states']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClassificationsLicenseLifecycleStatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.classifications['license-lifecycle-states'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClassificationsLicenseLifecycleStates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifications)['license-lifecycle-states']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifications)['license-lifecycle-states']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.classifications)['license-lifecycle-states']['$get']>
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
                  ReturnType<(typeof client.classifications)['license-lifecycle-states']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getClassificationsLicenseLifecycleStatesQueryKey>
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
          Awaited<ReturnType<(typeof client.classifications)['license-lifecycle-states']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsLicenseLifecycleStatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClassificationsLicenseLifecycleStatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.classifications['license-lifecycle-states'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClassificationsLicenseTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifications)['license-types']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['classifications', '/classifications/license-types', keyArgs] as const
}

export function getClassificationsLicenseTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifications)['license-types']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClassificationsLicenseTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.classifications['license-types'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClassificationsLicenseTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifications)['license-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifications)['license-types']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classifications)['license-types']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classifications)['license-types']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClassificationsLicenseTypesQueryKey>
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
          Awaited<ReturnType<(typeof client.classifications)['license-types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsLicenseTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClassificationsLicenseTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.classifications['license-types'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClassificationsNameDirectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifications)['name-directions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['classifications', '/classifications/name-directions', keyArgs] as const
}

export function getClassificationsNameDirectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifications)['name-directions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClassificationsNameDirectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.classifications['name-directions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClassificationsNameDirections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifications)['name-directions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifications)['name-directions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classifications)['name-directions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classifications)['name-directions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClassificationsNameDirectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.classifications)['name-directions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsNameDirectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClassificationsNameDirectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.classifications['name-directions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClassificationsNamePrefixesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifications)['name-prefixes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['classifications', '/classifications/name-prefixes', keyArgs] as const
}

export function getClassificationsNamePrefixesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifications)['name-prefixes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClassificationsNamePrefixesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.classifications['name-prefixes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClassificationsNamePrefixes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifications)['name-prefixes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifications)['name-prefixes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classifications)['name-prefixes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classifications)['name-prefixes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClassificationsNamePrefixesQueryKey>
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
          Awaited<ReturnType<(typeof client.classifications)['name-prefixes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsNamePrefixesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClassificationsNamePrefixesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.classifications['name-prefixes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClassificationsNameTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.classifications)['name-types']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['classifications', '/classifications/name-types', keyArgs] as const
}

export function getClassificationsNameTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.classifications)['name-types']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClassificationsNameTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.classifications['name-types'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClassificationsNameTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifications)['name-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.classifications)['name-types']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classifications)['name-types']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classifications)['name-types']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClassificationsNameTypesQueryKey>
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
          Awaited<ReturnType<(typeof client.classifications)['name-types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsNameTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClassificationsNameTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.classifications['name-types'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClassificationsRegisteredIdentifierTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifications)['registered-identifier-types']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['classifications', '/classifications/registered-identifier-types', keyArgs] as const
}

export function getClassificationsRegisteredIdentifierTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifications)['registered-identifier-types']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClassificationsRegisteredIdentifierTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.classifications['registered-identifier-types'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClassificationsRegisteredIdentifierTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifications)['registered-identifier-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifications)['registered-identifier-types']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.classifications)['registered-identifier-types']['$get']>
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
                  ReturnType<(typeof client.classifications)['registered-identifier-types']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getClassificationsRegisteredIdentifierTypesQueryKey>
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
            ReturnType<(typeof client.classifications)['registered-identifier-types']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsRegisteredIdentifierTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClassificationsRegisteredIdentifierTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.classifications['registered-identifier-types'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClassificationsRolesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.classifications.roles.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['classifications', '/classifications/roles', keyArgs] as const
}

export function getClassificationsRolesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.classifications.roles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClassificationsRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.classifications.roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClassificationsRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classifications.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.classifications.roles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.classifications.roles.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.classifications.roles.$get>>>
            >
          >,
          ReturnType<typeof getClassificationsRolesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.classifications.roles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationsRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClassificationsRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.classifications.roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIndividualsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.individuals.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['individuals', '/individuals', keyArgs] as const
}

export function getIndividualsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.individuals.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndividualsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.individuals.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIndividuals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.individuals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.individuals.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.individuals.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.individuals.$get>>>>
          >,
          ReturnType<typeof getIndividualsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.individuals.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIndividualsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndividualsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.individuals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIndividualsMutationKey() {
  return ['individuals', '/individuals', 'POST'] as const
}

export function getPostIndividualsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.individuals.$post>>>>>,
    TError,
    InferRequestType<typeof client.individuals.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIndividualsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.individuals.$post>) {
      return parseResponse(client.individuals.$post(args, options))
    },
  })
}

export function usePostIndividuals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.individuals.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.individuals.$post>,
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
  const mutationDefaults = getPostIndividualsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIndividualsPartyIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.individuals)[':partyId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['individuals', '/individuals/:partyId', keyArgs] as const
}

export function getIndividualsPartyIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.individuals)[':partyId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndividualsPartyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.individuals[':partyId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndividualsPartyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.individuals)[':partyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.individuals)[':partyId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.individuals)[':partyId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.individuals)[':partyId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIndividualsPartyIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.individuals)[':partyId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndividualsPartyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndividualsPartyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.individuals[':partyId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutIndividualsPartyIdMutationKey() {
  return ['individuals', '/individuals/:partyId', 'PUT'] as const
}

export function getPutIndividualsPartyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.individuals)[':partyId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.individuals)[':partyId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIndividualsPartyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.individuals)[':partyId']['$put']>) {
      return parseResponse(client.individuals[':partyId'].$put(args, options))
    },
  })
}

export function usePutIndividualsPartyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.individuals)[':partyId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.individuals)[':partyId']['$put']>,
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
  const mutationDefaults = getPutIndividualsPartyIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteIndividualsPartyIdMutationKey() {
  return ['individuals', '/individuals/:partyId', 'DELETE'] as const
}

export function getDeleteIndividualsPartyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.individuals)[':partyId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.individuals)[':partyId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndividualsPartyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.individuals)[':partyId']['$delete']>) {
      return parseResponse(client.individuals[':partyId'].$delete(args, options))
    },
  })
}

export function useDeleteIndividualsPartyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.individuals)[':partyId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.individuals)[':partyId']['$delete']>,
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
  const mutationDefaults = getDeleteIndividualsPartyIdMutationOptions<TError, TOnMutateResult>(
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

export function getIndividualsPartyIdAddressesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.individuals)[':partyId']['addresses']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['individuals', '/individuals/:partyId/addresses', keyArgs] as const
}

export function getIndividualsPartyIdAddressesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.individuals)[':partyId']['addresses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndividualsPartyIdAddressesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.individuals[':partyId'].addresses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndividualsPartyIdAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.individuals)[':partyId']['addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.individuals)[':partyId']['addresses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.individuals)[':partyId']['addresses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.individuals)[':partyId']['addresses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIndividualsPartyIdAddressesQueryKey>
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
          Awaited<ReturnType<(typeof client.individuals)[':partyId']['addresses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndividualsPartyIdAddressesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndividualsPartyIdAddressesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.individuals[':partyId'].addresses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIndividualsPartyIdAddressesMutationKey() {
  return ['individuals', '/individuals/:partyId/addresses', 'POST'] as const
}

export function getPostIndividualsPartyIdAddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.individuals)[':partyId']['addresses']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.individuals)[':partyId']['addresses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndividualsPartyIdAddressesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.individuals)[':partyId']['addresses']['$post']>,
    ) {
      return parseResponse(client.individuals[':partyId'].addresses.$post(args, options))
    },
  })
}

export function usePostIndividualsPartyIdAddresses<
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
                Awaited<ReturnType<(typeof client.individuals)[':partyId']['addresses']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.individuals)[':partyId']['addresses']['$post']>,
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
  const mutationDefaults = getPostIndividualsPartyIdAddressesMutationOptions<
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

export function getIndividualsPartyIdAddressesAddressIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.individuals)[':partyId']['addresses'][':addressId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['individuals', '/individuals/:partyId/addresses/:addressId', keyArgs] as const
}

export function getIndividualsPartyIdAddressesAddressIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.individuals)[':partyId']['addresses'][':addressId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndividualsPartyIdAddressesAddressIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.individuals[':partyId'].addresses[':addressId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndividualsPartyIdAddressesAddressId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.individuals)[':partyId']['addresses'][':addressId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.individuals)[':partyId']['addresses'][':addressId']['$get']>
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
                    (typeof client.individuals)[':partyId']['addresses'][':addressId']['$get']
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
                    (typeof client.individuals)[':partyId']['addresses'][':addressId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIndividualsPartyIdAddressesAddressIdQueryKey>
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
            ReturnType<(typeof client.individuals)[':partyId']['addresses'][':addressId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndividualsPartyIdAddressesAddressIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndividualsPartyIdAddressesAddressIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.individuals[':partyId'].addresses[':addressId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutIndividualsPartyIdAddressesAddressIdMutationKey() {
  return ['individuals', '/individuals/:partyId/addresses/:addressId', 'PUT'] as const
}

export function getPutIndividualsPartyIdAddressesAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.individuals)[':partyId']['addresses'][':addressId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.individuals)[':partyId']['addresses'][':addressId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIndividualsPartyIdAddressesAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.individuals)[':partyId']['addresses'][':addressId']['$put']
      >,
    ) {
      return parseResponse(
        client.individuals[':partyId'].addresses[':addressId'].$put(args, options),
      )
    },
  })
}

export function usePutIndividualsPartyIdAddressesAddressId<
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
                    (typeof client.individuals)[':partyId']['addresses'][':addressId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.individuals)[':partyId']['addresses'][':addressId']['$put']
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
  const mutationDefaults = getPutIndividualsPartyIdAddressesAddressIdMutationOptions<
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

export function getDeleteIndividualsPartyIdAddressesAddressIdMutationKey() {
  return ['individuals', '/individuals/:partyId/addresses/:addressId', 'DELETE'] as const
}

export function getDeleteIndividualsPartyIdAddressesAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.individuals)[':partyId']['addresses'][':addressId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.individuals)[':partyId']['addresses'][':addressId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndividualsPartyIdAddressesAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.individuals)[':partyId']['addresses'][':addressId']['$delete']
      >,
    ) {
      return parseResponse(
        client.individuals[':partyId'].addresses[':addressId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteIndividualsPartyIdAddressesAddressId<
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
                      (typeof client.individuals)[':partyId']['addresses'][':addressId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.individuals)[':partyId']['addresses'][':addressId']['$delete']
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
  const mutationDefaults = getDeleteIndividualsPartyIdAddressesAddressIdMutationOptions<
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

export function getIndividualsPartyIdBusinessNamesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.individuals)[':partyId']['business-names']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['individuals', '/individuals/:partyId/business-names', keyArgs] as const
}

export function getIndividualsPartyIdBusinessNamesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.individuals)[':partyId']['business-names']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndividualsPartyIdBusinessNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.individuals[':partyId']['business-names'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndividualsPartyIdBusinessNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.individuals)[':partyId']['business-names']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.individuals)[':partyId']['business-names']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.individuals)[':partyId']['business-names']['$get']>
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
                  ReturnType<(typeof client.individuals)[':partyId']['business-names']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getIndividualsPartyIdBusinessNamesQueryKey>
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
          Awaited<ReturnType<(typeof client.individuals)[':partyId']['business-names']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndividualsPartyIdBusinessNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndividualsPartyIdBusinessNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.individuals[':partyId']['business-names'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIndividualsPartyIdBusinessNamesMutationKey() {
  return ['individuals', '/individuals/:partyId/business-names', 'POST'] as const
}

export function getPostIndividualsPartyIdBusinessNamesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.individuals)[':partyId']['business-names']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.individuals)[':partyId']['business-names']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndividualsPartyIdBusinessNamesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.individuals)[':partyId']['business-names']['$post']>,
    ) {
      return parseResponse(client.individuals[':partyId']['business-names'].$post(args, options))
    },
  })
}

export function usePostIndividualsPartyIdBusinessNames<
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
                  ReturnType<(typeof client.individuals)[':partyId']['business-names']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.individuals)[':partyId']['business-names']['$post']>,
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
  const mutationDefaults = getPostIndividualsPartyIdBusinessNamesMutationOptions<
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

export function getIndividualsPartyIdBusinessNamesProductIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.individuals)[':partyId']['business-names'][':productId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['individuals', '/individuals/:partyId/business-names/:productId', keyArgs] as const
}

export function getIndividualsPartyIdBusinessNamesProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.individuals)[':partyId']['business-names'][':productId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndividualsPartyIdBusinessNamesProductIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.individuals[':partyId']['business-names'][':productId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndividualsPartyIdBusinessNamesProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.individuals)[':partyId']['business-names'][':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.individuals)[':partyId']['business-names'][':productId']['$get']
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
                    (typeof client.individuals)[':partyId']['business-names'][':productId']['$get']
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
                    (typeof client.individuals)[':partyId']['business-names'][':productId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIndividualsPartyIdBusinessNamesProductIdQueryKey>
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
              (typeof client.individuals)[':partyId']['business-names'][':productId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndividualsPartyIdBusinessNamesProductIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndividualsPartyIdBusinessNamesProductIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.individuals[':partyId']['business-names'][':productId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutIndividualsPartyIdBusinessNamesProductIdMutationKey() {
  return ['individuals', '/individuals/:partyId/business-names/:productId', 'PUT'] as const
}

export function getPutIndividualsPartyIdBusinessNamesProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.individuals)[':partyId']['business-names'][':productId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.individuals)[':partyId']['business-names'][':productId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutIndividualsPartyIdBusinessNamesProductIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.individuals)[':partyId']['business-names'][':productId']['$put']
      >,
    ) {
      return parseResponse(
        client.individuals[':partyId']['business-names'][':productId'].$put(args, options),
      )
    },
  })
}

export function usePutIndividualsPartyIdBusinessNamesProductId<
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
                    (typeof client.individuals)[':partyId']['business-names'][':productId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.individuals)[':partyId']['business-names'][':productId']['$put']
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
  const mutationDefaults = getPutIndividualsPartyIdBusinessNamesProductIdMutationOptions<
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

export function getDeleteIndividualsPartyIdBusinessNamesProductIdMutationKey() {
  return ['individuals', '/individuals/:partyId/business-names/:productId', 'DELETE'] as const
}

export function getDeleteIndividualsPartyIdBusinessNamesProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.individuals)[':partyId']['business-names'][':productId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.individuals)[':partyId']['business-names'][':productId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndividualsPartyIdBusinessNamesProductIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.individuals)[':partyId']['business-names'][':productId']['$delete']
      >,
    ) {
      return parseResponse(
        client.individuals[':partyId']['business-names'][':productId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteIndividualsPartyIdBusinessNamesProductId<
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
                      (typeof client.individuals)[':partyId']['business-names'][':productId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.individuals)[':partyId']['business-names'][':productId']['$delete']
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
  const mutationDefaults = getDeleteIndividualsPartyIdBusinessNamesProductIdMutationOptions<
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

export function getIndividualsPartyIdElectronicAddressesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.individuals)[':partyId']['electronic-addresses']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['individuals', '/individuals/:partyId/electronic-addresses', keyArgs] as const
}

export function getIndividualsPartyIdElectronicAddressesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.individuals)[':partyId']['electronic-addresses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndividualsPartyIdElectronicAddressesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.individuals[':partyId']['electronic-addresses'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndividualsPartyIdElectronicAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.individuals)[':partyId']['electronic-addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.individuals)[':partyId']['electronic-addresses']['$get']>
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
                    (typeof client.individuals)[':partyId']['electronic-addresses']['$get']
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
                    (typeof client.individuals)[':partyId']['electronic-addresses']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIndividualsPartyIdElectronicAddressesQueryKey>
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
            ReturnType<(typeof client.individuals)[':partyId']['electronic-addresses']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndividualsPartyIdElectronicAddressesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndividualsPartyIdElectronicAddressesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.individuals[':partyId']['electronic-addresses'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIndividualsPartyIdElectronicAddressesMutationKey() {
  return ['individuals', '/individuals/:partyId/electronic-addresses', 'POST'] as const
}

export function getPostIndividualsPartyIdElectronicAddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.individuals)[':partyId']['electronic-addresses']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.individuals)[':partyId']['electronic-addresses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndividualsPartyIdElectronicAddressesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.individuals)[':partyId']['electronic-addresses']['$post']
      >,
    ) {
      return parseResponse(
        client.individuals[':partyId']['electronic-addresses'].$post(args, options),
      )
    },
  })
}

export function usePostIndividualsPartyIdElectronicAddresses<
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
                    (typeof client.individuals)[':partyId']['electronic-addresses']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.individuals)[':partyId']['electronic-addresses']['$post']
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
  const mutationDefaults = getPostIndividualsPartyIdElectronicAddressesMutationOptions<
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

export function getIndividualsPartyIdElectronicAddressesAddressIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['individuals', '/individuals/:partyId/electronic-addresses/:addressId', keyArgs] as const
}

export function getIndividualsPartyIdElectronicAddressesAddressIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndividualsPartyIdElectronicAddressesAddressIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.individuals[':partyId']['electronic-addresses'][':addressId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndividualsPartyIdElectronicAddressesAddressId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$get']
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
                    (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$get']
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
                    (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIndividualsPartyIdElectronicAddressesAddressIdQueryKey>
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
              (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndividualsPartyIdElectronicAddressesAddressIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndividualsPartyIdElectronicAddressesAddressIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.individuals[':partyId']['electronic-addresses'][':addressId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutIndividualsPartyIdElectronicAddressesAddressIdMutationKey() {
  return ['individuals', '/individuals/:partyId/electronic-addresses/:addressId', 'PUT'] as const
}

export function getPutIndividualsPartyIdElectronicAddressesAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutIndividualsPartyIdElectronicAddressesAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$put']
      >,
    ) {
      return parseResponse(
        client.individuals[':partyId']['electronic-addresses'][':addressId'].$put(args, options),
      )
    },
  })
}

export function usePutIndividualsPartyIdElectronicAddressesAddressId<
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
                    (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$put']
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
  const mutationDefaults = getPutIndividualsPartyIdElectronicAddressesAddressIdMutationOptions<
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

export function getDeleteIndividualsPartyIdElectronicAddressesAddressIdMutationKey() {
  return ['individuals', '/individuals/:partyId/electronic-addresses/:addressId', 'DELETE'] as const
}

export function getDeleteIndividualsPartyIdElectronicAddressesAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndividualsPartyIdElectronicAddressesAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$delete']
      >,
    ) {
      return parseResponse(
        client.individuals[':partyId']['electronic-addresses'][':addressId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteIndividualsPartyIdElectronicAddressesAddressId<
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
                      (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$delete']
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
  const mutationDefaults = getDeleteIndividualsPartyIdElectronicAddressesAddressIdMutationOptions<
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

export function getIndividualsPartyIdLicensesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.individuals)[':partyId']['licenses']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['individuals', '/individuals/:partyId/licenses', keyArgs] as const
}

export function getIndividualsPartyIdLicensesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.individuals)[':partyId']['licenses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndividualsPartyIdLicensesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.individuals[':partyId'].licenses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndividualsPartyIdLicenses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.individuals)[':partyId']['licenses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.individuals)[':partyId']['licenses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.individuals)[':partyId']['licenses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.individuals)[':partyId']['licenses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIndividualsPartyIdLicensesQueryKey>
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
          Awaited<ReturnType<(typeof client.individuals)[':partyId']['licenses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndividualsPartyIdLicensesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndividualsPartyIdLicensesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.individuals[':partyId'].licenses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIndividualsPartyIdLicensesMutationKey() {
  return ['individuals', '/individuals/:partyId/licenses', 'POST'] as const
}

export function getPostIndividualsPartyIdLicensesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.individuals)[':partyId']['licenses']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.individuals)[':partyId']['licenses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndividualsPartyIdLicensesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.individuals)[':partyId']['licenses']['$post']>,
    ) {
      return parseResponse(client.individuals[':partyId'].licenses.$post(args, options))
    },
  })
}

export function usePostIndividualsPartyIdLicenses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.individuals)[':partyId']['licenses']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.individuals)[':partyId']['licenses']['$post']>,
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
  const mutationDefaults = getPostIndividualsPartyIdLicensesMutationOptions<
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

export function getIndividualsPartyIdLicensesProductIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['individuals', '/individuals/:partyId/licenses/:productId', keyArgs] as const
}

export function getIndividualsPartyIdLicensesProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndividualsPartyIdLicensesProductIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.individuals[':partyId'].licenses[':productId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndividualsPartyIdLicensesProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$get']>
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
                    (typeof client.individuals)[':partyId']['licenses'][':productId']['$get']
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
                    (typeof client.individuals)[':partyId']['licenses'][':productId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIndividualsPartyIdLicensesProductIdQueryKey>
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
            ReturnType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndividualsPartyIdLicensesProductIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndividualsPartyIdLicensesProductIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.individuals[':partyId'].licenses[':productId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutIndividualsPartyIdLicensesProductIdMutationKey() {
  return ['individuals', '/individuals/:partyId/licenses/:productId', 'PUT'] as const
}

export function getPutIndividualsPartyIdLicensesProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIndividualsPartyIdLicensesProductIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.individuals)[':partyId']['licenses'][':productId']['$put']
      >,
    ) {
      return parseResponse(
        client.individuals[':partyId'].licenses[':productId'].$put(args, options),
      )
    },
  })
}

export function usePutIndividualsPartyIdLicensesProductId<
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
                    (typeof client.individuals)[':partyId']['licenses'][':productId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.individuals)[':partyId']['licenses'][':productId']['$put']
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
  const mutationDefaults = getPutIndividualsPartyIdLicensesProductIdMutationOptions<
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

export function getDeleteIndividualsPartyIdLicensesProductIdMutationKey() {
  return ['individuals', '/individuals/:partyId/licenses/:productId', 'DELETE'] as const
}

export function getDeleteIndividualsPartyIdLicensesProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.individuals)[':partyId']['licenses'][':productId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndividualsPartyIdLicensesProductIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.individuals)[':partyId']['licenses'][':productId']['$delete']
      >,
    ) {
      return parseResponse(
        client.individuals[':partyId'].licenses[':productId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteIndividualsPartyIdLicensesProductId<
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
                      (typeof client.individuals)[':partyId']['licenses'][':productId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.individuals)[':partyId']['licenses'][':productId']['$delete']
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
  const mutationDefaults = getDeleteIndividualsPartyIdLicensesProductIdMutationOptions<
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

export function getIndividualsPartyIdRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.individuals)[':partyId']['roles']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['individuals', '/individuals/:partyId/roles', keyArgs] as const
}

export function getIndividualsPartyIdRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.individuals)[':partyId']['roles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndividualsPartyIdRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.individuals[':partyId'].roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndividualsPartyIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.individuals)[':partyId']['roles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIndividualsPartyIdRolesQueryKey>
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
          Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndividualsPartyIdRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndividualsPartyIdRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.individuals[':partyId'].roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIndividualsPartyIdRolesMutationKey() {
  return ['individuals', '/individuals/:partyId/roles', 'POST'] as const
}

export function getPostIndividualsPartyIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.individuals)[':partyId']['roles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndividualsPartyIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.individuals)[':partyId']['roles']['$post']>,
    ) {
      return parseResponse(client.individuals[':partyId'].roles.$post(args, options))
    },
  })
}

export function usePostIndividualsPartyIdRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.individuals)[':partyId']['roles']['$post']>,
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
  const mutationDefaults = getPostIndividualsPartyIdRolesMutationOptions<TError, TOnMutateResult>(
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

export function getIndividualsPartyIdRolesRoleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['individuals', '/individuals/:partyId/roles/:roleId', keyArgs] as const
}

export function getIndividualsPartyIdRolesRoleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndividualsPartyIdRolesRoleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.individuals[':partyId'].roles[':roleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndividualsPartyIdRolesRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$get']>
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
                  ReturnType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getIndividualsPartyIdRolesRoleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndividualsPartyIdRolesRoleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndividualsPartyIdRolesRoleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.individuals[':partyId'].roles[':roleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutIndividualsPartyIdRolesRoleIdMutationKey() {
  return ['individuals', '/individuals/:partyId/roles/:roleId', 'PUT'] as const
}

export function getPutIndividualsPartyIdRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIndividualsPartyIdRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$put']>,
    ) {
      return parseResponse(client.individuals[':partyId'].roles[':roleId'].$put(args, options))
    },
  })
}

export function usePutIndividualsPartyIdRolesRoleId<
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
                  ReturnType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$put']>,
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
  const mutationDefaults = getPutIndividualsPartyIdRolesRoleIdMutationOptions<
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

export function getDeleteIndividualsPartyIdRolesRoleIdMutationKey() {
  return ['individuals', '/individuals/:partyId/roles/:roleId', 'DELETE'] as const
}

export function getDeleteIndividualsPartyIdRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndividualsPartyIdRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.individuals)[':partyId']['roles'][':roleId']['$delete']
      >,
    ) {
      return parseResponse(client.individuals[':partyId'].roles[':roleId'].$delete(args, options))
    },
  })
}

export function useDeleteIndividualsPartyIdRolesRoleId<
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
                      (typeof client.individuals)[':partyId']['roles'][':roleId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$delete']>,
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
  const mutationDefaults = getDeleteIndividualsPartyIdRolesRoleIdMutationOptions<
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

export function getLicensesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.licenses.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['licenses', '/licenses', keyArgs] as const
}

export function getLicensesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.licenses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLicensesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.licenses.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLicenses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.licenses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>
          >,
          ReturnType<typeof getLicensesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLicensesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLicensesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.licenses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganisationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organisations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['organisations', '/organisations', keyArgs] as const
}

export function getOrganisationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organisations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organisations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
          >,
          ReturnType<typeof getOrganisationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganisationsMutationKey() {
  return ['organisations', '/organisations', 'POST'] as const
}

export function getPostOrganisationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.organisations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organisations.$post>) {
      return parseResponse(client.organisations.$post(args, options))
    },
  })
}

export function usePostOrganisations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.organisations.$post>,
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
  const mutationDefaults = getPostOrganisationsMutationOptions<TError, TOnMutateResult>(
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

export function getOrganisationsPartyIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organisations)[':partyId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['organisations', '/organisations/:partyId', keyArgs] as const
}

export function getOrganisationsPartyIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organisations)[':partyId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsPartyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':partyId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsPartyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':partyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organisations)[':partyId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':partyId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':partyId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganisationsPartyIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':partyId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsPartyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsPartyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':partyId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganisationsPartyIdMutationKey() {
  return ['organisations', '/organisations/:partyId', 'PUT'] as const
}

export function getPutOrganisationsPartyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':partyId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':partyId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsPartyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.organisations)[':partyId']['$put']>) {
      return parseResponse(client.organisations[':partyId'].$put(args, options))
    },
  })
}

export function usePutOrganisationsPartyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':partyId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':partyId']['$put']>,
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
  const mutationDefaults = getPutOrganisationsPartyIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOrganisationsPartyIdMutationKey() {
  return ['organisations', '/organisations/:partyId', 'DELETE'] as const
}

export function getDeleteOrganisationsPartyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':partyId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.organisations)[':partyId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsPartyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.organisations)[':partyId']['$delete']>) {
      return parseResponse(client.organisations[':partyId'].$delete(args, options))
    },
  })
}

export function useDeleteOrganisationsPartyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.organisations)[':partyId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.organisations)[':partyId']['$delete']>,
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
  const mutationDefaults = getDeleteOrganisationsPartyIdMutationOptions<TError, TOnMutateResult>(
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

export function getOrganisationsPartyIdAddressesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':partyId']['addresses']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['organisations', '/organisations/:partyId/addresses', keyArgs] as const
}

export function getOrganisationsPartyIdAddressesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':partyId']['addresses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsPartyIdAddressesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':partyId'].addresses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsPartyIdAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':partyId']['addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':partyId']['addresses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':partyId']['addresses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':partyId']['addresses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganisationsPartyIdAddressesQueryKey>
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
          Awaited<ReturnType<(typeof client.organisations)[':partyId']['addresses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsPartyIdAddressesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsPartyIdAddressesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':partyId'].addresses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganisationsPartyIdAddressesMutationKey() {
  return ['organisations', '/organisations/:partyId/addresses', 'POST'] as const
}

export function getPostOrganisationsPartyIdAddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':partyId']['addresses']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':partyId']['addresses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsPartyIdAddressesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':partyId']['addresses']['$post']>,
    ) {
      return parseResponse(client.organisations[':partyId'].addresses.$post(args, options))
    },
  })
}

export function usePostOrganisationsPartyIdAddresses<
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
                Awaited<ReturnType<(typeof client.organisations)[':partyId']['addresses']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':partyId']['addresses']['$post']>,
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
  const mutationDefaults = getPostOrganisationsPartyIdAddressesMutationOptions<
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

export function getOrganisationsPartyIdAddressesAddressIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':partyId']['addresses'][':addressId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['organisations', '/organisations/:partyId/addresses/:addressId', keyArgs] as const
}

export function getOrganisationsPartyIdAddressesAddressIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':partyId']['addresses'][':addressId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsPartyIdAddressesAddressIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':partyId'].addresses[':addressId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsPartyIdAddressesAddressId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':partyId']['addresses'][':addressId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':partyId']['addresses'][':addressId']['$get']>
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
                    (typeof client.organisations)[':partyId']['addresses'][':addressId']['$get']
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
                    (typeof client.organisations)[':partyId']['addresses'][':addressId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsPartyIdAddressesAddressIdQueryKey>
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
            ReturnType<(typeof client.organisations)[':partyId']['addresses'][':addressId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsPartyIdAddressesAddressIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsPartyIdAddressesAddressIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':partyId'].addresses[':addressId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganisationsPartyIdAddressesAddressIdMutationKey() {
  return ['organisations', '/organisations/:partyId/addresses/:addressId', 'PUT'] as const
}

export function getPutOrganisationsPartyIdAddressesAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':partyId']['addresses'][':addressId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':partyId']['addresses'][':addressId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsPartyIdAddressesAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':partyId']['addresses'][':addressId']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':partyId'].addresses[':addressId'].$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsPartyIdAddressesAddressId<
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
                    (typeof client.organisations)[':partyId']['addresses'][':addressId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':partyId']['addresses'][':addressId']['$put']
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
  const mutationDefaults = getPutOrganisationsPartyIdAddressesAddressIdMutationOptions<
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

export function getDeleteOrganisationsPartyIdAddressesAddressIdMutationKey() {
  return ['organisations', '/organisations/:partyId/addresses/:addressId', 'DELETE'] as const
}

export function getDeleteOrganisationsPartyIdAddressesAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':partyId']['addresses'][':addressId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.organisations)[':partyId']['addresses'][':addressId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsPartyIdAddressesAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':partyId']['addresses'][':addressId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':partyId'].addresses[':addressId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganisationsPartyIdAddressesAddressId<
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
                      (typeof client.organisations)[':partyId']['addresses'][':addressId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.organisations)[':partyId']['addresses'][':addressId']['$delete']
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
  const mutationDefaults = getDeleteOrganisationsPartyIdAddressesAddressIdMutationOptions<
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

export function getOrganisationsPartyIdBusinessNamesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':partyId']['business-names']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['organisations', '/organisations/:partyId/business-names', keyArgs] as const
}

export function getOrganisationsPartyIdBusinessNamesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':partyId']['business-names']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsPartyIdBusinessNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':partyId']['business-names'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsPartyIdBusinessNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':partyId']['business-names']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':partyId']['business-names']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organisations)[':partyId']['business-names']['$get']>
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
                  ReturnType<(typeof client.organisations)[':partyId']['business-names']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsPartyIdBusinessNamesQueryKey>
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
          Awaited<ReturnType<(typeof client.organisations)[':partyId']['business-names']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsPartyIdBusinessNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsPartyIdBusinessNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':partyId']['business-names'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganisationsPartyIdBusinessNamesMutationKey() {
  return ['organisations', '/organisations/:partyId/business-names', 'POST'] as const
}

export function getPostOrganisationsPartyIdBusinessNamesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':partyId']['business-names']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':partyId']['business-names']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsPartyIdBusinessNamesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':partyId']['business-names']['$post']>,
    ) {
      return parseResponse(client.organisations[':partyId']['business-names'].$post(args, options))
    },
  })
}

export function usePostOrganisationsPartyIdBusinessNames<
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
                  ReturnType<(typeof client.organisations)[':partyId']['business-names']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':partyId']['business-names']['$post']>,
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
  const mutationDefaults = getPostOrganisationsPartyIdBusinessNamesMutationOptions<
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

export function getOrganisationsPartyIdBusinessNamesProductIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':partyId']['business-names'][':productId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['organisations', '/organisations/:partyId/business-names/:productId', keyArgs] as const
}

export function getOrganisationsPartyIdBusinessNamesProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':partyId']['business-names'][':productId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsPartyIdBusinessNamesProductIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':partyId']['business-names'][':productId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsPartyIdBusinessNamesProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':partyId']['business-names'][':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':partyId']['business-names'][':productId']['$get']
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
                    (typeof client.organisations)[':partyId']['business-names'][':productId']['$get']
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
                    (typeof client.organisations)[':partyId']['business-names'][':productId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsPartyIdBusinessNamesProductIdQueryKey>
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
              (typeof client.organisations)[':partyId']['business-names'][':productId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsPartyIdBusinessNamesProductIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsPartyIdBusinessNamesProductIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':partyId']['business-names'][':productId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganisationsPartyIdBusinessNamesProductIdMutationKey() {
  return ['organisations', '/organisations/:partyId/business-names/:productId', 'PUT'] as const
}

export function getPutOrganisationsPartyIdBusinessNamesProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':partyId']['business-names'][':productId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':partyId']['business-names'][':productId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsPartyIdBusinessNamesProductIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':partyId']['business-names'][':productId']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':partyId']['business-names'][':productId'].$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsPartyIdBusinessNamesProductId<
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
                    (typeof client.organisations)[':partyId']['business-names'][':productId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':partyId']['business-names'][':productId']['$put']
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
  const mutationDefaults = getPutOrganisationsPartyIdBusinessNamesProductIdMutationOptions<
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

export function getDeleteOrganisationsPartyIdBusinessNamesProductIdMutationKey() {
  return ['organisations', '/organisations/:partyId/business-names/:productId', 'DELETE'] as const
}

export function getDeleteOrganisationsPartyIdBusinessNamesProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':partyId']['business-names'][':productId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.organisations)[':partyId']['business-names'][':productId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsPartyIdBusinessNamesProductIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':partyId']['business-names'][':productId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':partyId']['business-names'][':productId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganisationsPartyIdBusinessNamesProductId<
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
                      (typeof client.organisations)[':partyId']['business-names'][':productId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.organisations)[':partyId']['business-names'][':productId']['$delete']
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
  const mutationDefaults = getDeleteOrganisationsPartyIdBusinessNamesProductIdMutationOptions<
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

export function getOrganisationsPartyIdElectronicAddressesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':partyId']['electronic-addresses']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['organisations', '/organisations/:partyId/electronic-addresses', keyArgs] as const
}

export function getOrganisationsPartyIdElectronicAddressesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':partyId']['electronic-addresses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsPartyIdElectronicAddressesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':partyId']['electronic-addresses'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsPartyIdElectronicAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':partyId']['electronic-addresses']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':partyId']['electronic-addresses']['$get']>
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
                    (typeof client.organisations)[':partyId']['electronic-addresses']['$get']
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
                    (typeof client.organisations)[':partyId']['electronic-addresses']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsPartyIdElectronicAddressesQueryKey>
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
            ReturnType<(typeof client.organisations)[':partyId']['electronic-addresses']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsPartyIdElectronicAddressesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsPartyIdElectronicAddressesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':partyId']['electronic-addresses'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganisationsPartyIdElectronicAddressesMutationKey() {
  return ['organisations', '/organisations/:partyId/electronic-addresses', 'POST'] as const
}

export function getPostOrganisationsPartyIdElectronicAddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':partyId']['electronic-addresses']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':partyId']['electronic-addresses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsPartyIdElectronicAddressesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':partyId']['electronic-addresses']['$post']
      >,
    ) {
      return parseResponse(
        client.organisations[':partyId']['electronic-addresses'].$post(args, options),
      )
    },
  })
}

export function usePostOrganisationsPartyIdElectronicAddresses<
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
                    (typeof client.organisations)[':partyId']['electronic-addresses']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':partyId']['electronic-addresses']['$post']
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
  const mutationDefaults = getPostOrganisationsPartyIdElectronicAddressesMutationOptions<
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

export function getOrganisationsPartyIdElectronicAddressesAddressIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'organisations',
    '/organisations/:partyId/electronic-addresses/:addressId',
    keyArgs,
  ] as const
}

export function getOrganisationsPartyIdElectronicAddressesAddressIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsPartyIdElectronicAddressesAddressIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':partyId']['electronic-addresses'][':addressId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsPartyIdElectronicAddressesAddressId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$get']
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
                    (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$get']
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
                    (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsPartyIdElectronicAddressesAddressIdQueryKey>
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
              (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsPartyIdElectronicAddressesAddressIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsPartyIdElectronicAddressesAddressIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':partyId']['electronic-addresses'][':addressId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganisationsPartyIdElectronicAddressesAddressIdMutationKey() {
  return [
    'organisations',
    '/organisations/:partyId/electronic-addresses/:addressId',
    'PUT',
  ] as const
}

export function getPutOrganisationsPartyIdElectronicAddressesAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsPartyIdElectronicAddressesAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':partyId']['electronic-addresses'][':addressId'].$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsPartyIdElectronicAddressesAddressId<
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
                    (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$put']
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
  const mutationDefaults = getPutOrganisationsPartyIdElectronicAddressesAddressIdMutationOptions<
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

export function getDeleteOrganisationsPartyIdElectronicAddressesAddressIdMutationKey() {
  return [
    'organisations',
    '/organisations/:partyId/electronic-addresses/:addressId',
    'DELETE',
  ] as const
}

export function getDeleteOrganisationsPartyIdElectronicAddressesAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsPartyIdElectronicAddressesAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':partyId']['electronic-addresses'][':addressId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteOrganisationsPartyIdElectronicAddressesAddressId<
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
                      (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$delete']
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
  const mutationDefaults = getDeleteOrganisationsPartyIdElectronicAddressesAddressIdMutationOptions<
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

export function getOrganisationsPartyIdLicensesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':partyId']['licenses']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['organisations', '/organisations/:partyId/licenses', keyArgs] as const
}

export function getOrganisationsPartyIdLicensesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':partyId']['licenses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsPartyIdLicensesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':partyId'].licenses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsPartyIdLicenses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':partyId']['licenses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':partyId']['licenses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':partyId']['licenses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':partyId']['licenses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganisationsPartyIdLicensesQueryKey>
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
          Awaited<ReturnType<(typeof client.organisations)[':partyId']['licenses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsPartyIdLicensesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsPartyIdLicensesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':partyId'].licenses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganisationsPartyIdLicensesMutationKey() {
  return ['organisations', '/organisations/:partyId/licenses', 'POST'] as const
}

export function getPostOrganisationsPartyIdLicensesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':partyId']['licenses']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':partyId']['licenses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsPartyIdLicensesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':partyId']['licenses']['$post']>,
    ) {
      return parseResponse(client.organisations[':partyId'].licenses.$post(args, options))
    },
  })
}

export function usePostOrganisationsPartyIdLicenses<
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
                Awaited<ReturnType<(typeof client.organisations)[':partyId']['licenses']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':partyId']['licenses']['$post']>,
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
  const mutationDefaults = getPostOrganisationsPartyIdLicensesMutationOptions<
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

export function getOrganisationsPartyIdLicensesProductIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':partyId']['licenses'][':productId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['organisations', '/organisations/:partyId/licenses/:productId', keyArgs] as const
}

export function getOrganisationsPartyIdLicensesProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':partyId']['licenses'][':productId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsPartyIdLicensesProductIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':partyId'].licenses[':productId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsPartyIdLicensesProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':partyId']['licenses'][':productId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':partyId']['licenses'][':productId']['$get']>
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
                    (typeof client.organisations)[':partyId']['licenses'][':productId']['$get']
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
                    (typeof client.organisations)[':partyId']['licenses'][':productId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsPartyIdLicensesProductIdQueryKey>
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
            ReturnType<(typeof client.organisations)[':partyId']['licenses'][':productId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsPartyIdLicensesProductIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsPartyIdLicensesProductIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':partyId'].licenses[':productId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganisationsPartyIdLicensesProductIdMutationKey() {
  return ['organisations', '/organisations/:partyId/licenses/:productId', 'PUT'] as const
}

export function getPutOrganisationsPartyIdLicensesProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':partyId']['licenses'][':productId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':partyId']['licenses'][':productId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsPartyIdLicensesProductIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':partyId']['licenses'][':productId']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':partyId'].licenses[':productId'].$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsPartyIdLicensesProductId<
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
                    (typeof client.organisations)[':partyId']['licenses'][':productId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':partyId']['licenses'][':productId']['$put']
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
  const mutationDefaults = getPutOrganisationsPartyIdLicensesProductIdMutationOptions<
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

export function getDeleteOrganisationsPartyIdLicensesProductIdMutationKey() {
  return ['organisations', '/organisations/:partyId/licenses/:productId', 'DELETE'] as const
}

export function getDeleteOrganisationsPartyIdLicensesProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':partyId']['licenses'][':productId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.organisations)[':partyId']['licenses'][':productId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsPartyIdLicensesProductIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':partyId']['licenses'][':productId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':partyId'].licenses[':productId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganisationsPartyIdLicensesProductId<
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
                      (typeof client.organisations)[':partyId']['licenses'][':productId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.organisations)[':partyId']['licenses'][':productId']['$delete']
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
  const mutationDefaults = getDeleteOrganisationsPartyIdLicensesProductIdMutationOptions<
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

export function getOrganisationsPartyIdRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':partyId']['roles']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['organisations', '/organisations/:partyId/roles', keyArgs] as const
}

export function getOrganisationsPartyIdRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':partyId']['roles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsPartyIdRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':partyId'].roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsPartyIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':partyId']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':partyId']['roles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':partyId']['roles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':partyId']['roles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganisationsPartyIdRolesQueryKey>
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
          Awaited<ReturnType<(typeof client.organisations)[':partyId']['roles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsPartyIdRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsPartyIdRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':partyId'].roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganisationsPartyIdRolesMutationKey() {
  return ['organisations', '/organisations/:partyId/roles', 'POST'] as const
}

export function getPostOrganisationsPartyIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':partyId']['roles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':partyId']['roles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsPartyIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':partyId']['roles']['$post']>,
    ) {
      return parseResponse(client.organisations[':partyId'].roles.$post(args, options))
    },
  })
}

export function usePostOrganisationsPartyIdRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':partyId']['roles']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':partyId']['roles']['$post']>,
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
  const mutationDefaults = getPostOrganisationsPartyIdRolesMutationOptions<TError, TOnMutateResult>(
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

export function getOrganisationsPartyIdRolesRoleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['organisations', '/organisations/:partyId/roles/:roleId', keyArgs] as const
}

export function getOrganisationsPartyIdRolesRoleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsPartyIdRolesRoleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':partyId'].roles[':roleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsPartyIdRolesRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$get']>
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
                  ReturnType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsPartyIdRolesRoleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsPartyIdRolesRoleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsPartyIdRolesRoleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':partyId'].roles[':roleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganisationsPartyIdRolesRoleIdMutationKey() {
  return ['organisations', '/organisations/:partyId/roles/:roleId', 'PUT'] as const
}

export function getPutOrganisationsPartyIdRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsPartyIdRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$put']>,
    ) {
      return parseResponse(client.organisations[':partyId'].roles[':roleId'].$put(args, options))
    },
  })
}

export function usePutOrganisationsPartyIdRolesRoleId<
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
                  ReturnType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$put']>,
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
  const mutationDefaults = getPutOrganisationsPartyIdRolesRoleIdMutationOptions<
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

export function getDeleteOrganisationsPartyIdRolesRoleIdMutationKey() {
  return ['organisations', '/organisations/:partyId/roles/:roleId', 'DELETE'] as const
}

export function getDeleteOrganisationsPartyIdRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsPartyIdRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':partyId']['roles'][':roleId']['$delete']
      >,
    ) {
      return parseResponse(client.organisations[':partyId'].roles[':roleId'].$delete(args, options))
    },
  })
}

export function useDeleteOrganisationsPartyIdRolesRoleId<
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
                      (typeof client.organisations)[':partyId']['roles'][':roleId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.organisations)[':partyId']['roles'][':roleId']['$delete']
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
  const mutationDefaults = getDeleteOrganisationsPartyIdRolesRoleIdMutationOptions<
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
