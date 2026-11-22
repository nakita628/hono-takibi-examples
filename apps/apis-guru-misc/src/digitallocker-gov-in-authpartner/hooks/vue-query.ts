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

export function getAccountKey() {
  return ['account'] as const
}

export function getOauth2Key() {
  return ['oauth2'] as const
}

export function getSignupKey() {
  return ['signup'] as const
}

export function getStatisticsKey() {
  return ['statistics'] as const
}

export function getPostAccount1PushuriMutationKey() {
  return ['account', '/account/1/pushuri', 'POST'] as const
}

export function getPostAccount1PushuriMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)['1']['pushuri']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['1']['pushuri']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccount1PushuriMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account)['1']['pushuri']['$post']>) {
      return parseResponse(client.account['1'].pushuri.$post(args, options))
    },
  })
}

export function usePostAccount1Pushuri<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['1']['pushuri']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account)['1']['pushuri']['$post']>,
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
  const mutationDefaults = getPostAccount1PushuriMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccount2VerifyMutationKey() {
  return ['account', '/account/2/verify', 'POST'] as const
}

export function getPostAccount2VerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)['2']['verify']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['2']['verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccount2VerifyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account)['2']['verify']['$post']>) {
      return parseResponse(client.account['2'].verify.$post(args, options))
    },
  })
}

export function usePostAccount2Verify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['2']['verify']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account)['2']['verify']['$post']>,
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
  const mutationDefaults = getPostAccount2VerifyMutationOptions<TError, TOnMutateResult>(
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

export function getOauth21AuthorizeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oauth2)['1']['authorize']['$get']>>,
) {
  return ['oauth2', '/oauth2/1/authorize', toValue(args)] as const
}

export function getOauth21AuthorizeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oauth2)['1']['authorize']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOauth21AuthorizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth2['1'].authorize.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauth21Authorize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['1']['authorize']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oauth2)['1']['authorize']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['1']['authorize']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['1']['authorize']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOauth21AuthorizeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['1']['authorize']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauth21AuthorizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOauth21AuthorizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth2['1'].authorize.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOauth21CodeMutationKey() {
  return ['oauth2', '/oauth2/1/code', 'POST'] as const
}

export function getPostOauth21CodeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['1']['code']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.oauth2)['1']['code']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth21CodeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.oauth2)['1']['code']['$post']>) {
      return parseResponse(client.oauth2['1'].code.$post(args, options))
    },
  })
}

export function usePostOauth21Code<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['1']['code']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.oauth2)['1']['code']['$post']>,
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
  const mutationDefaults = getPostOauth21CodeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostOauth21FileUploadMutationKey() {
  return ['oauth2', '/oauth2/1/file/upload', 'POST'] as const
}

export function getPostOauth21FileUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth2)['1']['file']['upload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.oauth2)['1']['file']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth21FileUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.oauth2)['1']['file']['upload']['$post']>,
    ) {
      return parseResponse(client.oauth2['1'].file.upload.$post(args, options))
    },
  })
}

export function usePostOauth21FileUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['1']['file']['upload']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.oauth2)['1']['file']['upload']['$post']>,
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
  const mutationDefaults = getPostOauth21FileUploadMutationOptions<TError, TOnMutateResult>(
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

export function getOauth21FileUriQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oauth2)['1']['file'][':uri']['$get']>>,
) {
  return ['oauth2', '/oauth2/1/file/:uri', toValue(args)] as const
}

export function getOauth21FileUriQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oauth2)['1']['file'][':uri']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOauth21FileUriQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth2['1'].file[':uri'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauth21FileUri<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['1']['file'][':uri']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oauth2)['1']['file'][':uri']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['1']['file'][':uri']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['1']['file'][':uri']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOauth21FileUriQueryKey>
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
          Awaited<ReturnType<(typeof client.oauth2)['1']['file'][':uri']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauth21FileUriQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOauth21FileUriQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth2['1'].file[':uri'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOauth21FilesIndexQueryKey() {
  return ['oauth2', '/oauth2/1/files/'] as const
}

export function getOauth21FilesIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOauth21FilesIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth2['1'].files.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauth21FilesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.oauth2)['1']['files']['index']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client.oauth2)['1']['files']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['1']['files']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOauth21FilesIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.oauth2)['1']['files']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauth21FilesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOauth21FilesIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth2['1'].files.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOauth21FilesIssuedQueryKey() {
  return ['oauth2', '/oauth2/1/files/issued'] as const
}

