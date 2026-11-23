import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGrocerylistItemGuidRoute,
  deleteGrocerylistRoute,
  deleteRecipeIdRoute,
  deleteRecipeRecipeIdNoteNoteIdRoute,
  deleteRecipeRecipeIdReviewReviewIdRoute,
  deleteRecipeReviewRepliesReplyIdRoute,
  getCollectionIdMetaRoute,
  getCollectionIdRoute,
  getCollectionsRoute,
  getGrocerylistRoute,
  getMePreferencesOptionsRoute,
  getMeRoute,
  getMeSkinnyRoute,
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
  getRecipesIdRoute,
  getRecipesRandomRoute,
  getRecipesRavesRoute,
  getRecipesRecentviewsRoute,
  getRecipesRoute,
  getRecipeStepsIdRoute,
  getRecipesTop25randomRoute,
  postGrocerylistClearcheckedlinesRoute,
  postGrocerylistDepartmentRoute,
  postGrocerylistItemRoute,
  postGrocerylistLineRoute,
  postGrocerylistRecipeRoute,
  postGrocerylistSyncRoute,
  postImageAvatarRoute,
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
  putGrocerylistItemGuidRoute,
  putMePersonalRoute,
  putMePreferencesRoute,
  putMeProfileRoute,
  putMeRoute,
  putRecipeRecipeIdNoteNoteIdRoute,
  putRecipeRecipeIdReviewReviewIdRoute,
  putRecipeReviewRepliesReplyIdRoute,
  putRecipeReviewReviewIdRoute,
  putRecipeRoute,
} from './routes'
import {
  deleteGrocerylistItemGuidRouteHandler,
  deleteGrocerylistRouteHandler,
  deleteRecipeIdRouteHandler,
  deleteRecipeRecipeIdNoteNoteIdRouteHandler,
  deleteRecipeRecipeIdReviewReviewIdRouteHandler,
  deleteRecipeReviewRepliesReplyIdRouteHandler,
  getCollectionIdMetaRouteHandler,
  getCollectionIdRouteHandler,
  getCollectionsRouteHandler,
  getGrocerylistRouteHandler,
  getMePreferencesOptionsRouteHandler,
  getMeRouteHandler,
  getMeSkinnyRouteHandler,
  getRecipeAutocompleteAllRouteHandler,
  getRecipeAutocompleteMineRouteHandler,
  getRecipeAutocompleteRouteHandler,
  getRecipeCategoriesRouteHandler,
  getRecipeGetActiveRecipeRouteHandler,
  getRecipeIdRouteHandler,
  getRecipeIdZapRouteHandler,
  getRecipePhotosPendingRouteHandler,
  getRecipeRecipeIdImagesRouteHandler,
  getRecipeRecipeIdNoteNoteIdRouteHandler,
  getRecipeRecipeIdNotesRouteHandler,
  getRecipeRecipeIdPhotosRouteHandler,
  getRecipeRecipeIdRelatedRouteHandler,
  getRecipeRecipeIdReviewReviewIdRouteHandler,
  getRecipeRecipeIdReviewRouteHandler,
  getRecipeRecipeIdReviewsRouteHandler,
  getRecipeRecipeIdScansRouteHandler,
  getRecipeReviewReviewIdRepliesRouteHandler,
  getRecipeReviewReviewIdRouteHandler,
  getRecipesIdRouteHandler,
  getRecipesRandomRouteHandler,
  getRecipesRavesRouteHandler,
  getRecipesRecentviewsRouteHandler,
  getRecipesRouteHandler,
  getRecipeStepsIdRouteHandler,
  getRecipesTop25randomRouteHandler,
  postGrocerylistClearcheckedlinesRouteHandler,
  postGrocerylistDepartmentRouteHandler,
  postGrocerylistItemRouteHandler,
  postGrocerylistLineRouteHandler,
  postGrocerylistRecipeRouteHandler,
  postGrocerylistSyncRouteHandler,
  postImageAvatarRouteHandler,
  postRecipeGetSavedStepRouteHandler,
  postRecipeGetStepNumberRouteHandler,
  postRecipePostStepRouteHandler,
  postRecipeRecipeIdFeedbackRouteHandler,
  postRecipeRecipeIdImageRouteHandler,
  postRecipeRecipeIdNoteRouteHandler,
  postRecipeRecipeIdReviewRouteHandler,
  postRecipeReviewReviewIdRepliesRouteHandler,
  postRecipeRouteHandler,
  postRecipeScanRouteHandler,
  putGrocerylistItemGuidRouteHandler,
  putMePersonalRouteHandler,
  putMePreferencesRouteHandler,
  putMeProfileRouteHandler,
  putMeRouteHandler,
  putRecipeRecipeIdNoteNoteIdRouteHandler,
  putRecipeRecipeIdReviewReviewIdRouteHandler,
  putRecipeReviewRepliesReplyIdRouteHandler,
  putRecipeReviewReviewIdRouteHandler,
  putRecipeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCollectionIdRoute, getCollectionIdRouteHandler)
  .openapi(getCollectionIdMetaRoute, getCollectionIdMetaRouteHandler)
  .openapi(getCollectionsRoute, getCollectionsRouteHandler)
  .openapi(deleteGrocerylistRoute, deleteGrocerylistRouteHandler)
  .openapi(getGrocerylistRoute, getGrocerylistRouteHandler)
  .openapi(postGrocerylistClearcheckedlinesRoute, postGrocerylistClearcheckedlinesRouteHandler)
  .openapi(postGrocerylistDepartmentRoute, postGrocerylistDepartmentRouteHandler)
  .openapi(postGrocerylistItemRoute, postGrocerylistItemRouteHandler)
  .openapi(deleteGrocerylistItemGuidRoute, deleteGrocerylistItemGuidRouteHandler)
  .openapi(putGrocerylistItemGuidRoute, putGrocerylistItemGuidRouteHandler)
  .openapi(postGrocerylistLineRoute, postGrocerylistLineRouteHandler)
  .openapi(postGrocerylistRecipeRoute, postGrocerylistRecipeRouteHandler)
  .openapi(postGrocerylistSyncRoute, postGrocerylistSyncRouteHandler)
  .openapi(postImageAvatarRoute, postImageAvatarRouteHandler)
  .openapi(getMeRoute, getMeRouteHandler)
  .openapi(putMeRoute, putMeRouteHandler)
  .openapi(putMePersonalRoute, putMePersonalRouteHandler)
  .openapi(putMePreferencesRoute, putMePreferencesRouteHandler)
  .openapi(getMePreferencesOptionsRoute, getMePreferencesOptionsRouteHandler)
  .openapi(putMeProfileRoute, putMeProfileRouteHandler)
  .openapi(getMeSkinnyRoute, getMeSkinnyRouteHandler)
  .openapi(postRecipeRoute, postRecipeRouteHandler)
  .openapi(putRecipeRoute, putRecipeRouteHandler)
  .openapi(getRecipeAutocompleteRoute, getRecipeAutocompleteRouteHandler)
  .openapi(getRecipeAutocompleteAllRoute, getRecipeAutocompleteAllRouteHandler)
  .openapi(getRecipeAutocompleteMineRoute, getRecipeAutocompleteMineRouteHandler)
  .openapi(getRecipeCategoriesRoute, getRecipeCategoriesRouteHandler)
  .openapi(getRecipeGetActiveRecipeRoute, getRecipeGetActiveRecipeRouteHandler)
  .openapi(postRecipeGetSavedStepRoute, postRecipeGetSavedStepRouteHandler)
  .openapi(postRecipeGetStepNumberRoute, postRecipeGetStepNumberRouteHandler)
  .openapi(getRecipePhotosPendingRoute, getRecipePhotosPendingRouteHandler)
  .openapi(postRecipePostStepRoute, postRecipePostStepRouteHandler)
  .openapi(deleteRecipeReviewRepliesReplyIdRoute, deleteRecipeReviewRepliesReplyIdRouteHandler)
  .openapi(putRecipeReviewRepliesReplyIdRoute, putRecipeReviewRepliesReplyIdRouteHandler)
  .openapi(getRecipeReviewReviewIdRoute, getRecipeReviewReviewIdRouteHandler)
  .openapi(putRecipeReviewReviewIdRoute, putRecipeReviewReviewIdRouteHandler)
  .openapi(getRecipeReviewReviewIdRepliesRoute, getRecipeReviewReviewIdRepliesRouteHandler)
  .openapi(postRecipeReviewReviewIdRepliesRoute, postRecipeReviewReviewIdRepliesRouteHandler)
  .openapi(postRecipeScanRoute, postRecipeScanRouteHandler)
  .openapi(getRecipeStepsIdRoute, getRecipeStepsIdRouteHandler)
  .openapi(deleteRecipeIdRoute, deleteRecipeIdRouteHandler)
  .openapi(getRecipeIdRoute, getRecipeIdRouteHandler)
  .openapi(getRecipeIdZapRoute, getRecipeIdZapRouteHandler)
  .openapi(postRecipeRecipeIdFeedbackRoute, postRecipeRecipeIdFeedbackRouteHandler)
  .openapi(postRecipeRecipeIdImageRoute, postRecipeRecipeIdImageRouteHandler)
  .openapi(getRecipeRecipeIdImagesRoute, getRecipeRecipeIdImagesRouteHandler)
  .openapi(postRecipeRecipeIdNoteRoute, postRecipeRecipeIdNoteRouteHandler)
  .openapi(deleteRecipeRecipeIdNoteNoteIdRoute, deleteRecipeRecipeIdNoteNoteIdRouteHandler)
  .openapi(getRecipeRecipeIdNoteNoteIdRoute, getRecipeRecipeIdNoteNoteIdRouteHandler)
  .openapi(putRecipeRecipeIdNoteNoteIdRoute, putRecipeRecipeIdNoteNoteIdRouteHandler)
  .openapi(getRecipeRecipeIdNotesRoute, getRecipeRecipeIdNotesRouteHandler)
  .openapi(getRecipeRecipeIdPhotosRoute, getRecipeRecipeIdPhotosRouteHandler)
  .openapi(getRecipeRecipeIdRelatedRoute, getRecipeRecipeIdRelatedRouteHandler)
  .openapi(getRecipeRecipeIdReviewRoute, getRecipeRecipeIdReviewRouteHandler)
  .openapi(postRecipeRecipeIdReviewRoute, postRecipeRecipeIdReviewRouteHandler)
  .openapi(deleteRecipeRecipeIdReviewReviewIdRoute, deleteRecipeRecipeIdReviewReviewIdRouteHandler)
  .openapi(getRecipeRecipeIdReviewReviewIdRoute, getRecipeRecipeIdReviewReviewIdRouteHandler)
  .openapi(putRecipeRecipeIdReviewReviewIdRoute, putRecipeRecipeIdReviewReviewIdRouteHandler)
  .openapi(getRecipeRecipeIdReviewsRoute, getRecipeRecipeIdReviewsRouteHandler)
  .openapi(getRecipeRecipeIdScansRoute, getRecipeRecipeIdScansRouteHandler)
  .openapi(getRecipesRoute, getRecipesRouteHandler)
  .openapi(getRecipesRandomRoute, getRecipesRandomRouteHandler)
  .openapi(getRecipesRavesRoute, getRecipesRavesRouteHandler)
  .openapi(getRecipesRecentviewsRoute, getRecipesRecentviewsRouteHandler)
  .openapi(getRecipesTop25randomRoute, getRecipesTop25randomRouteHandler)
  .openapi(getRecipesIdRoute, getRecipesIdRouteHandler)

export default app
