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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1AppsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.apps.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps', keyArgs] as const
}

export function getV1AppsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.apps.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Apps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.apps.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$get>>>>
          >,
          ReturnType<typeof getV1AppsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1AppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AppsMutationKey() {
  return ['v1', '/v1/apps', 'POST'] as const
}

export function getPostV1AppsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.apps.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.apps.$post>) {
      return parseResponse(client.v1.apps.$post(args, options))
    },
  })
}

export function usePostV1Apps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.apps.$post>,
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
  const mutationDefaults = getPostV1AppsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1AppsApplicationIdCampaignsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['campaigns']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/campaigns', keyArgs] as const
}

export function getV1AppsApplicationIdCampaignsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['campaigns']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdCampaignsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].campaigns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdCampaigns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['campaigns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['campaigns']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['campaigns']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['campaigns']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdCampaignsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['campaigns']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdCampaignsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdCampaignsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].campaigns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AppsApplicationIdCampaignsMutationKey() {
  return ['v1', '/v1/apps/:application-id/campaigns', 'POST'] as const
}

export function getPostV1AppsApplicationIdCampaignsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['campaigns']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['campaigns']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppsApplicationIdCampaignsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apps)[':application-id']['campaigns']['$post']>,
    ) {
      return parseResponse(client.v1.apps[':application-id'].campaigns.$post(args, options))
    },
  })
}

export function usePostV1AppsApplicationIdCampaigns<
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
                  ReturnType<(typeof client.v1.apps)[':application-id']['campaigns']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apps)[':application-id']['campaigns']['$post']>,
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
  const mutationDefaults = getPostV1AppsApplicationIdCampaignsMutationOptions<
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

export function getV1TemplatesTemplateNameEmailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.templates)[':template-name']['email']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/templates/:template-name/email', keyArgs] as const
}

export function getV1TemplatesTemplateNameEmailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.templates)[':template-name']['email']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TemplatesTemplateNameEmailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.templates[':template-name'].email.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TemplatesTemplateNameEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['email']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.templates)[':template-name']['email']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['email']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['email']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1TemplatesTemplateNameEmailQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['email']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TemplatesTemplateNameEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TemplatesTemplateNameEmailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.templates[':template-name'].email.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1TemplatesTemplateNameEmailMutationKey() {
  return ['v1', '/v1/templates/:template-name/email', 'PUT'] as const
}

export function getPutV1TemplatesTemplateNameEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['email']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.templates)[':template-name']['email']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1TemplatesTemplateNameEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.templates)[':template-name']['email']['$put']>,
    ) {
      return parseResponse(client.v1.templates[':template-name'].email.$put(args, options))
    },
  })
}

export function usePutV1TemplatesTemplateNameEmail<
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
                Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['email']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.templates)[':template-name']['email']['$put']>,
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
  const mutationDefaults = getPutV1TemplatesTemplateNameEmailMutationOptions<
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

export function getPostV1TemplatesTemplateNameEmailMutationKey() {
  return ['v1', '/v1/templates/:template-name/email', 'POST'] as const
}

export function getPostV1TemplatesTemplateNameEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['email']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.templates)[':template-name']['email']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TemplatesTemplateNameEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.templates)[':template-name']['email']['$post']>,
    ) {
      return parseResponse(client.v1.templates[':template-name'].email.$post(args, options))
    },
  })
}

export function usePostV1TemplatesTemplateNameEmail<
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
                  ReturnType<(typeof client.v1.templates)[':template-name']['email']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.templates)[':template-name']['email']['$post']>,
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
  const mutationDefaults = getPostV1TemplatesTemplateNameEmailMutationOptions<
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

export function getDeleteV1TemplatesTemplateNameEmailMutationKey() {
  return ['v1', '/v1/templates/:template-name/email', 'DELETE'] as const
}

export function getDeleteV1TemplatesTemplateNameEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['email']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.templates)[':template-name']['email']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TemplatesTemplateNameEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.templates)[':template-name']['email']['$delete']>,
    ) {
      return parseResponse(client.v1.templates[':template-name'].email.$delete(args, options))
    },
  })
}

export function useDeleteV1TemplatesTemplateNameEmail<
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
                  ReturnType<(typeof client.v1.templates)[':template-name']['email']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.templates)[':template-name']['email']['$delete']>,
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
  const mutationDefaults = getDeleteV1TemplatesTemplateNameEmailMutationOptions<
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

export function getV1AppsApplicationIdJobsExportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['jobs']['export']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/jobs/export', keyArgs] as const
}

export function getV1AppsApplicationIdJobsExportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['jobs']['export']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdJobsExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].jobs.export.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdJobsExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['jobs']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['jobs']['export']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.apps)[':application-id']['jobs']['export']['$get']>
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
                  ReturnType<(typeof client.v1.apps)[':application-id']['jobs']['export']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdJobsExportQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['jobs']['export']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdJobsExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdJobsExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].jobs.export.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AppsApplicationIdJobsExportMutationKey() {
  return ['v1', '/v1/apps/:application-id/jobs/export', 'POST'] as const
}

export function getPostV1AppsApplicationIdJobsExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['jobs']['export']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['jobs']['export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppsApplicationIdJobsExportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apps)[':application-id']['jobs']['export']['$post']>,
    ) {
      return parseResponse(client.v1.apps[':application-id'].jobs.export.$post(args, options))
    },
  })
}

export function usePostV1AppsApplicationIdJobsExport<
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
                  ReturnType<(typeof client.v1.apps)[':application-id']['jobs']['export']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apps)[':application-id']['jobs']['export']['$post']>,
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
  const mutationDefaults = getPostV1AppsApplicationIdJobsExportMutationOptions<
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

export function getV1AppsApplicationIdJobsImportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['jobs']['import']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/jobs/import', keyArgs] as const
}

export function getV1AppsApplicationIdJobsImportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['jobs']['import']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdJobsImportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].jobs.import.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdJobsImport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['jobs']['import']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['jobs']['import']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.apps)[':application-id']['jobs']['import']['$get']>
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
                  ReturnType<(typeof client.v1.apps)[':application-id']['jobs']['import']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdJobsImportQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['jobs']['import']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdJobsImportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdJobsImportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].jobs.import.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AppsApplicationIdJobsImportMutationKey() {
  return ['v1', '/v1/apps/:application-id/jobs/import', 'POST'] as const
}

export function getPostV1AppsApplicationIdJobsImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['jobs']['import']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['jobs']['import']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppsApplicationIdJobsImportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apps)[':application-id']['jobs']['import']['$post']>,
    ) {
      return parseResponse(client.v1.apps[':application-id'].jobs.import.$post(args, options))
    },
  })
}

export function usePostV1AppsApplicationIdJobsImport<
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
                  ReturnType<(typeof client.v1.apps)[':application-id']['jobs']['import']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apps)[':application-id']['jobs']['import']['$post']>,
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
  const mutationDefaults = getPostV1AppsApplicationIdJobsImportMutationOptions<
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

export function getV1TemplatesTemplateNameInappQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.templates)[':template-name']['inapp']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/templates/:template-name/inapp', keyArgs] as const
}

export function getV1TemplatesTemplateNameInappQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.templates)[':template-name']['inapp']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TemplatesTemplateNameInappQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.templates[':template-name'].inapp.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TemplatesTemplateNameInapp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['inapp']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.templates)[':template-name']['inapp']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['inapp']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['inapp']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1TemplatesTemplateNameInappQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['inapp']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TemplatesTemplateNameInappQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TemplatesTemplateNameInappQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.templates[':template-name'].inapp.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1TemplatesTemplateNameInappMutationKey() {
  return ['v1', '/v1/templates/:template-name/inapp', 'PUT'] as const
}

export function getPutV1TemplatesTemplateNameInappMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['inapp']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.templates)[':template-name']['inapp']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1TemplatesTemplateNameInappMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.templates)[':template-name']['inapp']['$put']>,
    ) {
      return parseResponse(client.v1.templates[':template-name'].inapp.$put(args, options))
    },
  })
}

export function usePutV1TemplatesTemplateNameInapp<
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
                Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['inapp']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.templates)[':template-name']['inapp']['$put']>,
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
  const mutationDefaults = getPutV1TemplatesTemplateNameInappMutationOptions<
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

export function getPostV1TemplatesTemplateNameInappMutationKey() {
  return ['v1', '/v1/templates/:template-name/inapp', 'POST'] as const
}

export function getPostV1TemplatesTemplateNameInappMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['inapp']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.templates)[':template-name']['inapp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TemplatesTemplateNameInappMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.templates)[':template-name']['inapp']['$post']>,
    ) {
      return parseResponse(client.v1.templates[':template-name'].inapp.$post(args, options))
    },
  })
}

export function usePostV1TemplatesTemplateNameInapp<
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
                  ReturnType<(typeof client.v1.templates)[':template-name']['inapp']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.templates)[':template-name']['inapp']['$post']>,
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
  const mutationDefaults = getPostV1TemplatesTemplateNameInappMutationOptions<
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

export function getDeleteV1TemplatesTemplateNameInappMutationKey() {
  return ['v1', '/v1/templates/:template-name/inapp', 'DELETE'] as const
}

export function getDeleteV1TemplatesTemplateNameInappMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['inapp']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.templates)[':template-name']['inapp']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TemplatesTemplateNameInappMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.templates)[':template-name']['inapp']['$delete']>,
    ) {
      return parseResponse(client.v1.templates[':template-name'].inapp.$delete(args, options))
    },
  })
}

