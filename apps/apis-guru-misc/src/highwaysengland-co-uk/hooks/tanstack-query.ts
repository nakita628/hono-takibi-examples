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

export function getVVersionKey() {
  return ['v{version}'] as const
}

export function getVVersionAreasQueryKey(
  args: InferRequestType<(typeof client)['v:version']['areas']['$get']>,
) {
  return ['v:version', '/v:version/areas', args] as const
}

export function getVVersionAreasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['v:version']['areas']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v:version']['areas']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['v:version']['areas']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVVersionAreasQueryKey>
  >({
    queryKey: getVVersionAreasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['v:version'].areas.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVVersionAreas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['v:version']['areas']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v:version']['areas']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['v:version']['areas']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVVersionAreasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVVersionAreasQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVVersionAreas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['v:version']['areas']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v:version']['areas']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['v:version']['areas']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVVersionAreasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVVersionAreasQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVVersionAreasAreaIdsQueryKey(
  args: InferRequestType<(typeof client)['v:version']['areas'][':area_Ids']['$get']>,
) {
  return ['v:version', '/v:version/areas/:area_Ids', args] as const
}

export function getVVersionAreasAreaIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v:version']['areas'][':area_Ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v:version']['areas'][':area_Ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v:version']['areas'][':area_Ids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVVersionAreasAreaIdsQueryKey>
  >({
    queryKey: getVVersionAreasAreaIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['v:version'].areas[':area_Ids'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVVersionAreasAreaIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v:version']['areas'][':area_Ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v:version']['areas'][':area_Ids']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v:version']['areas'][':area_Ids']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVVersionAreasAreaIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVVersionAreasAreaIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVVersionAreasAreaIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v:version']['areas'][':area_Ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v:version']['areas'][':area_Ids']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v:version']['areas'][':area_Ids']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVVersionAreasAreaIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVVersionAreasAreaIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVVersionQualityDailyQueryKey(
  args: InferRequestType<(typeof client)['v:version']['quality']['daily']['$get']>,
) {
  return ['v:version', '/v:version/quality/daily', args] as const
}

export function getVVersionQualityDailyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v:version']['quality']['daily']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v:version']['quality']['daily']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v:version']['quality']['daily']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVVersionQualityDailyQueryKey>
  >({
    queryKey: getVVersionQualityDailyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['v:version'].quality.daily.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVVersionQualityDaily<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v:version']['quality']['daily']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v:version']['quality']['daily']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v:version']['quality']['daily']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVVersionQualityDailyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVVersionQualityDailyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVVersionQualityDaily<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v:version']['quality']['daily']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v:version']['quality']['daily']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v:version']['quality']['daily']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVVersionQualityDailyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVVersionQualityDailyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVVersionQualityOverallQueryKey(
  args: InferRequestType<(typeof client)['v:version']['quality']['overall']['$get']>,
) {
  return ['v:version', '/v:version/quality/overall', args] as const
}

export function getVVersionQualityOverallQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v:version']['quality']['overall']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v:version']['quality']['overall']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v:version']['quality']['overall']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVVersionQualityOverallQueryKey>
  >({
    queryKey: getVVersionQualityOverallQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['v:version'].quality.overall.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVVersionQualityOverall<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v:version']['quality']['overall']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v:version']['quality']['overall']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v:version']['quality']['overall']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVVersionQualityOverallQueryKey>
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
      ...getVVersionQualityOverallQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVVersionQualityOverall<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v:version']['quality']['overall']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v:version']['quality']['overall']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v:version']['quality']['overall']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVVersionQualityOverallQueryKey>
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
      ...getVVersionQualityOverallQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getVVersionReportsReportTypeQueryKey(
  args: InferRequestType<(typeof client)['v:version']['reports'][':report_type']['$get']>,
) {
  return ['v:version', '/v:version/reports/:report_type', args] as const
}

