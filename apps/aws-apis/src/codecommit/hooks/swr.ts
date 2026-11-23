import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetCodeCommit_20150413AssociateApprovalRuleTemplateWithRepositoryKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository'] as const
}

export function getXAmzTargetCodeCommit_20150413BatchAssociateApprovalRuleTemplateWithRepositoriesKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories',
  ] as const
}

export function getXAmzTargetCodeCommit_20150413BatchDescribeMergeConflictsKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.BatchDescribeMergeConflicts'] as const
}

export function getXAmzTargetCodeCommit_20150413BatchDisassociateApprovalRuleTemplateFromRepositoriesKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories',
  ] as const
}

export function getXAmzTargetCodeCommit_20150413BatchGetCommitsKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.BatchGetCommits'] as const
}

export function getXAmzTargetCodeCommit_20150413BatchGetRepositoriesKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.BatchGetRepositories'] as const
}

export function getXAmzTargetCodeCommit_20150413CreateApprovalRuleTemplateKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.CreateApprovalRuleTemplate'] as const
}

export function getXAmzTargetCodeCommit_20150413CreateBranchKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.CreateBranch'] as const
}

export function getXAmzTargetCodeCommit_20150413CreateCommitKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.CreateCommit'] as const
}

export function getXAmzTargetCodeCommit_20150413CreatePullRequestKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.CreatePullRequest'] as const
}

export function getXAmzTargetCodeCommit_20150413CreatePullRequestApprovalRuleKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.CreatePullRequestApprovalRule'] as const
}

export function getXAmzTargetCodeCommit_20150413CreateRepositoryKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.CreateRepository'] as const
}

export function getXAmzTargetCodeCommit_20150413CreateUnreferencedMergeCommitKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.CreateUnreferencedMergeCommit'] as const
}

export function getXAmzTargetCodeCommit_20150413DeleteApprovalRuleTemplateKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.DeleteApprovalRuleTemplate'] as const
}

export function getXAmzTargetCodeCommit_20150413DeleteBranchKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.DeleteBranch'] as const
}

export function getXAmzTargetCodeCommit_20150413DeleteCommentContentKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.DeleteCommentContent'] as const
}

export function getXAmzTargetCodeCommit_20150413DeleteFileKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.DeleteFile'] as const
}

export function getXAmzTargetCodeCommit_20150413DeletePullRequestApprovalRuleKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.DeletePullRequestApprovalRule'] as const
}

export function getXAmzTargetCodeCommit_20150413DeleteRepositoryKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.DeleteRepository'] as const
}

export function getXAmzTargetCodeCommit_20150413DescribeMergeConflictsKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.DescribeMergeConflicts'] as const
}

export function getXAmzTargetCodeCommit_20150413DescribePullRequestEventsKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.DescribePullRequestEvents'] as const
}

export function getXAmzTargetCodeCommit_20150413DisassociateApprovalRuleTemplateFromRepositoryKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository',
  ] as const
}

export function getXAmzTargetCodeCommit_20150413EvaluatePullRequestApprovalRulesKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.EvaluatePullRequestApprovalRules'] as const
}

export function getXAmzTargetCodeCommit_20150413GetApprovalRuleTemplateKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.GetApprovalRuleTemplate'] as const
}

export function getXAmzTargetCodeCommit_20150413GetBlobKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.GetBlob'] as const
}

export function getXAmzTargetCodeCommit_20150413GetBranchKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.GetBranch'] as const
}

export function getXAmzTargetCodeCommit_20150413GetCommentKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.GetComment'] as const
}

export function getXAmzTargetCodeCommit_20150413GetCommentReactionsKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.GetCommentReactions'] as const
}

export function getXAmzTargetCodeCommit_20150413GetCommentsForComparedCommitKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.GetCommentsForComparedCommit'] as const
}

export function getXAmzTargetCodeCommit_20150413GetCommentsForPullRequestKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.GetCommentsForPullRequest'] as const
}

export function getXAmzTargetCodeCommit_20150413GetCommitKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.GetCommit'] as const
}

