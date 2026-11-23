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

export function getVVersionKey() {
  return ['v{version}'] as const
}

export function getVVersionAreasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['v{version}']['areas']['$get']>>,
) {
  return ['v{version}', '/v{version}/areas', toValue(args)] as const
}

export function getVVersionAreasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['v{version}']['areas']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVVersionAreasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['v{version}'].areas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVVersionAreas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['v{version}']['areas']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['v{version}']['areas']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['v{version}']['areas']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['v{version}']['areas']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVVersionAreasQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['v{version}']['areas']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVVersionAreasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVVersionAreasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['v{version}'].areas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVVersionAreasAreaIdsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v{version}']['areas'][':area_Ids']['$get']>
  >,
) {
  return ['v{version}', '/v{version}/areas/:area_Ids', toValue(args)] as const
}

export function getVVersionAreasAreaIdsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v{version}']['areas'][':area_Ids']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVVersionAreasAreaIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['v{version}'].areas[':area_Ids'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVVersionAreasAreaIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v{version}']['areas'][':area_Ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v{version}']['areas'][':area_Ids']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['v{version}']['areas'][':area_Ids']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['v{version}']['areas'][':area_Ids']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVVersionAreasAreaIdsQueryKey>
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
          Awaited<ReturnType<(typeof client)['v{version}']['areas'][':area_Ids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVVersionAreasAreaIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVVersionAreasAreaIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['v{version}'].areas[':area_Ids'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVVersionQualityDailyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v{version}']['quality']['daily']['$get']>
  >,
) {
  return ['v{version}', '/v{version}/quality/daily', toValue(args)] as const
}

export function getVVersionQualityDailyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v{version}']['quality']['daily']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVVersionQualityDailyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['v{version}'].quality.daily.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVVersionQualityDaily<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v{version}']['quality']['daily']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v{version}']['quality']['daily']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['v{version}']['quality']['daily']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['v{version}']['quality']['daily']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVVersionQualityDailyQueryKey>
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
          Awaited<ReturnType<(typeof client)['v{version}']['quality']['daily']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVVersionQualityDailyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVVersionQualityDailyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['v{version}'].quality.daily.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVVersionQualityOverallQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v{version}']['quality']['overall']['$get']>
  >,
) {
  return ['v{version}', '/v{version}/quality/overall', toValue(args)] as const
}

export function getVVersionQualityOverallQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v{version}']['quality']['overall']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVVersionQualityOverallQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['v{version}'].quality.overall.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVVersionQualityOverall<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v{version}']['quality']['overall']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v{version}']['quality']['overall']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['v{version}']['quality']['overall']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['v{version}']['quality']['overall']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVVersionQualityOverallQueryKey>
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
          Awaited<ReturnType<(typeof client)['v{version}']['quality']['overall']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVVersionQualityOverallQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVVersionQualityOverallQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['v{version}'].quality.overall.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVVersionReportsReportTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v{version}']['reports'][':report_type']['$get']>
  >,
) {
  return ['v{version}', '/v{version}/reports/:report_type', toValue(args)] as const
}

