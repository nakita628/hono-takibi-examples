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

export function getPostApiAiTranscribeMutationKey() {
  return ['api', '/api/ai:transcribe', 'POST'] as const
}

export function getPostApiAiTranscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['ai:transcribe']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['ai:transcribe']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAiTranscribeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['ai:transcribe']['$post']>) {
      return parseResponse(client.api['ai:transcribe'].$post(args, options))
    },
  })
}

export function usePostApiAiTranscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['ai:transcribe']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['ai:transcribe']['$post']>,
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
  const mutationDefaults = getPostApiAiTranscribeMutationOptions<TError, TOnMutateResult>(
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

export function getApiAttachmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.attachments.$get>>,
) {
  return ['api', '/api/attachments', toValue(args)] as const
}

export function getApiAttachmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.attachments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAttachments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.attachments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.attachments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.attachments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.attachments.$get>>>
            >
          >,
          ReturnType<typeof getApiAttachmentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.attachments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiAttachmentsMutationKey() {
  return ['api', '/api/attachments', 'POST'] as const
}

export function getPostApiAttachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.attachments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.attachments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAttachmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.attachments.$post>) {
      return parseResponse(client.api.attachments.$post(args, options))
    },
  })
}

export function usePostApiAttachments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.attachments.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.attachments.$post>,
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
  const mutationDefaults = getPostApiAttachmentsMutationOptions<TError, TOnMutateResult>(
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

export function getApiAttachmentsAttachmentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.attachments)[':attachment']['$get']>>,
) {
  return ['api', '/api/attachments/:attachment', toValue(args)] as const
}

export function getApiAttachmentsAttachmentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.attachments)[':attachment']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAttachmentsAttachmentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.attachments[':attachment'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAttachmentsAttachment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.attachments)[':attachment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.attachments)[':attachment']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.attachments)[':attachment']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.attachments)[':attachment']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAttachmentsAttachmentQueryKey>
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
          Awaited<ReturnType<(typeof client.api.attachments)[':attachment']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAttachmentsAttachmentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAttachmentsAttachmentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.attachments[':attachment'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiAttachmentsAttachmentMutationKey() {
  return ['api', '/api/attachments/:attachment', 'DELETE'] as const
}

export function getDeleteApiAttachmentsAttachmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.attachments)[':attachment']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.attachments)[':attachment']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAttachmentsAttachmentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.attachments)[':attachment']['$delete']>,
    ) {
      return parseResponse(client.api.attachments[':attachment'].$delete(args, options))
    },
  })
}

export function useDeleteApiAttachmentsAttachment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.attachments)[':attachment']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.attachments)[':attachment']['$delete']>,
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
  const mutationDefaults = getDeleteApiAttachmentsAttachmentMutationOptions<
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

export function getPatchApiAttachmentsAttachmentMutationKey() {
  return ['api', '/api/attachments/:attachment', 'PATCH'] as const
}

export function getPatchApiAttachmentsAttachmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.attachments)[':attachment']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.attachments)[':attachment']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiAttachmentsAttachmentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.attachments)[':attachment']['$patch']>,
    ) {
      return parseResponse(client.api.attachments[':attachment'].$patch(args, options))
    },
  })
}

export function usePatchApiAttachmentsAttachment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.attachments)[':attachment']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.attachments)[':attachment']['$patch']>,
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
  const mutationDefaults = getPatchApiAttachmentsAttachmentMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiAttachmentsBatchDeleteMutationKey() {
  return ['api', '/api/attachments:batchDelete', 'POST'] as const
}

export function getPostApiAttachmentsBatchDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['attachments:batchDelete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['attachments:batchDelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAttachmentsBatchDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['attachments:batchDelete']['$post']>,
    ) {
      return parseResponse(client.api['attachments:batchDelete'].$post(args, options))
    },
  })
}

export function usePostApiAttachmentsBatchDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['attachments:batchDelete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['attachments:batchDelete']['$post']>,
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
  const mutationDefaults = getPostApiAttachmentsBatchDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiAttachmentsUploadMutationKey() {
  return ['api', '/api/attachments:upload', 'POST'] as const
}

export function getPostApiAttachmentsUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['attachments:upload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['attachments:upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAttachmentsUploadMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['attachments:upload']['$post']>) {
      return parseResponse(client.api['attachments:upload'].$post(args, options))
    },
  })
}

export function usePostApiAttachmentsUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['attachments:upload']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['attachments:upload']['$post']>,
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
  const mutationDefaults = getPostApiAttachmentsUploadMutationOptions<TError, TOnMutateResult>(
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

export function getApiAuthMeQueryKey() {
  return ['api', '/api/auth/me'] as const
}

export function getApiAuthMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiAuthMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.auth.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiAuthMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.me.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.me.$get>>>>
          >,
          ReturnType<typeof getApiAuthMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiAuthMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiAuthMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.auth.me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiAuthRefreshMutationKey() {
  return ['api', '/api/auth/refresh', 'POST'] as const
}

export function getPostApiAuthRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.refresh.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.auth.refresh.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAuthRefreshMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.auth.refresh.$post>) {
      return parseResponse(client.api.auth.refresh.$post(args, options))
    },
  })
}

export function usePostApiAuthRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.refresh.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.auth.refresh.$post>,
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
  const mutationDefaults = getPostApiAuthRefreshMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiAuthSigninMutationKey() {
  return ['api', '/api/auth/signin', 'POST'] as const
}

export function getPostApiAuthSigninMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.signin.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.auth.signin.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAuthSigninMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.auth.signin.$post>) {
      return parseResponse(client.api.auth.signin.$post(args, options))
    },
  })
}

export function usePostApiAuthSignin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.signin.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.auth.signin.$post>,
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
  const mutationDefaults = getPostApiAuthSigninMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiAuthSignoutMutationKey() {
  return ['api', '/api/auth/signout', 'POST'] as const
}

export function getPostApiAuthSignoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.signout.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiAuthSignoutMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.auth.signout.$post(undefined, options))
    },
  })
}

