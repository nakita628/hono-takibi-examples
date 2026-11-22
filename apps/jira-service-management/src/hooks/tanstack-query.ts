import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRestKey() {
  return ['rest'] as const
}

export function getRestServicedeskapiAssetsWorkspaceQueryKey(
  args: InferRequestType<typeof client.rest.servicedeskapi.assets.workspace.$get>,
) {
  return ['rest', '/rest/servicedeskapi/assets/workspace', args] as const
}

export function getRestServicedeskapiAssetsWorkspaceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.rest.servicedeskapi.assets.workspace.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rest.servicedeskapi.assets.workspace.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiAssetsWorkspaceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.assets.workspace.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<typeof client.rest.servicedeskapi.assets.workspace.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiAssetsWorkspaceQueryKey>
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
      ...getRestServicedeskapiAssetsWorkspaceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiAssetsWorkspace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.rest.servicedeskapi.assets.workspace.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rest.servicedeskapi.assets.workspace.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiAssetsWorkspaceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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

export function getRestServicedeskapiInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.info.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.info.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiInfoQueryKey>
  >({
    queryKey: getRestServicedeskapiInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.info.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestServicedeskapiInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRestServicedeskapiInfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestServicedeskapiInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRestServicedeskapiInfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRestServicedeskapiInsightWorkspaceQueryKey(
  args: InferRequestType<typeof client.rest.servicedeskapi.insight.workspace.$get>,
) {
  return ['rest', '/rest/servicedeskapi/insight/workspace', args] as const
}

export function getRestServicedeskapiInsightWorkspaceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.rest.servicedeskapi.insight.workspace.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rest.servicedeskapi.insight.workspace.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiInsightWorkspaceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.insight.workspace.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<typeof client.rest.servicedeskapi.insight.workspace.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiInsightWorkspaceQueryKey>
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
      ...getRestServicedeskapiInsightWorkspaceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiInsightWorkspace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.rest.servicedeskapi.insight.workspace.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rest.servicedeskapi.insight.workspace.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiInsightWorkspaceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestServicedeskapiKnowledgebaseArticleQueryKey(
  args: InferRequestType<typeof client.rest.servicedeskapi.knowledgebase.article.$get>,
) {
  return ['rest', '/rest/servicedeskapi/knowledgebase/article', args] as const
}

export function getRestServicedeskapiKnowledgebaseArticleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.rest.servicedeskapi.knowledgebase.article.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rest.servicedeskapi.knowledgebase.article.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiKnowledgebaseArticleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.knowledgebase.article.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<typeof client.rest.servicedeskapi.knowledgebase.article.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiKnowledgebaseArticleQueryKey>
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
      ...getRestServicedeskapiKnowledgebaseArticleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiKnowledgebaseArticle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.rest.servicedeskapi.knowledgebase.article.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rest.servicedeskapi.knowledgebase.article.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiKnowledgebaseArticleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestServicedeskapiKnowledgebaseArticleViewPageIdQueryKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.knowledgebase.article.view)[':pageId']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/knowledgebase/article/view/:pageId', args] as const
}

export function getRestServicedeskapiKnowledgebaseArticleViewPageIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.knowledgebase.article.view)[':pageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiKnowledgebaseArticleViewPageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.knowledgebase.article.view[':pageId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.knowledgebase.article.view)[':pageId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiKnowledgebaseArticleViewPageIdQueryKey>
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
      ...getRestServicedeskapiKnowledgebaseArticleViewPageIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiKnowledgebaseArticleViewPageId<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.knowledgebase.article.view)[':pageId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiKnowledgebaseArticleViewPageIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestServicedeskapiOrganizationQueryKey(
  args: InferRequestType<typeof client.rest.servicedeskapi.organization.$get>,
) {
  return ['rest', '/rest/servicedeskapi/organization', args] as const
}

export function getRestServicedeskapiOrganizationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.organization.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rest.servicedeskapi.organization.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiOrganizationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.organization.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestServicedeskapiOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.organization.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rest.servicedeskapi.organization.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiOrganizationQueryKey>
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
      ...getRestServicedeskapiOrganizationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.organization.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rest.servicedeskapi.organization.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiOrganizationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/organization/:organizationId', args] as const
}

export function getRestServicedeskapiOrganizationOrganizationIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiOrganizationOrganizationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.organization[':organizationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiOrganizationOrganizationIdQueryKey>
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
      ...getRestServicedeskapiOrganizationOrganizationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiOrganizationOrganizationId<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getRestServicedeskapiOrganizationOrganizationIdQueryKey>
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
      ...getRestServicedeskapiOrganizationOrganizationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['property']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/organization/:organizationId/property', args] as const
}

