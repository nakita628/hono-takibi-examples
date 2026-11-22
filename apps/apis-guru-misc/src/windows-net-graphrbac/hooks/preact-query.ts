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

export function getTenantIDKey() {
  return ['{tenantID}'] as const
}

export function getTenantIDApplicationsQueryKey(
  args: InferRequestType<(typeof client)[':tenantID']['applications']['$get']>,
) {
  return [':tenantID', '/:tenantID/applications', args] as const
}

export function getTenantIDApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['applications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['applications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':tenantID']['applications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDApplicationsQueryKey>
  >({
    queryKey: getTenantIDApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':tenantID'].applications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTenantIDApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['applications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['applications']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':tenantID']['applications']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTenantIDApplicationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTenantIDApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['applications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['applications']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':tenantID']['applications']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTenantIDApplicationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTenantIDApplicationsMutationKey() {
  return [':tenantID', '/:tenantID/applications', 'POST'] as const
}

export function getPostTenantIDApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':tenantID']['applications']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':tenantID']['applications']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTenantIDApplicationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':tenantID']['applications']['$post']>,
    ) {
      return parseResponse(client[':tenantID'].applications.$post(args, options))
    },
  })
}

export function usePostTenantIDApplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':tenantID']['applications']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':tenantID']['applications']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTenantIDApplicationsMutationOptions<TError, TOnMutateResult>(
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

export function getTenantIDApplicationsApplicationObjectIdQueryKey(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['$get']
  >,
) {
  return [':tenantID', '/:tenantID/applications/:applicationObjectId', args] as const
}

export function getTenantIDApplicationsApplicationObjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':tenantID']['applications'][':applicationObjectId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':tenantID']['applications'][':applicationObjectId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDApplicationsApplicationObjectIdQueryKey>
  >({
    queryKey: getTenantIDApplicationsApplicationObjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':tenantID'].applications[':applicationObjectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTenantIDApplicationsApplicationObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':tenantID']['applications'][':applicationObjectId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':tenantID']['applications'][':applicationObjectId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDApplicationsApplicationObjectIdQueryKey>
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
      ...getTenantIDApplicationsApplicationObjectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTenantIDApplicationsApplicationObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':tenantID']['applications'][':applicationObjectId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':tenantID']['applications'][':applicationObjectId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDApplicationsApplicationObjectIdQueryKey>
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
      ...getTenantIDApplicationsApplicationObjectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteTenantIDApplicationsApplicationObjectIdMutationKey() {
  return [':tenantID', '/:tenantID/applications/:applicationObjectId', 'DELETE'] as const
}

export function getDeleteTenantIDApplicationsApplicationObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)[':tenantID']['applications'][':applicationObjectId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteTenantIDApplicationsApplicationObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':tenantID']['applications'][':applicationObjectId']['$delete']
      >,
    ) {
      return parseResponse(
        client[':tenantID'].applications[':applicationObjectId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteTenantIDApplicationsApplicationObjectId<
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
                    (typeof client)[':tenantID']['applications'][':applicationObjectId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':tenantID']['applications'][':applicationObjectId']['$delete']
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
  const mutationDefaults = getDeleteTenantIDApplicationsApplicationObjectIdMutationOptions<
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

export function getPatchTenantIDApplicationsApplicationObjectIdMutationKey() {
  return [':tenantID', '/:tenantID/applications/:applicationObjectId', 'PATCH'] as const
}

export function getPatchTenantIDApplicationsApplicationObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)[':tenantID']['applications'][':applicationObjectId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchTenantIDApplicationsApplicationObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':tenantID']['applications'][':applicationObjectId']['$patch']
      >,
    ) {
      return parseResponse(
        client[':tenantID'].applications[':applicationObjectId'].$patch(args, options),
      )
    },
  })
}

export function usePatchTenantIDApplicationsApplicationObjectId<
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
                    (typeof client)[':tenantID']['applications'][':applicationObjectId']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':tenantID']['applications'][':applicationObjectId']['$patch']
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
  const mutationDefaults = getPatchTenantIDApplicationsApplicationObjectIdMutationOptions<
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

export function getPostTenantIDApplicationsApplicationObjectIdLinksOwnersMutationKey() {
  return [
    ':tenantID',
    '/:tenantID/applications/:applicationObjectId/$links/owners',
    'POST',
  ] as const
}

export function getPostTenantIDApplicationsApplicationObjectIdLinksOwnersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['$links']['owners']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)[':tenantID']['applications'][':applicationObjectId']['$links']['owners']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTenantIDApplicationsApplicationObjectIdLinksOwnersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':tenantID']['applications'][':applicationObjectId']['$links']['owners']['$post']
      >,
    ) {
      return parseResponse(
        client[':tenantID'].applications[':applicationObjectId'].$links.owners.$post(args, options),
      )
    },
  })
}

export function usePostTenantIDApplicationsApplicationObjectIdLinksOwners<
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
                    (typeof client)[':tenantID']['applications'][':applicationObjectId']['$links']['owners']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':tenantID']['applications'][':applicationObjectId']['$links']['owners']['$post']
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
  const mutationDefaults = getPostTenantIDApplicationsApplicationObjectIdLinksOwnersMutationOptions<
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

export function getDeleteTenantIDApplicationsApplicationObjectIdLinksOwnersOwnerObjectIdMutationKey() {
  return [
    ':tenantID',
    '/:tenantID/applications/:applicationObjectId/$links/owners/:ownerObjectId',
    'DELETE',
  ] as const
}