export function useDeleteV1TemplatesTemplateNameInapp<
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
                  ReturnType<(typeof client.v1.templates)[':template-name']['inapp']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.templates)[':template-name']['inapp']['$delete']>,
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
  const mutationDefaults = getDeleteV1TemplatesTemplateNameInappMutationOptions<
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

export function getV1AppsApplicationIdJourneysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['journeys']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/journeys', keyArgs] as const
}

export function getV1AppsApplicationIdJourneysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['journeys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdJourneysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].journeys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdJourneys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['journeys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['journeys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['journeys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['journeys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdJourneysQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['journeys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdJourneysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdJourneysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].journeys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AppsApplicationIdJourneysMutationKey() {
  return ['v1', '/v1/apps/:application-id/journeys', 'POST'] as const
}

export function getPostV1AppsApplicationIdJourneysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['journeys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['journeys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppsApplicationIdJourneysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apps)[':application-id']['journeys']['$post']>,
    ) {
      return parseResponse(client.v1.apps[':application-id'].journeys.$post(args, options))
    },
  })
}

export function usePostV1AppsApplicationIdJourneys<
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
                Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['journeys']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apps)[':application-id']['journeys']['$post']>,
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
  const mutationDefaults = getPostV1AppsApplicationIdJourneysMutationOptions<
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

export function getV1TemplatesTemplateNamePushQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.templates)[':template-name']['push']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/templates/:template-name/push', keyArgs] as const
}

export function getV1TemplatesTemplateNamePushQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.templates)[':template-name']['push']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TemplatesTemplateNamePushQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.templates[':template-name'].push.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TemplatesTemplateNamePush<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['push']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.templates)[':template-name']['push']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['push']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['push']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1TemplatesTemplateNamePushQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['push']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TemplatesTemplateNamePushQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TemplatesTemplateNamePushQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.templates[':template-name'].push.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1TemplatesTemplateNamePushMutationKey() {
  return ['v1', '/v1/templates/:template-name/push', 'PUT'] as const
}

export function getPutV1TemplatesTemplateNamePushMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['push']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.templates)[':template-name']['push']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1TemplatesTemplateNamePushMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.templates)[':template-name']['push']['$put']>,
    ) {
      return parseResponse(client.v1.templates[':template-name'].push.$put(args, options))
    },
  })
}

export function usePutV1TemplatesTemplateNamePush<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['push']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.templates)[':template-name']['push']['$put']>,
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
  const mutationDefaults = getPutV1TemplatesTemplateNamePushMutationOptions<
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

export function getPostV1TemplatesTemplateNamePushMutationKey() {
  return ['v1', '/v1/templates/:template-name/push', 'POST'] as const
}

export function getPostV1TemplatesTemplateNamePushMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['push']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.templates)[':template-name']['push']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TemplatesTemplateNamePushMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.templates)[':template-name']['push']['$post']>,
    ) {
      return parseResponse(client.v1.templates[':template-name'].push.$post(args, options))
    },
  })
}

export function usePostV1TemplatesTemplateNamePush<
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
                Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['push']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.templates)[':template-name']['push']['$post']>,
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
  const mutationDefaults = getPostV1TemplatesTemplateNamePushMutationOptions<
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

export function getDeleteV1TemplatesTemplateNamePushMutationKey() {
  return ['v1', '/v1/templates/:template-name/push', 'DELETE'] as const
}

export function getDeleteV1TemplatesTemplateNamePushMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['push']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.templates)[':template-name']['push']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TemplatesTemplateNamePushMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.templates)[':template-name']['push']['$delete']>,
    ) {
      return parseResponse(client.v1.templates[':template-name'].push.$delete(args, options))
    },
  })
}

export function useDeleteV1TemplatesTemplateNamePush<
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
                  ReturnType<(typeof client.v1.templates)[':template-name']['push']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.templates)[':template-name']['push']['$delete']>,
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
  const mutationDefaults = getDeleteV1TemplatesTemplateNamePushMutationOptions<
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

export function getV1RecommendersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.recommenders.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/recommenders', keyArgs] as const
}

export function getV1RecommendersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.recommenders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RecommendersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.recommenders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Recommenders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.recommenders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.recommenders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.recommenders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.recommenders.$get>>>
            >
          >,
          ReturnType<typeof getV1RecommendersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.recommenders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1RecommendersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RecommendersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.recommenders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1RecommendersMutationKey() {
  return ['v1', '/v1/recommenders', 'POST'] as const
}

export function getPostV1RecommendersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.recommenders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.recommenders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RecommendersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.recommenders.$post>) {
      return parseResponse(client.v1.recommenders.$post(args, options))
    },
  })
}

export function usePostV1Recommenders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.recommenders.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.recommenders.$post>,
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
  const mutationDefaults = getPostV1RecommendersMutationOptions<TError, TOnMutateResult>(
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

export function getV1AppsApplicationIdSegmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['segments']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/segments', keyArgs] as const
}

export function getV1AppsApplicationIdSegmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['segments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdSegmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].segments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdSegments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['segments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['segments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['segments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['segments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdSegmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['segments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdSegmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdSegmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].segments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AppsApplicationIdSegmentsMutationKey() {
  return ['v1', '/v1/apps/:application-id/segments', 'POST'] as const
}

export function getPostV1AppsApplicationIdSegmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['segments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['segments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppsApplicationIdSegmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apps)[':application-id']['segments']['$post']>,
    ) {
      return parseResponse(client.v1.apps[':application-id'].segments.$post(args, options))
    },
  })
}

export function usePostV1AppsApplicationIdSegments<
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
                Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['segments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apps)[':application-id']['segments']['$post']>,
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
  const mutationDefaults = getPostV1AppsApplicationIdSegmentsMutationOptions<
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

export function getV1TemplatesTemplateNameSmsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.templates)[':template-name']['sms']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/templates/:template-name/sms', keyArgs] as const
}

export function getV1TemplatesTemplateNameSmsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.templates)[':template-name']['sms']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TemplatesTemplateNameSmsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.templates[':template-name'].sms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TemplatesTemplateNameSms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['sms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.templates)[':template-name']['sms']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['sms']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['sms']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1TemplatesTemplateNameSmsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['sms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TemplatesTemplateNameSmsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TemplatesTemplateNameSmsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.templates[':template-name'].sms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1TemplatesTemplateNameSmsMutationKey() {
  return ['v1', '/v1/templates/:template-name/sms', 'PUT'] as const
}

export function getPutV1TemplatesTemplateNameSmsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['sms']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.templates)[':template-name']['sms']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1TemplatesTemplateNameSmsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.templates)[':template-name']['sms']['$put']>,
    ) {
      return parseResponse(client.v1.templates[':template-name'].sms.$put(args, options))
    },
  })
}

export function usePutV1TemplatesTemplateNameSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['sms']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.templates)[':template-name']['sms']['$put']>,
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
  const mutationDefaults = getPutV1TemplatesTemplateNameSmsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1TemplatesTemplateNameSmsMutationKey() {
  return ['v1', '/v1/templates/:template-name/sms', 'POST'] as const
}

export function getPostV1TemplatesTemplateNameSmsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['sms']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.templates)[':template-name']['sms']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TemplatesTemplateNameSmsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.templates)[':template-name']['sms']['$post']>,
    ) {
      return parseResponse(client.v1.templates[':template-name'].sms.$post(args, options))
    },
  })
}

export function usePostV1TemplatesTemplateNameSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['sms']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.templates)[':template-name']['sms']['$post']>,
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
  const mutationDefaults = getPostV1TemplatesTemplateNameSmsMutationOptions<
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

export function getDeleteV1TemplatesTemplateNameSmsMutationKey() {
  return ['v1', '/v1/templates/:template-name/sms', 'DELETE'] as const
}

export function getDeleteV1TemplatesTemplateNameSmsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['sms']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.templates)[':template-name']['sms']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TemplatesTemplateNameSmsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.templates)[':template-name']['sms']['$delete']>,
    ) {
      return parseResponse(client.v1.templates[':template-name'].sms.$delete(args, options))
    },
  })
}

export function useDeleteV1TemplatesTemplateNameSms<
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
                  ReturnType<(typeof client.v1.templates)[':template-name']['sms']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.templates)[':template-name']['sms']['$delete']>,
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
  const mutationDefaults = getDeleteV1TemplatesTemplateNameSmsMutationOptions<
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

export function getV1TemplatesTemplateNameVoiceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.templates)[':template-name']['voice']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/templates/:template-name/voice', keyArgs] as const
}

export function getV1TemplatesTemplateNameVoiceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.templates)[':template-name']['voice']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TemplatesTemplateNameVoiceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.templates[':template-name'].voice.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TemplatesTemplateNameVoice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['voice']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.templates)[':template-name']['voice']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['voice']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['voice']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1TemplatesTemplateNameVoiceQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['voice']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TemplatesTemplateNameVoiceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TemplatesTemplateNameVoiceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.templates[':template-name'].voice.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1TemplatesTemplateNameVoiceMutationKey() {
  return ['v1', '/v1/templates/:template-name/voice', 'PUT'] as const
}

export function getPutV1TemplatesTemplateNameVoiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['voice']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.templates)[':template-name']['voice']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1TemplatesTemplateNameVoiceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.templates)[':template-name']['voice']['$put']>,
    ) {
      return parseResponse(client.v1.templates[':template-name'].voice.$put(args, options))
    },
  })
}

