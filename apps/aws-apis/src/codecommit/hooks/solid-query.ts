import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function getPostXAmzTargetCodeCommit20150413AssociateApprovalRuleTemplateWithRepositoryMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository',
    '/#X-Amz-Target=CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413AssociateApprovalRuleTemplateWithRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetCodeCommit20150413AssociateApprovalRuleTemplateWithRepositoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413AssociateApprovalRuleTemplateWithRepository<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413AssociateApprovalRuleTemplateWithRepositoryMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413BatchAssociateApprovalRuleTemplateWithRepositoriesMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories',
    '/#X-Amz-Target=CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413BatchAssociateApprovalRuleTemplateWithRepositoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetCodeCommit20150413BatchAssociateApprovalRuleTemplateWithRepositoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413BatchAssociateApprovalRuleTemplateWithRepositories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413BatchAssociateApprovalRuleTemplateWithRepositoriesMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413BatchDescribeMergeConflictsMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.BatchDescribeMergeConflicts',
    '/#X-Amz-Target=CodeCommit_20150413.BatchDescribeMergeConflicts',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413BatchDescribeMergeConflictsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchDescribeMergeConflicts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413BatchDescribeMergeConflictsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchDescribeMergeConflicts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.BatchDescribeMergeConflicts'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413BatchDescribeMergeConflicts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchDescribeMergeConflicts']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413BatchDescribeMergeConflictsMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413BatchDisassociateApprovalRuleTemplateFromRepositoriesMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories',
    '/#X-Amz-Target=CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413BatchDisassociateApprovalRuleTemplateFromRepositoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetCodeCommit20150413BatchDisassociateApprovalRuleTemplateFromRepositoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413BatchDisassociateApprovalRuleTemplateFromRepositories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413BatchDisassociateApprovalRuleTemplateFromRepositoriesMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413BatchGetCommitsMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.BatchGetCommits',
    '/#X-Amz-Target=CodeCommit_20150413.BatchGetCommits',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413BatchGetCommitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchGetCommits']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413BatchGetCommitsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchGetCommits']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.BatchGetCommits'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413BatchGetCommits<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchGetCommits']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413BatchGetCommitsMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413BatchGetRepositoriesMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.BatchGetRepositories',
    '/#X-Amz-Target=CodeCommit_20150413.BatchGetRepositories',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413BatchGetRepositoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchGetRepositories']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413BatchGetRepositoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchGetRepositories']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.BatchGetRepositories'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413BatchGetRepositories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchGetRepositories']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413BatchGetRepositoriesMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413CreateApprovalRuleTemplateMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.CreateApprovalRuleTemplate',
    '/#X-Amz-Target=CodeCommit_20150413.CreateApprovalRuleTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413CreateApprovalRuleTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateApprovalRuleTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413CreateApprovalRuleTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateApprovalRuleTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.CreateApprovalRuleTemplate'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413CreateApprovalRuleTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateApprovalRuleTemplate']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413CreateApprovalRuleTemplateMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413CreateBranchMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.CreateBranch',
    '/#X-Amz-Target=CodeCommit_20150413.CreateBranch',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413CreateBranchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateBranch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413CreateBranchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateBranch']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.CreateBranch'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413CreateBranch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateBranch']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateBranch']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413CreateBranchMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413CreateCommitMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.CreateCommit',
    '/#X-Amz-Target=CodeCommit_20150413.CreateCommit',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413CreateCommitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateCommit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413CreateCommitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateCommit']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.CreateCommit'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413CreateCommit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateCommit']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateCommit']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413CreateCommitMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413CreatePullRequestMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.CreatePullRequest',
    '/#X-Amz-Target=CodeCommit_20150413.CreatePullRequest',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413CreatePullRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreatePullRequest']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413CreatePullRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreatePullRequest']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.CreatePullRequest'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413CreatePullRequest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreatePullRequest']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413CreatePullRequestMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413CreatePullRequestApprovalRuleMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.CreatePullRequestApprovalRule',
    '/#X-Amz-Target=CodeCommit_20150413.CreatePullRequestApprovalRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413CreatePullRequestApprovalRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreatePullRequestApprovalRule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413CreatePullRequestApprovalRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreatePullRequestApprovalRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.CreatePullRequestApprovalRule'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413CreatePullRequestApprovalRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreatePullRequestApprovalRule']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413CreatePullRequestApprovalRuleMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413CreateRepositoryMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.CreateRepository',
    '/#X-Amz-Target=CodeCommit_20150413.CreateRepository',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413CreateRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateRepository']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413CreateRepositoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateRepository']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.CreateRepository'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413CreateRepository<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateRepository']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413CreateRepositoryMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413CreateUnreferencedMergeCommitMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.CreateUnreferencedMergeCommit',
    '/#X-Amz-Target=CodeCommit_20150413.CreateUnreferencedMergeCommit',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413CreateUnreferencedMergeCommitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateUnreferencedMergeCommit']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413CreateUnreferencedMergeCommitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateUnreferencedMergeCommit']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.CreateUnreferencedMergeCommit'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413CreateUnreferencedMergeCommit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateUnreferencedMergeCommit']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413CreateUnreferencedMergeCommitMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413DeleteApprovalRuleTemplateMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.DeleteApprovalRuleTemplate',
    '/#X-Amz-Target=CodeCommit_20150413.DeleteApprovalRuleTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413DeleteApprovalRuleTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteApprovalRuleTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413DeleteApprovalRuleTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteApprovalRuleTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.DeleteApprovalRuleTemplate'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413DeleteApprovalRuleTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteApprovalRuleTemplate']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413DeleteApprovalRuleTemplateMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413DeleteBranchMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.DeleteBranch',
    '/#X-Amz-Target=CodeCommit_20150413.DeleteBranch',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413DeleteBranchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteBranch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413DeleteBranchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteBranch']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.DeleteBranch'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413DeleteBranch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteBranch']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteBranch']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413DeleteBranchMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413DeleteCommentContentMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.DeleteCommentContent',
    '/#X-Amz-Target=CodeCommit_20150413.DeleteCommentContent',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413DeleteCommentContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteCommentContent']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413DeleteCommentContentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteCommentContent']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.DeleteCommentContent'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413DeleteCommentContent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteCommentContent']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413DeleteCommentContentMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413DeleteFileMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.DeleteFile',
    '/#X-Amz-Target=CodeCommit_20150413.DeleteFile',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413DeleteFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteFile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413DeleteFileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteFile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.DeleteFile'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413DeleteFile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteFile']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteFile']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413DeleteFileMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413DeletePullRequestApprovalRuleMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.DeletePullRequestApprovalRule',
    '/#X-Amz-Target=CodeCommit_20150413.DeletePullRequestApprovalRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413DeletePullRequestApprovalRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeletePullRequestApprovalRule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413DeletePullRequestApprovalRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeletePullRequestApprovalRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.DeletePullRequestApprovalRule'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413DeletePullRequestApprovalRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeletePullRequestApprovalRule']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413DeletePullRequestApprovalRuleMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413DeleteRepositoryMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.DeleteRepository',
    '/#X-Amz-Target=CodeCommit_20150413.DeleteRepository',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413DeleteRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteRepository']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413DeleteRepositoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteRepository']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.DeleteRepository'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413DeleteRepository<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteRepository']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413DeleteRepositoryMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413DescribeMergeConflictsMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.DescribeMergeConflicts',
    '/#X-Amz-Target=CodeCommit_20150413.DescribeMergeConflicts',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413DescribeMergeConflictsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.DescribeMergeConflicts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413DescribeMergeConflictsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.DescribeMergeConflicts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.DescribeMergeConflicts'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413DescribeMergeConflicts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.DescribeMergeConflicts']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413DescribeMergeConflictsMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413DescribePullRequestEventsMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.DescribePullRequestEvents',
    '/#X-Amz-Target=CodeCommit_20150413.DescribePullRequestEvents',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413DescribePullRequestEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.DescribePullRequestEvents']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413DescribePullRequestEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.DescribePullRequestEvents']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.DescribePullRequestEvents'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413DescribePullRequestEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.DescribePullRequestEvents']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413DescribePullRequestEventsMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413DisassociateApprovalRuleTemplateFromRepositoryMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository',
    '/#X-Amz-Target=CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413DisassociateApprovalRuleTemplateFromRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetCodeCommit20150413DisassociateApprovalRuleTemplateFromRepositoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413DisassociateApprovalRuleTemplateFromRepository<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413DisassociateApprovalRuleTemplateFromRepositoryMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413EvaluatePullRequestApprovalRulesMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.EvaluatePullRequestApprovalRules',
    '/#X-Amz-Target=CodeCommit_20150413.EvaluatePullRequestApprovalRules',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413EvaluatePullRequestApprovalRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.EvaluatePullRequestApprovalRules']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413EvaluatePullRequestApprovalRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.EvaluatePullRequestApprovalRules']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.EvaluatePullRequestApprovalRules'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413EvaluatePullRequestApprovalRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.EvaluatePullRequestApprovalRules']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413EvaluatePullRequestApprovalRulesMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413GetApprovalRuleTemplateMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetApprovalRuleTemplate',
    '/#X-Amz-Target=CodeCommit_20150413.GetApprovalRuleTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413GetApprovalRuleTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetApprovalRuleTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413GetApprovalRuleTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetApprovalRuleTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.GetApprovalRuleTemplate'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413GetApprovalRuleTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetApprovalRuleTemplate']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413GetApprovalRuleTemplateMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413GetBlobMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetBlob',
    '/#X-Amz-Target=CodeCommit_20150413.GetBlob',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413GetBlobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetBlob']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetBlob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413GetBlobMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetBlob']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=CodeCommit_20150413.GetBlob'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413GetBlob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetBlob']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetBlob']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413GetBlobMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413GetBranchMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetBranch',
    '/#X-Amz-Target=CodeCommit_20150413.GetBranch',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413GetBranchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetBranch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413GetBranchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetBranch']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.GetBranch'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413GetBranch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetBranch']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetBranch']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413GetBranchMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413GetCommentMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetComment',
    '/#X-Amz-Target=CodeCommit_20150413.GetComment',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413GetCommentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetComment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413GetCommentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetComment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.GetComment'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413GetComment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetComment']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetComment']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413GetCommentMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413GetCommentReactionsMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetCommentReactions',
    '/#X-Amz-Target=CodeCommit_20150413.GetCommentReactions',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413GetCommentReactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommentReactions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413GetCommentReactionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommentReactions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.GetCommentReactions'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413GetCommentReactions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommentReactions']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413GetCommentReactionsMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413GetCommentsForComparedCommitMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetCommentsForComparedCommit',
    '/#X-Amz-Target=CodeCommit_20150413.GetCommentsForComparedCommit',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413GetCommentsForComparedCommitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommentsForComparedCommit']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413GetCommentsForComparedCommitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommentsForComparedCommit']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.GetCommentsForComparedCommit'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413GetCommentsForComparedCommit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommentsForComparedCommit']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413GetCommentsForComparedCommitMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413GetCommentsForPullRequestMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetCommentsForPullRequest',
    '/#X-Amz-Target=CodeCommit_20150413.GetCommentsForPullRequest',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413GetCommentsForPullRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommentsForPullRequest']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413GetCommentsForPullRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommentsForPullRequest']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.GetCommentsForPullRequest'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413GetCommentsForPullRequest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommentsForPullRequest']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413GetCommentsForPullRequestMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413GetCommitMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetCommit',
    '/#X-Amz-Target=CodeCommit_20150413.GetCommit',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413GetCommitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413GetCommitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommit']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.GetCommit'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413GetCommit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommit']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommit']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413GetCommitMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413GetDifferencesMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetDifferences',
    '/#X-Amz-Target=CodeCommit_20150413.GetDifferences',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413GetDifferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetDifferences']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413GetDifferencesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetDifferences']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.GetDifferences'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413GetDifferences<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetDifferences']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetDifferences']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413GetDifferencesMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413GetFileMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetFile',
    '/#X-Amz-Target=CodeCommit_20150413.GetFile',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413GetFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetFile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetFile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413GetFileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetFile']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=CodeCommit_20150413.GetFile'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413GetFile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetFile']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetFile']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413GetFileMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413GetFolderMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetFolder',
    '/#X-Amz-Target=CodeCommit_20150413.GetFolder',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413GetFolderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetFolder']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413GetFolderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetFolder']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.GetFolder'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413GetFolder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetFolder']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetFolder']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413GetFolderMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413GetMergeCommitMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetMergeCommit',
    '/#X-Amz-Target=CodeCommit_20150413.GetMergeCommit',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413GetMergeCommitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetMergeCommit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413GetMergeCommitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetMergeCommit']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.GetMergeCommit'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413GetMergeCommit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetMergeCommit']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetMergeCommit']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413GetMergeCommitMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413GetMergeConflictsMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetMergeConflicts',
    '/#X-Amz-Target=CodeCommit_20150413.GetMergeConflicts',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413GetMergeConflictsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetMergeConflicts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413GetMergeConflictsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetMergeConflicts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.GetMergeConflicts'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413GetMergeConflicts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetMergeConflicts']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413GetMergeConflictsMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413GetMergeOptionsMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetMergeOptions',
    '/#X-Amz-Target=CodeCommit_20150413.GetMergeOptions',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413GetMergeOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetMergeOptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413GetMergeOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetMergeOptions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.GetMergeOptions'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413GetMergeOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetMergeOptions']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413GetMergeOptionsMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413GetPullRequestMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetPullRequest',
    '/#X-Amz-Target=CodeCommit_20150413.GetPullRequest',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413GetPullRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetPullRequest']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413GetPullRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetPullRequest']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.GetPullRequest'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413GetPullRequest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetPullRequest']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetPullRequest']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413GetPullRequestMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413GetPullRequestApprovalStatesMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetPullRequestApprovalStates',
    '/#X-Amz-Target=CodeCommit_20150413.GetPullRequestApprovalStates',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413GetPullRequestApprovalStatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetPullRequestApprovalStates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413GetPullRequestApprovalStatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetPullRequestApprovalStates']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.GetPullRequestApprovalStates'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413GetPullRequestApprovalStates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetPullRequestApprovalStates']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413GetPullRequestApprovalStatesMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413GetPullRequestOverrideStateMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetPullRequestOverrideState',
    '/#X-Amz-Target=CodeCommit_20150413.GetPullRequestOverrideState',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413GetPullRequestOverrideStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetPullRequestOverrideState']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413GetPullRequestOverrideStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetPullRequestOverrideState']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.GetPullRequestOverrideState'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413GetPullRequestOverrideState<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetPullRequestOverrideState']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413GetPullRequestOverrideStateMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413GetRepositoryMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetRepository',
    '/#X-Amz-Target=CodeCommit_20150413.GetRepository',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413GetRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetRepository']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413GetRepositoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetRepository']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.GetRepository'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413GetRepository<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetRepository']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetRepository']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413GetRepositoryMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413GetRepositoryTriggersMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.GetRepositoryTriggers',
    '/#X-Amz-Target=CodeCommit_20150413.GetRepositoryTriggers',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413GetRepositoryTriggersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetRepositoryTriggers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413GetRepositoryTriggersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetRepositoryTriggers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.GetRepositoryTriggers'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413GetRepositoryTriggers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetRepositoryTriggers']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413GetRepositoryTriggersMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413ListApprovalRuleTemplatesMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.ListApprovalRuleTemplates',
    '/#X-Amz-Target=CodeCommit_20150413.ListApprovalRuleTemplates',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413ListApprovalRuleTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListApprovalRuleTemplates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413ListApprovalRuleTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListApprovalRuleTemplates']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.ListApprovalRuleTemplates'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413ListApprovalRuleTemplates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListApprovalRuleTemplates']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413ListApprovalRuleTemplatesMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413ListAssociatedApprovalRuleTemplatesForRepositoryMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository',
    '/#X-Amz-Target=CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413ListAssociatedApprovalRuleTemplatesForRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetCodeCommit20150413ListAssociatedApprovalRuleTemplatesForRepositoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413ListAssociatedApprovalRuleTemplatesForRepository<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413ListAssociatedApprovalRuleTemplatesForRepositoryMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413ListBranchesMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.ListBranches',
    '/#X-Amz-Target=CodeCommit_20150413.ListBranches',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413ListBranchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.ListBranches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413ListBranchesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListBranches']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.ListBranches'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413ListBranches<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListBranches']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListBranches']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413ListBranchesMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413ListPullRequestsMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.ListPullRequests',
    '/#X-Amz-Target=CodeCommit_20150413.ListPullRequests',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413ListPullRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListPullRequests']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413ListPullRequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListPullRequests']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.ListPullRequests'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413ListPullRequests<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListPullRequests']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413ListPullRequestsMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413ListRepositoriesMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.ListRepositories',
    '/#X-Amz-Target=CodeCommit_20150413.ListRepositories',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413ListRepositoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListRepositories']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413ListRepositoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListRepositories']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.ListRepositories'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413ListRepositories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListRepositories']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413ListRepositoriesMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413ListRepositoriesForApprovalRuleTemplateMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate',
    '/#X-Amz-Target=CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413ListRepositoriesForApprovalRuleTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetCodeCommit20150413ListRepositoriesForApprovalRuleTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413ListRepositoriesForApprovalRuleTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413ListRepositoriesForApprovalRuleTemplateMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.ListTagsForResource',
    '/#X-Amz-Target=CodeCommit_20150413.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413ListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListTagsForResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413ListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413MergeBranchesByFastForwardMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.MergeBranchesByFastForward',
    '/#X-Amz-Target=CodeCommit_20150413.MergeBranchesByFastForward',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413MergeBranchesByFastForwardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergeBranchesByFastForward']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413MergeBranchesByFastForwardMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergeBranchesByFastForward']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.MergeBranchesByFastForward'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413MergeBranchesByFastForward<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergeBranchesByFastForward']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413MergeBranchesByFastForwardMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413MergeBranchesBySquashMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.MergeBranchesBySquash',
    '/#X-Amz-Target=CodeCommit_20150413.MergeBranchesBySquash',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413MergeBranchesBySquashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergeBranchesBySquash']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413MergeBranchesBySquashMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergeBranchesBySquash']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.MergeBranchesBySquash'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413MergeBranchesBySquash<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergeBranchesBySquash']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413MergeBranchesBySquashMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413MergeBranchesByThreeWayMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.MergeBranchesByThreeWay',
    '/#X-Amz-Target=CodeCommit_20150413.MergeBranchesByThreeWay',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413MergeBranchesByThreeWayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergeBranchesByThreeWay']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413MergeBranchesByThreeWayMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergeBranchesByThreeWay']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.MergeBranchesByThreeWay'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413MergeBranchesByThreeWay<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergeBranchesByThreeWay']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413MergeBranchesByThreeWayMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413MergePullRequestByFastForwardMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.MergePullRequestByFastForward',
    '/#X-Amz-Target=CodeCommit_20150413.MergePullRequestByFastForward',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413MergePullRequestByFastForwardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergePullRequestByFastForward']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413MergePullRequestByFastForwardMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergePullRequestByFastForward']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.MergePullRequestByFastForward'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413MergePullRequestByFastForward<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergePullRequestByFastForward']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413MergePullRequestByFastForwardMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413MergePullRequestBySquashMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.MergePullRequestBySquash',
    '/#X-Amz-Target=CodeCommit_20150413.MergePullRequestBySquash',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413MergePullRequestBySquashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergePullRequestBySquash']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413MergePullRequestBySquashMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergePullRequestBySquash']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.MergePullRequestBySquash'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413MergePullRequestBySquash<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergePullRequestBySquash']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413MergePullRequestBySquashMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413MergePullRequestByThreeWayMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.MergePullRequestByThreeWay',
    '/#X-Amz-Target=CodeCommit_20150413.MergePullRequestByThreeWay',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413MergePullRequestByThreeWayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergePullRequestByThreeWay']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413MergePullRequestByThreeWayMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergePullRequestByThreeWay']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.MergePullRequestByThreeWay'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413MergePullRequestByThreeWay<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergePullRequestByThreeWay']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413MergePullRequestByThreeWayMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413OverridePullRequestApprovalRulesMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.OverridePullRequestApprovalRules',
    '/#X-Amz-Target=CodeCommit_20150413.OverridePullRequestApprovalRules',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413OverridePullRequestApprovalRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.OverridePullRequestApprovalRules']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413OverridePullRequestApprovalRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.OverridePullRequestApprovalRules']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.OverridePullRequestApprovalRules'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413OverridePullRequestApprovalRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.OverridePullRequestApprovalRules']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413OverridePullRequestApprovalRulesMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413PostCommentForComparedCommitMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.PostCommentForComparedCommit',
    '/#X-Amz-Target=CodeCommit_20150413.PostCommentForComparedCommit',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413PostCommentForComparedCommitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.PostCommentForComparedCommit']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413PostCommentForComparedCommitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.PostCommentForComparedCommit']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.PostCommentForComparedCommit'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413PostCommentForComparedCommit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.PostCommentForComparedCommit']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413PostCommentForComparedCommitMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413PostCommentForPullRequestMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.PostCommentForPullRequest',
    '/#X-Amz-Target=CodeCommit_20150413.PostCommentForPullRequest',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413PostCommentForPullRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.PostCommentForPullRequest']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413PostCommentForPullRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.PostCommentForPullRequest']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.PostCommentForPullRequest'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413PostCommentForPullRequest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.PostCommentForPullRequest']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413PostCommentForPullRequestMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413PostCommentReplyMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.PostCommentReply',
    '/#X-Amz-Target=CodeCommit_20150413.PostCommentReply',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413PostCommentReplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.PostCommentReply']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413PostCommentReplyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.PostCommentReply']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.PostCommentReply'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413PostCommentReply<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.PostCommentReply']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413PostCommentReplyMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413PutCommentReactionMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.PutCommentReaction',
    '/#X-Amz-Target=CodeCommit_20150413.PutCommentReaction',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413PutCommentReactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.PutCommentReaction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413PutCommentReactionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.PutCommentReaction']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.PutCommentReaction'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413PutCommentReaction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.PutCommentReaction']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413PutCommentReactionMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413PutFileMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.PutFile',
    '/#X-Amz-Target=CodeCommit_20150413.PutFile',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413PutFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.PutFile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.PutFile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413PutFileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.PutFile']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=CodeCommit_20150413.PutFile'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413PutFile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.PutFile']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.PutFile']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413PutFileMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413PutRepositoryTriggersMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.PutRepositoryTriggers',
    '/#X-Amz-Target=CodeCommit_20150413.PutRepositoryTriggers',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413PutRepositoryTriggersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.PutRepositoryTriggers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413PutRepositoryTriggersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.PutRepositoryTriggers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.PutRepositoryTriggers'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413PutRepositoryTriggers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.PutRepositoryTriggers']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413PutRepositoryTriggersMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413TagResourceMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.TagResource',
    '/#X-Amz-Target=CodeCommit_20150413.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.TagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413TagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=CodeCommit_20150413.TagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.TagResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413TagResourceMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413TestRepositoryTriggersMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.TestRepositoryTriggers',
    '/#X-Amz-Target=CodeCommit_20150413.TestRepositoryTriggers',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413TestRepositoryTriggersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.TestRepositoryTriggers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413TestRepositoryTriggersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.TestRepositoryTriggers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.TestRepositoryTriggers'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413TestRepositoryTriggers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.TestRepositoryTriggers']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413TestRepositoryTriggersMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.UntagResource',
    '/#X-Amz-Target=CodeCommit_20150413.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.UntagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413UntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=CodeCommit_20150413.UntagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.UntagResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413UntagResourceMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateContentMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateContent',
    '/#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateContent',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateContent']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateContentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateContent']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateContent'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateContent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateContent']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateContentMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateDescriptionMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateDescription',
    '/#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateDescription',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateDescriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateDescription']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateDescriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateDescription']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateDescription'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateDescription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateDescription']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateDescriptionMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateNameMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateName',
    '/#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateName',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateName']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateName'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateName']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateNameMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413UpdateCommentMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.UpdateComment',
    '/#X-Amz-Target=CodeCommit_20150413.UpdateComment',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413UpdateCommentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateComment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413UpdateCommentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateComment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.UpdateComment'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413UpdateComment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateComment']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateComment']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413UpdateCommentMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413UpdateDefaultBranchMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.UpdateDefaultBranch',
    '/#X-Amz-Target=CodeCommit_20150413.UpdateDefaultBranch',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413UpdateDefaultBranchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateDefaultBranch']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413UpdateDefaultBranchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateDefaultBranch']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.UpdateDefaultBranch'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413UpdateDefaultBranch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateDefaultBranch']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413UpdateDefaultBranchMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413UpdatePullRequestApprovalRuleContentMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalRuleContent',
    '/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalRuleContent',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413UpdatePullRequestApprovalRuleContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalRuleContent']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetCodeCommit20150413UpdatePullRequestApprovalRuleContentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalRuleContent']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalRuleContent'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413UpdatePullRequestApprovalRuleContent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalRuleContent']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413UpdatePullRequestApprovalRuleContentMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413UpdatePullRequestApprovalStateMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalState',
    '/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalState',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413UpdatePullRequestApprovalStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalState']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413UpdatePullRequestApprovalStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalState']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalState'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413UpdatePullRequestApprovalState<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalState']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413UpdatePullRequestApprovalStateMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413UpdatePullRequestDescriptionMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestDescription',
    '/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestDescription',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413UpdatePullRequestDescriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestDescription']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413UpdatePullRequestDescriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestDescription']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestDescription'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413UpdatePullRequestDescription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestDescription']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413UpdatePullRequestDescriptionMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413UpdatePullRequestStatusMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestStatus',
    '/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413UpdatePullRequestStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413UpdatePullRequestStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestStatus'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413UpdatePullRequestStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestStatus']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413UpdatePullRequestStatusMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413UpdatePullRequestTitleMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestTitle',
    '/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestTitle',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413UpdatePullRequestTitleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestTitle']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413UpdatePullRequestTitleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestTitle']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestTitle'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413UpdatePullRequestTitle<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestTitle']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413UpdatePullRequestTitleMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413UpdateRepositoryDescriptionMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryDescription',
    '/#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryDescription',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413UpdateRepositoryDescriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryDescription']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413UpdateRepositoryDescriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryDescription']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryDescription'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413UpdateRepositoryDescription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryDescription']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetCodeCommit20150413UpdateRepositoryDescriptionMutationOptions<
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

export function getPostXAmzTargetCodeCommit20150413UpdateRepositoryNameMutationKey() {
  return [
    '#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryName',
    '/#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryName',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeCommit20150413UpdateRepositoryNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeCommit20150413UpdateRepositoryNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryName']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryName'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodeCommit20150413UpdateRepositoryName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryName']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeCommit20150413UpdateRepositoryNameMutationOptions<
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
