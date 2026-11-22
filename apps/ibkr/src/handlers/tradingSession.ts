import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ApiSsoValidateRoute,
  postV1ApiIserverAuthSsodhInitRoute,
  postV1ApiIserverAuthStatusRoute,
  postV1ApiLogoutRoute,
  postV1ApiTickleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tradingSessionHandler = app
  .openapi(postV1ApiIserverAuthSsodhInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverAuthStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiTickleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiSsoValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
