import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdEpicsEpicIidAwardEmojiAwardIdRoute,
  deleteApiV4GroupsIdEpicsEpicIidNotesNoteIdAwardEmojiAwardIdRoute,
  deleteApiV4ProjectsIdIssuesIssueIidAwardEmojiAwardIdRoute,
  deleteApiV4ProjectsIdIssuesIssueIidNotesNoteIdAwardEmojiAwardIdRoute,
  deleteApiV4ProjectsIdMergeRequestsMergeRequestIidAwardEmojiAwardIdRoute,
  deleteApiV4ProjectsIdMergeRequestsMergeRequestIidNotesNoteIdAwardEmojiAwardIdRoute,
  deleteApiV4ProjectsIdSnippetsSnippetIdAwardEmojiAwardIdRoute,
  deleteApiV4ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardIdRoute,
  getApiV4GroupsIdEpicsEpicIidAwardEmojiAwardIdRoute,
  getApiV4GroupsIdEpicsEpicIidAwardEmojiRoute,
  getApiV4GroupsIdEpicsEpicIidNotesNoteIdAwardEmojiAwardIdRoute,
  getApiV4GroupsIdEpicsEpicIidNotesNoteIdAwardEmojiRoute,
  getApiV4ProjectsIdIssuesIssueIidAwardEmojiAwardIdRoute,
  getApiV4ProjectsIdIssuesIssueIidAwardEmojiRoute,
  getApiV4ProjectsIdIssuesIssueIidNotesNoteIdAwardEmojiAwardIdRoute,
  getApiV4ProjectsIdIssuesIssueIidNotesNoteIdAwardEmojiRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidAwardEmojiAwardIdRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidAwardEmojiRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidNotesNoteIdAwardEmojiAwardIdRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidNotesNoteIdAwardEmojiRoute,
  getApiV4ProjectsIdSnippetsSnippetIdAwardEmojiAwardIdRoute,
  getApiV4ProjectsIdSnippetsSnippetIdAwardEmojiRoute,
  getApiV4ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardIdRoute,
  getApiV4ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiRoute,
  postApiV4GroupsIdEpicsEpicIidAwardEmojiRoute,
  postApiV4GroupsIdEpicsEpicIidNotesNoteIdAwardEmojiRoute,
  postApiV4ProjectsIdIssuesIssueIidAwardEmojiRoute,
  postApiV4ProjectsIdIssuesIssueIidNotesNoteIdAwardEmojiRoute,
  postApiV4ProjectsIdMergeRequestsMergeRequestIidAwardEmojiRoute,
  postApiV4ProjectsIdMergeRequestsMergeRequestIidNotesNoteIdAwardEmojiRoute,
  postApiV4ProjectsIdSnippetsSnippetIdAwardEmojiRoute,
  postApiV4ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiRoute,
} from '../routes'

const app = new OpenAPIHono()

export const awardEmojiHandler = app
  .openapi(getApiV4ProjectsIdIssuesIssueIidAwardEmojiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdIssuesIssueIidAwardEmojiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIssuesIssueIidAwardEmojiAwardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdIssuesIssueIidAwardEmojiAwardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIssuesIssueIidNotesNoteIdAwardEmojiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdIssuesIssueIidNotesNoteIdAwardEmojiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIssuesIssueIidNotesNoteIdAwardEmojiAwardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdIssuesIssueIidNotesNoteIdAwardEmojiAwardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidAwardEmojiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMergeRequestsMergeRequestIidAwardEmojiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidAwardEmojiAwardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdMergeRequestsMergeRequestIidAwardEmojiAwardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidNotesNoteIdAwardEmojiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMergeRequestsMergeRequestIidNotesNoteIdAwardEmojiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidNotesNoteIdAwardEmojiAwardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApiV4ProjectsIdMergeRequestsMergeRequestIidNotesNoteIdAwardEmojiAwardIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV4ProjectsIdSnippetsSnippetIdAwardEmojiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdSnippetsSnippetIdAwardEmojiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdSnippetsSnippetIdAwardEmojiAwardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdSnippetsSnippetIdAwardEmojiAwardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdEpicsEpicIidAwardEmojiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdEpicsEpicIidAwardEmojiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdEpicsEpicIidAwardEmojiAwardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdEpicsEpicIidAwardEmojiAwardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdEpicsEpicIidNotesNoteIdAwardEmojiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdEpicsEpicIidNotesNoteIdAwardEmojiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdEpicsEpicIidNotesNoteIdAwardEmojiAwardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdEpicsEpicIidNotesNoteIdAwardEmojiAwardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
