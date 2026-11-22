import { OpenAPIHono } from '@hono/zod-openapi'
import { getCivicinfoV2ElectionsRoute, getCivicinfoV2VoterinfoRoute } from '../routes'

const app = new OpenAPIHono()

export const electionsHandler = app
  .openapi(getCivicinfoV2ElectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCivicinfoV2VoterinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