export function usePutV1TemplatesTemplateNameVoice<
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
                Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['voice']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.templates)[':template-name']['voice']['$put']>,
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
  const mutationDefaults = getPutV1TemplatesTemplateNameVoiceMutationOptions<
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

export function getPostV1TemplatesTemplateNameVoiceMutationKey() {
  return ['v1', '/v1/templates/:template-name/voice', 'POST'] as const
}

export function getPostV1TemplatesTemplateNameVoiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['voice']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.templates)[':template-name']['voice']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TemplatesTemplateNameVoiceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.templates)[':template-name']['voice']['$post']>,
    ) {
      return parseResponse(client.v1.templates[':template-name'].voice.$post(args, options))
    },
  })
}

export function usePostV1TemplatesTemplateNameVoice<
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
                  ReturnType<(typeof client.v1.templates)[':template-name']['voice']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.templates)[':template-name']['voice']['$post']>,
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
  const mutationDefaults = getPostV1TemplatesTemplateNameVoiceMutationOptions<
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

export function getDeleteV1TemplatesTemplateNameVoiceMutationKey() {
  return ['v1', '/v1/templates/:template-name/voice', 'DELETE'] as const
}

export function getDeleteV1TemplatesTemplateNameVoiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['voice']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.templates)[':template-name']['voice']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TemplatesTemplateNameVoiceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.templates)[':template-name']['voice']['$delete']>,
    ) {
      return parseResponse(client.v1.templates[':template-name'].voice.$delete(args, options))
    },
  })
}

export function useDeleteV1TemplatesTemplateNameVoice<
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
                  ReturnType<(typeof client.v1.templates)[':template-name']['voice']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.templates)[':template-name']['voice']['$delete']>,
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
  const mutationDefaults = getDeleteV1TemplatesTemplateNameVoiceMutationOptions<
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

export function getV1AppsApplicationIdChannelsAdmQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/channels/adm', keyArgs] as const
}

export function getV1AppsApplicationIdChannelsAdmQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdChannelsAdmQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].channels.adm.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdChannelsAdm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$get']>
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
                  ReturnType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdChannelsAdmQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdChannelsAdmQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdChannelsAdmQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].channels.adm.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1AppsApplicationIdChannelsAdmMutationKey() {
  return ['v1', '/v1/apps/:application-id/channels/adm', 'PUT'] as const
}

export function getPutV1AppsApplicationIdChannelsAdmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AppsApplicationIdChannelsAdmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$put']>,
    ) {
      return parseResponse(client.v1.apps[':application-id'].channels.adm.$put(args, options))
    },
  })
}

export function usePutV1AppsApplicationIdChannelsAdm<
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
                  ReturnType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$put']>,
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
  const mutationDefaults = getPutV1AppsApplicationIdChannelsAdmMutationOptions<
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

export function getDeleteV1AppsApplicationIdChannelsAdmMutationKey() {
  return ['v1', '/v1/apps/:application-id/channels/adm', 'DELETE'] as const
}

export function getDeleteV1AppsApplicationIdChannelsAdmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppsApplicationIdChannelsAdmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['channels']['adm']['$delete']
      >,
    ) {
      return parseResponse(client.v1.apps[':application-id'].channels.adm.$delete(args, options))
    },
  })
}

export function useDeleteV1AppsApplicationIdChannelsAdm<
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
                    (typeof client.v1.apps)[':application-id']['channels']['adm']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apps)[':application-id']['channels']['adm']['$delete']
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
  const mutationDefaults = getDeleteV1AppsApplicationIdChannelsAdmMutationOptions<
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

export function getV1AppsApplicationIdChannelsApnsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['apns']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/channels/apns', keyArgs] as const
}

export function getV1AppsApplicationIdChannelsApnsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['apns']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdChannelsApnsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].channels.apns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdChannelsApns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['channels']['apns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['apns']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.apps)[':application-id']['channels']['apns']['$get']>
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
                  ReturnType<(typeof client.v1.apps)[':application-id']['channels']['apns']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdChannelsApnsQueryKey>
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
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['apns']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdChannelsApnsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdChannelsApnsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].channels.apns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1AppsApplicationIdChannelsApnsMutationKey() {
  return ['v1', '/v1/apps/:application-id/channels/apns', 'PUT'] as const
}

export function getPutV1AppsApplicationIdChannelsApnsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['apns']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['apns']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AppsApplicationIdChannelsApnsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['channels']['apns']['$put']
      >,
    ) {
      return parseResponse(client.v1.apps[':application-id'].channels.apns.$put(args, options))
    },
  })
}

export function usePutV1AppsApplicationIdChannelsApns<
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
                  ReturnType<(typeof client.v1.apps)[':application-id']['channels']['apns']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['apns']['$put']>,
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
  const mutationDefaults = getPutV1AppsApplicationIdChannelsApnsMutationOptions<
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

export function getDeleteV1AppsApplicationIdChannelsApnsMutationKey() {
  return ['v1', '/v1/apps/:application-id/channels/apns', 'DELETE'] as const
}

export function getDeleteV1AppsApplicationIdChannelsApnsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['apns']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['apns']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppsApplicationIdChannelsApnsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['channels']['apns']['$delete']
      >,
    ) {
      return parseResponse(client.v1.apps[':application-id'].channels.apns.$delete(args, options))
    },
  })
}

export function useDeleteV1AppsApplicationIdChannelsApns<
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
                    (typeof client.v1.apps)[':application-id']['channels']['apns']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apps)[':application-id']['channels']['apns']['$delete']
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
  const mutationDefaults = getDeleteV1AppsApplicationIdChannelsApnsMutationOptions<
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

export function getV1AppsApplicationIdChannelsApnsSandboxQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/channels/apns_sandbox', keyArgs] as const
}

export function getV1AppsApplicationIdChannelsApnsSandboxQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdChannelsApnsSandboxQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].channels.apns_sandbox.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdChannelsApnsSandbox<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$get']>
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
                    (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$get']
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
                    (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdChannelsApnsSandboxQueryKey>
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
              (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdChannelsApnsSandboxQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdChannelsApnsSandboxQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].channels.apns_sandbox.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1AppsApplicationIdChannelsApnsSandboxMutationKey() {
  return ['v1', '/v1/apps/:application-id/channels/apns_sandbox', 'PUT'] as const
}

export function getPutV1AppsApplicationIdChannelsApnsSandboxMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1AppsApplicationIdChannelsApnsSandboxMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.apps[':application-id'].channels.apns_sandbox.$put(args, options),
      )
    },
  })
}

export function usePutV1AppsApplicationIdChannelsApnsSandbox<
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
                    (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$put']
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
  const mutationDefaults = getPutV1AppsApplicationIdChannelsApnsSandboxMutationOptions<
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

export function getDeleteV1AppsApplicationIdChannelsApnsSandboxMutationKey() {
  return ['v1', '/v1/apps/:application-id/channels/apns_sandbox', 'DELETE'] as const
}

export function getDeleteV1AppsApplicationIdChannelsApnsSandboxMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppsApplicationIdChannelsApnsSandboxMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.apps[':application-id'].channels.apns_sandbox.$delete(args, options),
      )
    },
  })
}

export function useDeleteV1AppsApplicationIdChannelsApnsSandbox<
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
                    (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$delete']
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
  const mutationDefaults = getDeleteV1AppsApplicationIdChannelsApnsSandboxMutationOptions<
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

export function getV1AppsApplicationIdChannelsApnsVoipQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/channels/apns_voip', keyArgs] as const
}

export function getV1AppsApplicationIdChannelsApnsVoipQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdChannelsApnsVoipQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].channels.apns_voip.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdChannelsApnsVoip<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$get']>
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
                    (typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$get']
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
                    (typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdChannelsApnsVoipQueryKey>
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
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdChannelsApnsVoipQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdChannelsApnsVoipQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].channels.apns_voip.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1AppsApplicationIdChannelsApnsVoipMutationKey() {
  return ['v1', '/v1/apps/:application-id/channels/apns_voip', 'PUT'] as const
}

export function getPutV1AppsApplicationIdChannelsApnsVoipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AppsApplicationIdChannelsApnsVoipMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$put']
      >,
    ) {
      return parseResponse(client.v1.apps[':application-id'].channels.apns_voip.$put(args, options))
    },
  })
}

export function usePutV1AppsApplicationIdChannelsApnsVoip<
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
                    (typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$put']
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
  const mutationDefaults = getPutV1AppsApplicationIdChannelsApnsVoipMutationOptions<
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

export function getDeleteV1AppsApplicationIdChannelsApnsVoipMutationKey() {
  return ['v1', '/v1/apps/:application-id/channels/apns_voip', 'DELETE'] as const
}

export function getDeleteV1AppsApplicationIdChannelsApnsVoipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppsApplicationIdChannelsApnsVoipMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.apps[':application-id'].channels.apns_voip.$delete(args, options),
      )
    },
  })
}

export function useDeleteV1AppsApplicationIdChannelsApnsVoip<
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
                    (typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$delete']
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
  const mutationDefaults = getDeleteV1AppsApplicationIdChannelsApnsVoipMutationOptions<
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

export function getV1AppsApplicationIdChannelsApnsVoipSandboxQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/channels/apns_voip_sandbox', keyArgs] as const
}

