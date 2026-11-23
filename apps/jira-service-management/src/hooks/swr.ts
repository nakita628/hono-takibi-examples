import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRestKey() {
  return ['rest'] as const
}

export function getGetRestServicedeskapiAssetsWorkspaceKey(
  args: InferRequestType<typeof client.rest.servicedeskapi.assets.workspace.$get>,
) {
  return ['rest', '/rest/servicedeskapi/assets/workspace', args] as const
}

export function useGetRestServicedeskapiAssetsWorkspace<TError = unknown>(
  args: InferRequestType<typeof client.rest.servicedeskapi.assets.workspace.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rest.servicedeskapi.assets.workspace.$get>>
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
        ? getGetRestServicedeskapiAssetsWorkspaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rest.servicedeskapi.assets.workspace.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.servicedeskapi.assets.workspace.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiAssetsWorkspace<TError = unknown>(
  args: InferRequestType<typeof client.rest.servicedeskapi.assets.workspace.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rest.servicedeskapi.assets.workspace.$get>>
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
        ? getGetRestServicedeskapiAssetsWorkspaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rest.servicedeskapi.assets.workspace.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.servicedeskapi.assets.workspace.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestServicedeskapiCustomerKey() {
  return ['rest', '/rest/servicedeskapi/customer', 'POST'] as const
}

export function usePostRestServicedeskapiCustomer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.customer.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.rest.servicedeskapi.customer.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestServicedeskapiCustomerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.rest.servicedeskapi.customer.$post> },
      ) => parseResponse(client.rest.servicedeskapi.customer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestServicedeskapiCustomerSkipPermissionCheckKey() {
  return ['rest', '/rest/servicedeskapi/customer/skip-permission-check', 'POST'] as const
}

export function usePostRestServicedeskapiCustomerSkipPermissionCheck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.rest.servicedeskapi.customer)['skip-permission-check']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestServicedeskapiCustomerSkipPermissionCheckKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.customer)['skip-permission-check']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.customer['skip-permission-check'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutRestServicedeskapiCustomerUserAccountIdRevokePortalOnlyAccessKey() {
  return [
    'rest',
    '/rest/servicedeskapi/customer/user/:accountId/revoke-portal-only-access',
    'PUT',
  ] as const
}

export function usePutRestServicedeskapiCustomerUserAccountIdRevokePortalOnlyAccess<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.rest.servicedeskapi.customer.user)[':accountId']['revoke-portal-only-access']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutRestServicedeskapiCustomerUserAccountIdRevokePortalOnlyAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.customer.user)[':accountId']['revoke-portal-only-access']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.customer.user[':accountId']['revoke-portal-only-access'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestServicedeskapiInfoKey() {
  return ['rest', '/rest/servicedeskapi/info'] as const
}

export function useGetRestServicedeskapiInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.info.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestServicedeskapiInfoKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.info.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.servicedeskapi.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.info.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestServicedeskapiInfoKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.info.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.servicedeskapi.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestServicedeskapiInsightWorkspaceKey(
  args: InferRequestType<typeof client.rest.servicedeskapi.insight.workspace.$get>,
) {
  return ['rest', '/rest/servicedeskapi/insight/workspace', args] as const
}

export function useGetRestServicedeskapiInsightWorkspace<TError = unknown>(
  args: InferRequestType<typeof client.rest.servicedeskapi.insight.workspace.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rest.servicedeskapi.insight.workspace.$get>>
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
        ? getGetRestServicedeskapiInsightWorkspaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rest.servicedeskapi.insight.workspace.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.servicedeskapi.insight.workspace.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiInsightWorkspace<TError = unknown>(
  args: InferRequestType<typeof client.rest.servicedeskapi.insight.workspace.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rest.servicedeskapi.insight.workspace.$get>>
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
        ? getGetRestServicedeskapiInsightWorkspaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rest.servicedeskapi.insight.workspace.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.servicedeskapi.insight.workspace.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestServicedeskapiKnowledgebaseArticleKey(
  args: InferRequestType<typeof client.rest.servicedeskapi.knowledgebase.article.$get>,
) {
  return ['rest', '/rest/servicedeskapi/knowledgebase/article', args] as const
}

export function useGetRestServicedeskapiKnowledgebaseArticle<TError = unknown>(
  args: InferRequestType<typeof client.rest.servicedeskapi.knowledgebase.article.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rest.servicedeskapi.knowledgebase.article.$get>>
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
        ? getGetRestServicedeskapiKnowledgebaseArticleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rest.servicedeskapi.knowledgebase.article.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.servicedeskapi.knowledgebase.article.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiKnowledgebaseArticle<TError = unknown>(
  args: InferRequestType<typeof client.rest.servicedeskapi.knowledgebase.article.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rest.servicedeskapi.knowledgebase.article.$get>>
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
        ? getGetRestServicedeskapiKnowledgebaseArticleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rest.servicedeskapi.knowledgebase.article.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.servicedeskapi.knowledgebase.article.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestServicedeskapiKnowledgebaseArticleViewPageIdKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.knowledgebase.article.view)[':pageId']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/knowledgebase/article/view/:pageId', args] as const
}

export function useGetRestServicedeskapiKnowledgebaseArticleViewPageId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.knowledgebase.article.view)[':pageId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiKnowledgebaseArticleViewPageIdKey(args)
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
                (typeof client.rest.servicedeskapi.knowledgebase.article.view)[':pageId']['$get']
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
          client.rest.servicedeskapi.knowledgebase.article.view[':pageId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiKnowledgebaseArticleViewPageId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.knowledgebase.article.view)[':pageId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiKnowledgebaseArticleViewPageIdKey(args)
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
                (typeof client.rest.servicedeskapi.knowledgebase.article.view)[':pageId']['$get']
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
          client.rest.servicedeskapi.knowledgebase.article.view[':pageId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestServicedeskapiOrganizationKey(
  args: InferRequestType<typeof client.rest.servicedeskapi.organization.$get>,
) {
  return ['rest', '/rest/servicedeskapi/organization', args] as const
}

export function useGetRestServicedeskapiOrganization<TError = unknown>(
  args: InferRequestType<typeof client.rest.servicedeskapi.organization.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rest.servicedeskapi.organization.$get>>
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
        ? getGetRestServicedeskapiOrganizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rest.servicedeskapi.organization.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.servicedeskapi.organization.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiOrganization<TError = unknown>(
  args: InferRequestType<typeof client.rest.servicedeskapi.organization.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rest.servicedeskapi.organization.$get>>
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
        ? getGetRestServicedeskapiOrganizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rest.servicedeskapi.organization.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.servicedeskapi.organization.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestServicedeskapiOrganizationKey() {
  return ['rest', '/rest/servicedeskapi/organization', 'POST'] as const
}

export function usePostRestServicedeskapiOrganization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.rest.servicedeskapi.organization.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.rest.servicedeskapi.organization.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestServicedeskapiOrganizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.rest.servicedeskapi.organization.$post> },
      ) => parseResponse(client.rest.servicedeskapi.organization.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestServicedeskapiOrganizationOrganizationIdKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/organization/:organizationId', args] as const
}

export function useGetRestServicedeskapiOrganizationOrganizationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiOrganizationOrganizationIdKey(args)
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
                (typeof client.rest.servicedeskapi.organization)[':organizationId']['$get']
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
          client.rest.servicedeskapi.organization[':organizationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiOrganizationOrganizationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiOrganizationOrganizationIdKey(args)
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
                (typeof client.rest.servicedeskapi.organization)[':organizationId']['$get']
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
          client.rest.servicedeskapi.organization[':organizationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteRestServicedeskapiOrganizationOrganizationIdKey() {
  return ['rest', '/rest/servicedeskapi/organization/:organizationId', 'DELETE'] as const
}

export function useDeleteRestServicedeskapiOrganizationOrganizationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.rest.servicedeskapi.organization)[':organizationId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestServicedeskapiOrganizationOrganizationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.organization)[':organizationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.organization[':organizationId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestServicedeskapiOrganizationOrganizationIdPropertyKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['property']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/organization/:organizationId/property', args] as const
}

export function useGetRestServicedeskapiOrganizationOrganizationIdProperty<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['property']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiOrganizationOrganizationIdPropertyKey(args)
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
                (typeof client.rest.servicedeskapi.organization)[':organizationId']['property']['$get']
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
          client.rest.servicedeskapi.organization[':organizationId'].property.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiOrganizationOrganizationIdProperty<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['property']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiOrganizationOrganizationIdPropertyKey(args)
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
                (typeof client.rest.servicedeskapi.organization)[':organizationId']['property']['$get']
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
          client.rest.servicedeskapi.organization[':organizationId'].property.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyKey(
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

export function useGetRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyKey(args)
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
                (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$get']
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
          client.rest.servicedeskapi.organization[':organizationId'].property[':propertyKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyKey(args)
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
                (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$get']
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
          client.rest.servicedeskapi.organization[':organizationId'].property[':propertyKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyKey() {
  return [
    'rest',
    '/rest/servicedeskapi/organization/:organizationId/property/:propertyKey',
    'PUT',
  ] as const
}

export function usePutRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.organization[':organizationId'].property[':propertyKey'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyKey() {
  return [
    'rest',
    '/rest/servicedeskapi/organization/:organizationId/property/:propertyKey',
    'DELETE',
  ] as const
}

export function useDeleteRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.organization[':organizationId'].property[
            ':propertyKey'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestServicedeskapiOrganizationOrganizationIdUserKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/organization/:organizationId/user', args] as const
}

export function useGetRestServicedeskapiOrganizationOrganizationIdUser<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiOrganizationOrganizationIdUserKey(args)
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
                (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$get']
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
          client.rest.servicedeskapi.organization[':organizationId'].user.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiOrganizationOrganizationIdUser<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiOrganizationOrganizationIdUserKey(args)
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
                (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$get']
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
          client.rest.servicedeskapi.organization[':organizationId'].user.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestServicedeskapiOrganizationOrganizationIdUserKey() {
  return ['rest', '/rest/servicedeskapi/organization/:organizationId/user', 'POST'] as const
}

export function usePostRestServicedeskapiOrganizationOrganizationIdUser<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestServicedeskapiOrganizationOrganizationIdUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.organization[':organizationId'].user.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestServicedeskapiOrganizationOrganizationIdUserKey() {
  return ['rest', '/rest/servicedeskapi/organization/:organizationId/user', 'DELETE'] as const
}

export function useDeleteRestServicedeskapiOrganizationOrganizationIdUser<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestServicedeskapiOrganizationOrganizationIdUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.organization[':organizationId'].user.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestServicedeskapiRequestKey(
  args: InferRequestType<typeof client.rest.servicedeskapi.request.$get>,
) {
  return ['rest', '/rest/servicedeskapi/request', args] as const
}

export function useGetRestServicedeskapiRequest<TError = unknown>(
  args: InferRequestType<typeof client.rest.servicedeskapi.request.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.request.$get>>>
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
        ? getGetRestServicedeskapiRequestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.request.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.servicedeskapi.request.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiRequest<TError = unknown>(
  args: InferRequestType<typeof client.rest.servicedeskapi.request.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.request.$get>>>
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
        ? getGetRestServicedeskapiRequestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.request.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.servicedeskapi.request.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestServicedeskapiRequestKey() {
  return ['rest', '/rest/servicedeskapi/request', 'POST'] as const
}

export function usePostRestServicedeskapiRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.rest.servicedeskapi.request.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.rest.servicedeskapi.request.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestServicedeskapiRequestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.rest.servicedeskapi.request.$post> },
      ) => parseResponse(client.rest.servicedeskapi.request.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestServicedeskapiRequestValidateKey() {
  return ['rest', '/rest/servicedeskapi/request/validate', 'POST'] as const
}

export function usePostRestServicedeskapiRequestValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.rest.servicedeskapi.request.validate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.rest.servicedeskapi.request.validate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestServicedeskapiRequestValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.rest.servicedeskapi.request.validate.$post> },
      ) => parseResponse(client.rest.servicedeskapi.request.validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestServicedeskapiRequestIssueIdOrKeyKey(
  args: InferRequestType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['$get']>,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey', args] as const
}

export function useGetRestServicedeskapiRequestIssueIdOrKey<TError = unknown>(
  args: InferRequestType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['$get']>
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.rest.servicedeskapi.request[':issueIdOrKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiRequestIssueIdOrKey<TError = unknown>(
  args: InferRequestType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['$get']>
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.rest.servicedeskapi.request[':issueIdOrKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestServicedeskapiRequestIssueIdOrKeyApprovalKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/approval', args] as const
}

export function useGetRestServicedeskapiRequestIssueIdOrKeyApproval<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeyApprovalKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].approval.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiRequestIssueIdOrKeyApproval<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeyApprovalKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].approval.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval'][':approvalId']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/approval/:approvalId', args] as const
}

export function useGetRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval'][':approvalId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval'][':approvalId']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].approval[':approvalId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval'][':approvalId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval'][':approvalId']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].approval[':approvalId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdKey() {
  return [
    'rest',
    '/rest/servicedeskapi/request/:issueIdOrKey/approval/:approvalId',
    'POST',
  ] as const
}

export function usePostRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval'][':approvalId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval'][':approvalId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.request[':issueIdOrKey'].approval[':approvalId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestServicedeskapiRequestIssueIdOrKeyAttachmentKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/attachment', args] as const
}

export function useGetRestServicedeskapiRequestIssueIdOrKeyAttachment<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeyAttachmentKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].attachment.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiRequestIssueIdOrKeyAttachment<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeyAttachmentKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].attachment.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestServicedeskapiRequestIssueIdOrKeyAttachmentKey() {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/attachment', 'POST'] as const
}

export function usePostRestServicedeskapiRequestIssueIdOrKeyAttachment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestServicedeskapiRequestIssueIdOrKeyAttachmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.request[':issueIdOrKey'].attachment.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdKey(
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

export function useGetRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].attachment[':attachmentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].attachment[':attachmentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdThumbnailKey(
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

export function useGetRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdThumbnail<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['thumbnail']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdThumbnailKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['thumbnail']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].attachment[
            ':attachmentId'
          ].thumbnail.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdThumbnail<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['thumbnail']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdThumbnailKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['thumbnail']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].attachment[
            ':attachmentId'
          ].thumbnail.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestServicedeskapiRequestIssueIdOrKeyCommentKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/comment', args] as const
}

export function useGetRestServicedeskapiRequestIssueIdOrKeyComment<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeyCommentKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].comment.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiRequestIssueIdOrKeyComment<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeyCommentKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].comment.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestServicedeskapiRequestIssueIdOrKeyCommentKey() {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/comment', 'POST'] as const
}

export function usePostRestServicedeskapiRequestIssueIdOrKeyComment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestServicedeskapiRequestIssueIdOrKeyCommentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.request[':issueIdOrKey'].comment.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/comment/:commentId', args] as const
}

export function useGetRestServicedeskapiRequestIssueIdOrKeyCommentCommentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].comment[':commentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiRequestIssueIdOrKeyCommentCommentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].comment[':commentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdAttachmentKey(
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

export function useGetRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdAttachment<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['attachment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdAttachmentKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['attachment']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].comment[':commentId'].attachment.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdAttachment<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['attachment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdAttachmentKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['attachment']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].comment[':commentId'].attachment.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestServicedeskapiRequestIssueIdOrKeyNotificationKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/notification', args] as const
}

export function useGetRestServicedeskapiRequestIssueIdOrKeyNotification<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeyNotificationKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].notification.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiRequestIssueIdOrKeyNotification<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeyNotificationKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].notification.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestServicedeskapiRequestIssueIdOrKeyNotificationKey() {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/notification', 'PUT'] as const
}