export function getVVersionReportsReportTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v{version}']['reports'][':report_type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVVersionReportsReportTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['v{version}'].reports[':report_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVVersionReportsReportType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v{version}']['reports'][':report_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v{version}']['reports'][':report_type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['v{version}']['reports'][':report_type']['$get']>
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
                  ReturnType<(typeof client)['v{version}']['reports'][':report_type']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVVersionReportsReportTypeQueryKey>
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
          Awaited<ReturnType<(typeof client)['v{version}']['reports'][':report_type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVVersionReportsReportTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVVersionReportsReportTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['v{version}'].reports[':report_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVVersionReportsStartDateToEndDateReportTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['v{version}']['reports'][':start_date']['to'][':end_date'][':report_type']['$get']
    >
  >,
) {
  return [
    'v{version}',
    '/v{version}/reports/:start_date/to/:end_date/:report_type',
    toValue(args),
  ] as const
}

export function getVVersionReportsStartDateToEndDateReportTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['v{version}']['reports'][':start_date']['to'][':end_date'][':report_type']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVVersionReportsStartDateToEndDateReportTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['v{version}'].reports[':start_date'].to[':end_date'][':report_type'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useVVersionReportsStartDateToEndDateReportType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['v{version}']['reports'][':start_date']['to'][':end_date'][':report_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['v{version}']['reports'][':start_date']['to'][':end_date'][':report_type']['$get']
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
                    (typeof client)['v{version}']['reports'][':start_date']['to'][':end_date'][':report_type']['$get']
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
                    (typeof client)['v{version}']['reports'][':start_date']['to'][':end_date'][':report_type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVVersionReportsStartDateToEndDateReportTypeQueryKey>
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
              (typeof client)['v{version}']['reports'][':start_date']['to'][':end_date'][':report_type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVVersionReportsStartDateToEndDateReportTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVVersionReportsStartDateToEndDateReportTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['v{version}'].reports[':start_date'].to[':end_date'][':report_type'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getVVersionSitesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['v{version}']['sites']['$get']>>,
) {
  return ['v{version}', '/v{version}/sites', toValue(args)] as const
}

export function getVVersionSitesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['v{version}']['sites']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVVersionSitesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['v{version}'].sites.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVVersionSites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['v{version}']['sites']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['v{version}']['sites']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['v{version}']['sites']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['v{version}']['sites']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVVersionSitesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['v{version}']['sites']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVVersionSitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVVersionSitesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['v{version}'].sites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVVersionSitesSiteIdsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v{version}']['sites'][':site_Ids']['$get']>
  >,
) {
  return ['v{version}', '/v{version}/sites/:site_Ids', toValue(args)] as const
}

export function getVVersionSitesSiteIdsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v{version}']['sites'][':site_Ids']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVVersionSitesSiteIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['v{version}'].sites[':site_Ids'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVVersionSitesSiteIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v{version}']['sites'][':site_Ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v{version}']['sites'][':site_Ids']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['v{version}']['sites'][':site_Ids']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['v{version}']['sites'][':site_Ids']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVVersionSitesSiteIdsQueryKey>
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
          Awaited<ReturnType<(typeof client)['v{version}']['sites'][':site_Ids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVVersionSitesSiteIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVVersionSitesSiteIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['v{version}'].sites[':site_Ids'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVVersionSitetypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['v{version}']['sitetypes']['$get']>>,
) {
  return ['v{version}', '/v{version}/sitetypes', toValue(args)] as const
}

export function getVVersionSitetypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['v{version}']['sitetypes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVVersionSitetypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['v{version}'].sitetypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVVersionSitetypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['v{version}']['sitetypes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['v{version}']['sitetypes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['v{version}']['sitetypes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['v{version}']['sitetypes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVVersionSitetypesQueryKey>
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
          Awaited<ReturnType<(typeof client)['v{version}']['sitetypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVVersionSitetypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVVersionSitetypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['v{version}'].sitetypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVVersionSitetypesSiteTypeIdSitesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v{version}']['sitetypes'][':siteType_Id']['sites']['$get']>
  >,
) {
  return ['v{version}', '/v{version}/sitetypes/:siteType_Id/sites', toValue(args)] as const
}

export function getVVersionSitetypesSiteTypeIdSitesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v{version}']['sitetypes'][':siteType_Id']['sites']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVVersionSitetypesSiteTypeIdSitesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['v{version}'].sitetypes[':siteType_Id'].sites.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVVersionSitetypesSiteTypeIdSites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['v{version}']['sitetypes'][':siteType_Id']['sites']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v{version}']['sitetypes'][':siteType_Id']['sites']['$get']>
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
                    (typeof client)['v{version}']['sitetypes'][':siteType_Id']['sites']['$get']
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
                    (typeof client)['v{version}']['sitetypes'][':siteType_Id']['sites']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVVersionSitetypesSiteTypeIdSitesQueryKey>
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
            ReturnType<(typeof client)['v{version}']['sitetypes'][':siteType_Id']['sites']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVVersionSitetypesSiteTypeIdSitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVVersionSitetypesSiteTypeIdSitesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['v{version}'].sitetypes[':siteType_Id'].sites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