export function getV1AppsApplicationIdChannelsApnsVoipSandboxQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdChannelsApnsVoipSandboxQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].channels.apns_voip_sandbox.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdChannelsApnsVoipSandbox<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$get']
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
                    (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$get']
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
                    (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdChannelsApnsVoipSandboxQueryKey>
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
              (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdChannelsApnsVoipSandboxQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdChannelsApnsVoipSandboxQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].channels.apns_voip_sandbox.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1AppsApplicationIdChannelsApnsVoipSandboxMutationKey() {
  return ['v1', '/v1/apps/:application-id/channels/apns_voip_sandbox', 'PUT'] as const
}

export function getPutV1AppsApplicationIdChannelsApnsVoipSandboxMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1AppsApplicationIdChannelsApnsVoipSandboxMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.apps[':application-id'].channels.apns_voip_sandbox.$put(args, options),
      )
    },
  })
}

export function usePutV1AppsApplicationIdChannelsApnsVoipSandbox<
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
                    (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$put']
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
  const mutationDefaults = getPutV1AppsApplicationIdChannelsApnsVoipSandboxMutationOptions<
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

export function getDeleteV1AppsApplicationIdChannelsApnsVoipSandboxMutationKey() {
  return ['v1', '/v1/apps/:application-id/channels/apns_voip_sandbox', 'DELETE'] as const
}

export function getDeleteV1AppsApplicationIdChannelsApnsVoipSandboxMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppsApplicationIdChannelsApnsVoipSandboxMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.apps[':application-id'].channels.apns_voip_sandbox.$delete(args, options),
      )
    },
  })
}

export function useDeleteV1AppsApplicationIdChannelsApnsVoipSandbox<
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
                    (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$delete']
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
  const mutationDefaults = getDeleteV1AppsApplicationIdChannelsApnsVoipSandboxMutationOptions<
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

export function getV1AppsApplicationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apps)[':application-id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id', keyArgs] as const
}

export function getV1AppsApplicationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apps)[':application-id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apps)[':application-id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1AppsApplicationIdMutationKey() {
  return ['v1', '/v1/apps/:application-id', 'DELETE'] as const
}

export function getDeleteV1AppsApplicationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppsApplicationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apps)[':application-id']['$delete']>,
    ) {
      return parseResponse(client.v1.apps[':application-id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AppsApplicationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apps)[':application-id']['$delete']>,
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
  const mutationDefaults = getDeleteV1AppsApplicationIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1AppsApplicationIdChannelsBaiduQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['baidu']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/channels/baidu', keyArgs] as const
}

export function getV1AppsApplicationIdChannelsBaiduQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['baidu']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdChannelsBaiduQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].channels.baidu.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdChannelsBaidu<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['channels']['baidu']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['baidu']['$get']>
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
                    (typeof client.v1.apps)[':application-id']['channels']['baidu']['$get']
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
                    (typeof client.v1.apps)[':application-id']['channels']['baidu']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdChannelsBaiduQueryKey>
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
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['baidu']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdChannelsBaiduQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdChannelsBaiduQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].channels.baidu.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1AppsApplicationIdChannelsBaiduMutationKey() {
  return ['v1', '/v1/apps/:application-id/channels/baidu', 'PUT'] as const
}

export function getPutV1AppsApplicationIdChannelsBaiduMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['baidu']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['baidu']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AppsApplicationIdChannelsBaiduMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['channels']['baidu']['$put']
      >,
    ) {
      return parseResponse(client.v1.apps[':application-id'].channels.baidu.$put(args, options))
    },
  })
}

export function usePutV1AppsApplicationIdChannelsBaidu<
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
                    (typeof client.v1.apps)[':application-id']['channels']['baidu']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['baidu']['$put']>,
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
  const mutationDefaults = getPutV1AppsApplicationIdChannelsBaiduMutationOptions<
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

export function getDeleteV1AppsApplicationIdChannelsBaiduMutationKey() {
  return ['v1', '/v1/apps/:application-id/channels/baidu', 'DELETE'] as const
}

export function getDeleteV1AppsApplicationIdChannelsBaiduMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['baidu']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['baidu']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppsApplicationIdChannelsBaiduMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['channels']['baidu']['$delete']
      >,
    ) {
      return parseResponse(client.v1.apps[':application-id'].channels.baidu.$delete(args, options))
    },
  })
}

export function useDeleteV1AppsApplicationIdChannelsBaidu<
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
                    (typeof client.v1.apps)[':application-id']['channels']['baidu']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apps)[':application-id']['channels']['baidu']['$delete']
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
  const mutationDefaults = getDeleteV1AppsApplicationIdChannelsBaiduMutationOptions<
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

export function getV1AppsApplicationIdCampaignsCampaignIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/campaigns/:campaign-id', keyArgs] as const
}

export function getV1AppsApplicationIdCampaignsCampaignIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdCampaignsCampaignIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].campaigns[':campaign-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdCampaignsCampaignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$get']
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
                    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$get']
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
                    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdCampaignsCampaignIdQueryKey>
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
              (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdCampaignsCampaignIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdCampaignsCampaignIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].campaigns[':campaign-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1AppsApplicationIdCampaignsCampaignIdMutationKey() {
  return ['v1', '/v1/apps/:application-id/campaigns/:campaign-id', 'PUT'] as const
}

export function getPutV1AppsApplicationIdCampaignsCampaignIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1AppsApplicationIdCampaignsCampaignIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.apps[':application-id'].campaigns[':campaign-id'].$put(args, options),
      )
    },
  })
}

export function usePutV1AppsApplicationIdCampaignsCampaignId<
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
                    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$put']
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
  const mutationDefaults = getPutV1AppsApplicationIdCampaignsCampaignIdMutationOptions<
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

export function getDeleteV1AppsApplicationIdCampaignsCampaignIdMutationKey() {
  return ['v1', '/v1/apps/:application-id/campaigns/:campaign-id', 'DELETE'] as const
}

export function getDeleteV1AppsApplicationIdCampaignsCampaignIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppsApplicationIdCampaignsCampaignIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.apps[':application-id'].campaigns[':campaign-id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1AppsApplicationIdCampaignsCampaignId<
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
                    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$delete']
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
  const mutationDefaults = getDeleteV1AppsApplicationIdCampaignsCampaignIdMutationOptions<
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

export function getV1AppsApplicationIdChannelsEmailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['email']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/channels/email', keyArgs] as const
}

export function getV1AppsApplicationIdChannelsEmailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['email']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdChannelsEmailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].channels.email.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdChannelsEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['channels']['email']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['email']['$get']>
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
                    (typeof client.v1.apps)[':application-id']['channels']['email']['$get']
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
                    (typeof client.v1.apps)[':application-id']['channels']['email']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdChannelsEmailQueryKey>
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
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['email']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdChannelsEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdChannelsEmailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].channels.email.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1AppsApplicationIdChannelsEmailMutationKey() {
  return ['v1', '/v1/apps/:application-id/channels/email', 'PUT'] as const
}

export function getPutV1AppsApplicationIdChannelsEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['email']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['email']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AppsApplicationIdChannelsEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['channels']['email']['$put']
      >,
    ) {
      return parseResponse(client.v1.apps[':application-id'].channels.email.$put(args, options))
    },
  })
}

export function usePutV1AppsApplicationIdChannelsEmail<
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
                    (typeof client.v1.apps)[':application-id']['channels']['email']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['email']['$put']>,
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
  const mutationDefaults = getPutV1AppsApplicationIdChannelsEmailMutationOptions<
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

export function getDeleteV1AppsApplicationIdChannelsEmailMutationKey() {
  return ['v1', '/v1/apps/:application-id/channels/email', 'DELETE'] as const
}

export function getDeleteV1AppsApplicationIdChannelsEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['email']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['email']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppsApplicationIdChannelsEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['channels']['email']['$delete']
      >,
    ) {
      return parseResponse(client.v1.apps[':application-id'].channels.email.$delete(args, options))
    },
  })
}

export function useDeleteV1AppsApplicationIdChannelsEmail<
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
                    (typeof client.v1.apps)[':application-id']['channels']['email']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apps)[':application-id']['channels']['email']['$delete']
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
  const mutationDefaults = getDeleteV1AppsApplicationIdChannelsEmailMutationOptions<
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

export function getV1AppsApplicationIdEndpointsEndpointIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/endpoints/:endpoint-id', keyArgs] as const
}

export function getV1AppsApplicationIdEndpointsEndpointIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdEndpointsEndpointIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].endpoints[':endpoint-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdEndpointsEndpointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$get']
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
                    (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$get']
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
                    (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdEndpointsEndpointIdQueryKey>
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
              (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdEndpointsEndpointIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdEndpointsEndpointIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].endpoints[':endpoint-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1AppsApplicationIdEndpointsEndpointIdMutationKey() {
  return ['v1', '/v1/apps/:application-id/endpoints/:endpoint-id', 'PUT'] as const
}

export function getPutV1AppsApplicationIdEndpointsEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1AppsApplicationIdEndpointsEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.apps[':application-id'].endpoints[':endpoint-id'].$put(args, options),
      )
    },
  })
}

