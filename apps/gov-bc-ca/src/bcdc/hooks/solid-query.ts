import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActionKey() {
  return ['action'] as const
}

export function getActionOrganizationActivityListQueryKey(
  args: InferRequestType<typeof client.action.organization_activity_list.$get>,
) {
  return ['action', '/action/organization_activity_list', args] as const
}

export function getActionOrganizationActivityListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.action.organization_activity_list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.action.organization_activity_list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.action.organization_activity_list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionOrganizationActivityListQueryKey>
  >({
    queryKey: getActionOrganizationActivityListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.action.organization_activity_list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionOrganizationActivityList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.action.organization_activity_list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.action.organization_activity_list.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.organization_activity_list.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionOrganizationActivityListQueryKey>
        >
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
      ...getActionOrganizationActivityListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getActionOrganizationActivityListHtmlQueryKey(
  args: InferRequestType<typeof client.action.organization_activity_list_html.$get>,
) {
  return ['action', '/action/organization_activity_list_html', args] as const
}

export function getActionOrganizationActivityListHtmlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.action.organization_activity_list_html.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.action.organization_activity_list_html.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.action.organization_activity_list_html.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionOrganizationActivityListHtmlQueryKey>
  >({
    queryKey: getActionOrganizationActivityListHtmlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.action.organization_activity_list_html.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionOrganizationActivityListHtml<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.action.organization_activity_list_html.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.action.organization_activity_list_html.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.organization_activity_list_html.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionOrganizationActivityListHtmlQueryKey>
        >
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
      ...getActionOrganizationActivityListHtmlQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getActionOrganizationAutocompleteQueryKey(
  args: InferRequestType<typeof client.action.organization_autocomplete.$get>,
) {
  return ['action', '/action/organization_autocomplete', args] as const
}

export function getActionOrganizationAutocompleteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.action.organization_autocomplete.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.action.organization_autocomplete.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.action.organization_autocomplete.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionOrganizationAutocompleteQueryKey>
  >({
    queryKey: getActionOrganizationAutocompleteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.action.organization_autocomplete.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionOrganizationAutocomplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.action.organization_autocomplete.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.action.organization_autocomplete.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.organization_autocomplete.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionOrganizationAutocompleteQueryKey>
        >
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
      ...getActionOrganizationAutocompleteQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getActionOrganizationFollowerCountQueryKey(
  args: InferRequestType<typeof client.action.organization_follower_count.$get>,
) {
  return ['action', '/action/organization_follower_count', args] as const
}

export function getActionOrganizationFollowerCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.action.organization_follower_count.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.action.organization_follower_count.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.action.organization_follower_count.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionOrganizationFollowerCountQueryKey>
  >({
    queryKey: getActionOrganizationFollowerCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.action.organization_follower_count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionOrganizationFollowerCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.action.organization_follower_count.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.action.organization_follower_count.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.organization_follower_count.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionOrganizationFollowerCountQueryKey>
        >
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
      ...getActionOrganizationFollowerCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getActionOrganizationFollowerListQueryKey(
  args: InferRequestType<typeof client.action.organization_follower_list.$get>,
) {
  return ['action', '/action/organization_follower_list', args] as const
}

export function getActionOrganizationFollowerListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.action.organization_follower_list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.action.organization_follower_list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.action.organization_follower_list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionOrganizationFollowerListQueryKey>
  >({
    queryKey: getActionOrganizationFollowerListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.action.organization_follower_list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionOrganizationFollowerList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.action.organization_follower_list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.action.organization_follower_list.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.organization_follower_list.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionOrganizationFollowerListQueryKey>
        >
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
      ...getActionOrganizationFollowerListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getActionOrganizationListQueryKey(
  args: InferRequestType<typeof client.action.organization_list.$get>,
) {
  return ['action', '/action/organization_list', args] as const
}

export function getActionOrganizationListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.action.organization_list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.action.organization_list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.action.organization_list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionOrganizationListQueryKey>
  >({
    queryKey: getActionOrganizationListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.action.organization_list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionOrganizationList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.action.organization_list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.action.organization_list.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.organization_list.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionOrganizationListQueryKey>
        >
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
      ...getActionOrganizationListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getActionOrganizationListForUserQueryKey(
  args: InferRequestType<typeof client.action.organization_list_for_user.$get>,
) {
  return ['action', '/action/organization_list_for_user', args] as const
}

export function getActionOrganizationListForUserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.action.organization_list_for_user.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.action.organization_list_for_user.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.action.organization_list_for_user.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionOrganizationListForUserQueryKey>
  >({
    queryKey: getActionOrganizationListForUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.action.organization_list_for_user.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionOrganizationListForUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.action.organization_list_for_user.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.action.organization_list_for_user.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.organization_list_for_user.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionOrganizationListForUserQueryKey>
        >
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
      ...getActionOrganizationListForUserQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getActionOrganizationRevisionListQueryKey(
  args: InferRequestType<typeof client.action.organization_revision_list.$get>,
) {
  return ['action', '/action/organization_revision_list', args] as const
}

export function getActionOrganizationRevisionListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.action.organization_revision_list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.action.organization_revision_list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.action.organization_revision_list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionOrganizationRevisionListQueryKey>
  >({
    queryKey: getActionOrganizationRevisionListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.action.organization_revision_list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionOrganizationRevisionList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.action.organization_revision_list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.action.organization_revision_list.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.organization_revision_list.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionOrganizationRevisionListQueryKey>
        >
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
      ...getActionOrganizationRevisionListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getActionOrganizationShowQueryKey(
  args: InferRequestType<typeof client.action.organization_show.$get>,
) {
  return ['action', '/action/organization_show', args] as const
}

export function getActionOrganizationShowQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.action.organization_show.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.action.organization_show.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.action.organization_show.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionOrganizationShowQueryKey>
  >({
    queryKey: getActionOrganizationShowQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.action.organization_show.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionOrganizationShow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.action.organization_show.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.action.organization_show.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.organization_show.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionOrganizationShowQueryKey>
        >
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
      ...getActionOrganizationShowQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getActionPackageActivityListQueryKey(
  args: InferRequestType<typeof client.action.package_activity_list.$get>,
) {
  return ['action', '/action/package_activity_list', args] as const
}

export function getActionPackageActivityListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.action.package_activity_list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.action.package_activity_list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.action.package_activity_list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPackageActivityListQueryKey>
  >({
    queryKey: getActionPackageActivityListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.action.package_activity_list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionPackageActivityList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.action.package_activity_list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.action.package_activity_list.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.package_activity_list.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionPackageActivityListQueryKey>
        >
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
      ...getActionPackageActivityListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getActionPackageActivityListHtmlQueryKey(
  args: InferRequestType<typeof client.action.package_activity_list_html.$get>,
) {
  return ['action', '/action/package_activity_list_html', args] as const
}

export function getActionPackageActivityListHtmlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.action.package_activity_list_html.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.action.package_activity_list_html.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.action.package_activity_list_html.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPackageActivityListHtmlQueryKey>
  >({
    queryKey: getActionPackageActivityListHtmlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.action.package_activity_list_html.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionPackageActivityListHtml<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.action.package_activity_list_html.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.action.package_activity_list_html.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.package_activity_list_html.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionPackageActivityListHtmlQueryKey>
        >
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
      ...getActionPackageActivityListHtmlQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getActionPackageAutocompleteQueryKey(
  args: InferRequestType<typeof client.action.package_autocomplete.$get>,
) {
  return ['action', '/action/package_autocomplete', args] as const
}

export function getActionPackageAutocompleteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.action.package_autocomplete.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.action.package_autocomplete.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.action.package_autocomplete.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPackageAutocompleteQueryKey>
  >({
    queryKey: getActionPackageAutocompleteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.action.package_autocomplete.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionPackageAutocomplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.action.package_autocomplete.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.action.package_autocomplete.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.package_autocomplete.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionPackageAutocompleteQueryKey>
        >
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
      ...getActionPackageAutocompleteQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getActionPackageListQueryKey(
  args: InferRequestType<typeof client.action.package_list.$get>,
) {
  return ['action', '/action/package_list', args] as const
}

export function getActionPackageListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.package_list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.action.package_list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.package_list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActionPackageListQueryKey>
  >({
    queryKey: getActionPackageListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.action.package_list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createActionPackageList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.package_list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.action.package_list.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.package_list.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionPackageListQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionPackageListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getActionPackageRelationshipsListQueryKey(
  args: InferRequestType<typeof client.action.package_relationships_list.$get>,
) {
  return ['action', '/action/package_relationships_list', args] as const
}

export function getActionPackageRelationshipsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.action.package_relationships_list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.action.package_relationships_list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.action.package_relationships_list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPackageRelationshipsListQueryKey>
  >({
    queryKey: getActionPackageRelationshipsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.action.package_relationships_list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionPackageRelationshipsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.action.package_relationships_list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.action.package_relationships_list.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.package_relationships_list.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionPackageRelationshipsListQueryKey>
        >
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
      ...getActionPackageRelationshipsListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getActionPackageRevisionListQueryKey(
  args: InferRequestType<typeof client.action.package_revision_list.$get>,
) {
  return ['action', '/action/package_revision_list', args] as const
}

export function getActionPackageRevisionListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.action.package_revision_list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.action.package_revision_list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.action.package_revision_list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPackageRevisionListQueryKey>
  >({
    queryKey: getActionPackageRevisionListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.action.package_revision_list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionPackageRevisionList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.action.package_revision_list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.action.package_revision_list.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.package_revision_list.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionPackageRevisionListQueryKey>
        >
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
      ...getActionPackageRevisionListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getActionPackageSearchQueryKey(
  args: InferRequestType<typeof client.action.package_search.$get>,
) {
  return ['action', '/action/package_search', args] as const
}

export function getActionPackageSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.package_search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.action.package_search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.action.package_search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPackageSearchQueryKey>
  >({
    queryKey: getActionPackageSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.action.package_search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createActionPackageSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.package_search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.action.package_search.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.package_search.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionPackageSearchQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionPackageSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getActionPackageShowQueryKey(
  args: InferRequestType<typeof client.action.package_show.$get>,
) {
  return ['action', '/action/package_show', args] as const
}

export function getActionPackageShowQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.package_show.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.action.package_show.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.package_show.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActionPackageShowQueryKey>
  >({
    queryKey: getActionPackageShowQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.action.package_show.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createActionPackageShow<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.package_show.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.action.package_show.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.package_show.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionPackageShowQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionPackageShowQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getActionRelatedListQueryKey(
  args: InferRequestType<typeof client.action.related_list.$get>,
) {
  return ['action', '/action/related_list', args] as const
}

export function getActionRelatedListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.related_list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.action.related_list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.related_list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActionRelatedListQueryKey>
  >({
    queryKey: getActionRelatedListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.action.related_list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createActionRelatedList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.related_list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.action.related_list.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.related_list.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionRelatedListQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionRelatedListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getActionResourceSearchQueryKey(
  args: InferRequestType<typeof client.action.resource_search.$get>,
) {
  return ['action', '/action/resource_search', args] as const
}

export function getActionResourceSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.resource_search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.action.resource_search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.action.resource_search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionResourceSearchQueryKey>
  >({
    queryKey: getActionResourceSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.action.resource_search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionResourceSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.resource_search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.action.resource_search.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.resource_search.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionResourceSearchQueryKey>
        >
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
      ...getActionResourceSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getActionResourceShowQueryKey(
  args: InferRequestType<typeof client.action.resource_show.$get>,
) {
  return ['action', '/action/resource_show', args] as const
}

export function getActionResourceShowQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.resource_show.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.action.resource_show.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.resource_show.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActionResourceShowQueryKey>
  >({
    queryKey: getActionResourceShowQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.action.resource_show.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createActionResourceShow<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.resource_show.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.action.resource_show.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.resource_show.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionResourceShowQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionResourceShowQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getActionStatusShowQueryKey() {
  return ['action', '/action/status_show'] as const
}

export function getActionStatusShowQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.status_show.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.status_show.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActionStatusShowQueryKey>
  >({
    queryKey: getActionStatusShowQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.action.status_show.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionStatusShow<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.status_show.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.status_show.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionStatusShowQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionStatusShowQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getActionTagListQueryKey(
  args: InferRequestType<typeof client.action.tag_list.$get>,
) {
  return ['action', '/action/tag_list', args] as const
}

export function getActionTagListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.tag_list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.action.tag_list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.tag_list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActionTagListQueryKey>
  >({
    queryKey: getActionTagListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.action.tag_list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createActionTagList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.tag_list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.action.tag_list.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.tag_list.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionTagListQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionTagListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