export function usePutRestServicedeskapiRequestIssueIdOrKeyNotification<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestServicedeskapiRequestIssueIdOrKeyNotificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.request[':issueIdOrKey'].notification.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestServicedeskapiRequestIssueIdOrKeyNotificationKey() {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/notification', 'DELETE'] as const
}

export function useDeleteRestServicedeskapiRequestIssueIdOrKeyNotification<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestServicedeskapiRequestIssueIdOrKeyNotificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.request[':issueIdOrKey'].notification.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestServicedeskapiRequestIssueIdOrKeyParticipantKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/participant', args] as const
}

export function useGetRestServicedeskapiRequestIssueIdOrKeyParticipant<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeyParticipantKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].participant.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiRequestIssueIdOrKeyParticipant<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeyParticipantKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].participant.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestServicedeskapiRequestIssueIdOrKeyParticipantKey() {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/participant', 'POST'] as const
}

export function usePostRestServicedeskapiRequestIssueIdOrKeyParticipant<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestServicedeskapiRequestIssueIdOrKeyParticipantKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.request[':issueIdOrKey'].participant.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestServicedeskapiRequestIssueIdOrKeyParticipantKey() {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/participant', 'DELETE'] as const
}

export function useDeleteRestServicedeskapiRequestIssueIdOrKeyParticipant<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestServicedeskapiRequestIssueIdOrKeyParticipantKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.request[':issueIdOrKey'].participant.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestServicedeskapiRequestIssueIdOrKeySlaKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/sla', args] as const
}

