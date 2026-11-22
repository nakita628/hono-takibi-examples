import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiRepoTypeNamespaceRepoDiscussionsNumRoute,
  getApiRepoTypeNamespaceRepoDiscussionsNumStorageRoute,
  getApiRepoTypeNamespaceRepoDiscussionsRoute,
  postApiBlogNamespaceSlugCommentCommentIdReplyRoute,
  postApiBlogNamespaceSlugCommentRoute,
  postApiBlogSlugCommentCommentIdReplyRoute,
  postApiBlogSlugCommentRoute,
  postApiPapersPaperIdCommentCommentIdReplyRoute,
  postApiPapersPaperIdCommentRoute,
  postApiPostsUsernamePostSlugCommentCommentIdReplyRoute,
  postApiPostsUsernamePostSlugCommentRoute,
  postApiRepoTypeNamespaceRepoDiscussionsNumCommentRoute,
  postApiRepoTypeNamespaceRepoDiscussionsNumStatusRoute,
  postApiRepoTypeNamespaceRepoDiscussionsNumTitleRoute,
  postApiRepoTypeNamespaceRepoDiscussionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const discussionsHandler = app
  .openapi(postApiBlogSlugCommentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBlogSlugCommentCommentIdReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBlogNamespaceSlugCommentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBlogNamespaceSlugCommentCommentIdReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRepoTypeNamespaceRepoDiscussionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRepoTypeNamespaceRepoDiscussionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRepoTypeNamespaceRepoDiscussionsNumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRepoTypeNamespaceRepoDiscussionsNumCommentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRepoTypeNamespaceRepoDiscussionsNumStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRepoTypeNamespaceRepoDiscussionsNumTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRepoTypeNamespaceRepoDiscussionsNumStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPapersPaperIdCommentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPapersPaperIdCommentCommentIdReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPostsUsernamePostSlugCommentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPostsUsernamePostSlugCommentCommentIdReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
