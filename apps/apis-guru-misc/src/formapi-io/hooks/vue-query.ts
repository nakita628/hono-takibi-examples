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

export function getAuthenticationKey() {
  return ['authentication'] as const
}

export function getCombinedSubmissionsKey() {
  return ['combined_submissions'] as const
}

export function getCombinedSubmissionsV_2Key() {
  return ['combined_submissions?v=2'] as const
}

export function getCustomFilesKey() {
  return ['custom_files'] as const
}

export function getDataRequestsKey() {
  return ['data_requests'] as const
}

export function getFoldersKey() {
  return ['folders'] as const
}

export function getSubmissionsKey() {
  return ['submissions'] as const
}

export function getTemplatesKey() {
  return ['templates'] as const
}

export function getTemplatesDescCachedUploadKey() {
  return ['templates?desc=cached_upload'] as const
}

export function getTemplatesDescHtmlKey() {
  return ['templates?desc=html'] as const
}

export function getUploadsKey() {
  return ['uploads'] as const
}

export function getAuthenticationQueryKey() {
  return ['authentication', '/authentication'] as const
}

export function getAuthenticationQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthenticationQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authentication.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAuthentication<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authentication.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authentication.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authentication.$get>>>>
          >,
          ReturnType<typeof getAuthenticationQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authentication.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthenticationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthenticationQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.authentication.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCombinedSubmissionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.combined_submissions.$get>>,
) {
  return ['combined_submissions', '/combined_submissions', toValue(args)] as const
}

export function getCombinedSubmissionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.combined_submissions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCombinedSubmissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.combined_submissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCombinedSubmissions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.combined_submissions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.combined_submissions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.combined_submissions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.combined_submissions.$get>>>
            >
          >,
          ReturnType<typeof getCombinedSubmissionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.combined_submissions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCombinedSubmissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCombinedSubmissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.combined_submissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCombinedSubmissionsMutationKey() {
  return ['combined_submissions', '/combined_submissions', 'POST'] as const
}

export function getPostCombinedSubmissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.combined_submissions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.combined_submissions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCombinedSubmissionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.combined_submissions.$post>) {
      return parseResponse(client.combined_submissions.$post(args, options))
    },
  })
}

export function usePostCombinedSubmissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.combined_submissions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.combined_submissions.$post>,
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
  const mutationDefaults = getPostCombinedSubmissionsMutationOptions<TError, TOnMutateResult>(
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

export function getCombinedSubmissionsCombinedSubmissionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.combined_submissions)[':combined_submission_id']['$get']>
  >,
) {
  return [
    'combined_submissions',
    '/combined_submissions/:combined_submission_id',
    toValue(args),
  ] as const
}

export function getCombinedSubmissionsCombinedSubmissionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.combined_submissions)[':combined_submission_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCombinedSubmissionsCombinedSubmissionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.combined_submissions[':combined_submission_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCombinedSubmissionsCombinedSubmissionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.combined_submissions)[':combined_submission_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.combined_submissions)[':combined_submission_id']['$get']>
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
                    (typeof client.combined_submissions)[':combined_submission_id']['$get']
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
                    (typeof client.combined_submissions)[':combined_submission_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCombinedSubmissionsCombinedSubmissionIdQueryKey>
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
            ReturnType<(typeof client.combined_submissions)[':combined_submission_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCombinedSubmissionsCombinedSubmissionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCombinedSubmissionsCombinedSubmissionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.combined_submissions[':combined_submission_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCombinedSubmissionsCombinedSubmissionIdMutationKey() {
  return [
    'combined_submissions',
    '/combined_submissions/:combined_submission_id',
    'DELETE',
  ] as const
}

export function getDeleteCombinedSubmissionsCombinedSubmissionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.combined_submissions)[':combined_submission_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.combined_submissions)[':combined_submission_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCombinedSubmissionsCombinedSubmissionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.combined_submissions)[':combined_submission_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.combined_submissions[':combined_submission_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCombinedSubmissionsCombinedSubmissionId<
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
                    (typeof client.combined_submissions)[':combined_submission_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.combined_submissions)[':combined_submission_id']['$delete']
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
  const mutationDefaults = getDeleteCombinedSubmissionsCombinedSubmissionIdMutationOptions<
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

export function getPostCombinedSubmissionsV2MutationKey() {
  return ['combined_submissions?v=2', '/combined_submissions?v=2', 'POST'] as const
}

export function getPostCombinedSubmissionsV2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['combined_submissions?v=2']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['combined_submissions?v=2']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCombinedSubmissionsV2MutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['combined_submissions?v=2']['$post']>) {
      return parseResponse(client['combined_submissions?v=2'].$post(args, options))
    },
  })
}