export function getDeleteTenantIDApplicationsApplicationObjectIdLinksOwnersOwnerObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['$links']['owners'][':ownerObjectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)[':tenantID']['applications'][':applicationObjectId']['$links']['owners'][':ownerObjectId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteTenantIDApplicationsApplicationObjectIdLinksOwnersOwnerObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':tenantID']['applications'][':applicationObjectId']['$links']['owners'][':ownerObjectId']['$delete']
      >,
    ) {
      return parseResponse(
        client[':tenantID'].applications[':applicationObjectId'].$links.owners[
          ':ownerObjectId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteTenantIDApplicationsApplicationObjectIdLinksOwnersOwnerObjectId<
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
                    (typeof client)[':tenantID']['applications'][':applicationObjectId']['$links']['owners'][':ownerObjectId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':tenantID']['applications'][':applicationObjectId']['$links']['owners'][':ownerObjectId']['$delete']
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
    getDeleteTenantIDApplicationsApplicationObjectIdLinksOwnersOwnerObjectIdMutationOptions<
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

export function getTenantIDApplicationsApplicationObjectIdKeyCredentialsQueryKey(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$get']
  >,
) {
  return [':tenantID', '/:tenantID/applications/:applicationObjectId/keyCredentials', args] as const
}

export function getTenantIDApplicationsApplicationObjectIdKeyCredentialsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDApplicationsApplicationObjectIdKeyCredentialsQueryKey>
  >({
    queryKey: getTenantIDApplicationsApplicationObjectIdKeyCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':tenantID'].applications[':applicationObjectId'].keyCredentials.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTenantIDApplicationsApplicationObjectIdKeyCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDApplicationsApplicationObjectIdKeyCredentialsQueryKey>
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
      ...getTenantIDApplicationsApplicationObjectIdKeyCredentialsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTenantIDApplicationsApplicationObjectIdKeyCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDApplicationsApplicationObjectIdKeyCredentialsQueryKey>
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
      ...getTenantIDApplicationsApplicationObjectIdKeyCredentialsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchTenantIDApplicationsApplicationObjectIdKeyCredentialsMutationKey() {
  return [
    ':tenantID',
    '/:tenantID/applications/:applicationObjectId/keyCredentials',
    'PATCH',
  ] as const
}

export function getPatchTenantIDApplicationsApplicationObjectIdKeyCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchTenantIDApplicationsApplicationObjectIdKeyCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$patch']
      >,
    ) {
      return parseResponse(
        client[':tenantID'].applications[':applicationObjectId'].keyCredentials.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchTenantIDApplicationsApplicationObjectIdKeyCredentials<
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
                    (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$patch']
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
    getPatchTenantIDApplicationsApplicationObjectIdKeyCredentialsMutationOptions<
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

export function getTenantIDApplicationsApplicationObjectIdOwnersQueryKey(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['owners']['$get']
  >,
) {
  return [':tenantID', '/:tenantID/applications/:applicationObjectId/owners', args] as const
}

export function getTenantIDApplicationsApplicationObjectIdOwnersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':tenantID']['applications'][':applicationObjectId']['owners']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['owners']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':tenantID']['applications'][':applicationObjectId']['owners']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDApplicationsApplicationObjectIdOwnersQueryKey>
  >({
    queryKey: getTenantIDApplicationsApplicationObjectIdOwnersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':tenantID'].applications[':applicationObjectId'].owners.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTenantIDApplicationsApplicationObjectIdOwners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':tenantID']['applications'][':applicationObjectId']['owners']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['owners']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':tenantID']['applications'][':applicationObjectId']['owners']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDApplicationsApplicationObjectIdOwnersQueryKey>
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
      ...getTenantIDApplicationsApplicationObjectIdOwnersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTenantIDApplicationsApplicationObjectIdOwners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':tenantID']['applications'][':applicationObjectId']['owners']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['owners']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':tenantID']['applications'][':applicationObjectId']['owners']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDApplicationsApplicationObjectIdOwnersQueryKey>
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
      ...getTenantIDApplicationsApplicationObjectIdOwnersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTenantIDApplicationsApplicationObjectIdPasswordCredentialsQueryKey(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$get']
  >,
) {
  return [
    ':tenantID',
    '/:tenantID/applications/:applicationObjectId/passwordCredentials',
    args,
  ] as const
}

export function getTenantIDApplicationsApplicationObjectIdPasswordCredentialsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDApplicationsApplicationObjectIdPasswordCredentialsQueryKey>
  >({
    queryKey: getTenantIDApplicationsApplicationObjectIdPasswordCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':tenantID'].applications[':applicationObjectId'].passwordCredentials.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTenantIDApplicationsApplicationObjectIdPasswordCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDApplicationsApplicationObjectIdPasswordCredentialsQueryKey>
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
      ...getTenantIDApplicationsApplicationObjectIdPasswordCredentialsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTenantIDApplicationsApplicationObjectIdPasswordCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDApplicationsApplicationObjectIdPasswordCredentialsQueryKey>
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
      ...getTenantIDApplicationsApplicationObjectIdPasswordCredentialsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchTenantIDApplicationsApplicationObjectIdPasswordCredentialsMutationKey() {
  return [
    ':tenantID',
    '/:tenantID/applications/:applicationObjectId/passwordCredentials',
    'PATCH',
  ] as const
}

export function getPatchTenantIDApplicationsApplicationObjectIdPasswordCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchTenantIDApplicationsApplicationObjectIdPasswordCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$patch']
      >,
    ) {
      return parseResponse(
        client[':tenantID'].applications[':applicationObjectId'].passwordCredentials.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchTenantIDApplicationsApplicationObjectIdPasswordCredentials<
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
                    (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$patch']
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
    getPatchTenantIDApplicationsApplicationObjectIdPasswordCredentialsMutationOptions<
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

export function getTenantIDDeletedApplicationsQueryKey(
  args: InferRequestType<(typeof client)[':tenantID']['deletedApplications']['$get']>,
) {
  return [':tenantID', '/:tenantID/deletedApplications', args] as const
}

export function getTenantIDDeletedApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['deletedApplications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['deletedApplications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':tenantID']['deletedApplications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDDeletedApplicationsQueryKey>
  >({
    queryKey: getTenantIDDeletedApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':tenantID'].deletedApplications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTenantIDDeletedApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['deletedApplications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['deletedApplications']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':tenantID']['deletedApplications']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDDeletedApplicationsQueryKey>
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
      ...getTenantIDDeletedApplicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTenantIDDeletedApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['deletedApplications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['deletedApplications']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':tenantID']['deletedApplications']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDDeletedApplicationsQueryKey>
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
      ...getTenantIDDeletedApplicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteTenantIDDeletedApplicationsApplicationObjectIdMutationKey() {
  return [':tenantID', '/:tenantID/deletedApplications/:applicationObjectId', 'DELETE'] as const
}

export function getDeleteTenantIDDeletedApplicationsApplicationObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['deletedApplications'][':applicationObjectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)[':tenantID']['deletedApplications'][':applicationObjectId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteTenantIDDeletedApplicationsApplicationObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':tenantID']['deletedApplications'][':applicationObjectId']['$delete']
      >,
    ) {
      return parseResponse(
        client[':tenantID'].deletedApplications[':applicationObjectId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteTenantIDDeletedApplicationsApplicationObjectId<
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
                    (typeof client)[':tenantID']['deletedApplications'][':applicationObjectId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':tenantID']['deletedApplications'][':applicationObjectId']['$delete']
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
  const mutationDefaults = getDeleteTenantIDDeletedApplicationsApplicationObjectIdMutationOptions<
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

export function getPostTenantIDDeletedApplicationsObjectIdRestoreMutationKey() {
  return [':tenantID', '/:tenantID/deletedApplications/:objectId/restore', 'POST'] as const
}

export function getPostTenantIDDeletedApplicationsObjectIdRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':tenantID']['deletedApplications'][':objectId']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':tenantID']['deletedApplications'][':objectId']['restore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTenantIDDeletedApplicationsObjectIdRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':tenantID']['deletedApplications'][':objectId']['restore']['$post']
      >,
    ) {
      return parseResponse(
        client[':tenantID'].deletedApplications[':objectId'].restore.$post(args, options),
      )
    },
  })
}

export function usePostTenantIDDeletedApplicationsObjectIdRestore<
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
                  (typeof client)[':tenantID']['deletedApplications'][':objectId']['restore']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':tenantID']['deletedApplications'][':objectId']['restore']['$post']
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
  const mutationDefaults = getPostTenantIDDeletedApplicationsObjectIdRestoreMutationOptions<
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

export function getTenantIDDomainsQueryKey(
  args: InferRequestType<(typeof client)[':tenantID']['domains']['$get']>,
) {
  return [':tenantID', '/:tenantID/domains', args] as const
}

export function getTenantIDDomainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['domains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['domains']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDDomainsQueryKey>
  >({
    queryKey: getTenantIDDomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':tenantID'].domains.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTenantIDDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['domains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['domains']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':tenantID']['domains']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDDomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTenantIDDomainsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTenantIDDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['domains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['domains']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':tenantID']['domains']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDDomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTenantIDDomainsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTenantIDDomainsDomainNameQueryKey(
  args: InferRequestType<(typeof client)[':tenantID']['domains'][':domainName']['$get']>,
) {
  return [':tenantID', '/:tenantID/domains/:domainName', args] as const
}

export function getTenantIDDomainsDomainNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['domains'][':domainName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['domains'][':domainName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':tenantID']['domains'][':domainName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDDomainsDomainNameQueryKey>
  >({
    queryKey: getTenantIDDomainsDomainNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':tenantID'].domains[':domainName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTenantIDDomainsDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['domains'][':domainName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['domains'][':domainName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':tenantID']['domains'][':domainName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDDomainsDomainNameQueryKey>
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
      ...getTenantIDDomainsDomainNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTenantIDDomainsDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['domains'][':domainName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['domains'][':domainName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':tenantID']['domains'][':domainName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDDomainsDomainNameQueryKey>
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
      ...getTenantIDDomainsDomainNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTenantIDGetObjectsByObjectIdsMutationKey() {
  return [':tenantID', '/:tenantID/getObjectsByObjectIds', 'POST'] as const
}

export function getPostTenantIDGetObjectsByObjectIdsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':tenantID']['getObjectsByObjectIds']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':tenantID']['getObjectsByObjectIds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTenantIDGetObjectsByObjectIdsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':tenantID']['getObjectsByObjectIds']['$post']>,
    ) {
      return parseResponse(client[':tenantID'].getObjectsByObjectIds.$post(args, options))
    },
  })
}

export function usePostTenantIDGetObjectsByObjectIds<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':tenantID']['getObjectsByObjectIds']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':tenantID']['getObjectsByObjectIds']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTenantIDGetObjectsByObjectIdsMutationOptions<
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

export function getTenantIDGroupsQueryKey(
  args: InferRequestType<(typeof client)[':tenantID']['groups']['$get']>,
) {
  return [':tenantID', '/:tenantID/groups', args] as const
}

export function getTenantIDGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDGroupsQueryKey>
  >({
    queryKey: getTenantIDGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':tenantID'].groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTenantIDGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['groups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':tenantID']['groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTenantIDGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTenantIDGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['groups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':tenantID']['groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTenantIDGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTenantIDGroupsMutationKey() {
  return [':tenantID', '/:tenantID/groups', 'POST'] as const
}

export function getPostTenantIDGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['groups']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':tenantID']['groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTenantIDGroupsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':tenantID']['groups']['$post']>) {
      return parseResponse(client[':tenantID'].groups.$post(args, options))
    },
  })
}

export function usePostTenantIDGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':tenantID']['groups']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':tenantID']['groups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTenantIDGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getPostTenantIDGroupsGroupObjectIdLinksMembersMutationKey() {
  return [':tenantID', '/:tenantID/groups/:groupObjectId/$links/members', 'POST'] as const
}

export function getPostTenantIDGroupsGroupObjectIdLinksMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['groups'][':groupObjectId']['$links']['members']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)[':tenantID']['groups'][':groupObjectId']['$links']['members']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTenantIDGroupsGroupObjectIdLinksMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':tenantID']['groups'][':groupObjectId']['$links']['members']['$post']
      >,
    ) {
      return parseResponse(
        client[':tenantID'].groups[':groupObjectId'].$links.members.$post(args, options),
      )
    },
  })
}

