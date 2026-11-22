import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIdAvailableobservationheadingsRoute,
  getUserUserIdPatiententeredobservationheadingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const observationHeadingControllerHandler = app
  .openapi(getUserUserIdAvailableobservationheadingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdPatiententeredobservationheadingsRoute, (c) => {
    throw new Error('Not implemented')
  })
