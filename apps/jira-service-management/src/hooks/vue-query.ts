import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRestKey() {
  return ['rest'] as const
}

export function getRestServicedeskapiAssetsWorkspaceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rest.servicedeskapi.assets.workspace.$get>>,
) {
  return ['rest', '/rest/servicedeskapi/assets/workspace', toValue(args)] as const
}

export function getRestServicedeskapiAssetsWorkspaceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rest.servicedeskapi.assets.workspace.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestServicedeskapiAssetsWorkspaceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.assets.workspace.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiAssetsWorkspace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.rest.servicedeskapi.assets.workspace.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rest.servicedeskapi.assets.workspace.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.rest.servicedeskapi.assets.workspace.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.rest.servicedeskapi.assets.workspace.$get>>
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiAssetsWorkspaceQueryKey>
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
          Awaited<ReturnType<typeof client.rest.servicedeskapi.assets.workspace.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiAssetsWorkspaceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestServicedeskapiAssetsWorkspaceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.assets.workspace.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRestServicedeskapiCustomerMutationKey() {
  return ['rest', '/rest/servicedeskapi/customer', 'POST'] as const
}

export function getPostRestServicedeskapiCustomerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.customer.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.rest.servicedeskapi.customer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRestServicedeskapiCustomerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rest.servicedeskapi.customer.$post>) {
      return parseResponse(client.rest.servicedeskapi.customer.$post(args, options))
    },
  })
}

export function usePostRestServicedeskapiCustomer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.rest.servicedeskapi.customer.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.rest.servicedeskapi.customer.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRestServicedeskapiCustomerMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRestServicedeskapiCustomerSkipPermissionCheckMutationKey() {
  return ['rest', '/rest/servicedeskapi/customer/skip-permission-check', 'POST'] as const
}

export function getPostRestServicedeskapiCustomerSkipPermissionCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.servicedeskapi.customer)['skip-permission-check']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.customer)['skip-permission-check']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRestServicedeskapiCustomerSkipPermissionCheckMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.customer)['skip-permission-check']['$post']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.customer['skip-permission-check'].$post(args, options),
      )
    },
  })
}

export function usePostRestServicedeskapiCustomerSkipPermissionCheck<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.rest.servicedeskapi.customer)['skip-permission-check']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.customer)['skip-permission-check']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRestServicedeskapiCustomerSkipPermissionCheckMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutRestServicedeskapiCustomerUserAccountIdRevokePortalOnlyAccessMutationKey() {
  return [
    'rest',
    '/rest/servicedeskapi/customer/user/:accountId/revoke-portal-only-access',
    'PUT',
  ] as const
}

export function getPutRestServicedeskapiCustomerUserAccountIdRevokePortalOnlyAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.servicedeskapi.customer.user)[':accountId']['revoke-portal-only-access']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.customer.user)[':accountId']['revoke-portal-only-access']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRestServicedeskapiCustomerUserAccountIdRevokePortalOnlyAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.customer.user)[':accountId']['revoke-portal-only-access']['$put']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.customer.user[':accountId']['revoke-portal-only-access'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutRestServicedeskapiCustomerUserAccountIdRevokePortalOnlyAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.rest.servicedeskapi.customer.user)[':accountId']['revoke-portal-only-access']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.customer.user)[':accountId']['revoke-portal-only-access']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutRestServicedeskapiCustomerUserAccountIdRevokePortalOnlyAccessMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRestServicedeskapiInfoQueryKey() {
  return ['rest', '/rest/servicedeskapi/info'] as const
}

export function getRestServicedeskapiInfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRestServicedeskapiInfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.info.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.info.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.info.$get>>>
            >
          >,
          ReturnType<typeof getRestServicedeskapiInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.info.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRestServicedeskapiInfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.info.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestServicedeskapiInsightWorkspaceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.rest.servicedeskapi.insight.workspace.$get>
  >,
) {
  return ['rest', '/rest/servicedeskapi/insight/workspace', toValue(args)] as const
}

export function getRestServicedeskapiInsightWorkspaceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.rest.servicedeskapi.insight.workspace.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestServicedeskapiInsightWorkspaceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.insight.workspace.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiInsightWorkspace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.rest.servicedeskapi.insight.workspace.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.rest.servicedeskapi.insight.workspace.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.rest.servicedeskapi.insight.workspace.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.rest.servicedeskapi.insight.workspace.$get>>
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiInsightWorkspaceQueryKey>
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
          Awaited<ReturnType<typeof client.rest.servicedeskapi.insight.workspace.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiInsightWorkspaceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestServicedeskapiInsightWorkspaceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.insight.workspace.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestServicedeskapiKnowledgebaseArticleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.rest.servicedeskapi.knowledgebase.article.$get>
  >,
) {
  return ['rest', '/rest/servicedeskapi/knowledgebase/article', toValue(args)] as const
}

