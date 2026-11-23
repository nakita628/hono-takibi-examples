import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1DocumentsDocumentIdVersionsVersionIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/documents/:DocumentId/versions/:VersionId', keyArgs] as const
}

export function getApiV1DocumentsDocumentIdVersionsVersionIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiV1DocumentsDocumentIdVersionsVersionIdQueryKey>
  >({
    queryKey: getApiV1DocumentsDocumentIdVersionsVersionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.documents[':DocumentId'].versions[':VersionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DocumentsDocumentIdVersionsVersionId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiV1DocumentsDocumentIdVersionsVersionIdQueryKey>
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
      ...getApiV1DocumentsDocumentIdVersionsVersionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DocumentsDocumentIdVersionsVersionId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiV1DocumentsDocumentIdVersionsVersionIdQueryKey>
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
      ...getApiV1DocumentsDocumentIdVersionsVersionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiV1DocumentsDocumentIdVersionsVersionIdMutationKey() {
  return ['api', '/api/v1/documents/:DocumentId/versions/:VersionId', 'DELETE'] as const
}

export function getDeleteApiV1DocumentsDocumentIdVersionsVersionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1DocumentsDocumentIdVersionsVersionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.documents[':DocumentId'].versions[':VersionId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1DocumentsDocumentIdVersionsVersionId<
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
                    (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$delete']
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
  const mutationDefaults = getDeleteApiV1DocumentsDocumentIdVersionsVersionIdMutationOptions<
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

export function getPatchApiV1DocumentsDocumentIdVersionsVersionIdMutationKey() {
  return ['api', '/api/v1/documents/:DocumentId/versions/:VersionId', 'PATCH'] as const
}

export function getPatchApiV1DocumentsDocumentIdVersionsVersionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1DocumentsDocumentIdVersionsVersionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.documents[':DocumentId'].versions[':VersionId'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1DocumentsDocumentIdVersionsVersionId<
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
                  (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$patch']
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
  const mutationDefaults = getPatchApiV1DocumentsDocumentIdVersionsVersionIdMutationOptions<
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

export function getPostApiV1UsersUserIdActivationMutationKey() {
  return ['api', '/api/v1/users/:UserId/activation', 'POST'] as const
}

export function getPostApiV1UsersUserIdActivationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.users)[':UserId']['activation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':UserId']['activation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersUserIdActivationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.users)[':UserId']['activation']['$post']>,
    ) {
      return parseResponse(client.api.v1.users[':UserId'].activation.$post(args, options))
    },
  })
}

export function usePostApiV1UsersUserIdActivation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.users)[':UserId']['activation']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.users)[':UserId']['activation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1UsersUserIdActivationMutationOptions<
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

export function getDeleteApiV1UsersUserIdActivationMutationKey() {
  return ['api', '/api/v1/users/:UserId/activation', 'DELETE'] as const
}

export function getDeleteApiV1UsersUserIdActivationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.users)[':UserId']['activation']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':UserId']['activation']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1UsersUserIdActivationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.users)[':UserId']['activation']['$delete']>,
    ) {
      return parseResponse(client.api.v1.users[':UserId'].activation.$delete(args, options))
    },
  })
}

export function useDeleteApiV1UsersUserIdActivation<
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
                  ReturnType<(typeof client.api.v1.users)[':UserId']['activation']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v1.users)[':UserId']['activation']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1UsersUserIdActivationMutationOptions<
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

export function getApiV1ResourcesResourceIdPermissionsQueryKey(
  args: InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/resources/:ResourceId/permissions', keyArgs] as const
}