export function getRestServicedeskapiOrganizationOrganizationIdPropertyQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['property']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiOrganizationOrganizationIdPropertyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.organization[':organizationId'].property.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['property']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiOrganizationOrganizationIdPropertyQueryKey>
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
      ...getRestServicedeskapiOrganizationOrganizationIdPropertyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiOrganizationOrganizationIdProperty<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['property']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiOrganizationOrganizationIdPropertyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyQueryKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$get']
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/organization/:organizationId/property/:propertyKey',
    args,
  ] as const
}

export function getRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.organization[':organizationId'].property[':propertyKey'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyQueryKey
        >
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
      ...getRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKey<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<
          typeof getRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyQueryKey
        >
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
      ...getRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/organization/:organizationId/user', args] as const
}

export function getRestServicedeskapiOrganizationOrganizationIdUserQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiOrganizationOrganizationIdUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.organization[':organizationId'].user.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiOrganizationOrganizationIdUserQueryKey>
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
      ...getRestServicedeskapiOrganizationOrganizationIdUserQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiOrganizationOrganizationIdUser<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiOrganizationOrganizationIdUserQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<typeof client.rest.servicedeskapi.request.$get>,
) {
  return ['rest', '/rest/servicedeskapi/request', args] as const
}

export function getRestServicedeskapiRequestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.request.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rest.servicedeskapi.request.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.request.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestServicedeskapiRequestQueryKey>
  >({
    queryKey: getRestServicedeskapiRequestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.request.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestServicedeskapiRequest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.request.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rest.servicedeskapi.request.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiRequestQueryKey>
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
      ...getRestServicedeskapiRequestQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiRequest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.request.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rest.servicedeskapi.request.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.rest.servicedeskapi.request.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestServicedeskapiRequestQueryKey>
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
      ...getRestServicedeskapiRequestQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['$get']>,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey', args] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiRequestIssueIdOrKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyQueryKey>
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
      ...getRestServicedeskapiRequestIssueIdOrKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiRequestIssueIdOrKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyQueryKey>
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
      ...getRestServicedeskapiRequestIssueIdOrKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestServicedeskapiRequestIssueIdOrKeyApprovalQueryKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/approval', args] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeyApprovalQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiRequestIssueIdOrKeyApprovalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].approval.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyApprovalQueryKey>
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
      ...getRestServicedeskapiRequestIssueIdOrKeyApprovalQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiRequestIssueIdOrKeyApproval<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiRequestIssueIdOrKeyApprovalQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdQueryKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval'][':approvalId']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/approval/:approvalId', args] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval'][':approvalId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].approval[':approvalId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval'][':approvalId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdQueryKey>
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
      ...getRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalId<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval'][':approvalId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/attachment', args] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeyAttachmentQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiRequestIssueIdOrKeyAttachmentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].attachment.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyAttachmentQueryKey>
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
      ...getRestServicedeskapiRequestIssueIdOrKeyAttachmentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiRequestIssueIdOrKeyAttachment<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiRequestIssueIdOrKeyAttachmentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['$get']
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/request/:issueIdOrKey/attachment/:attachmentId',
    args,
  ] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].attachment[':attachmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdQueryKey>
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
      ...getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentId<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdThumbnailQueryKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['thumbnail']['$get']
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/request/:issueIdOrKey/attachment/:attachmentId/thumbnail',
    args,
  ] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdThumbnailQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['thumbnail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdThumbnailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].attachment[
          ':attachmentId'
        ].thumbnail.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['thumbnail']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdThumbnailQueryKey
        >
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
      ...getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdThumbnailQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdThumbnail<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['thumbnail']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdThumbnailQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestServicedeskapiRequestIssueIdOrKeyCommentQueryKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/comment', args] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeyCommentQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiRequestIssueIdOrKeyCommentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].comment.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyCommentQueryKey>
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
      ...getRestServicedeskapiRequestIssueIdOrKeyCommentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiRequestIssueIdOrKeyComment<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiRequestIssueIdOrKeyCommentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/comment/:commentId', args] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].comment[':commentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdQueryKey>
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
      ...getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiRequestIssueIdOrKeyCommentCommentId<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdAttachmentQueryKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['attachment']['$get']
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/request/:issueIdOrKey/comment/:commentId/attachment',
    args,
  ] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdAttachmentQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['attachment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdAttachmentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].comment[':commentId'].attachment.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['attachment']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdAttachmentQueryKey
        >
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
      ...getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdAttachmentQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdAttachment<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['attachment']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<
          typeof getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdAttachmentQueryKey
        >
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
      ...getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdAttachmentQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestServicedeskapiRequestIssueIdOrKeyNotificationQueryKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/notification', args] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeyNotificationQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiRequestIssueIdOrKeyNotificationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].notification.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyNotificationQueryKey>
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
      ...getRestServicedeskapiRequestIssueIdOrKeyNotificationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiRequestIssueIdOrKeyNotification<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiRequestIssueIdOrKeyNotificationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/participant', args] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeyParticipantQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiRequestIssueIdOrKeyParticipantQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].participant.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyParticipantQueryKey>
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
      ...getRestServicedeskapiRequestIssueIdOrKeyParticipantQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiRequestIssueIdOrKeyParticipant<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiRequestIssueIdOrKeyParticipantQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/sla', args] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeySlaQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiRequestIssueIdOrKeySlaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].sla.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeySlaQueryKey>
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
      ...getRestServicedeskapiRequestIssueIdOrKeySlaQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiRequestIssueIdOrKeySla<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeySlaQueryKey>
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
      ...getRestServicedeskapiRequestIssueIdOrKeySlaQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestServicedeskapiRequestIssueIdOrKeySlaSlaMetricIdQueryKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla'][':slaMetricId']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/sla/:slaMetricId', args] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeySlaSlaMetricIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla'][':slaMetricId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiRequestIssueIdOrKeySlaSlaMetricIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].sla[':slaMetricId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla'][':slaMetricId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeySlaSlaMetricIdQueryKey>
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
      ...getRestServicedeskapiRequestIssueIdOrKeySlaSlaMetricIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiRequestIssueIdOrKeySlaSlaMetricId<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla'][':slaMetricId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiRequestIssueIdOrKeySlaSlaMetricIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestServicedeskapiRequestIssueIdOrKeyStatusQueryKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['status']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/status', args] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeyStatusQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiRequestIssueIdOrKeyStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['status']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyStatusQueryKey>
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
      ...getRestServicedeskapiRequestIssueIdOrKeyStatusQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiRequestIssueIdOrKeyStatus<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiRequestIssueIdOrKeyStatusQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestServicedeskapiRequestIssueIdOrKeyTransitionQueryKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['transition']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/transition', args] as const
}

