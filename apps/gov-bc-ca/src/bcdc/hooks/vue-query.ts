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

export function getActionKey() {
  return ['action'] as const
}

export function getActionOrganizationActivityListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.organization_activity_list.$get>>,
) {
  return ['action', '/action/organization_activity_list', toValue(args)] as const
}

export function getActionOrganizationActivityListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.organization_activity_list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionOrganizationActivityListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.action.organization_activity_list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionOrganizationActivityList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.action.organization_activity_list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.organization_activity_list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.organization_activity_list.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.organization_activity_list.$get>>
              >
            >
          >,
          ReturnType<typeof getActionOrganizationActivityListQueryKey>
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
          Awaited<ReturnType<typeof client.action.organization_activity_list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionOrganizationActivityListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionOrganizationActivityListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.action.organization_activity_list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionOrganizationActivityListHtmlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.action.organization_activity_list_html.$get>
  >,
) {
  return ['action', '/action/organization_activity_list_html', toValue(args)] as const
}

export function getActionOrganizationActivityListHtmlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.action.organization_activity_list_html.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionOrganizationActivityListHtmlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.action.organization_activity_list_html.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionOrganizationActivityListHtml<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.action.organization_activity_list_html.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.action.organization_activity_list_html.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.organization_activity_list_html.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.organization_activity_list_html.$get>>
              >
            >
          >,
          ReturnType<typeof getActionOrganizationActivityListHtmlQueryKey>
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
          Awaited<ReturnType<typeof client.action.organization_activity_list_html.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionOrganizationActivityListHtmlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionOrganizationActivityListHtmlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.action.organization_activity_list_html.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionOrganizationAutocompleteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.organization_autocomplete.$get>>,
) {
  return ['action', '/action/organization_autocomplete', toValue(args)] as const
}

export function getActionOrganizationAutocompleteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.organization_autocomplete.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionOrganizationAutocompleteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.action.organization_autocomplete.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionOrganizationAutocomplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.action.organization_autocomplete.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.organization_autocomplete.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.organization_autocomplete.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.organization_autocomplete.$get>>
              >
            >
          >,
          ReturnType<typeof getActionOrganizationAutocompleteQueryKey>
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
          Awaited<ReturnType<typeof client.action.organization_autocomplete.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionOrganizationAutocompleteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionOrganizationAutocompleteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.action.organization_autocomplete.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionOrganizationFollowerCountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.organization_follower_count.$get>>,
) {
  return ['action', '/action/organization_follower_count', toValue(args)] as const
}

export function getActionOrganizationFollowerCountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.organization_follower_count.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionOrganizationFollowerCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.action.organization_follower_count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionOrganizationFollowerCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.action.organization_follower_count.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.organization_follower_count.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.organization_follower_count.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.organization_follower_count.$get>>
              >
            >
          >,
          ReturnType<typeof getActionOrganizationFollowerCountQueryKey>
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
          Awaited<ReturnType<typeof client.action.organization_follower_count.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionOrganizationFollowerCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionOrganizationFollowerCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.action.organization_follower_count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionOrganizationFollowerListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.organization_follower_list.$get>>,
) {
  return ['action', '/action/organization_follower_list', toValue(args)] as const
}

export function getActionOrganizationFollowerListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.organization_follower_list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionOrganizationFollowerListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.action.organization_follower_list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionOrganizationFollowerList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.action.organization_follower_list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.organization_follower_list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.organization_follower_list.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.organization_follower_list.$get>>
              >
            >
          >,
          ReturnType<typeof getActionOrganizationFollowerListQueryKey>
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
          Awaited<ReturnType<typeof client.action.organization_follower_list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionOrganizationFollowerListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionOrganizationFollowerListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.action.organization_follower_list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionOrganizationListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.organization_list.$get>>,
) {
  return ['action', '/action/organization_list', toValue(args)] as const
}

export function getActionOrganizationListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.organization_list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionOrganizationListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.action.organization_list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionOrganizationList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.action.organization_list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.organization_list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.organization_list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.organization_list.$get>>>
            >
          >,
          ReturnType<typeof getActionOrganizationListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.action.organization_list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionOrganizationListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionOrganizationListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.action.organization_list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionOrganizationListForUserQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.organization_list_for_user.$get>>,
) {
  return ['action', '/action/organization_list_for_user', toValue(args)] as const
}