export function usePostTenantIDGroupsGroupObjectIdLinksMembers<
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
                    (typeof client)[':tenantID']['groups'][':groupObjectId']['$links']['members']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':tenantID']['groups'][':groupObjectId']['$links']['members']['$post']
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
  const mutationDefaults = getPostTenantIDGroupsGroupObjectIdLinksMembersMutationOptions<
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

export function getDeleteTenantIDGroupsGroupObjectIdLinksMembersMemberObjectIdMutationKey() {
  return [
    ':tenantID',
    '/:tenantID/groups/:groupObjectId/$links/members/:memberObjectId',
    'DELETE',
  ] as const
}

export function getDeleteTenantIDGroupsGroupObjectIdLinksMembersMemberObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['groups'][':groupObjectId']['$links']['members'][':memberObjectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)[':tenantID']['groups'][':groupObjectId']['$links']['members'][':memberObjectId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteTenantIDGroupsGroupObjectIdLinksMembersMemberObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':tenantID']['groups'][':groupObjectId']['$links']['members'][':memberObjectId']['$delete']
      >,
    ) {
      return parseResponse(
        client[':tenantID'].groups[':groupObjectId'].$links.members[':memberObjectId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteTenantIDGroupsGroupObjectIdLinksMembersMemberObjectId<
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
                    (typeof client)[':tenantID']['groups'][':groupObjectId']['$links']['members'][':memberObjectId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':tenantID']['groups'][':groupObjectId']['$links']['members'][':memberObjectId']['$delete']
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
    getDeleteTenantIDGroupsGroupObjectIdLinksMembersMemberObjectIdMutationOptions<
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

export function getTenantIDGroupsObjectIdQueryKey(
  args: InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['$get']>,
) {
  return [':tenantID', '/:tenantID/groups/:objectId', args] as const
}

export function getTenantIDGroupsObjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDGroupsObjectIdQueryKey>
  >({
    queryKey: getTenantIDGroupsObjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':tenantID'].groups[':objectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTenantIDGroupsObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDGroupsObjectIdQueryKey>
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
      ...getTenantIDGroupsObjectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTenantIDGroupsObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDGroupsObjectIdQueryKey>
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
      ...getTenantIDGroupsObjectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteTenantIDGroupsObjectIdMutationKey() {
  return [':tenantID', '/:tenantID/groups/:objectId', 'DELETE'] as const
}

export function getDeleteTenantIDGroupsObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTenantIDGroupsObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['$delete']>,
    ) {
      return parseResponse(client[':tenantID'].groups[':objectId'].$delete(args, options))
    },
  })
}

export function useDeleteTenantIDGroupsObjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTenantIDGroupsObjectIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostTenantIDGroupsObjectIdLinksOwnersMutationKey() {
  return [':tenantID', '/:tenantID/groups/:objectId/$links/owners', 'POST'] as const
}

export function getPostTenantIDGroupsObjectIdLinksOwnersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['groups'][':objectId']['$links']['owners']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)[':tenantID']['groups'][':objectId']['$links']['owners']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTenantIDGroupsObjectIdLinksOwnersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':tenantID']['groups'][':objectId']['$links']['owners']['$post']
      >,
    ) {
      return parseResponse(
        client[':tenantID'].groups[':objectId'].$links.owners.$post(args, options),
      )
    },
  })
}

