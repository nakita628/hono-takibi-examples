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

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1SystemoneMutationKey() {
  return ['v1', '/v1/systemone', 'POST'] as const
}

export function getPostV1SystemoneMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.systemone.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.systemone.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SystemoneMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.systemone.$post>) {
      return parseResponse(client.v1.systemone.$post(args, options))
    },
  })
}

export function usePostV1Systemone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.systemone.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.systemone.$post>,
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
  const mutationDefaults = getPostV1SystemoneMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiGenerateMutationKey() {
  return ['api', '/api/generate', 'POST'] as const
}

export function getPostApiGenerateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.generate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.generate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiGenerateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.generate.$post>) {
      return parseResponse(client.api.generate.$post(args, options))
    },
  })
}

export function usePostApiGenerate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.generate.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.generate.$post>,
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
  const mutationDefaults = getPostApiGenerateMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiChatMutationKey() {
  return ['api', '/api/chat', 'POST'] as const
}

export function getPostApiChatMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.chat.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.chat.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiChatMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.chat.$post>) {
      return parseResponse(client.api.chat.$post(args, options))
    },
  })
}

export function usePostApiChat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.chat.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.chat.$post>,
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
  const mutationDefaults = getPostApiChatMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiEmbedMutationKey() {
  return ['api', '/api/embed', 'POST'] as const
}

export function getPostApiEmbedMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.embed.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.embed.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEmbedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.embed.$post>) {
      return parseResponse(client.api.embed.$post(args, options))
    },
  })
}

export function usePostApiEmbed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.embed.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.embed.$post>,
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
  const mutationDefaults = getPostApiEmbedMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTagsQueryKey() {
  return ['api', '/api/tags'] as const
}

export function getApiTagsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiTagsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tags.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>
          >,
          ReturnType<typeof getApiTagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiTagsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tags.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPsQueryKey() {
  return ['api', '/api/ps'] as const
}

export function getApiPsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.ps.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiPs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ps.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ps.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ps.$get>>>>>,
          ReturnType<typeof getApiPsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.ps.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiShowMutationKey() {
  return ['api', '/api/show', 'POST'] as const
}

export function getPostApiShowMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.show.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.show.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiShowMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.show.$post>) {
      return parseResponse(client.api.show.$post(args, options))
    },
  })
}

export function usePostApiShow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.show.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.show.$post>,
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
  const mutationDefaults = getPostApiShowMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiCreateMutationKey() {
  return ['api', '/api/create', 'POST'] as const
}

export function getPostApiCreateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.create.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.create.$post>) {
      return parseResponse(client.api.create.$post(args, options))
    },
  })
}

export function usePostApiCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.create.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.create.$post>,
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
  const mutationDefaults = getPostApiCreateMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiBlobsDigestMutationKey() {
  return ['api', '/api/blobs/:digest', 'POST'] as const
}

export function getPostApiBlobsDigestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.blobs)[':digest']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.blobs)[':digest']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBlobsDigestMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.blobs)[':digest']['$post']>) {
      return parseResponse(client.api.blobs[':digest'].$post(args, options))
    },
  })
}

export function usePostApiBlobsDigest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.blobs)[':digest']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.blobs)[':digest']['$post']>,
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
  const mutationDefaults = getPostApiBlobsDigestMutationOptions<TError, TOnMutateResult>(
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

export function getHeadApiBlobsDigestMutationKey() {
  return ['api', '/api/blobs/:digest', 'HEAD'] as const
}

export function getHeadApiBlobsDigestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.blobs)[':digest']['$head']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.blobs)[':digest']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadApiBlobsDigestMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.blobs)[':digest']['$head']>) {
      return parseResponse(client.api.blobs[':digest'].$head(args, options))
    },
  })
}

export function useHeadApiBlobsDigest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.blobs)[':digest']['$head']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.blobs)[':digest']['$head']>,
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
  const mutationDefaults = getHeadApiBlobsDigestMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiCopyMutationKey() {
  return ['api', '/api/copy', 'POST'] as const
}

export function getPostApiCopyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.copy.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.copy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCopyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.copy.$post>) {
      return parseResponse(client.api.copy.$post(args, options))
    },
  })
}

export function usePostApiCopy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.copy.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.copy.$post>,
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
  const mutationDefaults = getPostApiCopyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiPullMutationKey() {
  return ['api', '/api/pull', 'POST'] as const
}

export function getPostApiPullMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pull.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.pull.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPullMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.pull.$post>) {
      return parseResponse(client.api.pull.$post(args, options))
    },
  })
}

export function usePostApiPull<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pull.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.pull.$post>,
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
  const mutationDefaults = getPostApiPullMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiPushMutationKey() {
  return ['api', '/api/push', 'POST'] as const
}

export function getPostApiPushMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.push.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.push.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPushMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.push.$post>) {
      return parseResponse(client.api.push.$post(args, options))
    },
  })
}

export function usePostApiPush<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.push.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.push.$post>,
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
  const mutationDefaults = getPostApiPushMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiDeleteMutationKey() {
  return ['api', '/api/delete', 'DELETE'] as const
}

export function getDeleteApiDeleteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.delete.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.api.delete.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.delete.$delete>) {
      return parseResponse(client.api.delete.$delete(args, options))
    },
  })
}

export function useDeleteApiDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.delete.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.api.delete.$delete>,
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
  const mutationDefaults = getDeleteApiDeleteMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiVersionQueryKey() {
  return ['api', '/api/version'] as const
}

export function getApiVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.version.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.version.$get>>>>
          >,
          ReturnType<typeof getApiVersionQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.usage.$get>>,
) {
  return ['api', '/api/usage', toValue(args)] as const
}

export function getApiUsageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.usage.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.usage.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiUsage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.usage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.usage.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.usage.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.usage.$get>>>>
          >,
          ReturnType<typeof getApiUsageQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.usage.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiUsageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.usage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiBalanceQueryKey() {
  return ['api', '/api/balance'] as const
}

export function getApiBalanceQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiBalanceQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.balance.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiBalance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.balance.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.balance.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.balance.$get>>>>
          >,
          ReturnType<typeof getApiBalanceQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.balance.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiBalanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiBalanceQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.balance.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
