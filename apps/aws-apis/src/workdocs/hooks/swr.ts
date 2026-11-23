import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiV1DocumentsDocumentIdVersionsVersionIdKey(
  args: InferRequestType<
    (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/documents/:DocumentId/versions/:VersionId', keyArgs] as const
}

export function useGetApiV1DocumentsDocumentIdVersionsVersionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$get']
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
        ? getGetApiV1DocumentsDocumentIdVersionsVersionIdKey(args)
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
                (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$get']
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
          client.api.v1.documents[':DocumentId'].versions[':VersionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1DocumentsDocumentIdVersionsVersionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$get']
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
        ? getGetApiV1DocumentsDocumentIdVersionsVersionIdKey(args)
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
                (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$get']
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
          client.api.v1.documents[':DocumentId'].versions[':VersionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1DocumentsDocumentIdVersionsVersionIdKey() {
  return ['api', '/api/v1/documents/:DocumentId/versions/:VersionId', 'DELETE'] as const
}

export function useDeleteApiV1DocumentsDocumentIdVersionsVersionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1DocumentsDocumentIdVersionsVersionIdKey()
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
            (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.documents[':DocumentId'].versions[':VersionId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1DocumentsDocumentIdVersionsVersionIdKey() {
  return ['api', '/api/v1/documents/:DocumentId/versions/:VersionId', 'PATCH'] as const
}

export function usePatchApiV1DocumentsDocumentIdVersionsVersionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1DocumentsDocumentIdVersionsVersionIdKey()
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
            (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.documents[':DocumentId'].versions[':VersionId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1UsersUserIdActivationKey() {
  return ['api', '/api/v1/users/:UserId/activation', 'POST'] as const
}

export function usePostApiV1UsersUserIdActivation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.users)[':UserId']['activation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.users)[':UserId']['activation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1UsersUserIdActivationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.users)[':UserId']['activation']['$post']>
        },
      ) => parseResponse(client.api.v1.users[':UserId'].activation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1UsersUserIdActivationKey() {
  return ['api', '/api/v1/users/:UserId/activation', 'DELETE'] as const
}

export function useDeleteApiV1UsersUserIdActivation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.users)[':UserId']['activation']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.users)[':UserId']['activation']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1UsersUserIdActivationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.users)[':UserId']['activation']['$delete']>
        },
      ) => parseResponse(client.api.v1.users[':UserId'].activation.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ResourcesResourceIdPermissionsKey(
  args: InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/resources/:ResourceId/permissions', keyArgs] as const
}

export function useGetApiV1ResourcesResourceIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$get']>
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
        ? getGetApiV1ResourcesResourceIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.resources[':ResourceId'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ResourcesResourceIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$get']>
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
        ? getGetApiV1ResourcesResourceIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.resources[':ResourceId'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ResourcesResourceIdPermissionsKey() {
  return ['api', '/api/v1/resources/:ResourceId/permissions', 'POST'] as const
}

export function usePostApiV1ResourcesResourceIdPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ResourcesResourceIdPermissionsKey()
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
            (typeof client.api.v1.resources)[':ResourceId']['permissions']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v1.resources[':ResourceId'].permissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1ResourcesResourceIdPermissionsKey() {
  return ['api', '/api/v1/resources/:ResourceId/permissions', 'DELETE'] as const
}

export function useDeleteApiV1ResourcesResourceIdPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1ResourcesResourceIdPermissionsKey()
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
            (typeof client.api.v1.resources)[':ResourceId']['permissions']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.resources[':ResourceId'].permissions.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1DocumentsDocumentIdVersionsVersionIdCommentKey() {
  return ['api', '/api/v1/documents/:DocumentId/versions/:VersionId/comment', 'POST'] as const
}

export function usePostApiV1DocumentsDocumentIdVersionsVersionIdComment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comment']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1DocumentsDocumentIdVersionsVersionIdCommentKey()
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
            (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comment']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.documents[':DocumentId'].versions[':VersionId'].comment.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1ResourcesResourceIdCustomMetadataKey() {
  return ['api', '/api/v1/resources/:ResourceId/customMetadata', 'PUT'] as const
}

export function usePutApiV1ResourcesResourceIdCustomMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.resources)[':ResourceId']['customMetadata']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['customMetadata']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1ResourcesResourceIdCustomMetadataKey()
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
            (typeof client.api.v1.resources)[':ResourceId']['customMetadata']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.resources[':ResourceId'].customMetadata.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1ResourcesResourceIdCustomMetadataKey() {
  return ['api', '/api/v1/resources/:ResourceId/customMetadata', 'DELETE'] as const
}

export function useDeleteApiV1ResourcesResourceIdCustomMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.resources)[':ResourceId']['customMetadata']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['customMetadata']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1ResourcesResourceIdCustomMetadataKey()
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
            (typeof client.api.v1.resources)[':ResourceId']['customMetadata']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.resources[':ResourceId'].customMetadata.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1FoldersKey() {
  return ['api', '/api/v1/folders', 'POST'] as const
}

export function usePostApiV1Folders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.folders.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.folders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1FoldersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.folders.$post> }) =>
        parseResponse(client.api.v1.folders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1ResourcesResourceIdLabelsKey() {
  return ['api', '/api/v1/resources/:ResourceId/labels', 'PUT'] as const
}

export function usePutApiV1ResourcesResourceIdLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.resources)[':ResourceId']['labels']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['labels']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1ResourcesResourceIdLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['labels']['$put']>
        },
      ) => parseResponse(client.api.v1.resources[':ResourceId'].labels.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1ResourcesResourceIdLabelsKey() {
  return ['api', '/api/v1/resources/:ResourceId/labels', 'DELETE'] as const
}

export function useDeleteApiV1ResourcesResourceIdLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.resources)[':ResourceId']['labels']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['labels']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1ResourcesResourceIdLabelsKey()
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
            (typeof client.api.v1.resources)[':ResourceId']['labels']['$delete']
          >
        },
      ) => parseResponse(client.api.v1.resources[':ResourceId'].labels.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1OrganizationsOrganizationIdSubscriptionsKey(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/organizations/:OrganizationId/subscriptions', keyArgs] as const
}

export function useGetApiV1OrganizationsOrganizationIdSubscriptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions']['$get']
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
        ? getGetApiV1OrganizationsOrganizationIdSubscriptionsKey(args)
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
                (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions']['$get']
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
          client.api.v1.organizations[':OrganizationId'].subscriptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1OrganizationsOrganizationIdSubscriptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions']['$get']
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
        ? getGetApiV1OrganizationsOrganizationIdSubscriptionsKey(args)
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
                (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions']['$get']
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
          client.api.v1.organizations[':OrganizationId'].subscriptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1OrganizationsOrganizationIdSubscriptionsKey() {
  return ['api', '/api/v1/organizations/:OrganizationId/subscriptions', 'POST'] as const
}

export function usePostApiV1OrganizationsOrganizationIdSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1OrganizationsOrganizationIdSubscriptionsKey()
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
            (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.organizations[':OrganizationId'].subscriptions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1UsersKey(args: InferRequestType<typeof client.api.v1.users.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/users', keyArgs] as const
}

export function useGetApiV1Users<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1UsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Users<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1UsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1UsersKey() {
  return ['api', '/api/v1/users', 'POST'] as const
}

export function usePostApiV1Users<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1UsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.users.$post> }) =>
        parseResponse(client.api.v1.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1DocumentsDocumentIdVersionsVersionIdCommentCommentIdKey() {
  return [
    'api',
    '/api/v1/documents/:DocumentId/versions/:VersionId/comment/:CommentId',
    'DELETE',
  ] as const
}

export function useDeleteApiV1DocumentsDocumentIdVersionsVersionIdCommentCommentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comment'][':CommentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comment'][':CommentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV1DocumentsDocumentIdVersionsVersionIdCommentCommentIdKey()
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
            (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comment'][':CommentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.documents[':DocumentId'].versions[':VersionId'].comment[
            ':CommentId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1DocumentsDocumentIdKey(
  args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/documents/:DocumentId', keyArgs] as const
}

export function useGetApiV1DocumentsDocumentId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['$get']>>
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
        ? getGetApiV1DocumentsDocumentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.documents[':DocumentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1DocumentsDocumentId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['$get']>>
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
        ? getGetApiV1DocumentsDocumentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.documents[':DocumentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1DocumentsDocumentIdKey() {
  return ['api', '/api/v1/documents/:DocumentId', 'DELETE'] as const
}

export function useDeleteApiV1DocumentsDocumentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1DocumentsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['$delete']> },
      ) => parseResponse(client.api.v1.documents[':DocumentId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1DocumentsDocumentIdKey() {
  return ['api', '/api/v1/documents/:DocumentId', 'PATCH'] as const
}

export function usePatchApiV1DocumentsDocumentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1DocumentsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['$patch']> },
      ) => parseResponse(client.api.v1.documents[':DocumentId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1DocumentVersionsDocumentIdVersionsVersionIdDeletePriorVersionsKey() {
  return [
    'api',
    '/api/v1/documentVersions/:DocumentId/versions/:VersionId#deletePriorVersions',
    'DELETE',
  ] as const
}

export function useDeleteApiV1DocumentVersionsDocumentIdVersionsVersionIdDeletePriorVersions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.documentVersions)[':DocumentId']['versions'][':VersionId#deletePriorVersions']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.documentVersions)[':DocumentId']['versions'][':VersionId#deletePriorVersions']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV1DocumentVersionsDocumentIdVersionsVersionIdDeletePriorVersionsKey()
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
            (typeof client.api.v1.documentVersions)[':DocumentId']['versions'][':VersionId#deletePriorVersions']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.documentVersions[':DocumentId'].versions[
            ':VersionId#deletePriorVersions'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1FoldersFolderIdKey(
  args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/folders/:FolderId', keyArgs] as const
}

export function useGetApiV1FoldersFolderId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['$get']>>
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
        ? getGetApiV1FoldersFolderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.folders[':FolderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1FoldersFolderId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['$get']>>
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
        ? getGetApiV1FoldersFolderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.folders[':FolderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1FoldersFolderIdKey() {
  return ['api', '/api/v1/folders/:FolderId', 'DELETE'] as const
}

export function useDeleteApiV1FoldersFolderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.folders)[':FolderId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1FoldersFolderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['$delete']> },
      ) => parseResponse(client.api.v1.folders[':FolderId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1FoldersFolderIdKey() {
  return ['api', '/api/v1/folders/:FolderId', 'PATCH'] as const
}

export function usePatchApiV1FoldersFolderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.folders)[':FolderId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1FoldersFolderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['$patch']> },
      ) => parseResponse(client.api.v1.folders[':FolderId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1FoldersFolderIdContentsKey(
  args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['contents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/folders/:FolderId/contents', keyArgs] as const
}

export function useGetApiV1FoldersFolderIdContents<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['contents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['contents']['$get']>>
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
        ? getGetApiV1FoldersFolderIdContentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['contents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.folders[':FolderId'].contents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1FoldersFolderIdContents<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['contents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['contents']['$get']>>
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
        ? getGetApiV1FoldersFolderIdContentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['contents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.folders[':FolderId'].contents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1FoldersFolderIdContentsKey() {
  return ['api', '/api/v1/folders/:FolderId/contents', 'DELETE'] as const
}

export function useDeleteApiV1FoldersFolderIdContents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['contents']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.folders)[':FolderId']['contents']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1FoldersFolderIdContentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['contents']['$delete']>
        },
      ) => parseResponse(client.api.v1.folders[':FolderId'].contents.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1OrganizationsOrganizationIdSubscriptionsSubscriptionIdKey() {
  return [
    'api',
    '/api/v1/organizations/:OrganizationId/subscriptions/:SubscriptionId',
    'DELETE',
  ] as const
}

export function useDeleteApiV1OrganizationsOrganizationIdSubscriptionsSubscriptionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions'][':SubscriptionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions'][':SubscriptionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV1OrganizationsOrganizationIdSubscriptionsSubscriptionIdKey()
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
            (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions'][':SubscriptionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.organizations[':OrganizationId'].subscriptions[':SubscriptionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1UsersUserIdKey() {
  return ['api', '/api/v1/users/:UserId', 'DELETE'] as const
}

export function useDeleteApiV1UsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.users)[':UserId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.users)[':UserId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1UsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.users)[':UserId']['$delete']> },
      ) => parseResponse(client.api.v1.users[':UserId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1UsersUserIdKey() {
  return ['api', '/api/v1/users/:UserId', 'PATCH'] as const
}

export function usePatchApiV1UsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':UserId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.users)[':UserId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1UsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.users)[':UserId']['$patch']> },
      ) => parseResponse(client.api.v1.users[':UserId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ActivitiesKey(
  args: InferRequestType<typeof client.api.v1.activities.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/activities', keyArgs] as const
}

export function useGetApiV1Activities<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.activities.$get>>>>
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
        ? getGetApiV1ActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.activities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Activities<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.activities.$get>>>>
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
        ? getGetApiV1ActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.activities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1DocumentsDocumentIdVersionsVersionIdCommentsKey(
  args: InferRequestType<
    (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comments']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/documents/:DocumentId/versions/:VersionId/comments', keyArgs] as const
}

export function useGetApiV1DocumentsDocumentIdVersionsVersionIdComments<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comments']['$get']
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
        ? getGetApiV1DocumentsDocumentIdVersionsVersionIdCommentsKey(args)
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
                (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comments']['$get']
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
          client.api.v1.documents[':DocumentId'].versions[':VersionId'].comments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1DocumentsDocumentIdVersionsVersionIdComments<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comments']['$get']
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
        ? getGetApiV1DocumentsDocumentIdVersionsVersionIdCommentsKey(args)
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
                (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comments']['$get']
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
          client.api.v1.documents[':DocumentId'].versions[':VersionId'].comments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1DocumentsDocumentIdVersionsKey(
  args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['versions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/documents/:DocumentId/versions', keyArgs] as const
}

export function useGetApiV1DocumentsDocumentIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['versions']['$get']>>
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
        ? getGetApiV1DocumentsDocumentIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.documents[':DocumentId'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1DocumentsDocumentIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['versions']['$get']>>
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
        ? getGetApiV1DocumentsDocumentIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.documents[':DocumentId'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1GroupsSearchQueryKey(
  args: InferRequestType<(typeof client.api.v1)['groups#searchQuery']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/groups#searchQuery', keyArgs] as const
}

export function useGetApiV1GroupsSearchQuery<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['groups#searchQuery']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups#searchQuery']['$get']>>
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
        ? getGetApiV1GroupsSearchQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups#searchQuery']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['groups#searchQuery'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1GroupsSearchQuery<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['groups#searchQuery']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups#searchQuery']['$get']>>
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
        ? getGetApiV1GroupsSearchQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['groups#searchQuery']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['groups#searchQuery'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1MeRootAuthenticationKey(
  args: InferRequestType<(typeof client.api.v1.me)['root#Authentication']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/me/root#Authentication', keyArgs] as const
}

export function useGetApiV1MeRootAuthentication<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.me)['root#Authentication']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.me)['root#Authentication']['$get']>>
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
        ? getGetApiV1MeRootAuthenticationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.me)['root#Authentication']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.me['root#Authentication'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1MeRootAuthentication<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.me)['root#Authentication']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.me)['root#Authentication']['$get']>>
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
        ? getGetApiV1MeRootAuthenticationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.me)['root#Authentication']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.me['root#Authentication'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1MeAuthenticationKey(
  args: InferRequestType<(typeof client.api.v1)['me#Authentication']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/me#Authentication', keyArgs] as const
}

export function useGetApiV1MeAuthentication<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['me#Authentication']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['me#Authentication']['$get']>>
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
        ? getGetApiV1MeAuthenticationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['me#Authentication']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['me#Authentication'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1MeAuthentication<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['me#Authentication']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['me#Authentication']['$get']>>
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
        ? getGetApiV1MeAuthenticationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['me#Authentication']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['me#Authentication'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1DocumentsDocumentIdPathKey(
  args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['path']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/documents/:DocumentId/path', keyArgs] as const
}

export function useGetApiV1DocumentsDocumentIdPath<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['path']['$get']>>
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
        ? getGetApiV1DocumentsDocumentIdPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['path']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.documents[':DocumentId'].path.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1DocumentsDocumentIdPath<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['path']['$get']>>
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
        ? getGetApiV1DocumentsDocumentIdPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['path']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.documents[':DocumentId'].path.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1FoldersFolderIdPathKey(
  args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['path']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/folders/:FolderId/path', keyArgs] as const
}

export function useGetApiV1FoldersFolderIdPath<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['path']['$get']>>
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
        ? getGetApiV1FoldersFolderIdPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['path']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.folders[':FolderId'].path.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1FoldersFolderIdPath<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['path']['$get']>>
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
        ? getGetApiV1FoldersFolderIdPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['path']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.folders[':FolderId'].path.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ResourcesKey(
  args: InferRequestType<typeof client.api.v1.resources.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/resources', keyArgs] as const
}

export function useGetApiV1Resources<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.resources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resources.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ResourcesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resources.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Resources<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.resources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resources.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ResourcesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resources.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1DocumentsKey() {
  return ['api', '/api/v1/documents', 'POST'] as const
}

export function usePostApiV1Documents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.documents.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.documents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1DocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.documents.$post> }) =>
        parseResponse(client.api.v1.documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1ResourcesResourceIdPermissionsPrincipalIdKey() {
  return ['api', '/api/v1/resources/:ResourceId/permissions/:PrincipalId', 'DELETE'] as const
}

export function useDeleteApiV1ResourcesResourceIdPermissionsPrincipalId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.resources)[':ResourceId']['permissions'][':PrincipalId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.resources)[':ResourceId']['permissions'][':PrincipalId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1ResourcesResourceIdPermissionsPrincipalIdKey()
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
            (typeof client.api.v1.resources)[':ResourceId']['permissions'][':PrincipalId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.resources[':ResourceId'].permissions[':PrincipalId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1DocumentVersionsRestoreDocumentIdKey() {
  return ['api', '/api/v1/documentVersions/restore/:DocumentId', 'POST'] as const
}

export function usePostApiV1DocumentVersionsRestoreDocumentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.documentVersions.restore)[':DocumentId']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.documentVersions.restore)[':DocumentId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1DocumentVersionsRestoreDocumentIdKey()
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
            (typeof client.api.v1.documentVersions.restore)[':DocumentId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.documentVersions.restore[':DocumentId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SearchKey() {
  return ['api', '/api/v1/search', 'POST'] as const
}

export function usePostApiV1Search<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.search.$post> }) =>
        parseResponse(client.api.v1.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