export function getApiV1ResourcesResourceIdPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ResourcesResourceIdPermissionsQueryKey>
  >({
    queryKey: getApiV1ResourcesResourceIdPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.resources[':ResourceId'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1ResourcesResourceIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ResourcesResourceIdPermissionsQueryKey>
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
      ...getApiV1ResourcesResourceIdPermissionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1ResourcesResourceIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ResourcesResourceIdPermissionsQueryKey>
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
      ...getApiV1ResourcesResourceIdPermissionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1ResourcesResourceIdPermissionsMutationKey() {
  return ['api', '/api/v1/resources/:ResourceId/permissions', 'POST'] as const
}

export function getPostApiV1ResourcesResourceIdPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ResourcesResourceIdPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.resources)[':ResourceId']['permissions']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.resources[':ResourceId'].permissions.$post(args, options))
    },
  })
}

export function usePostApiV1ResourcesResourceIdPermissions<
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
                ReturnType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ResourcesResourceIdPermissionsMutationOptions<
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

export function getDeleteApiV1ResourcesResourceIdPermissionsMutationKey() {
  return ['api', '/api/v1/resources/:ResourceId/permissions', 'DELETE'] as const
}

export function getDeleteApiV1ResourcesResourceIdPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ResourcesResourceIdPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.resources)[':ResourceId']['permissions']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.resources[':ResourceId'].permissions.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1ResourcesResourceIdPermissions<
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
                    (typeof client.api.v1.resources)[':ResourceId']['permissions']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1ResourcesResourceIdPermissionsMutationOptions<
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

export function getPostApiV1DocumentsDocumentIdVersionsVersionIdCommentMutationKey() {
  return ['api', '/api/v1/documents/:DocumentId/versions/:VersionId/comment', 'POST'] as const
}

export function getPostApiV1DocumentsDocumentIdVersionsVersionIdCommentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DocumentsDocumentIdVersionsVersionIdCommentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comment']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.documents[':DocumentId'].versions[':VersionId'].comment.$post(args, options),
      )
    },
  })
}

export function usePostApiV1DocumentsDocumentIdVersionsVersionIdComment<
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
                  (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comment']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comment']['$post']
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
  const mutationDefaults = getPostApiV1DocumentsDocumentIdVersionsVersionIdCommentMutationOptions<
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

export function getPutApiV1ResourcesResourceIdCustomMetadataMutationKey() {
  return ['api', '/api/v1/resources/:ResourceId/customMetadata', 'PUT'] as const
}

export function getPutApiV1ResourcesResourceIdCustomMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['customMetadata']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ResourcesResourceIdCustomMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.resources)[':ResourceId']['customMetadata']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.resources[':ResourceId'].customMetadata.$put(args, options),
      )
    },
  })
}

export function usePutApiV1ResourcesResourceIdCustomMetadata<
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
                  (typeof client.api.v1.resources)[':ResourceId']['customMetadata']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['customMetadata']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1ResourcesResourceIdCustomMetadataMutationOptions<
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

export function getDeleteApiV1ResourcesResourceIdCustomMetadataMutationKey() {
  return ['api', '/api/v1/resources/:ResourceId/customMetadata', 'DELETE'] as const
}

export function getDeleteApiV1ResourcesResourceIdCustomMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['customMetadata']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ResourcesResourceIdCustomMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.resources)[':ResourceId']['customMetadata']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.resources[':ResourceId'].customMetadata.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1ResourcesResourceIdCustomMetadata<
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
                  (typeof client.api.v1.resources)[':ResourceId']['customMetadata']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.resources)[':ResourceId']['customMetadata']['$delete']
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
  const mutationDefaults = getDeleteApiV1ResourcesResourceIdCustomMetadataMutationOptions<
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

export function getPostApiV1FoldersMutationKey() {
  return ['api', '/api/v1/folders', 'POST'] as const
}

export function getPostApiV1FoldersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.folders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.folders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1FoldersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.folders.$post>) {
      return parseResponse(client.api.v1.folders.$post(args, options))
    },
  })
}

export function usePostApiV1Folders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.folders.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.folders.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1FoldersMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV1ResourcesResourceIdLabelsMutationKey() {
  return ['api', '/api/v1/resources/:ResourceId/labels', 'PUT'] as const
}