export function usePutV1AppsApplicationIdEndpointsEndpointId<
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
                    (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$put']
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
  const mutationDefaults = getPutV1AppsApplicationIdEndpointsEndpointIdMutationOptions<
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

export function getDeleteV1AppsApplicationIdEndpointsEndpointIdMutationKey() {
  return ['v1', '/v1/apps/:application-id/endpoints/:endpoint-id', 'DELETE'] as const
}

export function getDeleteV1AppsApplicationIdEndpointsEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppsApplicationIdEndpointsEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.apps[':application-id'].endpoints[':endpoint-id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1AppsApplicationIdEndpointsEndpointId<
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
                    (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$delete']
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
  const mutationDefaults = getDeleteV1AppsApplicationIdEndpointsEndpointIdMutationOptions<
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

export function getV1AppsApplicationIdEventstreamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['eventstream']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/eventstream', keyArgs] as const
}

export function getV1AppsApplicationIdEventstreamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['eventstream']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdEventstreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].eventstream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdEventstream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['eventstream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['eventstream']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.apps)[':application-id']['eventstream']['$get']>
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
                  ReturnType<(typeof client.v1.apps)[':application-id']['eventstream']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdEventstreamQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['eventstream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdEventstreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdEventstreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].eventstream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AppsApplicationIdEventstreamMutationKey() {
  return ['v1', '/v1/apps/:application-id/eventstream', 'POST'] as const
}

export function getPostV1AppsApplicationIdEventstreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['eventstream']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['eventstream']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppsApplicationIdEventstreamMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apps)[':application-id']['eventstream']['$post']>,
    ) {
      return parseResponse(client.v1.apps[':application-id'].eventstream.$post(args, options))
    },
  })
}

export function usePostV1AppsApplicationIdEventstream<
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
                  ReturnType<(typeof client.v1.apps)[':application-id']['eventstream']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apps)[':application-id']['eventstream']['$post']>,
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
  const mutationDefaults = getPostV1AppsApplicationIdEventstreamMutationOptions<
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

export function getDeleteV1AppsApplicationIdEventstreamMutationKey() {
  return ['v1', '/v1/apps/:application-id/eventstream', 'DELETE'] as const
}

export function getDeleteV1AppsApplicationIdEventstreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['eventstream']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['eventstream']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppsApplicationIdEventstreamMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apps)[':application-id']['eventstream']['$delete']>,
    ) {
      return parseResponse(client.v1.apps[':application-id'].eventstream.$delete(args, options))
    },
  })
}

export function useDeleteV1AppsApplicationIdEventstream<
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
                  ReturnType<(typeof client.v1.apps)[':application-id']['eventstream']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apps)[':application-id']['eventstream']['$delete']>,
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
  const mutationDefaults = getDeleteV1AppsApplicationIdEventstreamMutationOptions<
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

export function getV1AppsApplicationIdChannelsGcmQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/channels/gcm', keyArgs] as const
}

export function getV1AppsApplicationIdChannelsGcmQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdChannelsGcmQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].channels.gcm.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdChannelsGcm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$get']>
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
                  ReturnType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdChannelsGcmQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdChannelsGcmQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdChannelsGcmQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].channels.gcm.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1AppsApplicationIdChannelsGcmMutationKey() {
  return ['v1', '/v1/apps/:application-id/channels/gcm', 'PUT'] as const
}

export function getPutV1AppsApplicationIdChannelsGcmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AppsApplicationIdChannelsGcmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$put']>,
    ) {
      return parseResponse(client.v1.apps[':application-id'].channels.gcm.$put(args, options))
    },
  })
}

export function usePutV1AppsApplicationIdChannelsGcm<
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
                  ReturnType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$put']>,
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
  const mutationDefaults = getPutV1AppsApplicationIdChannelsGcmMutationOptions<
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

export function getDeleteV1AppsApplicationIdChannelsGcmMutationKey() {
  return ['v1', '/v1/apps/:application-id/channels/gcm', 'DELETE'] as const
}

export function getDeleteV1AppsApplicationIdChannelsGcmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppsApplicationIdChannelsGcmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['channels']['gcm']['$delete']
      >,
    ) {
      return parseResponse(client.v1.apps[':application-id'].channels.gcm.$delete(args, options))
    },
  })
}

export function useDeleteV1AppsApplicationIdChannelsGcm<
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
                    (typeof client.v1.apps)[':application-id']['channels']['gcm']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apps)[':application-id']['channels']['gcm']['$delete']
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
  const mutationDefaults = getDeleteV1AppsApplicationIdChannelsGcmMutationOptions<
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

export function getV1AppsApplicationIdJourneysJourneyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/journeys/:journey-id', keyArgs] as const
}

export function getV1AppsApplicationIdJourneysJourneyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdJourneysJourneyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].journeys[':journey-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdJourneysJourneyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$get']>
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
                    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$get']
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
                    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdJourneysJourneyIdQueryKey>
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
              (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdJourneysJourneyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdJourneysJourneyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].journeys[':journey-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1AppsApplicationIdJourneysJourneyIdMutationKey() {
  return ['v1', '/v1/apps/:application-id/journeys/:journey-id', 'PUT'] as const
}

export function getPutV1AppsApplicationIdJourneysJourneyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AppsApplicationIdJourneysJourneyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.apps[':application-id'].journeys[':journey-id'].$put(args, options),
      )
    },
  })
}

export function usePutV1AppsApplicationIdJourneysJourneyId<
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
                    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$put']
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
  const mutationDefaults = getPutV1AppsApplicationIdJourneysJourneyIdMutationOptions<
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

export function getDeleteV1AppsApplicationIdJourneysJourneyIdMutationKey() {
  return ['v1', '/v1/apps/:application-id/journeys/:journey-id', 'DELETE'] as const
}

export function getDeleteV1AppsApplicationIdJourneysJourneyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppsApplicationIdJourneysJourneyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.apps[':application-id'].journeys[':journey-id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1AppsApplicationIdJourneysJourneyId<
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
                    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$delete']
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
  const mutationDefaults = getDeleteV1AppsApplicationIdJourneysJourneyIdMutationOptions<
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

export function getV1RecommendersRecommenderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.recommenders)[':recommender-id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/recommenders/:recommender-id', keyArgs] as const
}

export function getV1RecommendersRecommenderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.recommenders)[':recommender-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RecommendersRecommenderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.recommenders[':recommender-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RecommendersRecommenderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.recommenders)[':recommender-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.recommenders)[':recommender-id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.recommenders)[':recommender-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.recommenders)[':recommender-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1RecommendersRecommenderIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.recommenders)[':recommender-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RecommendersRecommenderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RecommendersRecommenderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.recommenders[':recommender-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1RecommendersRecommenderIdMutationKey() {
  return ['v1', '/v1/recommenders/:recommender-id', 'PUT'] as const
}

export function getPutV1RecommendersRecommenderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.recommenders)[':recommender-id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.recommenders)[':recommender-id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1RecommendersRecommenderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.recommenders)[':recommender-id']['$put']>,
    ) {
      return parseResponse(client.v1.recommenders[':recommender-id'].$put(args, options))
    },
  })
}

export function usePutV1RecommendersRecommenderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.recommenders)[':recommender-id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.recommenders)[':recommender-id']['$put']>,
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
  const mutationDefaults = getPutV1RecommendersRecommenderIdMutationOptions<
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

export function getDeleteV1RecommendersRecommenderIdMutationKey() {
  return ['v1', '/v1/recommenders/:recommender-id', 'DELETE'] as const
}

export function getDeleteV1RecommendersRecommenderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.recommenders)[':recommender-id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.recommenders)[':recommender-id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1RecommendersRecommenderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.recommenders)[':recommender-id']['$delete']>,
    ) {
      return parseResponse(client.v1.recommenders[':recommender-id'].$delete(args, options))
    },
  })
}

export function useDeleteV1RecommendersRecommenderId<
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
                Awaited<ReturnType<(typeof client.v1.recommenders)[':recommender-id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.recommenders)[':recommender-id']['$delete']>,
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
  const mutationDefaults = getDeleteV1RecommendersRecommenderIdMutationOptions<
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

export function getV1AppsApplicationIdSegmentsSegmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/segments/:segment-id', keyArgs] as const
}

export function getV1AppsApplicationIdSegmentsSegmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdSegmentsSegmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].segments[':segment-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdSegmentsSegmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$get']>
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
                    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$get']
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
                    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdSegmentsSegmentIdQueryKey>
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
              (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdSegmentsSegmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdSegmentsSegmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].segments[':segment-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1AppsApplicationIdSegmentsSegmentIdMutationKey() {
  return ['v1', '/v1/apps/:application-id/segments/:segment-id', 'PUT'] as const
}

export function getPutV1AppsApplicationIdSegmentsSegmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AppsApplicationIdSegmentsSegmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.apps[':application-id'].segments[':segment-id'].$put(args, options),
      )
    },
  })
}

export function usePutV1AppsApplicationIdSegmentsSegmentId<
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
                    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$put']
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
  const mutationDefaults = getPutV1AppsApplicationIdSegmentsSegmentIdMutationOptions<
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

export function getDeleteV1AppsApplicationIdSegmentsSegmentIdMutationKey() {
  return ['v1', '/v1/apps/:application-id/segments/:segment-id', 'DELETE'] as const
}

export function getDeleteV1AppsApplicationIdSegmentsSegmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppsApplicationIdSegmentsSegmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.apps[':application-id'].segments[':segment-id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1AppsApplicationIdSegmentsSegmentId<
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
                    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$delete']
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
  const mutationDefaults = getDeleteV1AppsApplicationIdSegmentsSegmentIdMutationOptions<
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

export function getV1AppsApplicationIdChannelsSmsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/channels/sms', keyArgs] as const
}

export function getV1AppsApplicationIdChannelsSmsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdChannelsSmsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].channels.sms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdChannelsSms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$get']>
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
                  ReturnType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdChannelsSmsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdChannelsSmsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdChannelsSmsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].channels.sms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1AppsApplicationIdChannelsSmsMutationKey() {
  return ['v1', '/v1/apps/:application-id/channels/sms', 'PUT'] as const
}

export function getPutV1AppsApplicationIdChannelsSmsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AppsApplicationIdChannelsSmsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$put']>,
    ) {
      return parseResponse(client.v1.apps[':application-id'].channels.sms.$put(args, options))
    },
  })
}

export function usePutV1AppsApplicationIdChannelsSms<
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
                  ReturnType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$put']>,
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
  const mutationDefaults = getPutV1AppsApplicationIdChannelsSmsMutationOptions<
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

export function getDeleteV1AppsApplicationIdChannelsSmsMutationKey() {
  return ['v1', '/v1/apps/:application-id/channels/sms', 'DELETE'] as const
}

export function getDeleteV1AppsApplicationIdChannelsSmsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppsApplicationIdChannelsSmsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['channels']['sms']['$delete']
      >,
    ) {
      return parseResponse(client.v1.apps[':application-id'].channels.sms.$delete(args, options))
    },
  })
}

export function useDeleteV1AppsApplicationIdChannelsSms<
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
                    (typeof client.v1.apps)[':application-id']['channels']['sms']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apps)[':application-id']['channels']['sms']['$delete']
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
  const mutationDefaults = getDeleteV1AppsApplicationIdChannelsSmsMutationOptions<
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

export function getV1AppsApplicationIdUsersUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['users'][':user-id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/users/:user-id', keyArgs] as const
}

export function getV1AppsApplicationIdUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['users'][':user-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].users[':user-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['users'][':user-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['users'][':user-id']['$get']>
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
                    (typeof client.v1.apps)[':application-id']['users'][':user-id']['$get']
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
                    (typeof client.v1.apps)[':application-id']['users'][':user-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdUsersUserIdQueryKey>
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
            ReturnType<(typeof client.v1.apps)[':application-id']['users'][':user-id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].users[':user-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1AppsApplicationIdUsersUserIdMutationKey() {
  return ['v1', '/v1/apps/:application-id/users/:user-id', 'DELETE'] as const
}

export function getDeleteV1AppsApplicationIdUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apps)[':application-id']['users'][':user-id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['users'][':user-id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppsApplicationIdUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['users'][':user-id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.apps[':application-id'].users[':user-id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1AppsApplicationIdUsersUserId<
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
                    (typeof client.v1.apps)[':application-id']['users'][':user-id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apps)[':application-id']['users'][':user-id']['$delete']
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
  const mutationDefaults = getDeleteV1AppsApplicationIdUsersUserIdMutationOptions<
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

export function getV1AppsApplicationIdChannelsVoiceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['voice']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/channels/voice', keyArgs] as const
}

export function getV1AppsApplicationIdChannelsVoiceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['voice']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdChannelsVoiceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].channels.voice.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdChannelsVoice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['channels']['voice']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['voice']['$get']>
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
                    (typeof client.v1.apps)[':application-id']['channels']['voice']['$get']
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
                    (typeof client.v1.apps)[':application-id']['channels']['voice']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdChannelsVoiceQueryKey>
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
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['voice']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdChannelsVoiceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdChannelsVoiceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].channels.voice.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1AppsApplicationIdChannelsVoiceMutationKey() {
  return ['v1', '/v1/apps/:application-id/channels/voice', 'PUT'] as const
}

export function getPutV1AppsApplicationIdChannelsVoiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['voice']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['voice']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AppsApplicationIdChannelsVoiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['channels']['voice']['$put']
      >,
    ) {
      return parseResponse(client.v1.apps[':application-id'].channels.voice.$put(args, options))
    },
  })
}

export function usePutV1AppsApplicationIdChannelsVoice<
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
                    (typeof client.v1.apps)[':application-id']['channels']['voice']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['voice']['$put']>,
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
  const mutationDefaults = getPutV1AppsApplicationIdChannelsVoiceMutationOptions<
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

export function getDeleteV1AppsApplicationIdChannelsVoiceMutationKey() {
  return ['v1', '/v1/apps/:application-id/channels/voice', 'DELETE'] as const
}

export function getDeleteV1AppsApplicationIdChannelsVoiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['voice']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['voice']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppsApplicationIdChannelsVoiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['channels']['voice']['$delete']
      >,
    ) {
      return parseResponse(client.v1.apps[':application-id'].channels.voice.$delete(args, options))
    },
  })
}

export function useDeleteV1AppsApplicationIdChannelsVoice<
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
                    (typeof client.v1.apps)[':application-id']['channels']['voice']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apps)[':application-id']['channels']['voice']['$delete']
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
  const mutationDefaults = getDeleteV1AppsApplicationIdChannelsVoiceMutationOptions<
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

export function getV1AppsApplicationIdKpisDaterangeKpiNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['kpis']['daterange'][':kpi-name']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/kpis/daterange/:kpi-name', keyArgs] as const
}

export function getV1AppsApplicationIdKpisDaterangeKpiNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['kpis']['daterange'][':kpi-name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdKpisDaterangeKpiNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].kpis.daterange[':kpi-name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdKpisDaterangeKpiName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.apps)[':application-id']['kpis']['daterange'][':kpi-name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['kpis']['daterange'][':kpi-name']['$get']
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
                    (typeof client.v1.apps)[':application-id']['kpis']['daterange'][':kpi-name']['$get']
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
                    (typeof client.v1.apps)[':application-id']['kpis']['daterange'][':kpi-name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdKpisDaterangeKpiNameQueryKey>
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
              (typeof client.v1.apps)[':application-id']['kpis']['daterange'][':kpi-name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdKpisDaterangeKpiNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdKpisDaterangeKpiNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].kpis.daterange[':kpi-name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsApplicationIdSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['settings']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/settings', keyArgs] as const
}

export function getV1AppsApplicationIdSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['settings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['settings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1AppsApplicationIdSettingsMutationKey() {
  return ['v1', '/v1/apps/:application-id/settings', 'PUT'] as const
}

export function getPutV1AppsApplicationIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['settings']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AppsApplicationIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apps)[':application-id']['settings']['$put']>,
    ) {
      return parseResponse(client.v1.apps[':application-id'].settings.$put(args, options))
    },
  })
}

export function usePutV1AppsApplicationIdSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['settings']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apps)[':application-id']['settings']['$put']>,
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
  const mutationDefaults = getPutV1AppsApplicationIdSettingsMutationOptions<
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

export function getV1AppsApplicationIdCampaignsCampaignIdActivitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['activities']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/campaigns/:campaign-id/activities', keyArgs] as const
}

export function getV1AppsApplicationIdCampaignsCampaignIdActivitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['activities']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdCampaignsCampaignIdActivitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].campaigns[':campaign-id'].activities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdCampaignsCampaignIdActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['activities']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['activities']['$get']
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
                    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['activities']['$get']
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
                    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['activities']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdCampaignsCampaignIdActivitiesQueryKey>
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
              (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['activities']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdCampaignsCampaignIdActivitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdCampaignsCampaignIdActivitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].campaigns[':campaign-id'].activities.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsApplicationIdCampaignsCampaignIdKpisDaterangeKpiNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['kpis']['daterange'][':kpi-name']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v1',
    '/v1/apps/:application-id/campaigns/:campaign-id/kpis/daterange/:kpi-name',
    keyArgs,
  ] as const
}