export function getRestServicedeskapiRequestIssueIdOrKeyTransitionQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['transition']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiRequestIssueIdOrKeyTransitionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.request[':issueIdOrKey'].transition.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['transition']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiRequestIssueIdOrKeyTransitionQueryKey>
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
      ...getRestServicedeskapiRequestIssueIdOrKeyTransitionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiRequestIssueIdOrKeyTransition<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['transition']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiRequestIssueIdOrKeyTransitionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:requestIdOrKey/feedback', args] as const
}

export function getRestServicedeskapiRequestRequestIdOrKeyFeedbackQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiRequestRequestIdOrKeyFeedbackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.request[':requestIdOrKey'].feedback.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiRequestRequestIdOrKeyFeedbackQueryKey>
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
      ...getRestServicedeskapiRequestRequestIdOrKeyFeedbackQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiRequestRequestIdOrKeyFeedback<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiRequestRequestIdOrKeyFeedbackQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<typeof client.rest.servicedeskapi.requesttype.$get>,
) {
  return ['rest', '/rest/servicedeskapi/requesttype', args] as const
}

export function getRestServicedeskapiRequesttypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.requesttype.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rest.servicedeskapi.requesttype.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiRequesttypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.requesttype.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestServicedeskapiRequesttype<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.requesttype.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rest.servicedeskapi.requesttype.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiRequesttypeQueryKey>
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
      ...getRestServicedeskapiRequesttypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiRequesttype<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.requesttype.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rest.servicedeskapi.requesttype.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiRequesttypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestServicedeskapiServicedeskQueryKey(
  args: InferRequestType<typeof client.rest.servicedeskapi.servicedesk.$get>,
) {
  return ['rest', '/rest/servicedeskapi/servicedesk', args] as const
}

export function getRestServicedeskapiServicedeskQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.servicedesk.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rest.servicedeskapi.servicedesk.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiServicedeskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestServicedeskapiServicedesk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.servicedesk.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rest.servicedeskapi.servicedesk.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiServicedeskQueryKey>
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
      ...getRestServicedeskapiServicedeskQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiServicedesk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.servicedesk.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rest.servicedeskapi.servicedesk.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiServicedeskQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestServicedeskapiServicedeskServiceDeskIdQueryKey(
  args: InferRequestType<(typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['$get']>,
) {
  return ['rest', '/rest/servicedeskapi/servicedesk/:serviceDeskId', args] as const
}

export function getRestServicedeskapiServicedeskServiceDeskIdQueryOptions<
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
  args: InferRequestType<(typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiServicedeskServiceDeskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdQueryKey>
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
      ...getRestServicedeskapiServicedeskServiceDeskIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiServicedeskServiceDeskId<
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
  args: InferRequestType<(typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdQueryKey>
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
      ...getRestServicedeskapiServicedeskServiceDeskIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/servicedesk/:serviceDeskId/customer', args] as const
}

export function getRestServicedeskapiServicedeskServiceDeskIdCustomerQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiServicedeskServiceDeskIdCustomerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].customer.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdCustomerQueryKey>
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
      ...getRestServicedeskapiServicedeskServiceDeskIdCustomerQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiServicedeskServiceDeskIdCustomer<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiServicedeskServiceDeskIdCustomerQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['knowledgebase']['article']['$get']
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/knowledgebase/article',
    args,
  ] as const
}