export function usePostCombinedSubmissionsV2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['combined_submissions?v=2']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['combined_submissions?v=2']['$post']>,
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
  const mutationDefaults = getPostCombinedSubmissionsV2MutationOptions<TError, TOnMutateResult>(
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

export function getPostCustomFilesMutationKey() {
  return ['custom_files', '/custom_files', 'POST'] as const
}

export function getPostCustomFilesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_files.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.custom_files.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomFilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.custom_files.$post>) {
      return parseResponse(client.custom_files.$post(args, options))
    },
  })
}

export function usePostCustomFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_files.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.custom_files.$post>,
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
  const mutationDefaults = getPostCustomFilesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDataRequestsDataRequestIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.data_requests)[':data_request_id']['$get']>
  >,
) {
  return ['data_requests', '/data_requests/:data_request_id', toValue(args)] as const
}

export function getDataRequestsDataRequestIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.data_requests)[':data_request_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataRequestsDataRequestIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data_requests[':data_request_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataRequestsDataRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data_requests)[':data_request_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.data_requests)[':data_request_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.data_requests)[':data_request_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.data_requests)[':data_request_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataRequestsDataRequestIdQueryKey>
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
          Awaited<ReturnType<(typeof client.data_requests)[':data_request_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataRequestsDataRequestIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataRequestsDataRequestIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data_requests[':data_request_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDataRequestsDataRequestIdMutationKey() {
  return ['data_requests', '/data_requests/:data_request_id', 'PUT'] as const
}

export function getPutDataRequestsDataRequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.data_requests)[':data_request_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.data_requests)[':data_request_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDataRequestsDataRequestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.data_requests)[':data_request_id']['$put']>,
    ) {
      return parseResponse(client.data_requests[':data_request_id'].$put(args, options))
    },
  })
}

export function usePutDataRequestsDataRequestId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.data_requests)[':data_request_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.data_requests)[':data_request_id']['$put']>,
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
  const mutationDefaults = getPutDataRequestsDataRequestIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostDataRequestsDataRequestIdTokensMutationKey() {
  return ['data_requests', '/data_requests/:data_request_id/tokens', 'POST'] as const
}

export function getPostDataRequestsDataRequestIdTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.data_requests)[':data_request_id']['tokens']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.data_requests)[':data_request_id']['tokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataRequestsDataRequestIdTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.data_requests)[':data_request_id']['tokens']['$post']>,
    ) {
      return parseResponse(client.data_requests[':data_request_id'].tokens.$post(args, options))
    },
  })
}

export function usePostDataRequestsDataRequestIdTokens<
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
                  ReturnType<(typeof client.data_requests)[':data_request_id']['tokens']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.data_requests)[':data_request_id']['tokens']['$post']>,
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
  const mutationDefaults = getPostDataRequestsDataRequestIdTokensMutationOptions<
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

export function getFoldersIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.folders.index.$get>>,
) {
  return ['folders', '/folders/', toValue(args)] as const
}

export function getFoldersIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.folders.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoldersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.folders.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoldersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.folders.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.index.$get>>>>
          >,
          ReturnType<typeof getFoldersIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoldersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.folders.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFoldersIndexMutationKey() {
  return ['folders', '/folders/', 'POST'] as const
}

export function getPostFoldersIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.folders.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFoldersIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.folders.index.$post>) {
      return parseResponse(client.folders.index.$post(args, options))
    },
  })
}

export function usePostFoldersIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.folders.index.$post>,
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
  const mutationDefaults = getPostFoldersIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteFoldersFolderIdMutationKey() {
  return ['folders', '/folders/:folder_id', 'DELETE'] as const
}

export function getDeleteFoldersFolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.folders)[':folder_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFoldersFolderIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.folders)[':folder_id']['$delete']>) {
      return parseResponse(client.folders[':folder_id'].$delete(args, options))
    },
  })
}

export function useDeleteFoldersFolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.folders)[':folder_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.folders)[':folder_id']['$delete']>,
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
  const mutationDefaults = getDeleteFoldersFolderIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostFoldersFolderIdMoveMutationKey() {
  return ['folders', '/folders/:folder_id/move', 'POST'] as const
}

export function getPostFoldersFolderIdMoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.folders)[':folder_id']['move']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.folders)[':folder_id']['move']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFoldersFolderIdMoveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.folders)[':folder_id']['move']['$post']>,
    ) {
      return parseResponse(client.folders[':folder_id'].move.$post(args, options))
    },
  })
}

