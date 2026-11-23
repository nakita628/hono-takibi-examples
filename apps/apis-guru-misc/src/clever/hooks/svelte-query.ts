import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function getContactsQueryKey(args: InferRequestType<typeof client.contacts.$get>) {
  return ['contacts', '/contacts', args] as const
}

export function getContactsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.contacts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getContactsQueryKey>
  >({
    queryKey: getContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.contacts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getContactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContactsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getContactsIdQueryKey(
  args: InferRequestType<(typeof client.contacts)[':id']['$get']>,
) {
  return ['contacts', '/contacts/:id', args] as const
}

export function getContactsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.contacts)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactsIdQueryKey>
  >({
    queryKey: getContactsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createContactsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.contacts)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContactsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getContactsIdDistrictQueryKey(
  args: InferRequestType<(typeof client.contacts)[':id']['district']['$get']>,
) {
  return ['contacts', '/contacts/:id/district', args] as const
}

export function getContactsIdDistrictQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['district']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':id']['district']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getContactsIdDistrictQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts[':id'].district.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContactsIdDistrict<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['district']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.contacts)[':id']['district']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContactsIdDistrictQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getContactsIdStudentQueryKey(
  args: InferRequestType<(typeof client.contacts)[':id']['student']['$get']>,
) {
  return ['contacts', '/contacts/:id/student', args] as const
}

export function getContactsIdStudentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['student']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':id']['student']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getContactsIdStudentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts[':id'].student.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContactsIdStudent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['student']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.contacts)[':id']['student']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContactsIdStudentQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDistrictAdminsQueryKey(
  args: InferRequestType<typeof client.district_admins.$get>,
) {
  return ['district_admins', '/district_admins', args] as const
}

export function getDistrictAdminsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.district_admins.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.district_admins.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.district_admins.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictAdminsQueryKey>
  >({
    queryKey: getDistrictAdminsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.district_admins.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDistrictAdmins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.district_admins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.district_admins.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.district_admins.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDistrictAdminsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDistrictAdminsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDistrictAdminsIdQueryKey(
  args: InferRequestType<(typeof client.district_admins)[':id']['$get']>,
) {
  return ['district_admins', '/district_admins/:id', args] as const
}

export function getDistrictAdminsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.district_admins)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.district_admins)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.district_admins)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictAdminsIdQueryKey>
  >({
    queryKey: getDistrictAdminsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.district_admins[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDistrictAdminsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.district_admins)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.district_admins)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.district_admins)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistrictAdminsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDistrictAdminsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDistrictsQueryKey() {
  return ['districts', '/districts'] as const
}

export function getDistrictsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.districts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.districts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDistrictsQueryKey>
  >({
    queryKey: getDistrictsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.districts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDistricts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.districts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.districts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDistrictsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDistrictsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getDistrictsIdQueryKey(
  args: InferRequestType<(typeof client.districts)[':id']['$get']>,
) {
  return ['districts', '/districts/:id', args] as const
}

export function getDistrictsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.districts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistrictsIdQueryKey>
  >({
    queryKey: getDistrictsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.districts[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDistrictsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.districts)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistrictsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDistrictsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDistrictsIdAdminsQueryKey(
  args: InferRequestType<(typeof client.districts)[':id']['admins']['$get']>,
) {
  return ['districts', '/districts/:id/admins', args] as const
}

export function getDistrictsIdAdminsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':id']['admins']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.districts)[':id']['admins']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDistrictsIdAdminsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.districts[':id'].admins.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDistrictsIdAdmins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':id']['admins']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.districts)[':id']['admins']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDistrictsIdAdminsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDistrictsIdSchoolsQueryKey(
  args: InferRequestType<(typeof client.districts)[':id']['schools']['$get']>,
) {
  return ['districts', '/districts/:id/schools', args] as const
}

export function getDistrictsIdSchoolsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':id']['schools']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.districts)[':id']['schools']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDistrictsIdSchoolsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.districts[':id'].schools.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDistrictsIdSchools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':id']['schools']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.districts)[':id']['schools']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDistrictsIdSchoolsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDistrictsIdSectionsQueryKey(
  args: InferRequestType<(typeof client.districts)[':id']['sections']['$get']>,
) {
  return ['districts', '/districts/:id/sections', args] as const
}

