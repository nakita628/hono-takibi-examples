import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCwsCategoriesApisRoute,
  getCwsCategoriesApplicationsApplicationKeyVersionsLatestRoute,
  getCwsCategoriesApplicationsApplicationKeyVersionsRoute,
  getCwsCategoriesApplicationsApplicationKeyVersionsVersionTagRoute,
  getCwsCategoriesApplicationsRoute,
  getCwsCategoriesOperationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cwsCategoriesHandler = app
  .openapi(getCwsCategoriesApisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCwsCategoriesApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCwsCategoriesApplicationsApplicationKeyVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCwsCategoriesApplicationsApplicationKeyVersionsLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCwsCategoriesApplicationsApplicationKeyVersionsVersionTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCwsCategoriesOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
