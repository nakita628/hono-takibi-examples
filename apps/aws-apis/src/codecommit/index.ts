import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetCodeCommit20150413AssociateApprovalRuleTemplateWithRepositoryHandler,
  xAmzTargetCodeCommit20150413BatchAssociateApprovalRuleTemplateWithRepositoriesHandler,
  xAmzTargetCodeCommit20150413BatchDescribeMergeConflictsHandler,
  xAmzTargetCodeCommit20150413BatchDisassociateApprovalRuleTemplateFromRepositoriesHandler,
  xAmzTargetCodeCommit20150413BatchGetCommitsHandler,
  xAmzTargetCodeCommit20150413BatchGetRepositoriesHandler,
  xAmzTargetCodeCommit20150413CreateApprovalRuleTemplateHandler,
  xAmzTargetCodeCommit20150413CreateBranchHandler,
  xAmzTargetCodeCommit20150413CreateCommitHandler,
  xAmzTargetCodeCommit20150413CreatePullRequestApprovalRuleHandler,
  xAmzTargetCodeCommit20150413CreatePullRequestHandler,
  xAmzTargetCodeCommit20150413CreateRepositoryHandler,
  xAmzTargetCodeCommit20150413CreateUnreferencedMergeCommitHandler,
  xAmzTargetCodeCommit20150413DeleteApprovalRuleTemplateHandler,
  xAmzTargetCodeCommit20150413DeleteBranchHandler,
  xAmzTargetCodeCommit20150413DeleteCommentContentHandler,
  xAmzTargetCodeCommit20150413DeleteFileHandler,
  xAmzTargetCodeCommit20150413DeletePullRequestApprovalRuleHandler,
  xAmzTargetCodeCommit20150413DeleteRepositoryHandler,
  xAmzTargetCodeCommit20150413DescribeMergeConflictsHandler,
  xAmzTargetCodeCommit20150413DescribePullRequestEventsHandler,
  xAmzTargetCodeCommit20150413DisassociateApprovalRuleTemplateFromRepositoryHandler,
  xAmzTargetCodeCommit20150413EvaluatePullRequestApprovalRulesHandler,
  xAmzTargetCodeCommit20150413GetApprovalRuleTemplateHandler,
  xAmzTargetCodeCommit20150413GetBlobHandler,
  xAmzTargetCodeCommit20150413GetBranchHandler,
  xAmzTargetCodeCommit20150413GetCommentHandler,
  xAmzTargetCodeCommit20150413GetCommentReactionsHandler,
  xAmzTargetCodeCommit20150413GetCommentsForComparedCommitHandler,
  xAmzTargetCodeCommit20150413GetCommentsForPullRequestHandler,
  xAmzTargetCodeCommit20150413GetCommitHandler,
  xAmzTargetCodeCommit20150413GetDifferencesHandler,
  xAmzTargetCodeCommit20150413GetFileHandler,
  xAmzTargetCodeCommit20150413GetFolderHandler,
  xAmzTargetCodeCommit20150413GetMergeCommitHandler,
  xAmzTargetCodeCommit20150413GetMergeConflictsHandler,
  xAmzTargetCodeCommit20150413GetMergeOptionsHandler,
  xAmzTargetCodeCommit20150413GetPullRequestApprovalStatesHandler,
  xAmzTargetCodeCommit20150413GetPullRequestHandler,
  xAmzTargetCodeCommit20150413GetPullRequestOverrideStateHandler,
  xAmzTargetCodeCommit20150413GetRepositoryHandler,
  xAmzTargetCodeCommit20150413GetRepositoryTriggersHandler,
  xAmzTargetCodeCommit20150413ListApprovalRuleTemplatesHandler,
  xAmzTargetCodeCommit20150413ListAssociatedApprovalRuleTemplatesForRepositoryHandler,
  xAmzTargetCodeCommit20150413ListBranchesHandler,
  xAmzTargetCodeCommit20150413ListPullRequestsHandler,
  xAmzTargetCodeCommit20150413ListRepositoriesForApprovalRuleTemplateHandler,
  xAmzTargetCodeCommit20150413ListRepositoriesHandler,
  xAmzTargetCodeCommit20150413ListTagsForResourceHandler,
  xAmzTargetCodeCommit20150413MergeBranchesByFastForwardHandler,
  xAmzTargetCodeCommit20150413MergeBranchesBySquashHandler,
  xAmzTargetCodeCommit20150413MergeBranchesByThreeWayHandler,
  xAmzTargetCodeCommit20150413MergePullRequestByFastForwardHandler,
  xAmzTargetCodeCommit20150413MergePullRequestBySquashHandler,
  xAmzTargetCodeCommit20150413MergePullRequestByThreeWayHandler,
  xAmzTargetCodeCommit20150413OverridePullRequestApprovalRulesHandler,
  xAmzTargetCodeCommit20150413PostCommentForComparedCommitHandler,
  xAmzTargetCodeCommit20150413PostCommentForPullRequestHandler,
  xAmzTargetCodeCommit20150413PostCommentReplyHandler,
  xAmzTargetCodeCommit20150413PutCommentReactionHandler,
  xAmzTargetCodeCommit20150413PutFileHandler,
  xAmzTargetCodeCommit20150413PutRepositoryTriggersHandler,
  xAmzTargetCodeCommit20150413TagResourceHandler,
  xAmzTargetCodeCommit20150413TestRepositoryTriggersHandler,
  xAmzTargetCodeCommit20150413UntagResourceHandler,
  xAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateContentHandler,
  xAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateDescriptionHandler,
  xAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateNameHandler,
  xAmzTargetCodeCommit20150413UpdateCommentHandler,
  xAmzTargetCodeCommit20150413UpdateDefaultBranchHandler,
  xAmzTargetCodeCommit20150413UpdatePullRequestApprovalRuleContentHandler,
  xAmzTargetCodeCommit20150413UpdatePullRequestApprovalStateHandler,
  xAmzTargetCodeCommit20150413UpdatePullRequestDescriptionHandler,
  xAmzTargetCodeCommit20150413UpdatePullRequestStatusHandler,
  xAmzTargetCodeCommit20150413UpdatePullRequestTitleHandler,
  xAmzTargetCodeCommit20150413UpdateRepositoryDescriptionHandler,
  xAmzTargetCodeCommit20150413UpdateRepositoryNameHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetCodeCommit20150413AssociateApprovalRuleTemplateWithRepositoryHandler)
  .route('/', xAmzTargetCodeCommit20150413BatchAssociateApprovalRuleTemplateWithRepositoriesHandler)
  .route('/', xAmzTargetCodeCommit20150413BatchDescribeMergeConflictsHandler)
  .route(
    '/',
    xAmzTargetCodeCommit20150413BatchDisassociateApprovalRuleTemplateFromRepositoriesHandler,
  )
  .route('/', xAmzTargetCodeCommit20150413BatchGetCommitsHandler)
  .route('/', xAmzTargetCodeCommit20150413BatchGetRepositoriesHandler)
  .route('/', xAmzTargetCodeCommit20150413CreateApprovalRuleTemplateHandler)
  .route('/', xAmzTargetCodeCommit20150413CreateBranchHandler)
  .route('/', xAmzTargetCodeCommit20150413CreateCommitHandler)
  .route('/', xAmzTargetCodeCommit20150413CreatePullRequestHandler)
  .route('/', xAmzTargetCodeCommit20150413CreatePullRequestApprovalRuleHandler)
  .route('/', xAmzTargetCodeCommit20150413CreateRepositoryHandler)
  .route('/', xAmzTargetCodeCommit20150413CreateUnreferencedMergeCommitHandler)
  .route('/', xAmzTargetCodeCommit20150413DeleteApprovalRuleTemplateHandler)
  .route('/', xAmzTargetCodeCommit20150413DeleteBranchHandler)
  .route('/', xAmzTargetCodeCommit20150413DeleteCommentContentHandler)
  .route('/', xAmzTargetCodeCommit20150413DeleteFileHandler)
  .route('/', xAmzTargetCodeCommit20150413DeletePullRequestApprovalRuleHandler)
  .route('/', xAmzTargetCodeCommit20150413DeleteRepositoryHandler)
  .route('/', xAmzTargetCodeCommit20150413DescribeMergeConflictsHandler)
  .route('/', xAmzTargetCodeCommit20150413DescribePullRequestEventsHandler)
  .route('/', xAmzTargetCodeCommit20150413DisassociateApprovalRuleTemplateFromRepositoryHandler)
  .route('/', xAmzTargetCodeCommit20150413EvaluatePullRequestApprovalRulesHandler)
  .route('/', xAmzTargetCodeCommit20150413GetApprovalRuleTemplateHandler)
  .route('/', xAmzTargetCodeCommit20150413GetBlobHandler)
  .route('/', xAmzTargetCodeCommit20150413GetBranchHandler)
  .route('/', xAmzTargetCodeCommit20150413GetCommentHandler)
  .route('/', xAmzTargetCodeCommit20150413GetCommentReactionsHandler)
  .route('/', xAmzTargetCodeCommit20150413GetCommentsForComparedCommitHandler)
  .route('/', xAmzTargetCodeCommit20150413GetCommentsForPullRequestHandler)
  .route('/', xAmzTargetCodeCommit20150413GetCommitHandler)
  .route('/', xAmzTargetCodeCommit20150413GetDifferencesHandler)
  .route('/', xAmzTargetCodeCommit20150413GetFileHandler)
  .route('/', xAmzTargetCodeCommit20150413GetFolderHandler)
  .route('/', xAmzTargetCodeCommit20150413GetMergeCommitHandler)
  .route('/', xAmzTargetCodeCommit20150413GetMergeConflictsHandler)
  .route('/', xAmzTargetCodeCommit20150413GetMergeOptionsHandler)
  .route('/', xAmzTargetCodeCommit20150413GetPullRequestHandler)
  .route('/', xAmzTargetCodeCommit20150413GetPullRequestApprovalStatesHandler)
  .route('/', xAmzTargetCodeCommit20150413GetPullRequestOverrideStateHandler)
  .route('/', xAmzTargetCodeCommit20150413GetRepositoryHandler)
  .route('/', xAmzTargetCodeCommit20150413GetRepositoryTriggersHandler)
  .route('/', xAmzTargetCodeCommit20150413ListApprovalRuleTemplatesHandler)
  .route('/', xAmzTargetCodeCommit20150413ListAssociatedApprovalRuleTemplatesForRepositoryHandler)
  .route('/', xAmzTargetCodeCommit20150413ListBranchesHandler)
  .route('/', xAmzTargetCodeCommit20150413ListPullRequestsHandler)
  .route('/', xAmzTargetCodeCommit20150413ListRepositoriesHandler)
  .route('/', xAmzTargetCodeCommit20150413ListRepositoriesForApprovalRuleTemplateHandler)
  .route('/', xAmzTargetCodeCommit20150413ListTagsForResourceHandler)
  .route('/', xAmzTargetCodeCommit20150413MergeBranchesByFastForwardHandler)
  .route('/', xAmzTargetCodeCommit20150413MergeBranchesBySquashHandler)
  .route('/', xAmzTargetCodeCommit20150413MergeBranchesByThreeWayHandler)
  .route('/', xAmzTargetCodeCommit20150413MergePullRequestByFastForwardHandler)
  .route('/', xAmzTargetCodeCommit20150413MergePullRequestBySquashHandler)
  .route('/', xAmzTargetCodeCommit20150413MergePullRequestByThreeWayHandler)
  .route('/', xAmzTargetCodeCommit20150413OverridePullRequestApprovalRulesHandler)
  .route('/', xAmzTargetCodeCommit20150413PostCommentForComparedCommitHandler)
  .route('/', xAmzTargetCodeCommit20150413PostCommentForPullRequestHandler)
  .route('/', xAmzTargetCodeCommit20150413PostCommentReplyHandler)
  .route('/', xAmzTargetCodeCommit20150413PutCommentReactionHandler)
  .route('/', xAmzTargetCodeCommit20150413PutFileHandler)
  .route('/', xAmzTargetCodeCommit20150413PutRepositoryTriggersHandler)
  .route('/', xAmzTargetCodeCommit20150413TagResourceHandler)
  .route('/', xAmzTargetCodeCommit20150413TestRepositoryTriggersHandler)
  .route('/', xAmzTargetCodeCommit20150413UntagResourceHandler)
  .route('/', xAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateContentHandler)
  .route('/', xAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateDescriptionHandler)
  .route('/', xAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateNameHandler)
  .route('/', xAmzTargetCodeCommit20150413UpdateCommentHandler)
  .route('/', xAmzTargetCodeCommit20150413UpdateDefaultBranchHandler)
  .route('/', xAmzTargetCodeCommit20150413UpdatePullRequestApprovalRuleContentHandler)
  .route('/', xAmzTargetCodeCommit20150413UpdatePullRequestApprovalStateHandler)
  .route('/', xAmzTargetCodeCommit20150413UpdatePullRequestDescriptionHandler)
  .route('/', xAmzTargetCodeCommit20150413UpdatePullRequestStatusHandler)
  .route('/', xAmzTargetCodeCommit20150413UpdatePullRequestTitleHandler)
  .route('/', xAmzTargetCodeCommit20150413UpdateRepositoryDescriptionHandler)
  .route('/', xAmzTargetCodeCommit20150413UpdateRepositoryNameHandler)

export default app