export function getOauth21FilesIssuedQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOauth21FilesIssuedQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth2['1'].files.issued.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauth21FilesIssued<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.oauth2)['1']['files']['issued']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client.oauth2)['1']['files']['issued']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['1']['files']['issued']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOauth21FilesIssuedQueryKey>
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
          Awaited<ReturnType<(typeof client.oauth2)['1']['files']['issued']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauth21FilesIssuedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOauth21FilesIssuedQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth2['1'].files.issued.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOauth21FilesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oauth2)['1']['files'][':id']['$get']>>,
) {
  return ['oauth2', '/oauth2/1/files/:id', toValue(args)] as const
}

export function getOauth21FilesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oauth2)['1']['files'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOauth21FilesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth2['1'].files[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauth21FilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['1']['files'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oauth2)['1']['files'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['1']['files'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['1']['files'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOauth21FilesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.oauth2)['1']['files'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauth21FilesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOauth21FilesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth2['1'].files[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOauth21PullDoctypeMutationKey() {
  return ['oauth2', '/oauth2/1/pull/doctype', 'POST'] as const
}

export function getPostOauth21PullDoctypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth2)['1']['pull']['doctype']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.oauth2)['1']['pull']['doctype']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth21PullDoctypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.oauth2)['1']['pull']['doctype']['$post']>,
    ) {
      return parseResponse(client.oauth2['1'].pull.doctype.$post(args, options))
    },
  })
}

export function usePostOauth21PullDoctype<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['1']['pull']['doctype']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.oauth2)['1']['pull']['doctype']['$post']>,
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
  const mutationDefaults = getPostOauth21PullDoctypeMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauth21PullIssuersMutationKey() {
  return ['oauth2', '/oauth2/1/pull/issuers', 'POST'] as const
}

export function getPostOauth21PullIssuersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth2)['1']['pull']['issuers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.oauth2)['1']['pull']['issuers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth21PullIssuersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.oauth2)['1']['pull']['issuers']['$post']>,
    ) {
      return parseResponse(client.oauth2['1'].pull.issuers.$post(args, options))
    },
  })
}

export function usePostOauth21PullIssuers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['1']['pull']['issuers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.oauth2)['1']['pull']['issuers']['$post']>,
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
  const mutationDefaults = getPostOauth21PullIssuersMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauth21PullParametersMutationKey() {
  return ['oauth2', '/oauth2/1/pull/parameters', 'POST'] as const
}

export function getPostOauth21PullParametersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth2)['1']['pull']['parameters']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.oauth2)['1']['pull']['parameters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth21PullParametersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.oauth2)['1']['pull']['parameters']['$post']>,
    ) {
      return parseResponse(client.oauth2['1'].pull.parameters.$post(args, options))
    },
  })
}

export function usePostOauth21PullParameters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['1']['pull']['parameters']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.oauth2)['1']['pull']['parameters']['$post']>,
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
  const mutationDefaults = getPostOauth21PullParametersMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauth21PullPulldocumentMutationKey() {
  return ['oauth2', '/oauth2/1/pull/pulldocument', 'POST'] as const
}

export function getPostOauth21PullPulldocumentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth2)['1']['pull']['pulldocument']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.oauth2)['1']['pull']['pulldocument']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth21PullPulldocumentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.oauth2)['1']['pull']['pulldocument']['$post']>,
    ) {
      return parseResponse(client.oauth2['1'].pull.pulldocument.$post(args, options))
    },
  })
}

export function usePostOauth21PullPulldocument<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['1']['pull']['pulldocument']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.oauth2)['1']['pull']['pulldocument']['$post']>,
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
  const mutationDefaults = getPostOauth21PullPulldocumentMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauth21RevokeMutationKey() {
  return ['oauth2', '/oauth2/1/revoke', 'POST'] as const
}

export function getPostOauth21RevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['1']['revoke']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.oauth2)['1']['revoke']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth21RevokeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.oauth2)['1']['revoke']['$post']>) {
      return parseResponse(client.oauth2['1'].revoke.$post(args, options))
    },
  })
}

export function usePostOauth21Revoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['1']['revoke']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.oauth2)['1']['revoke']['$post']>,
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
  const mutationDefaults = getPostOauth21RevokeMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauth21TokenMutationKey() {
  return ['oauth2', '/oauth2/1/token', 'POST'] as const
}

export function getPostOauth21TokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['1']['token']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.oauth2)['1']['token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth21TokenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.oauth2)['1']['token']['$post']>) {
      return parseResponse(client.oauth2['1'].token.$post(args, options))
    },
  })
}

