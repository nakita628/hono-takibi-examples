import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountProjectsProjectIdArticlesArticleIdRoute,
  deleteAccountProjectsProjectIdCollaboratorsUserIdRoute,
  deleteAccountProjectsProjectIdNotesNoteIdRoute,
  deleteAccountProjectsProjectIdRoute,
  getAccountProjectsProjectIdArticlesArticleIdFilesFileIdRoute,
  getAccountProjectsProjectIdArticlesArticleIdFilesRoute,
  getAccountProjectsProjectIdArticlesArticleIdRoute,
  getAccountProjectsProjectIdArticlesRoute,
  getAccountProjectsProjectIdCollaboratorsRoute,
  getAccountProjectsProjectIdNotesNoteIdRoute,
  getAccountProjectsProjectIdNotesRoute,
  getAccountProjectsProjectIdRoute,
  getAccountProjectsRoute,
  getProjectsProjectIdArticlesRoute,
  getProjectsProjectIdRoute,
  getProjectsRoute,
  postAccountProjectsProjectIdArticlesRoute,
  postAccountProjectsProjectIdCollaboratorsRoute,
  postAccountProjectsProjectIdLeaveRoute,
  postAccountProjectsProjectIdNotesRoute,
  postAccountProjectsProjectIdPublishRoute,
  postAccountProjectsRoute,
  postAccountProjectsSearchRoute,
  postProjectsSearchRoute,
  putAccountProjectsProjectIdNotesNoteIdRoute,
  putAccountProjectsProjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getAccountProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountProjectsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProjectsProjectIdArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountProjectsProjectIdArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountProjectsProjectIdArticlesArticleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProjectsProjectIdArticlesArticleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProjectsProjectIdArticlesArticleIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProjectsProjectIdArticlesArticleIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProjectsProjectIdCollaboratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountProjectsProjectIdCollaboratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountProjectsProjectIdCollaboratorsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountProjectsProjectIdLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProjectsProjectIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountProjectsProjectIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountProjectsProjectIdNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProjectsProjectIdNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountProjectsProjectIdNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountProjectsProjectIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
