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

export function getTenantIDKey() {
  return ['{tenantID}'] as const
}

export function getTenantIDApplicationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':tenantID']['applications']['$get']>>,
) {
  return [':tenantID', '/:tenantID/applications', toValue(args)] as const
}

export function getTenantIDApplicationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':tenantID']['applications']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTenantIDApplicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':tenantID'].applications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':tenantID']['applications']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':tenantID']['applications']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTenantIDApplicationsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':tenantID']['applications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDApplicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTenantIDApplicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':tenantID'].applications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['applications'][':applicationObjectId']['$get']>
  >,
) {
  return [':tenantID', '/:tenantID/applications/:applicationObjectId', toValue(args)] as const
}

export function getTenantIDApplicationsApplicationObjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['applications'][':applicationObjectId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTenantIDApplicationsApplicationObjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':tenantID'].applications[':applicationObjectId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['applications'][':applicationObjectId']['$get']>
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
                    (typeof client)[':tenantID']['applications'][':applicationObjectId']['$get']
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
                    (typeof client)[':tenantID']['applications'][':applicationObjectId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTenantIDApplicationsApplicationObjectIdQueryKey>
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
            ReturnType<(typeof client)[':tenantID']['applications'][':applicationObjectId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDApplicationsApplicationObjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTenantIDApplicationsApplicationObjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':tenantID'].applications[':applicationObjectId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$get']
    >
  >,
) {
  return [
    ':tenantID',
    '/:tenantID/applications/:applicationObjectId/keyCredentials',
    toValue(args),
  ] as const
}

export function getTenantIDApplicationsApplicationObjectIdKeyCredentialsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getTenantIDApplicationsApplicationObjectIdKeyCredentialsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':tenantID'].applications[':applicationObjectId'].keyCredentials.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$get']
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
                    (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$get']
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
                    (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTenantIDApplicationsApplicationObjectIdKeyCredentialsQueryKey>
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
              (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDApplicationsApplicationObjectIdKeyCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getTenantIDApplicationsApplicationObjectIdKeyCredentialsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':tenantID'].applications[':applicationObjectId'].keyCredentials.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':tenantID']['applications'][':applicationObjectId']['owners']['$get']
    >
  >,
) {
  return [
    ':tenantID',
    '/:tenantID/applications/:applicationObjectId/owners',
    toValue(args),
  ] as const
}

export function getTenantIDApplicationsApplicationObjectIdOwnersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':tenantID']['applications'][':applicationObjectId']['owners']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTenantIDApplicationsApplicationObjectIdOwnersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':tenantID'].applications[':applicationObjectId'].owners.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':tenantID']['applications'][':applicationObjectId']['owners']['$get']
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
                    (typeof client)[':tenantID']['applications'][':applicationObjectId']['owners']['$get']
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
                    (typeof client)[':tenantID']['applications'][':applicationObjectId']['owners']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTenantIDApplicationsApplicationObjectIdOwnersQueryKey>
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
              (typeof client)[':tenantID']['applications'][':applicationObjectId']['owners']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDApplicationsApplicationObjectIdOwnersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTenantIDApplicationsApplicationObjectIdOwnersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':tenantID'].applications[':applicationObjectId'].owners.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTenantIDApplicationsApplicationObjectIdPasswordCredentialsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$get']
    >
  >,
) {
  return [
    ':tenantID',
    '/:tenantID/applications/:applicationObjectId/passwordCredentials',
    toValue(args),
  ] as const
}

export function getTenantIDApplicationsApplicationObjectIdPasswordCredentialsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getTenantIDApplicationsApplicationObjectIdPasswordCredentialsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':tenantID'].applications[':applicationObjectId'].passwordCredentials.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$get']
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
                    (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$get']
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
                    (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTenantIDApplicationsApplicationObjectIdPasswordCredentialsQueryKey>
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
              (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDApplicationsApplicationObjectIdPasswordCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getTenantIDApplicationsApplicationObjectIdPasswordCredentialsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':tenantID'].applications[':applicationObjectId'].passwordCredentials.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['deletedApplications']['$get']>
  >,
) {
  return [':tenantID', '/:tenantID/deletedApplications', toValue(args)] as const
}

export function getTenantIDDeletedApplicationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['deletedApplications']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTenantIDDeletedApplicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':tenantID'].deletedApplications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['deletedApplications']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':tenantID']['deletedApplications']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTenantIDDeletedApplicationsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':tenantID']['deletedApplications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDDeletedApplicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTenantIDDeletedApplicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':tenantID'].deletedApplications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':tenantID']['domains']['$get']>>,
) {
  return [':tenantID', '/:tenantID/domains', toValue(args)] as const
}

