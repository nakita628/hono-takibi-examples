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

export function getSigningJobsKey() {
  return ['signing-jobs'] as const
}

export function getSigningPlatformsKey() {
  return ['signing-platforms'] as const
}

export function getSigningProfilesKey() {
  return ['signing-profiles'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getSigningProfilesProfileNamePermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['signing-profiles'][':profileName']['permissions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['signing-profiles', '/signing-profiles/:profileName/permissions', keyArgs] as const
}

export function getSigningProfilesProfileNamePermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['signing-profiles'][':profileName']['permissions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSigningProfilesProfileNamePermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['signing-profiles'][':profileName'].permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSigningProfilesProfileNamePermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['signing-profiles'][':profileName']['permissions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['signing-profiles'][':profileName']['permissions']['$get']>
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
                    (typeof client)['signing-profiles'][':profileName']['permissions']['$get']
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
                    (typeof client)['signing-profiles'][':profileName']['permissions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSigningProfilesProfileNamePermissionsQueryKey>
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
            ReturnType<(typeof client)['signing-profiles'][':profileName']['permissions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSigningProfilesProfileNamePermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSigningProfilesProfileNamePermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['signing-profiles'][':profileName'].permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSigningProfilesProfileNamePermissionsMutationKey() {
  return ['signing-profiles', '/signing-profiles/:profileName/permissions', 'POST'] as const
}

export function getPostSigningProfilesProfileNamePermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['signing-profiles'][':profileName']['permissions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['signing-profiles'][':profileName']['permissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSigningProfilesProfileNamePermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['signing-profiles'][':profileName']['permissions']['$post']
      >,
    ) {
      return parseResponse(
        client['signing-profiles'][':profileName'].permissions.$post(args, options),
      )
    },
  })
}

export function usePostSigningProfilesProfileNamePermissions<
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
                    (typeof client)['signing-profiles'][':profileName']['permissions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['signing-profiles'][':profileName']['permissions']['$post']
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
  const mutationDefaults = getPostSigningProfilesProfileNamePermissionsMutationOptions<
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

export function getSigningProfilesProfileNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['signing-profiles'][':profileName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['signing-profiles', '/signing-profiles/:profileName', keyArgs] as const
}

export function getSigningProfilesProfileNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['signing-profiles'][':profileName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSigningProfilesProfileNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['signing-profiles'][':profileName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSigningProfilesProfileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['signing-profiles'][':profileName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['signing-profiles'][':profileName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['signing-profiles'][':profileName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['signing-profiles'][':profileName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSigningProfilesProfileNameQueryKey>
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
          Awaited<ReturnType<(typeof client)['signing-profiles'][':profileName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSigningProfilesProfileNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSigningProfilesProfileNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['signing-profiles'][':profileName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSigningProfilesProfileNameMutationKey() {
  return ['signing-profiles', '/signing-profiles/:profileName', 'PUT'] as const
}

export function getPutSigningProfilesProfileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['signing-profiles'][':profileName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['signing-profiles'][':profileName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSigningProfilesProfileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['signing-profiles'][':profileName']['$put']>,
    ) {
      return parseResponse(client['signing-profiles'][':profileName'].$put(args, options))
    },
  })
}

export function usePutSigningProfilesProfileName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['signing-profiles'][':profileName']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['signing-profiles'][':profileName']['$put']>,
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
  const mutationDefaults = getPutSigningProfilesProfileNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSigningProfilesProfileNameMutationKey() {
  return ['signing-profiles', '/signing-profiles/:profileName', 'DELETE'] as const
}

export function getDeleteSigningProfilesProfileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['signing-profiles'][':profileName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['signing-profiles'][':profileName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSigningProfilesProfileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['signing-profiles'][':profileName']['$delete']>,
    ) {
      return parseResponse(client['signing-profiles'][':profileName'].$delete(args, options))
    },
  })
}

