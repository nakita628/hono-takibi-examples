import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWikiRestApiContentIdLabelLabelRoute,
  deleteWikiRestApiContentIdLabelRoute,
  postWikiRestApiContentIdLabelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contentLabelsHandler = app
  .openapi(postWikiRestApiContentIdLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiContentIdLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiContentIdLabelLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
