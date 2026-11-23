import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getListsBestSellersHistoryJsonRoute,
  getListsDateListJsonRoute,
  getListsNamesFormatRoute,
  getListsOverviewFormatRoute,
} from '../routes'

const app = new OpenAPIHono()

export const listsHandler = app
  .openapi(getListsBestSellersHistoryJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsNamesFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsOverviewFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsDateListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
