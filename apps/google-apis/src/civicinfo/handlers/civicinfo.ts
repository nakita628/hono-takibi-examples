import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCivicinfoV2DivisionsRoute,
  getCivicinfoV2ElectionsRoute,
  getCivicinfoV2RepresentativesOcdIdRoute,
  getCivicinfoV2RepresentativesRoute,
  getCivicinfoV2VoterinfoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const civicinfoHandler = app
  .openapi(getCivicinfoV2DivisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCivicinfoV2ElectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCivicinfoV2RepresentativesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCivicinfoV2RepresentativesOcdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCivicinfoV2VoterinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
