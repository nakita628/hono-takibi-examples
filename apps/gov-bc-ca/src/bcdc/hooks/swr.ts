import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActionKey() {
  return ['action'] as const
}

export function getGetActionOrganizationActivityListKey(
  args: InferRequestType<typeof client.action.organization_activity_list.$get>,
) {
  return ['action', '/action/organization_activity_list', args] as const
}

export function useGetActionOrganizationActivityList<TError = unknown>(
  args: InferRequestType<typeof client.action.organization_activity_list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_activity_list.$get>>
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
        ? getGetActionOrganizationActivityListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_activity_list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.organization_activity_list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionOrganizationActivityList<TError = unknown>(
  args: InferRequestType<typeof client.action.organization_activity_list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_activity_list.$get>>
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
        ? getGetActionOrganizationActivityListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_activity_list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.organization_activity_list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionOrganizationActivityListHtmlKey(
  args: InferRequestType<typeof client.action.organization_activity_list_html.$get>,
) {
  return ['action', '/action/organization_activity_list_html', args] as const
}

export function useGetActionOrganizationActivityListHtml<TError = unknown>(
  args: InferRequestType<typeof client.action.organization_activity_list_html.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_activity_list_html.$get>>
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
        ? getGetActionOrganizationActivityListHtmlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_activity_list_html.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.action.organization_activity_list_html.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionOrganizationActivityListHtml<TError = unknown>(
  args: InferRequestType<typeof client.action.organization_activity_list_html.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_activity_list_html.$get>>
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
        ? getGetActionOrganizationActivityListHtmlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_activity_list_html.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.action.organization_activity_list_html.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionOrganizationAutocompleteKey(
  args: InferRequestType<typeof client.action.organization_autocomplete.$get>,
) {
  return ['action', '/action/organization_autocomplete', args] as const
}

export function useGetActionOrganizationAutocomplete<TError = unknown>(
  args: InferRequestType<typeof client.action.organization_autocomplete.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_autocomplete.$get>>
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
        ? getGetActionOrganizationAutocompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_autocomplete.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.organization_autocomplete.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionOrganizationAutocomplete<TError = unknown>(
  args: InferRequestType<typeof client.action.organization_autocomplete.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_autocomplete.$get>>
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
        ? getGetActionOrganizationAutocompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_autocomplete.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.organization_autocomplete.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionOrganizationFollowerCountKey(
  args: InferRequestType<typeof client.action.organization_follower_count.$get>,
) {
  return ['action', '/action/organization_follower_count', args] as const
}

export function useGetActionOrganizationFollowerCount<TError = unknown>(
  args: InferRequestType<typeof client.action.organization_follower_count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_follower_count.$get>>
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
        ? getGetActionOrganizationFollowerCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_follower_count.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.action.organization_follower_count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionOrganizationFollowerCount<TError = unknown>(
  args: InferRequestType<typeof client.action.organization_follower_count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_follower_count.$get>>
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
        ? getGetActionOrganizationFollowerCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_follower_count.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.action.organization_follower_count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionOrganizationFollowerListKey(
  args: InferRequestType<typeof client.action.organization_follower_list.$get>,
) {
  return ['action', '/action/organization_follower_list', args] as const
}

export function useGetActionOrganizationFollowerList<TError = unknown>(
  args: InferRequestType<typeof client.action.organization_follower_list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_follower_list.$get>>
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
        ? getGetActionOrganizationFollowerListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_follower_list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.organization_follower_list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionOrganizationFollowerList<TError = unknown>(
  args: InferRequestType<typeof client.action.organization_follower_list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_follower_list.$get>>
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
        ? getGetActionOrganizationFollowerListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_follower_list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.organization_follower_list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionOrganizationListKey(
  args: InferRequestType<typeof client.action.organization_list.$get>,
) {
  return ['action', '/action/organization_list', args] as const
}

export function useGetActionOrganizationList<TError = unknown>(
  args: InferRequestType<typeof client.action.organization_list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.organization_list.$get>>>
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
        ? getGetActionOrganizationListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.organization_list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.organization_list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionOrganizationList<TError = unknown>(
  args: InferRequestType<typeof client.action.organization_list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.organization_list.$get>>>
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
        ? getGetActionOrganizationListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.organization_list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.organization_list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionOrganizationListForUserKey(
  args: InferRequestType<typeof client.action.organization_list_for_user.$get>,
) {
  return ['action', '/action/organization_list_for_user', args] as const
}

export function useGetActionOrganizationListForUser<TError = unknown>(
  args: InferRequestType<typeof client.action.organization_list_for_user.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_list_for_user.$get>>
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
        ? getGetActionOrganizationListForUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_list_for_user.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.organization_list_for_user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionOrganizationListForUser<TError = unknown>(
  args: InferRequestType<typeof client.action.organization_list_for_user.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_list_for_user.$get>>
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
        ? getGetActionOrganizationListForUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_list_for_user.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.organization_list_for_user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionOrganizationRevisionListKey(
  args: InferRequestType<typeof client.action.organization_revision_list.$get>,
) {
  return ['action', '/action/organization_revision_list', args] as const
}

export function useGetActionOrganizationRevisionList<TError = unknown>(
  args: InferRequestType<typeof client.action.organization_revision_list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_revision_list.$get>>
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
        ? getGetActionOrganizationRevisionListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_revision_list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.organization_revision_list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionOrganizationRevisionList<TError = unknown>(
  args: InferRequestType<typeof client.action.organization_revision_list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_revision_list.$get>>
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
        ? getGetActionOrganizationRevisionListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.organization_revision_list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.organization_revision_list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionOrganizationShowKey(
  args: InferRequestType<typeof client.action.organization_show.$get>,
) {
  return ['action', '/action/organization_show', args] as const
}

export function useGetActionOrganizationShow<TError = unknown>(
  args: InferRequestType<typeof client.action.organization_show.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.organization_show.$get>>>
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
        ? getGetActionOrganizationShowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.organization_show.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.organization_show.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionOrganizationShow<TError = unknown>(
  args: InferRequestType<typeof client.action.organization_show.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.organization_show.$get>>>
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
        ? getGetActionOrganizationShowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.organization_show.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.organization_show.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionPackageActivityListKey(
  args: InferRequestType<typeof client.action.package_activity_list.$get>,
) {
  return ['action', '/action/package_activity_list', args] as const
}

export function useGetActionPackageActivityList<TError = unknown>(
  args: InferRequestType<typeof client.action.package_activity_list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.package_activity_list.$get>>>
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
        ? getGetActionPackageActivityListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.package_activity_list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.package_activity_list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPackageActivityList<TError = unknown>(
  args: InferRequestType<typeof client.action.package_activity_list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.package_activity_list.$get>>>
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
        ? getGetActionPackageActivityListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.package_activity_list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.package_activity_list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionPackageActivityListHtmlKey(
  args: InferRequestType<typeof client.action.package_activity_list_html.$get>,
) {
  return ['action', '/action/package_activity_list_html', args] as const
}

export function useGetActionPackageActivityListHtml<TError = unknown>(
  args: InferRequestType<typeof client.action.package_activity_list_html.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.package_activity_list_html.$get>>
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
        ? getGetActionPackageActivityListHtmlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.package_activity_list_html.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.package_activity_list_html.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPackageActivityListHtml<TError = unknown>(
  args: InferRequestType<typeof client.action.package_activity_list_html.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.package_activity_list_html.$get>>
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
        ? getGetActionPackageActivityListHtmlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.package_activity_list_html.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.package_activity_list_html.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionPackageAutocompleteKey(
  args: InferRequestType<typeof client.action.package_autocomplete.$get>,
) {
  return ['action', '/action/package_autocomplete', args] as const
}

export function useGetActionPackageAutocomplete<TError = unknown>(
  args: InferRequestType<typeof client.action.package_autocomplete.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.package_autocomplete.$get>>>
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
        ? getGetActionPackageAutocompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.package_autocomplete.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.package_autocomplete.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPackageAutocomplete<TError = unknown>(
  args: InferRequestType<typeof client.action.package_autocomplete.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.package_autocomplete.$get>>>
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
        ? getGetActionPackageAutocompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.package_autocomplete.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.package_autocomplete.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionPackageListKey(
  args: InferRequestType<typeof client.action.package_list.$get>,
) {
  return ['action', '/action/package_list', args] as const
}

export function useGetActionPackageList<TError = unknown>(
  args: InferRequestType<typeof client.action.package_list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.package_list.$get>>>
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
        ? getGetActionPackageListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.package_list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.package_list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPackageList<TError = unknown>(
  args: InferRequestType<typeof client.action.package_list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.package_list.$get>>>
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
        ? getGetActionPackageListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.package_list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.package_list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionPackageRelationshipsListKey(
  args: InferRequestType<typeof client.action.package_relationships_list.$get>,
) {
  return ['action', '/action/package_relationships_list', args] as const
}

export function useGetActionPackageRelationshipsList<TError = unknown>(
  args: InferRequestType<typeof client.action.package_relationships_list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.package_relationships_list.$get>>
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
        ? getGetActionPackageRelationshipsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.package_relationships_list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.package_relationships_list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPackageRelationshipsList<TError = unknown>(
  args: InferRequestType<typeof client.action.package_relationships_list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.package_relationships_list.$get>>
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
        ? getGetActionPackageRelationshipsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.action.package_relationships_list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.package_relationships_list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionPackageRevisionListKey(
  args: InferRequestType<typeof client.action.package_revision_list.$get>,
) {
  return ['action', '/action/package_revision_list', args] as const
}

export function useGetActionPackageRevisionList<TError = unknown>(
  args: InferRequestType<typeof client.action.package_revision_list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.package_revision_list.$get>>>
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
        ? getGetActionPackageRevisionListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.package_revision_list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.package_revision_list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPackageRevisionList<TError = unknown>(
  args: InferRequestType<typeof client.action.package_revision_list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.package_revision_list.$get>>>
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
        ? getGetActionPackageRevisionListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.package_revision_list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.package_revision_list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionPackageSearchKey(
  args: InferRequestType<typeof client.action.package_search.$get>,
) {
  return ['action', '/action/package_search', args] as const
}

export function useGetActionPackageSearch<TError = unknown>(
  args: InferRequestType<typeof client.action.package_search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.package_search.$get>>>
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
        ? getGetActionPackageSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.package_search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.package_search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPackageSearch<TError = unknown>(
  args: InferRequestType<typeof client.action.package_search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.package_search.$get>>>
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
        ? getGetActionPackageSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.package_search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.package_search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionPackageShowKey(
  args: InferRequestType<typeof client.action.package_show.$get>,
) {
  return ['action', '/action/package_show', args] as const
}

export function useGetActionPackageShow<TError = unknown>(
  args: InferRequestType<typeof client.action.package_show.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.package_show.$get>>>
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
        ? getGetActionPackageShowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.package_show.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.package_show.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPackageShow<TError = unknown>(
  args: InferRequestType<typeof client.action.package_show.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.package_show.$get>>>
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
        ? getGetActionPackageShowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.package_show.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.package_show.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionRelatedListKey(
  args: InferRequestType<typeof client.action.related_list.$get>,
) {
  return ['action', '/action/related_list', args] as const
}

export function useGetActionRelatedList<TError = unknown>(
  args: InferRequestType<typeof client.action.related_list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.related_list.$get>>>
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
        ? getGetActionRelatedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.related_list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.related_list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRelatedList<TError = unknown>(
  args: InferRequestType<typeof client.action.related_list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.related_list.$get>>>
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
        ? getGetActionRelatedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.related_list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.related_list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionResourceSearchKey(
  args: InferRequestType<typeof client.action.resource_search.$get>,
) {
  return ['action', '/action/resource_search', args] as const
}

export function useGetActionResourceSearch<TError = unknown>(
  args: InferRequestType<typeof client.action.resource_search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.resource_search.$get>>>
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
        ? getGetActionResourceSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.resource_search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.resource_search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionResourceSearch<TError = unknown>(
  args: InferRequestType<typeof client.action.resource_search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.resource_search.$get>>>
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
        ? getGetActionResourceSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.resource_search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.resource_search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionResourceShowKey(
  args: InferRequestType<typeof client.action.resource_show.$get>,
) {
  return ['action', '/action/resource_show', args] as const
}

export function useGetActionResourceShow<TError = unknown>(
  args: InferRequestType<typeof client.action.resource_show.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.resource_show.$get>>>
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
        ? getGetActionResourceShowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.resource_show.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.resource_show.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionResourceShow<TError = unknown>(
  args: InferRequestType<typeof client.action.resource_show.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.resource_show.$get>>>
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
        ? getGetActionResourceShowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.action.resource_show.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.resource_show.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionStatusShowKey() {
  return ['action', '/action/status_show'] as const
}

export function useGetActionStatusShow<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.status_show.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionStatusShowKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.status_show.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.status_show.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionStatusShow<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.status_show.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionStatusShowKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.status_show.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.status_show.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionTagListKey(args: InferRequestType<typeof client.action.tag_list.$get>) {
  return ['action', '/action/tag_list', args] as const
}

export function useGetActionTagList<TError = unknown>(
  args: InferRequestType<typeof client.action.tag_list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.tag_list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionTagListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.tag_list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.tag_list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionTagList<TError = unknown>(
  args: InferRequestType<typeof client.action.tag_list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.tag_list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionTagListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.tag_list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action.tag_list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
