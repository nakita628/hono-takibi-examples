import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2ConferencingAppDisconnectRoute,
  getV2ConferencingAppOauthAuthUrlRoute,
  getV2ConferencingAppOauthCallbackRoute,
  getV2ConferencingDefaultRoute,
  getV2ConferencingRoute,
  postV2ConferencingAppConnectRoute,
  postV2ConferencingAppDefaultRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conferencingHandler = app
  .openapi(postV2ConferencingAppConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ConferencingAppOauthAuthUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ConferencingAppOauthCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ConferencingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ConferencingAppDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ConferencingDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ConferencingAppDisconnectRoute, (c) => {
    throw new Error('Not implemented')
  })