export function getXAmzTargetCodeCommit_20150413GetDifferencesKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.GetDifferences'] as const
}

export function getXAmzTargetCodeCommit_20150413GetFileKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.GetFile'] as const
}

export function getXAmzTargetCodeCommit_20150413GetFolderKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.GetFolder'] as const
}

export function getXAmzTargetCodeCommit_20150413GetMergeCommitKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.GetMergeCommit'] as const
}

export function getXAmzTargetCodeCommit_20150413GetMergeConflictsKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.GetMergeConflicts'] as const
}

export function getXAmzTargetCodeCommit_20150413GetMergeOptionsKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.GetMergeOptions'] as const
}

export function getXAmzTargetCodeCommit_20150413GetPullRequestKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.GetPullRequest'] as const
}

export function getXAmzTargetCodeCommit_20150413GetPullRequestApprovalStatesKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.GetPullRequestApprovalStates'] as const
}

export function getXAmzTargetCodeCommit_20150413GetPullRequestOverrideStateKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.GetPullRequestOverrideState'] as const
}

export function getXAmzTargetCodeCommit_20150413GetRepositoryKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.GetRepository'] as const
}

export function getXAmzTargetCodeCommit_20150413GetRepositoryTriggersKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.GetRepositoryTriggers'] as const
}

export function getXAmzTargetCodeCommit_20150413ListApprovalRuleTemplatesKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.ListApprovalRuleTemplates'] as const
}

export function getXAmzTargetCodeCommit_20150413ListAssociatedApprovalRuleTemplatesForRepositoryKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository',
  ] as const
}

export function getXAmzTargetCodeCommit_20150413ListBranchesKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.ListBranches'] as const
}

export function getXAmzTargetCodeCommit_20150413ListPullRequestsKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.ListPullRequests'] as const
}

export function getXAmzTargetCodeCommit_20150413ListRepositoriesKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.ListRepositories'] as const
}

export function getXAmzTargetCodeCommit_20150413ListRepositoriesForApprovalRuleTemplateKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate'] as const
}

export function getXAmzTargetCodeCommit_20150413ListTagsForResourceKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.ListTagsForResource'] as const
}

export function getXAmzTargetCodeCommit_20150413MergeBranchesByFastForwardKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.MergeBranchesByFastForward'] as const
}

export function getXAmzTargetCodeCommit_20150413MergeBranchesBySquashKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.MergeBranchesBySquash'] as const
}

export function getXAmzTargetCodeCommit_20150413MergeBranchesByThreeWayKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.MergeBranchesByThreeWay'] as const
}

export function getXAmzTargetCodeCommit_20150413MergePullRequestByFastForwardKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.MergePullRequestByFastForward'] as const
}

export function getXAmzTargetCodeCommit_20150413MergePullRequestBySquashKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.MergePullRequestBySquash'] as const
}

export function getXAmzTargetCodeCommit_20150413MergePullRequestByThreeWayKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.MergePullRequestByThreeWay'] as const
}

export function getXAmzTargetCodeCommit_20150413OverridePullRequestApprovalRulesKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.OverridePullRequestApprovalRules'] as const
}

export function getXAmzTargetCodeCommit_20150413PostCommentForComparedCommitKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.PostCommentForComparedCommit'] as const
}

export function getXAmzTargetCodeCommit_20150413PostCommentForPullRequestKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.PostCommentForPullRequest'] as const
}

export function getXAmzTargetCodeCommit_20150413PostCommentReplyKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.PostCommentReply'] as const
}

export function getXAmzTargetCodeCommit_20150413PutCommentReactionKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.PutCommentReaction'] as const
}

export function getXAmzTargetCodeCommit_20150413PutFileKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.PutFile'] as const
}

export function getXAmzTargetCodeCommit_20150413PutRepositoryTriggersKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.PutRepositoryTriggers'] as const
}

export function getXAmzTargetCodeCommit_20150413TagResourceKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.TagResource'] as const
}

export function getXAmzTargetCodeCommit_20150413TestRepositoryTriggersKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.TestRepositoryTriggers'] as const
}