export function useGetRestServicedeskapiRequestIssueIdOrKeySla<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeySlaKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].sla.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiRequestIssueIdOrKeySla<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeySlaKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].sla.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestServicedeskapiRequestIssueIdOrKeySlaSlaMetricIdKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla'][':slaMetricId']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/sla/:slaMetricId', args] as const
}

export function useGetRestServicedeskapiRequestIssueIdOrKeySlaSlaMetricId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla'][':slaMetricId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeySlaSlaMetricIdKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla'][':slaMetricId']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].sla[':slaMetricId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiRequestIssueIdOrKeySlaSlaMetricId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla'][':slaMetricId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeySlaSlaMetricIdKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla'][':slaMetricId']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].sla[':slaMetricId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestServicedeskapiRequestIssueIdOrKeyStatusKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['status']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/status', args] as const
}

export function useGetRestServicedeskapiRequestIssueIdOrKeyStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeyStatusKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['status']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiRequestIssueIdOrKeyStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeyStatusKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['status']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestServicedeskapiRequestIssueIdOrKeyTransitionKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['transition']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/transition', args] as const
}

export function useGetRestServicedeskapiRequestIssueIdOrKeyTransition<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['transition']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeyTransitionKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['transition']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].transition.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiRequestIssueIdOrKeyTransition<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['transition']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestIssueIdOrKeyTransitionKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['transition']['$get']
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
          client.rest.servicedeskapi.request[':issueIdOrKey'].transition.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestServicedeskapiRequestIssueIdOrKeyTransitionKey() {
  return ['rest', '/rest/servicedeskapi/request/:issueIdOrKey/transition', 'POST'] as const
}

