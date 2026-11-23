import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCollectionId(
  args: InferRequestType<(typeof client.collection)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collection[':id'].$get(args, options))
}

export async function getCollectionIdMeta(
  args: InferRequestType<(typeof client.collection)[':id']['meta']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collection[':id'].meta.$get(args, options))
}

export async function getCollections(
  args: InferRequestType<typeof client.collections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections.$get(args, options))
}

export async function getGrocerylist(options?: ClientRequestOptions) {
  return await parseResponse(client.grocerylist.$get(undefined, options))
}

export async function deleteGrocerylist(options?: ClientRequestOptions) {
  return await parseResponse(client.grocerylist.$delete(undefined, options))
}

export async function postGrocerylistClearcheckedlines(options?: ClientRequestOptions) {
  return await parseResponse(client.grocerylist.clearcheckedlines.$post(undefined, options))
}

export async function postGrocerylistDepartment(
  args: InferRequestType<typeof client.grocerylist.department.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.grocerylist.department.$post(args, options))
}

export async function postGrocerylistItem(
  args: InferRequestType<typeof client.grocerylist.item.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.grocerylist.item.$post(args, options))
}

export async function putGrocerylistItemGuid(
  args: InferRequestType<(typeof client.grocerylist.item)[':guid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.grocerylist.item[':guid'].$put(args, options))
}

export async function deleteGrocerylistItemGuid(
  args: InferRequestType<(typeof client.grocerylist.item)[':guid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.grocerylist.item[':guid'].$delete(args, options))
}

export async function postGrocerylistLine(
  args: InferRequestType<typeof client.grocerylist.line.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.grocerylist.line.$post(args, options))
}

export async function postGrocerylistRecipe(
  args: InferRequestType<typeof client.grocerylist.recipe.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.grocerylist.recipe.$post(args, options))
}

export async function postGrocerylistSync(
  args: InferRequestType<typeof client.grocerylist.sync.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.grocerylist.sync.$post(args, options))
}

export async function postImageAvatar(options?: ClientRequestOptions) {
  return await parseResponse(client.image.avatar.$post(undefined, options))
}

export async function getMe(options?: ClientRequestOptions) {
  return await parseResponse(client.me.$get(undefined, options))
}

export async function putMe(
  args: InferRequestType<typeof client.me.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.$put(args, options))
}

export async function putMePersonal(
  args: InferRequestType<typeof client.me.personal.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.personal.$put(args, options))
}

export async function putMePreferences(
  args: InferRequestType<typeof client.me.preferences.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.preferences.$put(args, options))
}

export async function getMePreferencesOptions(options?: ClientRequestOptions) {
  return await parseResponse(client.me.preferences.options.$get(undefined, options))
}

export async function putMeProfile(
  args: InferRequestType<typeof client.me.profile.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.profile.$put(args, options))
}

export async function getMeSkinny(options?: ClientRequestOptions) {
  return await parseResponse(client.me.skinny.$get(undefined, options))
}

export async function putRecipe(
  args: InferRequestType<typeof client.recipe.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe.$put(args, options))
}

export async function postRecipe(
  args: InferRequestType<typeof client.recipe.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe.$post(args, options))
}

export async function getRecipeAutocomplete(
  args: InferRequestType<typeof client.recipe.autocomplete.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe.autocomplete.$get(args, options))
}

export async function getRecipeAutocompleteAll(
  args: InferRequestType<typeof client.recipe.autocomplete.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe.autocomplete.all.$get(args, options))
}

export async function getRecipeAutocompleteMine(
  args: InferRequestType<typeof client.recipe.autocomplete.mine.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe.autocomplete.mine.$get(args, options))
}

export async function getRecipeCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.recipe.categories.$get(undefined, options))
}

export async function getRecipeGetActiveRecipe(
  args: InferRequestType<typeof client.recipe.get.active.recipe.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe.get.active.recipe.$get(args, options))
}

export async function postRecipeGetSavedStep(
  args: InferRequestType<typeof client.recipe.get.saved.step.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe.get.saved.step.$post(args, options))
}

export async function postRecipeGetStepNumber(
  args: InferRequestType<typeof client.recipe.get.step.number.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe.get.step.number.$post(args, options))
}

export async function getRecipePhotosPending(options?: ClientRequestOptions) {
  return await parseResponse(client.recipe.photos.pending.$get(undefined, options))
}

export async function postRecipePostStep(
  args: InferRequestType<typeof client.recipe.post.step.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe.post.step.$post(args, options))
}

