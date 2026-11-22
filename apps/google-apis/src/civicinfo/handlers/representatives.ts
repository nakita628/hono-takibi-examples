import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCivicinfoV2RepresentativesOcdIdRoute,
  getCivicinfoV2RepresentativesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const representativesHandler = app
  .openapi(getCivicinfoV2RepresentativesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCivicinfoV2RepresentativesOcdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