export function getXAmzTargetCodeCommit_20150413UntagResourceKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.UntagResource'] as const
}

export function getXAmzTargetCodeCommit_20150413UpdateApprovalRuleTemplateContentKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateContent'] as const
}

export function getXAmzTargetCodeCommit_20150413UpdateApprovalRuleTemplateDescriptionKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateDescription'] as const
}

export function getXAmzTargetCodeCommit_20150413UpdateApprovalRuleTemplateNameKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateName'] as const
}

export function getXAmzTargetCodeCommit_20150413UpdateCommentKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.UpdateComment'] as const
}

export function getXAmzTargetCodeCommit_20150413UpdateDefaultBranchKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.UpdateDefaultBranch'] as const
}

export function getXAmzTargetCodeCommit_20150413UpdatePullRequestApprovalRuleContentKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalRuleContent'] as const
}

export function getXAmzTargetCodeCommit_20150413UpdatePullRequestApprovalStateKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalState'] as const
}

export function getXAmzTargetCodeCommit_20150413UpdatePullRequestDescriptionKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestDescription'] as const
}

export function getXAmzTargetCodeCommit_20150413UpdatePullRequestStatusKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestStatus'] as const
}

export function getXAmzTargetCodeCommit_20150413UpdatePullRequestTitleKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestTitle'] as const
}

export function getXAmzTargetCodeCommit_20150413UpdateRepositoryDescriptionKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryDescription'] as const
}

export function getXAmzTargetCodeCommit_20150413UpdateRepositoryNameKey() {
  return ['#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryName'] as const
}