export function getPutApiV1ResourcesResourceIdLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.resources)[':ResourceId']['labels']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['labels']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ResourcesResourceIdLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['labels']['$put']>,
    ) {
      return parseResponse(client.api.v1.resources[':ResourceId'].labels.$put(args, options))
    },
  })
}

export function usePutApiV1ResourcesResourceIdLabels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.resources)[':ResourceId']['labels']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['labels']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1ResourcesResourceIdLabelsMutationOptions<
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

export function getDeleteApiV1ResourcesResourceIdLabelsMutationKey() {
  return ['api', '/api/v1/resources/:ResourceId/labels', 'DELETE'] as const
}

export function getDeleteApiV1ResourcesResourceIdLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.resources)[':ResourceId']['labels']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['labels']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ResourcesResourceIdLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['labels']['$delete']>,
    ) {
      return parseResponse(client.api.v1.resources[':ResourceId'].labels.$delete(args, options))
    },
  })
}

export function useDeleteApiV1ResourcesResourceIdLabels<
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
                ReturnType<(typeof client.api.v1.resources)[':ResourceId']['labels']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['labels']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1ResourcesResourceIdLabelsMutationOptions<
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

export function getApiV1OrganizationsOrganizationIdSubscriptionsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/organizations/:OrganizationId/subscriptions', keyArgs] as const
}

export function getApiV1OrganizationsOrganizationIdSubscriptionsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiV1OrganizationsOrganizationIdSubscriptionsQueryKey>
  >({
    queryKey: getApiV1OrganizationsOrganizationIdSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.organizations[':OrganizationId'].subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1OrganizationsOrganizationIdSubscriptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiV1OrganizationsOrganizationIdSubscriptionsQueryKey>
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
      ...getApiV1OrganizationsOrganizationIdSubscriptionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1OrganizationsOrganizationIdSubscriptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiV1OrganizationsOrganizationIdSubscriptionsQueryKey>
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
      ...getApiV1OrganizationsOrganizationIdSubscriptionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1OrganizationsOrganizationIdSubscriptionsMutationKey() {
  return ['api', '/api/v1/organizations/:OrganizationId/subscriptions', 'POST'] as const
}

export function getPostApiV1OrganizationsOrganizationIdSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1OrganizationsOrganizationIdSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.organizations[':OrganizationId'].subscriptions.$post(args, options),
      )
    },
  })
}

export function usePostApiV1OrganizationsOrganizationIdSubscriptions<
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
                  (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions']['$post']
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
  const mutationDefaults = getPostApiV1OrganizationsOrganizationIdSubscriptionsMutationOptions<
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

export function getApiV1UsersQueryKey(args: InferRequestType<typeof client.api.v1.users.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/users', keyArgs] as const
}

export function getApiV1UsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersQueryKey>
  >({
    queryKey: getApiV1UsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.users.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1UsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1UsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.users.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1UsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1UsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1UsersMutationKey() {
  return ['api', '/api/v1/users', 'POST'] as const
}

export function getPostApiV1UsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.users.$post>) {
      return parseResponse(client.api.v1.users.$post(args, options))
    },
  })
}

export function usePostApiV1Users<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.users.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1UsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV1DocumentsDocumentIdVersionsVersionIdCommentCommentIdMutationKey() {
  return [
    'api',
    '/api/v1/documents/:DocumentId/versions/:VersionId/comment/:CommentId',
    'DELETE',
  ] as const
}

