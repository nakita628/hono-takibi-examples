import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWikiRestApiTemplateContentTemplateIdRoute,
  getWikiRestApiTemplateBlueprintRoute,
  getWikiRestApiTemplateContentTemplateIdRoute,
  getWikiRestApiTemplatePageRoute,
  postWikiRestApiTemplateRoute,
  putWikiRestApiTemplateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templateHandler = app
  .openapi(putWikiRestApiTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiTemplateBlueprintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiTemplatePageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiTemplateContentTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiTemplateContentTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