export function usePostTenantIDGroupsObjectIdLinksOwners<
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
                    (typeof client)[':tenantID']['groups'][':objectId']['$links']['owners']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':tenantID']['groups'][':objectId']['$links']['owners']['$post']
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
  const mutationDefaults = getPostTenantIDGroupsObjectIdLinksOwnersMutationOptions<
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

export function getDeleteTenantIDGroupsObjectIdLinksOwnersOwnerObjectIdMutationKey() {
  return [
    ':tenantID',
    '/:tenantID/groups/:objectId/$links/owners/:ownerObjectId',
    'DELETE',
  ] as const
}

export function getDeleteTenantIDGroupsObjectIdLinksOwnersOwnerObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['groups'][':objectId']['$links']['owners'][':ownerObjectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)[':tenantID']['groups'][':objectId']['$links']['owners'][':ownerObjectId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteTenantIDGroupsObjectIdLinksOwnersOwnerObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':tenantID']['groups'][':objectId']['$links']['owners'][':ownerObjectId']['$delete']
      >,
    ) {
      return parseResponse(
        client[':tenantID'].groups[':objectId'].$links.owners[':ownerObjectId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteTenantIDGroupsObjectIdLinksOwnersOwnerObjectId<
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
                    (typeof client)[':tenantID']['groups'][':objectId']['$links']['owners'][':ownerObjectId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':tenantID']['groups'][':objectId']['$links']['owners'][':ownerObjectId']['$delete']
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
  const mutationDefaults = getDeleteTenantIDGroupsObjectIdLinksOwnersOwnerObjectIdMutationOptions<
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

export function getPostTenantIDGroupsObjectIdGetMemberGroupsMutationKey() {
  return [':tenantID', '/:tenantID/groups/:objectId/getMemberGroups', 'POST'] as const
}

export function getPostTenantIDGroupsObjectIdGetMemberGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':tenantID']['groups'][':objectId']['getMemberGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':tenantID']['groups'][':objectId']['getMemberGroups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTenantIDGroupsObjectIdGetMemberGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':tenantID']['groups'][':objectId']['getMemberGroups']['$post']
      >,
    ) {
      return parseResponse(
        client[':tenantID'].groups[':objectId'].getMemberGroups.$post(args, options),
      )
    },
  })
}