export function usePostFoldersFolderIdMove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.folders)[':folder_id']['move']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.folders)[':folder_id']['move']['$post']>,
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
  const mutationDefaults = getPostFoldersFolderIdMoveMutationOptions<TError, TOnMutateResult>(
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

export function getPostFoldersFolderIdRenameMutationKey() {
  return ['folders', '/folders/:folder_id/rename', 'POST'] as const
}

export function getPostFoldersFolderIdRenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.folders)[':folder_id']['rename']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.folders)[':folder_id']['rename']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFoldersFolderIdRenameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.folders)[':folder_id']['rename']['$post']>,
    ) {
      return parseResponse(client.folders[':folder_id'].rename.$post(args, options))
    },
  })
}

export function usePostFoldersFolderIdRename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.folders)[':folder_id']['rename']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.folders)[':folder_id']['rename']['$post']>,
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
  const mutationDefaults = getPostFoldersFolderIdRenameMutationOptions<TError, TOnMutateResult>(
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

export function getSubmissionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.submissions.$get>>,
) {
  return ['submissions', '/submissions', toValue(args)] as const
}

export function getSubmissionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.submissions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubmissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.submissions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSubmissions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.submissions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.submissions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.submissions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.submissions.$get>>>>
          >,
          ReturnType<typeof getSubmissionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.submissions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSubmissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubmissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.submissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSubmissionsBatchesMutationKey() {
  return ['submissions', '/submissions/batches', 'POST'] as const
}

export function getPostSubmissionsBatchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.submissions.batches.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.submissions.batches.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSubmissionsBatchesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.submissions.batches.$post>) {
      return parseResponse(client.submissions.batches.$post(args, options))
    },
  })
}

export function usePostSubmissionsBatches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.submissions.batches.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.submissions.batches.$post>,
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
  const mutationDefaults = getPostSubmissionsBatchesMutationOptions<TError, TOnMutateResult>(
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

export function getSubmissionsBatchesSubmissionBatchIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.submissions.batches)[':submission_batch_id']['$get']>
  >,
) {
  return ['submissions', '/submissions/batches/:submission_batch_id', toValue(args)] as const
}

export function getSubmissionsBatchesSubmissionBatchIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.submissions.batches)[':submission_batch_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubmissionsBatchesSubmissionBatchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.submissions.batches[':submission_batch_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubmissionsBatchesSubmissionBatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.submissions.batches)[':submission_batch_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.submissions.batches)[':submission_batch_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.submissions.batches)[':submission_batch_id']['$get']>
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
                  ReturnType<(typeof client.submissions.batches)[':submission_batch_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSubmissionsBatchesSubmissionBatchIdQueryKey>
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
          Awaited<ReturnType<(typeof client.submissions.batches)[':submission_batch_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubmissionsBatchesSubmissionBatchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubmissionsBatchesSubmissionBatchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.submissions.batches[':submission_batch_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubmissionsSubmissionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.submissions)[':submission_id']['$get']>>,
) {
  return ['submissions', '/submissions/:submission_id', toValue(args)] as const
}

export function getSubmissionsSubmissionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.submissions)[':submission_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubmissionsSubmissionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.submissions[':submission_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubmissionsSubmissionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.submissions)[':submission_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.submissions)[':submission_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.submissions)[':submission_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.submissions)[':submission_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSubmissionsSubmissionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.submissions)[':submission_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubmissionsSubmissionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubmissionsSubmissionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.submissions[':submission_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSubmissionsSubmissionIdMutationKey() {
  return ['submissions', '/submissions/:submission_id', 'DELETE'] as const
}

export function getDeleteSubmissionsSubmissionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.submissions)[':submission_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.submissions)[':submission_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSubmissionsSubmissionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.submissions)[':submission_id']['$delete']>,
    ) {
      return parseResponse(client.submissions[':submission_id'].$delete(args, options))
    },
  })
}

export function useDeleteSubmissionsSubmissionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.submissions)[':submission_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.submissions)[':submission_id']['$delete']>,
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
  const mutationDefaults = getDeleteSubmissionsSubmissionIdMutationOptions<TError, TOnMutateResult>(
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

export function getTemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.$get>>,
) {
  return ['templates', '/templates', toValue(args)] as const
}

export function getTemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
          >,
          ReturnType<typeof getTemplatesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTemplatesMutationKey() {
  return ['templates', '/templates', 'POST'] as const
}

export function getPostTemplatesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$post>>>>>,
    TError,
    InferRequestType<typeof client.templates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.templates.$post>) {
      return parseResponse(client.templates.$post(args, options))
    },
  })
}

