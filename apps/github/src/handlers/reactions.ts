import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReposOwnerRepoCommentsCommentIdReactionsReactionIdRoute,
  deleteReposOwnerRepoIssuesCommentsCommentIdReactionsReactionIdRoute,
  deleteReposOwnerRepoIssuesIssueNumberReactionsReactionIdRoute,
  deleteReposOwnerRepoPullsCommentsCommentIdReactionsReactionIdRoute,
  deleteReposOwnerRepoReleasesReleaseIdReactionsReactionIdRoute,
  getReposOwnerRepoCommentsCommentIdReactionsRoute,
  getReposOwnerRepoIssuesCommentsCommentIdReactionsRoute,
  getReposOwnerRepoIssuesIssueNumberReactionsRoute,
  getReposOwnerRepoPullsCommentsCommentIdReactionsRoute,
  getReposOwnerRepoReleasesReleaseIdReactionsRoute,
  postReposOwnerRepoCommentsCommentIdReactionsRoute,
  postReposOwnerRepoIssuesCommentsCommentIdReactionsRoute,
  postReposOwnerRepoIssuesIssueNumberReactionsRoute,
  postReposOwnerRepoPullsCommentsCommentIdReactionsRoute,
  postReposOwnerRepoReleasesReleaseIdReactionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reactionsHandler = app
  .openapi(getReposOwnerRepoCommentsCommentIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoCommentsCommentIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoCommentsCommentIdReactionsReactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesCommentsCommentIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesCommentsCommentIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesCommentsCommentIdReactionsReactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIssueNumberReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIssueNumberReactionsReactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsCommentsCommentIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsCommentsCommentIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoPullsCommentsCommentIdReactionsReactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoReleasesReleaseIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoReleasesReleaseIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoReleasesReleaseIdReactionsReactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