export function usePostTenantIDGroupsObjectIdGetMemberGroups<
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
                  (typeof client)[':tenantID']['groups'][':objectId']['getMemberGroups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':tenantID']['groups'][':objectId']['getMemberGroups']['$post']
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
  const mutationDefaults = getPostTenantIDGroupsObjectIdGetMemberGroupsMutationOptions<
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

export function getTenantIDGroupsObjectIdMembersQueryKey(
  args: InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['members']['$get']>,
) {
  return [':tenantID', '/:tenantID/groups/:objectId/members', args] as const
}

export function getTenantIDGroupsObjectIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['members']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDGroupsObjectIdMembersQueryKey>
  >({
    queryKey: getTenantIDGroupsObjectIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':tenantID'].groups[':objectId'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTenantIDGroupsObjectIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['members']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['members']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDGroupsObjectIdMembersQueryKey>
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
      ...getTenantIDGroupsObjectIdMembersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTenantIDGroupsObjectIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['members']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['members']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDGroupsObjectIdMembersQueryKey>
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
      ...getTenantIDGroupsObjectIdMembersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTenantIDGroupsObjectIdOwnersQueryKey(
  args: InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['owners']['$get']>,
) {
  return [':tenantID', '/:tenantID/groups/:objectId/owners', args] as const
}

export function getTenantIDGroupsObjectIdOwnersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['owners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['owners']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['owners']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDGroupsObjectIdOwnersQueryKey>
  >({
    queryKey: getTenantIDGroupsObjectIdOwnersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':tenantID'].groups[':objectId'].owners.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTenantIDGroupsObjectIdOwners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['owners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['owners']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['owners']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDGroupsObjectIdOwnersQueryKey>
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
      ...getTenantIDGroupsObjectIdOwnersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTenantIDGroupsObjectIdOwners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['owners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['owners']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['owners']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDGroupsObjectIdOwnersQueryKey>
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
      ...getTenantIDGroupsObjectIdOwnersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTenantIDIsMemberOfMutationKey() {
  return [':tenantID', '/:tenantID/isMemberOf', 'POST'] as const
}

export function getPostTenantIDIsMemberOfMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':tenantID']['isMemberOf']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':tenantID']['isMemberOf']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTenantIDIsMemberOfMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':tenantID']['isMemberOf']['$post']>) {
      return parseResponse(client[':tenantID'].isMemberOf.$post(args, options))
    },
  })
}

export function usePostTenantIDIsMemberOf<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':tenantID']['isMemberOf']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':tenantID']['isMemberOf']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTenantIDIsMemberOfMutationOptions<TError, TOnMutateResult>(
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

export function getTenantIDMeQueryKey(
  args: InferRequestType<(typeof client)[':tenantID']['me']['$get']>,
) {
  return [':tenantID', '/:tenantID/me', args] as const
}

export function getTenantIDMeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['me']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['me']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['me']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDMeQueryKey>
  >({
    queryKey: getTenantIDMeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':tenantID'].me.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTenantIDMe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['me']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['me']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['me']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTenantIDMeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTenantIDMe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['me']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['me']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['me']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTenantIDMeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTenantIDMeOwnedObjectsQueryKey(
  args: InferRequestType<(typeof client)[':tenantID']['me']['ownedObjects']['$get']>,
) {
  return [':tenantID', '/:tenantID/me/ownedObjects', args] as const
}

export function getTenantIDMeOwnedObjectsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['me']['ownedObjects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['me']['ownedObjects']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':tenantID']['me']['ownedObjects']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDMeOwnedObjectsQueryKey>
  >({
    queryKey: getTenantIDMeOwnedObjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':tenantID'].me.ownedObjects.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTenantIDMeOwnedObjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['me']['ownedObjects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['me']['ownedObjects']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':tenantID']['me']['ownedObjects']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDMeOwnedObjectsQueryKey>
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
      ...getTenantIDMeOwnedObjectsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTenantIDMeOwnedObjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['me']['ownedObjects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['me']['ownedObjects']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':tenantID']['me']['ownedObjects']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDMeOwnedObjectsQueryKey>
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
      ...getTenantIDMeOwnedObjectsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTenantIDOauth2PermissionGrantsQueryKey(
  args: InferRequestType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$get']>,
) {
  return [':tenantID', '/:tenantID/oauth2PermissionGrants', args] as const
}

export function getTenantIDOauth2PermissionGrantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDOauth2PermissionGrantsQueryKey>
  >({
    queryKey: getTenantIDOauth2PermissionGrantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':tenantID'].oauth2PermissionGrants.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTenantIDOauth2PermissionGrants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDOauth2PermissionGrantsQueryKey>
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
      ...getTenantIDOauth2PermissionGrantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTenantIDOauth2PermissionGrants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDOauth2PermissionGrantsQueryKey>
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
      ...getTenantIDOauth2PermissionGrantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTenantIDOauth2PermissionGrantsMutationKey() {
  return [':tenantID', '/:tenantID/oauth2PermissionGrants', 'POST'] as const
}

export function getPostTenantIDOauth2PermissionGrantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTenantIDOauth2PermissionGrantsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$post']>,
    ) {
      return parseResponse(client[':tenantID'].oauth2PermissionGrants.$post(args, options))
    },
  })
}

export function usePostTenantIDOauth2PermissionGrants<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTenantIDOauth2PermissionGrantsMutationOptions<
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

export function getDeleteTenantIDOauth2PermissionGrantsObjectIdMutationKey() {
  return [':tenantID', '/:tenantID/oauth2PermissionGrants/:objectId', 'DELETE'] as const
}

export function getDeleteTenantIDOauth2PermissionGrantsObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['oauth2PermissionGrants'][':objectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)[':tenantID']['oauth2PermissionGrants'][':objectId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteTenantIDOauth2PermissionGrantsObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':tenantID']['oauth2PermissionGrants'][':objectId']['$delete']
      >,
    ) {
      return parseResponse(
        client[':tenantID'].oauth2PermissionGrants[':objectId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteTenantIDOauth2PermissionGrantsObjectId<
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
                    (typeof client)[':tenantID']['oauth2PermissionGrants'][':objectId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':tenantID']['oauth2PermissionGrants'][':objectId']['$delete']
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
  const mutationDefaults = getDeleteTenantIDOauth2PermissionGrantsObjectIdMutationOptions<
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

export function getTenantIDServicePrincipalsQueryKey(
  args: InferRequestType<(typeof client)[':tenantID']['servicePrincipals']['$get']>,
) {
  return [':tenantID', '/:tenantID/servicePrincipals', args] as const
}

export function getTenantIDServicePrincipalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['servicePrincipals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['servicePrincipals']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':tenantID']['servicePrincipals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDServicePrincipalsQueryKey>
  >({
    queryKey: getTenantIDServicePrincipalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':tenantID'].servicePrincipals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTenantIDServicePrincipals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['servicePrincipals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['servicePrincipals']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':tenantID']['servicePrincipals']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDServicePrincipalsQueryKey>
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
      ...getTenantIDServicePrincipalsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTenantIDServicePrincipals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['servicePrincipals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['servicePrincipals']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':tenantID']['servicePrincipals']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDServicePrincipalsQueryKey>
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
      ...getTenantIDServicePrincipalsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTenantIDServicePrincipalsMutationKey() {
  return [':tenantID', '/:tenantID/servicePrincipals', 'POST'] as const
}

export function getPostTenantIDServicePrincipalsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':tenantID']['servicePrincipals']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':tenantID']['servicePrincipals']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTenantIDServicePrincipalsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':tenantID']['servicePrincipals']['$post']>,
    ) {
      return parseResponse(client[':tenantID'].servicePrincipals.$post(args, options))
    },
  })
}

export function usePostTenantIDServicePrincipals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':tenantID']['servicePrincipals']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':tenantID']['servicePrincipals']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTenantIDServicePrincipalsMutationOptions<TError, TOnMutateResult>(
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

export function getTenantIDServicePrincipalsObjectIdQueryKey(
  args: InferRequestType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$get']>,
) {
  return [':tenantID', '/:tenantID/servicePrincipals/:objectId', args] as const
}

export function getTenantIDServicePrincipalsObjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDServicePrincipalsObjectIdQueryKey>
  >({
    queryKey: getTenantIDServicePrincipalsObjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':tenantID'].servicePrincipals[':objectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTenantIDServicePrincipalsObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDServicePrincipalsObjectIdQueryKey>
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
      ...getTenantIDServicePrincipalsObjectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTenantIDServicePrincipalsObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDServicePrincipalsObjectIdQueryKey>
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
      ...getTenantIDServicePrincipalsObjectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteTenantIDServicePrincipalsObjectIdMutationKey() {
  return [':tenantID', '/:tenantID/servicePrincipals/:objectId', 'DELETE'] as const
}

export function getDeleteTenantIDServicePrincipalsObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTenantIDServicePrincipalsObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':tenantID']['servicePrincipals'][':objectId']['$delete']
      >,
    ) {
      return parseResponse(
        client[':tenantID'].servicePrincipals[':objectId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteTenantIDServicePrincipalsObjectId<
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
                    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTenantIDServicePrincipalsObjectIdMutationOptions<
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

export function getPatchTenantIDServicePrincipalsObjectIdMutationKey() {
  return [':tenantID', '/:tenantID/servicePrincipals/:objectId', 'PATCH'] as const
}

export function getPatchTenantIDServicePrincipalsObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTenantIDServicePrincipalsObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':tenantID']['servicePrincipals'][':objectId']['$patch']
      >,
    ) {
      return parseResponse(client[':tenantID'].servicePrincipals[':objectId'].$patch(args, options))
    },
  })
}