export function getRestServicedeskapiKnowledgebaseArticleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.rest.servicedeskapi.knowledgebase.article.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestServicedeskapiKnowledgebaseArticleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.knowledgebase.article.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiKnowledgebaseArticle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.rest.servicedeskapi.knowledgebase.article.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.rest.servicedeskapi.knowledgebase.article.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.rest.servicedeskapi.knowledgebase.article.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.rest.servicedeskapi.knowledgebase.article.$get>>
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiKnowledgebaseArticleQueryKey>
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
          Awaited<ReturnType<typeof client.rest.servicedeskapi.knowledgebase.article.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiKnowledgebaseArticleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestServicedeskapiKnowledgebaseArticleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.knowledgebase.article.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestServicedeskapiKnowledgebaseArticleViewPageIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.knowledgebase.article.view)[':pageId']['$get']
    >
  >,
) {
  return ['rest', '/rest/servicedeskapi/knowledgebase/article/view/:pageId', toValue(args)] as const
}

export function getRestServicedeskapiKnowledgebaseArticleViewPageIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.knowledgebase.article.view)[':pageId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestServicedeskapiKnowledgebaseArticleViewPageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.knowledgebase.article.view[':pageId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiKnowledgebaseArticleViewPageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.knowledgebase.article.view)[':pageId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.knowledgebase.article.view)[':pageId']['$get']
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
                    (typeof client.rest.servicedeskapi.knowledgebase.article.view)[':pageId']['$get']
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
                    (typeof client.rest.servicedeskapi.knowledgebase.article.view)[':pageId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiKnowledgebaseArticleViewPageIdQueryKey>
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
              (typeof client.rest.servicedeskapi.knowledgebase.article.view)[':pageId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiKnowledgebaseArticleViewPageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestServicedeskapiKnowledgebaseArticleViewPageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.knowledgebase.article.view[':pageId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestServicedeskapiOrganizationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rest.servicedeskapi.organization.$get>>,
) {
  return ['rest', '/rest/servicedeskapi/organization', toValue(args)] as const
}

export function getRestServicedeskapiOrganizationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rest.servicedeskapi.organization.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestServicedeskapiOrganizationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.organization.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.organization.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rest.servicedeskapi.organization.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.rest.servicedeskapi.organization.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.rest.servicedeskapi.organization.$get>>
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiOrganizationQueryKey>
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
          Awaited<ReturnType<typeof client.rest.servicedeskapi.organization.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiOrganizationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestServicedeskapiOrganizationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.organization.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRestServicedeskapiOrganizationMutationKey() {
  return ['rest', '/rest/servicedeskapi/organization', 'POST'] as const
}

export function getPostRestServicedeskapiOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.rest.servicedeskapi.organization.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.rest.servicedeskapi.organization.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRestServicedeskapiOrganizationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rest.servicedeskapi.organization.$post>) {
      return parseResponse(client.rest.servicedeskapi.organization.$post(args, options))
    },
  })
}

export function usePostRestServicedeskapiOrganization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.rest.servicedeskapi.organization.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.rest.servicedeskapi.organization.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRestServicedeskapiOrganizationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRestServicedeskapiOrganizationOrganizationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.rest.servicedeskapi.organization)[':organizationId']['$get']>
  >,
) {
  return ['rest', '/rest/servicedeskapi/organization/:organizationId', toValue(args)] as const
}

export function getRestServicedeskapiOrganizationOrganizationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.rest.servicedeskapi.organization)[':organizationId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestServicedeskapiOrganizationOrganizationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.organization[':organizationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiOrganizationOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.rest.servicedeskapi.organization)[':organizationId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.rest.servicedeskapi.organization)[':organizationId']['$get']>
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
                    (typeof client.rest.servicedeskapi.organization)[':organizationId']['$get']
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
                    (typeof client.rest.servicedeskapi.organization)[':organizationId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiOrganizationOrganizationIdQueryKey>
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
            ReturnType<(typeof client.rest.servicedeskapi.organization)[':organizationId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiOrganizationOrganizationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestServicedeskapiOrganizationOrganizationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.organization[':organizationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteRestServicedeskapiOrganizationOrganizationIdMutationKey() {
  return ['rest', '/rest/servicedeskapi/organization/:organizationId', 'DELETE'] as const
}

export function getDeleteRestServicedeskapiOrganizationOrganizationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.servicedeskapi.organization)[':organizationId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.organization)[':organizationId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRestServicedeskapiOrganizationOrganizationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.organization)[':organizationId']['$delete']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.organization[':organizationId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteRestServicedeskapiOrganizationOrganizationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.rest.servicedeskapi.organization)[':organizationId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.organization)[':organizationId']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRestServicedeskapiOrganizationOrganizationIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRestServicedeskapiOrganizationOrganizationIdPropertyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.organization)[':organizationId']['property']['$get']
    >
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/organization/:organizationId/property',
    toValue(args),
  ] as const
}

export function getRestServicedeskapiOrganizationOrganizationIdPropertyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.organization)[':organizationId']['property']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestServicedeskapiOrganizationOrganizationIdPropertyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.organization[':organizationId'].property.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiOrganizationOrganizationIdProperty<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.organization)[':organizationId']['property']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.organization)[':organizationId']['property']['$get']
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
                    (typeof client.rest.servicedeskapi.organization)[':organizationId']['property']['$get']
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
                    (typeof client.rest.servicedeskapi.organization)[':organizationId']['property']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiOrganizationOrganizationIdPropertyQueryKey>
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
              (typeof client.rest.servicedeskapi.organization)[':organizationId']['property']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiOrganizationOrganizationIdPropertyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestServicedeskapiOrganizationOrganizationIdPropertyQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.organization[':organizationId'].property.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$get']
    >
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/organization/:organizationId/property/:propertyKey',
    toValue(args),
  ] as const
}

