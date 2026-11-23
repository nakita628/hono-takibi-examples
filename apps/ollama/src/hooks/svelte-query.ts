import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function createPostV1Systemone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.systemone.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.systemone.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SystemoneMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiGenerate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.generate.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.generate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiGenerateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiChat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.chat.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.chat.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiChatMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiEmbed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.embed.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.embed.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiEmbedMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTagsQueryKey() {
  return ['api', '/api/tags'] as const
}

export function getApiTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTagsQueryKey>
  >({
    queryKey: getApiTagsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tags.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTagsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiPsQueryKey() {
  return ['api', '/api/ps'] as const
}

export function getApiPsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ps.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPsQueryKey>
  >({
    queryKey: getApiPsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.ps.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiPs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ps.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ps.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiPsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiShow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.show.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.show.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiShowMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.create.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiCreateMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiBlobsDigest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.blobs)[':digest']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.blobs)[':digest']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiBlobsDigestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createHeadApiBlobsDigest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.blobs)[':digest']['$head']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.blobs)[':digest']['$head']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadApiBlobsDigestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiCopy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.copy.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.copy.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiCopyMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiPull<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pull.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.pull.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPullMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiPush<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.push.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.push.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPushMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.delete.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.api.delete.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiVersionQueryKey() {
  return ['api', '/api/version'] as const
}

export function getApiVersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiVersionQueryKey>
  >({
    queryKey: getApiVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.version.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiVersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiUsageQueryKey(args: InferRequestType<typeof client.api.usage.$get>) {
  return ['api', '/api/usage', args] as const
}

export function getApiUsageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.usage.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.usage.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.usage.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiUsageQueryKey>
  >({
    queryKey: getApiUsageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.usage.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiUsage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.usage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.usage.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.usage.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUsageQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiBalanceQueryKey() {
  return ['api', '/api/balance'] as const
}

export function getApiBalanceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.balance.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.balance.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiBalanceQueryKey>
  >({
    queryKey: getApiBalanceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.balance.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiBalance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.balance.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.balance.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiBalanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiBalanceQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