export function usePatchTenantIDServicePrincipalsObjectId<
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
                    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchTenantIDServicePrincipalsObjectIdMutationOptions<
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

export function getPostTenantIDServicePrincipalsObjectIdLinksOwnersMutationKey() {
  return [':tenantID', '/:tenantID/servicePrincipals/:objectId/$links/owners', 'POST'] as const
}

export function getPostTenantIDServicePrincipalsObjectIdLinksOwnersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['$links']['owners']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)[':tenantID']['servicePrincipals'][':objectId']['$links']['owners']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTenantIDServicePrincipalsObjectIdLinksOwnersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':tenantID']['servicePrincipals'][':objectId']['$links']['owners']['$post']
      >,
    ) {
      return parseResponse(
        client[':tenantID'].servicePrincipals[':objectId'].$links.owners.$post(args, options),
      )
    },
  })
}

export function usePostTenantIDServicePrincipalsObjectIdLinksOwners<
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
                    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['$links']['owners']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':tenantID']['servicePrincipals'][':objectId']['$links']['owners']['$post']
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
  const mutationDefaults = getPostTenantIDServicePrincipalsObjectIdLinksOwnersMutationOptions<
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

export function getDeleteTenantIDServicePrincipalsObjectIdLinksOwnersOwnerObjectIdMutationKey() {
  return [
    ':tenantID',
    '/:tenantID/servicePrincipals/:objectId/$links/owners/:ownerObjectId',
    'DELETE',
  ] as const
}