export function usePostRestServicedeskapiRequestIssueIdOrKeyTransition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['transition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestServicedeskapiRequestIssueIdOrKeyTransitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['transition']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.request[':issueIdOrKey'].transition.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestServicedeskapiRequestRequestIdOrKeyFeedbackKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/request/:requestIdOrKey/feedback', args] as const
}

export function useGetRestServicedeskapiRequestRequestIdOrKeyFeedback<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestRequestIdOrKeyFeedbackKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$get']
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
          client.rest.servicedeskapi.request[':requestIdOrKey'].feedback.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiRequestRequestIdOrKeyFeedback<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiRequestRequestIdOrKeyFeedbackKey(args)
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
                (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$get']
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
          client.rest.servicedeskapi.request[':requestIdOrKey'].feedback.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestServicedeskapiRequestRequestIdOrKeyFeedbackKey() {
  return ['rest', '/rest/servicedeskapi/request/:requestIdOrKey/feedback', 'POST'] as const
}

export function usePostRestServicedeskapiRequestRequestIdOrKeyFeedback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestServicedeskapiRequestRequestIdOrKeyFeedbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.request[':requestIdOrKey'].feedback.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestServicedeskapiRequestRequestIdOrKeyFeedbackKey() {
  return ['rest', '/rest/servicedeskapi/request/:requestIdOrKey/feedback', 'DELETE'] as const
}

export function useDeleteRestServicedeskapiRequestRequestIdOrKeyFeedback<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestServicedeskapiRequestRequestIdOrKeyFeedbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.request[':requestIdOrKey'].feedback.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestServicedeskapiRequesttypeKey(
  args: InferRequestType<typeof client.rest.servicedeskapi.requesttype.$get>,
) {
  return ['rest', '/rest/servicedeskapi/requesttype', args] as const
}

export function useGetRestServicedeskapiRequesttype<TError = unknown>(
  args: InferRequestType<typeof client.rest.servicedeskapi.requesttype.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rest.servicedeskapi.requesttype.$get>>
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
        ? getGetRestServicedeskapiRequesttypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rest.servicedeskapi.requesttype.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.servicedeskapi.requesttype.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiRequesttype<TError = unknown>(
  args: InferRequestType<typeof client.rest.servicedeskapi.requesttype.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rest.servicedeskapi.requesttype.$get>>
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
        ? getGetRestServicedeskapiRequesttypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rest.servicedeskapi.requesttype.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.servicedeskapi.requesttype.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestServicedeskapiServicedeskKey(
  args: InferRequestType<typeof client.rest.servicedeskapi.servicedesk.$get>,
) {
  return ['rest', '/rest/servicedeskapi/servicedesk', args] as const
}

export function useGetRestServicedeskapiServicedesk<TError = unknown>(
  args: InferRequestType<typeof client.rest.servicedeskapi.servicedesk.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rest.servicedeskapi.servicedesk.$get>>
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
        ? getGetRestServicedeskapiServicedeskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rest.servicedeskapi.servicedesk.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.servicedeskapi.servicedesk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiServicedesk<TError = unknown>(
  args: InferRequestType<typeof client.rest.servicedeskapi.servicedesk.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rest.servicedeskapi.servicedesk.$get>>
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
        ? getGetRestServicedeskapiServicedeskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rest.servicedeskapi.servicedesk.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.servicedeskapi.servicedesk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestServicedeskapiServicedeskServiceDeskIdKey(
  args: InferRequestType<(typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['$get']>,
) {
  return ['rest', '/rest/servicedeskapi/servicedesk/:serviceDeskId', args] as const
}

export function useGetRestServicedeskapiServicedeskServiceDeskId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['$get']>
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
        ? getGetRestServicedeskapiServicedeskServiceDeskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiServicedeskServiceDeskId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['$get']>
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
        ? getGetRestServicedeskapiServicedeskServiceDeskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestServicedeskapiServicedeskServiceDeskIdAttachTemporaryFileKey() {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/attachTemporaryFile',
    'POST',
  ] as const
}

export function usePostRestServicedeskapiServicedeskServiceDeskIdAttachTemporaryFile<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['attachTemporaryFile']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostRestServicedeskapiServicedeskServiceDeskIdAttachTemporaryFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['attachTemporaryFile']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].attachTemporaryFile.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestServicedeskapiServicedeskServiceDeskIdCustomerKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/servicedesk/:serviceDeskId/customer', args] as const
}

export function useGetRestServicedeskapiServicedeskServiceDeskIdCustomer<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiServicedeskServiceDeskIdCustomerKey(args)
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
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$get']
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
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].customer.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiServicedeskServiceDeskIdCustomer<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiServicedeskServiceDeskIdCustomerKey(args)
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
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$get']
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
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].customer.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestServicedeskapiServicedeskServiceDeskIdCustomerKey() {
  return ['rest', '/rest/servicedeskapi/servicedesk/:serviceDeskId/customer', 'POST'] as const
}

export function usePostRestServicedeskapiServicedeskServiceDeskIdCustomer<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestServicedeskapiServicedeskServiceDeskIdCustomerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].customer.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestServicedeskapiServicedeskServiceDeskIdCustomerKey() {
  return ['rest', '/rest/servicedeskapi/servicedesk/:serviceDeskId/customer', 'DELETE'] as const
}