export function getDistrictsIdSectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.districts)[':id']['sections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.districts)[':id']['sections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDistrictsIdSectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.districts[':id'].sections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDistrictsIdSections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.districts)[':id']['sections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.districts)[':id']['sections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDistrictsIdSectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDistrictsIdStatusQueryKey(
  args: InferRequestType<(typeof client.districts)[':id']['status']['$get']>,
) {
  return ['districts', '/districts/:id/status', args] as const
}

export function getDistrictsIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':id']['status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.districts)[':id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDistrictsIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.districts[':id'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDistrictsIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':id']['status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.districts)[':id']['status']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDistrictsIdStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDistrictsIdStudentsQueryKey(
  args: InferRequestType<(typeof client.districts)[':id']['students']['$get']>,
) {
  return ['districts', '/districts/:id/students', args] as const
}

export function getDistrictsIdStudentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.districts)[':id']['students']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.districts)[':id']['students']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDistrictsIdStudentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.districts[':id'].students.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDistrictsIdStudents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.districts)[':id']['students']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.districts)[':id']['students']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDistrictsIdStudentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDistrictsIdTeachersQueryKey(
  args: InferRequestType<(typeof client.districts)[':id']['teachers']['$get']>,
) {
  return ['districts', '/districts/:id/teachers', args] as const
}

export function getDistrictsIdTeachersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.districts)[':id']['teachers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.districts)[':id']['teachers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDistrictsIdTeachersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.districts[':id'].teachers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDistrictsIdTeachers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.districts)[':id']['teachers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.districts)[':id']['teachers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDistrictsIdTeachersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSchoolAdminsQueryKey(args: InferRequestType<typeof client.school_admins.$get>) {
  return ['school_admins', '/school_admins', args] as const
}

export function getSchoolAdminsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.school_admins.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.school_admins.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.school_admins.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSchoolAdminsQueryKey>
  >({
    queryKey: getSchoolAdminsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.school_admins.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSchoolAdmins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.school_admins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.school_admins.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.school_admins.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSchoolAdminsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSchoolAdminsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSchoolAdminsIdQueryKey(
  args: InferRequestType<(typeof client.school_admins)[':id']['$get']>,
) {
  return ['school_admins', '/school_admins/:id', args] as const
}

export function getSchoolAdminsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.school_admins)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.school_admins)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.school_admins)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchoolAdminsIdQueryKey>
  >({
    queryKey: getSchoolAdminsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.school_admins[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSchoolAdminsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.school_admins)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.school_admins)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.school_admins)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchoolAdminsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSchoolAdminsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSchoolAdminsIdSchoolsQueryKey(
  args: InferRequestType<(typeof client.school_admins)[':id']['schools']['$get']>,
) {
  return ['school_admins', '/school_admins/:id/schools', args] as const
}

export function getSchoolAdminsIdSchoolsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.school_admins)[':id']['schools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.school_admins)[':id']['schools']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSchoolAdminsIdSchoolsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.school_admins[':id'].schools.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchoolAdminsIdSchools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.school_admins)[':id']['schools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.school_admins)[':id']['schools']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSchoolAdminsIdSchoolsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSchoolsQueryKey(args: InferRequestType<typeof client.schools.$get>) {
  return ['schools', '/schools', args] as const
}

