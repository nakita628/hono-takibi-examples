import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGistsGistIdCommentsCommentIdRoute,
  deleteGistsGistIdRoute,
  deleteGistsGistIdStarRoute,
  getGistsGistIdCommentsCommentIdRoute,
  getGistsGistIdCommentsRoute,
  getGistsGistIdCommitsRoute,
  getGistsGistIdForksRoute,
  getGistsGistIdRoute,
  getGistsGistIdShaRoute,
  getGistsGistIdStarRoute,
  getGistsPublicRoute,
  getGistsRoute,
  getGistsStarredRoute,
  getUsersUsernameGistsRoute,
  patchGistsGistIdCommentsCommentIdRoute,
  patchGistsGistIdRoute,
  postGistsGistIdCommentsRoute,
  postGistsGistIdForksRoute,
  postGistsRoute,
  putGistsGistIdStarRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gistsHandler = app
  .openapi(getGistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGistsPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGistsStarredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGistsGistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGistsGistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGistsGistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGistsGistIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGistsGistIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGistsGistIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGistsGistIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGistsGistIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGistsGistIdCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGistsGistIdForksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGistsGistIdForksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGistsGistIdStarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGistsGistIdStarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGistsGistIdStarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGistsGistIdShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameGistsRoute, (c) => {
    throw new Error('Not implemented')
  })