export function useDeleteRestServicedeskapiServicedeskServiceDeskIdCustomer<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestServicedeskapiServicedeskServiceDeskIdCustomerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].customer.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRestServicedeskapiServicedeskServiceDeskIdCustomerInviteKey() {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/customer/invite',
    'POST',
  ] as const
}

export function usePostRestServicedeskapiServicedeskServiceDeskIdCustomerInvite<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['invite']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestServicedeskapiServicedeskServiceDeskIdCustomerInviteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['invite']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].customer.invite.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRestServicedeskapiServicedeskServiceDeskIdCustomerSkipPermissionCheckKey() {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/customer/skip-permission-check',
    'POST',
  ] as const
}

export function usePostRestServicedeskapiServicedeskServiceDeskIdCustomerSkipPermissionCheck<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['skip-permission-check']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostRestServicedeskapiServicedeskServiceDeskIdCustomerSkipPermissionCheckKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['skip-permission-check']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].customer[
            'skip-permission-check'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestServicedeskapiServicedeskServiceDeskIdKnowledgebaseArticleKey(
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

export function useGetRestServicedeskapiServicedeskServiceDeskIdKnowledgebaseArticle<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['knowledgebase']['article']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiServicedeskServiceDeskIdKnowledgebaseArticleKey(args)
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
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['knowledgebase']['article']['$get']
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
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].knowledgebase.article.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiServicedeskServiceDeskIdKnowledgebaseArticle<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['knowledgebase']['article']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiServicedeskServiceDeskIdKnowledgebaseArticleKey(args)
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
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['knowledgebase']['article']['$get']
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
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].knowledgebase.article.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestServicedeskapiServicedeskServiceDeskIdOrganizationKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/servicedesk/:serviceDeskId/organization', args] as const
}