export function getSchoolsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schools.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.schools.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schools.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSchoolsQueryKey>
  >({
    queryKey: getSchoolsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schools.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSchools<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schools.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schools.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schools.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSchoolsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSchoolsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSchoolsIdQueryKey(
  args: InferRequestType<(typeof client.schools)[':id']['$get']>,
) {
  return ['schools', '/schools/:id', args] as const
}

export function getSchoolsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.schools)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSchoolsIdQueryKey>
  >({
    queryKey: getSchoolsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schools[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSchoolsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.schools)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchoolsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSchoolsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSchoolsIdDistrictQueryKey(
  args: InferRequestType<(typeof client.schools)[':id']['district']['$get']>,
) {
  return ['schools', '/schools/:id/district', args] as const
}

export function getSchoolsIdDistrictQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['district']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schools)[':id']['district']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSchoolsIdDistrictQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schools[':id'].district.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchoolsIdDistrict<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['district']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.schools)[':id']['district']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSchoolsIdDistrictQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSchoolsIdSectionsQueryKey(
  args: InferRequestType<(typeof client.schools)[':id']['sections']['$get']>,
) {
  return ['schools', '/schools/:id/sections', args] as const
}

export function getSchoolsIdSectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['sections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schools)[':id']['sections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSchoolsIdSectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schools[':id'].sections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchoolsIdSections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['sections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.schools)[':id']['sections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSchoolsIdSectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSchoolsIdStudentsQueryKey(
  args: InferRequestType<(typeof client.schools)[':id']['students']['$get']>,
) {
  return ['schools', '/schools/:id/students', args] as const
}

export function getSchoolsIdStudentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['students']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schools)[':id']['students']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSchoolsIdStudentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schools[':id'].students.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchoolsIdStudents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['students']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.schools)[':id']['students']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSchoolsIdStudentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSchoolsIdTeachersQueryKey(
  args: InferRequestType<(typeof client.schools)[':id']['teachers']['$get']>,
) {
  return ['schools', '/schools/:id/teachers', args] as const
}

export function getSchoolsIdTeachersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['teachers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schools)[':id']['teachers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSchoolsIdTeachersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schools[':id'].teachers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchoolsIdTeachers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['teachers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.schools)[':id']['teachers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSchoolsIdTeachersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSectionsQueryKey(args: InferRequestType<typeof client.sections.$get>) {
  return ['sections', '/sections', args] as const
}

export function getSectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSectionsQueryKey>
  >({
    queryKey: getSectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sections.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sections.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSectionsIdQueryKey(
  args: InferRequestType<(typeof client.sections)[':id']['$get']>,
) {
  return ['sections', '/sections/:id', args] as const
}

export function getSectionsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.sections)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSectionsIdQueryKey>
  >({
    queryKey: getSectionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sections[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSectionsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sections)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSectionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSectionsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSectionsIdDistrictQueryKey(
  args: InferRequestType<(typeof client.sections)[':id']['district']['$get']>,
) {
  return ['sections', '/sections/:id/district', args] as const
}

export function getSectionsIdDistrictQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['district']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sections)[':id']['district']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSectionsIdDistrictQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sections[':id'].district.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSectionsIdDistrict<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['district']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sections)[':id']['district']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSectionsIdDistrictQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSectionsIdSchoolQueryKey(
  args: InferRequestType<(typeof client.sections)[':id']['school']['$get']>,
) {
  return ['sections', '/sections/:id/school', args] as const
}

export function getSectionsIdSchoolQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['school']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sections)[':id']['school']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['school']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSectionsIdSchoolQueryKey>
  >({
    queryKey: getSectionsIdSchoolQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sections[':id'].school.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSectionsIdSchool<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['school']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sections)[':id']['school']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sections)[':id']['school']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSectionsIdSchoolQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSectionsIdSchoolQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSectionsIdStudentsQueryKey(
  args: InferRequestType<(typeof client.sections)[':id']['students']['$get']>,
) {
  return ['sections', '/sections/:id/students', args] as const
}

export function getSectionsIdStudentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['students']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sections)[':id']['students']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSectionsIdStudentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sections[':id'].students.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSectionsIdStudents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['students']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sections)[':id']['students']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSectionsIdStudentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSectionsIdTeacherQueryKey(
  args: InferRequestType<(typeof client.sections)[':id']['teacher']['$get']>,
) {
  return ['sections', '/sections/:id/teacher', args] as const
}

export function getSectionsIdTeacherQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['teacher']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sections)[':id']['teacher']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSectionsIdTeacherQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sections[':id'].teacher.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSectionsIdTeacher<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['teacher']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sections)[':id']['teacher']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSectionsIdTeacherQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSectionsIdTeachersQueryKey(
  args: InferRequestType<(typeof client.sections)[':id']['teachers']['$get']>,
) {
  return ['sections', '/sections/:id/teachers', args] as const
}