export function usePostApiAuthSignout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.signout.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostApiAuthSignoutMutationOptions<TError, TOnMutateResult>(
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

export function getApiIdentityProvidersQueryKey() {
  return ['api', '/api/identity-providers'] as const
}

export function getApiIdentityProvidersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiIdentityProvidersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['identity-providers'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiIdentityProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['identity-providers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['identity-providers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['identity-providers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiIdentityProvidersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['identity-providers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiIdentityProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiIdentityProvidersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api['identity-providers'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiIdentityProvidersMutationKey() {
  return ['api', '/api/identity-providers', 'POST'] as const
}

export function getPostApiIdentityProvidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['identity-providers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['identity-providers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiIdentityProvidersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['identity-providers']['$post']>) {
      return parseResponse(client.api['identity-providers'].$post(args, options))
    },
  })
}

export function usePostApiIdentityProviders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['identity-providers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['identity-providers']['$post']>,
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
  const mutationDefaults = getPostApiIdentityProvidersMutationOptions<TError, TOnMutateResult>(
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

export function getApiIdentityProvidersIdentityProviderQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['identity-providers'][':identity-provider']['$get']>
  >,
) {
  return ['api', '/api/identity-providers/:identity-provider', toValue(args)] as const
}

export function getApiIdentityProvidersIdentityProviderQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['identity-providers'][':identity-provider']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiIdentityProvidersIdentityProviderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['identity-providers'][':identity-provider'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiIdentityProvidersIdentityProvider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['identity-providers'][':identity-provider']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['identity-providers'][':identity-provider']['$get']>
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
                    (typeof client.api)['identity-providers'][':identity-provider']['$get']
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
                    (typeof client.api)['identity-providers'][':identity-provider']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiIdentityProvidersIdentityProviderQueryKey>
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
            ReturnType<(typeof client.api)['identity-providers'][':identity-provider']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiIdentityProvidersIdentityProviderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiIdentityProvidersIdentityProviderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['identity-providers'][':identity-provider'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiIdentityProvidersIdentityProviderMutationKey() {
  return ['api', '/api/identity-providers/:identity-provider', 'DELETE'] as const
}

export function getDeleteApiIdentityProvidersIdentityProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['identity-providers'][':identity-provider']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['identity-providers'][':identity-provider']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiIdentityProvidersIdentityProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['identity-providers'][':identity-provider']['$delete']
      >,
    ) {
      return parseResponse(
        client.api['identity-providers'][':identity-provider'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiIdentityProvidersIdentityProvider<
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
                    (typeof client.api)['identity-providers'][':identity-provider']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api)['identity-providers'][':identity-provider']['$delete']
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
  const mutationDefaults = getDeleteApiIdentityProvidersIdentityProviderMutationOptions<
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

export function getPatchApiIdentityProvidersIdentityProviderMutationKey() {
  return ['api', '/api/identity-providers/:identity-provider', 'PATCH'] as const
}

export function getPatchApiIdentityProvidersIdentityProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['identity-providers'][':identity-provider']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['identity-providers'][':identity-provider']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiIdentityProvidersIdentityProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['identity-providers'][':identity-provider']['$patch']
      >,
    ) {
      return parseResponse(
        client.api['identity-providers'][':identity-provider'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiIdentityProvidersIdentityProvider<
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
                    (typeof client.api)['identity-providers'][':identity-provider']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api)['identity-providers'][':identity-provider']['$patch']
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
  const mutationDefaults = getPatchApiIdentityProvidersIdentityProviderMutationOptions<
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

export function getApiInstanceConfigurationQueryKey() {
  return ['api', '/api/instance/configuration'] as const
}

export function getApiInstanceConfigurationQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiInstanceConfigurationQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.instance.configuration.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiInstanceConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.instance.configuration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.instance.configuration.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.instance.configuration.$get>>
              >
            >
          >,
          ReturnType<typeof getApiInstanceConfigurationQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.instance.configuration.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInstanceConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiInstanceConfigurationQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.instance.configuration.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiInstanceProfileQueryKey() {
  return ['api', '/api/instance/profile'] as const
}

export function getApiInstanceProfileQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiInstanceProfileQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.instance.profile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiInstanceProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.instance.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.instance.profile.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.instance.profile.$get>>>
            >
          >,
          ReturnType<typeof getApiInstanceProfileQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.instance.profile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiInstanceProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiInstanceProfileQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.instance.profile.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiInstanceSettingsNotificationTestEmailMutationKey() {
  return ['api', '/api/instance/settings/notification:testEmail', 'POST'] as const
}

export function getPostApiInstanceSettingsNotificationTestEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.instance.settings)['notification:testEmail']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.instance.settings)['notification:testEmail']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInstanceSettingsNotificationTestEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.instance.settings)['notification:testEmail']['$post']
      >,
    ) {
      return parseResponse(
        client.api.instance.settings['notification:testEmail'].$post(args, options),
      )
    },
  })
}

export function usePostApiInstanceSettingsNotificationTestEmail<
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
                    (typeof client.api.instance.settings)['notification:testEmail']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.instance.settings)['notification:testEmail']['$post']
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
  const mutationDefaults = getPostApiInstanceSettingsNotificationTestEmailMutationOptions<
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

export function getPostApiInstanceSettingsBatchGetMutationKey() {
  return ['api', '/api/instance/settings:batchGet', 'POST'] as const
}

export function getPostApiInstanceSettingsBatchGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.instance)['settings:batchGet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.instance)['settings:batchGet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInstanceSettingsBatchGetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.instance)['settings:batchGet']['$post']>,
    ) {
      return parseResponse(client.api.instance['settings:batchGet'].$post(args, options))
    },
  })
}

export function usePostApiInstanceSettingsBatchGet<
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
                Awaited<ReturnType<(typeof client.api.instance)['settings:batchGet']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.instance)['settings:batchGet']['$post']>,
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
  const mutationDefaults = getPostApiInstanceSettingsBatchGetMutationOptions<
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

export function getApiInstanceStatsQueryKey() {
  return ['api', '/api/instance/stats'] as const
}

export function getApiInstanceStatsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiInstanceStatsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.instance.stats.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiInstanceStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.instance.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.instance.stats.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.instance.stats.$get>>>
            >
          >,
          ReturnType<typeof getApiInstanceStatsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.instance.stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiInstanceStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiInstanceStatsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.instance.stats.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiInstanceInstanceStarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.instance)[':instance']['*']['$get']>>,
) {
  return ['api', '/api/instance/:instance/*', toValue(args)] as const
}

export function getApiInstanceInstanceStarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.instance)[':instance']['*']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiInstanceInstanceStarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.instance[':instance']['*'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiInstanceInstanceStar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.instance)[':instance']['*']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.instance)[':instance']['*']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.instance)[':instance']['*']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.instance)[':instance']['*']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiInstanceInstanceStarQueryKey>
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
          Awaited<ReturnType<(typeof client.api.instance)[':instance']['*']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInstanceInstanceStarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiInstanceInstanceStarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.instance[':instance']['*'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiInstanceInstanceStarMutationKey() {
  return ['api', '/api/instance/:instance/*', 'PATCH'] as const
}

export function getPatchApiInstanceInstanceStarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.instance)[':instance']['*']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.instance)[':instance']['*']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiInstanceInstanceStarMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.instance)[':instance']['*']['$patch']>,
    ) {
      return parseResponse(client.api.instance[':instance']['*'].$patch(args, options))
    },
  })
}

export function usePatchApiInstanceInstanceStar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.instance)[':instance']['*']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.instance)[':instance']['*']['$patch']>,
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
  const mutationDefaults = getPatchApiInstanceInstanceStarMutationOptions<TError, TOnMutateResult>(
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

export function getApiMemosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.memos.$get>>,
) {
  return ['api', '/api/memos', toValue(args)] as const
}

export function getApiMemosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.memos.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMemosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.memos.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiMemos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.memos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.memos.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.memos.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.memos.$get>>>>
          >,
          ReturnType<typeof getApiMemosQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.memos.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiMemosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMemosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.memos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiMemosMutationKey() {
  return ['api', '/api/memos', 'POST'] as const
}

export function getPostApiMemosMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.memos.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.memos.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiMemosMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.memos.$post>) {
      return parseResponse(client.api.memos.$post(args, options))
    },
  })
}

export function usePostApiMemos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.memos.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.memos.$post>,
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
  const mutationDefaults = getPostApiMemosMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiMemosDashLinkMetadataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.memos)['-']['linkMetadata']['$get']>>,
) {
  return ['api', '/api/memos/-/linkMetadata', toValue(args)] as const
}

export function getApiMemosDashLinkMetadataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.memos)['-']['linkMetadata']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMemosDashLinkMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.memos['-'].linkMetadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMemosDashLinkMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.memos)['-']['linkMetadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.memos)['-']['linkMetadata']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.memos)['-']['linkMetadata']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.memos)['-']['linkMetadata']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMemosDashLinkMetadataQueryKey>
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
          Awaited<ReturnType<(typeof client.api.memos)['-']['linkMetadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMemosDashLinkMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMemosDashLinkMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.memos['-'].linkMetadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiMemosDashLinkMetadataBatchGetMutationKey() {
  return ['api', '/api/memos/-/linkMetadata:batchGet', 'POST'] as const
}

export function getPostApiMemosDashLinkMetadataBatchGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.memos)['-']['linkMetadata:batchGet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.memos)['-']['linkMetadata:batchGet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiMemosDashLinkMetadataBatchGetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.memos)['-']['linkMetadata:batchGet']['$post']>,
    ) {
      return parseResponse(client.api.memos['-']['linkMetadata:batchGet'].$post(args, options))
    },
  })
}

export function usePostApiMemosDashLinkMetadataBatchGet<
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
                  ReturnType<(typeof client.api.memos)['-']['linkMetadata:batchGet']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.memos)['-']['linkMetadata:batchGet']['$post']>,
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
  const mutationDefaults = getPostApiMemosDashLinkMetadataBatchGetMutationOptions<
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

export function getApiMemosMemoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.memos)[':memo']['$get']>>,
) {
  return ['api', '/api/memos/:memo', toValue(args)] as const
}

export function getApiMemosMemoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.memos)[':memo']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMemosMemoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.memos[':memo'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMemosMemo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.memos)[':memo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.memos)[':memo']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.memos)[':memo']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.memos)[':memo']['$get']>>>
            >
          >,
          ReturnType<typeof getApiMemosMemoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.memos)[':memo']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMemosMemoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMemosMemoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.memos[':memo'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiMemosMemoMutationKey() {
  return ['api', '/api/memos/:memo', 'DELETE'] as const
}

export function getDeleteApiMemosMemoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.memos)[':memo']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.memos)[':memo']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiMemosMemoMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.memos)[':memo']['$delete']>) {
      return parseResponse(client.api.memos[':memo'].$delete(args, options))
    },
  })
}

export function useDeleteApiMemosMemo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.memos)[':memo']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.memos)[':memo']['$delete']>,
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
  const mutationDefaults = getDeleteApiMemosMemoMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiMemosMemoMutationKey() {
  return ['api', '/api/memos/:memo', 'PATCH'] as const
}

export function getPatchApiMemosMemoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.memos)[':memo']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.memos)[':memo']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiMemosMemoMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.memos)[':memo']['$patch']>) {
      return parseResponse(client.api.memos[':memo'].$patch(args, options))
    },
  })
}

export function usePatchApiMemosMemo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.memos)[':memo']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.memos)[':memo']['$patch']>,
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
  const mutationDefaults = getPatchApiMemosMemoMutationOptions<TError, TOnMutateResult>(
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

export function getApiMemosMemoAttachmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.memos)[':memo']['attachments']['$get']>
  >,
) {
  return ['api', '/api/memos/:memo/attachments', toValue(args)] as const
}

export function getApiMemosMemoAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.memos)[':memo']['attachments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMemosMemoAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.memos[':memo'].attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMemosMemoAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.memos)[':memo']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.memos)[':memo']['attachments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.memos)[':memo']['attachments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.memos)[':memo']['attachments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMemosMemoAttachmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.memos)[':memo']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMemosMemoAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMemosMemoAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.memos[':memo'].attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiMemosMemoAttachmentsMutationKey() {
  return ['api', '/api/memos/:memo/attachments', 'PATCH'] as const
}

export function getPatchApiMemosMemoAttachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.memos)[':memo']['attachments']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.memos)[':memo']['attachments']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiMemosMemoAttachmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.memos)[':memo']['attachments']['$patch']>,
    ) {
      return parseResponse(client.api.memos[':memo'].attachments.$patch(args, options))
    },
  })
}

export function usePatchApiMemosMemoAttachments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.memos)[':memo']['attachments']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.memos)[':memo']['attachments']['$patch']>,
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
  const mutationDefaults = getPatchApiMemosMemoAttachmentsMutationOptions<TError, TOnMutateResult>(
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

export function getApiMemosMemoReactionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.memos)[':memo']['reactions']['$get']>>,
) {
  return ['api', '/api/memos/:memo/reactions', toValue(args)] as const
}

export function getApiMemosMemoReactionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.memos)[':memo']['reactions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMemosMemoReactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.memos[':memo'].reactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMemosMemoReactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.memos)[':memo']['reactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.memos)[':memo']['reactions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.memos)[':memo']['reactions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.memos)[':memo']['reactions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMemosMemoReactionsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.memos)[':memo']['reactions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMemosMemoReactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMemosMemoReactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.memos[':memo'].reactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiMemosMemoReactionsMutationKey() {
  return ['api', '/api/memos/:memo/reactions', 'POST'] as const
}

export function getPostApiMemosMemoReactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.memos)[':memo']['reactions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.memos)[':memo']['reactions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiMemosMemoReactionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.memos)[':memo']['reactions']['$post']>,
    ) {
      return parseResponse(client.api.memos[':memo'].reactions.$post(args, options))
    },
  })
}

export function usePostApiMemosMemoReactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.memos)[':memo']['reactions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.memos)[':memo']['reactions']['$post']>,
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
  const mutationDefaults = getPostApiMemosMemoReactionsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiMemosMemoReactionsReactionMutationKey() {
  return ['api', '/api/memos/:memo/reactions/:reaction', 'DELETE'] as const
}

export function getDeleteApiMemosMemoReactionsReactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.memos)[':memo']['reactions'][':reaction']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.memos)[':memo']['reactions'][':reaction']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiMemosMemoReactionsReactionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.memos)[':memo']['reactions'][':reaction']['$delete']
      >,
    ) {
      return parseResponse(client.api.memos[':memo'].reactions[':reaction'].$delete(args, options))
    },
  })
}

export function useDeleteApiMemosMemoReactionsReaction<
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
                    (typeof client.api.memos)[':memo']['reactions'][':reaction']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.memos)[':memo']['reactions'][':reaction']['$delete']>,
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
  const mutationDefaults = getDeleteApiMemosMemoReactionsReactionMutationOptions<
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

export function getApiMemosMemoRelationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.memos)[':memo']['relations']['$get']>>,
) {
  return ['api', '/api/memos/:memo/relations', toValue(args)] as const
}

export function getApiMemosMemoRelationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.memos)[':memo']['relations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMemosMemoRelationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.memos[':memo'].relations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMemosMemoRelations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.memos)[':memo']['relations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.memos)[':memo']['relations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.memos)[':memo']['relations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.memos)[':memo']['relations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMemosMemoRelationsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.memos)[':memo']['relations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMemosMemoRelationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMemosMemoRelationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.memos[':memo'].relations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiMemosMemoRelationsMutationKey() {
  return ['api', '/api/memos/:memo/relations', 'PATCH'] as const
}

export function getPatchApiMemosMemoRelationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.memos)[':memo']['relations']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.memos)[':memo']['relations']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiMemosMemoRelationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.memos)[':memo']['relations']['$patch']>,
    ) {
      return parseResponse(client.api.memos[':memo'].relations.$patch(args, options))
    },
  })
}

