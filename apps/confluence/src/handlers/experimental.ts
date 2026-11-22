import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWikiRestApiContentIdPageTreeRoute,
  deleteWikiRestApiSpaceSpaceKeyLabelRoute,
  getWikiRestApiSpaceSpaceKeyLabelRoute,
  postWikiRestApiSpaceSpaceKeyLabelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const experimentalHandler = app
  .openapi(deleteWikiRestApiContentIdPageTreeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiSpaceSpaceKeyLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiSpaceSpaceKeyLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiSpaceSpaceKeyLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
