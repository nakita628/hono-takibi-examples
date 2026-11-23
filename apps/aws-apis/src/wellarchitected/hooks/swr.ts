import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getConsolidatedReportFormatKey() {
  return ['consolidatedReport#Format'] as const
}

export function getGlobalSettingsKey() {
  return ['global-settings'] as const
}

export function getImportLensKey() {
  return ['importLens'] as const
}

export function getLensesKey() {
  return ['lenses'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getShareInvitationsKey() {
  return ['shareInvitations'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getWorkloadsKey() {
  return ['workloads'] as const
}

export function getWorkloadsSummariesKey() {
  return ['workloadsSummaries'] as const
}

export function getPatchWorkloadsWorkloadIdAssociateLensesKey() {
  return ['workloads', '/workloads/:WorkloadId/associateLenses', 'PATCH'] as const
}

export function usePatchWorkloadsWorkloadIdAssociateLenses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['associateLenses']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workloads)[':WorkloadId']['associateLenses']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWorkloadsWorkloadIdAssociateLensesKey()
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
            (typeof client.workloads)[':WorkloadId']['associateLenses']['$patch']
          >
        },
      ) =>
        parseResponse(client.workloads[':WorkloadId'].associateLenses.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLensesLensAliasSharesKey(
  args: InferRequestType<(typeof client.lenses)[':LensAlias']['shares']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['lenses', '/lenses/:LensAlias/shares', keyArgs] as const
}

export function useGetLensesLensAliasShares<TError = unknown>(
  args: InferRequestType<(typeof client.lenses)[':LensAlias']['shares']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['shares']['$get']>>
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
        ? getGetLensesLensAliasSharesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['shares']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lenses[':LensAlias'].shares.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLensesLensAliasShares<TError = unknown>(
  args: InferRequestType<(typeof client.lenses)[':LensAlias']['shares']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['shares']['$get']>>
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
        ? getGetLensesLensAliasSharesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['shares']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lenses[':LensAlias'].shares.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLensesLensAliasSharesKey() {
  return ['lenses', '/lenses/:LensAlias/shares', 'POST'] as const
}

export function usePostLensesLensAliasShares<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['shares']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lenses)[':LensAlias']['shares']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLensesLensAliasSharesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.lenses)[':LensAlias']['shares']['$post']> },
      ) => parseResponse(client.lenses[':LensAlias'].shares.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLensesLensAliasVersionsKey() {
  return ['lenses', '/lenses/:LensAlias/versions', 'POST'] as const
}

export function usePostLensesLensAliasVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['versions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lenses)[':LensAlias']['versions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLensesLensAliasVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.lenses)[':LensAlias']['versions']['$post']> },
      ) => parseResponse(client.lenses[':LensAlias'].versions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWorkloadsWorkloadIdMilestonesKey() {
  return ['workloads', '/workloads/:WorkloadId/milestones', 'POST'] as const
}

export function usePostWorkloadsWorkloadIdMilestones<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['milestones']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workloads)[':WorkloadId']['milestones']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkloadsWorkloadIdMilestonesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.workloads)[':WorkloadId']['milestones']['$post']>
        },
      ) => parseResponse(client.workloads[':WorkloadId'].milestones.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWorkloadsKey() {
  return ['workloads', '/workloads', 'POST'] as const
}

export function usePostWorkloads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workloads.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.workloads.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkloadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.workloads.$post> }) =>
        parseResponse(client.workloads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkloadsWorkloadIdSharesKey(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId']['shares']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['workloads', '/workloads/:WorkloadId/shares', keyArgs] as const
}

export function useGetWorkloadsWorkloadIdShares<TError = unknown>(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId']['shares']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['shares']['$get']>>
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
        ? getGetWorkloadsWorkloadIdSharesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['shares']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workloads[':WorkloadId'].shares.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkloadsWorkloadIdShares<TError = unknown>(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId']['shares']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['shares']['$get']>>
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
        ? getGetWorkloadsWorkloadIdSharesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['shares']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workloads[':WorkloadId'].shares.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWorkloadsWorkloadIdSharesKey() {
  return ['workloads', '/workloads/:WorkloadId/shares', 'POST'] as const
}

export function usePostWorkloadsWorkloadIdShares<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['shares']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workloads)[':WorkloadId']['shares']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkloadsWorkloadIdSharesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.workloads)[':WorkloadId']['shares']['$post']> },
      ) => parseResponse(client.workloads[':WorkloadId'].shares.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLensesLensAliasClientRequestTokenLensStatusKey() {
  return ['lenses', '/lenses/:LensAlias#ClientRequestToken&LensStatus', 'DELETE'] as const
}

export function useDeleteLensesLensAliasClientRequestTokenLensStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.lenses)[':LensAlias#ClientRequestToken&LensStatus']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lenses)[':LensAlias#ClientRequestToken&LensStatus']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLensesLensAliasClientRequestTokenLensStatusKey()
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
            (typeof client.lenses)[':LensAlias#ClientRequestToken&LensStatus']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.lenses[':LensAlias#ClientRequestToken&LensStatus'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteLensesLensAliasSharesShareIdClientRequestTokenKey() {
  return ['lenses', '/lenses/:LensAlias/shares/:ShareId#ClientRequestToken', 'DELETE'] as const
}

export function useDeleteLensesLensAliasSharesShareIdClientRequestToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.lenses)[':LensAlias']['shares'][':ShareId#ClientRequestToken']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.lenses)[':LensAlias']['shares'][':ShareId#ClientRequestToken']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLensesLensAliasSharesShareIdClientRequestTokenKey()
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
            (typeof client.lenses)[':LensAlias']['shares'][':ShareId#ClientRequestToken']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.lenses[':LensAlias'].shares[':ShareId#ClientRequestToken'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteWorkloadsWorkloadIdClientRequestTokenKey() {
  return ['workloads', '/workloads/:WorkloadId#ClientRequestToken', 'DELETE'] as const
}

export function useDeleteWorkloadsWorkloadIdClientRequestToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.workloads)[':WorkloadId#ClientRequestToken']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workloads)[':WorkloadId#ClientRequestToken']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWorkloadsWorkloadIdClientRequestTokenKey()
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
            (typeof client.workloads)[':WorkloadId#ClientRequestToken']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.workloads[':WorkloadId#ClientRequestToken'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteWorkloadsWorkloadIdSharesShareIdClientRequestTokenKey() {
  return [
    'workloads',
    '/workloads/:WorkloadId/shares/:ShareId#ClientRequestToken',
    'DELETE',
  ] as const
}

export function useDeleteWorkloadsWorkloadIdSharesShareIdClientRequestToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workloads)[':WorkloadId']['shares'][':ShareId#ClientRequestToken']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.workloads)[':WorkloadId']['shares'][':ShareId#ClientRequestToken']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWorkloadsWorkloadIdSharesShareIdClientRequestTokenKey()
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
            (typeof client.workloads)[':WorkloadId']['shares'][':ShareId#ClientRequestToken']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.workloads[':WorkloadId'].shares[':ShareId#ClientRequestToken'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchWorkloadsWorkloadIdDisassociateLensesKey() {
  return ['workloads', '/workloads/:WorkloadId/disassociateLenses', 'PATCH'] as const
}

export function usePatchWorkloadsWorkloadIdDisassociateLenses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.workloads)[':WorkloadId']['disassociateLenses']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workloads)[':WorkloadId']['disassociateLenses']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWorkloadsWorkloadIdDisassociateLensesKey()
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
            (typeof client.workloads)[':WorkloadId']['disassociateLenses']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.workloads[':WorkloadId'].disassociateLenses.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLensesLensAliasExportKey(
  args: InferRequestType<(typeof client.lenses)[':LensAlias']['export']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['lenses', '/lenses/:LensAlias/export', keyArgs] as const
}