export function getSectionsIdTeachersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['teachers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sections)[':id']['teachers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSectionsIdTeachersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sections[':id'].teachers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSectionsIdTeachers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['teachers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sections)[':id']['teachers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSectionsIdTeachersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStudentsQueryKey(args: InferRequestType<typeof client.students.$get>) {
  return ['students', '/students', args] as const
}

export function getStudentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.students.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.students.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.students.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStudentsQueryKey>
  >({
    queryKey: getStudentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.students.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStudents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.students.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.students.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.students.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStudentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStudentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStudentsIdQueryKey(
  args: InferRequestType<(typeof client.students)[':id']['$get']>,
) {
  return ['students', '/students/:id', args] as const
}

export function getStudentsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.students)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStudentsIdQueryKey>
  >({
    queryKey: getStudentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.students[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStudentsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.students)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStudentsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStudentsIdContactsQueryKey(
  args: InferRequestType<(typeof client.students)[':id']['contacts']['$get']>,
) {
  return ['students', '/students/:id/contacts', args] as const
}

export function getStudentsIdContactsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['contacts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.students)[':id']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStudentsIdContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.students[':id'].contacts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStudentsIdContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['contacts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.students)[':id']['contacts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStudentsIdContactsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStudentsIdDistrictQueryKey(
  args: InferRequestType<(typeof client.students)[':id']['district']['$get']>,
) {
  return ['students', '/students/:id/district', args] as const
}

export function getStudentsIdDistrictQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['district']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.students)[':id']['district']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStudentsIdDistrictQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.students[':id'].district.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStudentsIdDistrict<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['district']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.students)[':id']['district']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStudentsIdDistrictQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStudentsIdSchoolQueryKey(
  args: InferRequestType<(typeof client.students)[':id']['school']['$get']>,
) {
  return ['students', '/students/:id/school', args] as const
}

export function getStudentsIdSchoolQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['school']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.students)[':id']['school']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['school']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudentsIdSchoolQueryKey>
  >({
    queryKey: getStudentsIdSchoolQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.students[':id'].school.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStudentsIdSchool<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['school']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.students)[':id']['school']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.students)[':id']['school']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudentsIdSchoolQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStudentsIdSchoolQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStudentsIdSectionsQueryKey(
  args: InferRequestType<(typeof client.students)[':id']['sections']['$get']>,
) {
  return ['students', '/students/:id/sections', args] as const
}

export function getStudentsIdSectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['sections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.students)[':id']['sections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStudentsIdSectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.students[':id'].sections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStudentsIdSections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['sections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.students)[':id']['sections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStudentsIdSectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStudentsIdTeachersQueryKey(
  args: InferRequestType<(typeof client.students)[':id']['teachers']['$get']>,
) {
  return ['students', '/students/:id/teachers', args] as const
}

export function getStudentsIdTeachersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['teachers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.students)[':id']['teachers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStudentsIdTeachersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.students[':id'].teachers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStudentsIdTeachers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['teachers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.students)[':id']['teachers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStudentsIdTeachersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTeachersQueryKey(args: InferRequestType<typeof client.teachers.$get>) {
  return ['teachers', '/teachers', args] as const
}

export function getTeachersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teachers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.teachers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teachers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeachersQueryKey>
  >({
    queryKey: getTeachersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teachers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTeachers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teachers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.teachers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teachers.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTeachersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeachersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTeachersIdQueryKey(
  args: InferRequestType<(typeof client.teachers)[':id']['$get']>,
) {
  return ['teachers', '/teachers/:id', args] as const
}

export function getTeachersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.teachers)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTeachersIdQueryKey>
  >({
    queryKey: getTeachersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teachers[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTeachersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teachers)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeachersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeachersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTeachersIdDistrictQueryKey(
  args: InferRequestType<(typeof client.teachers)[':id']['district']['$get']>,
) {
  return ['teachers', '/teachers/:id/district', args] as const
}

export function getTeachersIdDistrictQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['district']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teachers)[':id']['district']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTeachersIdDistrictQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teachers[':id'].district.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeachersIdDistrict<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['district']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teachers)[':id']['district']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeachersIdDistrictQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTeachersIdGradeLevelsQueryKey(
  args: InferRequestType<(typeof client.teachers)[':id']['grade_levels']['$get']>,
) {
  return ['teachers', '/teachers/:id/grade_levels', args] as const
}

export function getTeachersIdGradeLevelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teachers)[':id']['grade_levels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teachers)[':id']['grade_levels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTeachersIdGradeLevelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teachers[':id'].grade_levels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeachersIdGradeLevels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teachers)[':id']['grade_levels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teachers)[':id']['grade_levels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getTeachersIdGradeLevelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTeachersIdSchoolQueryKey(
  args: InferRequestType<(typeof client.teachers)[':id']['school']['$get']>,
) {
  return ['teachers', '/teachers/:id/school', args] as const
}

export function getTeachersIdSchoolQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['school']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teachers)[':id']['school']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['school']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeachersIdSchoolQueryKey>
  >({
    queryKey: getTeachersIdSchoolQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teachers[':id'].school.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeachersIdSchool<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['school']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teachers)[':id']['school']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teachers)[':id']['school']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeachersIdSchoolQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeachersIdSchoolQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTeachersIdSectionsQueryKey(
  args: InferRequestType<(typeof client.teachers)[':id']['sections']['$get']>,
) {
  return ['teachers', '/teachers/:id/sections', args] as const
}

export function getTeachersIdSectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['sections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teachers)[':id']['sections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTeachersIdSectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teachers[':id'].sections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeachersIdSections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['sections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teachers)[':id']['sections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeachersIdSectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTeachersIdStudentsQueryKey(
  args: InferRequestType<(typeof client.teachers)[':id']['students']['$get']>,
) {
  return ['teachers', '/teachers/:id/students', args] as const
}

export function getTeachersIdStudentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['students']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teachers)[':id']['students']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTeachersIdStudentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teachers[':id'].students.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeachersIdStudents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['students']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teachers)[':id']['students']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeachersIdStudentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
