import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getVVersionKey() {
  return ['v{version}'] as const
}

export function getGetVVersionAreasKey(
  args: InferRequestType<(typeof client)['v{version}']['areas']['$get']>,
) {
  return ['v{version}', '/v{version}/areas', args] as const
}

export function useGetVVersionAreas<TError = unknown>(
  args: InferRequestType<(typeof client)['v{version}']['areas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['v{version}']['areas']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVVersionAreasKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['v{version}']['areas']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v{version}'].areas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVVersionAreas<TError = unknown>(
  args: InferRequestType<(typeof client)['v{version}']['areas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['v{version}']['areas']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVVersionAreasKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['v{version}']['areas']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v{version}'].areas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVVersionAreasAreaIdsKey(
  args: InferRequestType<(typeof client)['v{version}']['areas'][':area_Ids']['$get']>,
) {
  return ['v{version}', '/v{version}/areas/:area_Ids', args] as const
}

export function useGetVVersionAreasAreaIds<TError = unknown>(
  args: InferRequestType<(typeof client)['v{version}']['areas'][':area_Ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v{version}']['areas'][':area_Ids']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVVersionAreasAreaIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v{version}']['areas'][':area_Ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v{version}'].areas[':area_Ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVVersionAreasAreaIds<TError = unknown>(
  args: InferRequestType<(typeof client)['v{version}']['areas'][':area_Ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v{version}']['areas'][':area_Ids']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVVersionAreasAreaIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v{version}']['areas'][':area_Ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v{version}'].areas[':area_Ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVVersionQualityDailyKey(
  args: InferRequestType<(typeof client)['v{version}']['quality']['daily']['$get']>,
) {
  return ['v{version}', '/v{version}/quality/daily', args] as const
}

export function useGetVVersionQualityDaily<TError = unknown>(
  args: InferRequestType<(typeof client)['v{version}']['quality']['daily']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v{version}']['quality']['daily']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVVersionQualityDailyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v{version}']['quality']['daily']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v{version}'].quality.daily.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVVersionQualityDaily<TError = unknown>(
  args: InferRequestType<(typeof client)['v{version}']['quality']['daily']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v{version}']['quality']['daily']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVVersionQualityDailyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v{version}']['quality']['daily']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v{version}'].quality.daily.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVVersionQualityOverallKey(
  args: InferRequestType<(typeof client)['v{version}']['quality']['overall']['$get']>,
) {
  return ['v{version}', '/v{version}/quality/overall', args] as const
}

export function useGetVVersionQualityOverall<TError = unknown>(
  args: InferRequestType<(typeof client)['v{version}']['quality']['overall']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v{version}']['quality']['overall']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVVersionQualityOverallKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v{version}']['quality']['overall']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v{version}'].quality.overall.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVVersionQualityOverall<TError = unknown>(
  args: InferRequestType<(typeof client)['v{version}']['quality']['overall']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v{version}']['quality']['overall']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVVersionQualityOverallKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v{version}']['quality']['overall']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v{version}'].quality.overall.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVVersionReportsReportTypeKey(
  args: InferRequestType<(typeof client)['v{version}']['reports'][':report_type']['$get']>,
) {
  return ['v{version}', '/v{version}/reports/:report_type', args] as const
}

export function useGetVVersionReportsReportType<TError = unknown>(
  args: InferRequestType<(typeof client)['v{version}']['reports'][':report_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v{version}']['reports'][':report_type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVVersionReportsReportTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v{version}']['reports'][':report_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v{version}'].reports[':report_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVVersionReportsReportType<TError = unknown>(
  args: InferRequestType<(typeof client)['v{version}']['reports'][':report_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v{version}']['reports'][':report_type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVVersionReportsReportTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v{version}']['reports'][':report_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v{version}'].reports[':report_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVVersionReportsStartDateToEndDateReportTypeKey(
  args: InferRequestType<
    (typeof client)['v{version}']['reports'][':start_date']['to'][':end_date'][':report_type']['$get']
  >,
) {
  return ['v{version}', '/v{version}/reports/:start_date/to/:end_date/:report_type', args] as const
}

export function useGetVVersionReportsStartDateToEndDateReportType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v{version}']['reports'][':start_date']['to'][':end_date'][':report_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVVersionReportsStartDateToEndDateReportTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v{version}'].reports[':start_date'].to[':end_date'][':report_type'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVVersionReportsStartDateToEndDateReportType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v{version}']['reports'][':start_date']['to'][':end_date'][':report_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVVersionReportsStartDateToEndDateReportTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v{version}'].reports[':start_date'].to[':end_date'][':report_type'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVVersionSitesKey(
  args: InferRequestType<(typeof client)['v{version}']['sites']['$get']>,
) {
  return ['v{version}', '/v{version}/sites', args] as const
}

export function useGetVVersionSites<TError = unknown>(
  args: InferRequestType<(typeof client)['v{version}']['sites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['v{version}']['sites']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVVersionSitesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['v{version}']['sites']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v{version}'].sites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVVersionSites<TError = unknown>(
  args: InferRequestType<(typeof client)['v{version}']['sites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['v{version}']['sites']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVVersionSitesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['v{version}']['sites']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v{version}'].sites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVVersionSitesSiteIdsKey(
  args: InferRequestType<(typeof client)['v{version}']['sites'][':site_Ids']['$get']>,
) {
  return ['v{version}', '/v{version}/sites/:site_Ids', args] as const
}

export function useGetVVersionSitesSiteIds<TError = unknown>(
  args: InferRequestType<(typeof client)['v{version}']['sites'][':site_Ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v{version}']['sites'][':site_Ids']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVVersionSitesSiteIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v{version}']['sites'][':site_Ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v{version}'].sites[':site_Ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVVersionSitesSiteIds<TError = unknown>(
  args: InferRequestType<(typeof client)['v{version}']['sites'][':site_Ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v{version}']['sites'][':site_Ids']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVVersionSitesSiteIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v{version}']['sites'][':site_Ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v{version}'].sites[':site_Ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVVersionSitetypesKey(
  args: InferRequestType<(typeof client)['v{version}']['sitetypes']['$get']>,
) {
  return ['v{version}', '/v{version}/sitetypes', args] as const
}

export function useGetVVersionSitetypes<TError = unknown>(
  args: InferRequestType<(typeof client)['v{version}']['sitetypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v{version}']['sitetypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVVersionSitetypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v{version}']['sitetypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v{version}'].sitetypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVVersionSitetypes<TError = unknown>(
  args: InferRequestType<(typeof client)['v{version}']['sitetypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v{version}']['sitetypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVVersionSitetypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v{version}']['sitetypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v{version}'].sitetypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVVersionSitetypesSiteTypeIdSitesKey(
  args: InferRequestType<
    (typeof client)['v{version}']['sitetypes'][':siteType_Id']['sites']['$get']
  >,
) {
  return ['v{version}', '/v{version}/sitetypes/:siteType_Id/sites', args] as const
}

export function useGetVVersionSitetypesSiteTypeIdSites<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v{version}']['sitetypes'][':siteType_Id']['sites']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVVersionSitetypesSiteTypeIdSitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v{version}'].sitetypes[':siteType_Id'].sites.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVVersionSitetypesSiteTypeIdSites<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v{version}']['sitetypes'][':siteType_Id']['sites']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVVersionSitetypesSiteTypeIdSitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v{version}'].sitetypes[':siteType_Id'].sites.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
