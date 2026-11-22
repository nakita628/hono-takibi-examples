import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRecipePhotosPendingRoute,
  getRecipeRecipeIdImagesRoute,
  getRecipeRecipeIdPhotosRoute,
  getRecipeRecipeIdScansRoute,
  postImageAvatarRoute,
  postRecipeRecipeIdImageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const imagesHandler = app
  .openapi(postImageAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipePhotosPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipeRecipeIdImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeRecipeIdImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeRecipeIdPhotosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeRecipeIdScansRoute, (c) => {
    throw new Error('Not implemented')
  })