export function useGetLensesLensAliasExport<TError = unknown>(
  args: InferRequestType<(typeof client.lenses)[':LensAlias']['export']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['export']['$get']>>
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
        ? getGetLensesLensAliasExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['export']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lenses[':LensAlias'].export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLensesLensAliasExport<TError = unknown>(
  args: InferRequestType<(typeof client.lenses)[':LensAlias']['export']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['export']['$get']>>
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
        ? getGetLensesLensAliasExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['export']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lenses[':LensAlias'].export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdKey(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'workloads',
    '/workloads/:WorkloadId/lensReviews/:LensAlias/answers/:QuestionId',
    keyArgs,
  ] as const
}

export function useGetWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$get']
              >
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
        ? getGetWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.workloads[':WorkloadId'].lensReviews[':LensAlias'].answers[':QuestionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$get']
              >
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
        ? getGetWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.workloads[':WorkloadId'].lensReviews[':LensAlias'].answers[':QuestionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdKey() {
  return [
    'workloads',
    '/workloads/:WorkloadId/lensReviews/:LensAlias/answers/:QuestionId',
    'PATCH',
  ] as const
}

export function usePatchWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdKey()
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
            (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.workloads[':WorkloadId'].lensReviews[':LensAlias'].answers[':QuestionId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConsolidatedReportFormatKey(
  args: InferRequestType<(typeof client)['consolidatedReport#Format']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['consolidatedReport#Format', '/consolidatedReport#Format', keyArgs] as const
}

export function useGetConsolidatedReportFormat<TError = unknown>(
  args: InferRequestType<(typeof client)['consolidatedReport#Format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['consolidatedReport#Format']['$get']>>
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
        ? getGetConsolidatedReportFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['consolidatedReport#Format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['consolidatedReport#Format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsolidatedReportFormat<TError = unknown>(
  args: InferRequestType<(typeof client)['consolidatedReport#Format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['consolidatedReport#Format']['$get']>>
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
        ? getGetConsolidatedReportFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['consolidatedReport#Format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['consolidatedReport#Format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLensesLensAliasKey(
  args: InferRequestType<(typeof client.lenses)[':LensAlias']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['lenses', '/lenses/:LensAlias', keyArgs] as const
}

export function useGetLensesLensAlias<TError = unknown>(
  args: InferRequestType<(typeof client.lenses)[':LensAlias']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['$get']>>>
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
        ? getGetLensesLensAliasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lenses[':LensAlias'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLensesLensAlias<TError = unknown>(
  args: InferRequestType<(typeof client.lenses)[':LensAlias']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['$get']>>>
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
        ? getGetLensesLensAliasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lenses[':LensAlias'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkloadsWorkloadIdLensReviewsLensAliasKey(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['workloads', '/workloads/:WorkloadId/lensReviews/:LensAlias', keyArgs] as const
}

export function useGetWorkloadsWorkloadIdLensReviewsLensAlias<TError = unknown>(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$get']
              >
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
        ? getGetWorkloadsWorkloadIdLensReviewsLensAliasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.workloads[':WorkloadId'].lensReviews[':LensAlias'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkloadsWorkloadIdLensReviewsLensAlias<TError = unknown>(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$get']
              >
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
        ? getGetWorkloadsWorkloadIdLensReviewsLensAliasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.workloads[':WorkloadId'].lensReviews[':LensAlias'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchWorkloadsWorkloadIdLensReviewsLensAliasKey() {
  return ['workloads', '/workloads/:WorkloadId/lensReviews/:LensAlias', 'PATCH'] as const
}

export function usePatchWorkloadsWorkloadIdLensReviewsLensAlias<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWorkloadsWorkloadIdLensReviewsLensAliasKey()
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
            (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.workloads[':WorkloadId'].lensReviews[':LensAlias'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWorkloadsWorkloadIdLensReviewsLensAliasReportKey(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['report']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['workloads', '/workloads/:WorkloadId/lensReviews/:LensAlias/report', keyArgs] as const
}

export function useGetWorkloadsWorkloadIdLensReviewsLensAliasReport<TError = unknown>(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['report']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['report']['$get']
              >
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
        ? getGetWorkloadsWorkloadIdLensReviewsLensAliasReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['report']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.workloads[':WorkloadId'].lensReviews[':LensAlias'].report.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkloadsWorkloadIdLensReviewsLensAliasReport<TError = unknown>(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['report']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['report']['$get']
              >
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
        ? getGetWorkloadsWorkloadIdLensReviewsLensAliasReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['report']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.workloads[':WorkloadId'].lensReviews[':LensAlias'].report.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLensesLensAliasVersionDifferenceKey(
  args: InferRequestType<(typeof client.lenses)[':LensAlias']['versionDifference']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['lenses', '/lenses/:LensAlias/versionDifference', keyArgs] as const
}

export function useGetLensesLensAliasVersionDifference<TError = unknown>(
  args: InferRequestType<(typeof client.lenses)[':LensAlias']['versionDifference']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['versionDifference']['$get']>>
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
        ? getGetLensesLensAliasVersionDifferenceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['versionDifference']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lenses[':LensAlias'].versionDifference.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLensesLensAliasVersionDifference<TError = unknown>(
  args: InferRequestType<(typeof client.lenses)[':LensAlias']['versionDifference']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['versionDifference']['$get']>>
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
        ? getGetLensesLensAliasVersionDifferenceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['versionDifference']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lenses[':LensAlias'].versionDifference.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkloadsWorkloadIdMilestonesMilestoneNumberKey(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['milestones'][':MilestoneNumber']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['workloads', '/workloads/:WorkloadId/milestones/:MilestoneNumber', keyArgs] as const
}

export function useGetWorkloadsWorkloadIdMilestonesMilestoneNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['milestones'][':MilestoneNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workloads)[':WorkloadId']['milestones'][':MilestoneNumber']['$get']
              >
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
        ? getGetWorkloadsWorkloadIdMilestonesMilestoneNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workloads)[':WorkloadId']['milestones'][':MilestoneNumber']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.workloads[':WorkloadId'].milestones[':MilestoneNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkloadsWorkloadIdMilestonesMilestoneNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['milestones'][':MilestoneNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workloads)[':WorkloadId']['milestones'][':MilestoneNumber']['$get']
              >
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
        ? getGetWorkloadsWorkloadIdMilestonesMilestoneNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workloads)[':WorkloadId']['milestones'][':MilestoneNumber']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.workloads[':WorkloadId'].milestones[':MilestoneNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWorkloadsWorkloadIdKey(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['workloads', '/workloads/:WorkloadId', keyArgs] as const
}

export function useGetWorkloadsWorkloadId<TError = unknown>(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['$get']>>
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
        ? getGetWorkloadsWorkloadIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workloads[':WorkloadId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkloadsWorkloadId<TError = unknown>(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['$get']>>
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
        ? getGetWorkloadsWorkloadIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workloads[':WorkloadId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchWorkloadsWorkloadIdKey() {
  return ['workloads', '/workloads/:WorkloadId', 'PATCH'] as const
}

export function usePatchWorkloadsWorkloadId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workloads)[':WorkloadId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWorkloadsWorkloadIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.workloads)[':WorkloadId']['$patch']> },
      ) => parseResponse(client.workloads[':WorkloadId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutImportLensKey() {
  return ['importLens', '/importLens', 'PUT'] as const
}

export function usePutImportLens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.importLens.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.importLens.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutImportLensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.importLens.$put> }) =>
        parseResponse(client.importLens.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkloadsWorkloadIdLensReviewsLensAliasAnswersKey(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['workloads', '/workloads/:WorkloadId/lensReviews/:LensAlias/answers', keyArgs] as const
}

export function useGetWorkloadsWorkloadIdLensReviewsLensAliasAnswers<TError = unknown>(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers']['$get']
              >
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
        ? getGetWorkloadsWorkloadIdLensReviewsLensAliasAnswersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.workloads[':WorkloadId'].lensReviews[':LensAlias'].answers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkloadsWorkloadIdLensReviewsLensAliasAnswers<TError = unknown>(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers']['$get']
              >
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
        ? getGetWorkloadsWorkloadIdLensReviewsLensAliasAnswersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.workloads[':WorkloadId'].lensReviews[':LensAlias'].answers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostWorkloadsWorkloadIdChecksKey() {
  return ['workloads', '/workloads/:WorkloadId/checks', 'POST'] as const
}

export function usePostWorkloadsWorkloadIdChecks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['checks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workloads)[':WorkloadId']['checks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkloadsWorkloadIdChecksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.workloads)[':WorkloadId']['checks']['$post']> },
      ) => parseResponse(client.workloads[':WorkloadId'].checks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWorkloadsWorkloadIdCheckSummariesKey() {
  return ['workloads', '/workloads/:WorkloadId/checkSummaries', 'POST'] as const
}

export function usePostWorkloadsWorkloadIdCheckSummaries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['checkSummaries']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workloads)[':WorkloadId']['checkSummaries']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkloadsWorkloadIdCheckSummariesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.workloads)[':WorkloadId']['checkSummaries']['$post']>
        },
      ) => parseResponse(client.workloads[':WorkloadId'].checkSummaries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkloadsWorkloadIdLensReviewsLensAliasImprovementsKey(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['improvements']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'workloads',
    '/workloads/:WorkloadId/lensReviews/:LensAlias/improvements',
    keyArgs,
  ] as const
}

export function useGetWorkloadsWorkloadIdLensReviewsLensAliasImprovements<TError = unknown>(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['improvements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['improvements']['$get']
              >
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
        ? getGetWorkloadsWorkloadIdLensReviewsLensAliasImprovementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['improvements']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.workloads[':WorkloadId'].lensReviews[':LensAlias'].improvements.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkloadsWorkloadIdLensReviewsLensAliasImprovements<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['improvements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['improvements']['$get']
              >
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
        ? getGetWorkloadsWorkloadIdLensReviewsLensAliasImprovementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['improvements']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.workloads[':WorkloadId'].lensReviews[':LensAlias'].improvements.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWorkloadsWorkloadIdLensReviewsKey(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId']['lensReviews']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['workloads', '/workloads/:WorkloadId/lensReviews', keyArgs] as const
}

export function useGetWorkloadsWorkloadIdLensReviews<TError = unknown>(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId']['lensReviews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['lensReviews']['$get']>>
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
        ? getGetWorkloadsWorkloadIdLensReviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['lensReviews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workloads[':WorkloadId'].lensReviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkloadsWorkloadIdLensReviews<TError = unknown>(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId']['lensReviews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['lensReviews']['$get']>>
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
        ? getGetWorkloadsWorkloadIdLensReviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['lensReviews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workloads[':WorkloadId'].lensReviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLensesKey(args: InferRequestType<typeof client.lenses.$get>) {
  const { header: _, ...keyArgs } = args
  return ['lenses', '/lenses', keyArgs] as const
}

export function useGetLenses<TError = unknown>(
  args: InferRequestType<typeof client.lenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lenses.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLensesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lenses.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.lenses.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLenses<TError = unknown>(
  args: InferRequestType<typeof client.lenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lenses.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLensesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lenses.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.lenses.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostWorkloadsWorkloadIdMilestonesSummariesKey() {
  return ['workloads', '/workloads/:WorkloadId/milestonesSummaries', 'POST'] as const
}

export function usePostWorkloadsWorkloadIdMilestonesSummaries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.workloads)[':WorkloadId']['milestonesSummaries']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workloads)[':WorkloadId']['milestonesSummaries']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkloadsWorkloadIdMilestonesSummariesKey()
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
            (typeof client.workloads)[':WorkloadId']['milestonesSummaries']['$post']
          >
        },
      ) =>
        parseResponse(
          client.workloads[':WorkloadId'].milestonesSummaries.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNotificationsKey() {
  return ['notifications', '/notifications', 'POST'] as const
}

export function usePostNotifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.notifications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.notifications.$post> }) =>
        parseResponse(client.notifications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShareInvitationsKey(
  args: InferRequestType<typeof client.shareInvitations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['shareInvitations', '/shareInvitations', keyArgs] as const
}

export function useGetShareInvitations<TError = unknown>(
  args: InferRequestType<typeof client.shareInvitations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shareInvitations.$get>>>>
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
        ? getGetShareInvitationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shareInvitations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shareInvitations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShareInvitations<TError = unknown>(
  args: InferRequestType<typeof client.shareInvitations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shareInvitations.$get>>>>
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
        ? getGetShareInvitationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shareInvitations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shareInvitations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsWorkloadArnKey(
  args: InferRequestType<(typeof client.tags)[':WorkloadArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:WorkloadArn', keyArgs] as const
}

export function useGetTagsWorkloadArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':WorkloadArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':WorkloadArn']['$get']>>>
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
        ? getGetTagsWorkloadArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':WorkloadArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':WorkloadArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsWorkloadArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':WorkloadArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':WorkloadArn']['$get']>>>
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
        ? getGetTagsWorkloadArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':WorkloadArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':WorkloadArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsWorkloadArnKey() {
  return ['tags', '/tags/:WorkloadArn', 'POST'] as const
}

export function usePostTagsWorkloadArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':WorkloadArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':WorkloadArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsWorkloadArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':WorkloadArn']['$post']> },
      ) => parseResponse(client.tags[':WorkloadArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWorkloadsSummariesKey() {
  return ['workloadsSummaries', '/workloadsSummaries', 'POST'] as const
}

export function usePostWorkloadsSummaries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workloadsSummaries.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.workloadsSummaries.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkloadsSummariesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.workloadsSummaries.$post> }) =>
        parseResponse(client.workloadsSummaries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsWorkloadArnTagKeysKey() {
  return ['tags', '/tags/:WorkloadArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsWorkloadArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':WorkloadArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':WorkloadArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsWorkloadArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':WorkloadArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':WorkloadArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchGlobalSettingsKey() {
  return ['global-settings', '/global-settings', 'PATCH'] as const
}

export function usePatchGlobalSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['global-settings']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['global-settings']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGlobalSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['global-settings']['$patch']> },
      ) => parseResponse(client['global-settings'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchShareInvitationsShareInvitationIdKey() {
  return ['shareInvitations', '/shareInvitations/:ShareInvitationId', 'PATCH'] as const
}

export function usePatchShareInvitationsShareInvitationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shareInvitations)[':ShareInvitationId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.shareInvitations)[':ShareInvitationId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchShareInvitationsShareInvitationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.shareInvitations)[':ShareInvitationId']['$patch']>
        },
      ) => parseResponse(client.shareInvitations[':ShareInvitationId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWorkloadsWorkloadIdSharesShareIdKey() {
  return ['workloads', '/workloads/:WorkloadId/shares/:ShareId', 'PATCH'] as const
}

export function usePatchWorkloadsWorkloadIdSharesShareId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.workloads)[':WorkloadId']['shares'][':ShareId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workloads)[':WorkloadId']['shares'][':ShareId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWorkloadsWorkloadIdSharesShareIdKey()
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
            (typeof client.workloads)[':WorkloadId']['shares'][':ShareId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.workloads[':WorkloadId'].shares[':ShareId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutWorkloadsWorkloadIdLensReviewsLensAliasUpgradeKey() {
  return ['workloads', '/workloads/:WorkloadId/lensReviews/:LensAlias/upgrade', 'PUT'] as const
}

export function usePutWorkloadsWorkloadIdLensReviewsLensAliasUpgrade<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['upgrade']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['upgrade']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWorkloadsWorkloadIdLensReviewsLensAliasUpgradeKey()
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
            (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['upgrade']['$put']
          >
        },
      ) =>
        parseResponse(
          client.workloads[':WorkloadId'].lensReviews[':LensAlias'].upgrade.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