export function getTenantIDDomainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':tenantID']['domains']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTenantIDDomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':tenantID'].domains.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTenantIDDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['domains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':tenantID']['domains']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':tenantID']['domains']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTenantIDDomainsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['domains']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTenantIDDomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':tenantID'].domains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTenantIDDomainsDomainNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['domains'][':domainName']['$get']>
  >,
) {
  return [':tenantID', '/:tenantID/domains/:domainName', toValue(args)] as const
}

export function getTenantIDDomainsDomainNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['domains'][':domainName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTenantIDDomainsDomainNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':tenantID'].domains[':domainName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['domains'][':domainName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':tenantID']['domains'][':domainName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTenantIDDomainsDomainNameQueryKey>
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
          Awaited<ReturnType<(typeof client)[':tenantID']['domains'][':domainName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDDomainsDomainNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTenantIDDomainsDomainNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':tenantID'].domains[':domainName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':tenantID']['groups']['$get']>>,
) {
  return [':tenantID', '/:tenantID/groups', toValue(args)] as const
}

export function getTenantIDGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':tenantID']['groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTenantIDGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':tenantID'].groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTenantIDGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':tenantID']['groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':tenantID']['groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTenantIDGroupsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTenantIDGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':tenantID'].groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['$get']>
  >,
) {
  return [':tenantID', '/:tenantID/groups/:objectId', toValue(args)] as const
}

export function getTenantIDGroupsObjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTenantIDGroupsObjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':tenantID'].groups[':objectId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTenantIDGroupsObjectIdQueryKey>
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
          Awaited<ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDGroupsObjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTenantIDGroupsObjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':tenantID'].groups[':objectId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['$delete']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['members']['$get']>
  >,
) {
  return [':tenantID', '/:tenantID/groups/:objectId/members', toValue(args)] as const
}

export function getTenantIDGroupsObjectIdMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['members']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTenantIDGroupsObjectIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':tenantID'].groups[':objectId'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['members']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['members']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTenantIDGroupsObjectIdMembersQueryKey>
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
            ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['members']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDGroupsObjectIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTenantIDGroupsObjectIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':tenantID'].groups[':objectId'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTenantIDGroupsObjectIdOwnersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['owners']['$get']>
  >,
) {
  return [':tenantID', '/:tenantID/groups/:objectId/owners', toValue(args)] as const
}

export function getTenantIDGroupsObjectIdOwnersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['owners']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTenantIDGroupsObjectIdOwnersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':tenantID'].groups[':objectId'].owners.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['owners']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['owners']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTenantIDGroupsObjectIdOwnersQueryKey>
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
          Awaited<ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['owners']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDGroupsObjectIdOwnersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTenantIDGroupsObjectIdOwnersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':tenantID'].groups[':objectId'].owners.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':tenantID']['me']['$get']>>,
) {
  return [':tenantID', '/:tenantID/me', toValue(args)] as const
}

export function getTenantIDMeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':tenantID']['me']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTenantIDMeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':tenantID'].me.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTenantIDMe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['me']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':tenantID']['me']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['me']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['me']['$get']>>>
            >
          >,
          ReturnType<typeof getTenantIDMeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['me']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTenantIDMeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':tenantID'].me.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTenantIDMeOwnedObjectsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['me']['ownedObjects']['$get']>
  >,
) {
  return [':tenantID', '/:tenantID/me/ownedObjects', toValue(args)] as const
}

export function getTenantIDMeOwnedObjectsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['me']['ownedObjects']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTenantIDMeOwnedObjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':tenantID'].me.ownedObjects.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['me']['ownedObjects']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':tenantID']['me']['ownedObjects']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTenantIDMeOwnedObjectsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':tenantID']['me']['ownedObjects']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDMeOwnedObjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTenantIDMeOwnedObjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':tenantID'].me.ownedObjects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTenantIDOauth2PermissionGrantsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$get']>
  >,
) {
  return [':tenantID', '/:tenantID/oauth2PermissionGrants', toValue(args)] as const
}

