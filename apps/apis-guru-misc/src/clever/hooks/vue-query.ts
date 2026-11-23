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

export function getContactsKey() {
  return ['contacts'] as const
}

export function getDistrictAdminsKey() {
  return ['district_admins'] as const
}

export function getDistrictsKey() {
  return ['districts'] as const
}

export function getSchoolAdminsKey() {
  return ['school_admins'] as const
}

export function getSchoolsKey() {
  return ['schools'] as const
}

export function getSectionsKey() {
  return ['sections'] as const
}

export function getStudentsKey() {
  return ['students'] as const
}

export function getTeachersKey() {
  return ['teachers'] as const
}

export function getContactsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.$get>>,
) {
  return ['contacts', '/contacts', toValue(args)] as const
}

export function getContactsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
          >,
          ReturnType<typeof getContactsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getContactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContactsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)[':id']['$get']>>,
) {
  return ['contacts', '/contacts/:id', toValue(args)] as const
}

export function getContactsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getContactsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContactsIdDistrictQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)[':id']['district']['$get']>>,
) {
  return ['contacts', '/contacts/:id/district', toValue(args)] as const
}

export function getContactsIdDistrictQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)[':id']['district']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsIdDistrictQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts[':id'].district.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsIdDistrict<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['district']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)[':id']['district']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts)[':id']['district']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts)[':id']['district']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactsIdDistrictQueryKey>
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
          Awaited<ReturnType<(typeof client.contacts)[':id']['district']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsIdDistrictQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsIdDistrictQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts[':id'].district.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContactsIdStudentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)[':id']['student']['$get']>>,
) {
  return ['contacts', '/contacts/:id/student', toValue(args)] as const
}

export function getContactsIdStudentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)[':id']['student']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsIdStudentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts[':id'].student.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsIdStudent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['student']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)[':id']['student']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts)[':id']['student']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts)[':id']['student']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactsIdStudentQueryKey>
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
          Awaited<ReturnType<(typeof client.contacts)[':id']['student']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsIdStudentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsIdStudentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts[':id'].student.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDistrictAdminsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.district_admins.$get>>,
) {
  return ['district_admins', '/district_admins', toValue(args)] as const
}

export function getDistrictAdminsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.district_admins.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDistrictAdminsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.district_admins.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDistrictAdmins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.district_admins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.district_admins.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.district_admins.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.district_admins.$get>>>
            >
          >,
          ReturnType<typeof getDistrictAdminsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.district_admins.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictAdminsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDistrictAdminsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.district_admins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDistrictAdminsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.district_admins)[':id']['$get']>>,
) {
  return ['district_admins', '/district_admins/:id', toValue(args)] as const
}

export function getDistrictAdminsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.district_admins)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDistrictAdminsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.district_admins[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDistrictAdminsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.district_admins)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.district_admins)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.district_admins)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.district_admins)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDistrictAdminsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.district_admins)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictAdminsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDistrictAdminsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.district_admins[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDistrictsQueryKey() {
  return ['districts', '/districts'] as const
}

export function getDistrictsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDistrictsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.districts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDistricts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.districts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.districts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.districts.$get>>>>
          >,
          ReturnType<typeof getDistrictsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.districts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDistrictsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDistrictsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.districts.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDistrictsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.districts)[':id']['$get']>>,
) {
  return ['districts', '/districts/:id', toValue(args)] as const
}

export function getDistrictsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.districts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDistrictsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.districts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDistrictsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.districts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getDistrictsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDistrictsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.districts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDistrictsIdAdminsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.districts)[':id']['admins']['$get']>>,
) {
  return ['districts', '/districts/:id/admins', toValue(args)] as const
}

export function getDistrictsIdAdminsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.districts)[':id']['admins']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDistrictsIdAdminsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.districts[':id'].admins.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDistrictsIdAdmins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':id']['admins']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.districts)[':id']['admins']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.districts)[':id']['admins']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.districts)[':id']['admins']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDistrictsIdAdminsQueryKey>
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
          Awaited<ReturnType<(typeof client.districts)[':id']['admins']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictsIdAdminsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDistrictsIdAdminsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.districts[':id'].admins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDistrictsIdSchoolsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.districts)[':id']['schools']['$get']>>,
) {
  return ['districts', '/districts/:id/schools', toValue(args)] as const
}

export function getDistrictsIdSchoolsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.districts)[':id']['schools']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDistrictsIdSchoolsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.districts[':id'].schools.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDistrictsIdSchools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':id']['schools']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.districts)[':id']['schools']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.districts)[':id']['schools']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.districts)[':id']['schools']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDistrictsIdSchoolsQueryKey>
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
          Awaited<ReturnType<(typeof client.districts)[':id']['schools']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictsIdSchoolsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDistrictsIdSchoolsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.districts[':id'].schools.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDistrictsIdSectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.districts)[':id']['sections']['$get']>>,
) {
  return ['districts', '/districts/:id/sections', toValue(args)] as const
}

export function getDistrictsIdSectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.districts)[':id']['sections']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDistrictsIdSectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.districts[':id'].sections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDistrictsIdSections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.districts)[':id']['sections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.districts)[':id']['sections']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.districts)[':id']['sections']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.districts)[':id']['sections']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDistrictsIdSectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.districts)[':id']['sections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictsIdSectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDistrictsIdSectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.districts[':id'].sections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDistrictsIdStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.districts)[':id']['status']['$get']>>,
) {
  return ['districts', '/districts/:id/status', toValue(args)] as const
}

export function getDistrictsIdStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.districts)[':id']['status']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDistrictsIdStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.districts[':id'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDistrictsIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':id']['status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.districts)[':id']['status']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.districts)[':id']['status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.districts)[':id']['status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDistrictsIdStatusQueryKey>
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
          Awaited<ReturnType<(typeof client.districts)[':id']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictsIdStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDistrictsIdStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.districts[':id'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDistrictsIdStudentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.districts)[':id']['students']['$get']>>,
) {
  return ['districts', '/districts/:id/students', toValue(args)] as const
}

export function getDistrictsIdStudentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.districts)[':id']['students']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDistrictsIdStudentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.districts[':id'].students.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDistrictsIdStudents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.districts)[':id']['students']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.districts)[':id']['students']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.districts)[':id']['students']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.districts)[':id']['students']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDistrictsIdStudentsQueryKey>
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
          Awaited<ReturnType<(typeof client.districts)[':id']['students']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictsIdStudentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDistrictsIdStudentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.districts[':id'].students.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDistrictsIdTeachersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.districts)[':id']['teachers']['$get']>>,
) {
  return ['districts', '/districts/:id/teachers', toValue(args)] as const
}

export function getDistrictsIdTeachersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.districts)[':id']['teachers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDistrictsIdTeachersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.districts[':id'].teachers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDistrictsIdTeachers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.districts)[':id']['teachers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.districts)[':id']['teachers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.districts)[':id']['teachers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.districts)[':id']['teachers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDistrictsIdTeachersQueryKey>
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
          Awaited<ReturnType<(typeof client.districts)[':id']['teachers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictsIdTeachersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDistrictsIdTeachersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.districts[':id'].teachers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchoolAdminsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.school_admins.$get>>,
) {
  return ['school_admins', '/school_admins', toValue(args)] as const
}

export function getSchoolAdminsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.school_admins.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchoolAdminsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.school_admins.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSchoolAdmins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.school_admins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.school_admins.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.school_admins.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.school_admins.$get>>>>
          >,
          ReturnType<typeof getSchoolAdminsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.school_admins.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSchoolAdminsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchoolAdminsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.school_admins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchoolAdminsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.school_admins)[':id']['$get']>>,
) {
  return ['school_admins', '/school_admins/:id', toValue(args)] as const
}

export function getSchoolAdminsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.school_admins)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchoolAdminsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.school_admins[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSchoolAdminsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.school_admins)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.school_admins)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.school_admins)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.school_admins)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSchoolAdminsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.school_admins)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchoolAdminsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchoolAdminsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.school_admins[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchoolAdminsIdSchoolsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.school_admins)[':id']['schools']['$get']>>,
) {
  return ['school_admins', '/school_admins/:id/schools', toValue(args)] as const
}

export function getSchoolAdminsIdSchoolsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.school_admins)[':id']['schools']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchoolAdminsIdSchoolsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.school_admins[':id'].schools.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSchoolAdminsIdSchools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.school_admins)[':id']['schools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.school_admins)[':id']['schools']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.school_admins)[':id']['schools']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.school_admins)[':id']['schools']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSchoolAdminsIdSchoolsQueryKey>
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
          Awaited<ReturnType<(typeof client.school_admins)[':id']['schools']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchoolAdminsIdSchoolsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchoolAdminsIdSchoolsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.school_admins[':id'].schools.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchoolsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schools.$get>>,
) {
  return ['schools', '/schools', toValue(args)] as const
}