export function usePatchApiMemosMemoRelations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.memos)[':memo']['relations']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.memos)[':memo']['relations']['$patch']>,
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
  const mutationDefaults = getPatchApiMemosMemoRelationsMutationOptions<TError, TOnMutateResult>(
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

export function getApiMemosMemoSharesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.memos)[':memo']['shares']['$get']>>,
) {
  return ['api', '/api/memos/:memo/shares', toValue(args)] as const
}

export function getApiMemosMemoSharesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.memos)[':memo']['shares']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMemosMemoSharesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.memos[':memo'].shares.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMemosMemoShares<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.memos)[':memo']['shares']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.memos)[':memo']['shares']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.memos)[':memo']['shares']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.memos)[':memo']['shares']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMemosMemoSharesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.memos)[':memo']['shares']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMemosMemoSharesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMemosMemoSharesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.memos[':memo'].shares.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiMemosMemoSharesMutationKey() {
  return ['api', '/api/memos/:memo/shares', 'POST'] as const
}

export function getPostApiMemosMemoSharesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.memos)[':memo']['shares']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.memos)[':memo']['shares']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiMemosMemoSharesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.memos)[':memo']['shares']['$post']>,
    ) {
      return parseResponse(client.api.memos[':memo'].shares.$post(args, options))
    },
  })
}

export function usePostApiMemosMemoShares<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.memos)[':memo']['shares']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.memos)[':memo']['shares']['$post']>,
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
  const mutationDefaults = getPostApiMemosMemoSharesMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiMemosMemoSharesShareMutationKey() {
  return ['api', '/api/memos/:memo/shares/:share', 'DELETE'] as const
}

export function getDeleteApiMemosMemoSharesShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.memos)[':memo']['shares'][':share']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.memos)[':memo']['shares'][':share']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiMemosMemoSharesShareMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.memos)[':memo']['shares'][':share']['$delete']>,
    ) {
      return parseResponse(client.api.memos[':memo'].shares[':share'].$delete(args, options))
    },
  })
}

export function useDeleteApiMemosMemoSharesShare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.memos)[':memo']['shares'][':share']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.memos)[':memo']['shares'][':share']['$delete']>,
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
  const mutationDefaults = getDeleteApiMemosMemoSharesShareMutationOptions<TError, TOnMutateResult>(
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

export function getApiSharesShareTokenMemoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.shares)[':shareToken']['memo']['$get']>
  >,
) {
  return ['api', '/api/shares/:shareToken/memo', toValue(args)] as const
}

export function getApiSharesShareTokenMemoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.shares)[':shareToken']['memo']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSharesShareTokenMemoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.shares[':shareToken'].memo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSharesShareTokenMemo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.shares)[':shareToken']['memo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.shares)[':shareToken']['memo']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.shares)[':shareToken']['memo']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.shares)[':shareToken']['memo']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSharesShareTokenMemoQueryKey>
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
          Awaited<ReturnType<(typeof client.api.shares)[':shareToken']['memo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSharesShareTokenMemoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSharesShareTokenMemoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.shares[':shareToken'].memo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSpacesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.spaces.$get>>,
) {
  return ['api', '/api/spaces', toValue(args)] as const
}

export function getApiSpacesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.spaces.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSpacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.spaces.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiSpaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.spaces.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.$get>>>>
          >,
          ReturnType<typeof getApiSpacesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiSpacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSpacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.spaces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiSpacesMutationKey() {
  return ['api', '/api/spaces', 'POST'] as const
}

export function getPostApiSpacesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.spaces.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSpacesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.spaces.$post>) {
      return parseResponse(client.api.spaces.$post(args, options))
    },
  })
}

export function usePostApiSpaces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.spaces.$post>,
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
  const mutationDefaults = getPostApiSpacesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiSpacesSpaceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.spaces)[':space']['$get']>>,
) {
  return ['api', '/api/spaces/:space', toValue(args)] as const
}

export function getApiSpacesSpaceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.spaces)[':space']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSpacesSpaceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.spaces[':space'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSpacesSpace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.spaces)[':space']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.spaces)[':space']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.spaces)[':space']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.spaces)[':space']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSpacesSpaceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.spaces)[':space']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesSpaceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSpacesSpaceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.spaces[':space'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiSpacesSpaceMutationKey() {
  return ['api', '/api/spaces/:space', 'DELETE'] as const
}

export function getDeleteApiSpacesSpaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.spaces)[':space']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.spaces)[':space']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiSpacesSpaceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.spaces)[':space']['$delete']>) {
      return parseResponse(client.api.spaces[':space'].$delete(args, options))
    },
  })
}

export function useDeleteApiSpacesSpace<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.spaces)[':space']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.spaces)[':space']['$delete']>,
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
  const mutationDefaults = getDeleteApiSpacesSpaceMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiSpacesSpaceMutationKey() {
  return ['api', '/api/spaces/:space', 'PATCH'] as const
}

export function getPatchApiSpacesSpaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.spaces)[':space']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.spaces)[':space']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiSpacesSpaceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.spaces)[':space']['$patch']>) {
      return parseResponse(client.api.spaces[':space'].$patch(args, options))
    },
  })
}

export function usePatchApiSpacesSpace<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.spaces)[':space']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.spaces)[':space']['$patch']>,
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
  const mutationDefaults = getPatchApiSpacesSpaceMutationOptions<TError, TOnMutateResult>(
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

export function getApiSpacesSpaceInvitationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':space']['invitations']['$get']>
  >,
) {
  return ['api', '/api/spaces/:space/invitations', toValue(args)] as const
}

export function getApiSpacesSpaceInvitationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':space']['invitations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSpacesSpaceInvitationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.spaces[':space'].invitations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSpacesSpaceInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)[':space']['invitations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':space']['invitations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.spaces)[':space']['invitations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.spaces)[':space']['invitations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSpacesSpaceInvitationsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.spaces)[':space']['invitations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesSpaceInvitationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSpacesSpaceInvitationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.spaces[':space'].invitations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiSpacesSpaceInvitationsMutationKey() {
  return ['api', '/api/spaces/:space/invitations', 'POST'] as const
}

export function getPostApiSpacesSpaceInvitationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.spaces)[':space']['invitations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.spaces)[':space']['invitations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSpacesSpaceInvitationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.spaces)[':space']['invitations']['$post']>,
    ) {
      return parseResponse(client.api.spaces[':space'].invitations.$post(args, options))
    },
  })
}

export function usePostApiSpacesSpaceInvitations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.spaces)[':space']['invitations']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.spaces)[':space']['invitations']['$post']>,
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
  const mutationDefaults = getPostApiSpacesSpaceInvitationsMutationOptions<TError, TOnMutateResult>(
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

export function getApiSpacesSpaceInvitationsInvitationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':space']['invitations'][':invitation']['$get']>
  >,
) {
  return ['api', '/api/spaces/:space/invitations/:invitation', toValue(args)] as const
}

