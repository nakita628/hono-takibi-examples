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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1DocumentsDocumentIdVersionsVersionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/documents/:DocumentId/versions/:VersionId', keyArgs] as const
}

export function getApiV1DocumentsDocumentIdVersionsVersionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DocumentsDocumentIdVersionsVersionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.documents[':DocumentId'].versions[':VersionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$get']
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
                    (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$get']
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
                    (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1DocumentsDocumentIdVersionsVersionIdQueryKey>
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
              (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DocumentsDocumentIdVersionsVersionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DocumentsDocumentIdVersionsVersionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.documents[':DocumentId'].versions[':VersionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/resources/:ResourceId/permissions', keyArgs] as const
}

export function getApiV1ResourcesResourceIdPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ResourcesResourceIdPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.resources[':ResourceId'].permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ResourcesResourceIdPermissionsQueryKey>
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
            ReturnType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ResourcesResourceIdPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ResourcesResourceIdPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.resources[':ResourceId'].permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.resources)[':ResourceId']['permissions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$post']>,
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
      Extract<
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
          InferRequestType<
            (typeof client.api.v1.resources)[':ResourceId']['permissions']['$delete']
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
          InferRequestType<
            (typeof client.api.v1.resources)[':ResourceId']['customMetadata']['$put']
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.folders.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.folders.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.resources)[':ResourceId']['labels']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['labels']['$put']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/organizations/:OrganizationId/subscriptions', keyArgs] as const
}

export function getApiV1OrganizationsOrganizationIdSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1OrganizationsOrganizationIdSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.organizations[':OrganizationId'].subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions']['$get']
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
                    (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions']['$get']
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
                    (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1OrganizationsOrganizationIdSubscriptionsQueryKey>
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
              (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OrganizationsOrganizationIdSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1OrganizationsOrganizationIdSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.organizations[':OrganizationId'].subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiV1UsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/users', keyArgs] as const
}

export function getApiV1UsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
          >,
          ReturnType<typeof getApiV1UsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.users.$post>,
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
      Extract<
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/documents/:DocumentId', keyArgs] as const
}

export function getApiV1DocumentsDocumentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DocumentsDocumentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.documents[':DocumentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1DocumentsDocumentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DocumentsDocumentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DocumentsDocumentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.documents[':DocumentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.folders)[':FolderId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/folders/:FolderId', keyArgs] as const
}

export function getApiV1FoldersFolderIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.folders)[':FolderId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1FoldersFolderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.folders[':FolderId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1FoldersFolderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.folders)[':FolderId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1FoldersFolderIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FoldersFolderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1FoldersFolderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.folders[':FolderId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.folders)[':FolderId']['contents']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/folders/:FolderId/contents', keyArgs] as const
}

export function getApiV1FoldersFolderIdContentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.folders)[':FolderId']['contents']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1FoldersFolderIdContentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.folders[':FolderId'].contents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.folders)[':FolderId']['contents']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['contents']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1FoldersFolderIdContentsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['contents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FoldersFolderIdContentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1FoldersFolderIdContentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.folders[':FolderId'].contents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.activities.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/activities', keyArgs] as const
}

export function getApiV1ActivitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.activities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ActivitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.activities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Activities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.activities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.activities.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.activities.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ActivitiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.activities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ActivitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ActivitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.activities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DocumentsDocumentIdVersionsVersionIdCommentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comments']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/documents/:DocumentId/versions/:VersionId/comments', keyArgs] as const
}

export function getApiV1DocumentsDocumentIdVersionsVersionIdCommentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DocumentsDocumentIdVersionsVersionIdCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.documents[':DocumentId'].versions[':VersionId'].comments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comments']['$get']
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
                    (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comments']['$get']
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
                    (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1DocumentsDocumentIdVersionsVersionIdCommentsQueryKey>
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
              (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DocumentsDocumentIdVersionsVersionIdCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DocumentsDocumentIdVersionsVersionIdCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.documents[':DocumentId'].versions[':VersionId'].comments.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DocumentsDocumentIdVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['versions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/documents/:DocumentId/versions', keyArgs] as const
}

export function getApiV1DocumentsDocumentIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DocumentsDocumentIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.documents[':DocumentId'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.documents)[':DocumentId']['versions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1DocumentsDocumentIdVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DocumentsDocumentIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DocumentsDocumentIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.documents[':DocumentId'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1GroupsSearchQueryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups#searchQuery']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/groups#searchQuery', keyArgs] as const
}

export function getApiV1GroupsSearchQueryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups#searchQuery']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GroupsSearchQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['groups#searchQuery'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups#searchQuery']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups#searchQuery']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1GroupsSearchQueryQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['groups#searchQuery']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsSearchQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GroupsSearchQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['groups#searchQuery'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MeRootAuthenticationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.me)['root#Authentication']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/me/root#Authentication', keyArgs] as const
}

export function getApiV1MeRootAuthenticationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.me)['root#Authentication']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MeRootAuthenticationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.me['root#Authentication'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.me)['root#Authentication']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.me)['root#Authentication']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1MeRootAuthenticationQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.me)['root#Authentication']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MeRootAuthenticationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MeRootAuthenticationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.me['root#Authentication'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MeAuthenticationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['me#Authentication']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/me#Authentication', keyArgs] as const
}

export function getApiV1MeAuthenticationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['me#Authentication']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MeAuthenticationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['me#Authentication'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MeAuthentication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['me#Authentication']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['me#Authentication']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['me#Authentication']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1MeAuthenticationQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['me#Authentication']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MeAuthenticationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MeAuthenticationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['me#Authentication'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DocumentsDocumentIdPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['path']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/documents/:DocumentId/path', keyArgs] as const
}

export function getApiV1DocumentsDocumentIdPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['path']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DocumentsDocumentIdPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.documents[':DocumentId'].path.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['path']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['path']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1DocumentsDocumentIdPathQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.documents)[':DocumentId']['path']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DocumentsDocumentIdPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DocumentsDocumentIdPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.documents[':DocumentId'].path.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1FoldersFolderIdPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.folders)[':FolderId']['path']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/folders/:FolderId/path', keyArgs] as const
}

export function getApiV1FoldersFolderIdPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.folders)[':FolderId']['path']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1FoldersFolderIdPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.folders[':FolderId'].path.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.folders)[':FolderId']['path']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['path']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1FoldersFolderIdPathQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.folders)[':FolderId']['path']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FoldersFolderIdPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1FoldersFolderIdPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.folders[':FolderId'].path.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ResourcesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.resources.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/resources', keyArgs] as const
}

export function getApiV1ResourcesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.resources.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ResourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.resources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Resources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.resources.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resources.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resources.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ResourcesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resources.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ResourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ResourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.resources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.search.$post>,
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