export function getTenantIDOauth2PermissionGrantsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTenantIDOauth2PermissionGrantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':tenantID'].oauth2PermissionGrants.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTenantIDOauth2PermissionGrantsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDOauth2PermissionGrantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTenantIDOauth2PermissionGrantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':tenantID'].oauth2PermissionGrants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['servicePrincipals']['$get']>
  >,
) {
  return [':tenantID', '/:tenantID/servicePrincipals', toValue(args)] as const
}

export function getTenantIDServicePrincipalsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['servicePrincipals']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTenantIDServicePrincipalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':tenantID'].servicePrincipals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['servicePrincipals']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':tenantID']['servicePrincipals']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTenantIDServicePrincipalsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':tenantID']['servicePrincipals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDServicePrincipalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTenantIDServicePrincipalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':tenantID'].servicePrincipals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$get']>
  >,
) {
  return [':tenantID', '/:tenantID/servicePrincipals/:objectId', toValue(args)] as const
}

export function getTenantIDServicePrincipalsObjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTenantIDServicePrincipalsObjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':tenantID'].servicePrincipals[':objectId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTenantIDServicePrincipalsObjectIdQueryKey>
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
            ReturnType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDServicePrincipalsObjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTenantIDServicePrincipalsObjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':tenantID'].servicePrincipals[':objectId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client)[':tenantID']['servicePrincipals'][':objectId']['$delete']
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
      Extract<
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
          InferRequestType<
            (typeof client)[':tenantID']['servicePrincipals'][':objectId']['$patch']
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignedTo']['$get']
    >
  >,
) {
  return [
    ':tenantID',
    '/:tenantID/servicePrincipals/:objectId/appRoleAssignedTo',
    toValue(args),
  ] as const
}

export function getTenantIDServicePrincipalsObjectIdAppRoleAssignedToQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignedTo']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTenantIDServicePrincipalsObjectIdAppRoleAssignedToQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':tenantID'].servicePrincipals[':objectId'].appRoleAssignedTo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignedTo']['$get']
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
                    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignedTo']['$get']
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
                    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignedTo']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTenantIDServicePrincipalsObjectIdAppRoleAssignedToQueryKey>
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
              (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignedTo']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDServicePrincipalsObjectIdAppRoleAssignedToQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTenantIDServicePrincipalsObjectIdAppRoleAssignedToQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':tenantID'].servicePrincipals[':objectId'].appRoleAssignedTo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTenantIDServicePrincipalsObjectIdAppRoleAssignmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignments']['$get']
    >
  >,
) {
  return [
    ':tenantID',
    '/:tenantID/servicePrincipals/:objectId/appRoleAssignments',
    toValue(args),
  ] as const
}

export function getTenantIDServicePrincipalsObjectIdAppRoleAssignmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTenantIDServicePrincipalsObjectIdAppRoleAssignmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':tenantID'].servicePrincipals[':objectId'].appRoleAssignments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignments']['$get']
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
                    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignments']['$get']
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
                    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTenantIDServicePrincipalsObjectIdAppRoleAssignmentsQueryKey>
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
              (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDServicePrincipalsObjectIdAppRoleAssignmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getTenantIDServicePrincipalsObjectIdAppRoleAssignmentsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':tenantID'].servicePrincipals[':objectId'].appRoleAssignments.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getTenantIDServicePrincipalsObjectIdKeyCredentialsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$get']
    >
  >,
) {
  return [
    ':tenantID',
    '/:tenantID/servicePrincipals/:objectId/keyCredentials',
    toValue(args),
  ] as const
}

