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

export function createPostApiAiTranscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['ai:transcribe']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['ai:transcribe']['$post']>,
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
    const mutationDefaults = getPostApiAiTranscribeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiAttachmentsQueryKey(
  args: InferRequestType<typeof client.api.attachments.$get>,
) {
  return ['api', '/api/attachments', args] as const
}

export function getApiAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.attachments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.attachments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.attachments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAttachmentsQueryKey>
  >({
    queryKey: getApiAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.attachments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAttachments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.attachments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.attachments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.attachments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAttachmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAttachmentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiAttachments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.attachments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.attachments.$post>,
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
    const mutationDefaults = getPostApiAttachmentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiAttachmentsAttachmentQueryKey(
  args: InferRequestType<(typeof client.api.attachments)[':attachment']['$get']>,
) {
  return ['api', '/api/attachments/:attachment', args] as const
}

export function getApiAttachmentsAttachmentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.attachments)[':attachment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.attachments)[':attachment']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiAttachmentsAttachmentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.attachments[':attachment'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAttachmentsAttachment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.attachments)[':attachment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.attachments)[':attachment']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiAttachmentsAttachmentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteApiAttachmentsAttachment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiAttachmentsAttachmentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchApiAttachmentsAttachment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiAttachmentsAttachmentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiAttachmentsBatchDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAttachmentsBatchDeleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiAttachmentsUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAttachmentsUploadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiAuthMeQueryKey() {
  return ['api', '/api/auth/me'] as const
}

export function getApiAuthMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.me.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiAuthMeQueryKey>
  >({
    queryKey: getApiAuthMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.auth.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAuthMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.me.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAuthMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAuthMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiAuthRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.refresh.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.auth.refresh.$post>,
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
    const mutationDefaults = getPostApiAuthRefreshMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiAuthSignin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.signin.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.auth.signin.$post>,
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
    const mutationDefaults = getPostApiAuthSigninMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiAuthSignout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.signout.$post>>>
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostApiAuthSignoutMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiIdentityProvidersQueryKey() {
  return ['api', '/api/identity-providers'] as const
}

export function getApiIdentityProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['identity-providers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['identity-providers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiIdentityProvidersQueryKey>
  >({
    queryKey: getApiIdentityProvidersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api['identity-providers'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiIdentityProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['identity-providers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['identity-providers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIdentityProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiIdentityProvidersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiIdentityProviders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiIdentityProvidersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiIdentityProvidersIdentityProviderQueryKey(
  args: InferRequestType<(typeof client.api)['identity-providers'][':identity-provider']['$get']>,
) {
  return ['api', '/api/identity-providers/:identity-provider', args] as const
}

export function getApiIdentityProvidersIdentityProviderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['identity-providers'][':identity-provider']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['identity-providers'][':identity-provider']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiIdentityProvidersIdentityProviderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['identity-providers'][':identity-provider'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiIdentityProvidersIdentityProvider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['identity-providers'][':identity-provider']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)['identity-providers'][':identity-provider']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiIdentityProvidersIdentityProviderQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteApiIdentityProvidersIdentityProvider<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiIdentityProvidersIdentityProviderMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchApiIdentityProvidersIdentityProvider<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.api)['identity-providers'][':identity-provider']['$patch']>,
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
    const mutationDefaults = getPatchApiIdentityProvidersIdentityProviderMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiInstanceConfigurationQueryKey() {
  return ['api', '/api/instance/configuration'] as const
}

export function getApiInstanceConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.instance.configuration.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.instance.configuration.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInstanceConfigurationQueryKey>
  >({
    queryKey: getApiInstanceConfigurationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.instance.configuration.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiInstanceConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.instance.configuration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.instance.configuration.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiInstanceConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiInstanceConfigurationQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiInstanceProfileQueryKey() {
  return ['api', '/api/instance/profile'] as const
}

export function getApiInstanceProfileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.instance.profile.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.instance.profile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiInstanceProfileQueryKey>
  >({
    queryKey: getApiInstanceProfileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.instance.profile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiInstanceProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.instance.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.instance.profile.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiInstanceProfileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiInstanceProfileQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiInstanceSettingsNotificationTestEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiInstanceSettingsNotificationTestEmailMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiInstanceSettingsBatchGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiInstanceSettingsBatchGetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiInstanceStatsQueryKey() {
  return ['api', '/api/instance/stats'] as const
}

export function getApiInstanceStatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.instance.stats.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.instance.stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiInstanceStatsQueryKey>
  >({
    queryKey: getApiInstanceStatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.instance.stats.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiInstanceStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.instance.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.instance.stats.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiInstanceStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiInstanceStatsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiInstanceInstanceStarQueryKey(
  args: InferRequestType<(typeof client.api.instance)[':instance']['*']['$get']>,
) {
  return ['api', '/api/instance/:instance/*', args] as const
}

export function getApiInstanceInstanceStarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.instance)[':instance']['*']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.instance)[':instance']['*']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiInstanceInstanceStarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.instance[':instance']['*'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiInstanceInstanceStar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.instance)[':instance']['*']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.instance)[':instance']['*']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiInstanceInstanceStarQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchApiInstanceInstanceStar<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiInstanceInstanceStarMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiMemosQueryKey(args: InferRequestType<typeof client.api.memos.$get>) {
  return ['api', '/api/memos', args] as const
}

export function getApiMemosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.memos.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.memos.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.memos.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiMemosQueryKey>
  >({
    queryKey: getApiMemosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.memos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiMemos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.memos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.memos.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.memos.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiMemosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiMemosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiMemos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.memos.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.memos.$post>,
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
    const mutationDefaults = getPostApiMemosMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiMemosDashLinkMetadataQueryKey(
  args: InferRequestType<(typeof client.api.memos)['-']['linkMetadata']['$get']>,
) {
  return ['api', '/api/memos/-/linkMetadata', args] as const
}

export function getApiMemosDashLinkMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.memos)['-']['linkMetadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.memos)['-']['linkMetadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiMemosDashLinkMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.memos['-'].linkMetadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiMemosDashLinkMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.memos)['-']['linkMetadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.memos)['-']['linkMetadata']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiMemosDashLinkMetadataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiMemosDashLinkMetadataBatchGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiMemosDashLinkMetadataBatchGetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiMemosMemoQueryKey(
  args: InferRequestType<(typeof client.api.memos)[':memo']['$get']>,
) {
  return ['api', '/api/memos/:memo', args] as const
}

export function getApiMemosMemoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.memos)[':memo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.memos)[':memo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.memos)[':memo']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMemosMemoQueryKey>
  >({
    queryKey: getApiMemosMemoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.memos[':memo'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiMemosMemo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.memos)[':memo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.memos)[':memo']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.memos)[':memo']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMemosMemoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiMemosMemoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteApiMemosMemo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.memos)[':memo']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.memos)[':memo']['$delete']>,
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
    const mutationDefaults = getDeleteApiMemosMemoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchApiMemosMemo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.memos)[':memo']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.memos)[':memo']['$patch']>,
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
    const mutationDefaults = getPatchApiMemosMemoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiMemosMemoAttachmentsQueryKey(
  args: InferRequestType<(typeof client.api.memos)[':memo']['attachments']['$get']>,
) {
  return ['api', '/api/memos/:memo/attachments', args] as const
}

export function getApiMemosMemoAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.memos)[':memo']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.memos)[':memo']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiMemosMemoAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.memos[':memo'].attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiMemosMemoAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.memos)[':memo']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.memos)[':memo']['attachments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiMemosMemoAttachmentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchApiMemosMemoAttachments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiMemosMemoAttachmentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiMemosMemoReactionsQueryKey(
  args: InferRequestType<(typeof client.api.memos)[':memo']['reactions']['$get']>,
) {
  return ['api', '/api/memos/:memo/reactions', args] as const
}

export function getApiMemosMemoReactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.memos)[':memo']['reactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.memos)[':memo']['reactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiMemosMemoReactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.memos[':memo'].reactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiMemosMemoReactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.memos)[':memo']['reactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.memos)[':memo']['reactions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiMemosMemoReactionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiMemosMemoReactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiMemosMemoReactionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiMemosMemoReactionsReaction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiMemosMemoReactionsReactionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiMemosMemoRelationsQueryKey(
  args: InferRequestType<(typeof client.api.memos)[':memo']['relations']['$get']>,
) {
  return ['api', '/api/memos/:memo/relations', args] as const
}

export function getApiMemosMemoRelationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.memos)[':memo']['relations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.memos)[':memo']['relations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiMemosMemoRelationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.memos[':memo'].relations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiMemosMemoRelations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.memos)[':memo']['relations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.memos)[':memo']['relations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiMemosMemoRelationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchApiMemosMemoRelations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiMemosMemoRelationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiMemosMemoSharesQueryKey(
  args: InferRequestType<(typeof client.api.memos)[':memo']['shares']['$get']>,
) {
  return ['api', '/api/memos/:memo/shares', args] as const
}

export function getApiMemosMemoSharesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.memos)[':memo']['shares']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.memos)[':memo']['shares']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiMemosMemoSharesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.memos[':memo'].shares.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiMemosMemoShares<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.memos)[':memo']['shares']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.memos)[':memo']['shares']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiMemosMemoSharesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiMemosMemoShares<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiMemosMemoSharesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiMemosMemoSharesShare<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiMemosMemoSharesShareMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiSharesShareTokenMemoQueryKey(
  args: InferRequestType<(typeof client.api.shares)[':shareToken']['memo']['$get']>,
) {
  return ['api', '/api/shares/:shareToken/memo', args] as const
}

export function getApiSharesShareTokenMemoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.shares)[':shareToken']['memo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.shares)[':shareToken']['memo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiSharesShareTokenMemoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.shares[':shareToken'].memo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiSharesShareTokenMemo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.shares)[':shareToken']['memo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.shares)[':shareToken']['memo']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSharesShareTokenMemoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiSpacesQueryKey(args: InferRequestType<typeof client.api.spaces.$get>) {
  return ['api', '/api/spaces', args] as const
}

export function getApiSpacesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.spaces.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiSpacesQueryKey>
  >({
    queryKey: getApiSpacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.spaces.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiSpaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.spaces.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiSpacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSpacesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiSpaces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.spaces.$post>,
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
    const mutationDefaults = getPostApiSpacesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiSpacesSpaceQueryKey(
  args: InferRequestType<(typeof client.api.spaces)[':space']['$get']>,
) {
  return ['api', '/api/spaces/:space', args] as const
}

export function getApiSpacesSpaceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.spaces)[':space']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.spaces)[':space']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.spaces)[':space']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesSpaceQueryKey>
  >({
    queryKey: getApiSpacesSpaceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.spaces[':space'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiSpacesSpace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.spaces)[':space']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.spaces)[':space']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.spaces)[':space']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSpacesSpaceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSpacesSpaceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteApiSpacesSpace<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiSpacesSpaceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchApiSpacesSpace<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiSpacesSpaceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiSpacesSpaceInvitationsQueryKey(
  args: InferRequestType<(typeof client.api.spaces)[':space']['invitations']['$get']>,
) {
  return ['api', '/api/spaces/:space/invitations', args] as const
}

export function getApiSpacesSpaceInvitationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)[':space']['invitations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.spaces)[':space']['invitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiSpacesSpaceInvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.spaces[':space'].invitations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiSpacesSpaceInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)[':space']['invitations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.spaces)[':space']['invitations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSpacesSpaceInvitationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiSpacesSpaceInvitations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiSpacesSpaceInvitationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiSpacesSpaceInvitationsInvitationQueryKey(
  args: InferRequestType<
    (typeof client.api.spaces)[':space']['invitations'][':invitation']['$get']
  >,
) {
  return ['api', '/api/spaces/:space/invitations/:invitation', args] as const
}

export function getApiSpacesSpaceInvitationsInvitationQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.spaces)[':space']['invitations'][':invitation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiSpacesSpaceInvitationsInvitationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.spaces[':space'].invitations[':invitation'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiSpacesSpaceInvitationsInvitation<
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
  args: () => InferRequestType<
    (typeof client.api.spaces)[':space']['invitations'][':invitation']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiSpacesSpaceInvitationsInvitationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSpacesSpaceInvitationsInvitationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteApiSpacesSpaceInvitationsInvitation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiSpacesSpaceInvitationsInvitationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiSpacesSpaceInvitationsInvitationAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiSpacesSpaceInvitationsInvitationAcceptMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiSpacesSpaceInvitationsInvitationDecline<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiSpacesSpaceInvitationsInvitationDeclineMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiSpacesSpaceMembersQueryKey(
  args: InferRequestType<(typeof client.api.spaces)[':space']['members']['$get']>,
) {
  return ['api', '/api/spaces/:space/members', args] as const
}

export function getApiSpacesSpaceMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)[':space']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.spaces)[':space']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiSpacesSpaceMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.spaces[':space'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiSpacesSpaceMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)[':space']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.spaces)[':space']['members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSpacesSpaceMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiSpacesSpaceMembersMemberQueryKey(
  args: InferRequestType<(typeof client.api.spaces)[':space']['members'][':member']['$get']>,
) {
  return ['api', '/api/spaces/:space/members/:member', args] as const
}

export function getApiSpacesSpaceMembersMemberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)[':space']['members'][':member']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.spaces)[':space']['members'][':member']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiSpacesSpaceMembersMemberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.spaces[':space'].members[':member'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiSpacesSpaceMembersMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)[':space']['members'][':member']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.spaces)[':space']['members'][':member']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiSpacesSpaceMembersMemberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSpacesSpaceMembersMemberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteApiSpacesSpaceMembersMember<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiSpacesSpaceMembersMemberMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchApiSpacesSpaceMembersMember<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiSpacesSpaceMembersMemberMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiUsersQueryKey(args: InferRequestType<typeof client.api.users.$get>) {
  return ['api', '/api/users', args] as const
}

export function getApiUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiUsersQueryKey>
  >({
    queryKey: getApiUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.users.$post>,
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
    const mutationDefaults = getPostApiUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiUsersUserQueryKey(
  args: InferRequestType<(typeof client.api.users)[':user']['$get']>,
) {
  return ['api', '/api/users/:user', args] as const
}

export function getApiUsersUserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':user']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':user']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':user']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUserQueryKey>
  >({
    queryKey: getApiUsersUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':user'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiUsersUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':user']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':user']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':user']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsersUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUsersUserQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteApiUsersUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':user']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.users)[':user']['$delete']>,
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
    const mutationDefaults = getDeleteApiUsersUserMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchApiUsersUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':user']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.users)[':user']['$patch']>,
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
    const mutationDefaults = getPatchApiUsersUserMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiUsersUserLinkedIdentitiesQueryKey(
  args: InferRequestType<(typeof client.api.users)[':user']['linkedIdentities']['$get']>,
) {
  return ['api', '/api/users/:user/linkedIdentities', args] as const
}

export function getApiUsersUserLinkedIdentitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':user']['linkedIdentities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':user']['linkedIdentities']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersUserLinkedIdentitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':user'].linkedIdentities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersUserLinkedIdentities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':user']['linkedIdentities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':user']['linkedIdentities']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiUsersUserLinkedIdentitiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiUsersUserLinkedIdentities<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiUsersUserLinkedIdentitiesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiUsersUserLinkedIdentitiesLinkedIdentityQueryKey(
  args: InferRequestType<
    (typeof client.api.users)[':user']['linkedIdentities'][':linkedIdentity']['$get']
  >,
) {
  return ['api', '/api/users/:user/linkedIdentities/:linkedIdentity', args] as const
}

export function getApiUsersUserLinkedIdentitiesLinkedIdentityQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.users)[':user']['linkedIdentities'][':linkedIdentity']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersUserLinkedIdentitiesLinkedIdentityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':user'].linkedIdentities[':linkedIdentity'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersUserLinkedIdentitiesLinkedIdentity<
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
  args: () => InferRequestType<
    (typeof client.api.users)[':user']['linkedIdentities'][':linkedIdentity']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiUsersUserLinkedIdentitiesLinkedIdentityQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteApiUsersUserLinkedIdentitiesLinkedIdentity<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiUsersUserLinkedIdentitiesLinkedIdentityMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiUsersUserNotificationsQueryKey(
  args: InferRequestType<(typeof client.api.users)[':user']['notifications']['$get']>,
) {
  return ['api', '/api/users/:user/notifications', args] as const
}

export function getApiUsersUserNotificationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':user']['notifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':user']['notifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersUserNotificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':user'].notifications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersUserNotifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':user']['notifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':user']['notifications']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiUsersUserNotificationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteApiUsersUserNotificationsNotification<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiUsersUserNotificationsNotificationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchApiUsersUserNotificationsNotification<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiUsersUserNotificationsNotificationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiUsersUserPersonalAccessTokensQueryKey(
  args: InferRequestType<(typeof client.api.users)[':user']['personalAccessTokens']['$get']>,
) {
  return ['api', '/api/users/:user/personalAccessTokens', args] as const
}

export function getApiUsersUserPersonalAccessTokensQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':user']['personalAccessTokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':user']['personalAccessTokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersUserPersonalAccessTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':user'].personalAccessTokens.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersUserPersonalAccessTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':user']['personalAccessTokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':user']['personalAccessTokens']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiUsersUserPersonalAccessTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiUsersUserPersonalAccessTokensQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiUsersUserPersonalAccessTokens<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiUsersUserPersonalAccessTokensMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiUsersUserPersonalAccessTokensPersonalAccessToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApiUsersUserPersonalAccessTokensPersonalAccessTokenMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiUsersUserSettingsQueryKey(
  args: InferRequestType<(typeof client.api.users)[':user']['settings']['$get']>,
) {
  return ['api', '/api/users/:user/settings', args] as const
}

export function getApiUsersUserSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':user']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':user']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersUserSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':user'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersUserSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':user']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':user']['settings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiUsersUserSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiUsersUserSettingsSettingQueryKey(
  args: InferRequestType<(typeof client.api.users)[':user']['settings'][':setting']['$get']>,
) {
  return ['api', '/api/users/:user/settings/:setting', args] as const
}

export function getApiUsersUserSettingsSettingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':user']['settings'][':setting']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':user']['settings'][':setting']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersUserSettingsSettingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':user'].settings[':setting'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersUserSettingsSetting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':user']['settings'][':setting']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':user']['settings'][':setting']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiUsersUserSettingsSettingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiUsersUserSettingsSettingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchApiUsersUserSettingsSetting<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiUsersUserSettingsSettingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiUsersUserSpaceInvitationsQueryKey(
  args: InferRequestType<(typeof client.api.users)[':user']['spaceInvitations']['$get']>,
) {
  return ['api', '/api/users/:user/spaceInvitations', args] as const
}

export function getApiUsersUserSpaceInvitationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':user']['spaceInvitations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':user']['spaceInvitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersUserSpaceInvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':user'].spaceInvitations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersUserSpaceInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':user']['spaceInvitations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':user']['spaceInvitations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiUsersUserSpaceInvitationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiUsersUserStatsQueryKey(
  args: InferRequestType<(typeof client.api.users)[':user']['stats']['$get']>,
) {
  return ['api', '/api/users/:user/stats', args] as const
}

export function getApiUsersUserStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':user']['stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':user']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersUserStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':user'].stats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersUserStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':user']['stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':user']['stats']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUsersUserStatsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiUsersUserUsageQueryKey(
  args: InferRequestType<(typeof client.api.users)[':user']['usage']['$get']>,
) {
  return ['api', '/api/users/:user/usage', args] as const
}

export function getApiUsersUserUsageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':user']['usage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':user']['usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersUserUsageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':user'].usage.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersUserUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':user']['usage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':user']['usage']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUsersUserUsageQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiUsersUserViewsQueryKey(
  args: InferRequestType<(typeof client.api.users)[':user']['views']['$get']>,
) {
  return ['api', '/api/users/:user/views', args] as const
}

export function getApiUsersUserViewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':user']['views']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':user']['views']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersUserViewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':user'].views.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersUserViews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':user']['views']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':user']['views']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUsersUserViewsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiUsersUserViews<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiUsersUserViewsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiUsersUserViewsViewQueryKey(
  args: InferRequestType<(typeof client.api.users)[':user']['views'][':view']['$get']>,
) {
  return ['api', '/api/users/:user/views/:view', args] as const
}

export function getApiUsersUserViewsViewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':user']['views'][':view']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':user']['views'][':view']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersUserViewsViewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':user'].views[':view'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersUserViewsView<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':user']['views'][':view']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':user']['views'][':view']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiUsersUserViewsViewQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteApiUsersUserViewsView<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiUsersUserViewsViewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchApiUsersUserViewsView<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiUsersUserViewsViewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiUsersUserViewsReorder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiUsersUserViewsReorderMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiUsersUserWebhooksQueryKey(
  args: InferRequestType<(typeof client.api.users)[':user']['webhooks']['$get']>,
) {
  return ['api', '/api/users/:user/webhooks', args] as const
}

export function getApiUsersUserWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':user']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':user']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersUserWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':user'].webhooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersUserWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':user']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':user']['webhooks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiUsersUserWebhooksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiUsersUserWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiUsersUserWebhooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiUsersUserWebhooksWebhook<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiUsersUserWebhooksWebhookMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchApiUsersUserWebhooksWebhook<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiUsersUserWebhooksWebhookMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiUsersUserWebhooksWebhookGetSigningSecretQueryKey(
  args: InferRequestType<
    (typeof client.api.users)[':user']['webhooks'][':webhook:getSigningSecret']['$get']
  >,
) {
  return ['api', '/api/users/:user/webhooks/:webhook:getSigningSecret', args] as const
}

export function getApiUsersUserWebhooksWebhookGetSigningSecretQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.users)[':user']['webhooks'][':webhook:getSigningSecret']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersUserWebhooksWebhookGetSigningSecretQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':user'].webhooks[':webhook:getSigningSecret'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersUserWebhooksWebhookGetSigningSecret<
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
  args: () => InferRequestType<
    (typeof client.api.users)[':user']['webhooks'][':webhook:getSigningSecret']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiUsersUserWebhooksWebhookGetSigningSecretQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiUsersUserGetStatsQueryKey(
  args: InferRequestType<(typeof client.api.users)[':user:getStats']['$get']>,
) {
  return ['api', '/api/users/:user:getStats', args] as const
}

export function getApiUsersUserGetStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':user:getStats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':user:getStats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersUserGetStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':user:getStats'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersUserGetStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':user:getStats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':user:getStats']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiUsersUserGetStatsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiUsersUserImportMemos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiUsersUserImportMemosMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiUsersBatchGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiUsersBatchGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
