import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSnippetsWorkspaceEncodedIdCommentsCommentIdRoute,
  deleteSnippetsWorkspaceEncodedIdNodeIdRoute,
  deleteSnippetsWorkspaceEncodedIdRoute,
  deleteSnippetsWorkspaceEncodedIdWatchRoute,
  getSnippetsWorkspaceEncodedIdCommentsCommentIdRoute,
  getSnippetsWorkspaceEncodedIdCommentsRoute,
  getSnippetsWorkspaceEncodedIdCommitsRevisionRoute,
  getSnippetsWorkspaceEncodedIdCommitsRoute,
  getSnippetsWorkspaceEncodedIdFilesPathRoute,
  getSnippetsWorkspaceEncodedIdNodeIdFilesPathRoute,
  getSnippetsWorkspaceEncodedIdNodeIdRoute,
  getSnippetsWorkspaceEncodedIdRevisionDiffRoute,
  getSnippetsWorkspaceEncodedIdRevisionPatchRoute,
  getSnippetsWorkspaceEncodedIdRoute,
  getSnippetsWorkspaceEncodedIdWatchersRoute,
  getSnippetsWorkspaceEncodedIdWatchRoute,
  getSnippetsWorkspaceRoute,
  postSnippetsRoute,
  postSnippetsWorkspaceEncodedIdCommentsRoute,
  postSnippetsWorkspaceRoute,
  putSnippetsWorkspaceEncodedIdCommentsCommentIdRoute,
  putSnippetsWorkspaceEncodedIdNodeIdRoute,
  putSnippetsWorkspaceEncodedIdRoute,
  putSnippetsWorkspaceEncodedIdWatchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const snippetsHandler = app
  .openapi(postSnippetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnippetsWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSnippetsWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSnippetsWorkspaceEncodedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnippetsWorkspaceEncodedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSnippetsWorkspaceEncodedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnippetsWorkspaceEncodedIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSnippetsWorkspaceEncodedIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSnippetsWorkspaceEncodedIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnippetsWorkspaceEncodedIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSnippetsWorkspaceEncodedIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnippetsWorkspaceEncodedIdCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnippetsWorkspaceEncodedIdCommitsRevisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnippetsWorkspaceEncodedIdFilesPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSnippetsWorkspaceEncodedIdWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnippetsWorkspaceEncodedIdWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSnippetsWorkspaceEncodedIdWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnippetsWorkspaceEncodedIdWatchersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSnippetsWorkspaceEncodedIdNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnippetsWorkspaceEncodedIdNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSnippetsWorkspaceEncodedIdNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnippetsWorkspaceEncodedIdNodeIdFilesPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnippetsWorkspaceEncodedIdRevisionDiffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnippetsWorkspaceEncodedIdRevisionPatchRoute, (c) => {
    throw new Error('Not implemented')
  })
