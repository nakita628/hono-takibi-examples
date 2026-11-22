import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFoodConverseRoute,
  getFoodConverseSuggestRoute,
  getFoodCustomFoodsSearchRoute,
  getFoodImagesAnalyzeRoute,
  getFoodImagesClassifyRoute,
  getFoodJokesRandomRoute,
  getFoodSearchRoute,
  getFoodSiteSearchRoute,
  getFoodTriviaRandomRoute,
  getFoodVideosSearchRoute,
  postFoodDetectRoute,
} from '../routes'

const app = new OpenAPIHono()

export const miscHandler = app
  .openapi(getFoodConverseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodConverseSuggestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodCustomFoodsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFoodDetectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodImagesAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodImagesClassifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodJokesRandomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodSiteSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodTriviaRandomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodVideosSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