export function getSchoolsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schools.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchoolsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schools.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSchools<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schools.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schools.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schools.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schools.$get>>>>
          >,
          ReturnType<typeof getSchoolsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schools.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSchoolsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchoolsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schools.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchoolsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schools)[':id']['$get']>>,
) {
  return ['schools', '/schools/:id', toValue(args)] as const
}

export function getSchoolsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schools)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchoolsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schools[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSchoolsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schools)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSchoolsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSchoolsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchoolsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schools[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchoolsIdDistrictQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schools)[':id']['district']['$get']>>,
) {
  return ['schools', '/schools/:id/district', toValue(args)] as const
}

export function getSchoolsIdDistrictQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schools)[':id']['district']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchoolsIdDistrictQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schools[':id'].district.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSchoolsIdDistrict<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['district']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schools)[':id']['district']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.schools)[':id']['district']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.schools)[':id']['district']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSchoolsIdDistrictQueryKey>
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
          Awaited<ReturnType<(typeof client.schools)[':id']['district']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchoolsIdDistrictQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchoolsIdDistrictQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schools[':id'].district.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchoolsIdSectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schools)[':id']['sections']['$get']>>,
) {
  return ['schools', '/schools/:id/sections', toValue(args)] as const
}

export function getSchoolsIdSectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schools)[':id']['sections']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchoolsIdSectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schools[':id'].sections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSchoolsIdSections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['sections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schools)[':id']['sections']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.schools)[':id']['sections']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.schools)[':id']['sections']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSchoolsIdSectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.schools)[':id']['sections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchoolsIdSectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchoolsIdSectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schools[':id'].sections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchoolsIdStudentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schools)[':id']['students']['$get']>>,
) {
  return ['schools', '/schools/:id/students', toValue(args)] as const
}

export function getSchoolsIdStudentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schools)[':id']['students']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchoolsIdStudentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schools[':id'].students.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSchoolsIdStudents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['students']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schools)[':id']['students']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.schools)[':id']['students']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.schools)[':id']['students']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSchoolsIdStudentsQueryKey>
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
          Awaited<ReturnType<(typeof client.schools)[':id']['students']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchoolsIdStudentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchoolsIdStudentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schools[':id'].students.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchoolsIdTeachersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schools)[':id']['teachers']['$get']>>,
) {
  return ['schools', '/schools/:id/teachers', toValue(args)] as const
}

export function getSchoolsIdTeachersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schools)[':id']['teachers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchoolsIdTeachersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schools[':id'].teachers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSchoolsIdTeachers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['teachers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schools)[':id']['teachers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.schools)[':id']['teachers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.schools)[':id']['teachers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSchoolsIdTeachersQueryKey>
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
          Awaited<ReturnType<(typeof client.schools)[':id']['teachers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchoolsIdTeachersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchoolsIdTeachersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schools[':id'].teachers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sections.$get>>,
) {
  return ['sections', '/sections', toValue(args)] as const
}

export function getSectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sections.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sections.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sections.$get>>>>
          >,
          ReturnType<typeof getSectionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSectionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sections)[':id']['$get']>>,
) {
  return ['sections', '/sections/:id', toValue(args)] as const
}

export function getSectionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sections)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSectionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sections[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSectionsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sections)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSectionsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSectionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSectionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sections[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSectionsIdDistrictQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sections)[':id']['district']['$get']>>,
) {
  return ['sections', '/sections/:id/district', toValue(args)] as const
}

export function getSectionsIdDistrictQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sections)[':id']['district']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSectionsIdDistrictQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sections[':id'].district.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSectionsIdDistrict<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['district']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sections)[':id']['district']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sections)[':id']['district']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sections)[':id']['district']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSectionsIdDistrictQueryKey>
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
          Awaited<ReturnType<(typeof client.sections)[':id']['district']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSectionsIdDistrictQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSectionsIdDistrictQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sections[':id'].district.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSectionsIdSchoolQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sections)[':id']['school']['$get']>>,
) {
  return ['sections', '/sections/:id/school', toValue(args)] as const
}

export function getSectionsIdSchoolQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sections)[':id']['school']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSectionsIdSchoolQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sections[':id'].school.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSectionsIdSchool<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['school']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sections)[':id']['school']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sections)[':id']['school']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sections)[':id']['school']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSectionsIdSchoolQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['school']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSectionsIdSchoolQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSectionsIdSchoolQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sections[':id'].school.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSectionsIdStudentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sections)[':id']['students']['$get']>>,
) {
  return ['sections', '/sections/:id/students', toValue(args)] as const
}