export function getApiSpacesSpaceInvitationsInvitationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':space']['invitations'][':invitation']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSpacesSpaceInvitationsInvitationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.spaces[':space'].invitations[':invitation'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSpacesSpaceInvitationsInvitation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.spaces)[':space']['invitations'][':invitation']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':space']['invitations'][':invitation']['$get']>
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
                    (typeof client.api.spaces)[':space']['invitations'][':invitation']['$get']
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
                    (typeof client.api.spaces)[':space']['invitations'][':invitation']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiSpacesSpaceInvitationsInvitationQueryKey>
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
            ReturnType<(typeof client.api.spaces)[':space']['invitations'][':invitation']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesSpaceInvitationsInvitationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSpacesSpaceInvitationsInvitationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.spaces[':space'].invitations[':invitation'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiSpacesSpaceInvitationsInvitationMutationKey() {
  return ['api', '/api/spaces/:space/invitations/:invitation', 'DELETE'] as const
}

export function getDeleteApiSpacesSpaceInvitationsInvitationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.spaces)[':space']['invitations'][':invitation']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.spaces)[':space']['invitations'][':invitation']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiSpacesSpaceInvitationsInvitationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.spaces)[':space']['invitations'][':invitation']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.spaces[':space'].invitations[':invitation'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiSpacesSpaceInvitationsInvitation<
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
                    (typeof client.api.spaces)[':space']['invitations'][':invitation']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.spaces)[':space']['invitations'][':invitation']['$delete']
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
  const mutationDefaults = getDeleteApiSpacesSpaceInvitationsInvitationMutationOptions<
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

export function getPostApiSpacesSpaceInvitationsInvitationAcceptMutationKey() {
  return ['api', '/api/spaces/:space/invitations/:invitation:accept', 'POST'] as const
}

export function getPostApiSpacesSpaceInvitationsInvitationAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.spaces)[':space']['invitations'][':invitation:accept']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.spaces)[':space']['invitations'][':invitation:accept']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiSpacesSpaceInvitationsInvitationAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.spaces)[':space']['invitations'][':invitation:accept']['$post']
      >,
    ) {
      return parseResponse(
        client.api.spaces[':space'].invitations[':invitation:accept'].$post(args, options),
      )
    },
  })
}

export function usePostApiSpacesSpaceInvitationsInvitationAccept<
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
                    (typeof client.api.spaces)[':space']['invitations'][':invitation:accept']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.spaces)[':space']['invitations'][':invitation:accept']['$post']
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
  const mutationDefaults = getPostApiSpacesSpaceInvitationsInvitationAcceptMutationOptions<
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

export function getPostApiSpacesSpaceInvitationsInvitationDeclineMutationKey() {
  return ['api', '/api/spaces/:space/invitations/:invitation:decline', 'POST'] as const
}

export function getPostApiSpacesSpaceInvitationsInvitationDeclineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.spaces)[':space']['invitations'][':invitation:decline']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.spaces)[':space']['invitations'][':invitation:decline']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiSpacesSpaceInvitationsInvitationDeclineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.spaces)[':space']['invitations'][':invitation:decline']['$post']
      >,
    ) {
      return parseResponse(
        client.api.spaces[':space'].invitations[':invitation:decline'].$post(args, options),
      )
    },
  })
}

export function usePostApiSpacesSpaceInvitationsInvitationDecline<
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
                    (typeof client.api.spaces)[':space']['invitations'][':invitation:decline']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.spaces)[':space']['invitations'][':invitation:decline']['$post']
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
  const mutationDefaults = getPostApiSpacesSpaceInvitationsInvitationDeclineMutationOptions<
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

export function getApiSpacesSpaceMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.spaces)[':space']['members']['$get']>>,
) {
  return ['api', '/api/spaces/:space/members', toValue(args)] as const
}

export function getApiSpacesSpaceMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.spaces)[':space']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSpacesSpaceMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.spaces[':space'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSpacesSpaceMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)[':space']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.spaces)[':space']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.spaces)[':space']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.spaces)[':space']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSpacesSpaceMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.api.spaces)[':space']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesSpaceMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSpacesSpaceMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.spaces[':space'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSpacesSpaceMembersMemberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':space']['members'][':member']['$get']>
  >,
) {
  return ['api', '/api/spaces/:space/members/:member', toValue(args)] as const
}

export function getApiSpacesSpaceMembersMemberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':space']['members'][':member']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSpacesSpaceMembersMemberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.spaces[':space'].members[':member'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSpacesSpaceMembersMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)[':space']['members'][':member']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':space']['members'][':member']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.spaces)[':space']['members'][':member']['$get']>
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
                  ReturnType<(typeof client.api.spaces)[':space']['members'][':member']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiSpacesSpaceMembersMemberQueryKey>
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
          Awaited<ReturnType<(typeof client.api.spaces)[':space']['members'][':member']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesSpaceMembersMemberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSpacesSpaceMembersMemberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.spaces[':space'].members[':member'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiSpacesSpaceMembersMemberMutationKey() {
  return ['api', '/api/spaces/:space/members/:member', 'DELETE'] as const
}

export function getDeleteApiSpacesSpaceMembersMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.spaces)[':space']['members'][':member']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.spaces)[':space']['members'][':member']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiSpacesSpaceMembersMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.spaces)[':space']['members'][':member']['$delete']>,
    ) {
      return parseResponse(client.api.spaces[':space'].members[':member'].$delete(args, options))
    },
  })
}

export function useDeleteApiSpacesSpaceMembersMember<
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
                  ReturnType<(typeof client.api.spaces)[':space']['members'][':member']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.spaces)[':space']['members'][':member']['$delete']>,
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
  const mutationDefaults = getDeleteApiSpacesSpaceMembersMemberMutationOptions<
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

export function getPatchApiSpacesSpaceMembersMemberMutationKey() {
  return ['api', '/api/spaces/:space/members/:member', 'PATCH'] as const
}

export function getPatchApiSpacesSpaceMembersMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.spaces)[':space']['members'][':member']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.spaces)[':space']['members'][':member']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiSpacesSpaceMembersMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.spaces)[':space']['members'][':member']['$patch']>,
    ) {
      return parseResponse(client.api.spaces[':space'].members[':member'].$patch(args, options))
    },
  })
}

export function usePatchApiSpacesSpaceMembersMember<
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
                  ReturnType<(typeof client.api.spaces)[':space']['members'][':member']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.spaces)[':space']['members'][':member']['$patch']>,
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
  const mutationDefaults = getPatchApiSpacesSpaceMembersMemberMutationOptions<
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

export function getApiUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.users.$get>>,
) {
  return ['api', '/api/users', toValue(args)] as const
}

export function getApiUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
          >,
          ReturnType<typeof getApiUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiUsersMutationKey() {
  return ['api', '/api/users', 'POST'] as const
}

export function getPostApiUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.users.$post>) {
      return parseResponse(client.api.users.$post(args, options))
    },
  })
}

export function usePostApiUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.users.$post>,
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
  const mutationDefaults = getPostApiUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiUsersUserQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':user']['$get']>>,
) {
  return ['api', '/api/users/:user', toValue(args)] as const
}