export function getDeleteTenantIDServicePrincipalsObjectIdLinksOwnersOwnerObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['$links']['owners'][':ownerObjectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)[':tenantID']['servicePrincipals'][':objectId']['$links']['owners'][':ownerObjectId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteTenantIDServicePrincipalsObjectIdLinksOwnersOwnerObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':tenantID']['servicePrincipals'][':objectId']['$links']['owners'][':ownerObjectId']['$delete']
      >,
    ) {
      return parseResponse(
        client[':tenantID'].servicePrincipals[':objectId'].$links.owners[':ownerObjectId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteTenantIDServicePrincipalsObjectIdLinksOwnersOwnerObjectId<
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
                    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['$links']['owners'][':ownerObjectId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':tenantID']['servicePrincipals'][':objectId']['$links']['owners'][':ownerObjectId']['$delete']
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
    getDeleteTenantIDServicePrincipalsObjectIdLinksOwnersOwnerObjectIdMutationOptions<
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

export function getTenantIDServicePrincipalsObjectIdAppRoleAssignedToQueryKey(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignedTo']['$get']
  >,
) {
  return [':tenantID', '/:tenantID/servicePrincipals/:objectId/appRoleAssignedTo', args] as const
}

export function getTenantIDServicePrincipalsObjectIdAppRoleAssignedToQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignedTo']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignedTo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignedTo']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDServicePrincipalsObjectIdAppRoleAssignedToQueryKey>
  >({
    queryKey: getTenantIDServicePrincipalsObjectIdAppRoleAssignedToQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':tenantID'].servicePrincipals[':objectId'].appRoleAssignedTo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTenantIDServicePrincipalsObjectIdAppRoleAssignedTo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignedTo']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignedTo']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignedTo']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDServicePrincipalsObjectIdAppRoleAssignedToQueryKey>
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
      ...getTenantIDServicePrincipalsObjectIdAppRoleAssignedToQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTenantIDServicePrincipalsObjectIdAppRoleAssignedTo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignedTo']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignedTo']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignedTo']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDServicePrincipalsObjectIdAppRoleAssignedToQueryKey>
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
      ...getTenantIDServicePrincipalsObjectIdAppRoleAssignedToQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTenantIDServicePrincipalsObjectIdAppRoleAssignmentsQueryKey(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignments']['$get']
  >,
) {
  return [':tenantID', '/:tenantID/servicePrincipals/:objectId/appRoleAssignments', args] as const
}

export function getTenantIDServicePrincipalsObjectIdAppRoleAssignmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDServicePrincipalsObjectIdAppRoleAssignmentsQueryKey>
  >({
    queryKey: getTenantIDServicePrincipalsObjectIdAppRoleAssignmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':tenantID'].servicePrincipals[':objectId'].appRoleAssignments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTenantIDServicePrincipalsObjectIdAppRoleAssignments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignments']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDServicePrincipalsObjectIdAppRoleAssignmentsQueryKey>
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
      ...getTenantIDServicePrincipalsObjectIdAppRoleAssignmentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTenantIDServicePrincipalsObjectIdAppRoleAssignments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignments']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDServicePrincipalsObjectIdAppRoleAssignmentsQueryKey>
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
      ...getTenantIDServicePrincipalsObjectIdAppRoleAssignmentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTenantIDServicePrincipalsObjectIdKeyCredentialsQueryKey(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$get']
  >,
) {
  return [':tenantID', '/:tenantID/servicePrincipals/:objectId/keyCredentials', args] as const
}

export function getTenantIDServicePrincipalsObjectIdKeyCredentialsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDServicePrincipalsObjectIdKeyCredentialsQueryKey>
  >({
    queryKey: getTenantIDServicePrincipalsObjectIdKeyCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':tenantID'].servicePrincipals[':objectId'].keyCredentials.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTenantIDServicePrincipalsObjectIdKeyCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDServicePrincipalsObjectIdKeyCredentialsQueryKey>
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
      ...getTenantIDServicePrincipalsObjectIdKeyCredentialsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTenantIDServicePrincipalsObjectIdKeyCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDServicePrincipalsObjectIdKeyCredentialsQueryKey>
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
      ...getTenantIDServicePrincipalsObjectIdKeyCredentialsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchTenantIDServicePrincipalsObjectIdKeyCredentialsMutationKey() {
  return [':tenantID', '/:tenantID/servicePrincipals/:objectId/keyCredentials', 'PATCH'] as const
}

export function getPatchTenantIDServicePrincipalsObjectIdKeyCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchTenantIDServicePrincipalsObjectIdKeyCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$patch']
      >,
    ) {
      return parseResponse(
        client[':tenantID'].servicePrincipals[':objectId'].keyCredentials.$patch(args, options),
      )
    },
  })
}

export function usePatchTenantIDServicePrincipalsObjectIdKeyCredentials<
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
                    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$patch']
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
  const mutationDefaults = getPatchTenantIDServicePrincipalsObjectIdKeyCredentialsMutationOptions<
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

export function getTenantIDServicePrincipalsObjectIdOwnersQueryKey(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['owners']['$get']
  >,
) {
  return [':tenantID', '/:tenantID/servicePrincipals/:objectId/owners', args] as const
}

export function getTenantIDServicePrincipalsObjectIdOwnersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':tenantID']['servicePrincipals'][':objectId']['owners']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['owners']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':tenantID']['servicePrincipals'][':objectId']['owners']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDServicePrincipalsObjectIdOwnersQueryKey>
  >({
    queryKey: getTenantIDServicePrincipalsObjectIdOwnersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':tenantID'].servicePrincipals[':objectId'].owners.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTenantIDServicePrincipalsObjectIdOwners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':tenantID']['servicePrincipals'][':objectId']['owners']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['owners']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':tenantID']['servicePrincipals'][':objectId']['owners']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDServicePrincipalsObjectIdOwnersQueryKey>
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
      ...getTenantIDServicePrincipalsObjectIdOwnersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTenantIDServicePrincipalsObjectIdOwners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':tenantID']['servicePrincipals'][':objectId']['owners']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['owners']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':tenantID']['servicePrincipals'][':objectId']['owners']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDServicePrincipalsObjectIdOwnersQueryKey>
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
      ...getTenantIDServicePrincipalsObjectIdOwnersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTenantIDServicePrincipalsObjectIdPasswordCredentialsQueryKey(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$get']
  >,
) {
  return [':tenantID', '/:tenantID/servicePrincipals/:objectId/passwordCredentials', args] as const
}

