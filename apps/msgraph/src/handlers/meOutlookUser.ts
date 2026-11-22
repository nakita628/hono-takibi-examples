import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeOutlookMasterCategoriesOutlookCategoryIdRoute,
  getMeOutlookMasterCategoriesCountRoute,
  getMeOutlookMasterCategoriesOutlookCategoryIdRoute,
  getMeOutlookMasterCategoriesRoute,
  getMeOutlookRoute,
  getMeOutlookSupportedLanguagesRoute,
  getMeOutlookSupportedTimeZonesRoute,
  getMeOutlookSupportedTimeZonesTimeZoneStandardTimeZoneStandardRoute,
  patchMeOutlookMasterCategoriesOutlookCategoryIdRoute,
  postMeOutlookMasterCategoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meOutlookUserHandler = app
  .openapi(getMeOutlookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOutlookMasterCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOutlookMasterCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOutlookMasterCategoriesOutlookCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeOutlookMasterCategoriesOutlookCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeOutlookMasterCategoriesOutlookCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOutlookMasterCategoriesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOutlookSupportedLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOutlookSupportedTimeZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOutlookSupportedTimeZonesTimeZoneStandardTimeZoneStandardRoute, (c) => {
    throw new Error('Not implemented')
  })