export function getRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.organization[':organizationId'].property[':propertyKey'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$get']
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
                    (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$get']
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
                    (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyQueryKey
          >
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
              (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.organization[':organizationId'].property[':propertyKey'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyMutationKey() {
  return [
    'rest',
    '/rest/servicedeskapi/organization/:organizationId/property/:propertyKey',
    'PUT',
  ] as const
}

export function getPutRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$put']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.organization[':organizationId'].property[':propertyKey'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyMutationKey() {
  return [
    'rest',
    '/rest/servicedeskapi/organization/:organizationId/property/:propertyKey',
    'DELETE',
  ] as const
}

export function getDeleteRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$delete']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.organization[':organizationId'].property[':propertyKey'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRestServicedeskapiOrganizationOrganizationIdUserQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$get']
    >
  >,
) {
  return ['rest', '/rest/servicedeskapi/organization/:organizationId/user', toValue(args)] as const
}

export function getRestServicedeskapiOrganizationOrganizationIdUserQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestServicedeskapiOrganizationOrganizationIdUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.organization[':organizationId'].user.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiOrganizationOrganizationIdUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$get']
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
                    (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$get']
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
                    (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiOrganizationOrganizationIdUserQueryKey>
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
              (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiOrganizationOrganizationIdUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestServicedeskapiOrganizationOrganizationIdUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.organization[':organizationId'].user.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRestServicedeskapiOrganizationOrganizationIdUserMutationKey() {
  return ['rest', '/rest/servicedeskapi/organization/:organizationId/user', 'POST'] as const
}

export function getPostRestServicedeskapiOrganizationOrganizationIdUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRestServicedeskapiOrganizationOrganizationIdUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$post']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.organization[':organizationId'].user.$post(args, options),
      )
    },
  })
}

export function usePostRestServicedeskapiOrganizationOrganizationIdUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRestServicedeskapiOrganizationOrganizationIdUserMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteRestServicedeskapiOrganizationOrganizationIdUserMutationKey() {
  return ['rest', '/rest/servicedeskapi/organization/:organizationId/user', 'DELETE'] as const
}

export function getDeleteRestServicedeskapiOrganizationOrganizationIdUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRestServicedeskapiOrganizationOrganizationIdUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$delete']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.organization[':organizationId'].user.$delete(args, options),
      )
    },
  })
}

export function useDeleteRestServicedeskapiOrganizationOrganizationIdUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRestServicedeskapiOrganizationOrganizationIdUserMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRestServicedeskapiRequestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rest.servicedeskapi.request.$get>>,
) {
  return ['rest', '/rest/servicedeskapi/request', toValue(args)] as const
}

export function getRestServicedeskapiRequestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rest.servicedeskapi.request.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestServicedeskapiRequestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.request.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiRequest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.request.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rest.servicedeskapi.request.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.rest.servicedeskapi.request.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.rest.servicedeskapi.request.$get>>
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiRequestQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.request.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiRequestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestServicedeskapiRequestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.request.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRestServicedeskapiRequestMutationKey() {
  return ['rest', '/rest/servicedeskapi/request', 'POST'] as const
}

export function getPostRestServicedeskapiRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.request.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.rest.servicedeskapi.request.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRestServicedeskapiRequestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rest.servicedeskapi.request.$post>) {
      return parseResponse(client.rest.servicedeskapi.request.$post(args, options))
    },
  })
}

export function usePostRestServicedeskapiRequest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.rest.servicedeskapi.request.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.rest.servicedeskapi.request.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRestServicedeskapiRequestMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRestServicedeskapiRequestValidateMutationKey() {
  return ['rest', '/rest/servicedeskapi/request/validate', 'POST'] as const
}

export function getPostRestServicedeskapiRequestValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.rest.servicedeskapi.request.validate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.rest.servicedeskapi.request.validate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRestServicedeskapiRequestValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.rest.servicedeskapi.request.validate.$post>,
    ) {
      return parseResponse(client.rest.servicedeskapi.request.validate.$post(args, options))
    },
  })
}

export function usePostRestServicedeskapiRequestValidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.rest.servicedeskapi.request.validate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.rest.servicedeskapi.request.validate.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRestServicedeskapiRequestValidateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRestServicedeskapiRequestIssueIdOrKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['$get']>
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey', toValue(args)] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestServicedeskapiRequestIssueIdOrKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiRequestIssueIdOrKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['$get']>
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
                  ReturnType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestServicedeskapiRequestIssueIdOrKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.request[':issueIdOrKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestServicedeskapiRequestIssueIdOrKeyApprovalQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval']['$get']
    >
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/approval', toValue(args)] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeyApprovalQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestServicedeskapiRequestIssueIdOrKeyApprovalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].approval.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiRequestIssueIdOrKeyApproval<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyApprovalQueryKey>
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
              (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyApprovalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestServicedeskapiRequestIssueIdOrKeyApprovalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.request[':issueIdOrKey'].approval.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval'][':approvalId']['$get']
    >
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/request/:issueIdOrKey/approval/:approvalId',
    toValue(args),
  ] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval'][':approvalId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].approval[':approvalId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval'][':approvalId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval'][':approvalId']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval'][':approvalId']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval'][':approvalId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdQueryKey>
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
              (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval'][':approvalId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.request[':issueIdOrKey'].approval[':approvalId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdMutationKey() {
  return [
    'rest',
    '/rest/servicedeskapi/request/:issueIdOrKey/approval/:approvalId',
    'POST',
  ] as const
}

export function getPostRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval'][':approvalId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval'][':approvalId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval'][':approvalId']['$post']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].approval[':approvalId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval'][':approvalId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval'][':approvalId']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRestServicedeskapiRequestIssueIdOrKeyAttachmentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment']['$get']
    >
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/attachment', toValue(args)] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeyAttachmentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestServicedeskapiRequestIssueIdOrKeyAttachmentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].attachment.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiRequestIssueIdOrKeyAttachment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyAttachmentQueryKey>
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
              (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyAttachmentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestServicedeskapiRequestIssueIdOrKeyAttachmentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.request[':issueIdOrKey'].attachment.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRestServicedeskapiRequestIssueIdOrKeyAttachmentMutationKey() {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/attachment', 'POST'] as const
}

export function getPostRestServicedeskapiRequestIssueIdOrKeyAttachmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRestServicedeskapiRequestIssueIdOrKeyAttachmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment']['$post']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].attachment.$post(args, options),
      )
    },
  })
}

export function usePostRestServicedeskapiRequestIssueIdOrKeyAttachment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRestServicedeskapiRequestIssueIdOrKeyAttachmentMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['$get']
    >
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/request/:issueIdOrKey/attachment/:attachmentId',
    toValue(args),
  ] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].attachment[':attachmentId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdQueryKey>
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
              (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.request[':issueIdOrKey'].attachment[':attachmentId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdThumbnailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['thumbnail']['$get']
    >
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/request/:issueIdOrKey/attachment/:attachmentId/thumbnail',
    toValue(args),
  ] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdThumbnailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['thumbnail']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdThumbnailQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].attachment[
          ':attachmentId'
        ].thumbnail.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['thumbnail']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['thumbnail']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['thumbnail']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['thumbnail']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdThumbnailQueryKey
          >
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
              (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['thumbnail']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdThumbnailQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdThumbnailQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.request[':issueIdOrKey'].attachment[
            ':attachmentId'
          ].thumbnail.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestServicedeskapiRequestIssueIdOrKeyCommentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment']['$get']
    >
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/comment', toValue(args)] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeyCommentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestServicedeskapiRequestIssueIdOrKeyCommentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].comment.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiRequestIssueIdOrKeyComment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyCommentQueryKey>
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
              (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyCommentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestServicedeskapiRequestIssueIdOrKeyCommentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.request[':issueIdOrKey'].comment.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRestServicedeskapiRequestIssueIdOrKeyCommentMutationKey() {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/comment', 'POST'] as const
}

export function getPostRestServicedeskapiRequestIssueIdOrKeyCommentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRestServicedeskapiRequestIssueIdOrKeyCommentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment']['$post']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].comment.$post(args, options),
      )
    },
  })
}

export function usePostRestServicedeskapiRequestIssueIdOrKeyComment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRestServicedeskapiRequestIssueIdOrKeyCommentMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['$get']
    >
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/request/:issueIdOrKey/comment/:commentId',
    toValue(args),
  ] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].comment[':commentId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRestServicedeskapiRequestIssueIdOrKeyCommentCommentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdQueryKey>
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
              (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.request[':issueIdOrKey'].comment[':commentId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdAttachmentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['attachment']['$get']
    >
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/request/:issueIdOrKey/comment/:commentId/attachment',
    toValue(args),
  ] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdAttachmentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['attachment']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdAttachmentQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].comment[':commentId'].attachment.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdAttachment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['attachment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['attachment']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['attachment']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['attachment']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdAttachmentQueryKey
          >
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
              (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['attachment']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdAttachmentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdAttachmentQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.request[':issueIdOrKey'].comment[':commentId'].attachment.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRestServicedeskapiRequestIssueIdOrKeyNotificationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$get']
    >
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/notification', toValue(args)] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeyNotificationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestServicedeskapiRequestIssueIdOrKeyNotificationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].notification.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiRequestIssueIdOrKeyNotification<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyNotificationQueryKey>
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
              (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyNotificationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestServicedeskapiRequestIssueIdOrKeyNotificationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.request[':issueIdOrKey'].notification.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRestServicedeskapiRequestIssueIdOrKeyNotificationMutationKey() {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/notification', 'PUT'] as const
}

export function getPutRestServicedeskapiRequestIssueIdOrKeyNotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRestServicedeskapiRequestIssueIdOrKeyNotificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$put']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].notification.$put(args, options),
      )
    },
  })
}

export function usePutRestServicedeskapiRequestIssueIdOrKeyNotification<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRestServicedeskapiRequestIssueIdOrKeyNotificationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteRestServicedeskapiRequestIssueIdOrKeyNotificationMutationKey() {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/notification', 'DELETE'] as const
}