export function getApiUsersUserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':user']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':user'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':user']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':user']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':user']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':user']['$get']>>>
            >
          >,
          ReturnType<typeof getApiUsersUserQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':user']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':user'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiUsersUserMutationKey() {
  return ['api', '/api/users/:user', 'DELETE'] as const
}

export function getDeleteApiUsersUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':user']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.users)[':user']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUsersUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.users)[':user']['$delete']>) {
      return parseResponse(client.api.users[':user'].$delete(args, options))
    },
  })
}

export function useDeleteApiUsersUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.users)[':user']['$delete']>,
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
  const mutationDefaults = getDeleteApiUsersUserMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiUsersUserMutationKey() {
  return ['api', '/api/users/:user', 'PATCH'] as const
}

export function getPatchApiUsersUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':user']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.users)[':user']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiUsersUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.users)[':user']['$patch']>) {
      return parseResponse(client.api.users[':user'].$patch(args, options))
    },
  })
}

export function usePatchApiUsersUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.users)[':user']['$patch']>,
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
  const mutationDefaults = getPatchApiUsersUserMutationOptions<TError, TOnMutateResult>(
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

export function getApiUsersUserLinkedIdentitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':user']['linkedIdentities']['$get']>
  >,
) {
  return ['api', '/api/users/:user/linkedIdentities', toValue(args)] as const
}

export function getApiUsersUserLinkedIdentitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':user']['linkedIdentities']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersUserLinkedIdentitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':user'].linkedIdentities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersUserLinkedIdentities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':user']['linkedIdentities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':user']['linkedIdentities']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user']['linkedIdentities']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user']['linkedIdentities']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUsersUserLinkedIdentitiesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users)[':user']['linkedIdentities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUserLinkedIdentitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersUserLinkedIdentitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':user'].linkedIdentities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiUsersUserLinkedIdentitiesMutationKey() {
  return ['api', '/api/users/:user/linkedIdentities', 'POST'] as const
}

export function getPostApiUsersUserLinkedIdentitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users)[':user']['linkedIdentities']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.users)[':user']['linkedIdentities']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUsersUserLinkedIdentitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.users)[':user']['linkedIdentities']['$post']>,
    ) {
      return parseResponse(client.api.users[':user'].linkedIdentities.$post(args, options))
    },
  })
}

export function usePostApiUsersUserLinkedIdentities<
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
                Awaited<ReturnType<(typeof client.api.users)[':user']['linkedIdentities']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.users)[':user']['linkedIdentities']['$post']>,
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
  const mutationDefaults = getPostApiUsersUserLinkedIdentitiesMutationOptions<
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

export function getApiUsersUserLinkedIdentitiesLinkedIdentityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.users)[':user']['linkedIdentities'][':linkedIdentity']['$get']
    >
  >,
) {
  return ['api', '/api/users/:user/linkedIdentities/:linkedIdentity', toValue(args)] as const
}

export function getApiUsersUserLinkedIdentitiesLinkedIdentityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.users)[':user']['linkedIdentities'][':linkedIdentity']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersUserLinkedIdentitiesLinkedIdentityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':user'].linkedIdentities[':linkedIdentity'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersUserLinkedIdentitiesLinkedIdentity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.users)[':user']['linkedIdentities'][':linkedIdentity']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.users)[':user']['linkedIdentities'][':linkedIdentity']['$get']
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
                    (typeof client.api.users)[':user']['linkedIdentities'][':linkedIdentity']['$get']
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
                    (typeof client.api.users)[':user']['linkedIdentities'][':linkedIdentity']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiUsersUserLinkedIdentitiesLinkedIdentityQueryKey>
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
              (typeof client.api.users)[':user']['linkedIdentities'][':linkedIdentity']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUserLinkedIdentitiesLinkedIdentityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersUserLinkedIdentitiesLinkedIdentityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':user'].linkedIdentities[':linkedIdentity'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiUsersUserLinkedIdentitiesLinkedIdentityMutationKey() {
  return ['api', '/api/users/:user/linkedIdentities/:linkedIdentity', 'DELETE'] as const
}

export function getDeleteApiUsersUserLinkedIdentitiesLinkedIdentityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.users)[':user']['linkedIdentities'][':linkedIdentity']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.users)[':user']['linkedIdentities'][':linkedIdentity']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUsersUserLinkedIdentitiesLinkedIdentityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.users)[':user']['linkedIdentities'][':linkedIdentity']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.users[':user'].linkedIdentities[':linkedIdentity'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiUsersUserLinkedIdentitiesLinkedIdentity<
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
                    (typeof client.api.users)[':user']['linkedIdentities'][':linkedIdentity']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.users)[':user']['linkedIdentities'][':linkedIdentity']['$delete']
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
  const mutationDefaults = getDeleteApiUsersUserLinkedIdentitiesLinkedIdentityMutationOptions<
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

export function getApiUsersUserNotificationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':user']['notifications']['$get']>
  >,
) {
  return ['api', '/api/users/:user/notifications', toValue(args)] as const
}

export function getApiUsersUserNotificationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':user']['notifications']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersUserNotificationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':user'].notifications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersUserNotifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':user']['notifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':user']['notifications']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user']['notifications']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user']['notifications']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUsersUserNotificationsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users)[':user']['notifications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUserNotificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersUserNotificationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':user'].notifications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiUsersUserNotificationsNotificationMutationKey() {
  return ['api', '/api/users/:user/notifications/:notification', 'DELETE'] as const
}

export function getDeleteApiUsersUserNotificationsNotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.users)[':user']['notifications'][':notification']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.users)[':user']['notifications'][':notification']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUsersUserNotificationsNotificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.users)[':user']['notifications'][':notification']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.users[':user'].notifications[':notification'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiUsersUserNotificationsNotification<
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
                    (typeof client.api.users)[':user']['notifications'][':notification']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.users)[':user']['notifications'][':notification']['$delete']
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
  const mutationDefaults = getDeleteApiUsersUserNotificationsNotificationMutationOptions<
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

export function getPatchApiUsersUserNotificationsNotificationMutationKey() {
  return ['api', '/api/users/:user/notifications/:notification', 'PATCH'] as const
}

export function getPatchApiUsersUserNotificationsNotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.users)[':user']['notifications'][':notification']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.users)[':user']['notifications'][':notification']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiUsersUserNotificationsNotificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.users)[':user']['notifications'][':notification']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.users[':user'].notifications[':notification'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiUsersUserNotificationsNotification<
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
                    (typeof client.api.users)[':user']['notifications'][':notification']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.users)[':user']['notifications'][':notification']['$patch']
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
  const mutationDefaults = getPatchApiUsersUserNotificationsNotificationMutationOptions<
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

export function getApiUsersUserPersonalAccessTokensQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':user']['personalAccessTokens']['$get']>
  >,
) {
  return ['api', '/api/users/:user/personalAccessTokens', toValue(args)] as const
}

export function getApiUsersUserPersonalAccessTokensQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':user']['personalAccessTokens']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersUserPersonalAccessTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':user'].personalAccessTokens.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersUserPersonalAccessTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':user']['personalAccessTokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':user']['personalAccessTokens']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.users)[':user']['personalAccessTokens']['$get']>
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
                  ReturnType<(typeof client.api.users)[':user']['personalAccessTokens']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiUsersUserPersonalAccessTokensQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users)[':user']['personalAccessTokens']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUserPersonalAccessTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersUserPersonalAccessTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':user'].personalAccessTokens.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiUsersUserPersonalAccessTokensMutationKey() {
  return ['api', '/api/users/:user/personalAccessTokens', 'POST'] as const
}

export function getPostApiUsersUserPersonalAccessTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users)[':user']['personalAccessTokens']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.users)[':user']['personalAccessTokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUsersUserPersonalAccessTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.users)[':user']['personalAccessTokens']['$post']>,
    ) {
      return parseResponse(client.api.users[':user'].personalAccessTokens.$post(args, options))
    },
  })
}

export function usePostApiUsersUserPersonalAccessTokens<
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
                  ReturnType<(typeof client.api.users)[':user']['personalAccessTokens']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.users)[':user']['personalAccessTokens']['$post']>,
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
  const mutationDefaults = getPostApiUsersUserPersonalAccessTokensMutationOptions<
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

export function getDeleteApiUsersUserPersonalAccessTokensPersonalAccessTokenMutationKey() {
  return ['api', '/api/users/:user/personalAccessTokens/:personalAccessToken', 'DELETE'] as const
}

export function getDeleteApiUsersUserPersonalAccessTokensPersonalAccessTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.users)[':user']['personalAccessTokens'][':personalAccessToken']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.users)[':user']['personalAccessTokens'][':personalAccessToken']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUsersUserPersonalAccessTokensPersonalAccessTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.users)[':user']['personalAccessTokens'][':personalAccessToken']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.users[':user'].personalAccessTokens[':personalAccessToken'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiUsersUserPersonalAccessTokensPersonalAccessToken<
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
                    (typeof client.api.users)[':user']['personalAccessTokens'][':personalAccessToken']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.users)[':user']['personalAccessTokens'][':personalAccessToken']['$delete']
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
    getDeleteApiUsersUserPersonalAccessTokensPersonalAccessTokenMutationOptions<
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

export function getApiUsersUserSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':user']['settings']['$get']>>,
) {
  return ['api', '/api/users/:user/settings', toValue(args)] as const
}

export function getApiUsersUserSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':user']['settings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersUserSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':user'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersUserSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':user']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':user']['settings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user']['settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user']['settings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUsersUserSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users)[':user']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUserSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersUserSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':user'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsersUserSettingsSettingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':user']['settings'][':setting']['$get']>
  >,
) {
  return ['api', '/api/users/:user/settings/:setting', toValue(args)] as const
}

export function getApiUsersUserSettingsSettingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':user']['settings'][':setting']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersUserSettingsSettingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':user'].settings[':setting'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersUserSettingsSetting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':user']['settings'][':setting']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':user']['settings'][':setting']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.users)[':user']['settings'][':setting']['$get']>
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
                  ReturnType<(typeof client.api.users)[':user']['settings'][':setting']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiUsersUserSettingsSettingQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users)[':user']['settings'][':setting']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUserSettingsSettingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersUserSettingsSettingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':user'].settings[':setting'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiUsersUserSettingsSettingMutationKey() {
  return ['api', '/api/users/:user/settings/:setting', 'PATCH'] as const
}

export function getPatchApiUsersUserSettingsSettingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users)[':user']['settings'][':setting']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.users)[':user']['settings'][':setting']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiUsersUserSettingsSettingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.users)[':user']['settings'][':setting']['$patch']>,
    ) {
      return parseResponse(client.api.users[':user'].settings[':setting'].$patch(args, options))
    },
  })
}

export function usePatchApiUsersUserSettingsSetting<
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
                  ReturnType<(typeof client.api.users)[':user']['settings'][':setting']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.users)[':user']['settings'][':setting']['$patch']>,
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
  const mutationDefaults = getPatchApiUsersUserSettingsSettingMutationOptions<
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

export function getApiUsersUserSpaceInvitationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':user']['spaceInvitations']['$get']>
  >,
) {
  return ['api', '/api/users/:user/spaceInvitations', toValue(args)] as const
}

export function getApiUsersUserSpaceInvitationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':user']['spaceInvitations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersUserSpaceInvitationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':user'].spaceInvitations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersUserSpaceInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':user']['spaceInvitations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':user']['spaceInvitations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user']['spaceInvitations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user']['spaceInvitations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUsersUserSpaceInvitationsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users)[':user']['spaceInvitations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUserSpaceInvitationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersUserSpaceInvitationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':user'].spaceInvitations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsersUserStatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':user']['stats']['$get']>>,
) {
  return ['api', '/api/users/:user/stats', toValue(args)] as const
}

export function getApiUsersUserStatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':user']['stats']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersUserStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':user'].stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersUserStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':user']['stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':user']['stats']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user']['stats']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user']['stats']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUsersUserStatsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users)[':user']['stats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUserStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersUserStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':user'].stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsersUserUsageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':user']['usage']['$get']>>,
) {
  return ['api', '/api/users/:user/usage', toValue(args)] as const
}

export function getApiUsersUserUsageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':user']['usage']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersUserUsageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':user'].usage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersUserUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':user']['usage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':user']['usage']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user']['usage']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user']['usage']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUsersUserUsageQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users)[':user']['usage']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUserUsageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersUserUsageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':user'].usage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsersUserViewsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':user']['views']['$get']>>,
) {
  return ['api', '/api/users/:user/views', toValue(args)] as const
}

export function getApiUsersUserViewsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':user']['views']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersUserViewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':user'].views.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersUserViews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':user']['views']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':user']['views']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user']['views']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user']['views']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUsersUserViewsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users)[':user']['views']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUserViewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersUserViewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':user'].views.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiUsersUserViewsMutationKey() {
  return ['api', '/api/users/:user/views', 'POST'] as const
}

export function getPostApiUsersUserViewsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users)[':user']['views']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.users)[':user']['views']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUsersUserViewsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.users)[':user']['views']['$post']>) {
      return parseResponse(client.api.users[':user'].views.$post(args, options))
    },
  })
}

export function usePostApiUsersUserViews<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user']['views']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.users)[':user']['views']['$post']>,
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
  const mutationDefaults = getPostApiUsersUserViewsMutationOptions<TError, TOnMutateResult>(
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

export function getApiUsersUserViewsViewQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':user']['views'][':view']['$get']>
  >,
) {
  return ['api', '/api/users/:user/views/:view', toValue(args)] as const
}

export function getApiUsersUserViewsViewQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':user']['views'][':view']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersUserViewsViewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':user'].views[':view'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersUserViewsView<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':user']['views'][':view']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':user']['views'][':view']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user']['views'][':view']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user']['views'][':view']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUsersUserViewsViewQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users)[':user']['views'][':view']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUserViewsViewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersUserViewsViewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':user'].views[':view'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiUsersUserViewsViewMutationKey() {
  return ['api', '/api/users/:user/views/:view', 'DELETE'] as const
}

export function getDeleteApiUsersUserViewsViewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users)[':user']['views'][':view']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.users)[':user']['views'][':view']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUsersUserViewsViewMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.users)[':user']['views'][':view']['$delete']>,
    ) {
      return parseResponse(client.api.users[':user'].views[':view'].$delete(args, options))
    },
  })
}

