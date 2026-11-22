import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdEpicsNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute,
  deleteApiV4ProjectsIdIssuesNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute,
  deleteApiV4ProjectsIdMergeRequestsNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute,
  deleteApiV4ProjectsIdRepositoryCommitsNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute,
  deleteApiV4ProjectsIdSnippetsNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute,
  getApiV4GroupsIdEpicsNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute,
  getApiV4GroupsIdEpicsNoteableIdDiscussionsDiscussionIdNotesRoute,
  getApiV4GroupsIdEpicsNoteableIdDiscussionsDiscussionIdRoute,
  getApiV4GroupsIdEpicsNoteableIdDiscussionsRoute,
  getApiV4ProjectsIdIssuesNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute,
  getApiV4ProjectsIdIssuesNoteableIdDiscussionsDiscussionIdNotesRoute,
  getApiV4ProjectsIdIssuesNoteableIdDiscussionsDiscussionIdRoute,
  getApiV4ProjectsIdIssuesNoteableIdDiscussionsRoute,
  getApiV4ProjectsIdMergeRequestsNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute,
  getApiV4ProjectsIdMergeRequestsNoteableIdDiscussionsDiscussionIdNotesRoute,
  getApiV4ProjectsIdMergeRequestsNoteableIdDiscussionsDiscussionIdRoute,
  getApiV4ProjectsIdMergeRequestsNoteableIdDiscussionsRoute,
  getApiV4ProjectsIdRepositoryCommitsNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute,
  getApiV4ProjectsIdRepositoryCommitsNoteableIdDiscussionsDiscussionIdNotesRoute,
  getApiV4ProjectsIdRepositoryCommitsNoteableIdDiscussionsDiscussionIdRoute,
  getApiV4ProjectsIdRepositoryCommitsNoteableIdDiscussionsRoute,
  getApiV4ProjectsIdSnippetsNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute,
  getApiV4ProjectsIdSnippetsNoteableIdDiscussionsDiscussionIdNotesRoute,
  getApiV4ProjectsIdSnippetsNoteableIdDiscussionsDiscussionIdRoute,
  getApiV4ProjectsIdSnippetsNoteableIdDiscussionsRoute,
  postApiV4GroupsIdEpicsNoteableIdDiscussionsDiscussionIdNotesRoute,
  postApiV4GroupsIdEpicsNoteableIdDiscussionsRoute,
  postApiV4ProjectsIdIssuesNoteableIdDiscussionsDiscussionIdNotesRoute,
  postApiV4ProjectsIdIssuesNoteableIdDiscussionsRoute,
  postApiV4ProjectsIdMergeRequestsNoteableIdDiscussionsDiscussionIdNotesRoute,
  postApiV4ProjectsIdMergeRequestsNoteableIdDiscussionsRoute,
  postApiV4ProjectsIdRepositoryCommitsNoteableIdDiscussionsDiscussionIdNotesRoute,
  postApiV4ProjectsIdRepositoryCommitsNoteableIdDiscussionsRoute,
  postApiV4ProjectsIdSnippetsNoteableIdDiscussionsDiscussionIdNotesRoute,
  postApiV4ProjectsIdSnippetsNoteableIdDiscussionsRoute,
  putApiV4GroupsIdEpicsNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute,
  putApiV4GroupsIdEpicsNoteableIdDiscussionsDiscussionIdRoute,
  putApiV4ProjectsIdIssuesNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute,
  putApiV4ProjectsIdIssuesNoteableIdDiscussionsDiscussionIdRoute,
  putApiV4ProjectsIdMergeRequestsNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute,
  putApiV4ProjectsIdMergeRequestsNoteableIdDiscussionsDiscussionIdRoute,
  putApiV4ProjectsIdRepositoryCommitsNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute,
  putApiV4ProjectsIdSnippetsNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const discussionsHandler = app
  .openapi(getApiV4ProjectsIdIssuesNoteableIdDiscussionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdIssuesNoteableIdDiscussionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIssuesNoteableIdDiscussionsDiscussionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIssuesNoteableIdDiscussionsDiscussionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIssuesNoteableIdDiscussionsDiscussionIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdIssuesNoteableIdDiscussionsDiscussionIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIssuesNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIssuesNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdIssuesNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdSnippetsNoteableIdDiscussionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdSnippetsNoteableIdDiscussionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdSnippetsNoteableIdDiscussionsDiscussionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdSnippetsNoteableIdDiscussionsDiscussionIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdSnippetsNoteableIdDiscussionsDiscussionIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdSnippetsNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdSnippetsNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdSnippetsNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsNoteableIdDiscussionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMergeRequestsNoteableIdDiscussionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsNoteableIdDiscussionsDiscussionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdMergeRequestsNoteableIdDiscussionsDiscussionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsNoteableIdDiscussionsDiscussionIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMergeRequestsNoteableIdDiscussionsDiscussionIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV4ProjectsIdMergeRequestsNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV4ProjectsIdMergeRequestsNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV4ProjectsIdMergeRequestsNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV4ProjectsIdRepositoryCommitsNoteableIdDiscussionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdRepositoryCommitsNoteableIdDiscussionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryCommitsNoteableIdDiscussionsDiscussionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryCommitsNoteableIdDiscussionsDiscussionIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdRepositoryCommitsNoteableIdDiscussionsDiscussionIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV4ProjectsIdRepositoryCommitsNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV4ProjectsIdRepositoryCommitsNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV4ProjectsIdRepositoryCommitsNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV4GroupsIdEpicsNoteableIdDiscussionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdEpicsNoteableIdDiscussionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdEpicsNoteableIdDiscussionsDiscussionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdEpicsNoteableIdDiscussionsDiscussionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdEpicsNoteableIdDiscussionsDiscussionIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdEpicsNoteableIdDiscussionsDiscussionIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdEpicsNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdEpicsNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdEpicsNoteableIdDiscussionsDiscussionIdNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