export function getV1AppsApplicationIdCampaignsCampaignIdKpisDaterangeKpiNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['kpis']['daterange'][':kpi-name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1AppsApplicationIdCampaignsCampaignIdKpisDaterangeKpiNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].campaigns[':campaign-id'].kpis.daterange[
          ':kpi-name'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1AppsApplicationIdCampaignsCampaignIdKpisDaterangeKpiName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['kpis']['daterange'][':kpi-name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['kpis']['daterange'][':kpi-name']['$get']
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
                    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['kpis']['daterange'][':kpi-name']['$get']
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
                    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['kpis']['daterange'][':kpi-name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdCampaignsCampaignIdKpisDaterangeKpiNameQueryKey>
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
              (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['kpis']['daterange'][':kpi-name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdCampaignsCampaignIdKpisDaterangeKpiNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1AppsApplicationIdCampaignsCampaignIdKpisDaterangeKpiNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].campaigns[':campaign-id'].kpis.daterange[
            ':kpi-name'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsApplicationIdCampaignsCampaignIdVersionsVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions'][':version']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v1',
    '/v1/apps/:application-id/campaigns/:campaign-id/versions/:version',
    keyArgs,
  ] as const
}

export function getV1AppsApplicationIdCampaignsCampaignIdVersionsVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions'][':version']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1AppsApplicationIdCampaignsCampaignIdVersionsVersionQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].campaigns[':campaign-id'].versions[':version'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1AppsApplicationIdCampaignsCampaignIdVersionsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions'][':version']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions'][':version']['$get']
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
                    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions'][':version']['$get']
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
                    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions'][':version']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdCampaignsCampaignIdVersionsVersionQueryKey>
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
              (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions'][':version']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdCampaignsCampaignIdVersionsVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1AppsApplicationIdCampaignsCampaignIdVersionsVersionQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].campaigns[':campaign-id'].versions[':version'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsApplicationIdCampaignsCampaignIdVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/campaigns/:campaign-id/versions', keyArgs] as const
}

export function getV1AppsApplicationIdCampaignsCampaignIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdCampaignsCampaignIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].campaigns[':campaign-id'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdCampaignsCampaignIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions']['$get']
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
                    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions']['$get']
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
                    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdCampaignsCampaignIdVersionsQueryKey>
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
              (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdCampaignsCampaignIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdCampaignsCampaignIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].campaigns[':campaign-id'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsApplicationIdChannelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/channels', keyArgs] as const
}

export function getV1AppsApplicationIdChannelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].channels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['channels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['channels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdChannelsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['channels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsApplicationIdJobsExportJobIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['jobs']['export'][':job-id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/jobs/export/:job-id', keyArgs] as const
}

export function getV1AppsApplicationIdJobsExportJobIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['jobs']['export'][':job-id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdJobsExportJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].jobs.export[':job-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdJobsExportJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.apps)[':application-id']['jobs']['export'][':job-id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['jobs']['export'][':job-id']['$get']
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
                    (typeof client.v1.apps)[':application-id']['jobs']['export'][':job-id']['$get']
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
                    (typeof client.v1.apps)[':application-id']['jobs']['export'][':job-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdJobsExportJobIdQueryKey>
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
              (typeof client.v1.apps)[':application-id']['jobs']['export'][':job-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdJobsExportJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdJobsExportJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].jobs.export[':job-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsApplicationIdJobsImportJobIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['jobs']['import'][':job-id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/jobs/import/:job-id', keyArgs] as const
}

export function getV1AppsApplicationIdJobsImportJobIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['jobs']['import'][':job-id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdJobsImportJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].jobs.import[':job-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdJobsImportJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.apps)[':application-id']['jobs']['import'][':job-id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['jobs']['import'][':job-id']['$get']
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
                    (typeof client.v1.apps)[':application-id']['jobs']['import'][':job-id']['$get']
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
                    (typeof client.v1.apps)[':application-id']['jobs']['import'][':job-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdJobsImportJobIdQueryKey>
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
              (typeof client.v1.apps)[':application-id']['jobs']['import'][':job-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdJobsImportJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdJobsImportJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].jobs.import[':job-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsApplicationIdEndpointsEndpointIdInappmessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['inappmessages']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/endpoints/:endpoint-id/inappmessages', keyArgs] as const
}

export function getV1AppsApplicationIdEndpointsEndpointIdInappmessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['inappmessages']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdEndpointsEndpointIdInappmessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].endpoints[':endpoint-id'].inappmessages.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1AppsApplicationIdEndpointsEndpointIdInappmessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['inappmessages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['inappmessages']['$get']
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
                    (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['inappmessages']['$get']
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
                    (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['inappmessages']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdEndpointsEndpointIdInappmessagesQueryKey>
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
              (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['inappmessages']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdEndpointsEndpointIdInappmessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1AppsApplicationIdEndpointsEndpointIdInappmessagesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].endpoints[':endpoint-id'].inappmessages.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsApplicationIdJourneysJourneyIdKpisDaterangeKpiNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['kpis']['daterange'][':kpi-name']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v1',
    '/v1/apps/:application-id/journeys/:journey-id/kpis/daterange/:kpi-name',
    keyArgs,
  ] as const
}

export function getV1AppsApplicationIdJourneysJourneyIdKpisDaterangeKpiNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['kpis']['daterange'][':kpi-name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1AppsApplicationIdJourneysJourneyIdKpisDaterangeKpiNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].journeys[':journey-id'].kpis.daterange[':kpi-name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1AppsApplicationIdJourneysJourneyIdKpisDaterangeKpiName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['kpis']['daterange'][':kpi-name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['kpis']['daterange'][':kpi-name']['$get']
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
                    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['kpis']['daterange'][':kpi-name']['$get']
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
                    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['kpis']['daterange'][':kpi-name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdJourneysJourneyIdKpisDaterangeKpiNameQueryKey>
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
              (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['kpis']['daterange'][':kpi-name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdJourneysJourneyIdKpisDaterangeKpiNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1AppsApplicationIdJourneysJourneyIdKpisDaterangeKpiNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].journeys[':journey-id'].kpis.daterange[
            ':kpi-name'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsApplicationIdJourneysJourneyIdActivitiesJourneyActivityIdExecutionMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['activities'][':journey-activity-id']['execution-metrics']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v1',
    '/v1/apps/:application-id/journeys/:journey-id/activities/:journey-activity-id/execution-metrics',
    keyArgs,
  ] as const
}

export function getV1AppsApplicationIdJourneysJourneyIdActivitiesJourneyActivityIdExecutionMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['activities'][':journey-activity-id']['execution-metrics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1AppsApplicationIdJourneysJourneyIdActivitiesJourneyActivityIdExecutionMetricsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].journeys[':journey-id'].activities[
          ':journey-activity-id'
        ]['execution-metrics'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdJourneysJourneyIdActivitiesJourneyActivityIdExecutionMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['activities'][':journey-activity-id']['execution-metrics']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['activities'][':journey-activity-id']['execution-metrics']['$get']
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
                    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['activities'][':journey-activity-id']['execution-metrics']['$get']
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
                    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['activities'][':journey-activity-id']['execution-metrics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1AppsApplicationIdJourneysJourneyIdActivitiesJourneyActivityIdExecutionMetricsQueryKey
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
              (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['activities'][':journey-activity-id']['execution-metrics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1AppsApplicationIdJourneysJourneyIdActivitiesJourneyActivityIdExecutionMetricsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1AppsApplicationIdJourneysJourneyIdActivitiesJourneyActivityIdExecutionMetricsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].journeys[':journey-id'].activities[
            ':journey-activity-id'
          ]['execution-metrics'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsApplicationIdJourneysJourneyIdExecutionMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['execution-metrics']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/journeys/:journey-id/execution-metrics', keyArgs] as const
}

export function getV1AppsApplicationIdJourneysJourneyIdExecutionMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['execution-metrics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdJourneysJourneyIdExecutionMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].journeys[':journey-id']['execution-metrics'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1AppsApplicationIdJourneysJourneyIdExecutionMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['execution-metrics']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['execution-metrics']['$get']
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
                    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['execution-metrics']['$get']
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
                    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['execution-metrics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdJourneysJourneyIdExecutionMetricsQueryKey>
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
              (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['execution-metrics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdJourneysJourneyIdExecutionMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1AppsApplicationIdJourneysJourneyIdExecutionMetricsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].journeys[':journey-id']['execution-metrics'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsApplicationIdSegmentsSegmentIdJobsExportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['export']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/segments/:segment-id/jobs/export', keyArgs] as const
}

export function getV1AppsApplicationIdSegmentsSegmentIdJobsExportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['export']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdSegmentsSegmentIdJobsExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].segments[':segment-id'].jobs.export.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdSegmentsSegmentIdJobsExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['export']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['export']['$get']
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
                    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['export']['$get']
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
                    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['export']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdSegmentsSegmentIdJobsExportQueryKey>
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
              (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['export']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdSegmentsSegmentIdJobsExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdSegmentsSegmentIdJobsExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].segments[':segment-id'].jobs.export.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsApplicationIdSegmentsSegmentIdJobsImportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['import']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/segments/:segment-id/jobs/import', keyArgs] as const
}

export function getV1AppsApplicationIdSegmentsSegmentIdJobsImportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['import']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdSegmentsSegmentIdJobsImportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].segments[':segment-id'].jobs.import.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdSegmentsSegmentIdJobsImport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['import']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['import']['$get']
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
                    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['import']['$get']
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
                    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['import']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdSegmentsSegmentIdJobsImportQueryKey>
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
              (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['import']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdSegmentsSegmentIdJobsImportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdSegmentsSegmentIdJobsImportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].segments[':segment-id'].jobs.import.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsApplicationIdSegmentsSegmentIdVersionsVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions'][':version']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/segments/:segment-id/versions/:version', keyArgs] as const
}

export function getV1AppsApplicationIdSegmentsSegmentIdVersionsVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions'][':version']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdSegmentsSegmentIdVersionsVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].segments[':segment-id'].versions[':version'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1AppsApplicationIdSegmentsSegmentIdVersionsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions'][':version']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions'][':version']['$get']
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
                    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions'][':version']['$get']
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
                    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions'][':version']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdSegmentsSegmentIdVersionsVersionQueryKey>
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
              (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions'][':version']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdSegmentsSegmentIdVersionsVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1AppsApplicationIdSegmentsSegmentIdVersionsVersionQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].segments[':segment-id'].versions[':version'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsApplicationIdSegmentsSegmentIdVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apps/:application-id/segments/:segment-id/versions', keyArgs] as const
}

export function getV1AppsApplicationIdSegmentsSegmentIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsApplicationIdSegmentsSegmentIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':application-id'].segments[':segment-id'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsApplicationIdSegmentsSegmentIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions']['$get']
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
                    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions']['$get']
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
                    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsApplicationIdSegmentsSegmentIdVersionsQueryKey>
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
              (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsApplicationIdSegmentsSegmentIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsApplicationIdSegmentsSegmentIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':application-id'].segments[':segment-id'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tags)[':resource-arn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/tags/:resource-arn', keyArgs] as const
}

export function getV1TagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tags)[':resource-arn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.tags[':resource-arn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resource-arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tags)[':resource-arn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.tags)[':resource-arn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.tags)[':resource-arn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1TagsResourceArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resource-arn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.tags[':resource-arn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1TagsResourceArnMutationKey() {
  return ['v1', '/v1/tags/:resource-arn', 'POST'] as const
}

export function getPostV1TagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tags)[':resource-arn']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.tags)[':resource-arn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.tags)[':resource-arn']['$post']>) {
      return parseResponse(client.v1.tags[':resource-arn'].$post(args, options))
    },
  })
}

