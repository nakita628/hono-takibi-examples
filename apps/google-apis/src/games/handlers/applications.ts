import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGamesV1ApplicationsApplicationIdRoute,
  getGamesV1ApplicationsApplicationIdVerifyRoute,
  postGamesV1ApplicationsGetEndPointRoute,
  postGamesV1ApplicationsPlayedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsHandler = app
  .openapi(postGamesV1ApplicationsGetEndPointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1ApplicationsPlayedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1ApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1ApplicationsApplicationIdVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
