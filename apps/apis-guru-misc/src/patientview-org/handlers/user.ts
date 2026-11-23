import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIdAvailableobservationheadingsRoute,
  getUserUserIdObservationsCodePatiententeredRoute,
  getUserUserIdObservationsCodeRoute,
  getUserUserIdObservationsRoute,
  getUserUserIdPatiententeredobservationheadingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getUserUserIdAvailableobservationheadingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdObservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdObservationsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdObservationsCodePatiententeredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdPatiententeredobservationheadingsRoute, (c) => {
    throw new Error('Not implemented')
  })