export function usePostTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.templates.$post>,
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
  const mutationDefaults = getPostTemplatesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTemplatesTemplateIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.templates)[':template_id']['$get']>>,
) {
  return ['templates', '/templates/:template_id', toValue(args)] as const
}

export function getTemplatesTemplateIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.templates)[':template_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplatesTemplateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates[':template_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':template_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.templates)[':template_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':template_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':template_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTemplatesTemplateIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':template_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesTemplateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplatesTemplateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.templates[':template_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTemplatesTemplateIdMutationKey() {
  return ['templates', '/templates/:template_id', 'PUT'] as const
}

export function getPutTemplatesTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':template_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':template_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTemplatesTemplateIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.templates)[':template_id']['$put']>) {
      return parseResponse(client.templates[':template_id'].$put(args, options))
    },
  })
}

export function usePutTemplatesTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':template_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.templates)[':template_id']['$put']>,
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
  const mutationDefaults = getPutTemplatesTemplateIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutTemplatesTemplateIdAddFieldsMutationKey() {
  return ['templates', '/templates/:template_id/add_fields', 'PUT'] as const
}

export function getPutTemplatesTemplateIdAddFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':template_id']['add_fields']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':template_id']['add_fields']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTemplatesTemplateIdAddFieldsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.templates)[':template_id']['add_fields']['$put']>,
    ) {
      return parseResponse(client.templates[':template_id'].add_fields.$put(args, options))
    },
  })
}

export function usePutTemplatesTemplateIdAddFields<
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
                Awaited<ReturnType<(typeof client.templates)[':template_id']['add_fields']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.templates)[':template_id']['add_fields']['$put']>,
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
  const mutationDefaults = getPutTemplatesTemplateIdAddFieldsMutationOptions<
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

export function getPostTemplatesTemplateIdCopyMutationKey() {
  return ['templates', '/templates/:template_id/copy', 'POST'] as const
}

export function getPostTemplatesTemplateIdCopyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':template_id']['copy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':template_id']['copy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesTemplateIdCopyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.templates)[':template_id']['copy']['$post']>,
    ) {
      return parseResponse(client.templates[':template_id'].copy.$post(args, options))
    },
  })
}

export function usePostTemplatesTemplateIdCopy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':template_id']['copy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.templates)[':template_id']['copy']['$post']>,
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
  const mutationDefaults = getPostTemplatesTemplateIdCopyMutationOptions<TError, TOnMutateResult>(
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

export function getPostTemplatesTemplateIdMoveMutationKey() {
  return ['templates', '/templates/:template_id/move', 'POST'] as const
}

export function getPostTemplatesTemplateIdMoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':template_id']['move']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':template_id']['move']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesTemplateIdMoveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.templates)[':template_id']['move']['$post']>,
    ) {
      return parseResponse(client.templates[':template_id'].move.$post(args, options))
    },
  })
}

export function usePostTemplatesTemplateIdMove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':template_id']['move']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.templates)[':template_id']['move']['$post']>,
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
  const mutationDefaults = getPostTemplatesTemplateIdMoveMutationOptions<TError, TOnMutateResult>(
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

export function getTemplatesTemplateIdSchemaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.templates)[':template_id']['schema']['$get']>
  >,
) {
  return ['templates', '/templates/:template_id/schema', toValue(args)] as const
}

export function getTemplatesTemplateIdSchemaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.templates)[':template_id']['schema']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplatesTemplateIdSchemaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates[':template_id'].schema.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTemplatesTemplateIdSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':template_id']['schema']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.templates)[':template_id']['schema']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':template_id']['schema']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':template_id']['schema']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTemplatesTemplateIdSchemaQueryKey>
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
          Awaited<ReturnType<(typeof client.templates)[':template_id']['schema']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesTemplateIdSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplatesTemplateIdSchemaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.templates[':template_id'].schema.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTemplatesTemplateIdSubmissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.templates)[':template_id']['submissions']['$get']>
  >,
) {
  return ['templates', '/templates/:template_id/submissions', toValue(args)] as const
}

export function getTemplatesTemplateIdSubmissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.templates)[':template_id']['submissions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplatesTemplateIdSubmissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates[':template_id'].submissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTemplatesTemplateIdSubmissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':template_id']['submissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.templates)[':template_id']['submissions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.templates)[':template_id']['submissions']['$get']>
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
                  ReturnType<(typeof client.templates)[':template_id']['submissions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTemplatesTemplateIdSubmissionsQueryKey>
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
          Awaited<ReturnType<(typeof client.templates)[':template_id']['submissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesTemplateIdSubmissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplatesTemplateIdSubmissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.templates[':template_id'].submissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTemplatesTemplateIdSubmissionsMutationKey() {
  return ['templates', '/templates/:template_id/submissions', 'POST'] as const
}

export function getPostTemplatesTemplateIdSubmissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':template_id']['submissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':template_id']['submissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesTemplateIdSubmissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.templates)[':template_id']['submissions']['$post']>,
    ) {
      return parseResponse(client.templates[':template_id'].submissions.$post(args, options))
    },
  })
}

export function usePostTemplatesTemplateIdSubmissions<
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
                  ReturnType<(typeof client.templates)[':template_id']['submissions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.templates)[':template_id']['submissions']['$post']>,
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
  const mutationDefaults = getPostTemplatesTemplateIdSubmissionsMutationOptions<
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

export function getPostTemplatesTemplateIdSubmissionsBatchMutationKey() {
  return ['templates', '/templates/:template_id/submissions/batch', 'POST'] as const
}

export function getPostTemplatesTemplateIdSubmissionsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.templates)[':template_id']['submissions']['batch']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':template_id']['submissions']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesTemplateIdSubmissionsBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.templates)[':template_id']['submissions']['batch']['$post']
      >,
    ) {
      return parseResponse(client.templates[':template_id'].submissions.batch.$post(args, options))
    },
  })
}

export function usePostTemplatesTemplateIdSubmissionsBatch<
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
                    (typeof client.templates)[':template_id']['submissions']['batch']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.templates)[':template_id']['submissions']['batch']['$post']
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
  const mutationDefaults = getPostTemplatesTemplateIdSubmissionsBatchMutationOptions<
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

export function getTemplatesTemplateIdFullTrueQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.templates)[':template_id?full=true']['$get']>
  >,
) {
  return ['templates', '/templates/:template_id?full=true', toValue(args)] as const
}

export function getTemplatesTemplateIdFullTrueQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.templates)[':template_id?full=true']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplatesTemplateIdFullTrueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates[':template_id?full=true'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTemplatesTemplateIdFullTrue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':template_id?full=true']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.templates)[':template_id?full=true']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':template_id?full=true']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':template_id?full=true']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTemplatesTemplateIdFullTrueQueryKey>
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
          Awaited<ReturnType<(typeof client.templates)[':template_id?full=true']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesTemplateIdFullTrueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplatesTemplateIdFullTrueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.templates[':template_id?full=true'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTemplatesDescCachedUploadMutationKey() {
  return ['templates?desc=cached_upload', '/templates?desc=cached_upload', 'POST'] as const
}

export function getPostTemplatesDescCachedUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['templates?desc=cached_upload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['templates?desc=cached_upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesDescCachedUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['templates?desc=cached_upload']['$post']>,
    ) {
      return parseResponse(client['templates?desc=cached_upload'].$post(args, options))
    },
  })
}

export function usePostTemplatesDescCachedUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['templates?desc=cached_upload']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['templates?desc=cached_upload']['$post']>,
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
  const mutationDefaults = getPostTemplatesDescCachedUploadMutationOptions<TError, TOnMutateResult>(
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

export function getPostTemplatesDescHtmlMutationKey() {
  return ['templates?desc=html', '/templates?desc=html', 'POST'] as const
}

export function getPostTemplatesDescHtmlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['templates?desc=html']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['templates?desc=html']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesDescHtmlMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['templates?desc=html']['$post']>) {
      return parseResponse(client['templates?desc=html'].$post(args, options))
    },
  })
}

export function usePostTemplatesDescHtml<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['templates?desc=html']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['templates?desc=html']['$post']>,
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
  const mutationDefaults = getPostTemplatesDescHtmlMutationOptions<TError, TOnMutateResult>(
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

export function getUploadsPresignQueryKey() {
  return ['uploads', '/uploads/presign'] as const
}

export function getUploadsPresignQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUploadsPresignQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.uploads.presign.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUploadsPresign<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.presign.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.uploads.presign.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.uploads.presign.$get>>>
            >
          >,
          ReturnType<typeof getUploadsPresignQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.presign.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUploadsPresignQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUploadsPresignQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.uploads.presign.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
