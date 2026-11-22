import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAuthenticationKey() {
  return ['authentication', '/authentication'] as const
}

export function useGetAuthentication<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authentication.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthenticationKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authentication.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authentication.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthentication<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authentication.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthenticationKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authentication.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authentication.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCombinedSubmissionsKey(
  args: InferRequestType<typeof client.combined_submissions.$get>,
) {
  return ['combined_submissions', '/combined_submissions', args] as const
}

export function useGetCombinedSubmissions<TError = unknown>(
  args: InferRequestType<typeof client.combined_submissions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.combined_submissions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCombinedSubmissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.combined_submissions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.combined_submissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCombinedSubmissions<TError = unknown>(
  args: InferRequestType<typeof client.combined_submissions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.combined_submissions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCombinedSubmissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.combined_submissions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.combined_submissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCombinedSubmissionsKey() {
  return ['combined_submissions', '/combined_submissions', 'POST'] as const
}

export function usePostCombinedSubmissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.combined_submissions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.combined_submissions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCombinedSubmissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.combined_submissions.$post> },
      ) => parseResponse(client.combined_submissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCombinedSubmissionsCombinedSubmissionIdKey(
  args: InferRequestType<(typeof client.combined_submissions)[':combined_submission_id']['$get']>,
) {
  return ['combined_submissions', '/combined_submissions/:combined_submission_id', args] as const
}

export function useGetCombinedSubmissionsCombinedSubmissionId<TError = unknown>(
  args: InferRequestType<(typeof client.combined_submissions)[':combined_submission_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.combined_submissions)[':combined_submission_id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCombinedSubmissionsCombinedSubmissionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.combined_submissions)[':combined_submission_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.combined_submissions[':combined_submission_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCombinedSubmissionsCombinedSubmissionId<TError = unknown>(
  args: InferRequestType<(typeof client.combined_submissions)[':combined_submission_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.combined_submissions)[':combined_submission_id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCombinedSubmissionsCombinedSubmissionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.combined_submissions)[':combined_submission_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.combined_submissions[':combined_submission_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCombinedSubmissionsCombinedSubmissionIdKey() {
  return [
    'combined_submissions',
    '/combined_submissions/:combined_submission_id',
    'DELETE',
  ] as const
}

export function useDeleteCombinedSubmissionsCombinedSubmissionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.combined_submissions)[':combined_submission_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCombinedSubmissionsCombinedSubmissionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.combined_submissions)[':combined_submission_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.combined_submissions[':combined_submission_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCombinedSubmissionsV2Key() {
  return ['combined_submissions?v=2', '/combined_submissions?v=2', 'POST'] as const
}

export function usePostCombinedSubmissionsV2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['combined_submissions?v=2']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['combined_submissions?v=2']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCombinedSubmissionsV2Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['combined_submissions?v=2']['$post']> },
      ) => parseResponse(client['combined_submissions?v=2'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCustomFilesKey() {
  return ['custom_files', '/custom_files', 'POST'] as const
}

export function usePostCustomFiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_files.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.custom_files.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomFilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.custom_files.$post> }) =>
        parseResponse(client.custom_files.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDataRequestsDataRequestIdKey(
  args: InferRequestType<(typeof client.data_requests)[':data_request_id']['$get']>,
) {
  return ['data_requests', '/data_requests/:data_request_id', args] as const
}

export function useGetDataRequestsDataRequestId<TError = unknown>(
  args: InferRequestType<(typeof client.data_requests)[':data_request_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.data_requests)[':data_request_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataRequestsDataRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.data_requests)[':data_request_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data_requests[':data_request_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataRequestsDataRequestId<TError = unknown>(
  args: InferRequestType<(typeof client.data_requests)[':data_request_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.data_requests)[':data_request_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataRequestsDataRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.data_requests)[':data_request_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data_requests[':data_request_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDataRequestsDataRequestIdKey() {
  return ['data_requests', '/data_requests/:data_request_id', 'PUT'] as const
}

export function usePutDataRequestsDataRequestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.data_requests)[':data_request_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.data_requests)[':data_request_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDataRequestsDataRequestIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.data_requests)[':data_request_id']['$put']> },
      ) => parseResponse(client.data_requests[':data_request_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDataRequestsDataRequestIdTokensKey() {
  return ['data_requests', '/data_requests/:data_request_id/tokens', 'POST'] as const
}

export function usePostDataRequestsDataRequestIdTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.data_requests)[':data_request_id']['tokens']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.data_requests)[':data_request_id']['tokens']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataRequestsDataRequestIdTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.data_requests)[':data_request_id']['tokens']['$post']
          >
        },
      ) => parseResponse(client.data_requests[':data_request_id'].tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFoldersIndexKey(args: InferRequestType<typeof client.folders.index.$get>) {
  return ['folders', '/folders/', args] as const
}

export function useGetFoldersIndex<TError = unknown>(
  args: InferRequestType<typeof client.folders.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFoldersIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folders.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoldersIndex<TError = unknown>(
  args: InferRequestType<typeof client.folders.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFoldersIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folders.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFoldersIndexKey() {
  return ['folders', '/folders/', 'POST'] as const
}

export function usePostFoldersIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.folders.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFoldersIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.folders.index.$post> }) =>
        parseResponse(client.folders.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFoldersFolderIdKey() {
  return ['folders', '/folders/:folder_id', 'DELETE'] as const
}

export function useDeleteFoldersFolderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.folders)[':folder_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFoldersFolderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.folders)[':folder_id']['$delete']> },
      ) => parseResponse(client.folders[':folder_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFoldersFolderIdMoveKey() {
  return ['folders', '/folders/:folder_id/move', 'POST'] as const
}

export function usePostFoldersFolderIdMove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.folders)[':folder_id']['move']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.folders)[':folder_id']['move']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFoldersFolderIdMoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.folders)[':folder_id']['move']['$post']> },
      ) => parseResponse(client.folders[':folder_id'].move.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFoldersFolderIdRenameKey() {
  return ['folders', '/folders/:folder_id/rename', 'POST'] as const
}

export function usePostFoldersFolderIdRename<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.folders)[':folder_id']['rename']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.folders)[':folder_id']['rename']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFoldersFolderIdRenameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.folders)[':folder_id']['rename']['$post']> },
      ) => parseResponse(client.folders[':folder_id'].rename.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubmissionsKey(args: InferRequestType<typeof client.submissions.$get>) {
  return ['submissions', '/submissions', args] as const
}

export function useGetSubmissions<TError = unknown>(
  args: InferRequestType<typeof client.submissions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.submissions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubmissionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.submissions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.submissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubmissions<TError = unknown>(
  args: InferRequestType<typeof client.submissions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.submissions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubmissionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.submissions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.submissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSubmissionsBatchesKey() {
  return ['submissions', '/submissions/batches', 'POST'] as const
}

export function usePostSubmissionsBatches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.submissions.batches.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.submissions.batches.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubmissionsBatchesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.submissions.batches.$post> }) =>
        parseResponse(client.submissions.batches.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubmissionsBatchesSubmissionBatchIdKey(
  args: InferRequestType<(typeof client.submissions.batches)[':submission_batch_id']['$get']>,
) {
  return ['submissions', '/submissions/batches/:submission_batch_id', args] as const
}

export function useGetSubmissionsBatchesSubmissionBatchId<TError = unknown>(
  args: InferRequestType<(typeof client.submissions.batches)[':submission_batch_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.submissions.batches)[':submission_batch_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSubmissionsBatchesSubmissionBatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.submissions.batches)[':submission_batch_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.submissions.batches[':submission_batch_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubmissionsBatchesSubmissionBatchId<TError = unknown>(
  args: InferRequestType<(typeof client.submissions.batches)[':submission_batch_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.submissions.batches)[':submission_batch_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSubmissionsBatchesSubmissionBatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.submissions.batches)[':submission_batch_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.submissions.batches[':submission_batch_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSubmissionsSubmissionIdKey(
  args: InferRequestType<(typeof client.submissions)[':submission_id']['$get']>,
) {
  return ['submissions', '/submissions/:submission_id', args] as const
}

export function useGetSubmissionsSubmissionId<TError = unknown>(
  args: InferRequestType<(typeof client.submissions)[':submission_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.submissions)[':submission_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSubmissionsSubmissionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.submissions)[':submission_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.submissions[':submission_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubmissionsSubmissionId<TError = unknown>(
  args: InferRequestType<(typeof client.submissions)[':submission_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.submissions)[':submission_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSubmissionsSubmissionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.submissions)[':submission_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.submissions[':submission_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSubmissionsSubmissionIdKey() {
  return ['submissions', '/submissions/:submission_id', 'DELETE'] as const
}

export function useDeleteSubmissionsSubmissionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.submissions)[':submission_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.submissions)[':submission_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSubmissionsSubmissionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.submissions)[':submission_id']['$delete']> },
      ) => parseResponse(client.submissions[':submission_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTemplatesKey(args: InferRequestType<typeof client.templates.$get>) {
  return ['templates', '/templates', args] as const
}

export function useGetTemplates<TError = unknown>(
  args: InferRequestType<typeof client.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplates<TError = unknown>(
  args: InferRequestType<typeof client.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTemplatesKey() {
  return ['templates', '/templates', 'POST'] as const
}

export function usePostTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.templates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.templates.$post> }) =>
        parseResponse(client.templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTemplatesTemplateIdKey(
  args: InferRequestType<(typeof client.templates)[':template_id']['$get']>,
) {
  return ['templates', '/templates/:template_id', args] as const
}

export function useGetTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTemplatesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTemplatesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTemplatesTemplateIdKey() {
  return ['templates', '/templates/:template_id', 'PUT'] as const
}

export function usePutTemplatesTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':template_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.templates)[':template_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTemplatesTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.templates)[':template_id']['$put']> },
      ) => parseResponse(client.templates[':template_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutTemplatesTemplateIdAddFieldsKey() {
  return ['templates', '/templates/:template_id/add_fields', 'PUT'] as const
}

export function usePutTemplatesTemplateIdAddFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':template_id']['add_fields']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.templates)[':template_id']['add_fields']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTemplatesTemplateIdAddFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.templates)[':template_id']['add_fields']['$put']>
        },
      ) => parseResponse(client.templates[':template_id'].add_fields.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesTemplateIdCopyKey() {
  return ['templates', '/templates/:template_id/copy', 'POST'] as const
}

export function usePostTemplatesTemplateIdCopy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':template_id']['copy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.templates)[':template_id']['copy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesTemplateIdCopyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.templates)[':template_id']['copy']['$post']> },
      ) => parseResponse(client.templates[':template_id'].copy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesTemplateIdMoveKey() {
  return ['templates', '/templates/:template_id/move', 'POST'] as const
}

export function usePostTemplatesTemplateIdMove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':template_id']['move']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.templates)[':template_id']['move']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesTemplateIdMoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.templates)[':template_id']['move']['$post']> },
      ) => parseResponse(client.templates[':template_id'].move.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTemplatesTemplateIdSchemaKey(
  args: InferRequestType<(typeof client.templates)[':template_id']['schema']['$get']>,
) {
  return ['templates', '/templates/:template_id/schema', args] as const
}

export function useGetTemplatesTemplateIdSchema<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':template_id']['schema']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_id']['schema']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTemplatesTemplateIdSchemaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_id']['schema']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':template_id'].schema.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesTemplateIdSchema<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':template_id']['schema']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_id']['schema']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTemplatesTemplateIdSchemaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_id']['schema']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':template_id'].schema.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTemplatesTemplateIdSubmissionsKey(
  args: InferRequestType<(typeof client.templates)[':template_id']['submissions']['$get']>,
) {
  return ['templates', '/templates/:template_id/submissions', args] as const
}