export function useGetRestServicedeskapiServicedeskServiceDeskIdOrganization<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiServicedeskServiceDeskIdOrganizationKey(args)
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
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$get']
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
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].organization.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiServicedeskServiceDeskIdOrganization<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiServicedeskServiceDeskIdOrganizationKey(args)
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
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$get']
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
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].organization.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestServicedeskapiServicedeskServiceDeskIdOrganizationKey() {
  return ['rest', '/rest/servicedeskapi/servicedesk/:serviceDeskId/organization', 'POST'] as const
}

export function usePostRestServicedeskapiServicedeskServiceDeskIdOrganization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestServicedeskapiServicedeskServiceDeskIdOrganizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].organization.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestServicedeskapiServicedeskServiceDeskIdOrganizationKey() {
  return ['rest', '/rest/servicedeskapi/servicedesk/:serviceDeskId/organization', 'DELETE'] as const
}

export function useDeleteRestServicedeskapiServicedeskServiceDeskIdOrganization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestServicedeskapiServicedeskServiceDeskIdOrganizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].organization.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestServicedeskapiServicedeskServiceDeskIdQueueKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/servicedesk/:serviceDeskId/queue', args] as const
}

export function useGetRestServicedeskapiServicedeskServiceDeskIdQueue<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiServicedeskServiceDeskIdQueueKey(args)
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
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue']['$get']
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
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].queue.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiServicedeskServiceDeskIdQueue<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiServicedeskServiceDeskIdQueueKey(args)
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
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue']['$get']
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
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].queue.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/servicedesk/:serviceDeskId/queue/:queueId', args] as const
}