export async function putRecipeReviewRepliesReplyId(
  args: InferRequestType<(typeof client.recipe.review.replies)[':replyId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe.review.replies[':replyId'].$put(args, options))
}

export async function deleteRecipeReviewRepliesReplyId(
  args: InferRequestType<(typeof client.recipe.review.replies)[':replyId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe.review.replies[':replyId'].$delete(args, options))
}

export async function getRecipeReviewReviewId(
  args: InferRequestType<(typeof client.recipe.review)[':reviewId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe.review[':reviewId'].$get(args, options))
}

export async function putRecipeReviewReviewId(
  args: InferRequestType<(typeof client.recipe.review)[':reviewId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe.review[':reviewId'].$put(args, options))
}

export async function getRecipeReviewReviewIdReplies(
  args: InferRequestType<(typeof client.recipe.review)[':reviewId']['replies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe.review[':reviewId'].replies.$get(args, options))
}

export async function postRecipeReviewReviewIdReplies(
  args: InferRequestType<(typeof client.recipe.review)[':reviewId']['replies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe.review[':reviewId'].replies.$post(args, options))
}

export async function postRecipeScan(
  args: InferRequestType<typeof client.recipe.scan.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe.scan.$post(args, options))
}

export async function getRecipeStepsId(
  args: InferRequestType<(typeof client.recipe.steps)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe.steps[':id'].$get(args, options))
}

export async function getRecipeId(
  args: InferRequestType<(typeof client.recipe)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe[':id'].$get(args, options))
}

export async function deleteRecipeId(
  args: InferRequestType<(typeof client.recipe)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe[':id'].$delete(args, options))
}

export async function getRecipeIdZap(
  args: InferRequestType<(typeof client.recipe)[':id']['zap']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe[':id'].zap.$get(args, options))
}

export async function postRecipeRecipeIdFeedback(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['feedback']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe[':recipeId'].feedback.$post(args, options))
}

export async function postRecipeRecipeIdImage(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['image']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe[':recipeId'].image.$post(args, options))
}

export async function getRecipeRecipeIdImages(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe[':recipeId'].images.$get(args, options))
}

export async function postRecipeRecipeIdNote(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['note']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe[':recipeId'].note.$post(args, options))
}

export async function getRecipeRecipeIdNoteNoteId(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe[':recipeId'].note[':noteId'].$get(args, options))
}

export async function putRecipeRecipeIdNoteNoteId(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe[':recipeId'].note[':noteId'].$put(args, options))
}

export async function deleteRecipeRecipeIdNoteNoteId(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe[':recipeId'].note[':noteId'].$delete(args, options))
}

export async function getRecipeRecipeIdNotes(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['notes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe[':recipeId'].notes.$get(args, options))
}

export async function getRecipeRecipeIdPhotos(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['photos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe[':recipeId'].photos.$get(args, options))
}

export async function getRecipeRecipeIdRelated(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['related']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe[':recipeId'].related.$get(args, options))
}

export async function getRecipeRecipeIdReview(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['review']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe[':recipeId'].review.$get(args, options))
}

export async function postRecipeRecipeIdReview(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['review']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe[':recipeId'].review.$post(args, options))
}

export async function getRecipeRecipeIdReviewReviewId(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe[':recipeId'].review[':reviewId'].$get(args, options))
}

export async function putRecipeRecipeIdReviewReviewId(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe[':recipeId'].review[':reviewId'].$put(args, options))
}

export async function deleteRecipeRecipeIdReviewReviewId(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe[':recipeId'].review[':reviewId'].$delete(args, options))
}

export async function getRecipeRecipeIdReviews(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['reviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe[':recipeId'].reviews.$get(args, options))
}

export async function getRecipeRecipeIdScans(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['scans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe[':recipeId'].scans.$get(args, options))
}

export async function getRecipes(
  args: InferRequestType<typeof client.recipes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes.$get(args, options))
}

export async function getRecipesRandom(options?: ClientRequestOptions) {
  return await parseResponse(client.recipes.random.$get(undefined, options))
}

export async function getRecipesRaves(
  args: InferRequestType<typeof client.recipes.raves.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes.raves.$get(args, options))
}

export async function getRecipesRecentviews(
  args: InferRequestType<typeof client.recipes.recentviews.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes.recentviews.$get(args, options))
}

export async function getRecipesTop25random(
  args: InferRequestType<typeof client.recipes.top25random.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes.top25random.$get(args, options))
}

export async function getRecipesId(
  args: InferRequestType<(typeof client.recipes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes[':id'].$get(args, options))
}
