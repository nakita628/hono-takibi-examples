import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWikiRestApiContentSearchRoute,
  postWikiRestApiContentArchiveRoute,
  postWikiRestApiContentBlueprintInstanceDraftIdRoute,
  putWikiRestApiContentBlueprintInstanceDraftIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contentHandler = app
  .openapi(postWikiRestApiContentArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWikiRestApiContentBlueprintInstanceDraftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiContentBlueprintInstanceDraftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
