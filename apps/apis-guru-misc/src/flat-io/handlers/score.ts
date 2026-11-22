import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteScoresScoreCollaboratorsCollaboratorRoute,
  deleteScoresScoreCommentsCommentResolvedRoute,
  deleteScoresScoreCommentsCommentRoute,
  deleteScoresScoreRoute,
  deleteScoresScoreTracksTrackRoute,
  getScoresScoreCollaboratorsCollaboratorRoute,
  getScoresScoreCollaboratorsRoute,
  getScoresScoreCommentsRoute,
  getScoresScoreRevisionsRevisionFormatRoute,
  getScoresScoreRevisionsRevisionRoute,
  getScoresScoreRevisionsRoute,
  getScoresScoreRoute,
  getScoresScoreSubmissionsRoute,
  getScoresScoreTracksRoute,
  getScoresScoreTracksTrackRoute,
  postScoresRoute,
  postScoresScoreCollaboratorsRoute,
  postScoresScoreCommentsRoute,
  postScoresScoreForkRoute,
  postScoresScoreRevisionsRoute,
  postScoresScoreTracksRoute,
  postScoresScoreUntrashRoute,
  putScoresScoreCommentsCommentResolvedRoute,
  putScoresScoreCommentsCommentRoute,
  putScoresScoreRoute,
  putScoresScoreTracksTrackRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scoreHandler = app
  .openapi(postScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteScoresScoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScoresScoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putScoresScoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScoresScoreCollaboratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScoresScoreCollaboratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteScoresScoreCollaboratorsCollaboratorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScoresScoreCollaboratorsCollaboratorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScoresScoreCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScoresScoreCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteScoresScoreCommentsCommentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putScoresScoreCommentsCommentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteScoresScoreCommentsCommentResolvedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putScoresScoreCommentsCommentResolvedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScoresScoreForkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScoresScoreRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScoresScoreRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScoresScoreRevisionsRevisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScoresScoreRevisionsRevisionFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScoresScoreSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScoresScoreTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScoresScoreTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteScoresScoreTracksTrackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScoresScoreTracksTrackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putScoresScoreTracksTrackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScoresScoreUntrashRoute, (c) => {
    throw new Error('Not implemented')
  })