export function useDeleteSigningProfilesProfileName<
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
                Awaited<ReturnType<(typeof client)['signing-profiles'][':profileName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['signing-profiles'][':profileName']['$delete']>,
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
  const mutationDefaults = getDeleteSigningProfilesProfileNameMutationOptions<
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

export function getSigningJobsJobIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['signing-jobs'][':jobId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['signing-jobs', '/signing-jobs/:jobId', keyArgs] as const
}

export function getSigningJobsJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['signing-jobs'][':jobId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSigningJobsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['signing-jobs'][':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSigningJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-jobs'][':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['signing-jobs'][':jobId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['signing-jobs'][':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['signing-jobs'][':jobId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSigningJobsJobIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-jobs'][':jobId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSigningJobsJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSigningJobsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['signing-jobs'][':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSigningPlatformsPlatformIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['signing-platforms'][':platformId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['signing-platforms', '/signing-platforms/:platformId', keyArgs] as const
}

export function getSigningPlatformsPlatformIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['signing-platforms'][':platformId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSigningPlatformsPlatformIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['signing-platforms'][':platformId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSigningPlatformsPlatformId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['signing-platforms'][':platformId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['signing-platforms'][':platformId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['signing-platforms'][':platformId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['signing-platforms'][':platformId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSigningPlatformsPlatformIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['signing-platforms'][':platformId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSigningPlatformsPlatformIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSigningPlatformsPlatformIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['signing-platforms'][':platformId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSigningJobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['signing-jobs']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['signing-jobs', '/signing-jobs', keyArgs] as const
}

export function getSigningJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['signing-jobs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSigningJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['signing-jobs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSigningJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-jobs']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['signing-jobs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-jobs']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-jobs']['$get']>>>
            >
          >,
          ReturnType<typeof getSigningJobsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-jobs']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSigningJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSigningJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['signing-jobs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSigningJobsMutationKey() {
  return ['signing-jobs', '/signing-jobs', 'POST'] as const
}

export function getPostSigningJobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-jobs']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['signing-jobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSigningJobsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['signing-jobs']['$post']>) {
      return parseResponse(client['signing-jobs'].$post(args, options))
    },
  })
}

export function usePostSigningJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-jobs']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['signing-jobs']['$post']>,
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
  const mutationDefaults = getPostSigningJobsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSigningPlatformsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['signing-platforms']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['signing-platforms', '/signing-platforms', keyArgs] as const
}

export function getSigningPlatformsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['signing-platforms']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSigningPlatformsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['signing-platforms'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSigningPlatforms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-platforms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['signing-platforms']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['signing-platforms']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['signing-platforms']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSigningPlatformsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-platforms']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSigningPlatformsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSigningPlatformsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['signing-platforms'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSigningProfilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['signing-profiles']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['signing-profiles', '/signing-profiles', keyArgs] as const
}

export function getSigningProfilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['signing-profiles']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSigningProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['signing-profiles'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSigningProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-profiles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['signing-profiles']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-profiles']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-profiles']['$get']>>>
            >
          >,
          ReturnType<typeof getSigningProfilesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-profiles']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSigningProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSigningProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['signing-profiles'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
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
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSigningProfilesProfileNamePermissionsStatementIdRevisionIdMutationKey() {
  return [
    'signing-profiles',
    '/signing-profiles/:profileName/permissions/:statementId#revisionId',
    'DELETE',
  ] as const
}

export function getDeleteSigningProfilesProfileNamePermissionsStatementIdRevisionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['signing-profiles'][':profileName']['permissions'][':statementId#revisionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['signing-profiles'][':profileName']['permissions'][':statementId#revisionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSigningProfilesProfileNamePermissionsStatementIdRevisionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['signing-profiles'][':profileName']['permissions'][':statementId#revisionId']['$delete']
      >,
    ) {
      return parseResponse(
        client['signing-profiles'][':profileName'].permissions[':statementId#revisionId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteSigningProfilesProfileNamePermissionsStatementIdRevisionId<
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
                    (typeof client)['signing-profiles'][':profileName']['permissions'][':statementId#revisionId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['signing-profiles'][':profileName']['permissions'][':statementId#revisionId']['$delete']
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
    getDeleteSigningProfilesProfileNamePermissionsStatementIdRevisionIdMutationOptions<
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

export function getPutSigningJobsJobIdRevokeMutationKey() {
  return ['signing-jobs', '/signing-jobs/:jobId/revoke', 'PUT'] as const
}

export function getPutSigningJobsJobIdRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['signing-jobs'][':jobId']['revoke']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['signing-jobs'][':jobId']['revoke']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSigningJobsJobIdRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['signing-jobs'][':jobId']['revoke']['$put']>,
    ) {
      return parseResponse(client['signing-jobs'][':jobId'].revoke.$put(args, options))
    },
  })
}

export function usePutSigningJobsJobIdRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['signing-jobs'][':jobId']['revoke']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['signing-jobs'][':jobId']['revoke']['$put']>,
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
  const mutationDefaults = getPutSigningJobsJobIdRevokeMutationOptions<TError, TOnMutateResult>(
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

export function getPutSigningProfilesProfileNameRevokeMutationKey() {
  return ['signing-profiles', '/signing-profiles/:profileName/revoke', 'PUT'] as const
}

export function getPutSigningProfilesProfileNameRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['signing-profiles'][':profileName']['revoke']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['signing-profiles'][':profileName']['revoke']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSigningProfilesProfileNameRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['signing-profiles'][':profileName']['revoke']['$put']>,
    ) {
      return parseResponse(client['signing-profiles'][':profileName'].revoke.$put(args, options))
    },
  })
}

export function usePutSigningProfilesProfileNameRevoke<
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
                  ReturnType<(typeof client)['signing-profiles'][':profileName']['revoke']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['signing-profiles'][':profileName']['revoke']['$put']>,
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
  const mutationDefaults = getPutSigningProfilesProfileNameRevokeMutationOptions<
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
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
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
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
