import { OpenAPIHono } from '@hono/zod-openapi'
import { getJourneyJourneyResultsFromToToRoute, getJourneyMetaModesRoute } from '../routes'

const app = new OpenAPIHono()

export const journeyHandler = app
  .openapi(getJourneyJourneyResultsFromToToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJourneyMetaModesRoute, (c) => {
    throw new Error('Not implemented')
  })