export function getActionOrganizationListForUserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.organization_list_for_user.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionOrganizationListForUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.action.organization_list_for_user.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionOrganizationListForUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.action.organization_list_for_user.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.organization_list_for_user.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.organization_list_for_user.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.organization_list_for_user.$get>>
              >
            >
          >,
          ReturnType<typeof getActionOrganizationListForUserQueryKey>
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
          Awaited<ReturnType<typeof client.action.organization_list_for_user.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionOrganizationListForUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionOrganizationListForUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.action.organization_list_for_user.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionOrganizationRevisionListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.organization_revision_list.$get>>,
) {
  return ['action', '/action/organization_revision_list', toValue(args)] as const
}

export function getActionOrganizationRevisionListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.organization_revision_list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionOrganizationRevisionListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.action.organization_revision_list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionOrganizationRevisionList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.action.organization_revision_list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.organization_revision_list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.organization_revision_list.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.organization_revision_list.$get>>
              >
            >
          >,
          ReturnType<typeof getActionOrganizationRevisionListQueryKey>
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
          Awaited<ReturnType<typeof client.action.organization_revision_list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionOrganizationRevisionListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionOrganizationRevisionListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.action.organization_revision_list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionOrganizationShowQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.organization_show.$get>>,
) {
  return ['action', '/action/organization_show', toValue(args)] as const
}

export function getActionOrganizationShowQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.organization_show.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionOrganizationShowQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.action.organization_show.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionOrganizationShow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.action.organization_show.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.organization_show.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.organization_show.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.organization_show.$get>>>
            >
          >,
          ReturnType<typeof getActionOrganizationShowQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.action.organization_show.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionOrganizationShowQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionOrganizationShowQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.action.organization_show.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionPackageActivityListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.package_activity_list.$get>>,
) {
  return ['action', '/action/package_activity_list', toValue(args)] as const
}

export function getActionPackageActivityListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.package_activity_list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionPackageActivityListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.action.package_activity_list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionPackageActivityList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.action.package_activity_list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.package_activity_list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.package_activity_list.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.package_activity_list.$get>>
              >
            >
          >,
          ReturnType<typeof getActionPackageActivityListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.action.package_activity_list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPackageActivityListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionPackageActivityListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.action.package_activity_list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionPackageActivityListHtmlQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.package_activity_list_html.$get>>,
) {
  return ['action', '/action/package_activity_list_html', toValue(args)] as const
}

export function getActionPackageActivityListHtmlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.package_activity_list_html.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionPackageActivityListHtmlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.action.package_activity_list_html.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionPackageActivityListHtml<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.action.package_activity_list_html.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.package_activity_list_html.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.package_activity_list_html.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.package_activity_list_html.$get>>
              >
            >
          >,
          ReturnType<typeof getActionPackageActivityListHtmlQueryKey>
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
          Awaited<ReturnType<typeof client.action.package_activity_list_html.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPackageActivityListHtmlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionPackageActivityListHtmlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.action.package_activity_list_html.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionPackageAutocompleteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.package_autocomplete.$get>>,
) {
  return ['action', '/action/package_autocomplete', toValue(args)] as const
}

export function getActionPackageAutocompleteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.package_autocomplete.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionPackageAutocompleteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.action.package_autocomplete.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionPackageAutocomplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.action.package_autocomplete.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.package_autocomplete.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.package_autocomplete.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.package_autocomplete.$get>>
              >
            >
          >,
          ReturnType<typeof getActionPackageAutocompleteQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.action.package_autocomplete.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPackageAutocompleteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionPackageAutocompleteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.action.package_autocomplete.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionPackageListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.package_list.$get>>,
) {
  return ['action', '/action/package_list', toValue(args)] as const
}

export function getActionPackageListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.package_list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionPackageListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.action.package_list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionPackageList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.package_list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.package_list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.package_list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.package_list.$get>>>
            >
          >,
          ReturnType<typeof getActionPackageListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.package_list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActionPackageListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionPackageListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.action.package_list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionPackageRelationshipsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.package_relationships_list.$get>>,
) {
  return ['action', '/action/package_relationships_list', toValue(args)] as const
}