export function getDeleteApiV1DocumentsDocumentIdVersionsVersionIdCommentCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comment'][':CommentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1DocumentsDocumentIdVersionsVersionIdCommentCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comment'][':CommentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.documents[':DocumentId'].versions[':VersionId'].comment[':CommentId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiV1DocumentsDocumentIdVersionsVersionIdCommentCommentId<
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
                    (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comment'][':CommentId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comment'][':CommentId']['$delete']
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
    getDeleteApiV1DocumentsDocumentIdVersionsVersionIdCommentCommentIdMutationOptions<
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

export function getApiV1DocumentsDocumentIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/documents/:DocumentId', keyArgs] as const
}

export function getApiV1DocumentsDocumentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DocumentsDocumentIdQueryKey>
  >({
    queryKey: getApiV1DocumentsDocumentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.documents[':DocumentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DocumentsDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DocumentsDocumentIdQueryKey>
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
      ...getApiV1DocumentsDocumentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DocumentsDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DocumentsDocumentIdQueryKey>
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
      ...getApiV1DocumentsDocumentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiV1DocumentsDocumentIdMutationKey() {
  return ['api', '/api/v1/documents/:DocumentId', 'DELETE'] as const
}

export function getDeleteApiV1DocumentsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1DocumentsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['$delete']>,
    ) {
      return parseResponse(client.api.v1.documents[':DocumentId'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1DocumentsDocumentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1DocumentsDocumentIdMutationOptions<
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

export function getPatchApiV1DocumentsDocumentIdMutationKey() {
  return ['api', '/api/v1/documents/:DocumentId', 'PATCH'] as const
}

export function getPatchApiV1DocumentsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1DocumentsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['$patch']>,
    ) {
      return parseResponse(client.api.v1.documents[':DocumentId'].$patch(args, options))
    },
  })
}

export function usePatchApiV1DocumentsDocumentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV1DocumentsDocumentIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1DocumentVersionsDocumentIdVersionsVersionIdDeletePriorVersionsMutationKey() {
  return [
    'api',
    '/api/v1/documentVersions/:DocumentId/versions/:VersionId#deletePriorVersions',
    'DELETE',
  ] as const
}

export function getDeleteApiV1DocumentVersionsDocumentIdVersionsVersionIdDeletePriorVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.documentVersions)[':DocumentId']['versions'][':VersionId#deletePriorVersions']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApiV1DocumentVersionsDocumentIdVersionsVersionIdDeletePriorVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.documentVersions)[':DocumentId']['versions'][':VersionId#deletePriorVersions']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.documentVersions[':DocumentId'].versions[
          ':VersionId#deletePriorVersions'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1DocumentVersionsDocumentIdVersionsVersionIdDeletePriorVersions<
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
                    (typeof client.api.v1.documentVersions)[':DocumentId']['versions'][':VersionId#deletePriorVersions']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.v1.documentVersions)[':DocumentId']['versions'][':VersionId#deletePriorVersions']['$delete']
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
    getDeleteApiV1DocumentVersionsDocumentIdVersionsVersionIdDeletePriorVersionsMutationOptions<
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

export function getApiV1FoldersFolderIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/folders/:FolderId', keyArgs] as const
}

export function getApiV1FoldersFolderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FoldersFolderIdQueryKey>
  >({
    queryKey: getApiV1FoldersFolderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.folders[':FolderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1FoldersFolderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1FoldersFolderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1FoldersFolderIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1FoldersFolderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1FoldersFolderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1FoldersFolderIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteApiV1FoldersFolderIdMutationKey() {
  return ['api', '/api/v1/folders/:FolderId', 'DELETE'] as const
}

export function getDeleteApiV1FoldersFolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.folders)[':FolderId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1FoldersFolderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['$delete']>,
    ) {
      return parseResponse(client.api.v1.folders[':FolderId'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1FoldersFolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v1.folders)[':FolderId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1FoldersFolderIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiV1FoldersFolderIdMutationKey() {
  return ['api', '/api/v1/folders/:FolderId', 'PATCH'] as const
}

export function getPatchApiV1FoldersFolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.folders)[':FolderId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1FoldersFolderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['$patch']>,
    ) {
      return parseResponse(client.api.v1.folders[':FolderId'].$patch(args, options))
    },
  })
}