export function usePostOauth21Token<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['1']['token']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.oauth2)['1']['token']['$post']>,
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
  const mutationDefaults = getPostOauth21TokenMutationOptions<TError, TOnMutateResult>(
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

export function getOauth21UserQueryKey() {
  return ['oauth2', '/oauth2/1/user'] as const
}

export function getOauth21UserQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOauth21UserQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth2['1'].user.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOauth21User<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['1']['user']['$get']>>>
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
              typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['1']['user']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['1']['user']['$get']>>>
            >
          >,
          ReturnType<typeof getOauth21UserQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['1']['user']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauth21UserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOauth21UserQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth2['1'].user.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOauth21XmlUriQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oauth2)['1']['xml'][':uri']['$get']>>,
) {
  return ['oauth2', '/oauth2/1/xml/:uri', toValue(args)] as const
}

export function getOauth21XmlUriQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oauth2)['1']['xml'][':uri']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOauth21XmlUriQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth2['1'].xml[':uri'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauth21XmlUri<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['1']['xml'][':uri']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oauth2)['1']['xml'][':uri']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['1']['xml'][':uri']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['1']['xml'][':uri']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOauth21XmlUriQueryKey>
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
          Awaited<ReturnType<(typeof client.oauth2)['1']['xml'][':uri']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauth21XmlUriQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOauth21XmlUriQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth2['1'].xml[':uri'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOauth22FilesIssuedQueryKey() {
  return ['oauth2', '/oauth2/2/files/issued'] as const
}

export function getOauth22FilesIssuedQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOauth22FilesIssuedQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth2['2'].files.issued.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauth22FilesIssued<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.oauth2)['2']['files']['issued']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client.oauth2)['2']['files']['issued']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['2']['files']['issued']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOauth22FilesIssuedQueryKey>
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
          Awaited<ReturnType<(typeof client.oauth2)['2']['files']['issued']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauth22FilesIssuedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOauth22FilesIssuedQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth2['2'].files.issued.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOauth22XmlEaadhaarQueryKey() {
  return ['oauth2', '/oauth2/2/xml/eaadhaar'] as const
}

export function getOauth22XmlEaadhaarQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOauth22XmlEaadhaarQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth2['2'].xml.eaadhaar.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauth22XmlEaadhaar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.oauth2)['2']['xml']['eaadhaar']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client.oauth2)['2']['xml']['eaadhaar']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['2']['xml']['eaadhaar']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOauth22XmlEaadhaarQueryKey>
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
          Awaited<ReturnType<(typeof client.oauth2)['2']['xml']['eaadhaar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauth22XmlEaadhaarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOauth22XmlEaadhaarQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth2['2'].xml.eaadhaar.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSignup1DemoauthverifyMutationKey() {
  return ['signup', '/signup/1/demoauthverify', 'POST'] as const
}

export function getPostSignup1DemoauthverifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.signup)['1']['demoauthverify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.signup)['1']['demoauthverify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSignup1DemoauthverifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.signup)['1']['demoauthverify']['$post']>,
    ) {
      return parseResponse(client.signup['1'].demoauthverify.$post(args, options))
    },
  })
}

export function usePostSignup1Demoauthverify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.signup)['1']['demoauthverify']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.signup)['1']['demoauthverify']['$post']>,
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
  const mutationDefaults = getPostSignup1DemoauthverifyMutationOptions<TError, TOnMutateResult>(
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

export function getPostSignup2DemoauthMutationKey() {
  return ['signup', '/signup/2/demoauth', 'POST'] as const
}

export function getPostSignup2DemoauthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.signup)['2']['demoauth']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.signup)['2']['demoauth']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSignup2DemoauthMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.signup)['2']['demoauth']['$post']>) {
      return parseResponse(client.signup['2'].demoauth.$post(args, options))
    },
  })
}

export function usePostSignup2Demoauth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.signup)['2']['demoauth']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.signup)['2']['demoauth']['$post']>,
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
  const mutationDefaults = getPostSignup2DemoauthMutationOptions<TError, TOnMutateResult>(
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

export function getPostStatistics1CountsMutationKey() {
  return ['statistics', '/statistics/1/counts', 'POST'] as const
}

export function getPostStatistics1CountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.statistics)['1']['counts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.statistics)['1']['counts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStatistics1CountsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.statistics)['1']['counts']['$post']>) {
      return parseResponse(client.statistics['1'].counts.$post(args, options))
    },
  })
}

export function usePostStatistics1Counts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.statistics)['1']['counts']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.statistics)['1']['counts']['$post']>,
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
  const mutationDefaults = getPostStatistics1CountsMutationOptions<TError, TOnMutateResult>(
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
