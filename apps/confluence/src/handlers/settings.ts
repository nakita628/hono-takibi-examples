import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWikiRestApiSettingsLookandfeelCustomRoute,
  getWikiRestApiSettingsLookandfeelRoute,
  getWikiRestApiSettingsSystemInfoRoute,
  postWikiRestApiSettingsLookandfeelCustomRoute,
  putWikiRestApiSettingsLookandfeelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getWikiRestApiSettingsLookandfeelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWikiRestApiSettingsLookandfeelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiSettingsLookandfeelCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiSettingsLookandfeelCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiSettingsSystemInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