export function useGetRestServicedeskapiServicedeskServiceDeskIdQueueQueueId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdKey(args)
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
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['$get']
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
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].queue[':queueId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiServicedeskServiceDeskIdQueueQueueId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdKey(args)
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
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['$get']
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
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].queue[':queueId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdIssueKey(
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

export function useGetRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdIssue<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['issue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdIssueKey(args)
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
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['issue']['$get']
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
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].queue[':queueId'].issue.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdIssue<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['issue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdIssueKey(args)
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
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['issue']['$get']
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
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].queue[':queueId'].issue.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestServicedeskapiServicedeskServiceDeskIdRequesttypeKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttype', args] as const
}

export function useGetRestServicedeskapiServicedeskServiceDeskIdRequesttype<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiServicedeskServiceDeskIdRequesttypeKey(args)
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
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['$get']
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
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiServicedeskServiceDeskIdRequesttype<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiServicedeskServiceDeskIdRequesttypeKey(args)
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
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['$get']
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
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestServicedeskapiServicedeskServiceDeskIdRequesttypeKey() {
  return ['rest', '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttype', 'POST'] as const
}

export function usePostRestServicedeskapiServicedeskServiceDeskIdRequesttype<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestServicedeskapiServicedeskServiceDeskIdRequesttypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRestServicedeskapiServicedeskServiceDeskIdRequesttypePermissionsCheckKey() {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttype/permissions/check',
    'POST',
  ] as const
}

