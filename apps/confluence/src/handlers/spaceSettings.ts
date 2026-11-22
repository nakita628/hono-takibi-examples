import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWikiRestApiSpaceSpaceKeySettingsRoute,
  putWikiRestApiSpaceSpaceKeySettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const spaceSettingsHandler = app
  .openapi(getWikiRestApiSpaceSpaceKeySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWikiRestApiSpaceSpaceKeySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
