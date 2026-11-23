import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRecipeIdRoute,
  deleteRecipeRecipeIdNoteNoteIdRoute,
  deleteRecipeRecipeIdReviewReviewIdRoute,
  deleteRecipeReviewRepliesReplyIdRoute,
  getRecipeAutocompleteAllRoute,
  getRecipeAutocompleteMineRoute,
  getRecipeAutocompleteRoute,
  getRecipeCategoriesRoute,
  getRecipeGetActiveRecipeRoute,
  getRecipeIdRoute,
  getRecipeIdZapRoute,
  getRecipePhotosPendingRoute,
  getRecipeRecipeIdImagesRoute,
  getRecipeRecipeIdNoteNoteIdRoute,
  getRecipeRecipeIdNotesRoute,
  getRecipeRecipeIdPhotosRoute,
  getRecipeRecipeIdRelatedRoute,
  getRecipeRecipeIdReviewReviewIdRoute,
  getRecipeRecipeIdReviewRoute,
  getRecipeRecipeIdReviewsRoute,
  getRecipeRecipeIdScansRoute,
  getRecipeReviewReviewIdRepliesRoute,
  getRecipeReviewReviewIdRoute,
  getRecipeStepsIdRoute,
  postRecipeGetSavedStepRoute,
  postRecipeGetStepNumberRoute,
  postRecipePostStepRoute,
  postRecipeRecipeIdFeedbackRoute,
  postRecipeRecipeIdImageRoute,
  postRecipeRecipeIdNoteRoute,
  postRecipeRecipeIdReviewRoute,
  postRecipeReviewReviewIdRepliesRoute,
  postRecipeRoute,
  postRecipeScanRoute,
  putRecipeRecipeIdNoteNoteIdRoute,
  putRecipeRecipeIdReviewReviewIdRoute,
  putRecipeReviewRepliesReplyIdRoute,
  putRecipeReviewReviewIdRoute,
  putRecipeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recipeHandler = app
  .openapi(postRecipeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRecipeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeAutocompleteAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeAutocompleteMineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeGetActiveRecipeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipeGetSavedStepRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipeGetStepNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipePhotosPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipePostStepRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(postRecipeScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeStepsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRecipeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeIdZapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipeRecipeIdFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipeRecipeIdImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeRecipeIdImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipeRecipeIdNoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRecipeRecipeIdNoteNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeRecipeIdNoteNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRecipeRecipeIdNoteNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeRecipeIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeRecipeIdPhotosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeRecipeIdRelatedRoute, (c) => {
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
  .openapi(getRecipeRecipeIdScansRoute, (c) => {
    throw new Error('Not implemented')
  })
