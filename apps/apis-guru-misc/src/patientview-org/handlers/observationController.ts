import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIdObservationsCodePatiententeredRoute,
  getUserUserIdObservationsCodeRoute,
  getUserUserIdObservationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const observationControllerHandler = app
  .openapi(getUserUserIdObservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdObservationsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdObservationsCodePatiententeredRoute, (c) => {
    throw new Error('Not implemented')
  })
