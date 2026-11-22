import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetCodeCommit20150413AssociateApprovalRuleTemplateWithRepositoryHandler,
  XAmzTargetCodeCommit20150413BatchAssociateApprovalRuleTemplateWithRepositoriesHandler,
  XAmzTargetCodeCommit20150413BatchDescribeMergeConflictsHandler,
  XAmzTargetCodeCommit20150413BatchDisassociateApprovalRuleTemplateFromRepositoriesHandler,
  XAmzTargetCodeCommit20150413BatchGetCommitsHandler,
  XAmzTargetCodeCommit20150413BatchGetRepositoriesHandler,
  XAmzTargetCodeCommit20150413CreateApprovalRuleTemplateHandler,
  XAmzTargetCodeCommit20150413CreateBranchHandler,
  XAmzTargetCodeCommit20150413CreateCommitHandler,
  XAmzTargetCodeCommit20150413CreatePullRequestApprovalRuleHandler,
  XAmzTargetCodeCommit20150413CreatePullRequestHandler,
  XAmzTargetCodeCommit20150413CreateRepositoryHandler,
  XAmzTargetCodeCommit20150413CreateUnreferencedMergeCommitHandler,
  XAmzTargetCodeCommit20150413DeleteApprovalRuleTemplateHandler,
  XAmzTargetCodeCommit20150413DeleteBranchHandler,
  XAmzTargetCodeCommit20150413DeleteCommentContentHandler,
  XAmzTargetCodeCommit20150413DeleteFileHandler,
  XAmzTargetCodeCommit20150413DeletePullRequestApprovalRuleHandler,
  XAmzTargetCodeCommit20150413DeleteRepositoryHandler,
  XAmzTargetCodeCommit20150413DescribeMergeConflictsHandler,
  XAmzTargetCodeCommit20150413DescribePullRequestEventsHandler,
  XAmzTargetCodeCommit20150413DisassociateApprovalRuleTemplateFromRepositoryHandler,
  XAmzTargetCodeCommit20150413EvaluatePullRequestApprovalRulesHandler,
  XAmzTargetCodeCommit20150413GetApprovalRuleTemplateHandler,
  XAmzTargetCodeCommit20150413GetBlobHandler,
  XAmzTargetCodeCommit20150413GetBranchHandler,
  XAmzTargetCodeCommit20150413GetCommentHandler,
  XAmzTargetCodeCommit20150413GetCommentReactionsHandler,
  XAmzTargetCodeCommit20150413GetCommentsForComparedCommitHandler,
  XAmzTargetCodeCommit20150413GetCommentsForPullRequestHandler,
  XAmzTargetCodeCommit20150413GetCommitHandler,
  XAmzTargetCodeCommit20150413GetDifferencesHandler,
  XAmzTargetCodeCommit20150413GetFileHandler,
  XAmzTargetCodeCommit20150413GetFolderHandler,
  XAmzTargetCodeCommit20150413GetMergeCommitHandler,
  XAmzTargetCodeCommit20150413GetMergeConflictsHandler,
  XAmzTargetCodeCommit20150413GetMergeOptionsHandler,
  XAmzTargetCodeCommit20150413GetPullRequestApprovalStatesHandler,
  XAmzTargetCodeCommit20150413GetPullRequestHandler,
  XAmzTargetCodeCommit20150413GetPullRequestOverrideStateHandler,
  XAmzTargetCodeCommit20150413GetRepositoryHandler,
  XAmzTargetCodeCommit20150413GetRepositoryTriggersHandler,
  XAmzTargetCodeCommit20150413ListApprovalRuleTemplatesHandler,
  XAmzTargetCodeCommit20150413ListAssociatedApprovalRuleTemplatesForRepositoryHandler,
  XAmzTargetCodeCommit20150413ListBranchesHandler,
  XAmzTargetCodeCommit20150413ListPullRequestsHandler,
  XAmzTargetCodeCommit20150413ListRepositoriesForApprovalRuleTemplateHandler,
  XAmzTargetCodeCommit20150413ListRepositoriesHandler,
  XAmzTargetCodeCommit20150413ListTagsForResourceHandler,
  XAmzTargetCodeCommit20150413MergeBranchesByFastForwardHandler,
  XAmzTargetCodeCommit20150413MergeBranchesBySquashHandler,
  XAmzTargetCodeCommit20150413MergeBranchesByThreeWayHandler,
  XAmzTargetCodeCommit20150413MergePullRequestByFastForwardHandler,
  XAmzTargetCodeCommit20150413MergePullRequestBySquashHandler,
  XAmzTargetCodeCommit20150413MergePullRequestByThreeWayHandler,
  XAmzTargetCodeCommit20150413OverridePullRequestApprovalRulesHandler,
  XAmzTargetCodeCommit20150413PostCommentForComparedCommitHandler,
  XAmzTargetCodeCommit20150413PostCommentForPullRequestHandler,
  XAmzTargetCodeCommit20150413PostCommentReplyHandler,
  XAmzTargetCodeCommit20150413PutCommentReactionHandler,
  XAmzTargetCodeCommit20150413PutFileHandler,
  XAmzTargetCodeCommit20150413PutRepositoryTriggersHandler,
  XAmzTargetCodeCommit20150413TagResourceHandler,
  XAmzTargetCodeCommit20150413TestRepositoryTriggersHandler,
  XAmzTargetCodeCommit20150413UntagResourceHandler,
  XAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateContentHandler,
  XAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateDescriptionHandler,
  XAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateNameHandler,
  XAmzTargetCodeCommit20150413UpdateCommentHandler,
  XAmzTargetCodeCommit20150413UpdateDefaultBranchHandler,
  XAmzTargetCodeCommit20150413UpdatePullRequestApprovalRuleContentHandler,
  XAmzTargetCodeCommit20150413UpdatePullRequestApprovalStateHandler,
  XAmzTargetCodeCommit20150413UpdatePullRequestDescriptionHandler,
  XAmzTargetCodeCommit20150413UpdatePullRequestStatusHandler,
  XAmzTargetCodeCommit20150413UpdatePullRequestTitleHandler,
  XAmzTargetCodeCommit20150413UpdateRepositoryDescriptionHandler,
  XAmzTargetCodeCommit20150413UpdateRepositoryNameHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetCodeCommit20150413AssociateApprovalRuleTemplateWithRepositoryHandler)
  .route('/', XAmzTargetCodeCommit20150413BatchAssociateApprovalRuleTemplateWithRepositoriesHandler)
  .route('/', XAmzTargetCodeCommit20150413BatchDescribeMergeConflictsHandler)
  .route(
    '/',
    XAmzTargetCodeCommit20150413BatchDisassociateApprovalRuleTemplateFromRepositoriesHandler,
  )
  .route('/', XAmzTargetCodeCommit20150413BatchGetCommitsHandler)
  .route('/', XAmzTargetCodeCommit20150413BatchGetRepositoriesHandler)
  .route('/', XAmzTargetCodeCommit20150413CreateApprovalRuleTemplateHandler)
  .route('/', XAmzTargetCodeCommit20150413CreateBranchHandler)
  .route('/', XAmzTargetCodeCommit20150413CreateCommitHandler)
  .route('/', XAmzTargetCodeCommit20150413CreatePullRequestHandler)
  .route('/', XAmzTargetCodeCommit20150413CreatePullRequestApprovalRuleHandler)
  .route('/', XAmzTargetCodeCommit20150413CreateRepositoryHandler)
  .route('/', XAmzTargetCodeCommit20150413CreateUnreferencedMergeCommitHandler)
  .route('/', XAmzTargetCodeCommit20150413DeleteApprovalRuleTemplateHandler)
  .route('/', XAmzTargetCodeCommit20150413DeleteBranchHandler)
  .route('/', XAmzTargetCodeCommit20150413DeleteCommentContentHandler)
  .route('/', XAmzTargetCodeCommit20150413DeleteFileHandler)
  .route('/', XAmzTargetCodeCommit20150413DeletePullRequestApprovalRuleHandler)
  .route('/', XAmzTargetCodeCommit20150413DeleteRepositoryHandler)
  .route('/', XAmzTargetCodeCommit20150413DescribeMergeConflictsHandler)
  .route('/', XAmzTargetCodeCommit20150413DescribePullRequestEventsHandler)
  .route('/', XAmzTargetCodeCommit20150413DisassociateApprovalRuleTemplateFromRepositoryHandler)
  .route('/', XAmzTargetCodeCommit20150413EvaluatePullRequestApprovalRulesHandler)
  .route('/', XAmzTargetCodeCommit20150413GetApprovalRuleTemplateHandler)
  .route('/', XAmzTargetCodeCommit20150413GetBlobHandler)
  .route('/', XAmzTargetCodeCommit20150413GetBranchHandler)
  .route('/', XAmzTargetCodeCommit20150413GetCommentHandler)
  .route('/', XAmzTargetCodeCommit20150413GetCommentReactionsHandler)
  .route('/', XAmzTargetCodeCommit20150413GetCommentsForComparedCommitHandler)
  .route('/', XAmzTargetCodeCommit20150413GetCommentsForPullRequestHandler)
  .route('/', XAmzTargetCodeCommit20150413GetCommitHandler)
  .route('/', XAmzTargetCodeCommit20150413GetDifferencesHandler)
  .route('/', XAmzTargetCodeCommit20150413GetFileHandler)
  .route('/', XAmzTargetCodeCommit20150413GetFolderHandler)
  .route('/', XAmzTargetCodeCommit20150413GetMergeCommitHandler)
  .route('/', XAmzTargetCodeCommit20150413GetMergeConflictsHandler)
  .route('/', XAmzTargetCodeCommit20150413GetMergeOptionsHandler)
  .route('/', XAmzTargetCodeCommit20150413GetPullRequestHandler)
  .route('/', XAmzTargetCodeCommit20150413GetPullRequestApprovalStatesHandler)
  .route('/', XAmzTargetCodeCommit20150413GetPullRequestOverrideStateHandler)
  .route('/', XAmzTargetCodeCommit20150413GetRepositoryHandler)
  .route('/', XAmzTargetCodeCommit20150413GetRepositoryTriggersHandler)
  .route('/', XAmzTargetCodeCommit20150413ListApprovalRuleTemplatesHandler)
  .route('/', XAmzTargetCodeCommit20150413ListAssociatedApprovalRuleTemplatesForRepositoryHandler)
  .route('/', XAmzTargetCodeCommit20150413ListBranchesHandler)
  .route('/', XAmzTargetCodeCommit20150413ListPullRequestsHandler)
  .route('/', XAmzTargetCodeCommit20150413ListRepositoriesHandler)
  .route('/', XAmzTargetCodeCommit20150413ListRepositoriesForApprovalRuleTemplateHandler)
  .route('/', XAmzTargetCodeCommit20150413ListTagsForResourceHandler)
  .route('/', XAmzTargetCodeCommit20150413MergeBranchesByFastForwardHandler)
  .route('/', XAmzTargetCodeCommit20150413MergeBranchesBySquashHandler)
  .route('/', XAmzTargetCodeCommit20150413MergeBranchesByThreeWayHandler)
  .route('/', XAmzTargetCodeCommit20150413MergePullRequestByFastForwardHandler)
  .route('/', XAmzTargetCodeCommit20150413MergePullRequestBySquashHandler)
  .route('/', XAmzTargetCodeCommit20150413MergePullRequestByThreeWayHandler)
  .route('/', XAmzTargetCodeCommit20150413OverridePullRequestApprovalRulesHandler)
  .route('/', XAmzTargetCodeCommit20150413PostCommentForComparedCommitHandler)
  .route('/', XAmzTargetCodeCommit20150413PostCommentForPullRequestHandler)
  .route('/', XAmzTargetCodeCommit20150413PostCommentReplyHandler)
  .route('/', XAmzTargetCodeCommit20150413PutCommentReactionHandler)
  .route('/', XAmzTargetCodeCommit20150413PutFileHandler)
  .route('/', XAmzTargetCodeCommit20150413PutRepositoryTriggersHandler)
  .route('/', XAmzTargetCodeCommit20150413TagResourceHandler)
  .route('/', XAmzTargetCodeCommit20150413TestRepositoryTriggersHandler)
  .route('/', XAmzTargetCodeCommit20150413UntagResourceHandler)
  .route('/', XAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateContentHandler)
  .route('/', XAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateDescriptionHandler)
  .route('/', XAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateNameHandler)
  .route('/', XAmzTargetCodeCommit20150413UpdateCommentHandler)
  .route('/', XAmzTargetCodeCommit20150413UpdateDefaultBranchHandler)
  .route('/', XAmzTargetCodeCommit20150413UpdatePullRequestApprovalRuleContentHandler)
  .route('/', XAmzTargetCodeCommit20150413UpdatePullRequestApprovalStateHandler)
  .route('/', XAmzTargetCodeCommit20150413UpdatePullRequestDescriptionHandler)
  .route('/', XAmzTargetCodeCommit20150413UpdatePullRequestStatusHandler)
  .route('/', XAmzTargetCodeCommit20150413UpdatePullRequestTitleHandler)
  .route('/', XAmzTargetCodeCommit20150413UpdateRepositoryDescriptionHandler)
  .route('/', XAmzTargetCodeCommit20150413UpdateRepositoryNameHandler)

export default app
