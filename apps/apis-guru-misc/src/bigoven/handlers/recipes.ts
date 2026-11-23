import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRecipesIdRoute,
  getRecipesRandomRoute,
  getRecipesRavesRoute,
  getRecipesRecentviewsRoute,
  getRecipesRoute,
  getRecipesTop25randomRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recipesHandler = app
  .openapi(getRecipesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesRandomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesRavesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesRecentviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesTop25randomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
