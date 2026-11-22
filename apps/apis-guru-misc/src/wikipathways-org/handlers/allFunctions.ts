import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFindPathwaysByTextRoute,
  getFindPathwaysByXrefRoute,
  getGetColoredPathwayRoute,
  getGetCurationTagHistoryRoute,
  getGetCurationTagsByNameRoute,
  getGetCurationTagsRoute,
  getRemoveCurationTagRoute,
  getSaveCurationTagRoute,
  postCreatePathwayRoute,
} from '../routes'

const app = new OpenAPIHono()

export const allFunctionsHandler = app
  .openapi(postCreatePathwayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFindPathwaysByTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFindPathwaysByXrefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetColoredPathwayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetCurationTagHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetCurationTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetCurationTagsByNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRemoveCurationTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSaveCurationTagRoute, (c) => {
    throw new Error('Not implemented')
  })
