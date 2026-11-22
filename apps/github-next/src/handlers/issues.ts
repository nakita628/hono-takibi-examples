import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReposOwnerRepoIssuesCommentsCommentIdPinRoute,
  deleteReposOwnerRepoIssuesCommentsCommentIdRoute,
  deleteReposOwnerRepoIssuesIssueNumberArtifactsArtifactNumberRoute,
  deleteReposOwnerRepoIssuesIssueNumberAssigneesRoute,
  deleteReposOwnerRepoIssuesIssueNumberDependenciesBlockedByIssueIdRoute,
  deleteReposOwnerRepoIssuesIssueNumberIssueFieldValuesIssueFieldIdRoute,
  deleteReposOwnerRepoIssuesIssueNumberLabelsNameRoute,
  deleteReposOwnerRepoIssuesIssueNumberLabelsRoute,
  deleteReposOwnerRepoIssuesIssueNumberLockRoute,
  deleteReposOwnerRepoIssuesIssueNumberRelatesToIssueIdRoute,
  deleteReposOwnerRepoIssuesIssueNumberSubIssueRoute,
  deleteReposOwnerRepoLabelsNameRoute,
  deleteReposOwnerRepoMilestonesMilestoneNumberRoute,
  getIssuesRoute,
  getOrgsOrgIssuesRoute,
  getReposOwnerRepoAssigneesAssigneeRoute,
  getReposOwnerRepoAssigneesRoute,
  getReposOwnerRepoIssuesCommentsCommentIdRoute,
  getReposOwnerRepoIssuesCommentsRoute,
  getReposOwnerRepoIssuesEventsEventIdRoute,
  getReposOwnerRepoIssuesEventsRoute,
  getReposOwnerRepoIssuesIssueNumberArtifactsArtifactNumberRoute,
  getReposOwnerRepoIssuesIssueNumberArtifactsRoute,
  getReposOwnerRepoIssuesIssueNumberAssigneesAssigneeRoute,
  getReposOwnerRepoIssuesIssueNumberCommentsRoute,
  getReposOwnerRepoIssuesIssueNumberDependenciesBlockedByRoute,
  getReposOwnerRepoIssuesIssueNumberDependenciesBlockingRoute,
  getReposOwnerRepoIssuesIssueNumberEventsRoute,
  getReposOwnerRepoIssuesIssueNumberIssueFieldValuesRoute,
  getReposOwnerRepoIssuesIssueNumberLabelsRoute,
  getReposOwnerRepoIssuesIssueNumberParentRoute,
  getReposOwnerRepoIssuesIssueNumberRelatesToRoute,
  getReposOwnerRepoIssuesIssueNumberRoute,
  getReposOwnerRepoIssuesIssueNumberSubIssuesRoute,
  getReposOwnerRepoIssuesIssueNumberSuggestionsRoute,
  getReposOwnerRepoIssuesIssueNumberTimelineRoute,
  getReposOwnerRepoIssuesRoute,
  getReposOwnerRepoLabelsNameRoute,
  getReposOwnerRepoLabelsRoute,
  getReposOwnerRepoMilestonesMilestoneNumberLabelsRoute,
  getReposOwnerRepoMilestonesMilestoneNumberRoute,
  getReposOwnerRepoMilestonesRoute,
  getUserIssuesRoute,
  patchReposOwnerRepoIssuesCommentsCommentIdRoute,
  patchReposOwnerRepoIssuesIssueNumberArtifactsArtifactNumberRoute,
  patchReposOwnerRepoIssuesIssueNumberRoute,
  patchReposOwnerRepoIssuesIssueNumberSubIssuesPriorityRoute,
  patchReposOwnerRepoLabelsNameRoute,
  patchReposOwnerRepoMilestonesMilestoneNumberRoute,
  postReposOwnerRepoIssuesIssueNumberArtifactsRoute,
  postReposOwnerRepoIssuesIssueNumberAssigneesRoute,
  postReposOwnerRepoIssuesIssueNumberCommentsRoute,
  postReposOwnerRepoIssuesIssueNumberDependenciesBlockedByRoute,
  postReposOwnerRepoIssuesIssueNumberIssueFieldValuesRoute,
  postReposOwnerRepoIssuesIssueNumberLabelsRoute,
  postReposOwnerRepoIssuesIssueNumberRelatesToRoute,
  postReposOwnerRepoIssuesIssueNumberSubIssuesRoute,
  postReposOwnerRepoIssuesIssueNumberSuggestionsSuggestionIdApproveRoute,
  postReposOwnerRepoIssuesIssueNumberSuggestionsSuggestionIdDismissRoute,
  postReposOwnerRepoIssuesRoute,
  postReposOwnerRepoLabelsRoute,
  postReposOwnerRepoMilestonesRoute,
  putReposOwnerRepoIssuesCommentsCommentIdPinRoute,
  putReposOwnerRepoIssuesIssueNumberIssueFieldValuesRoute,
  putReposOwnerRepoIssuesIssueNumberLabelsRoute,
  putReposOwnerRepoIssuesIssueNumberLockRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issuesHandler = app
  .openapi(getIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoAssigneesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoAssigneesAssigneeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoIssuesCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoIssuesCommentsCommentIdPinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesCommentsCommentIdPinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoIssuesIssueNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIssueNumberArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberArtifactsArtifactNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoIssuesIssueNumberArtifactsArtifactNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIssueNumberArtifactsArtifactNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIssueNumberAssigneesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIssueNumberAssigneesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberAssigneesAssigneeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIssueNumberCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberDependenciesBlockedByRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIssueNumberDependenciesBlockedByRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIssueNumberDependenciesBlockedByIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberDependenciesBlockingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberIssueFieldValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIssueNumberIssueFieldValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoIssuesIssueNumberIssueFieldValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIssueNumberIssueFieldValuesIssueFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIssueNumberLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoIssuesIssueNumberLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIssueNumberLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIssueNumberLabelsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoIssuesIssueNumberLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIssueNumberLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberParentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberRelatesToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIssueNumberRelatesToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIssueNumberRelatesToIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIssueNumberSubIssueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberSubIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIssueNumberSubIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoIssuesIssueNumberSubIssuesPriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIssueNumberSuggestionsSuggestionIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIssueNumberSuggestionsSuggestionIdDismissRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberTimelineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoLabelsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoLabelsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoLabelsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoMilestonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoMilestonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoMilestonesMilestoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoMilestonesMilestoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoMilestonesMilestoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoMilestonesMilestoneNumberLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
