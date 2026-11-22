import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiDiscussionsCommentsCommentIdRoute,
  deleteApiDiscussionsTopicsTopicIdRoute,
  getApiDiscussionsFoldersFolderIdTopicsRoute,
  getApiDiscussionsFoldersRoute,
  getApiDiscussionsTopicsRoute,
  getApiDiscussionsTopicsTopicIdRoute,
  postApiDiscussionsCommentsCommentIdRoute,
  postApiDiscussionsFoldersFolderIdTopicsRoute,
  postApiDiscussionsFoldersRoute,
  postApiDiscussionsTopicsTopicIdCommentsRoute,
  postApiDiscussionsTopicsTopicIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const discussionApiHandler = app
  .openapi(deleteApiDiscussionsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDiscussionsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDiscussionsFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDiscussionsFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDiscussionsFoldersFolderIdTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDiscussionsFoldersFolderIdTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDiscussionsTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDiscussionsTopicsTopicIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDiscussionsTopicsTopicIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDiscussionsTopicsTopicIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDiscussionsTopicsTopicIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