export function getDeleteRestServicedeskapiRequestIssueIdOrKeyNotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRestServicedeskapiRequestIssueIdOrKeyNotificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$delete']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].notification.$delete(args, options),
      )
    },
  })
}

export function useDeleteRestServicedeskapiRequestIssueIdOrKeyNotification<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteRestServicedeskapiRequestIssueIdOrKeyNotificationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRestServicedeskapiRequestIssueIdOrKeyParticipantQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$get']
    >
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/participant', toValue(args)] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeyParticipantQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestServicedeskapiRequestIssueIdOrKeyParticipantQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].participant.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiRequestIssueIdOrKeyParticipant<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyParticipantQueryKey>
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
              (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyParticipantQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestServicedeskapiRequestIssueIdOrKeyParticipantQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.request[':issueIdOrKey'].participant.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRestServicedeskapiRequestIssueIdOrKeyParticipantMutationKey() {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/participant', 'POST'] as const
}

export function getPostRestServicedeskapiRequestIssueIdOrKeyParticipantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRestServicedeskapiRequestIssueIdOrKeyParticipantMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$post']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].participant.$post(args, options),
      )
    },
  })
}

export function usePostRestServicedeskapiRequestIssueIdOrKeyParticipant<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRestServicedeskapiRequestIssueIdOrKeyParticipantMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteRestServicedeskapiRequestIssueIdOrKeyParticipantMutationKey() {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/participant', 'DELETE'] as const
}

export function getDeleteRestServicedeskapiRequestIssueIdOrKeyParticipantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRestServicedeskapiRequestIssueIdOrKeyParticipantMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$delete']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].participant.$delete(args, options),
      )
    },
  })
}

export function useDeleteRestServicedeskapiRequestIssueIdOrKeyParticipant<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRestServicedeskapiRequestIssueIdOrKeyParticipantMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRestServicedeskapiRequestIssueIdOrKeySlaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla']['$get']>
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/sla', toValue(args)] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeySlaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestServicedeskapiRequestIssueIdOrKeySlaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].sla.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiRequestIssueIdOrKeySla<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla']['$get']>
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeySlaQueryKey>
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
            ReturnType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeySlaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestServicedeskapiRequestIssueIdOrKeySlaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.request[':issueIdOrKey'].sla.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestServicedeskapiRequestIssueIdOrKeySlaSlaMetricIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla'][':slaMetricId']['$get']
    >
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/request/:issueIdOrKey/sla/:slaMetricId',
    toValue(args),
  ] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeySlaSlaMetricIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla'][':slaMetricId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestServicedeskapiRequestIssueIdOrKeySlaSlaMetricIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].sla[':slaMetricId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRestServicedeskapiRequestIssueIdOrKeySlaSlaMetricId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla'][':slaMetricId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla'][':slaMetricId']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla'][':slaMetricId']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla'][':slaMetricId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeySlaSlaMetricIdQueryKey>
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
              (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla'][':slaMetricId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeySlaSlaMetricIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestServicedeskapiRequestIssueIdOrKeySlaSlaMetricIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.request[':issueIdOrKey'].sla[':slaMetricId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRestServicedeskapiRequestIssueIdOrKeyStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['status']['$get']>
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/status', toValue(args)] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeyStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestServicedeskapiRequestIssueIdOrKeyStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiRequestIssueIdOrKeyStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['status']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['status']['$get']>
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['status']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyStatusQueryKey>
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
              (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestServicedeskapiRequestIssueIdOrKeyStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.request[':issueIdOrKey'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestServicedeskapiRequestIssueIdOrKeyTransitionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['transition']['$get']
    >
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/transition', toValue(args)] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeyTransitionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['transition']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestServicedeskapiRequestIssueIdOrKeyTransitionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].transition.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiRequestIssueIdOrKeyTransition<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['transition']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['transition']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['transition']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['transition']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyTransitionQueryKey>
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
              (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['transition']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyTransitionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestServicedeskapiRequestIssueIdOrKeyTransitionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.request[':issueIdOrKey'].transition.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRestServicedeskapiRequestIssueIdOrKeyTransitionMutationKey() {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/transition', 'POST'] as const
}

export function getPostRestServicedeskapiRequestIssueIdOrKeyTransitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['transition']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['transition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRestServicedeskapiRequestIssueIdOrKeyTransitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['transition']['$post']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].transition.$post(args, options),
      )
    },
  })
}

export function usePostRestServicedeskapiRequestIssueIdOrKeyTransition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['transition']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['transition']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRestServicedeskapiRequestIssueIdOrKeyTransitionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRestServicedeskapiRequestRequestIdOrKeyFeedbackQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$get']
    >
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:requestIdOrKey/feedback', toValue(args)] as const
}

export function getRestServicedeskapiRequestRequestIdOrKeyFeedbackQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestServicedeskapiRequestRequestIdOrKeyFeedbackQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.request[':requestIdOrKey'].feedback.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiRequestRequestIdOrKeyFeedback<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$get']
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
                    (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiRequestRequestIdOrKeyFeedbackQueryKey>
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
              (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiRequestRequestIdOrKeyFeedbackQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestServicedeskapiRequestRequestIdOrKeyFeedbackQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.request[':requestIdOrKey'].feedback.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRestServicedeskapiRequestRequestIdOrKeyFeedbackMutationKey() {
  return ['rest', '/rest/servicedeskapi/request/:requestIdOrKey/feedback', 'POST'] as const
}

export function getPostRestServicedeskapiRequestRequestIdOrKeyFeedbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRestServicedeskapiRequestRequestIdOrKeyFeedbackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$post']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.request[':requestIdOrKey'].feedback.$post(args, options),
      )
    },
  })
}