export function useDeleteApiUsersUserViewsView<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user']['views'][':view']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.users)[':user']['views'][':view']['$delete']>,
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
  const mutationDefaults = getDeleteApiUsersUserViewsViewMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiUsersUserViewsViewMutationKey() {
  return ['api', '/api/users/:user/views/:view', 'PATCH'] as const
}

export function getPatchApiUsersUserViewsViewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users)[':user']['views'][':view']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.users)[':user']['views'][':view']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiUsersUserViewsViewMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.users)[':user']['views'][':view']['$patch']>,
    ) {
      return parseResponse(client.api.users[':user'].views[':view'].$patch(args, options))
    },
  })
}

export function usePatchApiUsersUserViewsView<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user']['views'][':view']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.users)[':user']['views'][':view']['$patch']>,
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
  const mutationDefaults = getPatchApiUsersUserViewsViewMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiUsersUserViewsReorderMutationKey() {
  return ['api', '/api/users/:user/views:reorder', 'POST'] as const
}

export function getPostApiUsersUserViewsReorderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users)[':user']['views:reorder']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.users)[':user']['views:reorder']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUsersUserViewsReorderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.users)[':user']['views:reorder']['$post']>,
    ) {
      return parseResponse(client.api.users[':user']['views:reorder'].$post(args, options))
    },
  })
}

export function usePostApiUsersUserViewsReorder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user']['views:reorder']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.users)[':user']['views:reorder']['$post']>,
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
  const mutationDefaults = getPostApiUsersUserViewsReorderMutationOptions<TError, TOnMutateResult>(
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

export function getApiUsersUserWebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':user']['webhooks']['$get']>>,
) {
  return ['api', '/api/users/:user/webhooks', toValue(args)] as const
}

export function getApiUsersUserWebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':user']['webhooks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersUserWebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':user'].webhooks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersUserWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':user']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':user']['webhooks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user']['webhooks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user']['webhooks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUsersUserWebhooksQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users)[':user']['webhooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUserWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersUserWebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':user'].webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiUsersUserWebhooksMutationKey() {
  return ['api', '/api/users/:user/webhooks', 'POST'] as const
}

export function getPostApiUsersUserWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users)[':user']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.users)[':user']['webhooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUsersUserWebhooksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.users)[':user']['webhooks']['$post']>,
    ) {
      return parseResponse(client.api.users[':user'].webhooks.$post(args, options))
    },
  })
}

export function usePostApiUsersUserWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user']['webhooks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.users)[':user']['webhooks']['$post']>,
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
  const mutationDefaults = getPostApiUsersUserWebhooksMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiUsersUserWebhooksWebhookMutationKey() {
  return ['api', '/api/users/:user/webhooks/:webhook', 'DELETE'] as const
}

export function getDeleteApiUsersUserWebhooksWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users)[':user']['webhooks'][':webhook']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.users)[':user']['webhooks'][':webhook']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUsersUserWebhooksWebhookMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.users)[':user']['webhooks'][':webhook']['$delete']>,
    ) {
      return parseResponse(client.api.users[':user'].webhooks[':webhook'].$delete(args, options))
    },
  })
}

export function useDeleteApiUsersUserWebhooksWebhook<
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
                  ReturnType<(typeof client.api.users)[':user']['webhooks'][':webhook']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.users)[':user']['webhooks'][':webhook']['$delete']>,
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
  const mutationDefaults = getDeleteApiUsersUserWebhooksWebhookMutationOptions<
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

export function getPatchApiUsersUserWebhooksWebhookMutationKey() {
  return ['api', '/api/users/:user/webhooks/:webhook', 'PATCH'] as const
}

export function getPatchApiUsersUserWebhooksWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users)[':user']['webhooks'][':webhook']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.users)[':user']['webhooks'][':webhook']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiUsersUserWebhooksWebhookMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.users)[':user']['webhooks'][':webhook']['$patch']>,
    ) {
      return parseResponse(client.api.users[':user'].webhooks[':webhook'].$patch(args, options))
    },
  })
}

export function usePatchApiUsersUserWebhooksWebhook<
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
                  ReturnType<(typeof client.api.users)[':user']['webhooks'][':webhook']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.users)[':user']['webhooks'][':webhook']['$patch']>,
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
  const mutationDefaults = getPatchApiUsersUserWebhooksWebhookMutationOptions<
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

export function getApiUsersUserWebhooksWebhookGetSigningSecretQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.users)[':user']['webhooks'][':webhook:getSigningSecret']['$get']
    >
  >,
) {
  return ['api', '/api/users/:user/webhooks/:webhook:getSigningSecret', toValue(args)] as const
}

export function getApiUsersUserWebhooksWebhookGetSigningSecretQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.users)[':user']['webhooks'][':webhook:getSigningSecret']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersUserWebhooksWebhookGetSigningSecretQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':user'].webhooks[':webhook:getSigningSecret'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersUserWebhooksWebhookGetSigningSecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.users)[':user']['webhooks'][':webhook:getSigningSecret']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.users)[':user']['webhooks'][':webhook:getSigningSecret']['$get']
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
                    (typeof client.api.users)[':user']['webhooks'][':webhook:getSigningSecret']['$get']
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
                    (typeof client.api.users)[':user']['webhooks'][':webhook:getSigningSecret']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiUsersUserWebhooksWebhookGetSigningSecretQueryKey>
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
              (typeof client.api.users)[':user']['webhooks'][':webhook:getSigningSecret']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUserWebhooksWebhookGetSigningSecretQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersUserWebhooksWebhookGetSigningSecretQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':user'].webhooks[':webhook:getSigningSecret'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsersUserGetStatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':user:getStats']['$get']>>,
) {
  return ['api', '/api/users/:user:getStats', toValue(args)] as const
}

export function getApiUsersUserGetStatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':user:getStats']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersUserGetStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':user:getStats'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersUserGetStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':user:getStats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':user:getStats']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user:getStats']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user:getStats']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUsersUserGetStatsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users)[':user:getStats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUserGetStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersUserGetStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':user:getStats'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiUsersUserImportMemosMutationKey() {
  return ['api', '/api/users/:user:importMemos', 'POST'] as const
}

export function getPostApiUsersUserImportMemosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users)[':user:importMemos']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.users)[':user:importMemos']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUsersUserImportMemosMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.users)[':user:importMemos']['$post']>,
    ) {
      return parseResponse(client.api.users[':user:importMemos'].$post(args, options))
    },
  })
}

export function usePostApiUsersUserImportMemos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':user:importMemos']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.users)[':user:importMemos']['$post']>,
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
  const mutationDefaults = getPostApiUsersUserImportMemosMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiUsersBatchGetMutationKey() {
  return ['api', '/api/users:batchGet', 'POST'] as const
}

export function getPostApiUsersBatchGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['users:batchGet']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['users:batchGet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUsersBatchGetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['users:batchGet']['$post']>) {
      return parseResponse(client.api['users:batchGet'].$post(args, options))
    },
  })
}

export function usePostApiUsersBatchGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['users:batchGet']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['users:batchGet']['$post']>,
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
  const mutationDefaults = getPostApiUsersBatchGetMutationOptions<TError, TOnMutateResult>(
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
