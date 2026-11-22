import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppIdAccountcategoriesIdRoute,
  getAppsAppIdAccountcategoriesIdRoute,
  getAppsAppIdAccountcategoriesIndexRoute,
  postAppsAppIdAccountcategoriesIdRoute,
  postAppsAppIdAccountcategoriesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountCategoriesHandler = app
  .openapi(getAppsAppIdAccountcategoriesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdAccountcategoriesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdAccountcategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdAccountcategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdAccountcategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