export function usePostRestServicedeskapiRequestRequestIdOrKeyFeedback<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRestServicedeskapiRequestRequestIdOrKeyFeedbackMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteRestServicedeskapiRequestRequestIdOrKeyFeedbackMutationKey() {
  return ['rest', '/rest/servicedeskapi/request/:requestIdOrKey/feedback', 'DELETE'] as const
}

export function getDeleteRestServicedeskapiRequestRequestIdOrKeyFeedbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRestServicedeskapiRequestRequestIdOrKeyFeedbackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$delete']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.request[':requestIdOrKey'].feedback.$delete(args, options),
      )
    },
  })
}

export function useDeleteRestServicedeskapiRequestRequestIdOrKeyFeedback<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRestServicedeskapiRequestRequestIdOrKeyFeedbackMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRestServicedeskapiRequesttypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rest.servicedeskapi.requesttype.$get>>,
) {
  return ['rest', '/rest/servicedeskapi/requesttype', toValue(args)] as const
}

export function getRestServicedeskapiRequesttypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rest.servicedeskapi.requesttype.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestServicedeskapiRequesttypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.requesttype.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiRequesttype<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.requesttype.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rest.servicedeskapi.requesttype.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.rest.servicedeskapi.requesttype.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.rest.servicedeskapi.requesttype.$get>>
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiRequesttypeQueryKey>
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
          Awaited<ReturnType<typeof client.rest.servicedeskapi.requesttype.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiRequesttypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestServicedeskapiRequesttypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.requesttype.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestServicedeskapiServicedeskQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rest.servicedeskapi.servicedesk.$get>>,
) {
  return ['rest', '/rest/servicedeskapi/servicedesk', toValue(args)] as const
}

export function getRestServicedeskapiServicedeskQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rest.servicedeskapi.servicedesk.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestServicedeskapiServicedeskQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiServicedesk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.servicedesk.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rest.servicedeskapi.servicedesk.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.rest.servicedeskapi.servicedesk.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.rest.servicedeskapi.servicedesk.$get>>
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiServicedeskQueryKey>
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
          Awaited<ReturnType<typeof client.rest.servicedeskapi.servicedesk.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiServicedeskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestServicedeskapiServicedeskQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.servicedesk.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestServicedeskapiServicedeskServiceDeskIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['$get']>
  >,
) {
  return ['rest', '/rest/servicedeskapi/servicedesk/:serviceDeskId', toValue(args)] as const
}

export function getRestServicedeskapiServicedeskServiceDeskIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestServicedeskapiServicedeskServiceDeskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiServicedeskServiceDeskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['$get']>
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
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['$get']
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
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdQueryKey>
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
            ReturnType<(typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestServicedeskapiServicedeskServiceDeskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRestServicedeskapiServicedeskServiceDeskIdAttachTemporaryFileMutationKey() {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/attachTemporaryFile',
    'POST',
  ] as const
}

export function getPostRestServicedeskapiServicedeskServiceDeskIdAttachTemporaryFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['attachTemporaryFile']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['attachTemporaryFile']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRestServicedeskapiServicedeskServiceDeskIdAttachTemporaryFileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['attachTemporaryFile']['$post']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].attachTemporaryFile.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostRestServicedeskapiServicedeskServiceDeskIdAttachTemporaryFile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['attachTemporaryFile']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['attachTemporaryFile']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostRestServicedeskapiServicedeskServiceDeskIdAttachTemporaryFileMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRestServicedeskapiServicedeskServiceDeskIdCustomerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$get']
    >
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/customer',
    toValue(args),
  ] as const
}

export function getRestServicedeskapiServicedeskServiceDeskIdCustomerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestServicedeskapiServicedeskServiceDeskIdCustomerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].customer.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiServicedeskServiceDeskIdCustomer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$get']
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
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$get']
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
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdCustomerQueryKey>
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
              (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdCustomerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestServicedeskapiServicedeskServiceDeskIdCustomerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].customer.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRestServicedeskapiServicedeskServiceDeskIdCustomerMutationKey() {
  return ['rest', '/rest/servicedeskapi/servicedesk/:serviceDeskId/customer', 'POST'] as const
}

export function getPostRestServicedeskapiServicedeskServiceDeskIdCustomerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRestServicedeskapiServicedeskServiceDeskIdCustomerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$post']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].customer.$post(args, options),
      )
    },
  })
}

export function usePostRestServicedeskapiServicedeskServiceDeskIdCustomer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRestServicedeskapiServicedeskServiceDeskIdCustomerMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteRestServicedeskapiServicedeskServiceDeskIdCustomerMutationKey() {
  return ['rest', '/rest/servicedeskapi/servicedesk/:serviceDeskId/customer', 'DELETE'] as const
}

