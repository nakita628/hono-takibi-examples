import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAuthorise3dRoute,
  postAuthorise3ds2Route,
  postAuthoriseRoute,
  postGetAuthenticationResultRoute,
  postRetrieve3ds2ResultRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app
  .openapi(postAuthoriseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthorise3dRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthorise3ds2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetAuthenticationResultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRetrieve3ds2ResultRoute, (c) => {
    throw new Error('Not implemented')
  })