export function getRestServicedeskapiServicedeskServiceDeskIdKnowledgebaseArticleQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['knowledgebase']['article']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiServicedeskServiceDeskIdKnowledgebaseArticleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].knowledgebase.article.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['knowledgebase']['article']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdKnowledgebaseArticleQueryKey>
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
      ...getRestServicedeskapiServicedeskServiceDeskIdKnowledgebaseArticleQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiServicedeskServiceDeskIdKnowledgebaseArticle<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['knowledgebase']['article']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiServicedeskServiceDeskIdKnowledgebaseArticleQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestServicedeskapiServicedeskServiceDeskIdOrganizationQueryKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/servicedesk/:serviceDeskId/organization', args] as const
}

export function getRestServicedeskapiServicedeskServiceDeskIdOrganizationQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiServicedeskServiceDeskIdOrganizationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].organization.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdOrganizationQueryKey>
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
      ...getRestServicedeskapiServicedeskServiceDeskIdOrganizationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiServicedeskServiceDeskIdOrganization<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiServicedeskServiceDeskIdOrganizationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/servicedesk/:serviceDeskId/queue', args] as const
}

export function getRestServicedeskapiServicedeskServiceDeskIdQueueQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiServicedeskServiceDeskIdQueueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].queue.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdQueueQueryKey>
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
      ...getRestServicedeskapiServicedeskServiceDeskIdQueueQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiServicedeskServiceDeskIdQueue<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiServicedeskServiceDeskIdQueueQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdQueryKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/servicedesk/:serviceDeskId/queue/:queueId', args] as const
}

export function getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].queue[':queueId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdQueryKey>
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
      ...getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiServicedeskServiceDeskIdQueueQueueId<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdIssueQueryKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['issue']['$get']
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/queue/:queueId/issue',
    args,
  ] as const
}

export function getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdIssueQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['issue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdIssueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].queue[':queueId'].issue.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['issue']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdIssueQueryKey>
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
      ...getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdIssueQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdIssue<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['issue']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdIssueQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestServicedeskapiServicedeskServiceDeskIdRequesttypeQueryKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttype', args] as const
}

export function getRestServicedeskapiServicedeskServiceDeskIdRequesttypeQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiServicedeskServiceDeskIdRequesttypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdRequesttypeQueryKey>
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
      ...getRestServicedeskapiServicedeskServiceDeskIdRequesttypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiServicedeskServiceDeskIdRequesttype<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiServicedeskServiceDeskIdRequesttypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['$get']
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttype/:requestTypeId',
    args,
  ] as const
}

export function getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[':requestTypeId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdQueryKey
        >
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
      ...getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeId<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<
          typeof getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdQueryKey
        >
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
      ...getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['field']['$get']
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttype/:requestTypeId/field',
    args,
  ] as const
}

export function getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdFieldQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['field']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[
          ':requestTypeId'
        ].field.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['field']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdFieldQueryKey
        >
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
      ...getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdFieldQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdField<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['field']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdFieldQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyQueryKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property']['$get']
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttype/:requestTypeId/property',
    args,
  ] as const
}

export function getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[
          ':requestTypeId'
        ].property.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyQueryKey
        >
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
      ...getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdProperty<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyQueryKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$get']
  >,
) {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttype/:requestTypeId/property/:propertyKey',
    args,
  ] as const
}

export function getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[
          ':requestTypeId'
        ].property[':propertyKey'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyQueryKey
        >
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
      ...getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKey<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttypegroup']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttypegroup', args] as const
}

export function getRestServicedeskapiServicedeskServiceDeskIdRequesttypegroupQueryOptions<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttypegroup']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestServicedeskapiServicedeskServiceDeskIdRequesttypegroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttypegroup.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttypegroup']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestServicedeskapiServicedeskServiceDeskIdRequesttypegroupQueryKey>
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
      ...getRestServicedeskapiServicedeskServiceDeskIdRequesttypegroupQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestServicedeskapiServicedeskServiceDeskIdRequesttypegroup<
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
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttypegroup']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRestServicedeskapiServicedeskServiceDeskIdRequesttypegroupQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}