export function getSectionsIdStudentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sections)[':id']['students']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSectionsIdStudentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sections[':id'].students.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSectionsIdStudents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['students']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sections)[':id']['students']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sections)[':id']['students']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sections)[':id']['students']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSectionsIdStudentsQueryKey>
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
          Awaited<ReturnType<(typeof client.sections)[':id']['students']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSectionsIdStudentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSectionsIdStudentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sections[':id'].students.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSectionsIdTeacherQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sections)[':id']['teacher']['$get']>>,
) {
  return ['sections', '/sections/:id/teacher', toValue(args)] as const
}

export function getSectionsIdTeacherQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sections)[':id']['teacher']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSectionsIdTeacherQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sections[':id'].teacher.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSectionsIdTeacher<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['teacher']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sections)[':id']['teacher']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sections)[':id']['teacher']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sections)[':id']['teacher']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSectionsIdTeacherQueryKey>
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
          Awaited<ReturnType<(typeof client.sections)[':id']['teacher']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSectionsIdTeacherQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSectionsIdTeacherQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sections[':id'].teacher.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSectionsIdTeachersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sections)[':id']['teachers']['$get']>>,
) {
  return ['sections', '/sections/:id/teachers', toValue(args)] as const
}

export function getSectionsIdTeachersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sections)[':id']['teachers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSectionsIdTeachersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sections[':id'].teachers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSectionsIdTeachers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['teachers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sections)[':id']['teachers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sections)[':id']['teachers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sections)[':id']['teachers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSectionsIdTeachersQueryKey>
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
          Awaited<ReturnType<(typeof client.sections)[':id']['teachers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSectionsIdTeachersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSectionsIdTeachersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sections[':id'].teachers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStudentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.students.$get>>,
) {
  return ['students', '/students', toValue(args)] as const
}

export function getStudentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.students.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.students.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStudents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.students.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.students.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.students.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.students.$get>>>>
          >,
          ReturnType<typeof getStudentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.students.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStudentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.students.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStudentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.students)[':id']['$get']>>,
) {
  return ['students', '/students/:id', toValue(args)] as const
}

export function getStudentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.students)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.students[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudentsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.students)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getStudentsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStudentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.students[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStudentsIdContactsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.students)[':id']['contacts']['$get']>>,
) {
  return ['students', '/students/:id/contacts', toValue(args)] as const
}

export function getStudentsIdContactsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.students)[':id']['contacts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudentsIdContactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.students[':id'].contacts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudentsIdContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['contacts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.students)[':id']['contacts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.students)[':id']['contacts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.students)[':id']['contacts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStudentsIdContactsQueryKey>
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
          Awaited<ReturnType<(typeof client.students)[':id']['contacts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudentsIdContactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudentsIdContactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.students[':id'].contacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStudentsIdDistrictQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.students)[':id']['district']['$get']>>,
) {
  return ['students', '/students/:id/district', toValue(args)] as const
}

export function getStudentsIdDistrictQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.students)[':id']['district']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudentsIdDistrictQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.students[':id'].district.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudentsIdDistrict<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['district']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.students)[':id']['district']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.students)[':id']['district']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.students)[':id']['district']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStudentsIdDistrictQueryKey>
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
          Awaited<ReturnType<(typeof client.students)[':id']['district']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudentsIdDistrictQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudentsIdDistrictQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.students[':id'].district.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStudentsIdSchoolQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.students)[':id']['school']['$get']>>,
) {
  return ['students', '/students/:id/school', toValue(args)] as const
}

export function getStudentsIdSchoolQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.students)[':id']['school']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudentsIdSchoolQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.students[':id'].school.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudentsIdSchool<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['school']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.students)[':id']['school']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.students)[':id']['school']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.students)[':id']['school']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStudentsIdSchoolQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['school']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudentsIdSchoolQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudentsIdSchoolQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.students[':id'].school.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStudentsIdSectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.students)[':id']['sections']['$get']>>,
) {
  return ['students', '/students/:id/sections', toValue(args)] as const
}