export function getTenantIDServicePrincipalsObjectIdPasswordCredentialsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDServicePrincipalsObjectIdPasswordCredentialsQueryKey>
  >({
    queryKey: getTenantIDServicePrincipalsObjectIdPasswordCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':tenantID'].servicePrincipals[':objectId'].passwordCredentials.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTenantIDServicePrincipalsObjectIdPasswordCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDServicePrincipalsObjectIdPasswordCredentialsQueryKey>
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
      ...getTenantIDServicePrincipalsObjectIdPasswordCredentialsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTenantIDServicePrincipalsObjectIdPasswordCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDServicePrincipalsObjectIdPasswordCredentialsQueryKey>
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
      ...getTenantIDServicePrincipalsObjectIdPasswordCredentialsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchTenantIDServicePrincipalsObjectIdPasswordCredentialsMutationKey() {
  return [
    ':tenantID',
    '/:tenantID/servicePrincipals/:objectId/passwordCredentials',
    'PATCH',
  ] as const
}

export function getPatchTenantIDServicePrincipalsObjectIdPasswordCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchTenantIDServicePrincipalsObjectIdPasswordCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$patch']
      >,
    ) {
      return parseResponse(
        client[':tenantID'].servicePrincipals[':objectId'].passwordCredentials.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchTenantIDServicePrincipalsObjectIdPasswordCredentials<
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
                    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$patch']
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
    getPatchTenantIDServicePrincipalsObjectIdPasswordCredentialsMutationOptions<
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

export function getTenantIDServicePrincipalsByAppIdApplicationIDObjectIdQueryKey(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipalsByAppId'][':applicationID']['objectId']['$get']
  >,
) {
  return [':tenantID', '/:tenantID/servicePrincipalsByAppId/:applicationID/objectId', args] as const
}

export function getTenantIDServicePrincipalsByAppIdApplicationIDObjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':tenantID']['servicePrincipalsByAppId'][':applicationID']['objectId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipalsByAppId'][':applicationID']['objectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':tenantID']['servicePrincipalsByAppId'][':applicationID']['objectId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDServicePrincipalsByAppIdApplicationIDObjectIdQueryKey>
  >({
    queryKey: getTenantIDServicePrincipalsByAppIdApplicationIDObjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':tenantID'].servicePrincipalsByAppId[':applicationID'].objectId.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTenantIDServicePrincipalsByAppIdApplicationIDObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':tenantID']['servicePrincipalsByAppId'][':applicationID']['objectId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipalsByAppId'][':applicationID']['objectId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':tenantID']['servicePrincipalsByAppId'][':applicationID']['objectId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDServicePrincipalsByAppIdApplicationIDObjectIdQueryKey>
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
      ...getTenantIDServicePrincipalsByAppIdApplicationIDObjectIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTenantIDServicePrincipalsByAppIdApplicationIDObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':tenantID']['servicePrincipalsByAppId'][':applicationID']['objectId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipalsByAppId'][':applicationID']['objectId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':tenantID']['servicePrincipalsByAppId'][':applicationID']['objectId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDServicePrincipalsByAppIdApplicationIDObjectIdQueryKey>
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
      ...getTenantIDServicePrincipalsByAppIdApplicationIDObjectIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTenantIDUsersQueryKey(
  args: InferRequestType<(typeof client)[':tenantID']['users']['$get']>,
) {
  return [':tenantID', '/:tenantID/users', args] as const
}

export function getTenantIDUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['users']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['users']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDUsersQueryKey>
  >({
    queryKey: getTenantIDUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':tenantID'].users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTenantIDUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['users']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['users']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['users']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTenantIDUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTenantIDUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['users']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['users']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['users']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTenantIDUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTenantIDUsersMutationKey() {
  return [':tenantID', '/:tenantID/users', 'POST'] as const
}

export function getPostTenantIDUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['users']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':tenantID']['users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTenantIDUsersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':tenantID']['users']['$post']>) {
      return parseResponse(client[':tenantID'].users.$post(args, options))
    },
  })
}

export function usePostTenantIDUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':tenantID']['users']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':tenantID']['users']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTenantIDUsersMutationOptions<TError, TOnMutateResult>(
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

export function getPostTenantIDUsersObjectIdGetMemberGroupsMutationKey() {
  return [':tenantID', '/:tenantID/users/:objectId/getMemberGroups', 'POST'] as const
}

export function getPostTenantIDUsersObjectIdGetMemberGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':tenantID']['users'][':objectId']['getMemberGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':tenantID']['users'][':objectId']['getMemberGroups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTenantIDUsersObjectIdGetMemberGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':tenantID']['users'][':objectId']['getMemberGroups']['$post']
      >,
    ) {
      return parseResponse(
        client[':tenantID'].users[':objectId'].getMemberGroups.$post(args, options),
      )
    },
  })
}

export function usePostTenantIDUsersObjectIdGetMemberGroups<
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
                  (typeof client)[':tenantID']['users'][':objectId']['getMemberGroups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':tenantID']['users'][':objectId']['getMemberGroups']['$post']
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
  const mutationDefaults = getPostTenantIDUsersObjectIdGetMemberGroupsMutationOptions<
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

export function getTenantIDUsersUpnOrObjectIdQueryKey(
  args: InferRequestType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$get']>,
) {
  return [':tenantID', '/:tenantID/users/:upnOrObjectId', args] as const
}

export function getTenantIDUsersUpnOrObjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDUsersUpnOrObjectIdQueryKey>
  >({
    queryKey: getTenantIDUsersUpnOrObjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':tenantID'].users[':upnOrObjectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTenantIDUsersUpnOrObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDUsersUpnOrObjectIdQueryKey>
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
      ...getTenantIDUsersUpnOrObjectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTenantIDUsersUpnOrObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenantIDUsersUpnOrObjectIdQueryKey>
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
      ...getTenantIDUsersUpnOrObjectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteTenantIDUsersUpnOrObjectIdMutationKey() {
  return [':tenantID', '/:tenantID/users/:upnOrObjectId', 'DELETE'] as const
}

export function getDeleteTenantIDUsersUpnOrObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTenantIDUsersUpnOrObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$delete']>,
    ) {
      return parseResponse(client[':tenantID'].users[':upnOrObjectId'].$delete(args, options))
    },
  })
}

export function useDeleteTenantIDUsersUpnOrObjectId<
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
                  ReturnType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTenantIDUsersUpnOrObjectIdMutationOptions<
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

export function getPatchTenantIDUsersUpnOrObjectIdMutationKey() {
  return [':tenantID', '/:tenantID/users/:upnOrObjectId', 'PATCH'] as const
}

export function getPatchTenantIDUsersUpnOrObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTenantIDUsersUpnOrObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$patch']>,
    ) {
      return parseResponse(client[':tenantID'].users[':upnOrObjectId'].$patch(args, options))
    },
  })
}

export function usePatchTenantIDUsersUpnOrObjectId<
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
                  ReturnType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$patch']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchTenantIDUsersUpnOrObjectIdMutationOptions<
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
