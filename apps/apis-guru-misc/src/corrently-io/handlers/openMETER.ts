import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAlternativeOpenmeterActivitiesRoute,
  getAlternativeOpenmeterMetersRoute,
  getAlternativeOpenmeterReadingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const openMETERHandler = app
  .openapi(getAlternativeOpenmeterActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlternativeOpenmeterMetersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlternativeOpenmeterReadingsRoute, (c) => {
    throw new Error('Not implemented')
  })