export function getPostXAmzTargetCodeCommit20150413AssociateApprovalRuleTemplateWithRepositoryKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository',
    '/#X-Amz-Target=CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413AssociateApprovalRuleTemplateWithRepository<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetCodeCommit20150413AssociateApprovalRuleTemplateWithRepositoryKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413BatchAssociateApprovalRuleTemplateWithRepositoriesKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories',
    '/#X-Amz-Target=CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413BatchAssociateApprovalRuleTemplateWithRepositories<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetCodeCommit20150413BatchAssociateApprovalRuleTemplateWithRepositoriesKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413BatchDescribeMergeConflictsKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.BatchDescribeMergeConflicts',
    '/#X-Amz-Target=CodeCommit_20150413.BatchDescribeMergeConflicts',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413BatchDescribeMergeConflicts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchDescribeMergeConflicts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchDescribeMergeConflicts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413BatchDescribeMergeConflictsKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchDescribeMergeConflicts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.BatchDescribeMergeConflicts'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413BatchDisassociateApprovalRuleTemplateFromRepositoriesKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories',
    '/#X-Amz-Target=CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413BatchDisassociateApprovalRuleTemplateFromRepositories<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetCodeCommit20150413BatchDisassociateApprovalRuleTemplateFromRepositoriesKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413BatchGetCommitsKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.BatchGetCommits',
    '/#X-Amz-Target=CodeCommit_20150413.BatchGetCommits',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413BatchGetCommits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchGetCommits']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchGetCommits']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413BatchGetCommitsKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchGetCommits']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.BatchGetCommits'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413BatchGetRepositoriesKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.BatchGetRepositories',
    '/#X-Amz-Target=CodeCommit_20150413.BatchGetRepositories',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413BatchGetRepositories<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchGetRepositories']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchGetRepositories']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413BatchGetRepositoriesKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchGetRepositories']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.BatchGetRepositories'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413CreateApprovalRuleTemplateKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.CreateApprovalRuleTemplate',
    '/#X-Amz-Target=CodeCommit_20150413.CreateApprovalRuleTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413CreateApprovalRuleTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateApprovalRuleTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateApprovalRuleTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413CreateApprovalRuleTemplateKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateApprovalRuleTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.CreateApprovalRuleTemplate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413CreateBranchKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.CreateBranch',
    '/#X-Amz-Target=CodeCommit_20150413.CreateBranch',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413CreateBranch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateBranch']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateBranch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413CreateBranchKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateBranch']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.CreateBranch'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413CreateCommitKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.CreateCommit',
    '/#X-Amz-Target=CodeCommit_20150413.CreateCommit',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413CreateCommit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateCommit']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateCommit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413CreateCommitKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateCommit']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.CreateCommit'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413CreatePullRequestKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.CreatePullRequest',
    '/#X-Amz-Target=CodeCommit_20150413.CreatePullRequest',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413CreatePullRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreatePullRequest']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreatePullRequest']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413CreatePullRequestKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreatePullRequest']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.CreatePullRequest'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413CreatePullRequestApprovalRuleKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.CreatePullRequestApprovalRule',
    '/#X-Amz-Target=CodeCommit_20150413.CreatePullRequestApprovalRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413CreatePullRequestApprovalRule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreatePullRequestApprovalRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreatePullRequestApprovalRule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413CreatePullRequestApprovalRuleKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreatePullRequestApprovalRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.CreatePullRequestApprovalRule'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413CreateRepositoryKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.CreateRepository',
    '/#X-Amz-Target=CodeCommit_20150413.CreateRepository',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413CreateRepository<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateRepository']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateRepository']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413CreateRepositoryKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateRepository']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.CreateRepository'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413CreateUnreferencedMergeCommitKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.CreateUnreferencedMergeCommit',
    '/#X-Amz-Target=CodeCommit_20150413.CreateUnreferencedMergeCommit',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413CreateUnreferencedMergeCommit<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateUnreferencedMergeCommit']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateUnreferencedMergeCommit']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413CreateUnreferencedMergeCommitKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateUnreferencedMergeCommit']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.CreateUnreferencedMergeCommit'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413DeleteApprovalRuleTemplateKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.DeleteApprovalRuleTemplate',
    '/#X-Amz-Target=CodeCommit_20150413.DeleteApprovalRuleTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413DeleteApprovalRuleTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteApprovalRuleTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteApprovalRuleTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413DeleteApprovalRuleTemplateKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteApprovalRuleTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.DeleteApprovalRuleTemplate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413DeleteBranchKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.DeleteBranch',
    '/#X-Amz-Target=CodeCommit_20150413.DeleteBranch',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413DeleteBranch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteBranch']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteBranch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413DeleteBranchKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteBranch']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.DeleteBranch'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413DeleteCommentContentKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.DeleteCommentContent',
    '/#X-Amz-Target=CodeCommit_20150413.DeleteCommentContent',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413DeleteCommentContent<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteCommentContent']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteCommentContent']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413DeleteCommentContentKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteCommentContent']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.DeleteCommentContent'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413DeleteFileKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.DeleteFile',
    '/#X-Amz-Target=CodeCommit_20150413.DeleteFile',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413DeleteFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteFile']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteFile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413DeleteFileKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteFile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.DeleteFile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413DeletePullRequestApprovalRuleKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.DeletePullRequestApprovalRule',
    '/#X-Amz-Target=CodeCommit_20150413.DeletePullRequestApprovalRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413DeletePullRequestApprovalRule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeletePullRequestApprovalRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeletePullRequestApprovalRule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413DeletePullRequestApprovalRuleKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeletePullRequestApprovalRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.DeletePullRequestApprovalRule'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413DeleteRepositoryKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.DeleteRepository',
    '/#X-Amz-Target=CodeCommit_20150413.DeleteRepository',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413DeleteRepository<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteRepository']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteRepository']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413DeleteRepositoryKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteRepository']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.DeleteRepository'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413DescribeMergeConflictsKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.DescribeMergeConflicts',
    '/#X-Amz-Target=CodeCommit_20150413.DescribeMergeConflicts',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413DescribeMergeConflicts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.DescribeMergeConflicts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.DescribeMergeConflicts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413DescribeMergeConflictsKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.DescribeMergeConflicts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.DescribeMergeConflicts'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413DescribePullRequestEventsKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.DescribePullRequestEvents',
    '/#X-Amz-Target=CodeCommit_20150413.DescribePullRequestEvents',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413DescribePullRequestEvents<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.DescribePullRequestEvents']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.DescribePullRequestEvents']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413DescribePullRequestEventsKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.DescribePullRequestEvents']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.DescribePullRequestEvents'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413DisassociateApprovalRuleTemplateFromRepositoryKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository',
    '/#X-Amz-Target=CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413DisassociateApprovalRuleTemplateFromRepository<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetCodeCommit20150413DisassociateApprovalRuleTemplateFromRepositoryKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413EvaluatePullRequestApprovalRulesKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.EvaluatePullRequestApprovalRules',
    '/#X-Amz-Target=CodeCommit_20150413.EvaluatePullRequestApprovalRules',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413EvaluatePullRequestApprovalRules<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.EvaluatePullRequestApprovalRules']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.EvaluatePullRequestApprovalRules']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetCodeCommit20150413EvaluatePullRequestApprovalRulesKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.EvaluatePullRequestApprovalRules']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.EvaluatePullRequestApprovalRules'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413GetApprovalRuleTemplateKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetApprovalRuleTemplate',
    '/#X-Amz-Target=CodeCommit_20150413.GetApprovalRuleTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413GetApprovalRuleTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetApprovalRuleTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetApprovalRuleTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413GetApprovalRuleTemplateKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetApprovalRuleTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.GetApprovalRuleTemplate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413GetBlobKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetBlob',
    '/#X-Amz-Target=CodeCommit_20150413.GetBlob',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413GetBlob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetBlob']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetBlob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413GetBlobKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetBlob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.GetBlob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413GetBranchKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetBranch',
    '/#X-Amz-Target=CodeCommit_20150413.GetBranch',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413GetBranch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetBranch']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetBranch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413GetBranchKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetBranch']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.GetBranch'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413GetCommentKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetComment',
    '/#X-Amz-Target=CodeCommit_20150413.GetComment',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413GetComment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetComment']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetComment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413GetCommentKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetComment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.GetComment'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413GetCommentReactionsKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetCommentReactions',
    '/#X-Amz-Target=CodeCommit_20150413.GetCommentReactions',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413GetCommentReactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommentReactions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommentReactions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413GetCommentReactionsKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommentReactions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.GetCommentReactions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413GetCommentsForComparedCommitKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetCommentsForComparedCommit',
    '/#X-Amz-Target=CodeCommit_20150413.GetCommentsForComparedCommit',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413GetCommentsForComparedCommit<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommentsForComparedCommit']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommentsForComparedCommit']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413GetCommentsForComparedCommitKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommentsForComparedCommit']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.GetCommentsForComparedCommit'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413GetCommentsForPullRequestKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetCommentsForPullRequest',
    '/#X-Amz-Target=CodeCommit_20150413.GetCommentsForPullRequest',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413GetCommentsForPullRequest<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommentsForPullRequest']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommentsForPullRequest']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413GetCommentsForPullRequestKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommentsForPullRequest']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.GetCommentsForPullRequest'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413GetCommitKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetCommit',
    '/#X-Amz-Target=CodeCommit_20150413.GetCommit',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413GetCommit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommit']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413GetCommitKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommit']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.GetCommit'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413GetDifferencesKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetDifferences',
    '/#X-Amz-Target=CodeCommit_20150413.GetDifferences',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413GetDifferences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetDifferences']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetDifferences']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413GetDifferencesKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetDifferences']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.GetDifferences'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413GetFileKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetFile',
    '/#X-Amz-Target=CodeCommit_20150413.GetFile',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413GetFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetFile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetFile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413GetFileKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetFile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.GetFile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413GetFolderKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetFolder',
    '/#X-Amz-Target=CodeCommit_20150413.GetFolder',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413GetFolder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetFolder']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetFolder']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413GetFolderKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetFolder']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.GetFolder'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413GetMergeCommitKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetMergeCommit',
    '/#X-Amz-Target=CodeCommit_20150413.GetMergeCommit',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413GetMergeCommit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetMergeCommit']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetMergeCommit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413GetMergeCommitKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetMergeCommit']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.GetMergeCommit'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413GetMergeConflictsKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetMergeConflicts',
    '/#X-Amz-Target=CodeCommit_20150413.GetMergeConflicts',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413GetMergeConflicts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetMergeConflicts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetMergeConflicts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413GetMergeConflictsKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetMergeConflicts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.GetMergeConflicts'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413GetMergeOptionsKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetMergeOptions',
    '/#X-Amz-Target=CodeCommit_20150413.GetMergeOptions',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413GetMergeOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetMergeOptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetMergeOptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413GetMergeOptionsKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetMergeOptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.GetMergeOptions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413GetPullRequestKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetPullRequest',
    '/#X-Amz-Target=CodeCommit_20150413.GetPullRequest',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413GetPullRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetPullRequest']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetPullRequest']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413GetPullRequestKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetPullRequest']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.GetPullRequest'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413GetPullRequestApprovalStatesKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetPullRequestApprovalStates',
    '/#X-Amz-Target=CodeCommit_20150413.GetPullRequestApprovalStates',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413GetPullRequestApprovalStates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetPullRequestApprovalStates']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetPullRequestApprovalStates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413GetPullRequestApprovalStatesKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetPullRequestApprovalStates']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.GetPullRequestApprovalStates'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413GetPullRequestOverrideStateKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetPullRequestOverrideState',
    '/#X-Amz-Target=CodeCommit_20150413.GetPullRequestOverrideState',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413GetPullRequestOverrideState<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetPullRequestOverrideState']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetPullRequestOverrideState']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413GetPullRequestOverrideStateKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetPullRequestOverrideState']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.GetPullRequestOverrideState'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413GetRepositoryKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetRepository',
    '/#X-Amz-Target=CodeCommit_20150413.GetRepository',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413GetRepository<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetRepository']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetRepository']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413GetRepositoryKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetRepository']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.GetRepository'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413GetRepositoryTriggersKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetRepositoryTriggers',
    '/#X-Amz-Target=CodeCommit_20150413.GetRepositoryTriggers',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413GetRepositoryTriggers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetRepositoryTriggers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetRepositoryTriggers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413GetRepositoryTriggersKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetRepositoryTriggers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.GetRepositoryTriggers'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413ListApprovalRuleTemplatesKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.ListApprovalRuleTemplates',
    '/#X-Amz-Target=CodeCommit_20150413.ListApprovalRuleTemplates',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413ListApprovalRuleTemplates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListApprovalRuleTemplates']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListApprovalRuleTemplates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413ListApprovalRuleTemplatesKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListApprovalRuleTemplates']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.ListApprovalRuleTemplates'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413ListAssociatedApprovalRuleTemplatesForRepositoryKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository',
    '/#X-Amz-Target=CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413ListAssociatedApprovalRuleTemplatesForRepository<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetCodeCommit20150413ListAssociatedApprovalRuleTemplatesForRepositoryKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413ListBranchesKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.ListBranches',
    '/#X-Amz-Target=CodeCommit_20150413.ListBranches',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413ListBranches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.ListBranches']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.ListBranches']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413ListBranchesKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListBranches']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.ListBranches'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413ListPullRequestsKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.ListPullRequests',
    '/#X-Amz-Target=CodeCommit_20150413.ListPullRequests',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413ListPullRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListPullRequests']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.ListPullRequests']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413ListPullRequestsKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListPullRequests']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.ListPullRequests'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413ListRepositoriesKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.ListRepositories',
    '/#X-Amz-Target=CodeCommit_20150413.ListRepositories',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413ListRepositories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListRepositories']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.ListRepositories']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413ListRepositoriesKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListRepositories']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.ListRepositories'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413ListRepositoriesForApprovalRuleTemplateKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate',
    '/#X-Amz-Target=CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413ListRepositoriesForApprovalRuleTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetCodeCommit20150413ListRepositoriesForApprovalRuleTemplateKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.ListTagsForResource',
    '/#X-Amz-Target=CodeCommit_20150413.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413ListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413ListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413MergeBranchesByFastForwardKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.MergeBranchesByFastForward',
    '/#X-Amz-Target=CodeCommit_20150413.MergeBranchesByFastForward',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413MergeBranchesByFastForward<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergeBranchesByFastForward']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergeBranchesByFastForward']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413MergeBranchesByFastForwardKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergeBranchesByFastForward']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.MergeBranchesByFastForward'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413MergeBranchesBySquashKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.MergeBranchesBySquash',
    '/#X-Amz-Target=CodeCommit_20150413.MergeBranchesBySquash',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413MergeBranchesBySquash<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergeBranchesBySquash']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergeBranchesBySquash']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413MergeBranchesBySquashKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergeBranchesBySquash']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.MergeBranchesBySquash'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413MergeBranchesByThreeWayKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.MergeBranchesByThreeWay',
    '/#X-Amz-Target=CodeCommit_20150413.MergeBranchesByThreeWay',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413MergeBranchesByThreeWay<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergeBranchesByThreeWay']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergeBranchesByThreeWay']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413MergeBranchesByThreeWayKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergeBranchesByThreeWay']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.MergeBranchesByThreeWay'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413MergePullRequestByFastForwardKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.MergePullRequestByFastForward',
    '/#X-Amz-Target=CodeCommit_20150413.MergePullRequestByFastForward',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413MergePullRequestByFastForward<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergePullRequestByFastForward']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergePullRequestByFastForward']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413MergePullRequestByFastForwardKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergePullRequestByFastForward']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.MergePullRequestByFastForward'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413MergePullRequestBySquashKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.MergePullRequestBySquash',
    '/#X-Amz-Target=CodeCommit_20150413.MergePullRequestBySquash',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413MergePullRequestBySquash<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergePullRequestBySquash']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergePullRequestBySquash']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413MergePullRequestBySquashKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergePullRequestBySquash']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.MergePullRequestBySquash'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413MergePullRequestByThreeWayKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.MergePullRequestByThreeWay',
    '/#X-Amz-Target=CodeCommit_20150413.MergePullRequestByThreeWay',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413MergePullRequestByThreeWay<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergePullRequestByThreeWay']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergePullRequestByThreeWay']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413MergePullRequestByThreeWayKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergePullRequestByThreeWay']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.MergePullRequestByThreeWay'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413OverridePullRequestApprovalRulesKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.OverridePullRequestApprovalRules',
    '/#X-Amz-Target=CodeCommit_20150413.OverridePullRequestApprovalRules',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413OverridePullRequestApprovalRules<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.OverridePullRequestApprovalRules']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.OverridePullRequestApprovalRules']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetCodeCommit20150413OverridePullRequestApprovalRulesKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.OverridePullRequestApprovalRules']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.OverridePullRequestApprovalRules'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413PostCommentForComparedCommitKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.PostCommentForComparedCommit',
    '/#X-Amz-Target=CodeCommit_20150413.PostCommentForComparedCommit',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413PostCommentForComparedCommit<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.PostCommentForComparedCommit']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.PostCommentForComparedCommit']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413PostCommentForComparedCommitKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.PostCommentForComparedCommit']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.PostCommentForComparedCommit'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413PostCommentForPullRequestKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.PostCommentForPullRequest',
    '/#X-Amz-Target=CodeCommit_20150413.PostCommentForPullRequest',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413PostCommentForPullRequest<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.PostCommentForPullRequest']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.PostCommentForPullRequest']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413PostCommentForPullRequestKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.PostCommentForPullRequest']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.PostCommentForPullRequest'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413PostCommentReplyKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.PostCommentReply',
    '/#X-Amz-Target=CodeCommit_20150413.PostCommentReply',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413PostCommentReply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.PostCommentReply']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.PostCommentReply']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413PostCommentReplyKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.PostCommentReply']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.PostCommentReply'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413PutCommentReactionKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.PutCommentReaction',
    '/#X-Amz-Target=CodeCommit_20150413.PutCommentReaction',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413PutCommentReaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.PutCommentReaction']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.PutCommentReaction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413PutCommentReactionKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.PutCommentReaction']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.PutCommentReaction'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413PutFileKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.PutFile',
    '/#X-Amz-Target=CodeCommit_20150413.PutFile',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413PutFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.PutFile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.PutFile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413PutFileKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.PutFile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.PutFile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413PutRepositoryTriggersKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.PutRepositoryTriggers',
    '/#X-Amz-Target=CodeCommit_20150413.PutRepositoryTriggers',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413PutRepositoryTriggers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.PutRepositoryTriggers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.PutRepositoryTriggers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413PutRepositoryTriggersKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.PutRepositoryTriggers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.PutRepositoryTriggers'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413TagResourceKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.TagResource',
    '/#X-Amz-Target=CodeCommit_20150413.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413TagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.TagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413TagResourceKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413TestRepositoryTriggersKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.TestRepositoryTriggers',
    '/#X-Amz-Target=CodeCommit_20150413.TestRepositoryTriggers',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413TestRepositoryTriggers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.TestRepositoryTriggers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.TestRepositoryTriggers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413TestRepositoryTriggersKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.TestRepositoryTriggers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.TestRepositoryTriggers'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413UntagResourceKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.UntagResource',
    '/#X-Amz-Target=CodeCommit_20150413.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413UntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateContentKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateContent',
    '/#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateContent',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateContent<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateContent']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateContent']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateContentKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateContent']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateContent'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateDescriptionKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateDescription',
    '/#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateDescription',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateDescription<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateDescription']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateDescription']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateDescriptionKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateDescription']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateDescription'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateNameKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateName',
    '/#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateName',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateName']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateNameKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateName']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateName'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413UpdateCommentKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.UpdateComment',
    '/#X-Amz-Target=CodeCommit_20150413.UpdateComment',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413UpdateComment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateComment']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateComment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413UpdateCommentKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateComment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.UpdateComment'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413UpdateDefaultBranchKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.UpdateDefaultBranch',
    '/#X-Amz-Target=CodeCommit_20150413.UpdateDefaultBranch',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413UpdateDefaultBranch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateDefaultBranch']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateDefaultBranch']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413UpdateDefaultBranchKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateDefaultBranch']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.UpdateDefaultBranch'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413UpdatePullRequestApprovalRuleContentKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalRuleContent',
    '/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalRuleContent',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413UpdatePullRequestApprovalRuleContent<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalRuleContent']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalRuleContent']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetCodeCommit20150413UpdatePullRequestApprovalRuleContentKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalRuleContent']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalRuleContent'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413UpdatePullRequestApprovalStateKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalState',
    '/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalState',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413UpdatePullRequestApprovalState<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalState']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalState']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413UpdatePullRequestApprovalStateKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalState']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalState'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413UpdatePullRequestDescriptionKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestDescription',
    '/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestDescription',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413UpdatePullRequestDescription<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestDescription']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestDescription']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413UpdatePullRequestDescriptionKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestDescription']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestDescription'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413UpdatePullRequestStatusKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestStatus',
    '/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413UpdatePullRequestStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413UpdatePullRequestStatusKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413UpdatePullRequestTitleKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestTitle',
    '/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestTitle',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413UpdatePullRequestTitle<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestTitle']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestTitle']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413UpdatePullRequestTitleKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestTitle']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestTitle'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413UpdateRepositoryDescriptionKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryDescription',
    '/#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryDescription',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413UpdateRepositoryDescription<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryDescription']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryDescription']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413UpdateRepositoryDescriptionKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryDescription']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryDescription'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeCommit20150413UpdateRepositoryNameKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryName',
    '/#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryName',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeCommit20150413UpdateRepositoryName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryName']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeCommit20150413UpdateRepositoryNameKey()
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
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryName']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryName'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
