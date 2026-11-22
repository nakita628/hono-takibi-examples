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

export function useContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.contacts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getContactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContactsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.contacts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getContactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContactsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useContactsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContactsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContactsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContactsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useContactsIdDistrict<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['district']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':id']['district']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getContactsIdDistrictQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContactsIdDistrictQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContactsIdDistrict<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['district']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':id']['district']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContactsIdDistrictQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useContactsIdStudent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['student']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':id']['student']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getContactsIdStudentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContactsIdStudentQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContactsIdStudent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['student']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':id']['student']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContactsIdStudentQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useDistrictAdmins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.district_admins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.district_admins.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDistrictAdminsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDistrictAdmins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.district_admins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.district_admins.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDistrictAdminsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useDistrictAdminsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.district_admins)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.district_admins)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDistrictAdminsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDistrictAdminsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDistrictAdminsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.district_admins)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.district_admins)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDistrictAdminsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useDistricts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.districts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDistrictsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDistricts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.districts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDistrictsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useDistrictsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.districts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDistrictsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDistrictsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.districts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDistrictsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useDistrictsIdAdmins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':id']['admins']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.districts)[':id']['admins']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDistrictsIdAdminsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDistrictsIdAdminsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDistrictsIdAdmins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':id']['admins']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.districts)[':id']['admins']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDistrictsIdAdminsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useDistrictsIdSchools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':id']['schools']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.districts)[':id']['schools']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDistrictsIdSchoolsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDistrictsIdSchoolsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDistrictsIdSchools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':id']['schools']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.districts)[':id']['schools']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDistrictsIdSchoolsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.districts)[':id']['sections']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDistrictsIdSectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDistrictsIdSectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDistrictsIdSections<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDistrictsIdSectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useDistrictsIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':id']['status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.districts)[':id']['status']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDistrictsIdStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDistrictsIdStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDistrictsIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.districts)[':id']['status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.districts)[':id']['status']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDistrictsIdStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.districts)[':id']['students']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDistrictsIdStudentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDistrictsIdStudentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDistrictsIdStudents<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDistrictsIdStudentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.districts)[':id']['teachers']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDistrictsIdTeachersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDistrictsIdTeachersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDistrictsIdTeachers<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDistrictsIdTeachersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSchoolAdmins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.school_admins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.school_admins.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSchoolAdminsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSchoolAdmins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.school_admins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.school_admins.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSchoolAdminsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSchoolAdminsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.school_admins)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.school_admins)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSchoolAdminsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSchoolAdminsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.school_admins)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.school_admins)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSchoolAdminsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.school_admins)[':id']['schools']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSchoolAdminsIdSchoolsQueryKey>
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
      ...getSchoolAdminsIdSchoolsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchoolAdminsIdSchools<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchoolAdminsIdSchoolsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchools<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schools.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schools.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schools.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSchoolsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSchoolsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSchools<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schools.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schools.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schools.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSchoolsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSchoolsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSchoolsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schools)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSchoolsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSchoolsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schools)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSchoolsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSchoolsIdDistrict<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['district']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schools)[':id']['district']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSchoolsIdDistrictQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSchoolsIdDistrictQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSchoolsIdDistrict<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['district']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schools)[':id']['district']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSchoolsIdDistrictQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSchoolsIdSections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['sections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schools)[':id']['sections']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSchoolsIdSectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSchoolsIdSectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSchoolsIdSections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['sections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schools)[':id']['sections']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSchoolsIdSectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSchoolsIdStudents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['students']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schools)[':id']['students']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSchoolsIdStudentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSchoolsIdStudentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSchoolsIdStudents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['students']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schools)[':id']['students']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSchoolsIdStudentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSchoolsIdTeachers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['teachers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schools)[':id']['teachers']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSchoolsIdTeachersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSchoolsIdTeachersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSchoolsIdTeachers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schools)[':id']['teachers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schools)[':id']['teachers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSchoolsIdTeachersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sections.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sections.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sections.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sections.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSectionsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sections)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSectionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSectionsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sections)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSectionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSectionsIdDistrict<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['district']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sections)[':id']['district']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSectionsIdDistrictQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSectionsIdDistrictQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSectionsIdDistrict<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['district']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sections)[':id']['district']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSectionsIdDistrictQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSectionsIdSchool<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['school']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sections)[':id']['school']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSectionsIdSchoolQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSectionsIdSchoolQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSectionsIdSchool<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['school']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sections)[':id']['school']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSectionsIdSchoolQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSectionsIdStudents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['students']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sections)[':id']['students']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSectionsIdStudentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSectionsIdStudentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSectionsIdStudents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['students']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sections)[':id']['students']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSectionsIdStudentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSectionsIdTeacher<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['teacher']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sections)[':id']['teacher']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSectionsIdTeacherQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSectionsIdTeacherQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSectionsIdTeacher<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['teacher']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sections)[':id']['teacher']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSectionsIdTeacherQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSectionsIdTeachers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['teachers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sections)[':id']['teachers']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSectionsIdTeachersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSectionsIdTeachersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSectionsIdTeachers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':id']['teachers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sections)[':id']['teachers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSectionsIdTeachersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useStudents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.students.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.students.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.students.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStudentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStudentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStudents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.students.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.students.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.students.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStudentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStudentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useStudentsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.students)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStudentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStudentsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.students)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStudentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useStudentsIdContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['contacts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.students)[':id']['contacts']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getStudentsIdContactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStudentsIdContactsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStudentsIdContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['contacts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.students)[':id']['contacts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStudentsIdContactsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useStudentsIdDistrict<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['district']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.students)[':id']['district']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getStudentsIdDistrictQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStudentsIdDistrictQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStudentsIdDistrict<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['district']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.students)[':id']['district']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStudentsIdDistrictQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useStudentsIdSchool<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['school']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.students)[':id']['school']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getStudentsIdSchoolQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStudentsIdSchoolQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStudentsIdSchool<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['school']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.students)[':id']['school']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStudentsIdSchoolQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useStudentsIdSections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['sections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.students)[':id']['sections']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getStudentsIdSectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStudentsIdSectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStudentsIdSections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['sections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.students)[':id']['sections']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStudentsIdSectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useStudentsIdTeachers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['teachers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.students)[':id']['teachers']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getStudentsIdTeachersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStudentsIdTeachersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStudentsIdTeachers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.students)[':id']['teachers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.students)[':id']['teachers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStudentsIdTeachersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useTeachers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teachers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.teachers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teachers.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTeachersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeachersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeachers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teachers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.teachers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teachers.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTeachersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeachersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useTeachersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teachers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeachersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeachersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teachers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeachersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useTeachersIdDistrict<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['district']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teachers)[':id']['district']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getTeachersIdDistrictQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeachersIdDistrictQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeachersIdDistrict<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['district']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teachers)[':id']['district']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeachersIdDistrictQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.teachers)[':id']['grade_levels']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getTeachersIdGradeLevelsQueryKey>
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
      ...getTeachersIdGradeLevelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeachersIdGradeLevels<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTeachersIdGradeLevelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useTeachersIdSchool<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['school']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teachers)[':id']['school']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getTeachersIdSchoolQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeachersIdSchoolQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeachersIdSchool<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['school']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teachers)[':id']['school']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeachersIdSchoolQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useTeachersIdSections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['sections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teachers)[':id']['sections']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getTeachersIdSectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeachersIdSectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeachersIdSections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['sections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teachers)[':id']['sections']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeachersIdSectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useTeachersIdStudents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['students']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teachers)[':id']['students']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getTeachersIdStudentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeachersIdStudentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeachersIdStudents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teachers)[':id']['students']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teachers)[':id']['students']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeachersIdStudentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
