import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getAuthenticationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authentication.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authentication.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthenticationQueryKey>
  >({
    queryKey: getAuthenticationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.authentication.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAuthentication<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authentication.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authentication.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAuthenticationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthenticationQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getCombinedSubmissionsQueryKey(
  args: InferRequestType<typeof client.combined_submissions.$get>,
) {
  return ['combined_submissions', '/combined_submissions', args] as const
}

export function getCombinedSubmissionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.combined_submissions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.combined_submissions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.combined_submissions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCombinedSubmissionsQueryKey>
  >({
    queryKey: getCombinedSubmissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.combined_submissions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCombinedSubmissions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.combined_submissions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.combined_submissions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.combined_submissions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCombinedSubmissionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCombinedSubmissionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCombinedSubmissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.combined_submissions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.combined_submissions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCombinedSubmissionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCombinedSubmissionsCombinedSubmissionIdQueryKey(
  args: InferRequestType<(typeof client.combined_submissions)[':combined_submission_id']['$get']>,
) {
  return ['combined_submissions', '/combined_submissions/:combined_submission_id', args] as const
}

export function getCombinedSubmissionsCombinedSubmissionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.combined_submissions)[':combined_submission_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.combined_submissions)[':combined_submission_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCombinedSubmissionsCombinedSubmissionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.combined_submissions[':combined_submission_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCombinedSubmissionsCombinedSubmissionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.combined_submissions)[':combined_submission_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.combined_submissions)[':combined_submission_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCombinedSubmissionsCombinedSubmissionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteCombinedSubmissionsCombinedSubmissionId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCombinedSubmissionsCombinedSubmissionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCombinedSubmissionsV2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCombinedSubmissionsV2MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCustomFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_files.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.custom_files.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCustomFilesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDataRequestsDataRequestIdQueryKey(
  args: InferRequestType<(typeof client.data_requests)[':data_request_id']['$get']>,
) {
  return ['data_requests', '/data_requests/:data_request_id', args] as const
}

export function getDataRequestsDataRequestIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data_requests)[':data_request_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.data_requests)[':data_request_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDataRequestsDataRequestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data_requests[':data_request_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDataRequestsDataRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data_requests)[':data_request_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.data_requests)[':data_request_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDataRequestsDataRequestIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDataRequestsDataRequestId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDataRequestsDataRequestIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostDataRequestsDataRequestIdTokens<
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
                ReturnType<(typeof client.data_requests)[':data_request_id']['tokens']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.data_requests)[':data_request_id']['tokens']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDataRequestsDataRequestIdTokensMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFoldersIndexQueryKey(args: InferRequestType<typeof client.folders.index.$get>) {
  return ['folders', '/folders/', args] as const
}

export function getFoldersIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.folders.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersIndexQueryKey>
  >({
    queryKey: getFoldersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.folders.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFoldersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.folders.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFoldersIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFoldersIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostFoldersIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.folders.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFoldersIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteFoldersFolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFoldersFolderIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostFoldersFolderIdMove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFoldersFolderIdMoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostFoldersFolderIdRename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFoldersFolderIdRenameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSubmissionsQueryKey(args: InferRequestType<typeof client.submissions.$get>) {
  return ['submissions', '/submissions', args] as const
}

export function getSubmissionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.submissions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.submissions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.submissions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSubmissionsQueryKey>
  >({
    queryKey: getSubmissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.submissions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSubmissions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.submissions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.submissions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.submissions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSubmissionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSubmissionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSubmissionsBatches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.submissions.batches.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.submissions.batches.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSubmissionsBatchesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSubmissionsBatchesSubmissionBatchIdQueryKey(
  args: InferRequestType<(typeof client.submissions.batches)[':submission_batch_id']['$get']>,
) {
  return ['submissions', '/submissions/batches/:submission_batch_id', args] as const
}

export function getSubmissionsBatchesSubmissionBatchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.submissions.batches)[':submission_batch_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.submissions.batches)[':submission_batch_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSubmissionsBatchesSubmissionBatchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.submissions.batches[':submission_batch_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSubmissionsBatchesSubmissionBatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.submissions.batches)[':submission_batch_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.submissions.batches)[':submission_batch_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getSubmissionsBatchesSubmissionBatchIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSubmissionsBatchesSubmissionBatchIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSubmissionsSubmissionIdQueryKey(
  args: InferRequestType<(typeof client.submissions)[':submission_id']['$get']>,
) {
  return ['submissions', '/submissions/:submission_id', args] as const
}

export function getSubmissionsSubmissionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.submissions)[':submission_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.submissions)[':submission_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSubmissionsSubmissionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.submissions[':submission_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSubmissionsSubmissionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.submissions)[':submission_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.submissions)[':submission_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSubmissionsSubmissionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteSubmissionsSubmissionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSubmissionsSubmissionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTemplatesQueryKey(args: InferRequestType<typeof client.templates.$get>) {
  return ['templates', '/templates', args] as const
}

export function getTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.templates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTemplatesQueryKey>
  >({
    queryKey: getTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.templates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTemplatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.templates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTemplatesTemplateIdQueryKey(
  args: InferRequestType<(typeof client.templates)[':template_id']['$get']>,
) {
  return ['templates', '/templates/:template_id', args] as const
}

export function getTemplatesTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':template_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':template_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesTemplateIdQueryKey>
  >({
    queryKey: getTemplatesTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates[':template_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':template_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.templates)[':template_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.templates)[':template_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesTemplateIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTemplatesTemplateIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutTemplatesTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTemplatesTemplateIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutTemplatesTemplateIdAddFields<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTemplatesTemplateIdAddFieldsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostTemplatesTemplateIdCopy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesTemplateIdCopyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostTemplatesTemplateIdMove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesTemplateIdMoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTemplatesTemplateIdSchemaQueryKey(
  args: InferRequestType<(typeof client.templates)[':template_id']['schema']['$get']>,
) {
  return ['templates', '/templates/:template_id/schema', args] as const
}

export function getTemplatesTemplateIdSchemaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':template_id']['schema']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':template_id']['schema']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTemplatesTemplateIdSchemaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates[':template_id'].schema.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTemplatesTemplateIdSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':template_id']['schema']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.templates)[':template_id']['schema']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTemplatesTemplateIdSchemaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getTemplatesTemplateIdSubmissionsQueryKey(
  args: InferRequestType<(typeof client.templates)[':template_id']['submissions']['$get']>,
) {
  return ['templates', '/templates/:template_id/submissions', args] as const
}

export function getTemplatesTemplateIdSubmissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':template_id']['submissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':template_id']['submissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTemplatesTemplateIdSubmissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates[':template_id'].submissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTemplatesTemplateIdSubmissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':template_id']['submissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.templates)[':template_id']['submissions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTemplatesTemplateIdSubmissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostTemplatesTemplateIdSubmissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesTemplateIdSubmissionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostTemplatesTemplateIdSubmissionsBatch<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesTemplateIdSubmissionsBatchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTemplatesTemplateIdFullTrueQueryKey(
  args: InferRequestType<(typeof client.templates)[':template_id?full=true']['$get']>,
) {
  return ['templates', '/templates/:template_id?full=true', args] as const
}

export function getTemplatesTemplateIdFullTrueQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':template_id?full=true']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':template_id?full=true']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTemplatesTemplateIdFullTrueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates[':template_id?full=true'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTemplatesTemplateIdFullTrue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':template_id?full=true']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.templates)[':template_id?full=true']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTemplatesTemplateIdFullTrueQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostTemplatesDescCachedUpload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesDescCachedUploadMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostTemplatesDescHtml<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesDescHtmlMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUploadsPresignQueryKey() {
  return ['uploads', '/uploads/presign'] as const
}

export function getUploadsPresignQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.presign.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.presign.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUploadsPresignQueryKey>
  >({
    queryKey: getUploadsPresignQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.uploads.presign.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUploadsPresign<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.presign.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.presign.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUploadsPresignQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUploadsPresignQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}
