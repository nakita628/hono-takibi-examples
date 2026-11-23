import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNamesChangesRoute,
  getNamesDecisionsRecentRoute,
  getNamesDecisionsYearRoute,
  getNamesInsideRoute,
  getNamesNameIdOutputFormatRoute,
  getNamesNearRoute,
  getNamesNotOfficialSearchRoute,
  getNamesOfficialSearchRoute,
  getNamesSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const namesHandler = app
  .openapi(getNamesChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamesDecisionsRecentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamesDecisionsYearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamesInsideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamesNearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamesNotOfficialSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamesOfficialSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamesNameIdOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