export function usePatchApiV1FoldersFolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.folders)[':FolderId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV1FoldersFolderIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1FoldersFolderIdContentsQueryKey(
  args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['contents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/folders/:FolderId/contents', keyArgs] as const
}

export function getApiV1FoldersFolderIdContentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['contents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['contents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['contents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FoldersFolderIdContentsQueryKey>
  >({
    queryKey: getApiV1FoldersFolderIdContentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.folders[':FolderId'].contents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1FoldersFolderIdContents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['contents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['contents']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['contents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1FoldersFolderIdContentsQueryKey>
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
      ...getApiV1FoldersFolderIdContentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1FoldersFolderIdContents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['contents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['contents']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['contents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1FoldersFolderIdContentsQueryKey>
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
      ...getApiV1FoldersFolderIdContentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiV1FoldersFolderIdContentsMutationKey() {
  return ['api', '/api/v1/folders/:FolderId/contents', 'DELETE'] as const
}

export function getDeleteApiV1FoldersFolderIdContentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['contents']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.folders)[':FolderId']['contents']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1FoldersFolderIdContentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['contents']['$delete']>,
    ) {
      return parseResponse(client.api.v1.folders[':FolderId'].contents.$delete(args, options))
    },
  })
}

export function useDeleteApiV1FoldersFolderIdContents<
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
                  ReturnType<(typeof client.api.v1.folders)[':FolderId']['contents']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v1.folders)[':FolderId']['contents']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1FoldersFolderIdContentsMutationOptions<
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

export function getDeleteApiV1OrganizationsOrganizationIdSubscriptionsSubscriptionIdMutationKey() {
  return [
    'api',
    '/api/v1/organizations/:OrganizationId/subscriptions/:SubscriptionId',
    'DELETE',
  ] as const
}

export function getDeleteApiV1OrganizationsOrganizationIdSubscriptionsSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions'][':SubscriptionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1OrganizationsOrganizationIdSubscriptionsSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions'][':SubscriptionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.organizations[':OrganizationId'].subscriptions[':SubscriptionId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiV1OrganizationsOrganizationIdSubscriptionsSubscriptionId<
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
                  (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions'][':SubscriptionId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions'][':SubscriptionId']['$delete']
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
    getDeleteApiV1OrganizationsOrganizationIdSubscriptionsSubscriptionIdMutationOptions<
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

export function getDeleteApiV1UsersUserIdMutationKey() {
  return ['api', '/api/v1/users/:UserId', 'DELETE'] as const
}

export function getDeleteApiV1UsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.users)[':UserId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':UserId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1UsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.users)[':UserId']['$delete']>) {
      return parseResponse(client.api.v1.users[':UserId'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1UsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.users)[':UserId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v1.users)[':UserId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1UsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiV1UsersUserIdMutationKey() {
  return ['api', '/api/v1/users/:UserId', 'PATCH'] as const
}

export function getPatchApiV1UsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':UserId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':UserId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1UsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.users)[':UserId']['$patch']>) {
      return parseResponse(client.api.v1.users[':UserId'].$patch(args, options))
    },
  })
}