export function usePostRestServicedeskapiServicedeskServiceDeskIdRequesttypePermissionsCheck<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['permissions']['check']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostRestServicedeskapiServicedeskServiceDeskIdRequesttypePermissionsCheckKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['permissions']['check']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.servicedesk[
            ':serviceDeskId'
          ].requesttype.permissions.check.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdKey(
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

export function useGetRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdKey(args)
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
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['$get']
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
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[
            ':requestTypeId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdKey(args)
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
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['$get']
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
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[
            ':requestTypeId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdKey() {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttype/:requestTypeId',
    'DELETE',
  ] as const
}

export function useDeleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[
            ':requestTypeId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdFieldKey(
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

export function useGetRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdField<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['field']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdFieldKey(args)
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
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['field']['$get']
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
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[
            ':requestTypeId'
          ].field.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdField<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['field']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdFieldKey(args)
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
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['field']['$get']
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
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[
            ':requestTypeId'
          ].field.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyKey(
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

export function useGetRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdProperty<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyKey(args)
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
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property']['$get']
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
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[
            ':requestTypeId'
          ].property.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdProperty<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyKey(args)
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
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property']['$get']
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
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[
            ':requestTypeId'
          ].property.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyKey(
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

export function useGetRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyKey(
            args,
          )
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
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$get']
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
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[
            ':requestTypeId'
          ].property[':propertyKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyKey(
            args,
          )
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
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$get']
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
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[
            ':requestTypeId'
          ].property[':propertyKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyKey() {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttype/:requestTypeId/property/:propertyKey',
    'PUT',
  ] as const
}

export function usePutRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[
            ':requestTypeId'
          ].property[':propertyKey'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyKey() {
  return [
    'rest',
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttype/:requestTypeId/property/:propertyKey',
    'DELETE',
  ] as const
}

export function useDeleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[
            ':requestTypeId'
          ].property[':propertyKey'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestServicedeskapiServicedeskServiceDeskIdRequesttypegroupKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttypegroup']['$get']
  >,
) {
  return ['rest', '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttypegroup', args] as const
}

export function useGetRestServicedeskapiServicedeskServiceDeskIdRequesttypegroup<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttypegroup']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiServicedeskServiceDeskIdRequesttypegroupKey(args)
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
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttypegroup']['$get']
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
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttypegroup.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestServicedeskapiServicedeskServiceDeskIdRequesttypegroup<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttypegroup']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRestServicedeskapiServicedeskServiceDeskIdRequesttypegroupKey(args)
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
                (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttypegroup']['$get']
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
          client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttypegroup.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
