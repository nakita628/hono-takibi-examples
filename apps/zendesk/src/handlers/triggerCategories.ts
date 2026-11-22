import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2TriggerCategoriesTriggerCategoryIdRoute,
  getApiV2TriggerCategoriesRoute,
  getApiV2TriggerCategoriesTriggerCategoryIdRoute,
  patchApiV2TriggerCategoriesTriggerCategoryIdRoute,
  postApiV2TriggerCategoriesJobsRoute,
  postApiV2TriggerCategoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const triggerCategoriesHandler = app
  .openapi(getApiV2TriggerCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TriggerCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TriggerCategoriesTriggerCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2TriggerCategoriesTriggerCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TriggerCategoriesTriggerCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TriggerCategoriesJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
