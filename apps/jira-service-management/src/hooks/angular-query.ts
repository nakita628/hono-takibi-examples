import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectRestServicedeskapiAssetsWorkspace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.rest.servicedeskapi.assets.workspace.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rest.servicedeskapi.assets.workspace.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiAssetsWorkspaceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostRestServicedeskapiCustomer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRestServicedeskapiCustomerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostRestServicedeskapiCustomerSkipPermissionCheck<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRestServicedeskapiCustomerSkipPermissionCheckMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutRestServicedeskapiCustomerUserAccountIdRevokePortalOnlyAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutRestServicedeskapiCustomerUserAccountIdRevokePortalOnlyAccessMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRestServicedeskapiInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectRestServicedeskapiInsightWorkspace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.rest.servicedeskapi.insight.workspace.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rest.servicedeskapi.insight.workspace.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiInsightWorkspaceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiKnowledgebaseArticle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.rest.servicedeskapi.knowledgebase.article.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rest.servicedeskapi.knowledgebase.article.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiKnowledgebaseArticleQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiKnowledgebaseArticleViewPageId<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.knowledgebase.article.view)[':pageId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiKnowledgebaseArticleViewPageIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.organization.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rest.servicedeskapi.organization.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiOrganizationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostRestServicedeskapiOrganization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRestServicedeskapiOrganizationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiOrganizationOrganizationId<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiOrganizationOrganizationIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteRestServicedeskapiOrganizationOrganizationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRestServicedeskapiOrganizationOrganizationIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiOrganizationOrganizationIdProperty<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['property']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiOrganizationOrganizationIdPropertyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKey<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiOrganizationOrganizationIdUser<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiOrganizationOrganizationIdUserQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostRestServicedeskapiOrganizationOrganizationIdUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRestServicedeskapiOrganizationOrganizationIdUserMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteRestServicedeskapiOrganizationOrganizationIdUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteRestServicedeskapiOrganizationOrganizationIdUserMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiRequest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.request.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rest.servicedeskapi.request.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiRequestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostRestServicedeskapiRequest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRestServicedeskapiRequestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostRestServicedeskapiRequestValidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRestServicedeskapiRequestValidateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiRequestIssueIdOrKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiRequestIssueIdOrKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiRequestIssueIdOrKeyApproval<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiRequestIssueIdOrKeyApprovalQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalId<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval'][':approvalId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiRequestIssueIdOrKeyAttachment<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiRequestIssueIdOrKeyAttachmentQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostRestServicedeskapiRequestIssueIdOrKeyAttachment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRestServicedeskapiRequestIssueIdOrKeyAttachmentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentId<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdThumbnail<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['thumbnail']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdThumbnailQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiRequestIssueIdOrKeyComment<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiRequestIssueIdOrKeyCommentQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostRestServicedeskapiRequestIssueIdOrKeyComment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRestServicedeskapiRequestIssueIdOrKeyCommentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiRequestIssueIdOrKeyCommentCommentId<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdAttachment<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['attachment']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdAttachmentQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiRequestIssueIdOrKeyNotification<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiRequestIssueIdOrKeyNotificationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutRestServicedeskapiRequestIssueIdOrKeyNotification<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRestServicedeskapiRequestIssueIdOrKeyNotificationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteRestServicedeskapiRequestIssueIdOrKeyNotification<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteRestServicedeskapiRequestIssueIdOrKeyNotificationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiRequestIssueIdOrKeyParticipant<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiRequestIssueIdOrKeyParticipantQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostRestServicedeskapiRequestIssueIdOrKeyParticipant<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRestServicedeskapiRequestIssueIdOrKeyParticipantMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteRestServicedeskapiRequestIssueIdOrKeyParticipant<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteRestServicedeskapiRequestIssueIdOrKeyParticipantMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiRequestIssueIdOrKeySla<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiRequestIssueIdOrKeySlaQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiRequestIssueIdOrKeySlaSlaMetricId<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla'][':slaMetricId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiRequestIssueIdOrKeySlaSlaMetricIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiRequestIssueIdOrKeyStatus<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiRequestIssueIdOrKeyStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiRequestIssueIdOrKeyTransition<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['transition']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiRequestIssueIdOrKeyTransitionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostRestServicedeskapiRequestIssueIdOrKeyTransition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRestServicedeskapiRequestIssueIdOrKeyTransitionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiRequestRequestIdOrKeyFeedback<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiRequestRequestIdOrKeyFeedbackQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostRestServicedeskapiRequestRequestIdOrKeyFeedback<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRestServicedeskapiRequestRequestIdOrKeyFeedbackMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteRestServicedeskapiRequestRequestIdOrKeyFeedback<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteRestServicedeskapiRequestRequestIdOrKeyFeedbackMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiRequesttype<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.requesttype.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rest.servicedeskapi.requesttype.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiRequesttypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiServicedesk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.servicedesk.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rest.servicedeskapi.servicedesk.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiServicedeskQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiServicedeskServiceDeskId<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiServicedeskServiceDeskIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostRestServicedeskapiServicedeskServiceDeskIdAttachTemporaryFile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostRestServicedeskapiServicedeskServiceDeskIdAttachTemporaryFileMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiServicedeskServiceDeskIdCustomer<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiServicedeskServiceDeskIdCustomerQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostRestServicedeskapiServicedeskServiceDeskIdCustomer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostRestServicedeskapiServicedeskServiceDeskIdCustomerMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteRestServicedeskapiServicedeskServiceDeskIdCustomer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteRestServicedeskapiServicedeskServiceDeskIdCustomerMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostRestServicedeskapiServicedeskServiceDeskIdCustomerInvite<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostRestServicedeskapiServicedeskServiceDeskIdCustomerInviteMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostRestServicedeskapiServicedeskServiceDeskIdCustomerSkipPermissionCheck<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostRestServicedeskapiServicedeskServiceDeskIdCustomerSkipPermissionCheckMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiServicedeskServiceDeskIdKnowledgebaseArticle<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['knowledgebase']['article']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiServicedeskServiceDeskIdKnowledgebaseArticleQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiServicedeskServiceDeskIdOrganization<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiServicedeskServiceDeskIdOrganizationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostRestServicedeskapiServicedeskServiceDeskIdOrganization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostRestServicedeskapiServicedeskServiceDeskIdOrganizationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteRestServicedeskapiServicedeskServiceDeskIdOrganization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteRestServicedeskapiServicedeskServiceDeskIdOrganizationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiServicedeskServiceDeskIdQueue<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiServicedeskServiceDeskIdQueueQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiServicedeskServiceDeskIdQueueQueueId<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdIssue<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['issue']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdIssueQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiServicedeskServiceDeskIdRequesttype<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiServicedeskServiceDeskIdRequesttypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostRestServicedeskapiServicedeskServiceDeskIdRequesttype<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostRestServicedeskapiServicedeskServiceDeskIdRequesttypeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostRestServicedeskapiServicedeskServiceDeskIdRequesttypePermissionsCheck<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostRestServicedeskapiServicedeskServiceDeskIdRequesttypePermissionsCheckMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeId<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdField<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['field']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdFieldQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdProperty<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKey<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectRestServicedeskapiServicedeskServiceDeskIdRequesttypegroup<
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
  args: () => InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttypegroup']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestServicedeskapiServicedeskServiceDeskIdRequesttypegroupQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}
