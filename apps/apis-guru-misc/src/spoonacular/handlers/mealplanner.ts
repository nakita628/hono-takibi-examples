import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMealplannerUsernameDayDateRoute,
  deleteMealplannerUsernameItemsIdRoute,
  deleteMealplannerUsernameShoppingListItemsIdRoute,
  deleteMealplannerUsernameTemplatesIdRoute,
  getMealplannerGenerateRoute,
  getMealplannerUsernameShoppingListRoute,
  getMealplannerUsernameTemplatesIdRoute,
  getMealplannerUsernameTemplatesRoute,
  getMealplannerUsernameWeekStartDateRoute,
  postMealplannerUsernameItemsRoute,
  postMealplannerUsernameShoppingListItemsRoute,
  postMealplannerUsernameShoppingListStartDateEndDateRoute,
  postMealplannerUsernameTemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mealplannerHandler = app
  .openapi(getMealplannerGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMealplannerUsernameDayDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMealplannerUsernameItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMealplannerUsernameItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMealplannerUsernameShoppingListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMealplannerUsernameShoppingListItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMealplannerUsernameShoppingListItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMealplannerUsernameShoppingListStartDateEndDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMealplannerUsernameTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMealplannerUsernameTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMealplannerUsernameTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMealplannerUsernameTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMealplannerUsernameWeekStartDateRoute, (c) => {
    throw new Error('Not implemented')
  })