export function getTenantIDServicePrincipalsObjectIdKeyCredentialsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTenantIDServicePrincipalsObjectIdKeyCredentialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':tenantID'].servicePrincipals[':objectId'].keyCredentials.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$get']
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
                    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$get']
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
                    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTenantIDServicePrincipalsObjectIdKeyCredentialsQueryKey>
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
              (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDServicePrincipalsObjectIdKeyCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTenantIDServicePrincipalsObjectIdKeyCredentialsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':tenantID'].servicePrincipals[':objectId'].keyCredentials.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':tenantID']['servicePrincipals'][':objectId']['owners']['$get']
    >
  >,
) {
  return [':tenantID', '/:tenantID/servicePrincipals/:objectId/owners', toValue(args)] as const
}

export function getTenantIDServicePrincipalsObjectIdOwnersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':tenantID']['servicePrincipals'][':objectId']['owners']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTenantIDServicePrincipalsObjectIdOwnersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':tenantID'].servicePrincipals[':objectId'].owners.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':tenantID']['servicePrincipals'][':objectId']['owners']['$get']
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
                    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['owners']['$get']
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
                    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['owners']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTenantIDServicePrincipalsObjectIdOwnersQueryKey>
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
              (typeof client)[':tenantID']['servicePrincipals'][':objectId']['owners']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDServicePrincipalsObjectIdOwnersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTenantIDServicePrincipalsObjectIdOwnersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':tenantID'].servicePrincipals[':objectId'].owners.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTenantIDServicePrincipalsObjectIdPasswordCredentialsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$get']
    >
  >,
) {
  return [
    ':tenantID',
    '/:tenantID/servicePrincipals/:objectId/passwordCredentials',
    toValue(args),
  ] as const
}

export function getTenantIDServicePrincipalsObjectIdPasswordCredentialsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTenantIDServicePrincipalsObjectIdPasswordCredentialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':tenantID'].servicePrincipals[':objectId'].passwordCredentials.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$get']
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
                    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$get']
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
                    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTenantIDServicePrincipalsObjectIdPasswordCredentialsQueryKey>
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
              (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDServicePrincipalsObjectIdPasswordCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getTenantIDServicePrincipalsObjectIdPasswordCredentialsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':tenantID'].servicePrincipals[':objectId'].passwordCredentials.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':tenantID']['servicePrincipalsByAppId'][':applicationID']['objectId']['$get']
    >
  >,
) {
  return [
    ':tenantID',
    '/:tenantID/servicePrincipalsByAppId/:applicationID/objectId',
    toValue(args),
  ] as const
}

export function getTenantIDServicePrincipalsByAppIdApplicationIDObjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':tenantID']['servicePrincipalsByAppId'][':applicationID']['objectId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getTenantIDServicePrincipalsByAppIdApplicationIDObjectIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':tenantID'].servicePrincipalsByAppId[':applicationID'].objectId.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':tenantID']['servicePrincipalsByAppId'][':applicationID']['objectId']['$get']
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
                    (typeof client)[':tenantID']['servicePrincipalsByAppId'][':applicationID']['objectId']['$get']
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
                    (typeof client)[':tenantID']['servicePrincipalsByAppId'][':applicationID']['objectId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTenantIDServicePrincipalsByAppIdApplicationIDObjectIdQueryKey>
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
              (typeof client)[':tenantID']['servicePrincipalsByAppId'][':applicationID']['objectId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDServicePrincipalsByAppIdApplicationIDObjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getTenantIDServicePrincipalsByAppIdApplicationIDObjectIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':tenantID'].servicePrincipalsByAppId[':applicationID'].objectId.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getTenantIDUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':tenantID']['users']['$get']>>,
) {
  return [':tenantID', '/:tenantID/users', toValue(args)] as const
}

export function getTenantIDUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':tenantID']['users']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTenantIDUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':tenantID'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTenantIDUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['users']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':tenantID']['users']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':tenantID']['users']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':tenantID']['users']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTenantIDUsersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['users']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTenantIDUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':tenantID'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$get']>
  >,
) {
  return [':tenantID', '/:tenantID/users/:upnOrObjectId', toValue(args)] as const
}

export function getTenantIDUsersUpnOrObjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTenantIDUsersUpnOrObjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':tenantID'].users[':upnOrObjectId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTenantIDUsersUpnOrObjectIdQueryKey>
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
          Awaited<ReturnType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenantIDUsersUpnOrObjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTenantIDUsersUpnOrObjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':tenantID'].users[':upnOrObjectId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