export function usePostV1TagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.tags)[':resource-arn']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.tags)[':resource-arn']['$post']>,
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
  const mutationDefaults = getPostV1TagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getV1TemplatesTemplateNameTemplateTypeVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.templates)[':template-name'][':template-type']['versions']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/templates/:template-name/:template-type/versions', keyArgs] as const
}

export function getV1TemplatesTemplateNameTemplateTypeVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.templates)[':template-name'][':template-type']['versions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TemplatesTemplateNameTemplateTypeVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.templates[':template-name'][':template-type'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TemplatesTemplateNameTemplateTypeVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.templates)[':template-name'][':template-type']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.templates)[':template-name'][':template-type']['versions']['$get']
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
                    (typeof client.v1.templates)[':template-name'][':template-type']['versions']['$get']
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
                    (typeof client.v1.templates)[':template-name'][':template-type']['versions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1TemplatesTemplateNameTemplateTypeVersionsQueryKey>
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
              (typeof client.v1.templates)[':template-name'][':template-type']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TemplatesTemplateNameTemplateTypeVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TemplatesTemplateNameTemplateTypeVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.templates[':template-name'][':template-type'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.templates.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/templates', keyArgs] as const
}

export function getV1TemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.templates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.templates.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Templates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.templates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.$get>>>>
          >,
          ReturnType<typeof getV1TemplatesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1TemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PhoneNumberValidateMutationKey() {
  return ['v1', '/v1/phone/number/validate', 'POST'] as const
}

export function getPostV1PhoneNumberValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.phone.number.validate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.phone.number.validate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PhoneNumberValidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.phone.number.validate.$post>) {
      return parseResponse(client.v1.phone.number.validate.$post(args, options))
    },
  })
}

export function usePostV1PhoneNumberValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.phone.number.validate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.phone.number.validate.$post>,
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
  const mutationDefaults = getPostV1PhoneNumberValidateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1AppsApplicationIdEventsMutationKey() {
  return ['v1', '/v1/apps/:application-id/events', 'POST'] as const
}

export function getPostV1AppsApplicationIdEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['events']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['events']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppsApplicationIdEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apps)[':application-id']['events']['$post']>,
    ) {
      return parseResponse(client.v1.apps[':application-id'].events.$post(args, options))
    },
  })
}

export function usePostV1AppsApplicationIdEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['events']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apps)[':application-id']['events']['$post']>,
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
  const mutationDefaults = getPostV1AppsApplicationIdEventsMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1AppsApplicationIdAttributesAttributeTypeMutationKey() {
  return ['v1', '/v1/apps/:application-id/attributes/:attribute-type', 'PUT'] as const
}

export function getPutV1AppsApplicationIdAttributesAttributeTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['attributes'][':attribute-type']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['attributes'][':attribute-type']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1AppsApplicationIdAttributesAttributeTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['attributes'][':attribute-type']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.apps[':application-id'].attributes[':attribute-type'].$put(args, options),
      )
    },
  })
}

export function usePutV1AppsApplicationIdAttributesAttributeType<
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
                    (typeof client.v1.apps)[':application-id']['attributes'][':attribute-type']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apps)[':application-id']['attributes'][':attribute-type']['$put']
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
  const mutationDefaults = getPutV1AppsApplicationIdAttributesAttributeTypeMutationOptions<
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

export function getPostV1AppsApplicationIdMessagesMutationKey() {
  return ['v1', '/v1/apps/:application-id/messages', 'POST'] as const
}

export function getPostV1AppsApplicationIdMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['messages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppsApplicationIdMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apps)[':application-id']['messages']['$post']>,
    ) {
      return parseResponse(client.v1.apps[':application-id'].messages.$post(args, options))
    },
  })
}

export function usePostV1AppsApplicationIdMessages<
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
                Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['messages']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apps)[':application-id']['messages']['$post']>,
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
  const mutationDefaults = getPostV1AppsApplicationIdMessagesMutationOptions<
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

export function getPostV1AppsApplicationIdOtpMutationKey() {
  return ['v1', '/v1/apps/:application-id/otp', 'POST'] as const
}

export function getPostV1AppsApplicationIdOtpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['otp']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['otp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppsApplicationIdOtpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apps)[':application-id']['otp']['$post']>,
    ) {
      return parseResponse(client.v1.apps[':application-id'].otp.$post(args, options))
    },
  })
}

export function usePostV1AppsApplicationIdOtp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['otp']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apps)[':application-id']['otp']['$post']>,
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
  const mutationDefaults = getPostV1AppsApplicationIdOtpMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1AppsApplicationIdUsersMessagesMutationKey() {
  return ['v1', '/v1/apps/:application-id/users-messages', 'POST'] as const
}

export function getPostV1AppsApplicationIdUsersMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['users-messages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['users-messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppsApplicationIdUsersMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apps)[':application-id']['users-messages']['$post']>,
    ) {
      return parseResponse(client.v1.apps[':application-id']['users-messages'].$post(args, options))
    },
  })
}

export function usePostV1AppsApplicationIdUsersMessages<
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
                  ReturnType<(typeof client.v1.apps)[':application-id']['users-messages']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apps)[':application-id']['users-messages']['$post']>,
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
  const mutationDefaults = getPostV1AppsApplicationIdUsersMessagesMutationOptions<
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

export function getDeleteV1TagsResourceArnTagKeysMutationKey() {
  return ['v1', '/v1/tags/:resource-arn#tagKeys', 'DELETE'] as const
}

export function getDeleteV1TagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tags)[':resource-arn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.tags)[':resource-arn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.tags)[':resource-arn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.v1.tags[':resource-arn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteV1TagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.tags)[':resource-arn#tagKeys']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.tags)[':resource-arn#tagKeys']['$delete']>,
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
  const mutationDefaults = getDeleteV1TagsResourceArnTagKeysMutationOptions<
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

export function getPutV1AppsApplicationIdEndpointsMutationKey() {
  return ['v1', '/v1/apps/:application-id/endpoints', 'PUT'] as const
}

export function getPutV1AppsApplicationIdEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['endpoints']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['endpoints']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AppsApplicationIdEndpointsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apps)[':application-id']['endpoints']['$put']>,
    ) {
      return parseResponse(client.v1.apps[':application-id'].endpoints.$put(args, options))
    },
  })
}

export function usePutV1AppsApplicationIdEndpoints<
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
                Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['endpoints']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apps)[':application-id']['endpoints']['$put']>,
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
  const mutationDefaults = getPutV1AppsApplicationIdEndpointsMutationOptions<
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

export function getPutV1AppsApplicationIdJourneysJourneyIdStateMutationKey() {
  return ['v1', '/v1/apps/:application-id/journeys/:journey-id/state', 'PUT'] as const
}

export function getPutV1AppsApplicationIdJourneysJourneyIdStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['state']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['state']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1AppsApplicationIdJourneysJourneyIdStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['state']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.apps[':application-id'].journeys[':journey-id'].state.$put(args, options),
      )
    },
  })
}

export function usePutV1AppsApplicationIdJourneysJourneyIdState<
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
                    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['state']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['state']['$put']
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
  const mutationDefaults = getPutV1AppsApplicationIdJourneysJourneyIdStateMutationOptions<
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

export function getPutV1TemplatesTemplateNameTemplateTypeActiveVersionMutationKey() {
  return ['v1', '/v1/templates/:template-name/:template-type/active-version', 'PUT'] as const
}

export function getPutV1TemplatesTemplateNameTemplateTypeActiveVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.templates)[':template-name'][':template-type']['active-version']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.templates)[':template-name'][':template-type']['active-version']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1TemplatesTemplateNameTemplateTypeActiveVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.templates)[':template-name'][':template-type']['active-version']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.templates[':template-name'][':template-type']['active-version'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV1TemplatesTemplateNameTemplateTypeActiveVersion<
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
                    (typeof client.v1.templates)[':template-name'][':template-type']['active-version']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.templates)[':template-name'][':template-type']['active-version']['$put']
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
  const mutationDefaults = getPutV1TemplatesTemplateNameTemplateTypeActiveVersionMutationOptions<
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

export function getPostV1AppsApplicationIdVerifyOtpMutationKey() {
  return ['v1', '/v1/apps/:application-id/verify-otp', 'POST'] as const
}

export function getPostV1AppsApplicationIdVerifyOtpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['verify-otp']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':application-id']['verify-otp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppsApplicationIdVerifyOtpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apps)[':application-id']['verify-otp']['$post']>,
    ) {
      return parseResponse(client.v1.apps[':application-id']['verify-otp'].$post(args, options))
    },
  })
}

export function usePostV1AppsApplicationIdVerifyOtp<
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
                  ReturnType<(typeof client.v1.apps)[':application-id']['verify-otp']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apps)[':application-id']['verify-otp']['$post']>,
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
  const mutationDefaults = getPostV1AppsApplicationIdVerifyOtpMutationOptions<
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