export function getActionPackageRelationshipsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.package_relationships_list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionPackageRelationshipsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.action.package_relationships_list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionPackageRelationshipsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.action.package_relationships_list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.package_relationships_list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.package_relationships_list.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.package_relationships_list.$get>>
              >
            >
          >,
          ReturnType<typeof getActionPackageRelationshipsListQueryKey>
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
          Awaited<ReturnType<typeof client.action.package_relationships_list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPackageRelationshipsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionPackageRelationshipsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.action.package_relationships_list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionPackageRevisionListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.package_revision_list.$get>>,
) {
  return ['action', '/action/package_revision_list', toValue(args)] as const
}

export function getActionPackageRevisionListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.package_revision_list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionPackageRevisionListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.action.package_revision_list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionPackageRevisionList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.action.package_revision_list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.package_revision_list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.package_revision_list.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.action.package_revision_list.$get>>
              >
            >
          >,
          ReturnType<typeof getActionPackageRevisionListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.action.package_revision_list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPackageRevisionListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionPackageRevisionListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.action.package_revision_list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionPackageSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.package_search.$get>>,
) {
  return ['action', '/action/package_search', toValue(args)] as const
}

export function getActionPackageSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.package_search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionPackageSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.action.package_search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionPackageSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.package_search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.package_search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.package_search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.package_search.$get>>>
            >
          >,
          ReturnType<typeof getActionPackageSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.action.package_search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPackageSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionPackageSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.action.package_search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionPackageShowQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.package_show.$get>>,
) {
  return ['action', '/action/package_show', toValue(args)] as const
}

export function getActionPackageShowQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.package_show.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionPackageShowQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.action.package_show.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionPackageShow<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.package_show.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.package_show.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.package_show.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.package_show.$get>>>
            >
          >,
          ReturnType<typeof getActionPackageShowQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.package_show.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActionPackageShowQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionPackageShowQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.action.package_show.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionRelatedListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.related_list.$get>>,
) {
  return ['action', '/action/related_list', toValue(args)] as const
}

export function getActionRelatedListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.related_list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRelatedListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.action.related_list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRelatedList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.related_list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.related_list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.related_list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.related_list.$get>>>
            >
          >,
          ReturnType<typeof getActionRelatedListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.related_list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActionRelatedListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRelatedListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.action.related_list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionResourceSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.resource_search.$get>>,
) {
  return ['action', '/action/resource_search', toValue(args)] as const
}

export function getActionResourceSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.resource_search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionResourceSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.action.resource_search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionResourceSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.resource_search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.resource_search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.resource_search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.resource_search.$get>>>
            >
          >,
          ReturnType<typeof getActionResourceSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.action.resource_search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionResourceSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionResourceSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.action.resource_search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionResourceShowQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.resource_show.$get>>,
) {
  return ['action', '/action/resource_show', toValue(args)] as const
}

export function getActionResourceShowQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.resource_show.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionResourceShowQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.action.resource_show.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionResourceShow<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.resource_show.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.resource_show.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.resource_show.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.resource_show.$get>>>
            >
          >,
          ReturnType<typeof getActionResourceShowQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.resource_show.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActionResourceShowQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionResourceShowQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.action.resource_show.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionStatusShowQueryKey() {
  return ['action', '/action/status_show'] as const
}

export function getActionStatusShowQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getActionStatusShowQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.action.status_show.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionStatusShow<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.status_show.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.status_show.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.status_show.$get>>>
            >
          >,
          ReturnType<typeof getActionStatusShowQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.status_show.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActionStatusShowQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getActionStatusShowQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.action.status_show.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionTagListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.tag_list.$get>>,
) {
  return ['action', '/action/tag_list', toValue(args)] as const
}

export function getActionTagListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.tag_list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionTagListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.action.tag_list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionTagList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.tag_list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.action.tag_list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.tag_list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.tag_list.$get>>>
            >
          >,
          ReturnType<typeof getActionTagListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.tag_list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActionTagListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionTagListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.action.tag_list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