export function getDeleteRestServicedeskapiServicedeskServiceDeskIdCustomerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRestServicedeskapiServicedeskServiceDeskIdCustomerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$delete']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].customer.$delete(args, options),
      )
    },
  })
}

export function useDeleteRestServicedeskapiServicedeskServiceDeskIdCustomer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteRestServicedeskapiServicedeskServiceDeskIdCustomerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRestServicedeskapiServicedeskServiceDeskIdCustomerInviteMutationKey() {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/customer/invite',
    'POST',
  ] as const
}

export function getPostRestServicedeskapiServicedeskServiceDeskIdCustomerInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['invite']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['invite']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRestServicedeskapiServicedeskServiceDeskIdCustomerInviteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['invite']['$post']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].customer.invite.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostRestServicedeskapiServicedeskServiceDeskIdCustomerInvite<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['invite']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['invite']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostRestServicedeskapiServicedeskServiceDeskIdCustomerInviteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRestServicedeskapiServicedeskServiceDeskIdCustomerSkipPermissionCheckMutationKey() {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/customer/skip-permission-check',
    'POST',
  ] as const
}

export function getPostRestServicedeskapiServicedeskServiceDeskIdCustomerSkipPermissionCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['skip-permission-check']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['skip-permission-check']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostRestServicedeskapiServicedeskServiceDeskIdCustomerSkipPermissionCheckMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['skip-permission-check']['$post']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].customer[
          'skip-permission-check'
        ].$post(args, options),
      )
    },
  })
}

export function usePostRestServicedeskapiServicedeskServiceDeskIdCustomerSkipPermissionCheck<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['skip-permission-check']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['skip-permission-check']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostRestServicedeskapiServicedeskServiceDeskIdCustomerSkipPermissionCheckMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRestServicedeskapiServicedeskServiceDeskIdKnowledgebaseArticleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['knowledgebase']['article']['$get']
    >
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/knowledgebase/article',
    toValue(args),
  ] as const
}

export function getRestServicedeskapiServicedeskServiceDeskIdKnowledgebaseArticleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['knowledgebase']['article']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRestServicedeskapiServicedeskServiceDeskIdKnowledgebaseArticleQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].knowledgebase.article.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRestServicedeskapiServicedeskServiceDeskIdKnowledgebaseArticle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['knowledgebase']['article']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['knowledgebase']['article']['$get']
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
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['knowledgebase']['article']['$get']
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
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['knowledgebase']['article']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRestServicedeskapiServicedeskServiceDeskIdKnowledgebaseArticleQueryKey
          >
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
              (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['knowledgebase']['article']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdKnowledgebaseArticleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestServicedeskapiServicedeskServiceDeskIdKnowledgebaseArticleQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].knowledgebase.article.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRestServicedeskapiServicedeskServiceDeskIdOrganizationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$get']
    >
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/organization',
    toValue(args),
  ] as const
}

export function getRestServicedeskapiServicedeskServiceDeskIdOrganizationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRestServicedeskapiServicedeskServiceDeskIdOrganizationQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].organization.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiServicedeskServiceDeskIdOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$get']
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
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$get']
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
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdOrganizationQueryKey>
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
              (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdOrganizationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestServicedeskapiServicedeskServiceDeskIdOrganizationQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].organization.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostRestServicedeskapiServicedeskServiceDeskIdOrganizationMutationKey() {
  return ['rest', '/rest/servicedeskapi/servicedesk/:serviceDeskId/organization', 'POST'] as const
}

export function getPostRestServicedeskapiServicedeskServiceDeskIdOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRestServicedeskapiServicedeskServiceDeskIdOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$post']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].organization.$post(args, options),
      )
    },
  })
}

export function usePostRestServicedeskapiServicedeskServiceDeskIdOrganization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostRestServicedeskapiServicedeskServiceDeskIdOrganizationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteRestServicedeskapiServicedeskServiceDeskIdOrganizationMutationKey() {
  return ['rest', '/rest/servicedeskapi/servicedesk/:serviceDeskId/organization', 'DELETE'] as const
}

export function getDeleteRestServicedeskapiServicedeskServiceDeskIdOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRestServicedeskapiServicedeskServiceDeskIdOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$delete']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].organization.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteRestServicedeskapiServicedeskServiceDeskIdOrganization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteRestServicedeskapiServicedeskServiceDeskIdOrganizationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRestServicedeskapiServicedeskServiceDeskIdQueueQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue']['$get']
    >
  >,
) {
  return ['rest', '/rest/servicedeskapi/servicedesk/:serviceDeskId/queue', toValue(args)] as const
}

export function getRestServicedeskapiServicedeskServiceDeskIdQueueQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestServicedeskapiServicedeskServiceDeskIdQueueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].queue.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiServicedeskServiceDeskIdQueue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue']['$get']
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
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue']['$get']
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
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdQueueQueryKey>
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
              (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdQueueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestServicedeskapiServicedeskServiceDeskIdQueueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].queue.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['$get']
    >
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/queue/:queueId',
    toValue(args),
  ] as const
}