export function getStudentsIdSectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.students)[':id']['sections']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudentsIdSectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.students[':id'].sections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudentsIdSections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['sections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.students)[':id']['sections']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.students)[':id']['sections']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.students)[':id']['sections']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStudentsIdSectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.students)[':id']['sections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudentsIdSectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudentsIdSectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.students[':id'].sections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStudentsIdTeachersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.students)[':id']['teachers']['$get']>>,
) {
  return ['students', '/students/:id/teachers', toValue(args)] as const
}

export function getStudentsIdTeachersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.students)[':id']['teachers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudentsIdTeachersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.students[':id'].teachers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudentsIdTeachers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['teachers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.students)[':id']['teachers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.students)[':id']['teachers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.students)[':id']['teachers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStudentsIdTeachersQueryKey>
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
          Awaited<ReturnType<(typeof client.students)[':id']['teachers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudentsIdTeachersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudentsIdTeachersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.students[':id'].teachers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeachersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teachers.$get>>,
) {
  return ['teachers', '/teachers', toValue(args)] as const
}

export function getTeachersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teachers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeachersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teachers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTeachers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teachers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teachers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teachers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teachers.$get>>>>
          >,
          ReturnType<typeof getTeachersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teachers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeachersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeachersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teachers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeachersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teachers)[':id']['$get']>>,
) {
  return ['teachers', '/teachers/:id', toValue(args)] as const
}

export function getTeachersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teachers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeachersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teachers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeachersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teachers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getTeachersIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTeachersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeachersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teachers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeachersIdDistrictQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teachers)[':id']['district']['$get']>>,
) {
  return ['teachers', '/teachers/:id/district', toValue(args)] as const
}

export function getTeachersIdDistrictQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teachers)[':id']['district']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeachersIdDistrictQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teachers[':id'].district.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeachersIdDistrict<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['district']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teachers)[':id']['district']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teachers)[':id']['district']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teachers)[':id']['district']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeachersIdDistrictQueryKey>
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
          Awaited<ReturnType<(typeof client.teachers)[':id']['district']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeachersIdDistrictQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeachersIdDistrictQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teachers[':id'].district.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeachersIdGradeLevelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teachers)[':id']['grade_levels']['$get']>>,
) {
  return ['teachers', '/teachers/:id/grade_levels', toValue(args)] as const
}

export function getTeachersIdGradeLevelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teachers)[':id']['grade_levels']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeachersIdGradeLevelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teachers[':id'].grade_levels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeachersIdGradeLevels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teachers)[':id']['grade_levels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teachers)[':id']['grade_levels']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teachers)[':id']['grade_levels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teachers)[':id']['grade_levels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeachersIdGradeLevelsQueryKey>
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
          Awaited<ReturnType<(typeof client.teachers)[':id']['grade_levels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeachersIdGradeLevelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeachersIdGradeLevelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teachers[':id'].grade_levels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeachersIdSchoolQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teachers)[':id']['school']['$get']>>,
) {
  return ['teachers', '/teachers/:id/school', toValue(args)] as const
}

export function getTeachersIdSchoolQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teachers)[':id']['school']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeachersIdSchoolQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teachers[':id'].school.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeachersIdSchool<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['school']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teachers)[':id']['school']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teachers)[':id']['school']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teachers)[':id']['school']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeachersIdSchoolQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['school']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeachersIdSchoolQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeachersIdSchoolQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teachers[':id'].school.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeachersIdSectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teachers)[':id']['sections']['$get']>>,
) {
  return ['teachers', '/teachers/:id/sections', toValue(args)] as const
}

export function getTeachersIdSectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teachers)[':id']['sections']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeachersIdSectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teachers[':id'].sections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeachersIdSections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['sections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teachers)[':id']['sections']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teachers)[':id']['sections']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teachers)[':id']['sections']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeachersIdSectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.teachers)[':id']['sections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeachersIdSectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeachersIdSectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teachers[':id'].sections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeachersIdStudentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teachers)[':id']['students']['$get']>>,
) {
  return ['teachers', '/teachers/:id/students', toValue(args)] as const
}

export function getTeachersIdStudentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teachers)[':id']['students']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeachersIdStudentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teachers[':id'].students.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeachersIdStudents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['students']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teachers)[':id']['students']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teachers)[':id']['students']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teachers)[':id']['students']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeachersIdStudentsQueryKey>
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
          Awaited<ReturnType<(typeof client.teachers)[':id']['students']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeachersIdStudentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeachersIdStudentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teachers[':id'].students.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
