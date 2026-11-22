import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRecipeRecipeIdReviewReviewIdRoute,
  deleteRecipeReviewRepliesReplyIdRoute,
  getRecipeRecipeIdReviewReviewIdRoute,
  getRecipeRecipeIdReviewRoute,
  getRecipeRecipeIdReviewsRoute,
  getRecipeReviewReviewIdRepliesRoute,
  getRecipeReviewReviewIdRoute,
  postRecipeRecipeIdReviewRoute,
  postRecipeReviewReviewIdRepliesRoute,
  putRecipeRecipeIdReviewReviewIdRoute,
  putRecipeReviewRepliesReplyIdRoute,
  putRecipeReviewReviewIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reviewHandler = app
  .openapi(deleteRecipeReviewRepliesReplyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRecipeReviewRepliesReplyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeReviewReviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRecipeReviewReviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeReviewReviewIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipeReviewReviewIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeRecipeIdReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipeRecipeIdReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRecipeRecipeIdReviewReviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeRecipeIdReviewReviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRecipeRecipeIdReviewReviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeRecipeIdReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
