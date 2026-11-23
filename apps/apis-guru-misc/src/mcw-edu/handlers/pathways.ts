import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPathwaysDiagramsForCategoryCategoryRoute,
  getPathwaysDiagramsSearchSearchStringRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pathwaysHandler = app
  .openapi(getPathwaysDiagramsSearchSearchStringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPathwaysDiagramsForCategoryCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
