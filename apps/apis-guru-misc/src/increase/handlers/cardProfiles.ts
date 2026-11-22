import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCardProfilesCardProfileIdRoute,
  getCardProfilesRoute,
  postCardProfilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cardProfilesHandler = app
  .openapi(getCardProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardProfilesCardProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