export function getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].queue[':queueId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRestServicedeskapiServicedeskServiceDeskIdQueueQueueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['$get']
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
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['$get']
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
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdQueryKey>
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
              (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].queue[':queueId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdIssueQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['issue']['$get']
    >
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/queue/:queueId/issue',
    toValue(args),
  ] as const
}

export function getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdIssueQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['issue']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdIssueQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].queue[':queueId'].issue.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdIssue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['issue']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['issue']['$get']
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
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['issue']['$get']
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
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['issue']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdIssueQueryKey>
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
              (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['issue']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdIssueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdIssueQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].queue[':queueId'].issue.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRestServicedeskapiServicedeskServiceDeskIdRequesttypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['$get']
    >
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttype',
    toValue(args),
  ] as const
}

export function getRestServicedeskapiServicedeskServiceDeskIdRequesttypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRestServicedeskapiServicedeskServiceDeskIdRequesttypeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiServicedeskServiceDeskIdRequesttype<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['$get']
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
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['$get']
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
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdRequesttypeQueryKey>
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
              (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdRequesttypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestServicedeskapiServicedeskServiceDeskIdRequesttypeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRestServicedeskapiServicedeskServiceDeskIdRequesttypeMutationKey() {
  return ['rest', '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttype', 'POST'] as const
}

export function getPostRestServicedeskapiServicedeskServiceDeskIdRequesttypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRestServicedeskapiServicedeskServiceDeskIdRequesttypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['$post']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype.$post(args, options),
      )
    },
  })
}

export function usePostRestServicedeskapiServicedeskServiceDeskIdRequesttype<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostRestServicedeskapiServicedeskServiceDeskIdRequesttypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRestServicedeskapiServicedeskServiceDeskIdRequesttypePermissionsCheckMutationKey() {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttype/permissions/check',
    'POST',
  ] as const
}

export function getPostRestServicedeskapiServicedeskServiceDeskIdRequesttypePermissionsCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['permissions']['check']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['permissions']['check']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostRestServicedeskapiServicedeskServiceDeskIdRequesttypePermissionsCheckMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['permissions']['check']['$post']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[
          ':serviceDeskId'
        ].requesttype.permissions.check.$post(args, options),
      )
    },
  })
}

export function usePostRestServicedeskapiServicedeskServiceDeskIdRequesttypePermissionsCheck<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['permissions']['check']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['permissions']['check']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostRestServicedeskapiServicedeskServiceDeskIdRequesttypePermissionsCheckMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['$get']
    >
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttype/:requestTypeId',
    toValue(args),
  ] as const
}

export function getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[':requestTypeId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['$get']
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
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['$get']
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
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdQueryKey
          >
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
              (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[
            ':requestTypeId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdMutationKey() {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttype/:requestTypeId',
    'DELETE',
  ] as const
}

export function getDeleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['$delete']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[
          ':requestTypeId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['field']['$get']
    >
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttype/:requestTypeId/field',
    toValue(args),
  ] as const
}

export function getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['field']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdFieldQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[
          ':requestTypeId'
        ].field.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['field']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['field']['$get']
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
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['field']['$get']
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
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['field']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdFieldQueryKey
          >
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
              (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['field']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdFieldQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdFieldQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[
            ':requestTypeId'
          ].field.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property']['$get']
    >
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttype/:requestTypeId/property',
    toValue(args),
  ] as const
}

export function getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[
          ':requestTypeId'
        ].property.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdProperty<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property']['$get']
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
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property']['$get']
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
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyQueryKey
          >
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
              (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[
            ':requestTypeId'
          ].property.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$get']
    >
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttype/:requestTypeId/property/:propertyKey',
    toValue(args),
  ] as const
}

export function getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[
          ':requestTypeId'
        ].property[':propertyKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$get']
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
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$get']
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
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyQueryKey
          >
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
              (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[
            ':requestTypeId'
          ].property[':propertyKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyMutationKey() {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttype/:requestTypeId/property/:propertyKey',
    'PUT',
  ] as const
}

export function getPutRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$put']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[
          ':requestTypeId'
        ].property[':propertyKey'].$put(args, options),
      )
    },
  })
}

export function usePutRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyMutationKey() {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttype/:requestTypeId/property/:propertyKey',
    'DELETE',
  ] as const
}

export function getDeleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$delete']
      >,
    ) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[
          ':requestTypeId'
        ].property[':propertyKey'].$delete(args, options),
      )
    },
  })
}

export function useDeleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRestServicedeskapiServicedeskServiceDeskIdRequesttypegroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttypegroup']['$get']
    >
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttypegroup',
    toValue(args),
  ] as const
}

export function getRestServicedeskapiServicedeskServiceDeskIdRequesttypegroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttypegroup']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRestServicedeskapiServicedeskServiceDeskIdRequesttypegroupQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttypegroup.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRestServicedeskapiServicedeskServiceDeskIdRequesttypegroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttypegroup']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttypegroup']['$get']
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
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttypegroup']['$get']
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
                    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttypegroup']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdRequesttypegroupQueryKey>
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
              (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttypegroup']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdRequesttypegroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestServicedeskapiServicedeskServiceDeskIdRequesttypegroupQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttypegroup.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}
