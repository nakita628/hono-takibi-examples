import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAlternativeEaseeLastSessionsRoute,
  getAlternativeOcppLastSessionsRoute,
  getAlternativeOpenmeterActivitiesRoute,
  getAlternativeOpenmeterMetersRoute,
  getAlternativeOpenmeterReadingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const alternativeHandler = app
  .openapi(getAlternativeEaseeLastSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlternativeOcppLastSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlternativeOpenmeterActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlternativeOpenmeterMetersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlternativeOpenmeterReadingsRoute, (c) => {
    throw new Error('Not implemented')
  })
