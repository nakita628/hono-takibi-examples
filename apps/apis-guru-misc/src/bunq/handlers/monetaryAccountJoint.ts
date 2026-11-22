import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountJointItemIdRoute,
  getUserUserIDMonetaryAccountJointRoute,
  postUserUserIDMonetaryAccountJointRoute,
  putUserUserIDMonetaryAccountJointItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const monetaryAccountJointHandler = app
  .openapi(getUserUserIDMonetaryAccountJointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIDMonetaryAccountJointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountJointItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDMonetaryAccountJointItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