export function usePatchApiV1UsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.users)[':UserId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.users)[':UserId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV1UsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ActivitiesQueryKey(
  args: InferRequestType<typeof client.api.v1.activities.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/activities', keyArgs] as const
}

export function getApiV1ActivitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.activities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.activities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.activities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ActivitiesQueryKey>
  >({
    queryKey: getApiV1ActivitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.activities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Activities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.activities.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.activities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ActivitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ActivitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Activities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.activities.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.activities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ActivitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ActivitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1DocumentsDocumentIdVersionsVersionIdCommentsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comments']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/documents/:DocumentId/versions/:VersionId/comments', keyArgs] as const
}

export function getApiV1DocumentsDocumentIdVersionsVersionIdCommentsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiV1DocumentsDocumentIdVersionsVersionIdCommentsQueryKey>
  >({
    queryKey: getApiV1DocumentsDocumentIdVersionsVersionIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.documents[':DocumentId'].versions[':VersionId'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DocumentsDocumentIdVersionsVersionIdComments<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comments']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiV1DocumentsDocumentIdVersionsVersionIdCommentsQueryKey>
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
      ...getApiV1DocumentsDocumentIdVersionsVersionIdCommentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DocumentsDocumentIdVersionsVersionIdComments<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comments']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiV1DocumentsDocumentIdVersionsVersionIdCommentsQueryKey>
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
      ...getApiV1DocumentsDocumentIdVersionsVersionIdCommentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DocumentsDocumentIdVersionsQueryKey(
  args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['versions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/documents/:DocumentId/versions', keyArgs] as const
}

export function getApiV1DocumentsDocumentIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DocumentsDocumentIdVersionsQueryKey>
  >({
    queryKey: getApiV1DocumentsDocumentIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.documents[':DocumentId'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DocumentsDocumentIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['versions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.documents)[':DocumentId']['versions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DocumentsDocumentIdVersionsQueryKey>
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
      ...getApiV1DocumentsDocumentIdVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DocumentsDocumentIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['versions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.documents)[':DocumentId']['versions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DocumentsDocumentIdVersionsQueryKey>
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
      ...getApiV1DocumentsDocumentIdVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1GroupsSearchQueryQueryKey(
  args: InferRequestType<(typeof client.api.v1)['groups#searchQuery']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/groups#searchQuery', keyArgs] as const
}

export function getApiV1GroupsSearchQueryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['groups#searchQuery']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['groups#searchQuery']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups#searchQuery']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsSearchQueryQueryKey>
  >({
    queryKey: getApiV1GroupsSearchQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['groups#searchQuery'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1GroupsSearchQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['groups#searchQuery']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['groups#searchQuery']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups#searchQuery']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1GroupsSearchQueryQueryKey>
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
      ...getApiV1GroupsSearchQueryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1GroupsSearchQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['groups#searchQuery']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['groups#searchQuery']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups#searchQuery']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1GroupsSearchQueryQueryKey>
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
      ...getApiV1GroupsSearchQueryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1MeRootAuthenticationQueryKey(
  args: InferRequestType<(typeof client.api.v1.me)['root#Authentication']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/me/root#Authentication', keyArgs] as const
}

export function getApiV1MeRootAuthenticationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.me)['root#Authentication']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.me)['root#Authentication']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.me)['root#Authentication']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MeRootAuthenticationQueryKey>
  >({
    queryKey: getApiV1MeRootAuthenticationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.me['root#Authentication'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1MeRootAuthentication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.me)['root#Authentication']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.me)['root#Authentication']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.me)['root#Authentication']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MeRootAuthenticationQueryKey>
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
      ...getApiV1MeRootAuthenticationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1MeRootAuthentication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.me)['root#Authentication']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.me)['root#Authentication']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.me)['root#Authentication']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MeRootAuthenticationQueryKey>
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
      ...getApiV1MeRootAuthenticationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1MeAuthenticationQueryKey(
  args: InferRequestType<(typeof client.api.v1)['me#Authentication']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/me#Authentication', keyArgs] as const
}

export function getApiV1MeAuthenticationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['me#Authentication']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['me#Authentication']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['me#Authentication']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MeAuthenticationQueryKey>
  >({
    queryKey: getApiV1MeAuthenticationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['me#Authentication'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1MeAuthentication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['me#Authentication']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['me#Authentication']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['me#Authentication']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MeAuthenticationQueryKey>
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
      ...getApiV1MeAuthenticationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1MeAuthentication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['me#Authentication']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['me#Authentication']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['me#Authentication']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MeAuthenticationQueryKey>
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
      ...getApiV1MeAuthenticationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DocumentsDocumentIdPathQueryKey(
  args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['path']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/documents/:DocumentId/path', keyArgs] as const
}

export function getApiV1DocumentsDocumentIdPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['path']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['path']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['path']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DocumentsDocumentIdPathQueryKey>
  >({
    queryKey: getApiV1DocumentsDocumentIdPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.documents[':DocumentId'].path.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DocumentsDocumentIdPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['path']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['path']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['path']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DocumentsDocumentIdPathQueryKey>
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
      ...getApiV1DocumentsDocumentIdPathQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DocumentsDocumentIdPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['path']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['path']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['path']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DocumentsDocumentIdPathQueryKey>
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
      ...getApiV1DocumentsDocumentIdPathQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1FoldersFolderIdPathQueryKey(
  args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['path']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/folders/:FolderId/path', keyArgs] as const
}

export function getApiV1FoldersFolderIdPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['path']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['path']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['path']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FoldersFolderIdPathQueryKey>
  >({
    queryKey: getApiV1FoldersFolderIdPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.folders[':FolderId'].path.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1FoldersFolderIdPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['path']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['path']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['path']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1FoldersFolderIdPathQueryKey>
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
      ...getApiV1FoldersFolderIdPathQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1FoldersFolderIdPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['path']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['path']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['path']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1FoldersFolderIdPathQueryKey>
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
      ...getApiV1FoldersFolderIdPathQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1ResourcesQueryKey(
  args: InferRequestType<typeof client.api.v1.resources.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/resources', keyArgs] as const
}

export function getApiV1ResourcesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resources.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.resources.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resources.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ResourcesQueryKey>
  >({
    queryKey: getApiV1ResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.resources.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Resources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.resources.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resources.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ResourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ResourcesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Resources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.resources.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resources.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ResourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ResourcesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1DocumentsMutationKey() {
  return ['api', '/api/v1/documents', 'POST'] as const
}

export function getPostApiV1DocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.documents.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.documents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DocumentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.documents.$post>) {
      return parseResponse(client.api.v1.documents.$post(args, options))
    },
  })
}

export function usePostApiV1Documents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.documents.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.documents.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DocumentsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1ResourcesResourceIdPermissionsPrincipalIdMutationKey() {
  return ['api', '/api/v1/resources/:ResourceId/permissions/:PrincipalId', 'DELETE'] as const
}

export function getDeleteApiV1ResourcesResourceIdPermissionsPrincipalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.v1.resources)[':ResourceId']['permissions'][':PrincipalId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ResourcesResourceIdPermissionsPrincipalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.resources)[':ResourceId']['permissions'][':PrincipalId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.resources[':ResourceId'].permissions[':PrincipalId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1ResourcesResourceIdPermissionsPrincipalId<
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
                    (typeof client.api.v1.resources)[':ResourceId']['permissions'][':PrincipalId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.v1.resources)[':ResourceId']['permissions'][':PrincipalId']['$delete']
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
  const mutationDefaults = getDeleteApiV1ResourcesResourceIdPermissionsPrincipalIdMutationOptions<
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

export function getPostApiV1DocumentVersionsRestoreDocumentIdMutationKey() {
  return ['api', '/api/v1/documentVersions/restore/:DocumentId', 'POST'] as const
}

export function getPostApiV1DocumentVersionsRestoreDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.v1.documentVersions.restore)[':DocumentId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DocumentVersionsRestoreDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.documentVersions.restore)[':DocumentId']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.documentVersions.restore[':DocumentId'].$post(args, options),
      )
    },
  })
}

export function usePostApiV1DocumentVersionsRestoreDocumentId<
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
                    (typeof client.api.v1.documentVersions.restore)[':DocumentId']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v1.documentVersions.restore)[':DocumentId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DocumentVersionsRestoreDocumentIdMutationOptions<
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

export function getPostApiV1SearchMutationKey() {
  return ['api', '/api/v1/search', 'POST'] as const
}

export function getPostApiV1SearchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.search.$post>) {
      return parseResponse(client.api.v1.search.$post(args, options))
    },
  })
}

export function usePostApiV1Search<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SearchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
