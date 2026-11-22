import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWikiRestApiContentIdStateRoute,
  getWikiRestApiContentIdStateAvailableRoute,
  getWikiRestApiContentIdStateRoute,
  getWikiRestApiContentStatesRoute,
  getWikiRestApiSpaceSpaceKeyStateContentRoute,
  getWikiRestApiSpaceSpaceKeyStateRoute,
  getWikiRestApiSpaceSpaceKeyStateSettingsRoute,
  putWikiRestApiContentIdStateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contentStatesHandler = app
  .openapi(getWikiRestApiContentIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWikiRestApiContentIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiContentIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentIdStateAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiSpaceSpaceKeyStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiSpaceSpaceKeyStateSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiSpaceSpaceKeyStateContentRoute, (c) => {
    throw new Error('Not implemented')
  })
