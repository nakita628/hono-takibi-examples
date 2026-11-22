import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetCodeCommit20150413AssociateApprovalRuleTemplateWithRepository(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetCodeCommit20150413BatchAssociateApprovalRuleTemplateWithRepositories(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories'
    ].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413BatchDescribeMergeConflicts(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchDescribeMergeConflicts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.BatchDescribeMergeConflicts'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413BatchDisassociateApprovalRuleTemplateFromRepositories(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories'
    ].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413BatchGetCommits(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchGetCommits']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.BatchGetCommits'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413BatchGetRepositories(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.BatchGetRepositories']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.BatchGetRepositories'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413CreateApprovalRuleTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateApprovalRuleTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.CreateApprovalRuleTemplate'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413CreateBranch(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateBranch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.CreateBranch'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413CreateCommit(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateCommit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.CreateCommit'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413CreatePullRequest(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreatePullRequest']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.CreatePullRequest'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413CreatePullRequestApprovalRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreatePullRequestApprovalRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.CreatePullRequestApprovalRule'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413CreateRepository(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateRepository']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.CreateRepository'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413CreateUnreferencedMergeCommit(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.CreateUnreferencedMergeCommit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.CreateUnreferencedMergeCommit'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413DeleteApprovalRuleTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteApprovalRuleTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.DeleteApprovalRuleTemplate'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413DeleteBranch(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteBranch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.DeleteBranch'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413DeleteCommentContent(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteCommentContent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.DeleteCommentContent'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413DeleteFile(
  args: InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteFile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.DeleteFile'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413DeletePullRequestApprovalRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeletePullRequestApprovalRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.DeletePullRequestApprovalRule'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413DeleteRepository(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.DeleteRepository']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.DeleteRepository'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413DescribeMergeConflicts(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.DescribeMergeConflicts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.DescribeMergeConflicts'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413DescribePullRequestEvents(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.DescribePullRequestEvents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.DescribePullRequestEvents'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413DisassociateApprovalRuleTemplateFromRepository(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository'
    ].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413EvaluatePullRequestApprovalRules(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.EvaluatePullRequestApprovalRules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.EvaluatePullRequestApprovalRules'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetCodeCommit20150413GetApprovalRuleTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetApprovalRuleTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.GetApprovalRuleTemplate'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413GetBlob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetBlob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.GetBlob'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413GetBranch(
  args: InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetBranch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.GetBranch'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413GetComment(
  args: InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetComment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.GetComment'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413GetCommentReactions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommentReactions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.GetCommentReactions'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413GetCommentsForComparedCommit(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommentsForComparedCommit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.GetCommentsForComparedCommit'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413GetCommentsForPullRequest(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommentsForPullRequest']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.GetCommentsForPullRequest'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413GetCommit(
  args: InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetCommit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.GetCommit'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413GetDifferences(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetDifferences']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.GetDifferences'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413GetFile(
  args: InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetFile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.GetFile'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413GetFolder(
  args: InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.GetFolder']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.GetFolder'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413GetMergeCommit(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetMergeCommit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.GetMergeCommit'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413GetMergeConflicts(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetMergeConflicts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.GetMergeConflicts'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413GetMergeOptions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetMergeOptions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.GetMergeOptions'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413GetPullRequest(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetPullRequest']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.GetPullRequest'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413GetPullRequestApprovalStates(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetPullRequestApprovalStates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.GetPullRequestApprovalStates'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413GetPullRequestOverrideState(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetPullRequestOverrideState']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.GetPullRequestOverrideState'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413GetRepository(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetRepository']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.GetRepository'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413GetRepositoryTriggers(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.GetRepositoryTriggers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.GetRepositoryTriggers'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413ListApprovalRuleTemplates(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListApprovalRuleTemplates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.ListApprovalRuleTemplates'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413ListAssociatedApprovalRuleTemplatesForRepository(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository'
    ].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413ListBranches(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListBranches']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.ListBranches'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413ListPullRequests(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListPullRequests']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.ListPullRequests'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413ListRepositories(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListRepositories']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.ListRepositories'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413ListRepositoriesForApprovalRuleTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetCodeCommit20150413ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413MergeBranchesByFastForward(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergeBranchesByFastForward']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.MergeBranchesByFastForward'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413MergeBranchesBySquash(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergeBranchesBySquash']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.MergeBranchesBySquash'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413MergeBranchesByThreeWay(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergeBranchesByThreeWay']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.MergeBranchesByThreeWay'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413MergePullRequestByFastForward(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergePullRequestByFastForward']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.MergePullRequestByFastForward'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413MergePullRequestBySquash(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergePullRequestBySquash']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.MergePullRequestBySquash'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413MergePullRequestByThreeWay(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.MergePullRequestByThreeWay']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.MergePullRequestByThreeWay'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413OverridePullRequestApprovalRules(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.OverridePullRequestApprovalRules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.OverridePullRequestApprovalRules'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetCodeCommit20150413PostCommentForComparedCommit(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.PostCommentForComparedCommit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.PostCommentForComparedCommit'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413PostCommentForPullRequest(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.PostCommentForPullRequest']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.PostCommentForPullRequest'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413PostCommentReply(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.PostCommentReply']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.PostCommentReply'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413PutCommentReaction(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.PutCommentReaction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.PutCommentReaction'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413PutFile(
  args: InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.PutFile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.PutFile'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413PutRepositoryTriggers(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.PutRepositoryTriggers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.PutRepositoryTriggers'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413TagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=CodeCommit_20150413.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413TestRepositoryTriggers(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.TestRepositoryTriggers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.TestRepositoryTriggers'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413UntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateContent(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateContent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateContent'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateDescription(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateDescription']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateDescription'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateName(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateName'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413UpdateComment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateComment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.UpdateComment'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413UpdateDefaultBranch(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateDefaultBranch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.UpdateDefaultBranch'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413UpdatePullRequestApprovalRuleContent(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalRuleContent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalRuleContent'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetCodeCommit20150413UpdatePullRequestApprovalState(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalState']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalState'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413UpdatePullRequestDescription(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestDescription']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestDescription'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413UpdatePullRequestStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestStatus'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413UpdatePullRequestTitle(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestTitle']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestTitle'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413UpdateRepositoryDescription(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryDescription']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryDescription'].$post(args, options),
  )
}

export async function postXAmzTargetCodeCommit20150413UpdateRepositoryName(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryName'].$post(args, options),
  )
}
