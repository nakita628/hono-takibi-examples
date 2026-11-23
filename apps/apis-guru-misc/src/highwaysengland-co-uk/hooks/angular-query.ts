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

export function injectVVersionAreas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['v:version']['areas']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['v:version']['areas']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVVersionAreasQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectVVersionAreasAreaIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v:version']['areas'][':area_Ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['v:version']['areas'][':area_Ids']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVVersionAreasAreaIdsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectVVersionQualityDaily<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v:version']['quality']['daily']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['v:version']['quality']['daily']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVVersionQualityDailyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectVVersionQualityOverall<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v:version']['quality']['overall']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['v:version']['quality']['overall']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVVersionQualityOverallQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectVVersionReportsReportType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v:version']['reports'][':report_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['v:version']['reports'][':report_type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVVersionReportsReportTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectVVersionReportsStartDateToEndDateReportType<
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
  args: () => InferRequestType<
    (typeof client)['v:version']['reports'][':start_date']['to'][':end_date'][':report_type']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVVersionReportsStartDateToEndDateReportTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectVVersionSites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['v:version']['sites']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['v:version']['sites']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVVersionSitesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectVVersionSitesSiteIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v:version']['sites'][':site_Ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['v:version']['sites'][':site_Ids']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVVersionSitesSiteIdsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectVVersionSitetypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['v:version']['sitetypes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['v:version']['sitetypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVVersionSitetypesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectVVersionSitetypesSiteTypeIdSites<
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
  args: () => InferRequestType<
    (typeof client)['v:version']['sitetypes'][':siteType_Id']['sites']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVVersionSitetypesSiteTypeIdSitesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