export function useGetTemplatesTemplateIdSubmissions<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':template_id']['submissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_id']['submissions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTemplatesTemplateIdSubmissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_id']['submissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.templates[':template_id'].submissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesTemplateIdSubmissions<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':template_id']['submissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_id']['submissions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTemplatesTemplateIdSubmissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_id']['submissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.templates[':template_id'].submissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTemplatesTemplateIdSubmissionsKey() {
  return ['templates', '/templates/:template_id/submissions', 'POST'] as const
}

export function usePostTemplatesTemplateIdSubmissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':template_id']['submissions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.templates)[':template_id']['submissions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesTemplateIdSubmissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.templates)[':template_id']['submissions']['$post']>
        },
      ) => parseResponse(client.templates[':template_id'].submissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesTemplateIdSubmissionsBatchKey() {
  return ['templates', '/templates/:template_id/submissions/batch', 'POST'] as const
}

export function usePostTemplatesTemplateIdSubmissionsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.templates)[':template_id']['submissions']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesTemplateIdSubmissionsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.templates)[':template_id']['submissions']['batch']['$post']
          >
        },
      ) =>
        parseResponse(client.templates[':template_id'].submissions.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTemplatesTemplateIdFullTrueKey(
  args: InferRequestType<(typeof client.templates)[':template_id?full=true']['$get']>,
) {
  return ['templates', '/templates/:template_id?full=true', args] as const
}

export function useGetTemplatesTemplateIdFullTrue<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':template_id?full=true']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_id?full=true']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTemplatesTemplateIdFullTrueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_id?full=true']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.templates[':template_id?full=true'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesTemplateIdFullTrue<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':template_id?full=true']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_id?full=true']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTemplatesTemplateIdFullTrueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_id?full=true']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.templates[':template_id?full=true'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTemplatesDescCachedUploadKey() {
  return ['templates?desc=cached_upload', '/templates?desc=cached_upload', 'POST'] as const
}

export function usePostTemplatesDescCachedUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['templates?desc=cached_upload']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['templates?desc=cached_upload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesDescCachedUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['templates?desc=cached_upload']['$post']> },
      ) => parseResponse(client['templates?desc=cached_upload'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesDescHtmlKey() {
  return ['templates?desc=html', '/templates?desc=html', 'POST'] as const
}

export function usePostTemplatesDescHtml<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['templates?desc=html']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['templates?desc=html']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesDescHtmlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['templates?desc=html']['$post']> },
      ) => parseResponse(client['templates?desc=html'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUploadsPresignKey() {
  return ['uploads', '/uploads/presign'] as const
}

export function useGetUploadsPresign<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.presign.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUploadsPresignKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.presign.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.uploads.presign.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUploadsPresign<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.presign.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUploadsPresignKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.presign.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.uploads.presign.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