export function getVVersionReportsReportTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v:version']['reports'][':report_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v:version']['reports'][':report_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v:version']['reports'][':report_type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVVersionReportsReportTypeQueryKey>
  >({
    queryKey: getVVersionReportsReportTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['v:version'].reports[':report_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVVersionReportsReportType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v:version']['reports'][':report_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v:version']['reports'][':report_type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v:version']['reports'][':report_type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVVersionReportsReportTypeQueryKey>
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
      ...getVVersionReportsReportTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVVersionReportsReportType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v:version']['reports'][':report_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v:version']['reports'][':report_type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v:version']['reports'][':report_type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVVersionReportsReportTypeQueryKey>
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
      ...getVVersionReportsReportTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getVVersionReportsStartDateToEndDateReportTypeQueryKey(
  args: InferRequestType<
    (typeof client)['v:version']['reports'][':start_date']['to'][':end_date'][':report_type']['$get']
  >,
) {
  return ['v:version', '/v:version/reports/:start_date/to/:end_date/:report_type', args] as const
}

export function getVVersionReportsStartDateToEndDateReportTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['v:version']['reports'][':start_date']['to'][':end_date'][':report_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['v:version']['reports'][':start_date']['to'][':end_date'][':report_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v:version']['reports'][':start_date']['to'][':end_date'][':report_type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVVersionReportsStartDateToEndDateReportTypeQueryKey>
  >({
    queryKey: getVVersionReportsStartDateToEndDateReportTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['v:version'].reports[':start_date'].to[':end_date'][':report_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVVersionReportsStartDateToEndDateReportType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['v:version']['reports'][':start_date']['to'][':end_date'][':report_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['v:version']['reports'][':start_date']['to'][':end_date'][':report_type']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['v:version']['reports'][':start_date']['to'][':end_date'][':report_type']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVVersionReportsStartDateToEndDateReportTypeQueryKey>
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
      ...getVVersionReportsStartDateToEndDateReportTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVVersionReportsStartDateToEndDateReportType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['v:version']['reports'][':start_date']['to'][':end_date'][':report_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['v:version']['reports'][':start_date']['to'][':end_date'][':report_type']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['v:version']['reports'][':start_date']['to'][':end_date'][':report_type']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVVersionReportsStartDateToEndDateReportTypeQueryKey>
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
      ...getVVersionReportsStartDateToEndDateReportTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getVVersionSitesQueryKey(
  args: InferRequestType<(typeof client)['v:version']['sites']['$get']>,
) {
  return ['v:version', '/v:version/sites', args] as const
}

export function getVVersionSitesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['v:version']['sites']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v:version']['sites']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['v:version']['sites']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVVersionSitesQueryKey>
  >({
    queryKey: getVVersionSitesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['v:version'].sites.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVVersionSites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['v:version']['sites']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v:version']['sites']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['v:version']['sites']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVVersionSitesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVVersionSitesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVVersionSites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['v:version']['sites']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v:version']['sites']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['v:version']['sites']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVVersionSitesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVVersionSitesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVVersionSitesSiteIdsQueryKey(
  args: InferRequestType<(typeof client)['v:version']['sites'][':site_Ids']['$get']>,
) {
  return ['v:version', '/v:version/sites/:site_Ids', args] as const
}

export function getVVersionSitesSiteIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v:version']['sites'][':site_Ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v:version']['sites'][':site_Ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v:version']['sites'][':site_Ids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVVersionSitesSiteIdsQueryKey>
  >({
    queryKey: getVVersionSitesSiteIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['v:version'].sites[':site_Ids'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVVersionSitesSiteIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v:version']['sites'][':site_Ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v:version']['sites'][':site_Ids']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v:version']['sites'][':site_Ids']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVVersionSitesSiteIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVVersionSitesSiteIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVVersionSitesSiteIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v:version']['sites'][':site_Ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v:version']['sites'][':site_Ids']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v:version']['sites'][':site_Ids']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVVersionSitesSiteIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVVersionSitesSiteIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVVersionSitetypesQueryKey(
  args: InferRequestType<(typeof client)['v:version']['sitetypes']['$get']>,
) {
  return ['v:version', '/v:version/sitetypes', args] as const
}

export function getVVersionSitetypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['v:version']['sitetypes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v:version']['sitetypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['v:version']['sitetypes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVVersionSitetypesQueryKey>
  >({
    queryKey: getVVersionSitetypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['v:version'].sitetypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVVersionSitetypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['v:version']['sitetypes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v:version']['sitetypes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v:version']['sitetypes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVVersionSitetypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVVersionSitetypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVVersionSitetypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['v:version']['sitetypes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v:version']['sitetypes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v:version']['sitetypes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVVersionSitetypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVVersionSitetypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVVersionSitetypesSiteTypeIdSitesQueryKey(
  args: InferRequestType<
    (typeof client)['v:version']['sitetypes'][':siteType_Id']['sites']['$get']
  >,
) {
  return ['v:version', '/v:version/sitetypes/:siteType_Id/sites', args] as const
}

export function getVVersionSitetypesSiteTypeIdSitesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['v:version']['sitetypes'][':siteType_Id']['sites']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['v:version']['sitetypes'][':siteType_Id']['sites']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v:version']['sitetypes'][':siteType_Id']['sites']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVVersionSitetypesSiteTypeIdSitesQueryKey>
  >({
    queryKey: getVVersionSitetypesSiteTypeIdSitesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['v:version'].sitetypes[':siteType_Id'].sites.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVVersionSitetypesSiteTypeIdSites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['v:version']['sitetypes'][':siteType_Id']['sites']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['v:version']['sitetypes'][':siteType_Id']['sites']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['v:version']['sitetypes'][':siteType_Id']['sites']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVVersionSitetypesSiteTypeIdSitesQueryKey>
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
      ...getVVersionSitetypesSiteTypeIdSitesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVVersionSitetypesSiteTypeIdSites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['v:version']['sitetypes'][':siteType_Id']['sites']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['v:version']['sitetypes'][':siteType_Id']['sites']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['v:version']['sitetypes'][':siteType_Id']['sites']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVVersionSitetypesSiteTypeIdSitesQueryKey>
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
      ...getVVersionSitetypesSiteTypeIdSitesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
